# Docsy

![Docsy](assets/docsy-wordmark.svg)

Version-aware developer documentation with original source links through a hosted MCP server.

[Website](https://docsy.remcp.site) · [Docs](https://docsy.remcp.site/docs) · [Releases](https://github.com/getremcp/docsy-plugin/releases) · [SDK & CLI](https://github.com/getremcp/docsy) · [Support](https://docsy.remcp.site/support)

## Install

Canonical remote endpoint: https://docsy.remcp.site/mcp/registry
Existing integrations may use https://docsy.remcp.site/mcp.
Authorize via OAuth where your client requires it.

### Claude Code

    claude mcp add --transport http docsy https://docsy.remcp.site/mcp/registry

### Codex

    codex mcp add docsy --url https://docsy.remcp.site/mcp/registry
    codex mcp login docsy

### Cursor

Configure the server under Cursor MCP settings or copy the example in [.cursor/mcp.json](.cursor/mcp.json).

### Claude Code community marketplace

    claude plugin marketplace add getremcp/docsy-plugin
    claude plugin install docsy@docsy-community

For more clients, see [Getting started](docs/GETTING-STARTED.md) and [Client integrations](docs/CLIENT-INTEGRATIONS.md).

## Release assets

Download the stable plugin ZIP from [GitHub Releases](https://github.com/getremcp/docsy-plugin/releases).
Versioned tags use plugin-vMAJOR.MINOR.PATCH. Pre-releases are candidates and
do not replace stable marketplace packages automatically.

This is a release-only repository of vetted plugin manifests, skill, artwork and
installation instructions. The hosted Docsy API, crawler, database and deployment
code are not open-source in this repository. Development, tests and release
automation are maintained in one private canonical source repository. All
public changes must pass a strict file allowlist and release CI gate.

See [Security](SECURITY.md) for vulnerability reporting and [MIT License](LICENSE).

[Privacy](https://docsy.remcp.site/privacy) · [Terms](https://docsy.remcp.site/terms)
