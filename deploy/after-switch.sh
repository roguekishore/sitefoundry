#!/usr/bin/env bash
# Runs after switching /opt/foundry/current (including switch-back on failed health check).
# Env from activate.sh: UNIT RELEASE ROLE RELEASE_DIR (cwd = RELEASE_DIR, as root).
set -euo pipefail

: "${ROLE:?ROLE is required}"

case "$ROLE" in
  preview)
    mkdir -p /etc/systemd/system/foundry.service.d
    cat > /etc/systemd/system/foundry.service.d/release.conf <<'EOF'
[Service]
WorkingDirectory=/opt/foundry/current
EOF
    ;;
  run)
    mkdir -p /etc/systemd/system/foundry-runner.service.d
    cat > /etc/systemd/system/foundry-runner.service.d/release.conf <<'EOF'
[Service]
WorkingDirectory=/opt/foundry/current
ExecStartPre=
ExecStartPre=+/usr/local/bin/foundry-env
EOF
    ;;
  *)
    echo "after-switch.sh: unknown role '$ROLE'" >&2
    exit 1
    ;;
esac

systemctl daemon-reload
