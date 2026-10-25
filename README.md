<p align="center">
  <img src="assets/docsy-icon-192.png" width="104" height="104" alt="Docsy logo">
</p>

<h1 align="center">Docsy MCP Plugin</h1>

<p align="center"><strong>Current documentation. Exact versions. Verifiable sources.</strong></p>

<p align="center">Bring official, version-specific developer docs into ChatGPT, Claude Code, Codex and other AI clients — with source links.</p>

<p align="center">
  <a href="https://github.com/getremcp/docsy-plugin/releases/latest"><img alt="Stable plugin release" src="https://img.shields.io/github/v/release/getremcp/docsy-plugin?style=flat-square&label=stable"></a>
  <a href="https://github.com/getremcp/docsy-plugin/releases"><img alt="Release downloads" src="https://img.shields.io/github/downloads/getremcp/docsy-plugin/total?style=flat-square&label=downloads"></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-1f2328?style=flat-square"></a>
  <a href="https://github.com/getremcp/docsy-plugin/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/getremcp/docsy-plugin?style=flat-square"></a>
  <a href="https://github.com/getremcp/docsy-plugin/actions/workflows/plugin-quality.yml"><img alt="Release validation status" src="https://img.shields.io/github/actions/workflow/status/getremcp/docsy-plugin/plugin-quality.yml?branch=main&label=release%20checks&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy"><img alt="Official MCP Registry: listed" src="https://img.shields.io/badge/MCP%20Registry-listed-1f2328?style=flat-square"></a>
  <a href="https://github.com/getremcp/docsy-plugin/blob/main/.claude-plugin/marketplace.json"><img alt="Claude Code community plugin" src="https://img.shields.io/badge/Claude%20Code-community%20plugin-1f2328?style=flat-square"></a>
  <a href="https://github.com/getremcp/docsy/releases/tag/gemini-v1.0.0"><img alt="Gemini CLI extension v1.0.0" src="https://img.shields.io/badge/Gemini%20CLI-extension%201.0.0-1f2328?style=flat-square"></a>
  <a href="https://docsy.remcp.site/docs"><img alt="Five read-only MCP tools" src="https://img.shields.io/badge/MCP%20tools-5%20read--only-1f2328?style=flat-square"></a>
  <a href="https://mcpub.dev"><img alt="mcpub registered" src="https://img.shields.io/badge/mcpub-registered-1f2328?style=flat-square"></a>
  <a href="https://plugandship.dev/p/docsy-mcp"><img alt="Plug and Ship free launch scheduled November 12" src="https://img.shields.io/badge/Plug%20%26%20Ship-scheduled%20Nov%2012-1f2328?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/@remcp/docsy-sdk"><img alt="npm SDK version" src="https://img.shields.io/npm/v/%40remcp%2Fdocsy-sdk?style=flat-square&label=npm%20SDK"></a>
  <a href="https://www.npmjs.com/package/@remcp/docsy-cli"><img alt="npm CLI version" src="https://img.shields.io/npm/v/%40remcp%2Fdocsy-cli?style=flat-square&label=npm%20CLI"></a>
</p>

<p align="center">
  <a href="https://glama.ai/mcp/connectors/io.github.getremcp/docsy"><img alt="Docsy MCP connector – tool definition quality and endpoint health on Glama" src="https://glama.ai/mcp/connectors/io.github.getremcp/docsy/badges/score.svg"></a>
</p>

<p align="center">
  <a href="https://docsy.remcp.site">Website</a> ·
  <a href="https://docsy.remcp.site/docs">Docs</a> ·
  <a href="docs/DISTRIBUTION-STATUS.md">Directory status</a> ·
  <a href="docs/GETTING-STARTED.md">Setup guide</a> ·
  <a href="docs/CLIENT-INTEGRATIONS.md">AI clients</a> ·
  <a href="https://github.com/getremcp/docsy"><strong>SDK & CLI repository ↗</strong></a> ·
  <a href="https://github.com/getremcp/docsy-plugin/releases">Releases</a> ·
  <a href="https://docsy.remcp.site/support">Support</a>
</p>

---


## Choose how to use Docsy

| AI assistants | Developer tooling |
| --- | --- |
| **[Docsy AI / MCP Plugin →](https://github.com/getremcp/docsy-plugin)** — connect ChatGPT, Claude Code, Codex or Cursor | **[Docsy SDK & CLI →](https://github.com/getremcp/docsy)** — install TypeScript SDK, npm CLI or Gemini CLI extension |

These are **separate release repositories** for the same remote Docsy service. Neither contains private crawling infrastructure.

## Source-linked documentation for AI

Docsy retrieves current and version-specific developer documentation for libraries, frameworks and SDKs. Results include original source links instead of untraceable summaries.

**Five read-only MCP tools:** `resolve-library-id`, `list-library-versions`, `query-docs`, `search` and `fetch`.

## Tools

Docsy exposes **five read-only MCP tools**, giving AI coding assistants version-specific public documentation with verifiable source URLs.

| MCP tool | Description |
| --- | --- |
| `resolve-library-id` | Resolve a library, package, framework or SDK name to its canonical Docsy library ID. |
| `list-library-versions` | List versions of a library and distinguish indexed content from upstream-only tags. |
| `query-docs` | Retrieve focused version-aware documentation excerpts and code examples with source links. |
| `search` | Search publicly indexed documentation and return relevant results, publisher URLs and stable IDs. |
| `fetch` | Read an indexed result by stable ID or a verified publisher page associated with the selected library/version. |

### `resolve-library-id`
Resolve a library name to its canonical Docsy ID when an exact library ID is unknown.

### `list-library-versions`
Discover release versions for a resolved library. Upstream-only tags do not necessarily have indexed documentation.

### `query-docs`
Ask a focused question about one resolved library and optionally a pinned version, returning verifiable publisher source links. A link-only response is supported.

### `search`
Search across public indexed documentation; follow a result's stable ID with `fetch` to retrieve a specific source.

### `fetch`
Fetch a specific indexed result by ID or a verified authorized publisher document page; arbitrary web fetching and private repository access are not supported.

The canonical remote Streamable HTTP endpoint is `https://docsy.remcp.site/mcp/registry`. OAuth 2.1 account authorization is required. All five tools are read-only; they cannot modify local files or run commands.



## Connect

**Canonical remote MCP endpoint:** `https://docsy.remcp.site/mcp/registry`

The hosted MCP service **requires OAuth 2.1 account authorization**. Complete the sign-in prompted by your client. Existing clients may continue to use `https://docsy.remcp.site/mcp`.

| Client | How to connect |
| --- | --- |
| **ChatGPT** | Add Docsy as a remote MCP connector where supported, then authorize. |
| **Claude Code** | Run the command below. |
| **Codex CLI** | Add the server and log in with the commands below. |
| **Cursor, VS Code and other MCP clients** | Use the remote HTTP URL in MCP settings. |

**Claude Code**

```sh
claude mcp add --transport http docsy https://docsy.remcp.site/mcp/registry
```

**Codex CLI**

```sh
codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
codex mcp login docsy
```

**Generic MCP client configuration**

For clients that accept a remote HTTP MCP JSON configuration, use the canonical endpoint. The client will prompt for Docsy OAuth 2.1 sign-in.

```json
{
  "mcpServers": {
    "docsy": {
      "type": "http",
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Claude Code community marketplace**

```sh
claude plugin marketplace add getremcp/docsy-plugin
claude plugin install docsy@docsy-community
```

For additional clients, see the **[Full setup guide: connecting Docsy to your AI clients](docs/GETTING-STARTED.md)** and [13-client integration reference](docs/CLIENT-INTEGRATIONS.md). A listing in a directory is not equivalent to official OpenAI or Anthropic marketplace approval.

## Discover Docsy

These public distribution records were verified on 24 October 2026. See the [full distribution matrix](docs/DISTRIBUTION-STATUS.md) for directory links, pending reviews and Smithery migration:

| Channel | Record | Status |
| --- | --- | --- |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | `io.github.getremcp/docsy`, v1.0.9 | Published / active |
| [AI Anytime Awesome MCP Servers](https://github.com/AIAnytime/Awesome-MCP-Servers) | [Docsy PR #313 merged](https://github.com/AIAnytime/Awesome-MCP-Servers/pull/313) | Published 24 Oct 2026; hosted OAuth MCP entry in public directory |
| [Cursor Directory](https://cursor.directory/plugins/docsy) | Public Docsy plugin page with **Add to Cursor** and canonical OAuth endpoint | Publicly accessible, verified in Chrome on 24 Oct 2026; not an official Cursor endorsement |
| [Glama](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) | Remote connector exposing five tools | Listed and publisher-claimed (24 Oct 2026); DNS ownership and OAuth test confirmed |
| [Sagargupta Awesome MCP Servers](https://github.com/Sagargupta16/awesome-mcp-servers) | [Merged listing PR #212](https://github.com/Sagargupta16/awesome-mcp-servers/pull/212) | Published in GitHub catalog 24 Oct 2026; external site sync may lag |
| [Awesome Remote MCP Servers](https://github.com/punkpeye/awesome-remote-mcp-servers) | [Docsy in curated remote-server list](https://github.com/punkpeye/awesome-remote-mcp-servers/blob/main/README.md) | Already publicly listed with canonical OAuth endpoint and Glama badge |
| [mcpub](https://mcpub.dev) | `https://docsy.remcp.site/mcp/registry` | Registered 24 Oct 2026; listed in discovery |
| [Launch MCP](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin) | [Public Docsy listing](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin) | Public page returned HTTP 200 on 24 Oct 2026 |
| [MCPRepository](https://mcprepository.com/getremcp/docsy-plugin) | [Public Docsy MCP source listing](https://mcprepository.com/getremcp/docsy-plugin) | Public title and GitHub repository verified 25 Oct 2026 |
| [LibHunt](https://www.libhunt.com/r/getremcp/docsy) | [SDK & CLI](https://www.libhunt.com/r/getremcp/docsy) | Public source listing |
| [Ext Ops Panel](https://extops.dev/plugins/mcp/io.github.getremcp/docsy) | [Docsy registry-sourced profile](https://extops.dev/plugins/mcp/io.github.getremcp/docsy) | Public auto-indexed profile, title/source verified 25 Oct 2026; not marketplace approval |
| [Walnut World](https://walnut.world/w/docsy-plugin) | [Plugin](https://walnut.world/w/docsy-plugin) · [SDK & CLI](https://walnut.world/w/docsy) | Both GitHub-source pages indexed and publicly visible on 25 Oct 2026; publisher ownership not yet claimed |
| [Awesome Claude Code Plugins](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821) | [Docsy PR #821](https://github.com/ccplugins/awesome-claude-code-plugins/pull/821) | Submitted 24 Oct 2026; awaiting third-party review |
| [Awesome Gemini CLI Extensions](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/96) | [Docsy PR #96](https://github.com/Piebald-AI/awesome-gemini-cli-extensions/pull/96) | Submitted 24 Oct 2026; awaiting upstream review |
| [Collabnix Awesome MCP Lists](https://github.com/collabnix/awesome-mcp-lists/pull/264) | [Docsy PR #264](https://github.com/collabnix/awesome-mcp-lists/pull/264) | Submitted 24 Oct 2026; external review pending |
| [mctrinh Awesome MCP Servers](https://github.com/mctrinh/awesome-mcp-servers/pull/179) | [Docsy PR #179](https://github.com/mctrinh/awesome-mcp-servers/pull/179) | Submitted 24 Oct 2026; external review pending |
| [AlexMili Awesome MCP](https://github.com/AlexMili/Awesome-MCP/pull/326) | [Docsy PR #326](https://github.com/AlexMili/Awesome-MCP/pull/326) | Closed 24 Oct 2026: catalog requires actual MCP server source; plugin bundle does not qualify. Do not resubmit same bundle. |
| [FindMCP](https://findmcp.app/submit) | Free Docsy MCP submission ID **320** | Accepted by submission API 25 Oct 2026; independent review pending, not publicly listed yet |
| [Few Servers](https://www.fewservers.com/mcp/submit/) | Editorial listing/claim request sent 25 Oct 2026 by email | Awaiting independent human review; not a verified listing |
| [AgenticSkills](https://agenticskills.io/submit?type=mcp) | Free Docsy MCP server submission | Accepted on 25 Oct 2026; weekly editorial review pending, not published |
| [MCP Harbor](https://mcpharbor.app/submit/) | Free submission accepted on 24 Oct 2026 | Under external review; no public listing independently verified |
| [MCPizy](https://mcpizy.com/submit/thanks?ref=web_mvnk6me0_a8jruk&tier=standard) | Free Docsy submission ID `web_mvnk6me0_a8jruk` | Accepted 25 Oct 2026; pending external review |
| [Plug and Ship](https://plugandship.dev/p/docsy-mcp) | Docsy MCP free launch | Public detail page accessible; free daily-board launch scheduled 12 Nov 2026 |
| [Claude Code community marketplace](.claude-plugin/marketplace.json) | `claude plugin marketplace add getremcp/docsy-plugin` | GitHub-installable, not official Anthropic marketplace approval |
| [Gemini CLI extension](https://github.com/getremcp/docsy/releases/tag/gemini-v1.0.0) | Tagged extension manifest in the [SDK & CLI repository](https://github.com/getremcp/docsy) | GitHub release, not gallery approval |
| [ChatGPT, Codex, Cursor and others](docs/CLIENT-INTEGRATIONS.md) | Direct OAuth 2.1 remote MCP connection | Client integration guide, not official marketplace approval |

Older discovery records under `io.github.antonbaider/docsy` may remain indexed; **use the organization namespace** `io.github.getremcp/docsy` for new installations. Glama publisher ownership was confirmed by the Glama administration UI on 24 Oct 2026; its live badge reports current independent health and quality checks. Other directories and official marketplaces remain subject to their own reviews.

<details>
<summary><strong>Directory submissions awaiting independent review · expand status table</strong></summary>

### Submission review queue

The following entries are **submitted, not yet approved**; they are not official marketplace endorsement:

| Marketplace | Submission | Status checked 24 Oct 2026 |
| --- | --- | --- |
| Cline Marketplace | [PR #332](https://github.com/cline/marketplace/pull/332) | Open; maintainer review required |
| Kilo Marketplace | [PR #478](https://github.com/Kilo-Org/kilo-marketplace/pull/478) | Open; code review and security checks passed |
| ToolSDK MCP Registry | [PR #1016](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1016) | Open; schema and Biome checks passed |
| mcpHQ Awesome MCP Servers | [PR #397](https://github.com/mcpHQ/awesome-mcp-servers/pull/397) | Open; awaiting maintainer review |
| Ever Works Awesome MCP Servers | [PR #212](https://github.com/ever-works/awesome-mcp-servers/pull/212) | Submitted 24 Oct 2026; detail page and read-only OAuth docs entry awaiting review |
| Awesome DevOps MCP Servers | [PR #382](https://github.com/rohitg00/awesome-devops-mcp-servers/pull/382) | Submitted 24 Oct 2026; read-only developer docs catalog entry awaiting review |
| MindPal Awesome Remote MCP Servers | [PR #230](https://github.com/sylviangth/awesome-remote-mcp-servers/pull/230) | Submitted 24 Oct 2026; hosted OAuth listing pending review |
| YuzeHao Awesome MCP Servers | [PR #718](https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/718) | Submitted 24 Oct 2026; pending upstream review |
| Awesome Remote MCP Servers (jaw9c) | [PR #1636](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1636) | Submitted 24 Oct 2026; hosted OAuth listing pending review |
| Brethof AI Awesome MCP Servers | [PR #53](https://github.com/BrethofAI/awesome-mcp-servers/pull/53) | Submitted 24 Oct 2026; hosted OAuth details documented; awaiting review |

| Docker MCP Registry | [PR #6062](https://github.com/docker/mcp-registry/pull/6062) | Submitted 24 Oct 2026; pending Docker manual review and OAuth integration validation |
| ToolHive Catalog | [PR #1781](https://github.com/stacklok/toolhive-catalog/pull/1781) | Submitted; catalog review required |
| best-of-mcp-servers | [PR #561](https://github.com/tolkonepiu/best-of-mcp-servers/pull/561) | Submitted; YAML validation passed; review required |
| Awesome MCP List (MobinX) | [PR #926](https://github.com/MobinX/awesome-mcp-list/pull/926) | Submitted; maintainer review pending |
| CheckMCP | [Free submission](https://checkmcp.dev/submit) | Free audit queued 24 Oct 2026; not audited/verified yet |
| ProMCP | [Free submission](https://www.promcpservers.com/submit) | Submitted for manual review 24 Oct 2026 |
| MCPfinder | [Free submission](https://www.mcpfinder.org/submit) | Submitted successfully 24 Oct 2026; reliability review pending |
| Launch MCP | [Public Docsy listing](https://launchmcp.co/mcp/servers/getremcp/docsy-plugin) | **Publicly indexed 24 Oct 2026**; 3/3 upvotes and site verification accepted. Publisher page still reports missing structured MCP install/tools metadata; completeness is not yet verified |
| AIBase MCP | [Publisher submission manager](https://aibase.com/user/submitManage?tab=mcp) | Submitted from Google account with official logo and OAuth Streamable HTTP config; **pending review** |
| ClaudePluginHub (independent) | [Plugin and marketplace submission](https://www.claudepluginhub.com/tools/submit-plugin) | **Both plugin and marketplace submitted** from authenticated publisher account 24 Oct 2026; indexed only after automated validation, **not official Anthropic approval** |
| GitHub MCP Registry (VS Code / Copilot) | [Onboarding request](https://github.com/github/github-mcp-server/discussions/1257#discussioncomment-19165953) | Official registry identity, tools, OAuth, docs and license provided; **manual curation pending** |
| TensorBlock awesome-mcp-servers | [PR #4485](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) | Automatically proposed by TensorBlock; **review pending**, do not duplicate |
| MCP Index | [Submission form](https://themcpindex.com/submit) | Received; editorial review pending |
| MCP Market | [Submission queue](https://mcpmarket.com/submit) | Accepted into free queue |
| MCP Servers | [Submission queue](https://mcpservers.org/submit) | Accepted for free review |

These are independent community sites; listing policies and review decisions are controlled by their maintainers.

**Smithery transition:** The [official notice](https://smithery.ai/future) confirms its API, proxy, CLI/SDK and connection management shut down on **31 October 2026**. The public directory remains curated by Arcade.dev. The publisher response `403 Updating servers has been removed` is a retired API, not a Docsy failure; no new Smithery publication is claimed. Install through the direct OAuth endpoint above, not Smithery proxy or CLI. See [distribution status](docs/DISTRIBUTION-STATUS.md). The Claude Connectors Directory required a paid Claude plan on the signed-in account. LobeHub Market CLI publisher OAuth was completed, but GitHub ownership linkage requires an additional GitHub passkey confirmation; no LobeHub listing has been submitted.

</details>

## Releases and packages

| Channel | Distribution |
| --- | --- |
| [GitHub Releases](https://github.com/getremcp/docsy-plugin/releases) | Vetted versioned plugin ZIPs and review recordings |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | Published `io.github.getremcp/docsy` discovery record |
| [npm SDK](https://www.npmjs.com/package/@remcp/docsy-sdk) | `@remcp/docsy-sdk` TypeScript documentation lookup |
| [npm CLI](https://www.npmjs.com/package/@remcp/docsy-cli) | `@remcp/docsy-cli` terminal documentation lookup |
| [LibHunt](https://www.libhunt.com/r/getremcp/docsy) | Public SDK and CLI source listed and automatically approved 24 Oct 2026 |

**Stable:** [plugin-v1.0.9](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.9). **Review candidate (prerelease):** [plugin-v1.0.10](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.10). Pre-releases are candidates, not proof of marketplace approval.

## Security and project scope

This is Docsy's **public release-only repository**. It contains vetted plugin manifests, skill metadata, approved artwork and installation instructions. Backend code, databases, crawlers and deployment infrastructure live outside this public distribution.

- **Read-only documentation tools.** Docsy cannot inspect private repositories or execute commands on your device.
- **Account-scoped OAuth.** Review and revoke sessions from [Connected applications](https://docsy.remcp.site/dashboard/connections).
- **Traceable releases.** Use [immutable version tags and attached assets](https://github.com/getremcp/docsy-plugin/releases) instead of unreviewed development branches.
- **Public REST and remote MCP differ.** REST documentation lookups may be anonymous within rate limits; remote MCP requires OAuth.

[Security](SECURITY.md) · [MIT License](LICENSE) · [Privacy](https://docsy.remcp.site/privacy) · [Terms](https://docsy.remcp.site/terms) · [Support](https://docsy.remcp.site/support)

<p align="center"><sub>Independent documentation service. Third-party marks are the property of their owners.</sub></p>
