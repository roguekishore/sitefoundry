# Phase 7: the cloud — plan and status

Handoff document. Agreed with the user on 2026-10-19; `PLAN.md` § Phase 7 has the summary.
Read this whole file before continuing the work. Status markers: **DONE** (built and
verified), **BUILT** (written, not yet verified), **TODO**.

## What the user asked for (their decisions, don't reopen them)

- Take the foundry site to the cloud to browse it from the phone whenever they want, and
  start recreation runs there: a run page with a URL box and a "slug and pages" box, OK starts
  a Gemini CLI (Vertex, Standard tier) or Claude Code (`--dangerously-skip-permissions`) run,
  with model and effort chosen.
- A proper application: logging, token usage for every run and every call, all stored.
- **MCP is held.** **No S3** ("why would we need S3 when we have git in between").
- **Account `jk`** (`400730734202`, `ap-south-1`). Instances in a **VPC of their own, not
  peered** (jk's existing VPC 10.43.x is peered to clasher's production database).
- **Preview instance: t4g.small**, always on, Elastic IP. The user accepts its cost after the
  free period.
- **Run instance: t4g.large**, on only while there is work (an on/off switch). **Auto-assigned
  public IP, no EIP, no NAT** ("option 1"); inbound only from the preview instance.
- Claude: the user logs in on the run instance themselves. Gemini: the same Vertex key as
  the laptop (`~/.gemini/.env`, project `1023705997493`, global endpoint).
- Warden (`D:/PROJECTS/AWS-COMMAND-CENTER`) gets a Foundry widget with a label of its own,
  because the foundry instances may live in any account.
- Remote `https://github.com/roguekishore/sitefoundry.git` (private) is set. **Never push
  until the user says so.** Commit locally.

## How it fits together

```
phone ──https──► Caddy (preview, EIP) ──► foundry server :4401 ── SQLite (.foundry/foundry.db)
                   live.<domain> ──────────┘   │  serves the built gallery, /p/<slug>/ previews,
                                                │  the run pages (#/runs), the API
                                                │  ec2:Start/StopInstances (run instance only)
                                                ▼  private IPs
                                   run instance: runner (systemd) ── worktree per run
                                     ├─ gemini CLI → local forwarder → Vertex (adds the key)
                                     ├─ claude -p --dangerously-skip-permissions (stream-json)
                                     ├─ the worktree's gallery :4410 (0.0.0.0, SG: preview only)
                                     └─ git push <backend>/<slug> → GitHub
```

- The **runner calls the server**, never the other way round (except the live-gallery proxy):
  `POST /api/runner/claim`, then `POST /api/runner/runs/<id>/report` every 2 s with events,
  calls and state; the reply says whether Stop was pressed. Bearer token `FOUNDRY_RUNNER_TOKEN`.
- **The server switches the run instance**: on when a run is queued, off after
  `FOUNDRY_IDLE_MINUTES` (10) with nothing to do. A run silent for 15 minutes is marked failed;
  Resume continues it from the worktree.
- **Each run** works in `<worktrees>/<backend>-<slug>` on branch `<backend>/<slug>`, commits
  its usage record to `runs/<slug>/<backend>-<time>.json` + `.calls.jsonl` (so the database can
  be rebuilt from git), builds the branch's gallery with `--base /p/<slug>/`, sends it to the
  server as a .tar.gz, and (cloud only, `FOUNDRY_PUSH=1`) pushes the branch.
- **Warden** reads `/var/lib/warden-runs/foundry-<id>.json`, written by the server
  (`FOUNDRY_WARDEN_RUNS_DIR`), in the D45 format (AWS-COMMAND-CENTER `docs/spec/CONTRACTS.md` §9).

## Step A — the foundry server, runner and run pages, on the laptop: **DONE**

Code:

| Path | What |
|---|---|
| `packages/server/src/server.ts` | HTTP server: login, gallery, previews, API, queue, on/off, live proxy, warden files. Settings are listed at the top of the file. |
| `packages/server/src/db.ts` | SQLite (`node:sqlite`): runs, calls, events, sessions. Totals are summed from calls. |
| `packages/server/src/auth.ts` | Passphrase (scrypt) + TOTP, passkeys (WebAuthn, `@simplewebauthn/server`), sessions stored hashed, 5 failures/min lockout, login page. |
| `packages/server/src/machine.ts` | The run instance's switch: `LocalMachine` (child process) and `Ec2Machine`. |
| `packages/server/src/warden.ts` | Warden run files. |
| `packages/server/src/prices.ts` | Prices per 1M tokens (Gemini Standard; Claude API list prices, cache writes 1.25×/2×). |
| `packages/server/src/shared.ts` | Types shared by server, runner and gallery; the model and effort lists. |
| `packages/server/src/runner/` | `main.ts` (poll loop), `job.ts` (one run), `gemini.ts` (forwarder ported from `tools/gemini-run/run.mjs`), `claude.ts` (stream-json parser), `reporter.ts`, `proc.ts`. |
| `apps/gallery/src/views/runs.tsx` | `#/runs` (switch + list), `#/runs/new` (form), `#/runs/<id>` (stats, log, calls, details). |
| `apps/gallery/src/base.ts` | `BASE` = Vite's base path; the five root-relative URLs (`/r/`, `/thumbs/`, `/preview.html`) go through it so `/p/<slug>/` previews work. |

Commands: `pnpm build:server`, `pnpm --filter gallery build`, `pnpm serve` (http://127.0.0.1:4401,
no login, local runner). In dev, `pnpm gallery` passes `/api` and `/p/` to port 4401.
`pnpm --filter @foundry/server test` (6 tests: TOTP RFC vector, costs, claim/totals, Claude call usage, passkey rows).

Verified on 2026-10-19: API probes; one Claude run end to end (Haiku, own prompt, run #1 in a
temporary database): worktree, install, the run's gallery, Claude, 3 calls logged with the
estimate matching Claude Code's own ($0.0301 vs $0.03), usage record committed, preview built
and served at `/p/smoke-claude/` with the right asset paths.

## Step B — finish verifying locally: **DONE** (except 5, the user's call)

Verified on 2026-10-19, in the test database `%TEMP%\foundry-test` (runs #2 and #3):

1. **Run pages in a browser**, 390 px and 1440 px, light and dark: `#/runs`, `#/runs/new`,
   `#/runs/<id>` (scripted Playwright screenshots). Fixed: the hidden sidebar's shadow showed as a
   grey strip on the left at phone width (whole gallery); the Agent switch sat inside a `<label>`,
   so its first button was named "Agent Claude Gemini CLI…" (now a labelled group with
   `aria-pressed`); the badge says "Stopping…" between Stop and the runner stopping. The log
   follows its newest line while a run goes (measured).
2. **Gemini through the run page** (run #2, `gemini-3.8-flash`, own prompt): 7 calls, $0.05,
   commit, usage record, preview at `/p/smoke-gemini/`. The ported forwarder works.
3. **Stop, Resume, the cap** (run #3, Claude Haiku, 8 files with a commit each): Stop pressed in
   the page after note4 → stopped, record committed, preview built; cap lowered to just above
   what it had spent, Resume → stopped by the cap after one call; cap raised, Resume → note5–8,
   done, nothing redone; three usage records on the branch. Fixed: **the cap only counted the
   current job**, so a resumed run could spend its cap again (the runner now starts from the
   run's total; each job's usage record still holds only its own calls).
4. **The login**: `setup-login`, then in a browser: wrong code refused, right code in
   (`foundry_session`, HttpOnly, SameSite=Lax), logout ends the session, 5 failures lock it
   for a minute even with the right code.
5. A real `/recreate-site` run with pages (e.g. `linear pricing`) is the user's call (cost).
   **It needs the other session's uncommitted `SKILL.md`** (pages support): the runner passes
   `$ARGUMENTS = "<url> <slug> <page…>"`. That change and `.geminiignore`, `capture.mjs`,
   `tools/gemini-run/run.mjs` belong to session `sitefoundry-8a`; don't commit them as yours.

Also fixed: **Claude's output tokens were undercounted** (2–3 per call). Claude Code's
`assistant` events carry the usage from the start of each message; the runner now also passes
`--include-partial-messages` and takes each call's final usage from the stream's `message_delta`
(checked against Claude Code's own total: 324 + 234 = 558). The `result` event's totals can't be
used instead: after `--resume` they add up the whole session. A unit test covers it.

Left behind by these tests (delete when no longer useful): worktrees `claude-smoke-claude`,
`gemini-smoke-gemini`, `claude-smoke-stop` in `D:\PROJECTS\SITEFOUNDRY-runs`, their branches
(`claude/smoke-claude`, `gemini/smoke-gemini`, `claude/smoke-stop`), database `%TEMP%\foundry-test`.

## Step C — infrastructure (Terraform in `infra/`): **DONE** (applied 2026-10-19)

How to plan and apply, and the rules: [`infra/README.md`](../infra/README.md). Warden's rules
apply (AWS-COMMAND-CENTER `CLAUDE.md`, `docs/LESSONS.md`): Terraform, never CloudFormation;
a **saved plan the operator makes and applies**; jk's root keys only from `~/Downloads/jk.csv`
via `infra/bootstrap.sh`; **never run `aws` bare** (the default profile is the work account
`desk365`); never create an AWS Organization.

The user's answers (2026-10-19): the domain is **`foundry.themaverick.tech`** +
**`live.foundry.themaverick.tech`**; DNS is in **Netlify, by hand** (Terraform makes no records;
`terraform output dns_records` prints the two A records to add).

What it creates, all tagged `warden:app = foundry`:

- VPC `10.20.0.0/16`, public subnet `10.20.0.0/24` in `ap-south-1a`, internet gateway, no NAT, no peering.
- Preview: t4g.small, AL2023 arm64, `10.20.0.10`, Elastic IP, gp3 20 GB encrypted, IMDSv2 only.
  SG `foundry-preview`: 80/443 from anywhere, 4401 from the run SG; no SSH.
- Run: t4g.large, `10.20.0.20`, auto-assigned public IP, gp3 40 GB encrypted, standard credits,
  shutdown = stop, IMDSv2 only. SG `foundry-run`: 4410 from the preview SG only.
- IAM: `FoundryPreview` (`AmazonSSMManagedInstanceCore` + `FoundryRunSwitch`: start/stop on the
  run instance's ARN, `DescribeInstances`), `FoundryRun` (SSM only). Each instance has its own
  profile with SSM in it, which is all warden's install button needs (DESIGN §9, case 2);
  `WardenOutpost` is not used.
- AMI and user-data are ignored after creation (a new AMI must not replace the preview);
  Terraform does not hold the run instance's on/off state (the server switches it). The run
  instance is running when created; step D provisions it then.

Applied by the operator on 2026-10-19 (25 resources; the first apply failed on one security
group rule's description, which AWS limits to `a-zA-Z0-9. _-:/()#,@[]+=&;{}!$*`):

| | |
|---|---|
| Elastic IP | `52.66.74.57` (A records for `foundry.` and `live.foundry.themaverick.tech`, Netlify, by hand) |
| Preview | `i-0fb1d61725ce2b0ef`, `10.20.0.10` |
| Run | `i-0ab154c93b3356c22`, `10.20.0.20` (running since creation, until step D is done) |
| VPC | `vpc-0744365f9e7e3df8e`, subnet `subnet-0b897524571729b82` |
| SGs | `foundry-preview` `sg-0b9327bdcbdcfbb01`, `foundry-run` `sg-0a3882882c9bd66b2` |

State is `infra/terraform.tfstate` (local, gitignored); the operator keeps a copy in `~/foundry-tfstate.bak`.
Warden already has `jk` (v2 since 2026-10-11).

## Step D — provisioning both instances: **DONE** (2026-10-20)

Scripts: `infra/aws.sh`, `infra/ssm.sh`, `infra/secrets.sh`, `infra/provision/{common,preview,run}.sh`
(how to run them: [`infra/README.md`](../infra/README.md)). Checked on 2026-10-20 (the user let
the agent run them, unattended): `https://foundry.themaverick.tech/` answers with the login page
(Caddy's certificate works, the API says 401 without a session); Parameter Store holds the login,
the runner token and the Vertex key, **no Claude token** (skipped, so Claude runs fail on the run
instance until `secrets.sh` adds one); `provision/run.sh` reran clean (deploy key, Gemini CLI
0.64.0, Claude Code 2.1.303, headless Chromium 156 launches, runner up and polling the server).
The `live.foundry.themaverick.tech` A record was added later that day; Caddy had backed off
after failing without it, so it was restarted and got the certificate (`live.` answers 401
without a session, as it should). **Still open:** neither instance has warden's outpost yet. **Found:** starting the run instance
failed three times with `InsufficientInstanceCapacity` (t4g.large, `ap-south-1a`) before it
started a minute later.

**The user's decisions (2026-10-19), and what was found, before any of it was written:**

- **The operator runs every SSM script** with `!` (warden's rule holds: jk's root keys are only
  theirs to use). Planned: `infra/aws.sh` (reads `~/Downloads/jk.csv`, sets `MSYS_NO_PATHCONV=1`,
  never a profile) and `infra/ssm.sh <preview|run> <script>` (sends the script base64-encoded
  with CRs stripped, via a `file://` JSON in `cygpath -w` form, then polls and prints the output;
  SSM keeps only 24,000 characters of stdout, so the scripts log to a file and print a summary).
- **Secrets go through Parameter Store** (SecureString, `aws/ssm` key), never inline in SSM
  commands: `/foundry/preview/passphrase-hash`, `/foundry/preview/totp-secret`,
  `/foundry/shared/runner-token`, `/foundry/run/vertex-key` (`GOOGLE_API_KEY` in the laptop's
  `~/.gemini/.env`), `/foundry/run/claude-oauth-token` (from `claude setup-token`: the laptop
  can't open SSM sessions, so no interactive `/login`). `infra/secrets.sh` runs in the user's
  own terminal (`!` has no stdin; `setup-login` reads the passphrase from it), and only sets
  what is missing. A root `ExecStartPre=+` script on each instance writes the 0600 env file from
  them at every start, so rotating a secret is put-parameter + restart.
- **Terraform change needed:** `AmazonSSMManagedInstanceCore` already allows `ssm:GetParameter*`
  on `*`, so "each role reads only its own" needs explicit **Deny** policies (standalone):
  the run role denied `/foundry/preview/*` (the agent there could otherwise read the login),
  the preview role denied `/foundry/run/*`. The user was told this is a small Terraform change.
- **Deploy keys:** made on each instance (ed25519, per user); `gh` is logged in on the laptop as
  `roguekishore`, so `gh repo deploy-key add --repo roguekishore/sitefoundry` (`--allow-write`
  for the run instance) can add them. The provision scripts stop before cloning until the key
  is there, and are safe to rerun.
- **AL2023 specifics:** Node 24 from the nodejs.org linux-arm64 tarball into `/opt/node`
  (`npm root -g` must work: `runner/gemini.ts` finds the Gemini CLI with it); pnpm 12.14 (the
  laptop's); Caddy from its GitHub release (not in dnf), Caddyfile `foundry.themaverick.tech,
  live.foundry.themaverick.tech { reverse_proxy 127.0.0.1:4401 }` (Caddy keeps Host, so the
  server's `live.` check works); server `FOUNDRY_HOST=0.0.0.0` (the SG admits 4401 only from
  the run SG), `FOUNDRY_COOKIE_DOMAIN=foundry.themaverick.tech` (covers `live.`, whose proxy
  needs the login). **Playwright's `--with-deps` is apt-only**: install Chromium's libraries with
  dnf and prove it with a headless launch. Claude Code via its native installer as `runner`
  (`~/.local/bin` on the unit's PATH). Git identity on the run instance: the laptop's
  (`Kishore N E`, `git config user.email`).
- `public/r/` is committed, so the preview needs no registry build; thumbnails stay missing.

Write it as scripts in `infra/` run over SSM (`aws ssm send-command`, laptop can't open SSM
sessions: the session-manager plugin isn't installed).

Preview: Node 24, pnpm (version from `package.json`'s lockfile), git, Caddy (`foundry.<d>` and
`live.foundry.<d>` → `127.0.0.1:4401`, plus the server listening on `10.20.0.10:4401` for the
runner — or `0.0.0.0` with the SG keeping the internet out), 2 GB swap (gallery build on 2 GB RAM),
user `foundry`, clone with a **read-only deploy key**, `/etc/foundry/server.env` (0600):
`FOUNDRY_HOST`, `FOUNDRY_PASSPHRASE_HASH`, `FOUNDRY_TOTP_SECRET`, `FOUNDRY_COOKIE_DOMAIN`,
`FOUNDRY_RUNNER_TOKEN`, `FOUNDRY_MACHINE=ec2`, `FOUNDRY_RUN_INSTANCE_ID`, `AWS_REGION`,
`FOUNDRY_WARDEN_RUNS_DIR=/var/lib/warden-runs` (dir writable by `foundry`),
`FOUNDRY_LIVE_TARGET=http://10.20.0.20:4410`, `FOUNDRY_LIVE_URL=https://live.foundry.<d>/`;
systemd unit for `node packages/server/dist/server.mjs`.

Run: Node 24, pnpm, git, `npm i -g @google/gemini-cli`, Claude Code, Playwright Chromium with
its system libraries (`pnpm exec playwright install --with-deps chromium`), user `runner`
(**not root**: Claude Code refuses the flag as root), clone with a **write deploy key** (this
repo only), git identity set for that user, `~/.gemini/settings.json` with
`security.auth.selectedType = vertex-ai` and **no** billing tier setting,
`/etc/foundry/runner.env`: `FOUNDRY_SERVER_URL=http://10.20.0.10:4401`, `FOUNDRY_RUNNER_TOKEN`,
`FOUNDRY_REPO`, `FOUNDRY_WORKTREES`, `FOUNDRY_GALLERY_HOST=0.0.0.0`, `FOUNDRY_FETCH=1`,
`FOUNDRY_PUSH=1`, `FOUNDRY_VERTEX_KEY` (the forwarder adds it; the CLI gets a placeholder),
`FOUNDRY_SELF_SHUTDOWN_MINUTES=30`; sudoers: `runner ALL=(root) NOPASSWD: /usr/sbin/shutdown -h now`;
systemd unit for `node packages/server/dist/runner.mjs`. The user then logs in to Claude on it
(`claude` → `/login`), or uses `claude setup-token` and `CLAUDE_CODE_OAUTH_TOKEN`.

Both: install warden's outpost from warden's UI (button on the instance).

## Step E — deploying: **DONE** (2026-10-20)

- `infra/deploy.sh` (operator, with `!`): refuses unless the laptop's `main` equals GitHub's
  (the instances pull from GitHub, so an unpushed main would deploy an older commit), then sends
  `provision/deploy-preview.sh` over SSM: pull, `pnpm install --frozen-lockfile`,
  `pnpm build:server`, the gallery built into `apps/gallery/dist.next` and swapped in (no
  half-built gallery is ever served), restart, check.
- **The run instance updates itself**: its unit runs `/usr/local/bin/foundry-runner-update`
  (as `runner`, `ExecStartPre=-`) before every start: fetch, and only when `origin/main` moved,
  fast-forward, install and `pnpm build:server`. The instance is switched on per run, so each
  run gets the current runner. A failed update is logged and the runner starts on its old build.
  Takes effect once `provision/run.sh` has been run again (it is safe to rerun).
- `./deploy.sh run` updates the runner now (restarts the service); refused while a `claude` or
  `gemini` process is running there.
- Run four times on 2026-10-20 (preview now at the newest main). Found and fixed on the way:
  **`ssm.sh` wrote every command to the same `/tmp/foundry-ssm.sh`**; a second command sent
  while a deploy ran overwrote it, and bash (which reads a script as it goes) ended the deploy
  after the build with exit 0, so the gallery wasn't swapped and the server not restarted. Each
  command now gets its own `mktemp` file.

Thumbnails: `public/thumbs/` is git-ignored, so the cloud
gallery shows placeholders until something builds them (the run instance could run
`pnpm build:thumbs` and send them; not decided).

## Step F — the warden widget: **SHIPPED** (2026-10-20, `warden-20261020T043204Z`)

The user's answers (warden's D47): treat D45 runs as shipped; warden keeps run usage in its own
database; a section on warden's Apps page **and** an addable widget, not a fixed card. Built in
AWS-COMMAND-CENTER (`892254d`, `db8a352`, `d93472a`, spec `docs/spec/wp30-run-usage-and-app-widget.md`):

- a 60 s hub job keeps each run's usage per UTC day, account, app and model (schema 5), from the
  `foundry-<id>.json` files this server already writes;
- Apps → foundry shows health, the tagged instances (preview, run: on or off), runs, and usage
  today and this month by model;
- the `app` widget (catalog → Overview → App) draws that card on any dashboard for one app.

Nothing names Foundry: any app with runs gets the same. Shipped with D45 on 2026-10-20 (the agent
ran `./w ship` at the user's request; `/healthz` reports `warden-20261020T043204Z d93472a`).
`foundry-preview` already has warden's outpost (its frames arrive), but runs reach warden only
from outpost `a59d83e79def`: press **Update outpost** on it in warden, then add the App widget
where wanted.

## Passkeys: **DEPLOYED** (2026-10-20, preview at `f0ec3bf`); no real passkey added yet

Asked by the user ("add passkeys to the foundry"). A passkey is a second way in; the passphrase
and code stay, and are the only way to add the first passkey.

- `#/passkeys` in the gallery lists them (name, added, last used), adds one on the device in hand
  and removes them. **Adding asks for the authenticator code again**, so a stolen session cookie
  alone can't plant a passkey that outlives the session.
- The login page shows "Log in with a passkey" only once one exists (and only where the browser
  has WebAuthn). Discoverable passkeys with user verification required (fingerprint, face or
  PIN), so no user name, and still two factors: the device and you. The device refuses a second
  passkey where it already holds one (`excludeCredentials`).
- Passkey logins don't count towards the lockout and aren't locked out by it (a signature can't
  be guessed), so they also get the owner past someone hammering the login page.
- The relying party is `FOUNDRY_COOKIE_DOMAIN` (`foundry.themaverick.tech`), so passkeys work
  only on the main address, not `live.`; with no cookie domain, the request's host (`localhost`
  works for testing, `127.0.0.1` doesn't). Challenges are kept in memory, single use, 5 minutes:
  a server restart in the middle of a login just means pressing the button again.
- Routes: `POST /login/passkey/options`, `POST /login/passkey` (no session); `GET /api/passkeys`,
  `POST /api/passkeys/options` (`{code}`), `POST /api/passkeys` (`{name, response}`),
  `DELETE /api/passkeys/<id>`. Table `passkeys` (the public key, counter, transports, name).
- Verified on 2026-10-20 with Chromium's virtual authenticator at 390 px, light and dark: no
  button before a passkey exists, wrong code refused, add and list, the same device refused,
  passkey login gives a working session, a removed passkey is refused (401).
- Deployed 2026-10-20: the live login asks for challenges with rpId `foundry.themaverick.tech`,
  `/api/passkeys` answers 401 without a session. **Next (the user)**: add a passkey on the phone at
  `https://foundry.themaverick.tech/#/passkeys`.

## Known gaps and risks

- **t4g.large capacity in `ap-south-1a`.** On 2026-10-20 AWS refused to start the run instance
  (`InsufficientInstanceCapacity`) for about a minute at 03:18, then from 03:33 for 25+ minutes
  on end. The server retries every 15 s and the run says so once (`warn`), but a run can wait
  indefinitely. Not decided (the instance type is the user's decision): falling back to another
  Graviton type on a refused start (`ModifyInstanceAttribute` while stopped, e.g. m7g.large or
  t4g.xlarge; a small IAM change), or a second subnet in another AZ (a new run instance).
- `Ec2Machine.stop` is verified (the server switched the idle run instance off at exactly 10
  minutes, 2026-10-20); `Ec2Machine.start` is called and AWS answers it (the capacity errors).
- Not verified yet: a full run in the cloud (smoke run #1, queued 2026-10-20, never started for
  lack of capacity and was cancelled at the user's request), the `live.` proxy and its WebSocket pass-through, Claude's
  usage-limit detection (a regex on its error text → state `held`), the warden files against a
  real outpost.
- The login lockout is one counter for everyone: someone hammering the login page from the
  internet keeps the owner locked out too while it lasts. Per-address counting needs Caddy's
  `X-Forwarded-For` trusted; not done.
- The agent runs as the same Linux user as the runner, so a determined agent could read the
  Vertex key from the runner's environment. Accepted for now; a separate user for the
  forwarder would close it.
- Previews have no thumbnails, and items new on the branch have no `/r/<name>.json` (their
  install panel is empty) because the preview doesn't rebuild the registry.
- On Windows the local runner is stopped with `taskkill /F`, so it can't report; the server
  refuses Switch off while a run is going.
- `pnpm typecheck` already had errors in `vault/` and `foundry/sites/*` (CSS imports, demo
  props) before this work; `packages/server` and `apps/gallery/src` are clean.
- `tools/gemini-run/run.mjs` still exists and works; the forwarder code is duplicated in
  `packages/server/src/runner/gemini.ts`. Once the run page is proven, run.mjs could become a
  thin wrapper (suggestion, not asked for).
