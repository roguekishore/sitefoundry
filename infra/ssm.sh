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
# Decode to a file, run it, print the tail of its output, and exit with the script's own status.
printf '{"commands":["echo %s | base64 -d > /tmp/foundry-ssm.sh; bash -e /tmp/foundry-ssm.sh > /tmp/foundry-ssm.out 2>&1; rc=$?; tail -c 20000 /tmp/foundry-ssm.out; rm -f /tmp/foundry-ssm.sh /tmp/foundry-ssm.out; exit $rc"]}' "$B64" > "$JSON"

echo "instance $ID ($NAME)"
CMD="$(jk_aws ssm send-command --instance-ids "$ID" --document-name AWS-RunShellScript \
  --parameters "file://$(cygpath -w "$JSON")" --timeout-seconds 1800 \
  --query 'Command.CommandId' --output text)"
echo "command $CMD, waiting"

while :; do
  STATUS="$(jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
    --query 'Status' --output text 2>/dev/null || echo Pending)"
  case "$STATUS" in
    Pending|InProgress|Delayed) sleep 5 ;;
    *) break ;;
  esac
done

jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
  --query 'StandardOutputContent' --output text
ERR="$(jk_aws ssm get-command-invocation --command-id "$CMD" --instance-id "$ID" \
  --query 'StandardErrorContent' --output text)"
[[ -z "$ERR" || "$ERR" == None ]] || { echo "--- stderr ---"; echo "$ERR"; }
echo "status: $STATUS"
[[ "$STATUS" == Success ]]
