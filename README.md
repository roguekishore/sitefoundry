# SITEFOUNDRY

A private registry of website blocks: recreations of inspiration sites (one folder per
site), plus a mirrored vault (shadcn, React Bits…). Every block is plain React + Tailwind,
reads its look from shared tokens, and installs into any project with one command.

## Setup (once, and after pulling changes)

```bash
pnpm install
pnpm build:registry      # public/r/ — what the CLI and MCP read
pnpm build:cli           # packages/cli/dist/foundry.mjs
pnpm build:mcp           # packages/mcp/dist/mcp.mjs
```

Optional, to type `foundry` anywhere instead of `node D:/PROJECTS/SITEFOUNDRY/packages/cli/dist/foundry.mjs`:
`cd packages/cli && npm link`.

## Browse

```bash
pnpm gallery             # http://localhost:4400
```

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
previews: `pnpm build:thumbs` makes them (only the ones missing; `--force` redoes all), and anything not shot yet
shows a placeholder.

## Use blocks in a customer project

The project needs React and Tailwind v4 (Vite, Astro with `@astrojs/react`, or Next.js).

```bash
foundry init                       # foundry.json, base tokens, CSS imports
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
`init`, `add`, `theme`, `status`, `diff`. Previews use the running gallery, or start one
quietly.

**From another machine** (no clone needed): the foundry server answers the read-only tools
(`search`, `get`, `preview`) at `https://foundry.themaverick.tech/mcp`. Add the machine on
the **Devices** page (`#/devices`); it shows a token once, in a config file to save on that
machine, used per session with `claude --mcp-config ~/.foundry/mcp.json`. Nothing is
registered in a Claude account. Check an address and token with
`FOUNDRY_MCP_TOKEN=fdy_… node packages/mcp/smoke.mjs <url>/mcp`.

## Adding blocks

Read [CONTRACT.md](CONTRACT.md) (the rules) and [foundry/tokens.md](foundry/tokens.md)
(the token names). Then:

```bash
pnpm check [name…]       # must report 0 errors
pnpm build:registry      # refuses changed files without a version bump
```

## Recreating sites in a batch

`/recreate-site` for a list of sites, unattended, in two phases. The list is a JSON file that
also holds each site's status, which both phases keep up to date
(see `tools/claude-batch/sites.example.json`):

```json
{ "sites": [
  { "url": "https://linear.app" },
  { "url": "https://www.example-saas.com", "slug": "saasy", "pages": ["pricing", "about"] }
] }
```

```bash
# A: on a network that reaches the sites: capture the new ones
node tools/claude-batch/precapture.mjs sites.json
#    on another machine than B? commit and push the captures, then git pull there
#    (crops and frames are committed on purpose; delete them once the site is recreated)

# B: on any machine (Linux), as a normal user, with claude logged in to your account,
#    after pnpm install and pnpm exec playwright install --with-deps chromium
node tools/claude-batch/run.mjs sites.json --dry-run    # what it would do
node tools/claude-batch/run.mjs sites.json --jobs 6     # one `claude -p` session per site, 6 at a time
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
| `vault/` | mirrored third-party items, same format |
| `public/r/` | the built registry (committed) |
| `packages/core` | item format, registry reader, installer (shared by CLI and MCP) |
| `packages/cli`, `packages/mcp` | `foundry` command, MCP server |
| `apps/gallery` | the picker |
| `tools/` | `check`, `build-registry`, `claude-batch` (batch recreation) |
