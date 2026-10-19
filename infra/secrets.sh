#!/usr/bin/env bash
# Puts the foundry secrets into Parameter Store (SecureString, the aws/ssm key), and only the
# ones that are missing. Run it in your own terminal, not with !: it asks for the passphrase
# and the Claude token, and ! has no stdin.
#
#   cd D:/PROJECTS/SITEFOUNDRY/infra && ./secrets.sh
#
# To change one: aws.sh ssm delete-parameter --name /foundry/..., run this again, then restart
# that instance's service (the instance rewrites its env file from these at every start).
#
#   /foundry/preview/passphrase-hash   the login (made by `server.mjs setup-login`)
#   /foundry/preview/totp-secret       the login's authenticator secret
#   /foundry/shared/runner-token       what the runner sends the server (made here)
#   /foundry/run/vertex-key            GOOGLE_API_KEY from ~/.gemini/.env (Gemini)
#   /foundry/run/claude-oauth-token    from `claude setup-token` (Claude Code)
set -euo pipefail
cd "$(dirname "$0")"
source ./aws.sh

have() { jk_aws ssm get-parameter --name "$1" --query 'Parameter.Name' --output text >/dev/null 2>&1; }

put() { # put <name> <value>: the value goes through a file, not the command line
  local f; f="$(mktemp)"
  printf '%s' "$2" > "$f"
  jk_aws ssm put-parameter --name "$1" --type SecureString --value "file://$(cygpath -w "$f")" >/dev/null
  rm -f "$f"
  echo "  set $1"
}

# --- the login
if have /foundry/preview/passphrase-hash && have /foundry/preview/totp-secret; then
  echo "login: already set"
else
  [[ -f ../packages/server/dist/server.mjs ]] || { echo "build the server first: pnpm build:server" >&2; exit 1; }
  read -rsp "Choose the login passphrase (12+ characters): " PASS; echo
  read -rsp "Again: " PASS2; echo
  [[ "$PASS" == "$PASS2" ]] || { echo "they differ" >&2; exit 1; }
  LOGIN="$(printf '%s\n' "$PASS" | node ../packages/server/dist/server.mjs setup-login)"
  put /foundry/preview/passphrase-hash "$(sed -n 's/^FOUNDRY_PASSPHRASE_HASH=//p' <<<"$LOGIN")"
  put /foundry/preview/totp-secret "$(sed -n 's/^FOUNDRY_TOTP_SECRET=//p' <<<"$LOGIN")"
  echo "  (add the authenticator entry shown above to your phone now: the secret is not shown again)"
fi

# --- the runner token
if have /foundry/shared/runner-token; then echo "runner token: already set"; else
  put /foundry/shared/runner-token "$(openssl rand -hex 24)"
fi

# --- the Vertex key
if have /foundry/run/vertex-key; then echo "vertex key: already set"; else
  KEY="$(sed -n 's/^GOOGLE_API_KEY=//p' "$HOME/.gemini/.env" | tr -d '\r"'"'" | head -1)"
  [[ -n "$KEY" ]] || { echo "no GOOGLE_API_KEY in ~/.gemini/.env" >&2; exit 1; }
  put /foundry/run/vertex-key "$KEY"
fi

# --- the Claude token (optional: without it Claude runs fail on the run instance and Gemini
# is unaffected; run this script again later to add it)
if have /foundry/run/claude-oauth-token; then echo "claude token: already set"; else
  echo "Run \`claude setup-token\` in another terminal and paste the token, or press Enter to skip Claude."
  read -rsp "Claude token (Enter = skip): " TOKEN; echo
  if [[ -n "$TOKEN" ]]; then put /foundry/run/claude-oauth-token "$TOKEN"; else echo "  skipped Claude"; fi
fi
echo done
