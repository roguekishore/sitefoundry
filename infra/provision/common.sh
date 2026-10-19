# Shared by preview.sh and run.sh: ssm.sh sends this first, then the instance's own script.
# Runs as root on Amazon Linux 2023 (arm64). Safe to run again: every step checks first.
set -euo pipefail

LOG=/var/log/foundry-provision.log
REPO_URL=git@github.com:roguekishore/sitefoundry.git
NODE_VERSION=24.21.0          # the laptop's
PNPM_VERSION=12.14.0          # the laptop's
REGION=ap-south-1
DOMAIN=foundry.themaverick.tech
GIT_NAME="Kishore N E"
GIT_EMAIL=contactforkishore@gmail.com
export AWS_DEFAULT_REGION=$REGION

say() { echo "== $*"; }

# Runs a command with its output in the log; on failure prints the end of the log and stops.
quiet() {
  echo "-- $*" >> "$LOG"
  if ! "$@" >> "$LOG" 2>&1; then
    echo "FAILED: $*"
    tail -n 40 "$LOG"
    return 1
  fi
}

# as <user> '<command>': a login shell for that user (HOME, and the PATH from /etc/profile.d).
as() { runuser -l "$1" -c "$2"; }

make_user() { # make_user <name>
  id "$1" >/dev/null 2>&1 || useradd --create-home --shell /bin/bash "$1"
}

base_packages() {
  say "packages"
  quiet dnf install -y git tar xz gzip jq openssl
}

# Node from nodejs.org into /opt/node, so `npm root -g` works for the Gemini CLI lookup.
install_node() {
  if [[ -x /opt/node/bin/node && "$(/opt/node/bin/node -v)" == "v$NODE_VERSION" ]]; then
    say "node $NODE_VERSION already there"
  else
    say "node $NODE_VERSION"
    rm -rf /opt/node && mkdir -p /opt/node
    curl -fsSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-arm64.tar.xz" \
      | tar -xJ -C /opt/node --strip-components=1
  fi
  echo 'export PATH=/opt/node/bin:$PATH' > /etc/profile.d/node.sh
  export PATH=/opt/node/bin:$PATH
  if [[ "$(pnpm -v 2>/dev/null || true)" != "$PNPM_VERSION" ]]; then
    say "pnpm $PNPM_VERSION"
    quiet npm install -g "pnpm@$PNPM_VERSION"
  fi
}

# deploy_key <user> <title> <ro|rw>: makes the user's ed25519 key and a ssh config for GitHub,
# then checks the repo can be reached. Not reachable = print the key and stop (exit 3):
# the operator adds it with `gh repo deploy-key add` (the exact command is printed), runs again.
deploy_key() {
  local user=$1 title=$2 mode=$3 home
  home=$(getent passwd "$user" | cut -d: -f6)
  install -d -m 700 -o "$user" -g "$user" "$home/.ssh"
  [[ -f "$home/.ssh/id_ed25519" ]] || as "$user" "ssh-keygen -q -t ed25519 -N '' -C '$title' -f ~/.ssh/id_ed25519"
  cat > "$home/.ssh/config" <<CONF
Host github.com
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
  StrictHostKeyChecking accept-new
CONF
  chown "$user:$user" "$home/.ssh/config" && chmod 600 "$home/.ssh/config"
  if as "$user" "git ls-remote $REPO_URL HEAD" >/dev/null 2>&1; then
    say "deploy key accepted by GitHub ($mode)"
    return 0
  fi
  local flag=""
  [[ "$mode" == rw ]] && flag=" --allow-write"
  echo
  echo "GitHub does not accept this machine's key yet. Its public key:"
  echo
  cat "$home/.ssh/id_ed25519.pub"
  echo
  echo "On the laptop, save that line to a file (say key.pub) and run:"
  echo "  gh repo deploy-key add key.pub --repo roguekishore/sitefoundry --title '$title'$flag"
  echo "then run this script again."
  exit 3
}

# clone_or_pull <user> <dir>: the repo at origin/main, as that user.
clone_or_pull() {
  local user=$1 dir=$2
  if [[ -d "$dir/.git" ]]; then
    as "$user" "cd '$dir' && git fetch -q origin && git checkout -q main && git merge -q --ff-only origin/main"
  else
    as "$user" "git clone -q $REPO_URL '$dir'"
  fi
}

# write_env_script <role>: /usr/local/bin/foundry-env, run by each service's ExecStartPre=+
# (as root) at every start. It reads the role's secrets from Parameter Store with the
# instance's own role and writes /run/foundry/secrets.env (0600), which the unit reads.
# So rotating a secret = put-parameter + restart the service.
write_env_script() {
  local role=$1 names
  if [[ $role == preview ]]; then
    names='FOUNDRY_PASSPHRASE_HASH=/foundry/preview/passphrase-hash
FOUNDRY_TOTP_SECRET=/foundry/preview/totp-secret
FOUNDRY_RUNNER_TOKEN=/foundry/shared/runner-token'
  else
    names='FOUNDRY_RUNNER_TOKEN=/foundry/shared/runner-token
FOUNDRY_VERTEX_KEY=/foundry/run/vertex-key
CLAUDE_CODE_OAUTH_TOKEN=/foundry/run/claude-oauth-token'
  fi
  cat > /usr/local/bin/foundry-env <<SCRIPT
#!/bin/bash
# Written by infra/provision. Reads this instance's secrets into /run/foundry/secrets.env.
set -euo pipefail
export AWS_DEFAULT_REGION=$REGION
install -d -m 700 /run/foundry
umask 077
out=/run/foundry/secrets.env.new
: > "\$out"
while IFS== read -r var param; do
  [[ -n "\$var" ]] || continue
  value=\$(aws ssm get-parameter --name "\$param" --with-decryption --query Parameter.Value --output text)
  echo "\$var=\$value" >> "\$out"
done <<'NAMES'
$names
NAMES
mv "\$out" /run/foundry/secrets.env
SCRIPT
  chmod 755 /usr/local/bin/foundry-env
}

# Waits for a URL to answer, for the checks at the end of a script.
wait_for() { # wait_for <url> <seconds>
  local i
  for ((i = 0; i < $2; i++)); do
    curl -fsS -o /dev/null "$1" 2>/dev/null && return 0
    sleep 1
  done
  return 1
}
