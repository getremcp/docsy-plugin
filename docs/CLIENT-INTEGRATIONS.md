# Docsy MCP — native setup for 13 clients

Canonical Streamable HTTP endpoint: `https://docsy.remcp.site/mcp/registry`. Docsy requires OAuth 2.1 account sign-in. A saved configuration alone is not a verified connection.

The examples below register a remote, **read-only** documentation server. Merge JSON/TOML into existing settings rather than overwriting other MCP servers. Never include passwords, OAuth tokens or proprietary source code in a public configuration.

| Client | Method |
| --- | --- |
| [Claude Code](#claude-code) | cli |
| [Claude.ai](#claude-ai) | web |
| [Codex CLI](#codex-cli) | cli |
| [Cursor](#cursor) | editor |
| [Devin](#devin) | agent |
| [OpenCode](#opencode) | cli |
| [Antigravity CLI](#antigravity-cli) | cli |
| [Kiro](#kiro) | ide |
| [Warp](#warp) | terminal |
| [Goose](#goose) | agent |
| [GitHub Copilot](#github-copilot) | ide |
| [Grok Build](#grok-build) | cli |
| [Custom Agent](#custom-agent) | mcp |

---

## Claude Code

Register Docsy as a remote HTTP MCP server.

**Where:** Terminal · user or project scope

```shell
claude mcp add --transport http docsy https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** In Claude Code, run /mcp to sign in; then check claude mcp list.

Official/client documentation: https://code.claude.com/docs/en/mcp

## Claude.ai

Add a custom remote MCP connector to Claude on the web, Desktop or Cowork.

**Where:** Customize → Connectors → Add custom connector

```shell
https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** Create the connector with this URL, authorize Docsy, then enable it for your conversation and check the tools.

**Compatibility:** Custom connectors may require suitable account or organization permissions.

Official/client documentation: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp

## Codex CLI

Shared MCP configuration for Codex CLI and the IDE extension.

**Where:** Terminal · ~/.codex/config.toml

```shell
codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** Complete the OAuth prompt, or run codex mcp login docsy; inspect codex mcp list.

Official/client documentation: https://developers.openai.com/learn/docs-mcp

## Cursor

Add an HTTP MCP server through Cursor Customize or mcp.json.

**Where:** ~/.cursor/mcp.json · .cursor/mcp.json

```json
{
  "mcpServers": {
    "docsy": {
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** In Cursor MCP settings, authorize Docsy and verify all five tools appear.

Official/client documentation: https://cursor.com/docs/mcp

## Devin

Native Devin CLI remote MCP installation with browser OAuth.

**Where:** Devin CLI · user or project scope

```shell
devin mcp add docsy https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** Run devin mcp login docsy, then devin mcp list; check for an authenticated connection.

Official/client documentation: https://docs.devin.ai/cli/extensibility/mcp/configuration

## OpenCode

Register the remote MCP URL with OpenCode V2 (native MCP CLI).

**Where:** Terminal · opencode mcp add / mcp list

```shell
opencode mcp add docsy --url https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** Run opencode mcp list; if auth is required, open /mcps and sign in with Docsy.

**Compatibility:** OpenCode V1 uses different JSON configuration keys; these commands target OpenCode V2.

Official/client documentation: https://dev.opencode.ai/v2/docs/mcp-servers/

## Antigravity CLI

Use the new serverUrl field, not legacy url or httpUrl.

**Where:** ~/.gemini/config/mcp_config.json

```json
{
  "mcpServers": {
    "docsy": {
      "serverUrl": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** Open /mcp, reload the configuration and complete Docsy OAuth.

Official/client documentation: https://antigravity.google/docs/cli/mcp/

## Kiro

Configure Docsy as a remote MCP server for Kiro.

**Where:** ~/.kiro/settings/mcp.json

```json
{
  "mcpServers": {
    "docsy": {
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** Kiro should offer OAuth through its MCP manager; confirm the connection is active.

Official/client documentation: https://kiro.dev/docs/mcp/configuration/

## Warp

Add Docsy as a custom remote MCP server from Warp agent settings.

**Where:** Warp · MCP servers / custom server URL

```json
{
  "mcpServers": {
    "docsy": {
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** Enable the new server in Warp and finish sign-in before asking the agent to search documentation.

**Compatibility:** Warp agent and Warp Factories have different MCP configuration surfaces; complete authorization using the supported client UI.

Official/client documentation: https://docs.warp.dev/factories/factory-as-code/

## Goose

Start Goose with Docsy as a remote Streamable HTTP extension.

**Where:** Goose CLI · session extension

```shell
goose session --with-streamable-http-extension "https://docsy.remcp.site/mcp/registry"
```

**Authorize and verify:** Complete browser authorization if prompted, and confirm the extension exposes Docsy documentation tools.

Official/client documentation: https://goose-docs.ai/docs/mcp/filesystem-mcp/

## GitHub Copilot

Use VS Code Copilot Chat MCP; cloud agent OAuth is a different capability.

**Where:** .vscode/mcp.json · VS Code

```json
{
  "servers": {
    "docsy": {
      "type": "http",
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** Run MCP: List Servers in VS Code; authorize Docsy and enable its tools in Copilot Chat.

**Compatibility:** GitHub Copilot cloud agent currently does not support remote OAuth MCP. This example is for IDE usage.

Official/client documentation: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers

## Grok Build

Register a remote MCP server in Grok Build CLI.

**Where:** Terminal · ~/.grok/config.toml

```shell
grok mcp add --transport http docsy https://docsy.remcp.site/mcp/registry
```

**Authorize and verify:** Run grok mcp doctor docsy and authorize from /mcps if needed.

Official/client documentation: https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-pager/docs/user-guide/07-mcp-servers.md

## Custom Agent

Use the standard Streamable HTTP transport for a custom MCP-capable agent.

**Where:** Remote MCP · Streamable HTTP

```json
{
  "mcpServers": {
    "docsy": {
      "url": "https://docsy.remcp.site/mcp/registry"
    }
  }
}
```

**Authorize and verify:** Implement OAuth 2.1 discovery and PKCE, then call initialize → tools/list → a read-only tool.

**Compatibility:** Generic JSON is illustrative. Custom clients must implement their own MCP transport and OAuth handling.

Official/client documentation: https://modelcontextprotocol.io/specification/2025-11-25/basic/transports

## End-to-end check

After approving read-only access, ask your agent:

> Use Docsy to find the official React useEffect cleanup guidance, identify the resolved library and show the original source URL.

It should identify an indexed library and include a publisher/source URL. An unauthenticated `401` from the endpoint is an expected OAuth challenge, not a successful MCP test. If an agent cannot complete the browser OAuth flow, do not disable authentication; choose a client supporting remote MCP OAuth.

GitHub Copilot **cloud agent** and code review do not support remote OAuth-protected MCP servers at this time. Use the **VS Code Copilot** entry for the example above; do not apply that configuration to the GitHub cloud agent.

Client installation is independent of marketplace acceptance by OpenAI, Anthropic, Cursor, Google or other vendors.
