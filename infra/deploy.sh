#!/usr/bin/env bash
# Deploys what is on GitHub's main to the cloud (phase 7, step E). The instances pull from
# GitHub, so this refuses when the laptop's main is not pushed: deploying would silently
# ship an older commit.
#
#   ./deploy.sh            the preview instance: pull, install, build server + gallery, restart
#   ./deploy.sh run        the run instance's runner now (normally it updates itself each time
#                          the instance starts; refused while a run is going)
#
# The operator runs this with !, because ssm.sh uses jk's root keys.
set -euo pipefail
cd "$(dirname "$0")"

TARGET="${1:-preview}"
case "$TARGET" in preview|run) ;; *) echo "usage: deploy.sh [preview|run]" >&2; exit 1 ;; esac

LOCAL="$(git rev-parse main)"
REMOTE="$(git ls-remote origin refs/heads/main | cut -f1)"
if [[ "$LOCAL" != "$REMOTE" ]]; then
  echo "main here is ${LOCAL:0:7}, GitHub's is ${REMOTE:0:7}: push main first (git push origin main)." >&2
  exit 1
fi
# The vault repo next to this one: once it has a GitHub remote, its main must be pushed too
# (the preview instance pulls it and builds the vault gallery from it).
VAULT_DIR="$(cd .. && pwd)-VAULT"
if [[ -d "$VAULT_DIR/.git" ]] && git -C "$VAULT_DIR" remote get-url origin >/dev/null 2>&1; then
  V_LOCAL="$(git -C "$VAULT_DIR" rev-parse main)"
  V_REMOTE="$(git -C "$VAULT_DIR" ls-remote origin refs/heads/main | cut -f1)"
  if [[ "$V_LOCAL" != "$V_REMOTE" ]]; then
    echo "the vault's main here is ${V_LOCAL:0:7}, GitHub's is ${V_REMOTE:0:7}: push it first (git -C $VAULT_DIR push origin main)." >&2
    exit 1
  fi
fi
echo "deploying main ${LOCAL:0:7} to $TARGET"
exec ./ssm.sh "$TARGET" provision/common.sh "provision/deploy-$TARGET.sh"
