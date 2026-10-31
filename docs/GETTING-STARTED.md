# Getting started with Docsy

Docsy finds version-aware developer documentation with source links. Use the hosted service from an AI coding assistant, the terminal, or a TypeScript project.

**[Website](https://docsy.remcp.site)** · **[Documentation](https://docsy.remcp.site/docs)** · **[SDK](https://www.npmjs.com/package/@remcp/docsy-sdk)** · **[CLI](https://www.npmjs.com/package/@remcp/docsy-cli)** · **[Support](https://docsy.remcp.site/support)**

## Choose your integration

**[13-client setup matrix: Claude.ai, Devin, OpenCode, Antigravity, Kiro, Warp, Goose, Copilot, Grok Build and more](CLIENT-INTEGRATIONS.md)** — native examples with OAuth verification.

| Client | Setup | Authentication |
| --- | --- | --- |
| Codex CLI | [Remote MCP](#codex-cli) | Docsy OAuth |
| Claude Code | [Remote MCP](#claude-code) | Docsy OAuth |
| Cursor | [MCP settings](#cursor) | Docsy OAuth |
| VS Code | [MCP user configuration](#vs-code) | Docsy OAuth |
| ChatGPT, where custom MCP is available | [Custom MCP](#chatgpt-and-other-mcp-clients) | Docsy OAuth |
| Gemini CLI | [Extension](#gemini-cli) | Docsy OAuth |
| Terminal | [npm CLI](#npm-command-line-client) | Public REST lookup can be anonymous |
| TypeScript | [npm SDK](#typescript-sdk) | Public REST lookup can be anonymous |

**MCP endpoint: https://docsy.remcp.site/mcp/registry**

The hosted remote MCP service currently requires OAuth 2.1 account authorization. HTTP 401 with a WWW-Authenticate challenge is expected before the MCP client authorizes. Public REST documentation lookup is a different interface and can be anonymous, subject to rate limits. A client configuration alone does not grant access.

## Codex CLI

~~~sh
codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
codex mcp login docsy
codex mcp get docsy
~~~

Complete browser account authorization when prompted. Then ask Codex for official documentation with source URLs.

## Claude Code

~~~sh
claude mcp add --transport http docsy https://docsy.remcp.site/mcp/registry
~~~

Finish Docsy account sign-in using the MCP management flow in Claude Code.

## Cursor

Merge this server into Cursor MCP settings or the project MCP configuration file at .cursor/mcp.json. Keep existing servers.

~~~json
{
  "mcpServers": {
    "docsy": {
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
~~~

Enable the MCP server and authorize your Docsy account as prompted. This is a custom server, not a claim of curated marketplace approval.

## VS Code

Open **MCP: Open User Configuration** and merge Docsy into the existing servers object:

~~~json
{
  "servers": {
    "docsy": {
      "type": "http",
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
~~~

Use an MCP-capable agent to authorize and invoke tools.

## ChatGPT and other MCP clients

Where your account and client support custom remote MCP servers, use these values:

~~~text
Name: Docsy
URL: https://docsy.remcp.site/mcp/registry
Authentication: OAuth 2.1
~~~

Follow the account-linking prompts for your client. A private/custom MCP connection does not imply approval for a public app directory.

## Community plugin marketplaces

Where installed Codex or Claude Code versions support Git-based plugin marketplaces:

~~~sh
# Claude Code
claude plugin marketplace add getremcp/docsy-plugin
claude plugin install docsy@docsy-community

# Codex
codex plugin marketplace add getremcp/docsy-plugin
codex plugin add docsy@docsy-community
~~~

These are community installation mechanisms, not claims of official marketplace inclusion. This public repository contains configuration and a docs skill, not the Docsy backend.

## Gemini CLI

~~~sh
gemini extensions install https://github.com/getremcp/docsy
~~~

The public extension connects to remote Docsy. Complete OAuth authorization where prompted.

## npm command-line client

**Requires Node.js 22 or newer.**

~~~sh
npm install --global @remcp/docsy-cli
docsy --help
docsy library react
docsy docs /reactjs/react.dev "useEffect cleanup"
docsy search "Next.js caching" --library next.js
docsy mcp
~~~

The last command prints the MCP URL; it does not start a local server.

One-off usage:

~~~sh
npx --yes --package=@remcp/docsy-cli docsy library react
~~~

See the [CLI README](https://github.com/getremcp/docsy/tree/main/packages/cli) for additional commands and options.

## TypeScript SDK

**Requires Node.js 22 or newer.**

~~~sh
npm install @remcp/docsy-sdk
~~~

~~~ts
import { Docsy } from "@remcp/docsy-sdk";

const client = new Docsy();
const libraries = await client.searchLibrary("useEffect cleanup", "React");
console.log(libraries.map(({ libraryId, versions }) => ({ libraryId, versions })));
~~~

The searchLibrary method takes the documentation question first and library name second. See the [SDK README](https://github.com/getremcp/docsy/tree/main/packages/sdk) for further API examples.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| MCP returns HTTP 401 | Complete Docsy OAuth account-linking in the client. The authentication challenge is expected before sign-in. |
| MCP tools are missing | Confirm the client supports remote HTTP MCP, that Docsy is enabled and authorization finished. |
| Terminal command not found | Install CLI globally or run the npx example. |
| Results are empty or use the wrong version | Resolve library IDs with the CLI library command and specify the required version. |
| REST returns HTTP 429 | Reduce request frequency; public endpoints are rate limited. |
| SDK installation fails on older Node.js | Use supported Node.js 22+ and reinstall packages. |

Never paste tokens, private code or personal data into public documentation prompts, GitHub issues or screenshots. Do not store secrets in public MCP configuration files.

## Diagnose an MCP authorization challenge

~~~sh
# Before authorization, HTTP 401 is normal
curl -I https://docsy.remcp.site/mcp/registry

# Public documentation website
curl -I https://docsy.remcp.site/docs
~~~

The MCP specification describes [OAuth Protected Resource Metadata](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/docs/specification/2026-07-28/basic/authorization/authorization-server-discovery.mdx) and the discovery challenge. An HTTP 401 alone is not a valid service-health failure.

## More links

- Website: https://docsy.remcp.site
- Docs: https://docsy.remcp.site/docs
- Public SDK / CLI: https://github.com/getremcp/docsy
- Public plugin releases: https://github.com/getremcp/docsy-plugin/releases
- Support: https://docsy.remcp.site/support
- Privacy: https://docsy.remcp.site/privacy
- Terms: https://docsy.remcp.site/terms
