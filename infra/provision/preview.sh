# The preview instance (t4g.small, 10.20.0.10): Caddy → the foundry server. After common.sh.
RUN_INSTANCE_ID=i-0ab154c93b3356c22
REPO_DIR=/home/foundry/sitefoundry
VAULT_DIR=/home/foundry/sitefoundry-vault
DATA_DIR=/var/lib/foundry

base_packages

say "user"
make_user foundry

install_node
chromium_libs

say "swap (the gallery build needs more than 2 GB)"
if ! swapon --show | grep -q /swapfile; then
  [[ -f /swapfile ]] || { fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile >/dev/null; }
  swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

say "data folders"
install -d -o foundry -g foundry -m 750 "$DATA_DIR" /var/lib/warden-runs

say "secrets script and the server service"
write_env_script preview
cat > /etc/systemd/system/foundry.service <<UNIT
[Unit]
Description=Foundry server (gallery, run pages, API)
After=network-online.target
Wants=network-online.target

[Service]
User=foundry
WorkingDirectory=$REPO_DIR
Environment=PATH=/opt/node/bin:/usr/local/bin:/usr/bin
Environment=FOUNDRY_HOST=0.0.0.0
Environment=FOUNDRY_DATA=$DATA_DIR
Environment=FOUNDRY_VAULT=$VAULT_DIR
Environment=FOUNDRY_COOKIE_DOMAIN=$DOMAIN
Environment=FOUNDRY_MACHINE=ec2
Environment=FOUNDRY_RUN_INSTANCE_ID=$RUN_INSTANCE_ID
Environment=AWS_REGION=$REGION
Environment=FOUNDRY_WARDEN_RUNS_DIR=/var/lib/warden-runs
Environment=FOUNDRY_LIVE_TARGET=http://10.20.0.20:4410
Environment=FOUNDRY_LIVE_URL=https://live.$DOMAIN/
ExecStartPre=+/usr/local/bin/foundry-env
ExecStart=/bin/bash -c 'set -a; . /run/foundry/secrets.env; exec /opt/node/bin/node packages/server/dist/server.mjs'
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
UNIT

say "Caddy (HTTPS for $DOMAIN and live.$DOMAIN)"
if [[ ! -x /usr/local/bin/caddy ]]; then
  curl -fsSL "https://caddyserver.com/api/download?os=linux&arch=arm64" -o /usr/local/bin/caddy
  chmod 755 /usr/local/bin/caddy
fi
id caddy >/dev/null 2>&1 || useradd --system --home-dir /var/lib/caddy --shell /sbin/nologin caddy
install -d -o caddy -g caddy /var/lib/caddy
mkdir -p /etc/caddy
cat > /etc/caddy/Caddyfile <<CADDY
$DOMAIN, live.$DOMAIN {
	reverse_proxy 127.0.0.1:4401
}
CADDY
cat > /etc/systemd/system/caddy.service <<UNIT
[Unit]
Description=Caddy
After=network-online.target
Wants=network-online.target

[Service]
User=caddy
Environment=HOME=/var/lib/caddy
ExecStart=/usr/local/bin/caddy run --config /etc/caddy/Caddyfile
ExecReload=/usr/local/bin/caddy reload --config /etc/caddy/Caddyfile
AmbientCapabilities=CAP_NET_BIND_SERVICE
Restart=always

[Install]
WantedBy=multi-user.target
UNIT

systemctl daemon-reload
systemctl enable foundry caddy >/dev/null 2>&1
systemctl restart foundry caddy

say "checks"
wait_for http://127.0.0.1:4401/ 30 && echo "server answers on :4401" || { echo "server does not answer"; journalctl -u foundry -n 30 --no-pager; exit 1; }
systemctl is-active foundry caddy
echo "front page: HTTP $(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:4401/)  (200, or a redirect to the login)"
echo "secrets file: $(stat -c '%a %U' /run/foundry/secrets.env), $(wc -l < /run/foundry/secrets.env) lines"
echo "https needs the two A records in Netlify; Caddy's log:"
journalctl -u caddy -n 6 --no-pager | cut -c1-220
echo "done: preview"
