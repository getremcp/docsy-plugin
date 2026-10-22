#!/usr/bin/env python3
"""Fail closed unless MCP Registry server.json is a verified stable release.

This script is read-only. It runs before the GitHub OIDC publish step so that
an unpublished OAuth candidate or accidental version change can never become
the registry listing simply because someone dispatches the workflow.
"""
import json
import re
from pathlib import Path
from urllib.request import Request, urlopen

REPO = "getremcp/docsy-plugin"
ROOT = Path(__file__).resolve().parents[2]


def fetch(url):
    request = Request(url, headers={"User-Agent": "Docsy-Registry-Release-Check",
                                    "Accept": "application/vnd.github+json"})
    with urlopen(request, timeout=20) as response:
        return response.read()


def verify(current_bytes, tagged_bytes, release):
    current = json.loads(current_bytes)
    version = current.get("version")
    if not isinstance(version, str) or not re.fullmatch(r"\d+\.\d+\.\d+", version):
        raise ValueError("Registry manifest version must be stable semver")
    tag = "plugin-v" + version
    if current.get("name") != "io.github.getremcp/docsy":
        raise ValueError("Registry namespace changed unexpectedly")
    if current.get("remotes") != [
        {"type": "streamable-http", "url": "https://docsy.remcp.site/mcp/registry"}
    ]:
        raise ValueError("Unexpected public registry endpoint")
    if release.get("tag_name") != tag or release.get("draft") or release.get("prerelease"):
        raise ValueError("MCP Registry publishing requires a stable, matching GitHub Release")
    if not release.get("published_at"):
        raise ValueError("Release is not published")
    if current_bytes != tagged_bytes:
        raise ValueError("server.json must be byte-identical to its stable Git release tag")
    return tag


def main():
    current = (ROOT / "server.json").read_bytes()
    data = json.loads(current)
    version = data.get("version")
    if not isinstance(version, str) or not re.fullmatch(r"\d+\.\d+\.\d+", version):
        raise ValueError("Invalid server.json version")
    tag = f"plugin-v{version}"
    release = json.loads(fetch(f"https://api.github.com/repos/{REPO}/releases/tags/{tag}"))
    tagged = fetch(f"https://raw.githubusercontent.com/{REPO}/refs/tags/{tag}/server.json")
    print("PASS stable MCP Registry source:", verify(current, tagged, release))


if __name__ == "__main__":
    main()
