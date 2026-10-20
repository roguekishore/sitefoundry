# Brings the run instance's runner up to origin/main now, instead of at its next start.
# After common.sh; sent by `deploy.sh run`. Refuses while a run is going (restarting the
# runner would cut it off; it would be marked failed and need Resume).
if pgrep -u runner -f 'claude|gemini' >/dev/null; then
  echo "a run is going on this instance: not restarting the runner. Try again when it ends."
  exit 1
fi
say "restart the runner (it updates itself before starting)"
systemctl restart foundry-runner
sleep 3
systemctl is-active foundry-runner
journalctl -u foundry-runner -n 12 --no-pager -o cat | cut -c1-200
echo "done: run"
