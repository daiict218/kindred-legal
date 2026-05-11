#!/usr/bin/env bash
# build.sh — re-renders the privacy notice markdown to index.html
# Usage: ./build.sh
# Idempotent: safe to run multiple times; always overwrites index.html from source.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building index.html from ../kindred-docs/018-privacy-notice.md ..."
node render.js
echo "Done."
