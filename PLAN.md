# PLAN

Agreed with the user 2026-10-18. Remote: `https://github.com/roguekishore/sitefoundry.git`
(private), set 2026-10-19; nothing is pushed until the user says so.

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
../SITEFOUNDRY-VAULT the vault, its own repo: mirrored third-party items, the mirror, its registry
tools/               build-registry, check
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
| 5 | Vault mirror (shadcn + directory registries + React Bits) | **done**; split into its own repo 2026-10-21 (below) | vault items live in the gallery and install with `foundry add` |
| 6 | MCP (local): search / get / preview / add / theme | this agent | **done** (scripted MCP client) |
| 7 | Cloud: preview instance, run instance, run page, warden widget (below) | A–F **done** (warden's outpost on the preview still to update); see [`docs/phase-7-cloud.md`](docs/phase-7-cloud.md) | a run started from the phone lands as a branch you can browse |
| 8 | Remote MCP (read-only), OAuth login per machine (passphrase only) | **done**, live 2026-10-20; see [`docs/phase-8-remote-mcp.md`](docs/phase-8-remote-mcp.md) | Claude Code on another machine searches, reads and previews items with nothing registered in a Claude account |

Folders per agent: Huly → `foundry/sites/huly/`, `foundry/themes/huly/`. Vault → the vault
repo (`vault/`, `tools/mirror/`, its npm packages in its own `package.json`). The gallery
picks up both automatically; nobody else edits gallery code.

## The vault split (agreed with the user 2026-10-21)

The mirrored libraries moved to their own private repo, `SITEFOUNDRY-VAULT`, next to this one:
this repo stays about the recreated sites, and building a new site never rebuilds the vault.

- **What's where.** Vault repo: `vault/<library>/<item>/`, `vault/sources.json`, the mirror
  (`pnpm mirror`), its built registry `public/r/`, its own `package.json`. This repo: every
  tool, run with `--vault` (`pnpm check:vault`, `build:registry:vault`, `build:thumbs:vault`,
  `gallery:vault`).
- **Two galleries, one codebase.** The sites gallery at `/`, the vault gallery at `/vault/`
  (`vite --mode vault`), built and deployed apart; each links to the other.
- **CLI and MCP read both registries** as one list (ours first). Projects get both in
  `foundry.json`.
- **What the vault mirrors:** shadcn, React Bits, and from shadcn's directory the effect
  libraries (Aceternity, Magic UI, Cult UI, Motion Primitives, Skiper, Kokonut, SmoothUI,
  Eldora, Animate UI, UI Layouts, ncdai, Kibo) whole, minus copies of shadcn's basics; and
  only whole blocks and pages from the block libraries (shadcnui-blocks, 7ovr, flx, uiception…).
  Registries over 900 items, icon packs, loaders and app-only kits are left out. The list and
  each library's licence: the vault's `tools/mirror/sources/registry.ts`.
- **Cloud:** the preview instance pulls the vault and builds its gallery when it moved; the
  run instance shoots its thumbnails in the same job as ours. Live since 2026-10-21 from
  `roguekishore/sitefoundry-vault` (private; `VAULT_REPO_URL` in `infra/provision/common.sh`,
  a read-only deploy key per instance).

## Built in from day one

Item versions (immutable once built) + `foundry.lock` in customer projects · token names
only added, never renamed · `schema` version field · blocks render to static HTML ·
content only through typed props, with a generated props description · `foundry check` ·
npm version-clash warnings · a licence field per item. Skipped (user): vault provenance.

## Phase 7: the cloud (agreed with the user 2026-10-19)

Status and the next steps: [`docs/phase-7-cloud.md`](docs/phase-7-cloud.md).

Two EC2 instances in **jk** (`400730734202`, `ap-south-1`), in a VPC of their own (no
peering: jk's own VPC is peered to clasher's database).

| | Preview | Run |
|---|---|---|
| Instance | t4g.small, always on | t4g.large, on only while there is work |
| Address | Elastic IP + a domain | auto-assigned public IP (outbound only) |
| Inbound | 443/80 (Caddy) | the live gallery port, from the preview instance only |
| Holds | gallery, run page, login, runs database | Claude login, pnpm store, worktrees |

- **The foundry server** (`packages/server`): login, the built gallery, the run page and an
  API, over SQLite. Run → calls (one row per model call) → events.
- **A run:** URL + "slug and pages" + backend (Gemini or Claude) + model + effort → the
  preview server queues it and starts the run instance → the runner takes the job over the
  private network, runs it in a worktree on `<backend>/<slug>`, reports every call back,
  commits the site and its usage record, pushes the branch → the preview instance builds
  the branch as a preview to browse before merging from the laptop.
- **Gemini** goes through the forwarder from `tools/gemini-run/run.mjs` (Standard tier,
  Vertex global endpoint, the key stays in the forwarder). **Claude** is Claude Code
  `-p --dangerously-skip-permissions --output-format stream-json`, logged in on the run
  instance; on a subscription, cost is what the API would have charged.
- **No S3** (user): git carries the work, and each run commits its usage record, so the
  database can be rebuilt from git.
- **Warden:** both instances tagged `warden:app=foundry`; the preview server writes
  `/var/lib/warden-runs/foundry-*.json` (D45); a Foundry dashboard widget in warden.
- Local first: the same server and runner run on the laptop; the cloud comes after one
  Gemini and one Claude run from the run page work there.
