# SITEFOUNDRY

A private registry of website blocks: recreations of inspiration sites (one folder per
site). Every block is plain React + Tailwind, reads its look from shared tokens, and installs
into any project with one command.

The mirrored libraries (shadcn, React Bits, Aceternity, Magic UI and more) are the **vault**,
a repo of its own next to this one: `D:/PROJECTS/SITEFOUNDRY-VAULT` (found as
`<this folder>-VAULT`, or wherever `FOUNDRY_VAULT` points). This repo holds the tools for
both; the vault holds only items, its mirror and its built registry. Everything works without
the vault, just without its items.

## Setup (once, and after pulling changes)

```bash
pnpm install
pnpm build:registry      # public/r/ — what the CLI and MCP read
pnpm build:cli           # packages/cli/dist/foundry.mjs
pnpm build:mcp           # packages/mcp/dist/mcp.mjs

# the vault, next to this repo
(cd ../SITEFOUNDRY-VAULT && pnpm install)
pnpm build:registry:vault   # ../SITEFOUNDRY-VAULT/public/r/
```

Optional, to type `foundry` anywhere instead of `node D:/PROJECTS/SITEFOUNDRY/packages/cli/dist/foundry.mjs`:
`cd packages/cli && npm link`.

## Browse

```bash
pnpm gallery             # the recreated sites: http://localhost:4400
pnpm gallery:vault       # the vault:           http://localhost:4402/vault/
```

Two apps from one gallery codebase (`apps/gallery`, the vault one is `--mode vault`), built
apart so a new site never rebuilds the vault. Each links to the other. On the foundry server
they are `/` and `/vault/`.

Two kinds of thing, two entry points (layout: `docs/mockups/gallery-redesign.html`):

- **Sites** open the site viewer: the site in a browser window at phone, tablet or desktop
  width, every page (`foundry/sites/<site>/pages/<name>.tsx`) with working links between
  them, and the block behind each section (hover to outline it, click to see its props and
  install command; turn **Inspect** off to use the site's own buttons). Full screen shows
  the site alone.
- **Items** (blocks, components, themes) are browsed with type tabs and combinable facets
  (source, site, category, needs JS), all kept in the URL. Each item page has one live
  preview (device, theme, light/dark), its props, code and details, and where it's used.

Ctrl K (or `/`) jumps to any site, page or item. Lists show still thumbnails, not live
previews: `pnpm build:thumbs` makes them (only the ones missing; `--force` redoes all;
`pnpm build:thumbs:vault` for the vault's), and anything not shot yet shows a placeholder.

## Use blocks in a customer project

The project needs React and Tailwind v4 (Vite, Astro with `@astrojs/react`, or Next.js).

```bash
foundry init                       # foundry.json (both registries: ours, then the vault's), base tokens, CSS imports
foundry theme sample-ember         # the project's colours, fonts, radius, spacing
foundry add sample-header          # copies source to src/components/foundry/, installs npm packages
foundry list header                # find things   ·   foundry info <name>   details and props
foundry status                     # installed vs latest   ·   foundry diff <name>   what changed
foundry update [name…]             # newer versions (refuses to overwrite hand edits without --force)
```

Blocks marked "needs JS" must be hydrated in Astro (`client:load` etc.); `add` says which.

## For agents: the MCP server

```bash
claude mcp add foundry -s user -- node D:/PROJECTS/SITEFOUNDRY/packages/mcp/dist/mcp.mjs
```

Tools: `search`, `get` (props + code), `preview` (screenshot in any theme/width/mode),
`init`, `add`, `theme`, `status`, `diff`. It reads both registries (ours, then the vault's;
`FOUNDRY_REGISTRY` takes a comma-separated list instead). Previews use the running galleries
(the vault's for vault items), or start them quietly.

**From another machine** (no clone needed): the foundry server answers the read-only tools
(`search`, `get`, `preview`) at `https://foundry.themaverick.tech/mcp`. Add it once:

```bash
claude mcp add --transport http foundry https://foundry.themaverick.tech/mcp -s user
```

then in Claude Code `/mcp` → `foundry` → Authenticate (or `claude mcp login foundry`): the
browser opens the foundry's MCP login, which asks for a name for the machine and the
passphrase only. Claude Code keeps the login on that machine and renews it; nothing is
registered in a Claude account. The **Devices** page (`#/devices`) lists the machines and
revokes them. Check an address with `node packages/mcp/smoke.mjs <url>/mcp` (it logs in
with OAuth too, asking for the passphrase, then logs out).

## Adding blocks

Read [CONTRACT.md](CONTRACT.md) (the rules) and [foundry/tokens.md](foundry/tokens.md)
(the token names). Then:

```bash
pnpm check [name…]       # must report 0 errors
pnpm build:registry      # refuses changed files without a version bump
```

The vault the same way: `pnpm check:vault [name…]`, `pnpm build:registry:vault` (or
`pnpm check` and `pnpm build:registry` from inside the vault repo). Its items come from its
mirror: see its README.

## Recreating sites in a batch

`/recreate-site` for a list of sites, unattended. `run.mjs` captures the sites that have no
capture yet (all of them, before the first session starts) and then recreates them; the capture
step can also be run alone, ahead of time, on a network that reaches the sites. The list is a
JSON file that also holds each site's status, which both scripts keep up to date
(see `tools/claude-batch/sites.example.json`):

```json
{ "sites": [
  { "url": "https://linear.app" },
  { "url": "https://www.example-saas.com", "slug": "saasy", "pages": ["pricing", "about"] }
] }
```

```bash
# As a normal user, with claude logged in to your account, after pnpm install and
# pnpm exec playwright install --with-deps chromium
node tools/claude-batch/run.mjs sites.json --dry-run    # what it would do ("capture, then run" = no capture yet)
node tools/claude-batch/run.mjs sites.json --jobs 6     # captures what's missing, then one `claude -p` session per site, 6 at a time
node tools/claude-batch/run.mjs sites.json --jobs 3 --limit 10   # 3 at a time, 10 sites in all, then it stops (run again for the next 10)

# Optional, to capture ahead of time on a network that reaches the sites (then the run needs no
# network to them): the same capture step on its own.
node tools/claude-batch/precapture.mjs sites.json
#    to run on another machine? commit and push the captures, then git pull there
#    (crops and frames are committed on purpose; delete them once the site is recreated)
```

Every session runs `claude-opus-5-5` at effort `high`, subagents included (`--model`,
`--effort` to change). Sessions share the working tree and one gallery: `pnpm add` and git
commits take turns through `tools/claude-batch/serial.mjs`, and the registry is built once,
after the last session.

Statuses: `new` → `captured` / `capture-failed` → `running` (`waiting-for-limit`) → `done`,
`needs-you` (read its report), `failed`, `timed-out` or `stopped`. Set `"status": "skip"` to
leave a site out. Phase B never opens the sites, runs with `--dangerously-skip-permissions`,
waits out the account's usage limit and resumes, and picks up sites added to the list while it
runs. Logs and each site's report go to `tools/claude-batch/runs/`.

## Layout

| Path | |
|---|---|
| `foundry/` | ours: `base/`, `themes/`, `sites/<site>/` (blocks + `page.tsx`, the full recreation) |
| `../SITEFOUNDRY-VAULT` | the vault: mirrored third-party items, same format, its own repo and registry |
| `public/r/` | the built registry (committed) |
| `packages/core` | item format, registry reader, installer (shared by CLI and MCP) |
| `packages/cli`, `packages/mcp` | `foundry` command, MCP server |
| `apps/gallery` | the picker: the sites gallery, and the vault gallery (`--mode vault`) |
| `tools/` | `check`, `build-registry`, `build-thumbs` (each with `--vault`), `claude-batch` (batch recreation) |
