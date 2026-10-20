# Phase 8: the remote MCP — plan and status

Handoff document. Started 2026-10-20, on branch `phase-8/remote-mcp` in the worktree
`D:\PROJECTS\SITEFOUNDRY-mcp`, while phase 7's step F (the warden widget) went on in main.
Status markers as in [`phase-7-cloud.md`](phase-7-cloud.md): **DONE**, **BUILT**, **TODO**.

## What the user asked for (their decisions, don't reopen them)

- The foundry MCP from other machines, **without registering anything in any Claude account**
  (the user works from several accounts and wants nothing visible in them). So: no claude.ai
  custom connector, no OAuth. Claude Code reads a config file per session
  (`claude --mcp-config <file>`); the claude.ai web and phone apps are out.
- **Read-only for now:** `search`, `get`, `preview`. Nothing that writes (`init`, `add`,
  `theme`) and nothing that reads a project on disk (`status`, `diff`).
- **No starting runs** from the MCP.
- **Tokens per device, made on the foundry site's Devices page** (`#/devices`), behind the login.

## How it works: **BUILT**, verified on the laptop

- `packages/mcp/src/tools.ts` holds every tool; `registerTools(server, { readOnly })`.
  `index.ts` (stdio, all 8 tools) and `http.ts` (`createRemoteMcp`, the 3 read-only ones)
  both use it. `preview.ts` became `createPreviewer({ gallery, headers, cacheDir, idleCloseMs })`.
- The foundry server answers `POST /mcp` (MCP's Streamable HTTP transport, **stateless**: a
  fresh MCP server per request, JSON replies, no event stream; GET/DELETE get 405). It needs
  `Authorization: Bearer fdy_…`, a device token; the login cookie doesn't count, and the login
  doesn't open `/mcp` either. `/.well-known/*` is a plain 404 (MCP clients look for OAuth there
  after a refused token).
- **Device tokens**: `fdy_` + 32 random bytes, shown once; the `devices` table keeps only the
  SHA-256 (like sessions), the name, created, last used, revoked. API behind the login:
  `GET/POST /api/devices`, `POST /api/devices/<id>/revoke`. A revoked token is refused at once.
- **Screenshots in the cloud** come from the server's own built gallery: Playwright opens
  `http://127.0.0.1:<port>/preview.html`, let past the login by `x-foundry-pass`, a secret
  made up at each start and accepted only on GET outside `/api/`. Cached in `<data>/shots`;
  Chromium is closed after 5 idle minutes (the preview instance has 2 GB).
- The Devices page shows the config to save (`mcpServers.foundry`, type `http`, the URL from
  the page's own address, the bearer header) and the `claude --mcp-config` command.

Verified on 2026-10-20 with a test server on port 4501 **with the login on**: no token, a
made-up token and a revoked token → 401; `/api/devices` without login → 401; a wrong
`x-foundry-pass` → the login redirect; device made through the API after logging in;
`packages/mcp/smoke.mjs` (a scripted MCP client): 3 tools, the instructions, `search`,
`get`, and `preview` (an 82 KB PNG in 1.6 s, rendered right); the local stdio MCP still lists
all 8 tools and searches; the Devices page at 390 px light and 1440 px dark (no sideways
scroll); `pnpm --filter @foundry/server test` 6/6 (a new devices test).

## To go live: **TODO** (the operator's steps, after merging)

1. Merge `phase-8/remote-mcp` into main once phase 7's work in main allows; push when the
   user says.
2. `./ssm.sh preview provision/common.sh provision/preview.sh` once: it installs Chromium's
   libraries and Playwright's Chromium on the preview instance and checks it launches
   (`deploy-preview.sh` alone only fetches Chromium, not the libraries). Then `./deploy.sh`.
   `run.sh` now takes the same steps from `common.sh` (`chromium_libs`, `chromium_check`);
   unchanged in effect.
3. On `https://foundry.themaverick.tech/#/devices` add a device, save the config on that
   machine, and check it: `FOUNDRY_MCP_TOKEN=fdy_… node packages/mcp/smoke.mjs
   https://foundry.themaverick.tech/mcp` (from a clone), or a Claude Code session with
   `--mcp-config`. Not verified yet: through Caddy, Chromium's memory on the t4g.small.

## Not done (suggestions, not asked for)

- Installing on a machine without a clone: core's registry reader already sends
  `FOUNDRY_TOKEN` as a bearer token, so letting a device token read `/r/` would make
  `foundry add` work against `https://foundry.themaverick.tech/r` (two lines in the server).
- Thumbnails are still missing in the cloud gallery; `preview` doesn't need them.
