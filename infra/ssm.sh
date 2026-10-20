#!/usr/bin/env bash
# Runs provisioning scripts on an instance over SSM and prints what they say.
#
#   ./ssm.sh preview provision/common.sh provision/preview.sh
#   ./ssm.sh run     provision/common.sh provision/run.sh
#   ./ssm.sh preview -c 'systemctl status foundry --no-pager'     (a one-line command)
#
# The scripts are joined, sent base64-encoded (no quoting trouble), and run as root with
# `bash -e`. SSM keeps only 24,000 characters of output, so the scripts log to a file on the
# instance and print a short summary; the full log is /var/log/foundry-provision.log there.
# NOWAIT=1 sends the script and returns at once (the instance carries on without the laptop);
# the result is read later with the command printed.
# The operator runs this with !, because it uses jk's root keys.
set -euo pipefail
cd "$(dirname "$0")"
source ./aws.sh

WHICH="${1:?usage: ssm.sh <preview|run> <script...> | -c '<command>'}"
shift
case "$WHICH" in
  preview) NAME=FoundryPreview ;;
  run)     NAME=FoundryRun ;;
  *) echo "first argument: preview or run" >&2; exit 1 ;;
esac

# The instance ids come from Terraform's state, by instance name tag.
ID="$(jk_aws ec2 describe-instances \
  --filters "Name=tag:warden:app,Values=foundry" "Name=tag:Name,Values=foundry-$WHICH" \
            "Name=instance-state-name,Values=pending,running,stopping,stopped" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)"
[[ "$ID" == i-* ]] || { echo "no instance named foundry-$WHICH (tag Name) found" >&2; exit 1; }

if [[ "${1:-}" == "-c" ]]; then
  BODY="$2"
else
  BODY="$(cat "$@" | tr -d '\r')"
fi
B64="$(printf '%s\n' "$BODY" | base64 -w0)"
JSON="$(mktemp)"
trap 'rm -f "$JSON"' EXIT
# Decode to a file and run it with its output going straight to SSM's stdout capture, which
# updates while the script runs, so the polling loop below can print it as it appears.
# A file of its own per command: bash reads a script as it goes, so a second command writing
# the same path cut a running deploy short (and it still exited 0).
printf '{"commands":["f=$(mktemp /tmp/foundry-ssm.XXXXXX); echo %s | base64 -d > $f; bash -e $f 2>&1; rc=$?; rm -f $f; exit $rc"]}' "$B64" > "$JSON"

echo "instance $ID ($NAME)"
CMD="$(jk_aws ssm send-command --instance-ids "$ID" --document-name AWS-RunShellScript \
  --parameters "file://$(cygpath -w "$JSON")" --timeout-seconds 1800 \
  --query 'Command.CommandId' --output text)"
if [[ "${NOWAIT:-}" == 1 ]]; then
  echo "command $CMD sent; not waiting. Read the result later with:"
  echo "  ./aws.sh ssm get-command-invocation --command-id $CMD --instance-id $ID --query '[Status,StandardOutputContent,StandardErrorContent]' --output text"
  exit 0
fi
echo "command $CMD, running (output appears as the script prints it)"

shown=0 waited=0 quiet_for=0
while :; do
  STATUS="$(jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
    --query 'Status' --output text 2>/dev/null || echo Pending)"
  OUT="$(jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
    --query 'StandardOutputContent' --output text 2>/dev/null || true)"
  [[ "$OUT" == None ]] && OUT=""
  total=$(printf '%s' "$OUT" | grep -c '' || true)
  if (( total > shown )); then
    printf '%s\n' "$OUT" | tail -n +$((shown + 1))
    shown=$total quiet_for=0
  else
    quiet_for=$((quiet_for + 6))
    (( quiet_for % 30 == 0 )) && echo "   ... still going (${waited}s, $STATUS)"
  fi
  case "$STATUS" in
    Pending|InProgress|Delayed) sleep 6; waited=$((waited + 6)) ;;
    *) break ;;
  esac
done

ERR="$(jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
  --query 'StandardErrorContent' --output text)"
[[ -z "$ERR" || "$ERR" == None ]] || { echo "--- stderr ---"; echo "$ERR"; }
echo "status: $STATUS"
[[ "$STATUS" == Success ]]
