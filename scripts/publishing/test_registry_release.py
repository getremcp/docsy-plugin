import importlib.util
import json
import unittest
from pathlib import Path

PATH = Path(__file__).with_name("verify_registry_release.py")
SPEC = importlib.util.spec_from_file_location("docsy_registry_release_verifier", PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)

MANIFEST = {
    "name": "io.github.getremcp/docsy",
    "version": "1.0.9",
    "remotes": [{"type": "streamable-http",
                 "url": "https://docsy.remcp.site/mcp/registry"}]
}
RELEASE = {"tag_name": "plugin-v1.0.9", "published_at": "2026-10-17T12:00:00Z",
           "draft": False, "prerelease": False}


class StableReleaseTest(unittest.TestCase):
    def test_exact_stable_release(self):
        document = json.dumps(MANIFEST).encode()
        self.assertEqual(MODULE.verify(document, document, RELEASE), "plugin-v1.0.9")

    def test_reject_prerelease(self):
        document = json.dumps(MANIFEST).encode()
        with self.assertRaisesRegex(ValueError, "stable"):
            MODULE.verify(document, document, {**RELEASE, "prerelease": True})

    def test_reject_unpublished_candidate(self):
        document = json.dumps(MANIFEST).encode()
        with self.assertRaisesRegex(ValueError, "stable"):
            MODULE.verify(document, document, {**RELEASE, "tag_name": "plugin-v1.0.10"})

    def test_reject_server_manifest_drift(self):
        document = json.dumps(MANIFEST).encode()
        with self.assertRaisesRegex(ValueError, "byte-identical"):
            MODULE.verify(document + b"\n", document, RELEASE)

    def test_reject_wrong_remote_endpoint(self):
        bad = {**MANIFEST, "remotes": [{"type": "streamable-http",
                                       "url": "https://example.com/mcp"}]}
        document = json.dumps(bad).encode()
        with self.assertRaisesRegex(ValueError, "Unexpected"):
            MODULE.verify(document, document, RELEASE)


if __name__ == "__main__":
    unittest.main()
