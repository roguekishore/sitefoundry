# Phase 8: the remote MCP — plan and status

Handoff document. Started 2026-10-20, on branch `phase-8/remote-mcp` in the worktree
`D:\PROJECTS\SITEFOUNDRY-mcp`, while phase 7's step F (the warden widget) went on in main.
Status markers as in [`phase-7-cloud.md`](phase-7-cloud.md): **DONE**, **BUILT**, **TODO**.

## What the user asked for (their decisions, don't reopen them)

- The foundry MCP from **any machine**, set up like other hosted MCPs: one entry in Claude
  Code's config, then a login. **Nothing registered in any Claude account** (the user works
  from several): Claude Code keeps the login on the machine, in `~/.claude/.credentials.json`
  (`mcpOAuth`, apart from the Claude account's own login; checked 2026-10-20).
- **The login is OAuth, asking for the passphrase only** (no authenticator code). It opens the
  read-only MCP, never the site, which keeps its passphrase + code or passkey.
- **Hand-made device tokens are dropped** (the first version of this branch had them; final
  decision 2026-10-20). The Devices page lists the logged-in machines and revokes them.
- **Read-only:** `search`, `get`, `preview`. Nothing that writes (`init`, `add`, `theme`) and
  nothing that reads a project on disk (`status`, `diff`). **No starting runs** from the MCP.

## Using it

```bash
claude mcp add --transport http foundry https://foundry.themaverick.tech/mcp -s user
```

then `/mcp` → `foundry` → Authenticate in Claude Code, or `claude mcp login foundry` (add
`--no-browser` over SSH). The browser shows the foundry's MCP login: a name for the machine,
the passphrase, Allow. Every session after that has the tools; Claude Code renews the token
itself. `claude mcp logout foundry` logs the machine out (the server revokes it too).

## How it works: **BUILT**, verified on the laptop

- `packages/mcp/src/tools.ts` holds every tool; `registerTools(server, { readOnly })`.
  `index.ts` (stdio, all 8 tools) and `http.ts` (`createRemoteMcp`, the 3 read-only ones)
  both use it. `preview.ts` is `createPreviewer({ gallery, headers, cacheDir, idleCloseMs })`.
- The foundry server answers `POST /mcp` (MCP's Streamable HTTP transport, **stateless**: a
  fresh MCP server per request, JSON replies; GET/DELETE get 405). It needs an OAuth access
  token; the site's login cookie doesn't count, and the site's login doesn't open `/mcp`.
- **The login** (`packages/server/src/oauth.ts`), OAuth 2.1 as the MCP spec has it:
  - `/mcp`'s 401 carries `WWW-Authenticate: Bearer resource_metadata="…/.well-known/oauth-protected-resource/mcp"`;
    that (RFC 9728) names this server as the login, whose endpoints are at
    `/.well-known/oauth-authorization-server` (RFC 8414). Other `/.well-known/*` are 404.
  - `POST /oauth/register` (RFC 7591): anyone may register, but **only redirects to the same
    machine** (`http://localhost|127.0.0.1|[::1]:<port>/…`), so a code can never reach a
    website. Registrations no device logged in through go after a day; at most 200.
  - `GET /oauth/authorize`: the page (the login page's look, never framed). **PKCE S256 is
    required**; `resource`, when sent, must be this server's `/mcp`. `POST` checks the
    passphrase (`Auth.checkPassphrase`, the same lockout as the site's login: five misses a
    minute) and sends the browser back with a one-time code (5 minutes, in memory). Cancel
    sends back `access_denied`. The loopback port may differ from the registered one (RFC 8252).
  - `POST /oauth/token`: the code + PKCE verifier make a **device** (named on the page) and a
    pair of tokens: access (1 hour) and refresh (90 days). A refresh gives a new pair; the old
    refresh token keeps working 10 more minutes (two sessions on one machine may both refresh).
  - `POST /oauth/revoke` (RFC 7009): either token logs the whole device out.
  - Tables `mcp_clients`, `mcp_devices`, `mcp_tokens` (SHA-256 only, like sessions). The first
    version's `devices` table is dropped at start.
- **Devices page** (`#/devices`): the setup (the `claude mcp add` line and a `.mcp.json`
  entry, with the page's own address) and the machines: name, app, logged in, last used,
  Revoke (`GET /api/devices`, `POST /api/devices/<id>/revoke`, behind the site's login).
- **Screenshots in the cloud** come from the server's own built gallery: Playwright opens
  `http://127.0.0.1:<port>/preview.html`, let past the login by `x-foundry-pass`, a secret
  made up at each start and accepted only on GET outside `/api/`. Cached in `<data>/shots`;
  Chromium is closed after 5 idle minutes (the preview instance has 2 GB).

Verified on 2026-10-20, a test server on port 4502 **with the login on**:
- `pnpm --filter @foundry/server test` 8/8 (two new: redirects and PKCE against RFC 7636's
  vector; the whole flow, wrong passphrase, used code, refresh, revoke).
- `packages/mcp/smoke.mjs` through the MCP SDK's own OAuth client: discovery, registration,
  PKCE, the page, tokens, the 3 tools, `preview` (82 KB PNG in 1.9 s), refresh, logout, the
  token refused after. A wrong passphrase fails it. Website redirects refused at registration;
  the site's cookie alone refused at `/mcp`; `POST /api/devices` gone.
- **The real Claude Code (2.1.286)**: `claude mcp add` + `claude mcp login --no-browser` (in a
  pseudo-terminal, the page filled in by a script): "Authenticated", `claude mcp get` →
  ✔ Connected, a `claude -p` session called `search` and got items back; the Devices list
  showed it as "Claude Code (<server name>)"; `claude mcp logout` revoked it on the server.
- The page and the Devices page at 390 px light and 1440 px dark (no sideways scroll); the
  local stdio MCP still lists all 8 tools.

## Live: **DONE** (2026-10-20)

1. Merged into main (fast-forward) and pushed.
2. `./ssm.sh preview provision/common.sh provision/preview.sh` run once: Chromium's libraries
   and Playwright's Chromium (156) on the preview instance, launch checked; it also pulled
   main and rebuilt, so no `./deploy.sh` was needed that time. (`deploy-preview.sh` alone only
   fetches Chromium, not the libraries.) `run.sh` takes the same steps from `common.sh`
   (`chromium_libs`, `chromium_check`); unchanged in effect.
3. Checked from the laptop: the discovery documents name `https://foundry.themaverick.tech`
   (so `X-Forwarded-Proto` and `Host` come through Caddy right), `/mcp`'s 401 points at them,
   and the user's run of `node packages/mcp/smoke.mjs https://foundry.themaverick.tech/mcp`
   passed: login, the 3 tools, `preview` on the t4g.small, refresh, logout.

`smoke.mjs` asks for the passphrase before connecting (the SDK's 60 s request timeout would
otherwise run while it's typed), reads it with echo off, and refuses at once without a
terminal: run it in a terminal of your own, not with `!` in Claude Code.

## Not done (suggestions, not asked for)

- Installing on a machine without a clone: core's registry reader already sends
  `FOUNDRY_TOKEN` as a bearer token, so `/r/` could accept the MCP's tokens and `foundry add`
  would work against `https://foundry.themaverick.tech/r`. The CLI would then need a login of
  its own (the access token lasts an hour).
- Thumbnails are still missing in the cloud gallery; `preview` doesn't need them.
