# The run instance (m7g.large, 10.20.0.20): the runner, the Gemini CLI, Claude Code,
# Chromium. After common.sh. First run: makes the deploy key, prints it, stops. Add the key
# (with write access), run it again.
REPO_DIR=/home/runner/sitefoundry
VAULT_DIR=/home/runner/sitefoundry-vault
WORKTREES=/home/runner/sitefoundry-runs
SERVER_URL=http://10.20.0.10:4401

base_packages

say "user and deploy key"
make_user runner
deploy_key runner "foundry-run (write)" rw
vault_key runner "foundry-run vault (read only)"

install_node

chromium_libs

say "the Gemini CLI"
if [[ ! -f "$(npm root -g)/@google/gemini-cli/bundle/gemini.js" ]]; then
  quiet npm install -g @google/gemini-cli
fi
echo "gemini $(gemini --version 2>/dev/null | head -1), npm root -g = $(npm root -g)"

say "Claude Code (native installer, as runner)"
if [[ ! -x /home/runner/.local/bin/claude ]]; then
  quiet as runner "curl -fsSL https://claude.ai/install.sh | bash"
fi
echo "claude $(as runner 'claude --version' 2>&1 | head -1)"
# The token comes from CLAUDE_CODE_OAUTH_TOKEN; this stops the first-run questions.
[[ -f /home/runner/.claude.json ]] || { echo '{"hasCompletedOnboarding":true}' > /home/runner/.claude.json; chown runner:runner /home/runner/.claude.json; }

say "Gemini settings: Vertex, no billing tier (Standard)"
install -d -o runner -g runner /home/runner/.gemini
echo '{"security":{"auth":{"selectedType":"vertex-ai"}}}' > /home/runner/.gemini/settings.json
chown runner:runner /home/runner/.gemini/settings.json

say "the repository and git identity"
clone_or_pull runner "$REPO_DIR"
as runner "git config --global user.name '$GIT_NAME' && git config --global user.email '$GIT_EMAIL'"
install -d -o runner -g runner "$WORKTREES"
# the vault: its gallery gets thumbnails here too (the thumbnails job fetches it each time)
[[ -z "$VAULT_REPO_URL" ]] || clone_or_pull runner "$VAULT_DIR" "$VAULT_REPO_URL"

say "install, build, Chromium (a few minutes the first time)"
quiet as runner "cd $REPO_DIR && pnpm install --frozen-lockfile"
quiet as runner "cd $REPO_DIR && pnpm build:server"
quiet as runner "cd $REPO_DIR && pnpm exec playwright install chromium"
chromium_check runner "$REPO_DIR"

say "power-off permission for the runner's self-shutdown"
[[ -x /usr/sbin/shutdown ]] || { echo "no /usr/sbin/shutdown"; exit 1; }
echo 'runner ALL=(root) NOPASSWD: /usr/sbin/shutdown -h now' > /etc/sudoers.d/runner
chmod 440 /etc/sudoers.d/runner
visudo -cf /etc/sudoers.d/runner >/dev/null

say "secrets script and the runner service"
write_env_script run
rm -f /usr/local/bin/foundry-runner-update
cat > /etc/systemd/system/foundry-runner.service <<UNIT
[Unit]
Description=Foundry runner (takes recreation jobs from the preview's server)
After=network-online.target
Wants=network-online.target

[Service]
User=runner
WorkingDirectory=$REPO_DIR
Environment=PATH=/opt/node/bin:/home/runner/.local/bin:/usr/local/bin:/usr/bin
Environment=FOUNDRY_SERVER_URL=$SERVER_URL
Environment=FOUNDRY_REPO=$REPO_DIR
Environment=FOUNDRY_WORKTREES=$WORKTREES
Environment=FOUNDRY_VAULT=$VAULT_DIR
Environment=FOUNDRY_GALLERY_HOST=0.0.0.0
Environment=FOUNDRY_FETCH=1
Environment=FOUNDRY_PUSH=1
Environment=FOUNDRY_SELF_SHUTDOWN_MINUTES=30
ExecStartPre=+/usr/local/bin/foundry-env
ExecStart=/bin/bash -c 'set -a; . /run/foundry/secrets.env; exec /opt/node/bin/node packages/server/dist/runner.mjs'
TimeoutStartSec=15min
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
UNIT
systemctl daemon-reload
systemctl enable foundry-runner >/dev/null 2>&1
systemctl restart foundry-runner

RELEASE="$(aws ssm get-parameter --name /foundry/release --query Parameter.Value --output text 2>/dev/null || true)"
if [[ -n "$RELEASE" && "$RELEASE" != "None" ]]; then
  say "activating release $RELEASE"
  ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"
  BUCKET="foundry-deploy-$ACCOUNT"
  TMP_TAR="$(mktemp /var/tmp/foundry-release.XXXXXX.tar.gz)"
  aws s3 cp "s3://$BUCKET/releases/$RELEASE.tar.gz" "$TMP_TAR"
  tar -xzf "$TMP_TAR" -O deploy/activate.sh > /var/tmp/foundry-activate.sh
  rm -f "$TMP_TAR"
  bash /var/tmp/foundry-activate.sh "$RELEASE" "$BUCKET" run
fi

say "checks"
sleep 4
systemctl is-active foundry-runner
journalctl -u foundry-runner -n 8 --no-pager | cut -c1-200
echo "secrets file: $(stat -c '%a %U' /run/foundry/secrets.env), $(wc -l < /run/foundry/secrets.env) lines (3 with Claude, 2 without)"
echo "done: run"
