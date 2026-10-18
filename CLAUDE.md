# SITEFOUNDRY

**Role (the user's word, 2026-10-18):** recreate websites the user gives as inspiration,
faithfully and mobile-first, one folder per site (e.g. `huly/`). The landing page alone is
enough to start. Unsteered AI sites come out generic; steering from a real inspiration is
the point of this directory.

- Every component of a recreated site must be **exportable and importable** on its own
  (e.g. a `huly` header), so it can become a building block for later custom sites.
- All blocks must be **viewable on one gallery page** so the user can pick from them.
- **Independent of MaverickCloud.** Don't follow the non-fixed formats in
  `..\MAVERICKCLOUD\`; nothing there constrains this directory.

**Architecture: still being discussed with the user.** Don't scaffold until it's agreed.
Agreed so far (2026-10-18):

- Our own **private** registry with **our own CLI** (`foundry add <block>`); no shadcn CLI or
  `components.json`. shadcn is only one of the mirrored sources. Source of
  truth: a private GitHub repo on the user's current account; a local process for daily use.
- The same directory also **mirrors React Bits and shadcn (+ its directory registries)**
  locally. 21st.dev skipped for now.
- The gallery is also served as a **private, login-gated site** so the user can browse
  blocks from a phone.
- We build **our own MCP** for searching and adding blocks, running both locally and in
  the cloud (behind auth).
- Built in from day one: item versions + `foundry.lock` in customer projects; token names
  only added, never renamed; a `schema` version field; blocks build to static HTML; all
  content via typed props with a generated props description; `foundry check`; npm
  version-clash warnings. **Skipped (user):** vault provenance tracking.
- The foundry is the single access point for **every creative**: our blocks, the vault
  (shadcn, React Bits, …), themes, fonts and other assets.

## Working rules

- Take scope only from the user; label anything else as a suggestion.
- Never suggest or critique pricing unless asked.
- The user writes Java and is not a frontend specialist: keep code readable and explain
  frontend choices plainly.
