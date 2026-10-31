#!/usr/bin/env bash
# Builds a foundry release tarball in GitHub Actions:
#   deploy/build.sh <sha12> <out-dir>
# Writes <out-dir>/<sha12>.tar.gz containing the tracked tree at HEAD,
# packages/server/dist, apps/gallery/dist, and .release-commit.
set -euo pipefail

SHA12="${1:?usage: deploy/build.sh <sha12> <out-dir>}"
OUT_DIR="${2:?usage: deploy/build.sh <sha12> <out-dir>}"

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

mkdir -p "$OUT_DIR"
OUT_ABS="$(cd "$OUT_DIR" && pwd)"
TAR_PATH="$OUT_ABS/$SHA12.tar"

cleanup() {
  rm -f "$REPO_ROOT/.release-commit" "$TAR_PATH"
}
trap cleanup EXIT

npm install -g pnpm@12.14.0
pnpm install --frozen-lockfile
NODE_OPTIONS=--max-old-space-size=4096 pnpm build:server
(
  cd apps/gallery
  NODE_OPTIONS=--max-old-space-size=4096 pnpm exec vite build --outDir dist --emptyOutDir
)

[[ -f packages/server/dist/server.mjs ]] || { echo "build.sh: missing packages/server/dist/server.mjs" >&2; exit 1; }
[[ -f packages/server/dist/runner.mjs ]] || { echo "build.sh: missing packages/server/dist/runner.mjs" >&2; exit 1; }
[[ -f apps/gallery/dist/index.html ]] || { echo "build.sh: missing apps/gallery/dist/index.html" >&2; exit 1; }

git rev-parse HEAD > .release-commit
git archive --format=tar -o "$TAR_PATH" HEAD
tar -rf "$TAR_PATH" packages/server/dist apps/gallery/dist .release-commit
gzip -n -f "$TAR_PATH"
