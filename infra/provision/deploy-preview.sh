# Deploys origin/main on the preview instance. After common.sh; sent by deploy.sh.
# The gallery is built into a side folder and swapped in, so the site never serves a
# half-built gallery; the server restarts at the end (the runner retries meanwhile).
REPO_DIR=/home/foundry/sitefoundry
export PATH=/opt/node/bin:$PATH

[[ -d $REPO_DIR/.git ]] || { echo "no repository at $REPO_DIR: run provision/preview.sh first"; exit 1; }
BEFORE=$(as foundry "git -C $REPO_DIR rev-parse --short HEAD")

say "pull"
clone_or_pull foundry "$REPO_DIR"
AFTER=$(as foundry "git -C $REPO_DIR rev-parse --short HEAD")
echo "$BEFORE -> $AFTER"
as foundry "git -C $REPO_DIR log --oneline $BEFORE..$AFTER" | head -n 20

say "install and build"
quiet as foundry "cd $REPO_DIR && pnpm install --frozen-lockfile"
quiet as foundry "cd $REPO_DIR && NODE_OPTIONS=--max-old-space-size=1536 pnpm build:server"
# A no-op unless Playwright's version moved; then it fetches the matching Chromium.
quiet as foundry "cd $REPO_DIR && pnpm exec playwright install chromium"
quiet as foundry "cd $REPO_DIR/apps/gallery && rm -rf dist.next && NODE_OPTIONS=--max-old-space-size=1536 pnpm exec vite build --outDir dist.next --emptyOutDir"
as foundry "cd $REPO_DIR/apps/gallery && rm -rf dist.old && { [[ ! -d dist ]] || mv dist dist.old; } && mv dist.next dist && rm -rf dist.old"

say "restart"
systemctl restart foundry
wait_for http://127.0.0.1:4401/ 30 && echo "server answers on :4401" || { echo "server does not answer"; journalctl -u foundry -n 30 --no-pager; exit 1; }
echo "front page: HTTP $(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:4401/)  (a redirect to the login)"
echo "done: preview at $AFTER"
