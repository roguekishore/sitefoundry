# CONTRACT — how to write a foundry item

Everything in `foundry/` and `vault/` follows this. `pnpm check` enforces it; an item with
errors can't enter the registry. Format version: **1**.

## An item is a folder with `meta.json`

```
foundry/sites/huly/huly-header/
  meta.json               required
  huly-header.tsx         the entry: what `@foundry/huly-header` imports
  huly-header.demo.tsx    required for blocks and components; gallery only, never installed
  *.tsx / *.ts / *.css    any other files the item needs (import them relatively)
  public/…                images, fonts, video: installed into the project's public/foundry/<name>/
  _anything               ignored (scratch, retired work)
```

- **The folder name is the item's name**: kebab-case, unique across the whole repo, and
  starting with its site or source: `huly-header`, `huly-pricing`, `reactbits-split-text`.
- Items don't nest. Group them in plain folders (`foundry/sites/huly/…`).

```json
{
  "schema": 1,
  "version": "1.0.0",
  "type": "block",
  "title": "Huly header",
  "description": "One or two sentences: what it looks like and does.",
  "category": "header",
  "site": "huly",
  "source": "foundry",
  "license": "proprietary",
  "tags": ["header", "dark", "glow", "sticky"],
  "notes": ["best on dark themes"],
  "entry": "huly-header.tsx"
}
```

| Field | |
|---|---|
| `type` | `block` (a page section) · `component` (a smaller shared piece, e.g. a button) · `theme` · `lib` (code helpers) · `asset` (images, fonts, art) · `base` (foundry-base only) |
| `category` | required for blocks: `header`, `hero`, `features`, `logos`, `testimonials`, `pricing`, `faq`, `cta`, `footer`, `gallery`, `stats`, `contact`, `text-effect`, `background`, `button`, `card`… |
| `source` | `foundry` for ours (default); the vault uses `shadcn`, `reactbits`, … |
| `license` | ours: `proprietary`. Vault: the upstream licence (`MIT`, `MIT + Commons Clause`…) |
| `notes` | what a picker should know: "best on dark themes", "needs a display font", "heavy: three.js" |

## Versions never change once built

`pnpm build:registry` writes `public/r/<name>/<version>.json` once. After that, any change
to the item's files or its `meta.json` needs a new `version` (`1.0.0` → `1.1.0` for additions, `2.0.0` when
props change incompatibly). The build refuses otherwise.

## Rules for blocks and components (`pnpm check`)

1. **Colour only through tokens** (`foundry/tokens.md`): `bg-primary`, `text-muted-foreground`,
   `border-border`, `bg-glow/30`. No hex/rgb/oklch values, no Tailwind palette colours
   (`bg-zinc-900`, `text-white`). Themes are the only place colours live. A line that truly
   needs a literal (e.g. inside an SVG mask) can carry the comment `foundry-allow-colour`.
2. **Fonts, radius and spacing through tokens too:** `font-display`, `font-sans`,
   `rounded-lg`, `max-w-page`, `px-gutter`, `py-section`.
3. **All content comes in as props.** No visible text, `src`, `alt` or `poster` written
   into the JSX. Sample content goes in the demo. (Purely decorative glyphs can be allowed
   with a `foundry-allow-text` comment in the file.)
4. **Typed props.** Export the component and its `Props` interface; comment each prop. The
   props description in the registry is generated from these types.
5. **Renders to static HTML.** No `window`, `document` or `localStorage` at import or
   during render; use them in `useEffect`. The checker renders every demo with
   `renderToString` to prove it.
6. **Plain React.** No `next/*` imports. Use `<a>` and `<img>`.
7. **Reduced motion.** Anything animated respects it (`useReducedMotion` from
   `motion/react`, `motion-reduce:` classes, or a `prefers-reduced-motion` query).
7b. **Say when it needs JavaScript.** A block with React state or effects, or one whose
   static HTML starts hidden (JS entrance animations write `opacity:0`), sets `"hydrate"`
   in meta.json: `"load"` (above the fold), `"visible"` (further down) or `"idle"`. Astro
   sites then render it with `client:load` / `client:visible` / `client:idle`; without it
   the block is inert or invisible. **Prefer CSS animations for entrances**
   (`@keyframes` + `motion-reduce:animate-none`): they need no JavaScript and no `hydrate`.
8. **Mobile first.** Design at 360–390 px, then widen with `sm:` `md:` `lg:`.
9. **Imports:** other items as `@foundry/<name>` (only their entry); files inside the item
   relatively. npm packages must be in the root `package.json` (`pnpm add -w <pkg>`).
   Use `cn()` from `@foundry/foundry-utils` to merge classes, and accept a `className` prop.
10. **Our own work only.** Recreate a site's design language (layout, rhythm, type, colour,
    motion), never its text, logos, illustrations, photos or code.

## Themes

One `theme.css` per theme item, setting **every** token from `foundry-base` in `:root`
(light) and every colour token in `.dark`. It may `@import` font packages
(`@import "@fontsource-variable/inter";`). Recreated site `x` gets a theme named
`x-theme` in `foundry/themes/x/`.

## Commands

```bash
pnpm check [name…]      # the rules above
pnpm build:registry     # build public/r/ (also refreshes the @foundry/* path map)
pnpm gallery            # browse everything at http://localhost:4400
```
