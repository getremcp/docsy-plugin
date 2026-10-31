# Docsy public distribution status

> **Live verification snapshot — 31 October 2026.** The tables below retain historical submissions and earlier audit dates. Never infer current approval from an older “pending” row.


## Verified snapshot — 31 October 2026

The official [MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.getremcp%2Fdocsy/versions/latest) API reports **active** `io.github.getremcp/docsy` **1.0.9** pointing to the canonical OAuth endpoint `/mcp/registry`. The old [`io.github.antonbaider/docsy` 1.0.5](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.antonbaider%2Fdocsy/versions/1.0.5) record is **deprecated**, not another current release.

**Fresh direct page checks** (HTTP 200 with Docsy-specific page content): [Glama](https://glama.ai/mcp/connectors/io.github.getremcp/docsy), [LobeHub v1.0.9](https://lobehub.com/mcp/getremcp-docsy-plugin), [Launch MCP](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin), [MCPRepository](https://mcprepository.com/getremcp/docsy-plugin), [Ext Ops Panel](https://extops.dev/plugins/mcp/io.github.getremcp/docsy), [LibHunt](https://www.libhunt.com/r/getremcp/docsy), and [Walnut World](https://walnut.world/w/docsy-plugin) ([SDK/CLI listing](https://walnut.world/w/docsy)). npm registry confirms [SDK 0.1.2](https://www.npmjs.com/package/@remcp/docsy-sdk) and [CLI 0.1.4](https://www.npmjs.com/package/@remcp/docsy-cli). Last-month downloads for **30 September–29 October 2026**: **717 SDK + 846 CLI = 1,563 package downloads** (not unique users).

**Access limitations:** [Cursor Directory](https://cursor.directory/plugins/docsy) returned an HTTP 429 security checkpoint; this does not establish removal. The [ChatGPT plugin URL](https://chatgpt.com/plugins/plugin_asdk_app_6ad6814ca7708191956117b3a3b58eb5) varied between generic ChatGPT HTML and HTTP 403 from anonymous clients; independent marketplace approval and in-client availability remain unverified. [mcpub](https://mcpub.dev/) homepage was reachable, but no unique Docsy listing was verified. Smithery's hosted proxy/API/CLI shut down on 31 October; do not use the retired proxy for installation.

**GitHub PR audit:** 42 distinct upstream directory/editorial PRs inspected on 31 October (37 from the original 25 October queue plus 5 international submissions): **33 open, 6 merged, 2 closed without merge, 1 inaccessible (HTTP 404)**. The six merges are [ToolSDK #1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016), [mcpHQ #452](https://github.com/mcpHQ/awesome-mcp-servers/pull/452), [Collabnix #279](https://github.com/collabnix/awesome-mcp-lists/pull/279), [VoltAgent #55](https://github.com/VoltAgent/official-mcp-servers/pull/55), [PenguinMiaou #12](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/12), and [Awesome AI Coding Tools #10](https://github.com/mahmoudsajjadi/awesome-ai-coding-tools/pull/10). Closed: [ToolHive #1791](https://github.com/stacklok/toolhive-catalog/pull/1791) and [Awesome Codex #33](https://github.com/ichangyou/awesome-codex/pull/33). Unavailable: [ccplugins #821](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821).

This is a **dated verification snapshot**, not real-time marketplace availability. Merged community PRs are not official client-vendor approvals. See the [site publication status](https://docsy.remcp.site/distribution) and the older per-channel audit history below.


- **ChatGPT:** [Open the publisher-provided Docsy plugin link](https://chatgpt.com/plugins/plugin_asdk_app_6ad6814ca7708191956117b3a3b58eb5). Anonymous automated access returned HTTP 403, so public marketplace visibility could not be independently established.
- **Official MCP Registry:** [`io.github.getremcp/docsy` v1.0.9](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.getremcp%2Fdocsy/versions/latest) returned HTTP 200 and the canonical `/mcp/registry` remote.
- **Live MCP:** anonymous `/mcp/public` `initialize`, `tools/list`, `resolve-library-id`, `query-docs` HTTP 200; protected `/mcp/registry` HTTP 401 without OAuth.
- **npm:** `@remcp/docsy-sdk` **0.1.2** and `@remcp/docsy-cli` **0.1.4** resolved from the npm registry.
- **GitHub:** public [plugin-v1.0.9 stable](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.9); [plugin-v1.0.10](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.10) is a prerelease, not an approved marketplace listing.
- **Glama:** [Docsy connector page](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) returned HTTP 200.
- **Community merges confirmed:** [AI Anytime #313](https://github.com/AIAnytime/Awesome-MCP-Servers/pull/313), [TensorBlock #4485](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) and [Sagargupta #212](https://github.com/Sagargupta16/awesome-mcp-servers/pull/212).
- **Cursor Directory:** [Docsy page](https://cursor.directory/plugins/docsy) returned HTTP 429 to the current automated check; previously verified listing remains historical, not freshly confirmed.
- **Smithery:** [official transition notice](https://smithery.ai/future) says its hosted proxy, API, CLI and SDK shut down on 31 October 2026; directory listings are distinct from usable proxy URLs.

**Review queue recheck:** of the 37 PR links recorded as open on 25 October, **28 open**, **6 merged**, **2 closed without merge**, **1 not retrievable** on 31 October. The newly merged entries are [ToolSDK #1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016), [mcpHQ #452](https://github.com/mcpHQ/awesome-mcp-servers/pull/452), [Collabnix #279](https://github.com/collabnix/awesome-mcp-lists/pull/279), [VoltAgent #55](https://github.com/VoltAgent/official-mcp-servers/pull/55), [PenguinMiaou #12](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/12) and [Awesome AI Coding Tools #10](https://github.com/mahmoudsajjadi/awesome-ai-coding-tools/pull/10). [ToolHive #1791](https://github.com/stacklok/toolhive-catalog/pull/1791) and [Awesome Codex #33](https://github.com/ichangyou/awesome-codex/pull/33) were closed without merge. [ccplugins #821](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821) could not be verified by the linked GitHub account. No claim is made that merged directory PRs are official vendor marketplace approval.

---

> **Directory PR recovery (27 October 2026):** Deleted source forks from the 26 October cleanup have been recreated. [36 recovered PRs and the original-to-new mapping](#directory-pr-recovery-27-october-2026) are verified open and awaiting upstream review. Previous merged listings remain unchanged.

Checked **25 October 2026**. A submitted directory listing is **not** an approved marketplace installation.

## Connect directly

- Website: https://docsy.remcp.site
- **Canonical OAuth 2.1 MCP endpoint:** `https://docsy.remcp.site/mcp/registry`
- [Plugin releases](https://github.com/getremcp/docsy-plugin/releases)
- [SDK & CLI repository](https://github.com/getremcp/docsy)
- [Getting started](GETTING-STARTED.md) · [AI client integrations](CLIENT-INTEGRATIONS.md)

The canonical MCP endpoint returns **HTTP 401** without OAuth; /readyz returned **HTTP 200** on 25 Oct 2026. Official Registry and release checks confirmed active Docsy v1.0.9 matching the stable plugin-v1.0.9 GitHub release. The previously active io.github.antonbaider/docsy v1.0.5 entry was deprecated with the authenticated publisher CLI. It advertised the obsolete /mcp path rather than the canonical /mcp/registry endpoint.

## Public listings and packages

| Channel | Public link | Status |
| --- | --- | --- |
| Official MCP Registry | [Docsy](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | Published v1.0.9 |
| Official MCP Registry - deprecated legacy identity | [io.github.antonbaider/docsy v1.0.5](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.antonbaider%2Fdocsy/versions/1.0.5) | **Deprecated 25 Oct 2026**, with migration guidance to active io.github.getremcp/docsy and /mcp/registry; retained for historical discovery |
| AI Anytime Awesome MCP Servers | [Merged PR #313](https://github.com/AIAnytime/Awesome-MCP-Servers/pull/313) | Published in GitHub catalog on 24 Oct 2026 |
| TensorBlock MCP Index | [Merged PR #4485](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) | Accepted 25 Oct 2026; API index propagation tracked separately |
| Cursor Directory | [Docsy plugin](https://cursor.directory/plugins/docsy) | Public page verified 24 Oct 2026; Add to Cursor uses the canonical OAuth MCP endpoint |
| Glama | [Docsy connector](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) | Listed; publisher-claimed, five tools |
| Sagargupta Awesome MCP Servers | [Merged listing PR #212](https://github.com/Sagargupta16/awesome-mcp-servers/pull/212) | PR merged 24 Oct 2026; included in the GitHub catalog |
| Awesome Remote MCP Servers | [Docsy entry](https://github.com/punkpeye/awesome-remote-mcp-servers/blob/main/README.md) | Public listing; confirmed from upstream GitHub README 24 Oct 2026 |
| mcpub | [Directory](https://mcpub.dev/) | Registration reported 24 Oct 2026; **public Docsy listing not independently verified** |
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

Thirty-seven PRs below were submitted and remained **open when checked on 25 October 2026**; do not create duplicate PRs.

| Channel | Pending PR |
| --- | --- |
| Cline | [#346](https://github.com/cline/marketplace/pull/346) |
| Kilo | [#497](https://github.com/Kilo-Org/kilo-marketplace/pull/497) |
| ToolSDK | [#1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016) |
| mcpHQ | [#452](https://github.com/mcpHQ/awesome-mcp-servers/pull/452) |
| Awesome Claude Code Plugins | [#821](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821) — review pending |
| Awesome Gemini CLI Extensions | [#105](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/105) — review pending |
| Collabnix Awesome MCP Lists | [#279](https://github.com/collabnix/awesome-mcp-lists/pull/279) — review pending |
| mctrinh Awesome MCP Servers | [#185](https://github.com/mctrinh/awesome-mcp-servers/pull/185) — review pending |

| Ever Works Awesome MCP Servers | [#217](https://github.com/ever-works/awesome-mcp-servers/pull/217) — review pending |
| Awesome DevOps MCP Servers | [#386](https://github.com/rohitg00/awesome-devops-mcp-servers/pull/386) — review pending |
| MindPal Awesome Remote MCP Servers | [#238](https://github.com/sylviangth/awesome-remote-mcp-servers/pull/238) — review pending |
| YuzeHao Awesome MCP Servers | [#746](https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/746) — review pending |
| Awesome Remote MCP Servers (jaw9c) | [#1724](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1724) — review pending |
| Brethof AI Awesome MCP Servers | [#59](https://github.com/BrethofAI/awesome-mcp-servers/pull/59) — review pending |
| Docker MCP Registry | [#6168](https://github.com/docker/mcp-registry/pull/6168) — review pending |
| ToolHive | [#1791](https://github.com/stacklok/toolhive-catalog/pull/1791) |
| best-of-mcp-servers | [#574](https://github.com/tolkonepiu/best-of-mcp-servers/pull/574) |
| MobinX | [#962](https://github.com/MobinX/awesome-mcp-list/pull/962) |
| VoltAgent Official MCP Servers | [#55](https://github.com/VoltAgent/official-mcp-servers/pull/55) — review pending |
| Awesome Public MCP Servers | [#89](https://github.com/bhavyshekhaliya/awesome-public-mcp-servers/pull/89) — review pending |
| Awesome MCP Tools | [#22](https://github.com/Christian-Sidak/awesome-mcp-tools/pull/22) — review pending |
| PenguinMiaou Awesome Claude Code Plugins | [#12](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/12) — review pending |
| itgoyo Awesome Claude Code | [#21](https://github.com/itgoyo/awesome-claude-code/pull/21) — review pending |
| Claude Plugins Radar | [#5](https://github.com/iliasabk/claude-plugins-radar/pull/5) — review pending |
| Habito Awesome MCP Servers | [#306](https://github.com/habitoai/awesome-mcp-servers/pull/306) — review pending |
| DhanushNehru Awesome MCP Servers | [#129](https://github.com/DhanushNehru/awesome-mcp-servers/pull/129) — review pending |
| Awesome Productivity MCP Servers | [#50](https://github.com/ExMapo/awesome-productivity-mcp-servers/pull/50) — review pending |
| WunderCorp Awesome MCP | [#162](https://github.com/wundercorp/awesome-mcp/pull/162) — review pending |
| Awesome Codex | [#33](https://github.com/ichangyou/awesome-codex/pull/33) — closed 31 Oct; requires account-free trial and concrete firsthand usage |
| Awesome AI Coding Tools | [#10](https://github.com/mahmoudsajjadi/awesome-ai-coding-tools/pull/10) — review pending |
| Awesome MCP Collection | [#75](https://github.com/JustInCache/awesome-mcp-collection/pull/75) — review pending |
| Albertchamberlain Awesome-MCP | [#119](https://github.com/Albertchamberlain/Awesome-MCP/pull/119) — review pending |
| Epistates Awesome MCP DevTools | [#26](https://github.com/Epistates/awesome-mcp-devtools/pull/26) — review pending |
| awesome-mcp.tools (adw0rd) | [#193](https://github.com/adw0rd/awesome-mcp-servers/pull/193) — review pending |
| Backblaze Awesome Agent Infrastructure | [#46](https://github.com/backblaze-labs/awesome-agent-infrastructure/pull/46) — review pending |
| Awesome AI DevTools RU | [#7](https://github.com/justxor/awesome-ai-devtools-ru/pull/7) — review pending |
| Awesome Agentic Engineering | [#28](https://github.com/ashishkaloge/awesome-agentic-engineering/pull/28) — review pending |

## Other submitted channels (not independently approved)

[TrackMCP](https://trackmcp.com/submit-mcp) returned "This tool has already been submitted" on 25 October 2026 for the canonical Docsy public repository; no fresh submission and no public listing verified.

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

## Directory PR recovery (27 October 2026)

This is a record of the accidental source-fork deletion on **26 October 2026** and the replacement GitHub pull requests. The original contribution commits are preserved in recreated fork histories; some head branches were updated to current upstream and current OAuth metadata. Original PR discussions remain accessible. All replacement PRs are **pending maintainer review**, not approved listings.

| Directory / repository | Original (closed) | Replacement | State at verification |
| --- | --- | --- | --- |
| `adw0rd/awesome-mcp-servers` | [#187](https://github.com/adw0rd/awesome-mcp-servers/pull/187) | [#193](https://github.com/adw0rd/awesome-mcp-servers/pull/193) | Open — SHA verified |
| `Albertchamberlain/Awesome-MCP` | [#116](https://github.com/Albertchamberlain/Awesome-MCP/pull/116) | [#119](https://github.com/Albertchamberlain/Awesome-MCP/pull/119) | Open — SHA verified |
| `ashishkaloge/awesome-agentic-engineering` | [#26](https://github.com/ashishkaloge/awesome-agentic-engineering/pull/26) | [#28](https://github.com/ashishkaloge/awesome-agentic-engineering/pull/28) | Open — SHA verified |
| `backblaze-labs/awesome-agent-infrastructure` | [#43](https://github.com/backblaze-labs/awesome-agent-infrastructure/pull/43) | [#46](https://github.com/backblaze-labs/awesome-agent-infrastructure/pull/46) | Open — SHA verified |
| `bhavyshekhaliya/awesome-public-mcp-servers` | [#83](https://github.com/bhavyshekhaliya/awesome-public-mcp-servers/pull/83) | [#89](https://github.com/bhavyshekhaliya/awesome-public-mcp-servers/pull/89) | Open — SHA verified |
| `BrethofAI/awesome-mcp-servers` | [#53](https://github.com/BrethofAI/awesome-mcp-servers/pull/53) | [#59](https://github.com/BrethofAI/awesome-mcp-servers/pull/59) | Open — SHA verified |
| `briantheautomator/awesome-remote-mcp-servers` | [#1](https://github.com/briantheautomator/awesome-remote-mcp-servers/pull/1) | [#2](https://github.com/briantheautomator/awesome-remote-mcp-servers/pull/2) | Open — SHA verified |
| `Christian-Sidak/awesome-mcp-tools` | [#20](https://github.com/Christian-Sidak/awesome-mcp-tools/pull/20) | [#22](https://github.com/Christian-Sidak/awesome-mcp-tools/pull/22) | Open — SHA verified |
| `cline/marketplace` | [#332](https://github.com/cline/marketplace/pull/332) | [#346](https://github.com/cline/marketplace/pull/346) | Open — SHA verified |
| `collabnix/awesome-mcp-lists` | [#264](https://github.com/collabnix/awesome-mcp-lists/pull/264) | [#279](https://github.com/collabnix/awesome-mcp-lists/pull/279) | Open — SHA verified |
| `DhanushNehru/awesome-mcp-servers` | [#127](https://github.com/DhanushNehru/awesome-mcp-servers/pull/127) | [#129](https://github.com/DhanushNehru/awesome-mcp-servers/pull/129) | Open — SHA verified |
| `docker/mcp-registry` | [#6062](https://github.com/docker/mcp-registry/pull/6062) | [#6168](https://github.com/docker/mcp-registry/pull/6168) | Open — SHA verified |
| `Epistates/awesome-mcp-devtools` | [#23](https://github.com/Epistates/awesome-mcp-devtools/pull/23) | [#26](https://github.com/Epistates/awesome-mcp-devtools/pull/26) | Open — SHA verified |
| `ever-works/awesome-mcp-servers` | [#212](https://github.com/ever-works/awesome-mcp-servers/pull/212) | [#217](https://github.com/ever-works/awesome-mcp-servers/pull/217) | Open — SHA verified |
| `ExMapo/awesome-productivity-mcp-servers` | [#47](https://github.com/ExMapo/awesome-productivity-mcp-servers/pull/47) | [#50](https://github.com/ExMapo/awesome-productivity-mcp-servers/pull/50) | Open — SHA verified |
| `habitoai/awesome-mcp-servers` | [#297](https://github.com/habitoai/awesome-mcp-servers/pull/297) | [#306](https://github.com/habitoai/awesome-mcp-servers/pull/306) | Open — SHA verified |
| `ichangyou/awesome-codex` | [#31](https://github.com/ichangyou/awesome-codex/pull/31) | [#33](https://github.com/ichangyou/awesome-codex/pull/33) | Closed — account-free review and firsthand Codex example required before resubmission |
| `iliasabk/claude-plugins-radar` | [#3](https://github.com/iliasabk/claude-plugins-radar/pull/3) | [#5](https://github.com/iliasabk/claude-plugins-radar/pull/5) | Open — SHA verified |
| `itgoyo/awesome-claude-code` | [#19](https://github.com/itgoyo/awesome-claude-code/pull/19) | [#21](https://github.com/itgoyo/awesome-claude-code/pull/21) | Open — SHA verified |
| `jaw9c/awesome-remote-mcp-servers` | [#1636](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1636) | [#1724](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1724) | Open — SHA verified |
| `JustInCache/awesome-mcp-collection` | [#72](https://github.com/JustInCache/awesome-mcp-collection/pull/72) | [#75](https://github.com/JustInCache/awesome-mcp-collection/pull/75) | Open — SHA verified |
| `justxor/awesome-ai-devtools-ru` | [#3](https://github.com/justxor/awesome-ai-devtools-ru/pull/3) | [#7](https://github.com/justxor/awesome-ai-devtools-ru/pull/7) | Open — SHA verified |
| `Kilo-Org/kilo-marketplace` | [#478](https://github.com/Kilo-Org/kilo-marketplace/pull/478) | [#497](https://github.com/Kilo-Org/kilo-marketplace/pull/497) | Open — SHA verified |
| `mahmoudsajjadi/awesome-ai-coding-tools` | [#7](https://github.com/mahmoudsajjadi/awesome-ai-coding-tools/pull/7) | [#10](https://github.com/mahmoudsajjadi/awesome-ai-coding-tools/pull/10) | Open — SHA verified |
| `mcpHQ/awesome-mcp-servers` | [#397](https://github.com/mcpHQ/awesome-mcp-servers/pull/397) | [#452](https://github.com/mcpHQ/awesome-mcp-servers/pull/452) | Open — conflict resolved; generated outputs checked |
| `mctrinh/awesome-mcp-servers` | [#179](https://github.com/mctrinh/awesome-mcp-servers/pull/179) | [#185](https://github.com/mctrinh/awesome-mcp-servers/pull/185) | Open — SHA verified |
| `MobinX/awesome-mcp-list` | [#926](https://github.com/MobinX/awesome-mcp-list/pull/926) | [#962](https://github.com/MobinX/awesome-mcp-list/pull/962) | Open — SHA verified |
| `openmodelsrun/mcp` | [#55](https://github.com/openmodelsrun/mcp/pull/55) | [#60](https://github.com/openmodelsrun/mcp/pull/60) | Open — OAuth v1.0.9; 233-file validation passed |
| `PenguinMiaou/awesome-claude-code-plugins` | [#10](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/10) | [#12](https://github.com/PenguinMiaou/awesome-claude-code-plugins/pull/12) | Open — SHA verified |
| `Piebald-AI/awesome-gemini-cli-extensions` | [#96](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/96) | [#105](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/105) | Open — SHA verified |
| `rohitg00/awesome-devops-mcp-servers` | [#382](https://github.com/rohitg00/awesome-devops-mcp-servers/pull/382) | [#386](https://github.com/rohitg00/awesome-devops-mcp-servers/pull/386) | Open — SHA verified |
| `stacklok/toolhive-catalog` | [#1781](https://github.com/stacklok/toolhive-catalog/pull/1781) | [#1791](https://github.com/stacklok/toolhive-catalog/pull/1791) | Open — SHA verified |
| `sylviangth/awesome-remote-mcp-servers` | [#230](https://github.com/sylviangth/awesome-remote-mcp-servers/pull/230) | [#238](https://github.com/sylviangth/awesome-remote-mcp-servers/pull/238) | Open — SHA verified |
| `tolkonepiu/best-of-mcp-servers` | [#561](https://github.com/tolkonepiu/best-of-mcp-servers/pull/561) | [#574](https://github.com/tolkonepiu/best-of-mcp-servers/pull/574) | Open — SHA verified |
| `wundercorp/awesome-mcp` | [#154](https://github.com/wundercorp/awesome-mcp/pull/154) | [#162](https://github.com/wundercorp/awesome-mcp/pull/162) | Open — SHA verified |
| `YuzeHao2023/Awesome-MCP-Servers` | [#718](https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/718) | [#746](https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/746) | Open — SHA verified |

## Intentional exclusions

- The original [AlexMili/Awesome-MCP #326](https://github.com/AlexMili/Awesome-MCP/pull/326) was **closed 24 October** by its maintainer because plugin manifests alone are not the hosted MCP server source. It was not resubmitted.
- The referenced ccplugins/awesome-claude-code-plugins PR #821 is inaccessible; the repository has pull requests disabled (GitHub 410), so a replacement PR cannot be submitted there.
- Already merged PRs in AIAnytime, TensorBlock, Sagargupta16, VoltAgent, ToolSDK, and punkpeye/awesome-remote-mcp-servers remain unchanged.

- The earlier [Cline #244](https://github.com/cline/marketplace/pull/244) was automatically closed after fork deletion; the currently open [Cline #346](https://github.com/cline/marketplace/pull/346) is the replacement contribution, avoiding duplicate PRs.

## Recovery method

Source fork names changed where needed to avoid collisions, but commit objects, original changes, and target branches were restored via GitHub API and compared to upstream. Original closed PRs cannot be reopened because GitHub rejects the operation after deletion of the original source repository (HTTP 422).

## International developer outreach — 27 October 2026

| Channel | Docsy result | ReMCP result | Notes |
| --- | --- | --- | --- |
| LobeHub MCP Marketplace | Published: owner-claimed existing listing `getremcp-docsy-plugin`, updated from 1.0.6 to 1.0.9 | Published: `getremcp-remcp` v0.2.189 | Confirmed using LobeHub official CLI with GitHub ownership linked; listing enrichment may be asynchronous |
| China: yzfly/Awesome-MCP-ZH | [PR #867](https://github.com/yzfly/Awesome-MCP-ZH/pull/867) open | [PR #866](https://github.com/yzfly/Awesome-MCP-ZH/pull/866) open | Chinese catalog contribution; **not yet merged** |
| United States: xAI / Grok Build plugin catalog | [PR #1698](https://github.com/xai-org/plugin-marketplace/pull/1698) open; local catalog/index validation and initial security checks passed | Not submitted | xAI forbids arbitrary remote shell execution in plugin submissions; this boundary needs review for ReMCP |
| Chinese documentation & developer article | [PR #103](https://github.com/getremcp/docsy-plugin/pull/103) merged; [onboarding](README.zh-CN.md), [technical introduction](ANNOUNCEMENT.zh-CN.md) public | — | Strict public-file allowlist preserved and CI passed |
| MCP.Directory | Already submitted 24 October; repeated check reported repository already submitted | Previously submitted | Do not submit duplicates |
| GitHub MCP community discussions | Two developer showcases drafted, **not published** | Same | GitHub GraphQL CreateDiscussion denied under linked token; separately opened browser was unauthenticated |

External PR status is subject to maintainers' review. Only count a catalog listing as published when confirmed by the publisher. Never describe community PR submission as official approval.

## Follow-up: United States and China — 28 October 2026

- **US developer-tool directory:** [ai-for-developers/awesome-ai-coding-tools PR #1130](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1130) adds Docsy and ReMCP to the MCP section; submitted, awaiting upstream maintainer review, not a live catalog placement.
- **US xAI / Grok Build:** [PR #1698](https://github.com/xai-org/plugin-marketplace/pull/1698) was synchronized with current upstream main, then passed its local catalog/index validators. Socket Security and Semgrep checks passed again; the PR remains open and awaiting reviewer approval. Do not equate a successful security scan with catalog acceptance.
- **English maintainer posts, published publicly:** [Docsy: version-aware source-linked docs](https://gist.github.com/antonbaider/f56972ad52ef93caea17097ec0121572) and [ReMCP: paired-computer access and security boundaries](https://gist.github.com/antonbaider/ac9b0d908f693c9f661a07e658a1b384). Both are public GitHub Gists, **not posts on external discussion forums**.
- **Chinese maintainer post, published publicly:** [ReMCP 配对电脑与 OAuth 安全说明](https://gist.github.com/antonbaider/0190650ff3a58f0c824f5b8c19458bb6). The [ReMCP China PR #866](https://github.com/yzfly/Awesome-MCP-ZH/pull/866) description was updated with this link. The [Docsy China PR #867](https://github.com/yzfly/Awesome-MCP-ZH/pull/867) remains open, with Chinese setup documentation already included.
- **ModelScope China:** confirmed the MCP-creation page is available, but unauthenticated browser session redirects to login; **nothing submitted**. A signed-in ModelScope publisher account is required.
- **Official MCP community discussions:** earlier create attempts were denied by the GitHub connection's discussion permissions, and a separate browser was unauthenticated; **nothing posted**. Do not claim participation or request extra privileges as if they already exist.
- **Previously submitted directories:** do not duplicate existing submissions to MCP.Directory, AIBase, MCP Market and other locations recorded above.

All descriptions identify these posts as **first-party maintainer writing**. OAuth sign-in and ReMCP's state-changing device operations are disclosed; neither service is described as an anonymous public endpoint.

## Follow-up: LobeHub localization and ReMCP release — 28 October 2026

- **Verified ReMCP release:** [v0.2.194](https://github.com/getremcp/remcp/releases/tag/v0.2.194) was published to GitHub and npm on 28 October. Its optional terminal QR opens the signed-in device pairing approval flow; this is not passwordless authorization.
- **LobeHub current publication:** the owner-connected CLI confirmed **ReMCP `getremcp-remcp@0.2.194` published**, upgrading the earlier 0.2.189 listing. Docsy remains **`getremcp-docsy-plugin@1.0.9` published**. Existing seven ReMCP catalog tool schemas were preserved.
- **Owner-edited localized listings:** updated **zh-CN** descriptions and summaries for both products. Added clear **en-US** summaries for both. Official CLI writes succeeded, and follow-up JSON verified both language summaries.
- **Chinese education submission:** [liyupi/ai-guide PR #89](https://github.com/liyupi/ai-guide/pull/89) proposes an original beginner article about versioned documentation, OAuth, local device pairing, and read vs write MCP boundaries. It remains a **PR awaiting editorial review**, not a published page of the learning site.
- **Open directory PRs:** [xAI #1698](https://github.com/xai-org/plugin-marketplace/pull/1698), [China Docsy #867](https://github.com/yzfly/Awesome-MCP-ZH/pull/867), [China ReMCP #866](https://github.com/yzfly/Awesome-MCP-ZH/pull/866), and [developer list #1130](https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/1130) were still open when checked. Do not claim acceptance.
