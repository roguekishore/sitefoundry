#!/usr/bin/env bash
# Root-key bootstrap, the same pattern as warden's terraform/bootstrap.sh.
#
# Reads jk's root credential CSV from ~/Downloads at runtime, hands it to Terraform as
# one sensitive variable, and exits. Nothing is copied into ~/.aws/credentials, no
# profile is created, no value is echoed or logged.
#
#   ./bootstrap.sh init
#   TF_CLI_EXTRA='-out=tfplan' ./bootstrap.sh plan
#
# The operator applies the saved plan: terraform apply tfplan (then rm -f tfplan).

set -euo pipefail

cd "$(dirname "$0")"

# Reuse downloaded providers across inits (shared with warden's checkout).
export TF_PLUGIN_CACHE_DIR="${TF_PLUGIN_CACHE_DIR:-$HOME/.terraform.d/plugin-cache}"
mkdir -p "$TF_PLUGIN_CACHE_DIR"

DOWNLOADS="${DOWNLOADS:-$HOME/Downloads}"
ACCOUNT=jk
ACTION="${1:-plan}"

build_credentials() {
  local file="$DOWNLOADS/$ACCOUNT.csv"
  [[ -f "$file" ]] || { echo "missing credential file: $file" >&2; exit 1; }

  # Strip BOM and CR, take the second line, split on comma.
  local line
  line="$(sed -e '1s/^\xEF\xBB\xBF//' -e 's/\r$//' "$file" | sed -n '2p')"
  local key="${line%%,*}"
  local secret="${line##*,}"

  [[ -n "$key" && -n "$secret" && "$key" != "$secret" ]] || {
    echo "could not parse credentials from $file" >&2; exit 1; }

  printf '{"access_key":"%s","secret_key":"%s"}' "$key" "$secret"
}

case "$ACTION" in
  plan|destroy)
    TF_VAR_credentials="$(build_credentials)" \
      terraform "$ACTION" ${TF_CLI_EXTRA:-}
    ;;
  init)
    terraform init
    ;;
  *)
    echo "usage: $0 {init|plan|destroy}  (apply a saved plan with: terraform apply tfplan)" >&2
    exit 1
    ;;
esac
