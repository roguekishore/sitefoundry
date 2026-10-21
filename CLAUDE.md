# SITEFOUNDRY

**Role (the user's word, 2026-10-18):** recreate websites the user gives as inspiration,
faithfully and mobile-first, one folder per site (e.g. `foundry/sites/huly/`). The landing
page alone is enough. Unsteered AI sites come out generic; steering from a real inspiration
is the point of this directory.

- Every component of a recreated site is **exportable** on its own and becomes a building
  block for later custom sites. All blocks are viewable in the gallery for picking.
- The **vault** mirrors React Bits, shadcn and chosen libraries from shadcn's directory
  registries (Aceternity, Magic UI…), in its own repo next to this one:
  `..\SITEFOUNDRY-VAULT` (split 2026-10-21; see PLAN.md). 21st.dev skipped for now.
- **Independent of MaverickCloud.** Nothing in `..\MAVERICKCLOUD\` constrains this repo.
- **Private.** Remote `roguekishore/sitefoundry` (private); push only when the user says.
  The cloud (a login-gated preview instance and an on-demand run instance) is phase 7 of
  [`PLAN.md`](PLAN.md). No public registries, no S3.

## Read first

- [`README.md`](README.md): setup and commands
- [`CONTRACT.md`](CONTRACT.md): how to write an item; `pnpm check` enforces it
- [`foundry/tokens.md`](foundry/tokens.md): the token names (only ever added, never renamed)
- [`PLAN.md`](PLAN.md): phases and who owns what

## Built (phases 0–3 and 6)

Workspace (pnpm) · item format v1 · `pnpm check` · `pnpm build:registry` · `foundry` CLI
(our own, no shadcn CLI) · gallery (Vite, port 4400) · MCP server (stdio). Tested end to
end in fresh Vite (npm) and Astro (pnpm) projects, and through a scripted MCP client.

## Gotchas found while building

- **TypeScript stays on 6.x**: TS 7 has no JavaScript API, which the props generator and
  the checker use.
- **Windows shells eat `^`**: package-manager arguments are quoted (it once installed
  `x.0.0` releases silently, e.g. a Fraunces build with only the italic font).
- **Registry npm ranges are the versions we tested with** (`^5.3.0`), not `^5.0.0`;
  an older minor already in a project is a note, a different major is a clash.
- **JS entrance animations render `opacity:0` in static HTML**: such blocks need `hydrate`
  (Astro `client:*`), and the checker enforces it. Prefer CSS entrance animations.
- The MCP must never write to stdout (it carries the protocol): package-manager output is
  captured, and its private gallery starts with logging off.

## Working rules

- Take scope only from the user; label anything else as a suggestion.
- Never suggest or critique pricing unless asked.
- The user writes Java and is not a frontend specialist: keep code readable and explain
  frontend choices plainly.
- Recreate a site's design language, never its text, logos, images or code.
