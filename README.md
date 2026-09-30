# App Store Change Intelligence

Monitor public App Store apps — new reviews (with new-negative-review alerts),
rating changes and version updates — over HTTP and MCP. Free snapshot; paid
change intelligence settles in **USDC on Base via x402** (no card, no processor).

- Service: https://app-intel.contentforge-press.workers.dev
- MCP endpoint: `/mcp` (Streamable HTTP)
- Official MCP Registry: `io.github.contentforge-press/app-intel`
- npm: `app-store-change-intelligence`

## MCP tools
| Tool | Price | Output |
|---|---|---|
| `app_snapshot` | free | version, rating, recent reviews |
| `app_review_changes` | $0.05 | new/removed reviews; flags new negative |
| `app_intel_report` | $0.50 | sentiment & negative-review report |

## Plans
Pro **$99/mo** · Business **$499/mo** · Enterprise **$2,000/mo** — self-serve at
`/pricing`; an access key is delivered instantly after USDC payment, and a daily
cron refreshes every active watchlist and pushes webhook/email alerts.

Built on the shared `intel-kernel` engine (x402 billing, subscriptions, dashboard,
scheduled scans) with a small App Store adapter.

## License
MIT
