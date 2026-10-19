#!/usr/bin/env bash
# Runs `aws` as jk with the root keys from ~/Downloads/jk.csv, read here and exported for
# this one command only (the same pattern as bootstrap.sh). Never uses a profile, so the
# default profile (the work account) can't be hit by mistake. The operator runs it with !.
#
#   ./aws.sh ssm describe-instance-information
#   source ./aws.sh      (from another script: defines `jk_aws`, the same thing as a function)
set -euo pipefail

DOWNLOADS="${DOWNLOADS:-$HOME/Downloads}"
export MSYS_NO_PATHCONV=1   # Git Bash would turn /foundry/... into C:/Program Files/Git/foundry/...

jk_aws() {
  local file="$DOWNLOADS/jk.csv"
  [[ -f "$file" ]] || { echo "missing credential file: $file" >&2; return 1; }
  local line key secret
  line="$(sed -e '1s/^\xEF\xBB\xBF//' -e 's/\r$//' "$file" | sed -n '2p')"
  key="${line%%,*}"
  secret="${line##*,}"
  [[ -n "$key" && -n "$secret" && "$key" != "$secret" ]] || { echo "could not parse $file" >&2; return 1; }
  env -u AWS_PROFILE AWS_ACCESS_KEY_ID="$key" AWS_SECRET_ACCESS_KEY="$secret" \
    AWS_DEFAULT_REGION=ap-south-1 AWS_PAGER="" aws "$@"
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then jk_aws "$@"; fi
