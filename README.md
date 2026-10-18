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

Every block, theme and recreated site. Switch device width (360–1280), theme (each block's
own, base defaults, or any theme) and light/dark; each item shows its props, code, details
and its install command.

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

## Adding blocks

Read [CONTRACT.md](CONTRACT.md) (the rules) and [foundry/tokens.md](foundry/tokens.md)
(the token names). Then:

```bash
pnpm check [name…]       # must report 0 errors
pnpm build:registry      # refuses changed files without a version bump
```

## Layout

| Path | |
|---|---|
| `foundry/` | ours: `base/`, `themes/`, `sites/<site>/` (blocks + `page.tsx`, the full recreation) |
| `vault/` | mirrored third-party items, same format |
| `public/r/` | the built registry (committed) |
| `packages/core` | item format, registry reader, installer (shared by CLI and MCP) |
| `packages/cli`, `packages/mcp` | `foundry` command, MCP server |
| `apps/gallery` | the picker |
| `tools/` | `check`, `build-registry` |
