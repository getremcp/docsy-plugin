# Security policy

Docsy's public plugin repository contains **distribution metadata**, not the hosted MCP backend, its databases, deployment credentials or source crawler. Its published MCP tools only read developer documentation.

## Report a vulnerability privately

If you find a credential, private document, compromised release artifact, unsafe MCP behavior or other vulnerability:

1. Use [GitHub's private vulnerability reporting](https://github.com/getremcp/docsy-plugin/security/advisories/new) if available to your account.
2. Otherwise, contact [Docsy support](https://docsy.remcp.site/support) and request a confidential disclosure channel **before** sharing sensitive evidence.
3. Do **not** post tokens, private links, proof-of-exploit payloads, customer data or unpublished implementation details in public issues or pull requests.

If credentials may have been exposed, **revoke/rotate them immediately**; removing a string from the latest Git commit does not remove it from Git history, forks, caches or releases.

## Supported surfaces and security boundaries

- **Account-linked MCP:** `https://docsy.remcp.site/mcp/registry` — requires OAuth 2.1.
- **Account-free evaluator:** `https://docsy.remcp.site/mcp/public` — rate-limited access to **public** documentation only, no account data or private library access.
- **Read-only tools:** `resolve-library-id`, `list-library-versions`, `query-docs`, `search` and `fetch`. They cannot run local commands or modify files.
- **Public artifacts:** use the [stable GitHub release](https://github.com/getremcp/docsy-plugin/releases/latest). A prerelease or a third-party directory page is not proof of platform approval.

For account issues and supported documentation access, see [Support](https://docsy.remcp.site/support), [Privacy](https://docsy.remcp.site/privacy) and [Terms](https://docsy.remcp.site/terms).
