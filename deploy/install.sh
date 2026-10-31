#!/usr/bin/env bash
# Runs once per release on the box before switching /opt/foundry/current.
# Env from activate.sh: UNIT RELEASE ROLE RELEASE_DIR (cwd = RELEASE_DIR, as root).
set -euo pipefail

export PATH="/opt/node/bin:$PATH"
: "${ROLE:?ROLE is required}"
: "${RELEASE_DIR:=$(pwd)}"

case "$ROLE" in
  preview) OWNER=foundry ;;
  run)     OWNER=runner ;;
  *) echo "install.sh: unknown role '$ROLE'" >&2; exit 1 ;;
esac

chmod 0755 "$RELEASE_DIR"
chown -R "$OWNER:$OWNER" "$RELEASE_DIR"
runuser -l "$OWNER" -c "export PATH=/opt/node/bin:\$PATH && cd '$RELEASE_DIR' && pnpm install --frozen-lockfile && pnpm exec playwright install chromium"
