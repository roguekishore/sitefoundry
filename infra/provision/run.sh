# The run instance (t4g.large, 10.20.0.20): the runner, the Gemini CLI, Claude Code,
# Chromium. After common.sh. First run: makes the deploy key, prints it, stops. Add the key
# (with write access), run it again.
REPO_DIR=/home/runner/sitefoundry
WORKTREES=/home/runner/sitefoundry-runs
SERVER_URL=http://10.20.0.10:4401

base_packages

say "user and deploy key"
make_user runner
deploy_key runner "foundry-run (write)" rw

install_node

say "libraries for headless Chromium"
quiet dnf install -y --skip-broken nss nspr atk at-spi2-atk at-spi2-core cups-libs libdrm libxkbcommon \
  libXcomposite libXdamage libXfixes libXrandr libXext libX11 libxcb mesa-libgbm alsa-lib pango cairo \
  fontconfig freetype dejavu-sans-fonts dejavu-sans-mono-fonts dejavu-serif-fonts google-noto-sans-fonts

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

say "install, build, Chromium (a few minutes the first time)"
quiet as runner "cd $REPO_DIR && pnpm install --frozen-lockfile"
quiet as runner "cd $REPO_DIR && pnpm build:server"
quiet as runner "cd $REPO_DIR && pnpm exec playwright install chromium"
CHECK="const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.setContent('<b>x</b>');console.log('headless chromium launches, version',b.version());await b.close()})().catch(e=>{console.error(e.message);process.exit(1)})"
as runner "cd $REPO_DIR && node -e \"$CHECK\"" \
  || { echo "Chromium does not launch: a library is missing (the message above names it)"; exit 1; }

say "power-off permission for the runner's self-shutdown"
[[ -x /usr/sbin/shutdown ]] || { echo "no /usr/sbin/shutdown"; exit 1; }
echo 'runner ALL=(root) NOPASSWD: /usr/sbin/shutdown -h now' > /etc/sudoers.d/runner
chmod 440 /etc/sudoers.d/runner
visudo -cf /etc/sudoers.d/runner >/dev/null

say "secrets script, self-update and the runner service"
write_env_script run
# Runs as runner before each start: the instance is switched on per run, so this keeps the
# runner at origin/main without a deploy step. Rebuilds only when main moved. Its failure is
# ignored (the "-" in the unit): the runner then starts on the build it already has.
cat > /usr/local/bin/foundry-runner-update <<SCRIPT
#!/bin/bash
# Written by infra/provision/run.sh. Brings $REPO_DIR to origin/main and rebuilds the runner.
set -euo pipefail
cd $REPO_DIR
git fetch -q origin main
if [[ "\$(git rev-parse HEAD)" == "\$(git rev-parse origin/main)" && -f packages/server/dist/runner.mjs ]]; then
  echo "runner up to date at \$(git rev-parse --short HEAD)"
  exit 0
fi
echo "updating the runner: \$(git rev-parse --short HEAD) -> \$(git rev-parse --short origin/main)"
git checkout -q main
git merge -q --ff-only origin/main
pnpm install --frozen-lockfile --reporter=silent
pnpm build:server
SCRIPT
chmod 755 /usr/local/bin/foundry-runner-update
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
Environment=FOUNDRY_GALLERY_HOST=0.0.0.0
Environment=FOUNDRY_FETCH=1
Environment=FOUNDRY_PUSH=1
Environment=FOUNDRY_SELF_SHUTDOWN_MINUTES=30
ExecStartPre=+/usr/local/bin/foundry-env
ExecStartPre=-/usr/local/bin/foundry-runner-update
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

say "checks"
sleep 4
systemctl is-active foundry-runner
journalctl -u foundry-runner -n 8 --no-pager | cut -c1-200
echo "secrets file: $(stat -c '%a %U' /run/foundry/secrets.env), $(wc -l < /run/foundry/secrets.env) lines (3 with Claude, 2 without)"
echo "done: run"
