# 📱 App Store Change Intelligence

![MCP](https://img.shields.io/badge/MCP-Streamable%20HTTP-7c3aed)
![x402](https://img.shields.io/badge/x402-v1%20%2B%20v2-6938ef)
![USDC](https://img.shields.io/badge/settle-USDC%20on%20Base-1f6feb)
![price](https://img.shields.io/badge/from-%240.05%2Fcall-2ea043)

Monitor App Store apps — new reviews, rating and version changes — with automatic negative-review alerts.

Agents pay **peer-to-peer in USDC on Base** using the native **x402** protocol — no platform account, no payment processor, **0% commission**. You can also use a monthly key. One key works across the [whole Change Intelligence family](https://pixharvest.com).

- **Hosted service:** https://s-app.pixharvest.com
- **MCP endpoint:** `https://s-app.pixharvest.com/mcp`
- **Official MCP Registry:** `io.github.contentforge-press/app-intel`
- **npm:** [`app-store-change-intelligence`](https://www.npmjs.com/package/app-store-change-intelligence)

## Try it now

Open a **free, no-key snapshot**: https://s-app.pixharvest.com/v1/snapshot?target=389801252

Target format: `?target=389801252` (numeric App Store track id)

## Tools

| Tool | Price | Returns |
|---|---|---|
| `app_snapshot` | Free | Current version, rating and recent reviews for one app |
| `app_review_changes` | $0.05 | New/removed reviews; flags every new 1–2 star review |
| `app_intel_report` | $0.50 | Sentiment & negative-review report with takeaways |
| `app_batch_scan` | $0.03 / app | Scan up to 50 apps |
| `app_landscape` | $5 | Rank up to 10 apps on rating and risk |

## One-call install for MCP clients

The npm wrapper prints ready-to-paste MCP config:

```bash
npx -y app-store-change-intelligence
```

Or Add the remote server manually to any MCP client (Claude Desktop, Cursor, Windsurf, …):

```json
{
  "mcpServers": {
    "app-intel": {
      "url": "https://s-app.pixharvest.com/mcp"
    }
  }
}
```

Anonymous `initialize` / `tools/list` are free; paid tool calls return an `x402` challenge.

## Pay-per-call (x402)

Call a paid route without payment and you receive `402 Payment Required` with a machine-readable `PAYMENT-REQUIRED` header (x402 v2) plus a v1 JSON body. The agent signs a USDC authorization, retries with the payment header, and the request settles on Base.

## Monthly plans

Same four tiers on every product — the same access key unlocks all five feeds:

| Hobby | Pro | Business | Enterprise |
|---|---|---|---|
| $9/mo | $99/mo | $499/mo | $2000/mo |

Get a key from the [pricing page](https://s-app.pixharvest.com/pricing), then pass it as `?key=...` on any call.

## HTTP quick start

```bash
# free snapshot
curl "https://s-app.pixharvest.com/v1/snapshot?target=REPLACE_TARGET"

# paid call — returns 402 with the x402 challenge
curl -i "https://s-app.pixharvest.com/v1/cli?tool=changes&target=REPLACE_TARGET"
```

## Links

- Company hub: https://pixharvest.com
- GitHub: https://github.com/contentforge-press
- Contact: contentforge.press@outlook.com

## License

MIT — self-host, modify and run it yourself. The hosted service and its data are provided as-is.
