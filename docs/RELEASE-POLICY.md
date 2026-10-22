# Docsy release and repository policy

Docsy uses the same separation-of-concerns model as ReMCP.

| Repository | Visibility | Authority |
| --- | --- | --- |
| `antonbaider/docsy-full` | Private | Canonical production/backend, all development, tests and release gates |
| `getremcp/docsy-plugin` | Public | Tested plugin manifests, documentation, release ZIPs, verified review evidence |
| `getremcp/docsy` | Public | Vetted SDK/CLI source snapshots and npm distribution |

Public repositories do not accept normal development branches. Work is developed in the private repo, with package tests, source inspection, deterministic packaging, release integrity checks and semantic versions before a public release. Only allowlisted public material is exported. Do not mirror private application code, credentials, server configuration or operational infrastructure.

Plugin tags use `plugin-vMAJOR.MINOR.PATCH`; SDK and CLI tags use `sdk-vMAJOR.MINOR.PATCH` and `cli-vMAJOR.MINOR.PATCH`. npm packages are `@remcp/docsy-sdk` and `@remcp/docsy-cli`. npm versions are immutable; SDK must be published before a CLI that depends on that version.

The GitHub Release page is the canonical location for verified ZIPs. Each release must be built from its exact tag and compared against its assets. Mark OAuth review candidates as prerelease until account linking, protocol smoke tests and review evidence pass.

Marketplace states **published**, **listed**, **submitted**, **pending review** and **private installation** are not interchangeable. See [distribution status](DISTRIBUTION-STATUS.md) before creating any badge claiming approval. The GitHub plugin catalog, npm publication, MCP Registry, Smithery, Cline, Cursor and official OpenAI/Anthropic listing are distinct distribution channels.

The independent Gemini CLI extension is released from the private
`distribution/gemini` source into `getremcp/docsy` and tagged
`gemini-vX.Y.Z`. The official Gemini CLI Gallery discovers tagged,
public GitHub repositories with the `gemini-cli-extension` topic;
gallery indexing is not the same as a confirmed listing.

## Official MCP Registry release gate

The MCP Registry workflow is a separate manual publication action, not a
shortcut around the plugin release process. It now checks `server.json`
against the **published stable** GitHub Release corresponding to
`plugin-v<server.json.version>`; the tagged manifest must be byte-identical,
the public endpoint/namespace must match and the release must not be draft
or prerelease. This check executes **before** GitHub OIDC authentication.

Plugin `1.0.10` is still an OAuth review candidate; `server.json` remains
on the stable `1.0.9` manifest until the new version passes its full release
gates. Do not promote a candidate by triggering the Registry workflow.

## Protected release synchronization

All public file updates are exported from a clean, tested private source commit
through a temporary `release-sync/*` pull request. The public default
branch requires GitHub Actions checks and pull requests, including for admins.
The release staging branch is deleted after merging; ordinary development
branches cannot be created in this public repository. Public tags and ZIP
assets remain separately versioned and protected.
