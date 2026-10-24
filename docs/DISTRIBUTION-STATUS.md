# Docsy public distribution status

Checked **24 October 2026**. A submitted directory listing is **not** an approved marketplace installation.

## Connect directly

- Website: https://docsy.remcp.site
- **Canonical OAuth 2.1 MCP endpoint:** `https://docsy.remcp.site/mcp/registry`
- [Plugin releases](https://github.com/getremcp/docsy-plugin/releases)
- [SDK & CLI repository](https://github.com/getremcp/docsy)
- [Getting started](GETTING-STARTED.md) · [AI client integrations](CLIENT-INTEGRATIONS.md)

The MCP endpoint intentionally returns **401** without authorization. Production `/readyz` returned **200** on 24 October 2026.

## Public listings and packages

| Channel | Public link | Status |
| --- | --- | --- |
| Official MCP Registry | [Docsy](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | Published v1.0.9 |
| AI Anytime Awesome MCP Servers | [Merged PR #313](https://github.com/AIAnytime/Awesome-MCP-Servers/pull/313) | Published in GitHub catalog on 24 Oct 2026 |
| Cursor Directory | [Docsy plugin](https://cursor.directory/plugins/docsy) | Public page verified 24 Oct 2026; Add to Cursor uses the canonical OAuth MCP endpoint |
| Glama | [Docsy connector](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) | Listed; publisher-claimed, five tools |
| Sagargupta Awesome MCP Servers | [Merged listing PR #212](https://github.com/Sagargupta16/awesome-mcp-servers/pull/212) | PR merged 24 Oct 2026; included in the GitHub catalog |
| Awesome Remote MCP Servers | [Docsy entry](https://github.com/punkpeye/awesome-remote-mcp-servers/blob/main/README.md) | Public listing; confirmed from upstream GitHub README 24 Oct 2026 |
| mcpub | [Directory](https://mcpub.dev/) | Registered 24 Oct 2026; unique permalink not confirmed |
| Launch MCP | [Public Docsy listing](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin) | HTTP 200 on 24 Oct 2026 |
| LibHunt | [Docsy SDK & CLI](https://www.libhunt.com/r/getremcp/docsy) | Public source listing |
| GitHub | [Plugin stable v1.0.9](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.9) | Stable release |
| GitHub | [Plugin prerelease v1.0.10](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.10) | Review candidate, not official approval |
| npm | [SDK](https://www.npmjs.com/package/@remcp/docsy-sdk) · [CLI](https://www.npmjs.com/package/@remcp/docsy-cli) | Published packages |
| Claude Code community | [Marketplace manifest](../.claude-plugin/marketplace.json) | GitHub-installable; not official Anthropic approval |
| Gemini CLI | [Extension release](https://github.com/getremcp/docsy/releases/tag/gemini-v1.0.0) | GitHub release; not official gallery approval |

## GitHub submissions pending third-party review

Fifteen PRs below were submitted or checked **open on 24 October 2026**; do not create duplicate PRs.

| Channel | Pending PR |
| --- | --- |
| Cline | [#332](https://github.com/cline/marketplace/pull/332) |
| Kilo | [#478](https://github.com/Kilo-Org/kilo-marketplace/pull/478) |
| ToolSDK | [#1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016) |
| mcpHQ | [#397](https://github.com/mcpHQ/awesome-mcp-servers/pull/397) |
| Ever Works Awesome MCP Servers | [#212](https://github.com/ever-works/awesome-mcp-servers/pull/212) — review pending |
| Awesome DevOps MCP Servers | [#382](https://github.com/rohitg00/awesome-devops-mcp-servers/pull/382) — review pending |
| MindPal Awesome Remote MCP Servers | [#230](https://github.com/sylviangth/awesome-remote-mcp-servers/pull/230) — review pending |
| YuzeHao Awesome MCP Servers | [#718](https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/718) — review pending |
| Awesome Remote MCP Servers (jaw9c) | [#1636](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1636) — review pending |
| Brethof AI Awesome MCP Servers | [#53](https://github.com/BrethofAI/awesome-mcp-servers/pull/53) — review pending |
| Docker MCP Registry | [#6062](https://github.com/docker/mcp-registry/pull/6062) — review pending |
| ToolHive | [#1781](https://github.com/stacklok/toolhive-catalog/pull/1781) |
| best-of-mcp-servers | [#561](https://github.com/tolkonepiu/best-of-mcp-servers/pull/561) |
| MobinX | [#926](https://github.com/MobinX/awesome-mcp-list/pull/926) |
| TensorBlock | [#4485 (draft)](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) |

## Other submitted channels (not independently approved)

[MCPRepository](https://mcprepository.com/getremcp/docsy-plugin) accepted the Docsy GitHub repo for indexing on 24 Oct 2026: `valid: true`, `status: queued`, `duplicate: false`. The generated permalink currently returns HTTP 404, so this is **not** a verified published listing.

Also confirmed: [MCP.Directory](https://mcp.directory/submit) returned HTTP 409 for the Docsy GitHub URL on 24 October 2026, reporting that the repository had already been submitted and is awaiting review. No duplicate submission was made.

Previously submitted on 24 October 2026: [CheckMCP](https://checkmcp.dev/submit), [ProMCP](https://www.promcpservers.com/submit), [MCPfinder](https://www.mcpfinder.org/submit), [AIBase](https://aibase.com/user/submitManage?tab=mcp), [ClaudePluginHub](https://www.claudepluginhub.com/tools/submit-plugin), [MCP Index](https://themcpindex.com/submit), [MCP Market](https://mcpmarket.com/submit), [MCP Servers](https://mcpservers.org/submit), and [GitHub VS Code/Copilot onboarding](https://github.com/github/github-mcp-server/discussions/1257#discussioncomment-19165953).

[Plug and Ship](https://plugandship.dev/p/docsy-mcp) is scheduled for **11 November 2026**, not launched. The [mcpservers.org listing URL](https://mcpservers.org/servers/getremcp/docsy-plugin) appeared in search results, but direct automated verification returned **403** on 24 October 2026, so it is not marked independently verified.

[MCP Harbor](https://mcpharbor.app/submit/) confirmed receipt of the free Docsy GitHub submission on 24 October 2026. The review and daily indexing are still pending; this is not yet a verified public listing.

The Plug and Ship submission was confirmed again on 24 October with a free launch date of **12 November 2026**, while this document previously recorded **11 November 2026**. The discrepancy is not resolved by the public listing page; verify the actual scheduled launch using the publisher confirmation before asserting one definitive date. The [public Docsy page](https://plugandship.dev/p/docsy-mcp) is accessible independently of the scheduled daily launch.

## Smithery sunset — 31 October 2026

[Smithery's official notice](https://smithery.ai/future) confirms that API, hosted proxies at `server.smithery.ai` and `run.tools`, Connect, Toolbox, accounts and keys, CLI and SDKs stop on **31 October 2026**. Smithery remains a curated, non-proxied directory under Arcade.dev.

Docsy's earlier update returned `403 Updating servers has been removed`: this is a retired publishing API, **not** a broken Docsy MCP. No new Smithery listing is claimed. Do not offer Smithery CLI/proxy installation. Keep Docsy OAuth 2.1 and Cloudflare protections.

**Statuses:** Published means verified public listing; submitted means awaiting review; scheduled means future release. Never equate listings with official OpenAI, Anthropic or Cursor marketplace approval.
