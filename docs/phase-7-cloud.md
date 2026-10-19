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
| `packages/server/src/auth.ts` | Passphrase (scrypt) + TOTP, sessions stored hashed, 5 failures/min lockout, login page. |
| `packages/server/src/machine.ts` | The run instance's switch: `LocalMachine` (child process) and `Ec2Machine`. |
| `packages/server/src/warden.ts` | Warden run files. |
| `packages/server/src/prices.ts` | Prices per 1M tokens (Gemini Standard; Claude API list prices, cache writes 1.25×/2×). |
| `packages/server/src/shared.ts` | Types shared by server, runner and gallery; the model and effort lists. |
| `packages/server/src/runner/` | `main.ts` (poll loop), `job.ts` (one run), `gemini.ts` (forwarder ported from `tools/gemini-run/run.mjs`), `claude.ts` (stream-json parser), `reporter.ts`, `proc.ts`. |
| `apps/gallery/src/views/runs.tsx` | `#/runs` (switch + list), `#/runs/new` (form), `#/runs/<id>` (stats, log, calls, details). |
| `apps/gallery/src/base.ts` | `BASE` = Vite's base path; the five root-relative URLs (`/r/`, `/thumbs/`, `/preview.html`) go through it so `/p/<slug>/` previews work. |

Commands: `pnpm build:server`, `pnpm --filter gallery build`, `pnpm serve` (http://127.0.0.1:4401,
no login, local runner). In dev, `pnpm gallery` passes `/api` and `/p/` to port 4401.
`pnpm --filter @foundry/server test` (4 tests: TOTP RFC vector, costs, claim/totals).

Verified on 2026-10-19: API probes; one Claude run end to end (Haiku, own prompt, run #1 in a
temporary database): worktree, install, the run's gallery, Claude, 3 calls logged with the
estimate matching Claude Code's own ($0.0301 vs $0.03), usage record committed, preview built
and served at `/p/smoke-claude/` with the right asset paths.

Left behind by that test (delete when no longer useful): worktree
`D:\PROJECTS\SITEFOUNDRY-runs\claude-smoke-claude`, branch `claude/smoke-claude`, database
`%TEMP%\foundry-test`.

## Step B — finish verifying locally: **TODO** (next)

1. **Look at the run pages in a browser**: never done yet. 390 px and 1440 px, light and dark:
   `#/runs`, `#/runs/new`, `#/runs/<id>` with a long log. Fix what's off.
2. **One Gemini run through the run page**, own prompt, `gemini-3.8-flash`, cap $0.50 (a few
   cents; the user's earlier smoke runs cost $0.02–0.06). Checks the ported forwarder.
3. **Stop and Resume** on a run in progress; the spending cap stopping a run (set it low).
4. **The login**: `node packages/server/dist/server.mjs setup-login` with a passphrase on
   stdin, set the two variables, log in with an authenticator code; unit tests cover only TOTP.
5. A real `/recreate-site` run with pages (e.g. `linear pricing`) is the user's call (cost).
   **It needs the other session's uncommitted `SKILL.md`** (pages support): the runner passes
   `$ARGUMENTS = "<url> <slug> <page…>"`. That change and `.geminiignore`, `capture.mjs`,
   `tools/gemini-run/run.mjs` belong to session `sitefoundry-8a`; don't commit them as yours.

## Step C — infrastructure (Terraform in `infra/`): **TODO**

Warden's rules apply here too (AWS-COMMAND-CENTER `CLAUDE.md`, `docs/LESSONS.md`): Terraform,
never CloudFormation; changes go through a **saved plan the operator applies** (`! terraform
apply tfplan`); root keys stay on the laptop (`~/Downloads/<account>.csv` pattern, see
`terraform/bootstrap.sh` there); **never run `aws` bare** (the laptop's default profile is the
unrelated work account `desk365`); never create an AWS Organization.

- VPC (e.g. 10.20.0.0/16), one public subnet in `ap-south-1a`, internet gateway, no NAT, no peering.
- Preview: t4g.small, Amazon Linux 2023 arm64, fixed private IP (e.g. 10.20.0.10), EIP, root gp3 ~20 GB.
  SG: 80/443 from anywhere; nothing else inbound (SSM for access, no SSH).
- Run: t4g.large, fixed private IP (e.g. 10.20.0.20), `associate_public_ip_address = true`,
  root gp3 ~40 GB, `credit_specification { cpu_credits = "standard" }`,
  `instance_initiated_shutdown_behavior = "stop"`. SG: 4410 from the preview SG only.
- Preview's SG must allow its outbound to the run instance; the run SG allows 4401 outbound to preview.
- IAM: both get `AmazonSSMManagedInstanceCore` plus warden's outpost profile if warden needs it
  (check how `./w account add` sets up `WardenOutpost`). Preview role: `ec2:StartInstances`,
  `ec2:StopInstances` on the run instance's ARN only, `ec2:DescribeInstances` (no resource-level).
- Tags on both instances (and the EIP, VPC): `warden:app = foundry`.
- DNS: the user's domain is not chosen yet (proposed `foundry.themaverick.tech` +
  `live.foundry.themaverick.tech`). Ask.
- Warden must have `jk` (it does: in v2 since 2026-10-11).

## Step D — provisioning both instances: **TODO**

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

## Step E — deploying: **TODO**

`infra/deploy.sh` over SSM: on the preview, `git pull`, `pnpm install --frozen-lockfile`,
`pnpm build:server`, `pnpm --filter gallery build`, restart the unit. The run instance pulls
on each run (`FOUNDRY_FETCH=1`) but needs `pnpm build:server` + a restart when the runner
changes: do it when it is next on. Thumbnails: `public/thumbs/` is git-ignored, so the cloud
gallery shows placeholders until something builds them (the run instance could run
`pnpm build:thumbs` and send them; not decided).

## Step F — the warden widget: **TODO** (in AWS-COMMAND-CENTER, its own session)

Follow that repo's `CLAUDE.md` (decisions as numbered questions first, then D47 in
`docs/DECISIONS.md`, spec in `docs/spec/`, ship is the operator's). Content: a Foundry
dashboard widget labelled "Foundry", found by `warden:app=foundry` in whatever account:
preview and run instance state (on/off), the current run (from the run files the server
writes), tokens and cost today/this month by model. Runs (D45) must be shipped and the
outposts updated first; check its `docs/STATE.md`.

## Known gaps and risks

- Not verified yet: `Ec2Machine`, the `live.` proxy and its WebSocket pass-through, the login
  in a browser, Claude's usage-limit detection (a regex on its error text → state `held`),
  the warden files against a real outpost.
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
