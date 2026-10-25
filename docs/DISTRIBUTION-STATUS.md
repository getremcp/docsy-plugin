# Docsy public distribution status

Checked **25 October 2026**. A submitted directory listing is **not** an approved marketplace installation.

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
| TensorBlock MCP Index | [Merged PR #4485](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) | Accepted 25 Oct 2026; API index propagation tracked separately |
| Cursor Directory | [Docsy plugin](https://cursor.directory/plugins/docsy) | Public page verified 24 Oct 2026; Add to Cursor uses the canonical OAuth MCP endpoint |
| Glama | [Docsy connector](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) | Listed; publisher-claimed, five tools |
| Sagargupta Awesome MCP Servers | [Merged listing PR #212](https://github.com/Sagargupta16/awesome-mcp-servers/pull/212) | PR merged 24 Oct 2026; included in the GitHub catalog |
| Awesome Remote MCP Servers | [Docsy entry](https://github.com/punkpeye/awesome-remote-mcp-servers/blob/main/README.md) | Public listing; confirmed from upstream GitHub README 24 Oct 2026 |
| mcpub | [Directory](https://mcpub.dev/) | Registered 24 Oct 2026; unique permalink not confirmed |
| Launch MCP | [Public Docsy listing](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin) | HTTP 200 on 24 Oct 2026 |
| MCPRepository | [Docsy public listing](https://mcprepository.com/getremcp/docsy-plugin) | Verified public 25 Oct 2026: HTTP 200, title `Docsy MCP Plugin - MCP Server`, source `getremcp/docsy-plugin` |
| LibHunt | [Docsy SDK & CLI](https://www.libhunt.com/r/getremcp/docsy) | Public source listing |
| Ext Ops Panel | [Docsy MCP profile](https://extops.dev/plugins/mcp/io.github.getremcp/docsy) | Public indexed page verified 25 Oct 2026 with Docsy title and official registry identity; independent discovery, not endorsement |
| Walnut World | [Docsy plugin](https://walnut.world/w/docsy-plugin) · [Docsy SDK/CLI](https://walnut.world/w/docsy) | Both published 25 Oct 2026, pages indexed from `getremcp`; publisher ownership unclaimed |
| GitHub | [Plugin stable v1.0.9](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.9) | Stable release |
| GitHub | [Plugin prerelease v1.0.10](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.10) | Review candidate, not official approval |
| npm | [SDK](https://www.npmjs.com/package/@remcp/docsy-sdk) · [CLI](https://www.npmjs.com/package/@remcp/docsy-cli) | Published packages |
| Claude Code community | [Marketplace manifest](../.claude-plugin/marketplace.json) | GitHub-installable; not official Anthropic approval |
| Gemini CLI | [Extension release](https://github.com/getremcp/docsy/releases/tag/gemini-v1.0.0) | GitHub release; not official gallery approval |

**Closed review:** [AlexMili Awesome MCP #326](https://github.com/AlexMili/Awesome-MCP/pull/326) closed 24 Oct 2026: the directory requires MCP server source; `docsy-plugin` contains host integration metadata and is not the hosted server implementation. Do not resubmit this plugin as a server source without changing eligibility.

## GitHub submissions pending third-party review

Twenty-four PRs below were submitted and remained **open when checked on 25 October 2026**; do not create duplicate PRs.

| Channel | Pending PR |
| --- | --- |
| Cline | [#332](https://github.com/cline/marketplace/pull/332) |
| Kilo | [#478](https://github.com/Kilo-Org/kilo-marketplace/pull/478) |
| ToolSDK | [#1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016) |
| mcpHQ | [#397](https://github.com/mcpHQ/awesome-mcp-servers/pull/397) |
| Awesome Claude Code Plugins | [#821](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821) — review pending |
| Awesome Gemini CLI Extensions | [#96](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/96) — review pending |
| Collabnix Awesome MCP Lists | [#264](https://github.com/collabnix/awesome-mcp-lists/pull/264) — review pending |
| mctrinh Awesome MCP Servers | [#179](https://github.com/mctrinh/awesome-mcp-servers/pull/179) — review pending |

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
| VoltAgent Official MCP Servers | [#55](https://github.com/VoltAgent/official-mcp-servers/pull/55) — review pending |
| Awesome Public MCP Servers | [#83](https://github.com/bhavyshekhaliya/awesome-public-mcp-servers/pull/83) — review pending |
| Awesome MCP Tools | [#20](https://github.com/Christian-Sidak/awesome-mcp-tools/pull/20) — review pending |
| PenguinMiaou Awesome Claude Code Plugins | [#10](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/10) — review pending |
| itgoyo Awesome Claude Code | [#19](https://github.com/itgoyo/awesome-claude-code/pull/19) — review pending |
| Claude Plugins Radar | [#3](https://github.com/iliasabk/claude-plugins-radar/pull/3) — review pending |

## Other submitted channels (not independently approved)

[ClaudeMods editorial submission #34](https://github.com/omarcevi/claudemods/issues/34) was filed on 25 October 2026 for Docsy; its review/bot-generated catalog PR is not yet confirmed.

MCPRepository accepted Docsy for indexing on 24 Oct and completed publication by 25 Oct. The [public Docsy listing](https://mcprepository.com/getremcp/docsy-plugin) was verified with HTTP 200, the exact title and the linked `getremcp/docsy-plugin` repository. Listed above as published.

Also confirmed: [MCP.Directory](https://mcp.directory/submit) returned HTTP 409 for the Docsy GitHub URL on 24 October 2026, reporting that the repository had already been submitted and is awaiting review. No duplicate submission was made.

Previously submitted on 24 October 2026: [CheckMCP](https://checkmcp.dev/submit), [ProMCP](https://www.promcpservers.com/submit), [MCPfinder](https://www.mcpfinder.org/submit), [AIBase](https://aibase.com/user/submitManage?tab=mcp), [ClaudePluginHub](https://www.claudepluginhub.com/tools/submit-plugin), [MCP Index](https://themcpindex.com/submit), [MCP Market](https://mcpmarket.com/submit), [MCP Servers](https://mcpservers.org/submit), and [GitHub VS Code/Copilot onboarding](https://github.com/github/github-mcp-server/discussions/1257#discussioncomment-19165953).

[MCPizy](https://mcpizy.com/submit/thanks?ref=web_mvnk6me0_a8jruk&tier=standard) acknowledged Docsy submission on 25 Oct 2026 (ID `web_mvnk6me0_a8jruk`) in its free review queue; it is not yet verified publicly.

[Plug and Ship](https://plugandship.dev/p/docsy-mcp) has an accessible public listing page. Its free daily-board launch is scheduled for **12 November 2026** according to the submission confirmation. The [mcpservers.org listing URL](https://mcpservers.org/servers/getremcp/docsy-plugin) appeared in search results, but direct automated verification returned **403** on 24 October 2026, so it is not marked independently verified.

[FindMCP](https://findmcp.app/submit) accepted the Docsy MCP submission via API on 25 Oct 2026, returning `{ "success": true, "message": "Submission received for review", "data": { "id": 320, "slug": "docsy" } }`. This is a review-queue acknowledgment, not confirmation of public publication.

[Few Servers](https://www.fewservers.com/mcp/submit/) returned an email handoff (the form does not store submissions). A separate listing/claim request for Docsy was sent to the address given by the site on 25 October 2026, and Gmail returned a sent-message ID. External review and any claim verification are outstanding; **do not mark this published**.

[AgenticSkills](https://agenticskills.io/submit?type=mcp) confirmed `MCP Server Submitted!` for Docsy on 25 October 2026. Free submission is in a weekly review queue; no public entry has yet been verified.

[MCP Harbor](https://mcpharbor.app/submit/) confirmed receipt of a free Docsy GitHub submission on 24 October 2026 and returned the submission acknowledgment again on 25 October 2026. The review and daily indexing are still pending; this is not yet a verified public listing.

The publisher confirmation page directly displayed the free-queue date **12 November 2026** for Docsy on 24 October 2026. The earlier 11 November date was superseded. The [public Docsy page](https://plugandship.dev/p/docsy-mcp) is already accessible independently of the daily-board launch.

## Smithery sunset — 31 October 2026

[Smithery's official notice](https://smithery.ai/future) confirms that API, hosted proxies at `server.smithery.ai` and `run.tools`, Connect, Toolbox, accounts and keys, CLI and SDKs stop on **31 October 2026**. Smithery remains a curated, non-proxied directory under Arcade.dev.

Docsy's earlier update returned `403 Updating servers has been removed`: this is a retired publishing API, **not** a broken Docsy MCP. No new Smithery listing is claimed. Do not offer Smithery CLI/proxy installation. Keep Docsy OAuth 2.1 and Cloudflare protections.

**Statuses:** Published means verified public listing; submitted means awaiting review; scheduled means future release. Never equate listings with official OpenAI, Anthropic or Cursor marketplace approval.
