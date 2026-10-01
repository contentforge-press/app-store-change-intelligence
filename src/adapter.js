// App Store Change Intelligence —— 适配器（仅 App Store 平台）
// 监控公开 App Store 应用的：评论变化（新增差评/好评）、评分变化、版本更新。
import { renderHome, renderPricing, renderDashboard, renderLegal, renderStatus, renderChangelog } from './pages.js';

const ID = 'app-intel';
const TITLE = 'App Store Change Intelligence';
const VERSION = '1.0.0';
const BASE_HOST = 'app-intel.contentforge-press.workers.dev';

// ---- 安全 ----
const BLOCKED_SUB = ['localhost', '127.', '0.0.', '10.', '192.', '169.', '::1', '.internal', 'metadata', 'example.com'];
function safeHandle(h) {
    if (typeof h !== 'string') return '';
    const s = h.trim().toLowerCase();
    if (s.length > 80 || /[^a-z0-9_\-.:]/.test(s)) return '';
    if (BLOCKED_SUB.some(b => s.includes(b))) return '';
    return s;
}
// 目标：纯数字 App ID（如 389801252），或 id<digits>
function parseTarget(input) {
    const s = safeHandle(input); if (!s) return null;
    let m = s.match(/(?:id)?(\d{5,})$/); if (!m) return null;
    return { platform: 'appstore', handle: m[1] };
}

// ---- 取数 ----
const APPLE_HEADERS = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
    accept: 'application/json, text/javascript, */*;q=0.8',
    'accept-language': 'en-US,en;q=0.9',
    referer: 'https://www.apple.com/',
};
const sleep = ms => new Promise(r => setTimeout(r, ms));

// JSON lookup：Apple 边缘对 Cloudflare 出口间歇性 403，多重试几次
async function getJsonWithRetry(u, tries = 6) {
    let last = 0;
    for (let i = 0; i < tries; i++) {
        const r = await fetch(u, { headers: APPLE_HEADERS });
        if (r.ok) return r.json();
        last = r.status;
        if (r.status !== 403 && r.status !== 429) break;
        await sleep(700 * (i + 1));
    }
    throw new Error('upstream_' + last + ' ' + u.replace('https://itunes.apple.com', ''));
}

// 评论改用 XML 源（JSON 评论源在 Cloudflare 出口被封，XML 源可达）
function decodeEntities(s) {
    return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
function tag(block, name) {
    const m = block.match(new RegExp('<' + name + '[^>]*>([\\s\\S]*?)</' + name + '>'));
    return m ? decodeEntities(m[1].trim()) : '';
}
async function fetchReviewsXml(id) {
    const url = `https://itunes.apple.com/us/rss/customerreviews/id=${encodeURIComponent(id)}/sortBy=mostRecent/xml`;
    let r = await fetch(url, { headers: { ...APPLE_HEADERS, accept: 'application/xml, text/xml' } });
    if (r.status === 403) { await sleep(800); r = await fetch(url, { headers: { ...APPLE_HEADERS, accept: 'application/xml, text/xml' } }); }
    if (!r.ok) throw new Error('upstream_' + r.status + ' reviews-xml');
    const xml = await r.text();
    const entries = xml.split('<entry>').slice(1).map(e => e.split('</entry>')[0]);
    return entries.map(e => ({
        reviewId: tag(e, 'id'),
        rating: Number(tag(e, 'im:rating') || 0),
        title: tag(e, 'title'),
        author: tag(e, 'author').replace(/<[^>]*>/g, '').trim(),
        updated: tag(e, 'updated'),
        version: tag(e, 'im:version'),
        content: tag(e, 'content'),
    }));
}

async function fetchMeta(id) {
    const d = await getJsonWithRetry(`https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}`);
    const x = d.results && d.results[0];
    if (!x) throw new Error('app_not_found');
    return { id, name: x.trackName, version: x.version, rating: x.averageUserRating, ratingCount: x.userRatingCount, seller: x.sellerName };
}

// 归一化单条评论（保留以兼容，实际走 XML）
function normReview(e) {
    const id = e.id?.label || e.id?.['im:id'] || '';
    return {
        reviewId: String(id).split('/').pop() || id,
        rating: Number(e['im:rating']?.label ?? 0),
        title: e.title?.label || '',
        author: e.author?.name?.label || '',
        updated: e.updated?.label || '',
    };
}

function metaCacheKey(id) { return `appmeta-${id}`; }

// fetchMeta 带 KV 缓存：lookup 被边缘拦截时回退到上次成功的元数据
async function fetchMetaCached(id, kv) {
    try {
        const meta = await fetchMeta(id);
        if (kv) { try { await kv.put(metaCacheKey(id), JSON.stringify({ ...meta, cachedAt: new Date().toISOString() })); } catch (e) {} }
        return meta;
    } catch (e) {
        if (kv) {
            const raw = await kv.get(metaCacheKey(id));
            if (raw) { const m = JSON.parse(raw); delete m.cachedAt; return m; }
        }
        throw e;
    }
}

async function fetchSnapshot({ handle }, kv) {
    const id = handle;
    const meta = await fetchMetaCached(id, globalThis.__APP_KV__);
    const items = await fetchReviewsXml(id);
    return { platform: 'appstore', handle: id, meta, items };
}

// ---- 差异 ----
function diff(prev, curr) {
    const out = [];
    const byId = new Map(prev.map(x => [x.reviewId, x]));
    const curIds = new Set(curr.map(x => x.reviewId));
    for (const c of curr) {
        const old = byId.get(c.reviewId);
        if (!old) {
            out.push({ changeType: c.rating <= 2 ? 'new_negative_review' : 'new_review', reviewId: c.reviewId, rating: c.rating, title: c.title });
        }
    }
    for (const p of prev) if (!curIds.has(p.reviewId)) out.push({ changeType: 'review_removed', reviewId: p.reviewId, title: p.title });
    return out;
}

// ---- 汇总 ----
function buildReport(meta, items, changes) {
    const neg = items.filter(x => x.rating <= 2).length;
    const recentNeg = changes.filter(c => c.changeType === 'new_negative_review').length;
    return {
        app: meta.name, version: meta.version, rating: meta.rating,
        totalReviewsSampled: items.length, negativeInSample: neg, newChanges: changes.length, newNegative: recentNeg,
        takeaways: [
            recentNeg > 0 ? `⚠️ ${recentNeg} new negative review(s) — possible issue after v${meta.version}` : 'No new negative reviews in latest sample',
            `Current average rating ${meta.rating} across ${meta.ratingCount} ratings`,
            neg > items.length * 0.3 ? 'High share of negative recent reviews; investigate top complaints' : 'Recent sentiment is mostly positive',
        ],
    };
}

function kvKey(platform, handle) { return `snap-${platform}-${handle}`; }

export const adapter = {
    id: ID, title: TITLE, version: VERSION,
    safeHandle, parseTarget, fetchSnapshot, diff, kvKey,
    async snapshot(t) {
        const s = await fetchSnapshot(t);
        return { platform: s.platform, target: s.handle, app: s.meta.name, version: s.meta.version, rating: s.meta.rating, recentReviews: s.items.length, sample: s.items.slice(0, 20) };
    },
    planFeatures: {
        pro: ['Track up to 25 apps', 'New review & rating alerts', 'Negative-review watch', 'All paid MCP tools', 'Email + webhook'],
        business: ['Track up to 150 apps', '10 team seats', 'Higher API limits', 'Version & sentiment reports', 'Priority support'],
        enterprise: ['Unlimited apps & seats', 'Custom signals & private feeds', 'SLA & onboarding', 'SSO & advanced controls', 'Dedicated reports'],
    },
    mcpTools: [
        { name: 'app_snapshot', description: 'Free — current version, rating and recent reviews for an App Store app. Target = numeric app id.',
          inputSchema: { type: 'object', properties: { target: { type: 'string' } }, required: ['target'] },
          price: () => 0, run: async (a) => (await adapter.snapshot(parseTarget(a.target))) },
        { name: 'app_review_changes', description: 'PAID ($0.05 USDC on Base via x402). Review change detection vs history: new reviews, removed reviews, and flags every new negative review (1-2 stars). Use for "did our app get bad reviews", review monitoring, complaint/bug outbreak alerts, reputation-risk tracking after a release.',
          inputSchema: { type: 'object', properties: { target: { type: 'string' } }, required: ['target'] },
          price: () => 0.05, run: async (a, env) => adapter._changes(a.target) },
        { name: 'app_intel_report', description: '$0.50 — sentiment & negative-review report with takeaways.',
          inputSchema: { type: 'object', properties: { target: { type: 'string' } }, required: ['target'] },
          price: () => 0.5, run: async (a) => adapter._report(a.target) },
        { name: 'app_batch_scan', description: '$0.03/app — scan up to 50 App Store apps (version, rating, recent negatives).',
          inputSchema: { type: 'object', properties: { targets: { type: 'array', items: { type: 'string' } } }, required: ['targets'] },
          price: (a) => (a.targets || []).slice(0, 50).length * 0.03, run: async (a) => adapter._batch(a.targets) },
        { name: 'app_landscape', description: '$5 — app landscape across up to 10 apps with rating ranking and risk flags.',
          inputSchema: { type: 'object', properties: { targets: { type: 'array', items: { type: 'string' } } }, required: ['targets'] },
          price: () => 5, run: async (a) => adapter._landscape(a.targets) },
    ],
    async _changes(targetStr) {
        const t = parseTarget(targetStr); const s = await fetchSnapshot(t);
        // first call: no history
        return { target: s.handle, app: s.meta.name, note: 'first_snapshot_baseline', recent: s.items.slice(0, 20) };
    },
    winEvidence(kind, args, result) {
        const d = result?.data ?? result;
        if (kind === 'changes') return `Checked reviews for ${args.target}: ${d.recent?.length || 0} recent reviews fetched`;
        if (kind === 'intel') return `Sentiment & negative-review report for ${args.target}`;
        if (kind === 'batch') return `Scanned ${d.scanned ?? (args.targets || []).length} apps`;
        if (kind === 'landscape') return `Landscape across ${(args.targets || []).length} apps`;
        return `${kind} call`;
    },
    cliAttribution: `${TITLE} — free via x402 · remove attribution with Hobby $9/mo`,
    async _report(targetStr) {
        const t = parseTarget(targetStr); const s = await fetchSnapshot(t);
        return buildReport(s.meta, s.items, []);
    },
    async _batch(targets) {
        const list = Array.isArray(targets) ? targets.slice(0, 50) : [];
        const out = [];
        await Promise.all(list.map(async (raw) => {
            const t = parseTarget(raw); if (!t) return;
            try {
                const s = await fetchSnapshot(t);
                const neg = s.items.filter(x => x.rating <= 2).length;
                out.push({ target: s.handle, app: s.meta.name, version: s.meta.version, rating: s.meta.rating, recentReviews: s.items.length, recentNegative: neg });
            } catch (e) { out.push({ target: raw, error: String(e?.message || e) }); }
        }));
        return { scanned: out.length, apps: out };
    },
    async _landscape(targets) {
        const list = Array.isArray(targets) ? targets.slice(0, 10) : [];
        const b = await adapter._batch(list);
        const ranked = b.apps.filter(x => !x.error).sort((x, y) => (y.rating || 0) - (x.rating || 0));
        return {
            compared: ranked.length,
            ranking: ranked.map((x, i) => ({ rank: i + 1, app: x.app, rating: x.rating, version: x.version, recentNegative: x.recentNegative })),
            takeaways: ranked.length ? [
                `Highest rated: ${ranked[0].app} (${ranked[0].rating})`,
                ranked[ranked.length - 1] ? `Watch: ${ranked[ranked.length - 1].app} has the lowest rating in this set` : '',
                ranked.filter(x => x.recentNegative > 2).map(x => `⚠️ ${x.app} has ${x.recentNegative} recent negative reviews`).join('; ') || 'No app shows a spike in recent negative reviews',
            ].filter(Boolean) : [],
        };
    },
    llmsTxt: (c) => `# ${TITLE}\n\n> Track public App Store apps: new reviews, ratings, version updates. Free snapshot; paid intel in USDC via x402 on Base.\n\n- MCP: https://${c.HOST}/mcp\n- Free: https://${c.HOST}/v1/snapshot?target=389801252\n- Docs: https://${c.HOST}/docs\n\n## When to use\n- An agent needs to know if an app just got new negative reviews or a version update.\n- A team wants review sentiment and rating signals across a portfolio of apps.\n\n## Tools\n- app_snapshot: free\n- app_review_changes: $0.05 — new/removed reviews, negative-review flags\n- app_intel_report: $0.50 — sentiment & negative-review report\n- app_batch_scan: $0.03 per app (up to 50)\n- app_landscape: $5 (up to 10 apps)\n\n## Example asks\n- "Did this app get new negative reviews today?"\n- "What's the rating trend for this app?"\n- "Rank these apps by rating and flag risk."\n\nTarget syntax: numeric App Store ID. Paid calls settle USDC on Base with x402, or pay directly (no AI wallet required).\n`,
    docsMd: (c) => `# ${TITLE} — Documentation\n\nA paid change-intelligence API for public App Store apps, designed to be called by AI agents and automation.\n\n## Endpoints\n| Endpoint | Price | Returns |\n|---|---|---|\n| GET /v1/snapshot?target=<appId> | free | version, rating, recent reviews |\n| app_review_changes | $0.05 | new/removed reviews vs history, negative flags |\n| app_intel_report | $0.50 | sentiment & negative-review report |\n| app_batch_scan | $0.03/app | up to 50 apps in one call |\n| app_landscape | $5 | rating ranking across up to 10 apps, risk flags |\n\n## Target format\nThe numeric App Store app ID, for example \`389801252\` (Instagram).\n\n## Payment\n- Agents: unpaid calls return HTTP 402 with a base64 PAYMENT-REQUIRED header; settle USDC on Base via x402 and retry. P2P, 0% commission.\n- Humans: choose a plan on /pricing, send the exact USDC amount shown, and the access key is issued automatically — no card or AI wallet needed.\n- One access key works across the whole change-intelligence product family.\n\n## Subscriptions\nPro $99/month (25 apps), Business $499/month (150), Enterprise $2000/month (unlimited). Continuous watch and change alerts.\n\nMCP endpoint (Streamable HTTP): https://${c.HOST}/mcp\n`,
    sitemapXml: (c) => `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://${c.HOST}/</loc></url><url><loc>https://${c.HOST}/pricing</loc></url><url><loc>https://${c.HOST}/docs</loc></url><url><loc>https://${c.HOST}/dashboard</loc></url></urlset>`,
    wellKnown: (c) => ({
        x402Version: 1, network: c.NETWORK, chainId: c.CHAIN_ID, asset: c.USDC_BASE, payTo: c.PAY_TO, facilitator: c.FACILITATOR,
        pricing: { changes: c.PRICE_CHANGES_USD, intel: c.PRICE_INTEL_USD, batchPerApp: c.PRICE_PER_TARGET_USD, landscape: c.PRICE_LANDSCAPE_USD },
    }),

    STATUS_TARGET: '389801252',
    renderStatus, renderChangelog, renderHome, renderPricing, renderDashboard, renderLegal,
};

