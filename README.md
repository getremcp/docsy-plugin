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
  <a href="https://plugandship.dev/p/docsy-mcp"><img alt="Plug and Ship launch scheduled November 11" src="https://img.shields.io/badge/Plug%20%26%20Ship-scheduled%20Nov%2011-1f2328?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/@remcp/docsy-sdk"><img alt="npm SDK version" src="https://img.shields.io/npm/v/%40remcp%2Fdocsy-sdk?style=flat-square&label=npm%20SDK"></a>
  <a href="https://www.npmjs.com/package/@remcp/docsy-cli"><img alt="npm CLI version" src="https://img.shields.io/npm/v/%40remcp%2Fdocsy-cli?style=flat-square&label=npm%20CLI"></a>
</p>

<p align="center">
  <a href="https://glama.ai/mcp/connectors/io.github.getremcp/docsy"><img alt="Docsy MCP connector – tool definition quality and endpoint health on Glama" src="https://glama.ai/mcp/connectors/io.github.getremcp/docsy/badges/score.svg"></a>
</p>

<p align="center">
  <a href="https://docsy.remcp.site">Website</a> ·
  <a href="https://docsy.remcp.site/docs">Docs</a> ·
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

These public distribution records were verified on 24 October 2026:

| Channel | Record | Status |
| --- | --- | --- |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | `io.github.getremcp/docsy`, v1.0.9 | Published / active |
| [Glama](https://glama.ai/mcp/connectors/io.github.getremcp/docsy) | Remote connector exposing five tools | Listed and publisher-claimed (24 Oct 2026); DNS ownership and OAuth test confirmed |
| [mcpub](https://mcpub.dev) | `https://docsy.remcp.site/mcp/registry` | Registered 24 Oct 2026; listed in discovery |
| [Plug and Ship](https://plugandship.dev/p/docsy-mcp) | Docsy MCP free launch | Scheduled 11 Nov 2026; not yet launched |
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
| ToolHive Catalog | [PR #1781](https://github.com/stacklok/toolhive-catalog/pull/1781) | Submitted; catalog review required |
| best-of-mcp-servers | [PR #561](https://github.com/tolkonepiu/best-of-mcp-servers/pull/561) | Submitted; YAML validation passed; review required |
| Awesome MCP List (MobinX) | [PR #926](https://github.com/MobinX/awesome-mcp-list/pull/926) | Submitted; maintainer review pending |
| CheckMCP | [Free submission](https://checkmcp.dev/submit) | Free audit queued 24 Oct 2026; not audited/verified yet |
| ProMCP | [Free submission](https://www.promcpservers.com/submit) | Submitted for manual review 24 Oct 2026 |
| MCPfinder | [Free submission](https://www.mcpfinder.org/submit) | Submitted successfully 24 Oct 2026; reliability review pending |
| Launch MCP | [Submission dashboard](https://launchmcp.co/dashboard) | **Submitted from publisher account** 24 Oct 2026; 3/3 community upvotes and website badge verified; **under editorial review**, not yet publicly listed |
| Cursor Directory | [Docsy plugin](https://cursor.directory/plugins/docsy) | Submitted through authenticated Google session; automated security scan in progress, **not publicly visible yet** |
| AIBase MCP | [Publisher submission manager](https://aibase.com/user/submitManage?tab=mcp) | Submitted from Google account with official logo and OAuth Streamable HTTP config; **pending review** |
| GitHub MCP Registry (VS Code / Copilot) | [Onboarding request](https://github.com/github/github-mcp-server/discussions/1257#discussioncomment-19165953) | Official registry identity, tools, OAuth, docs and license provided; **manual curation pending** |
| TensorBlock awesome-mcp-servers | [PR #4485](https://github.com/TensorBlock/awesome-mcp-servers/pull/4485) | Automatically proposed by TensorBlock; **review pending**, do not duplicate |
| MCP Index | [Submission form](https://themcpindex.com/submit) | Received; editorial review pending |
| MCP Market | [Submission queue](https://mcpmarket.com/submit) | Accepted into free queue |
| MCP Servers | [Submission queue](https://mcpservers.org/submit) | Accepted for free review |

These are independent community sites; listing policies and review decisions are controlled by their maintainers.

**Unavailable route:** Smithery accepted publisher Google sign-in but its publishing API returned `403 Updating servers has been removed` on 24 Oct 2026; no Smithery publication is claimed. The Claude Connectors Directory required a paid Claude plan on the signed-in account.

</details>

## Releases and packages

| Channel | Distribution |
| --- | --- |
| [GitHub Releases](https://github.com/getremcp/docsy-plugin/releases) | Vetted versioned plugin ZIPs and review recordings |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=io.github.getremcp%2Fdocsy) | Published `io.github.getremcp/docsy` discovery record |
| [npm SDK](https://www.npmjs.com/package/@remcp/docsy-sdk) | `@remcp/docsy-sdk` TypeScript documentation lookup |
| [npm CLI](https://www.npmjs.com/package/@remcp/docsy-cli) | `@remcp/docsy-cli` terminal documentation lookup |

**Stable:** [plugin-v1.0.9](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.9). **Review candidate (prerelease):** [plugin-v1.0.10](https://github.com/getremcp/docsy-plugin/releases/tag/plugin-v1.0.10). Pre-releases are candidates, not proof of marketplace approval.

## Security and project scope

This is Docsy's **public release-only repository**. It contains vetted plugin manifests, skill metadata, approved artwork and installation instructions. Backend code, databases, crawlers and deployment infrastructure live outside this public distribution.

- **Read-only documentation tools.** Docsy cannot inspect private repositories or execute commands on your device.
- **Account-scoped OAuth.** Review and revoke sessions from [Connected applications](https://docsy.remcp.site/dashboard/connections).
- **Traceable releases.** Use [immutable version tags and attached assets](https://github.com/getremcp/docsy-plugin/releases) instead of unreviewed development branches.
- **Public REST and remote MCP differ.** REST documentation lookups may be anonymous within rate limits; remote MCP requires OAuth.

[Security](SECURITY.md) · [MIT License](LICENSE) · [Privacy](https://docsy.remcp.site/privacy) · [Terms](https://docsy.remcp.site/terms) · [Support](https://docsy.remcp.site/support)

<p align="center"><sub>Independent documentation service. Third-party marks are the property of their owners.</sub></p>
