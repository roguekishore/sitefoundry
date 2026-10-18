# PLAN

Agreed with the user 2026-10-18. Local only for now; the cloud comes later. Repo name: the
user will give it later (local git only until then).

## Stack

- **Blocks:** React 19 + TypeScript + Tailwind v4. Plain React only: no `next/*` imports.
- **Gallery:** Vite + React, static build.
- **CLI (`foundry`) and MCP:** Node + TypeScript, sharing `packages/core`.
- Workspace: pnpm.

## Layout

```
packages/core/       item format, registry reader (folder or URL), installer
packages/cli/        `foundry` command
packages/mcp/        MCP server (local, stdio)
apps/gallery/        the picker (Vite)
foundry/             OUR content: base/, themes/, sites/<site>/
vault/               mirrored third-party items (shadcn, directory registries, React Bits)
tools/               build-registry, check, screenshots
public/r/            the built registry (generated, committed)
```

## Phases

| # | Phase | Owner | Done when |
|---|---|---|---|
| 0 | Setup: git, workspace, TS/Tailwind/React base | this agent | **done** |
| 1 | Contract: tokens, item format v1, build-registry, `foundry check` | this agent | **done** |
| 2 | CLI: init / list / add / theme / diff / update, `foundry.lock` | this agent | **done** (Vite + npm, Astro + pnpm) |
| 3 | Gallery: browse, device widths, theme + light/dark switch, copy command | this agent | **done** |
| 4 | Huly recreation | another agent, **ready to start** | faithful at 390 px and desktop; every block standalone |
| 5 | Vault mirror (shadcn + directory registries + React Bits) | another agent, **ready to start** | vault items live in the gallery and install with `foundry add` |
| 6 | MCP (local): search / get / preview / add / theme | this agent | **done** (scripted MCP client) |
| 7 | Cloud: host, login, per-device tokens, S3 assets, remote MCP | later | phone access works |

Folders per agent: Huly → `foundry/sites/huly/`, `foundry/themes/huly/`. Vault →
`vault/`, `tools/mirror/`, plus its npm packages in the root `package.json`. The gallery
picks up both automatically; nobody else edits gallery code.

## Built in from day one

Item versions (immutable once built) + `foundry.lock` in customer projects · token names
only added, never renamed · `schema` version field · blocks render to static HTML ·
content only through typed props, with a generated props description · `foundry check` ·
npm version-clash warnings · a licence field per item. Skipped (user): vault provenance.
