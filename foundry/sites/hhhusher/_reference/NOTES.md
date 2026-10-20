# hhhusher — recreation notes

Inspiration: https://www.hhhusher.com/ (landing) + `/products` + `/terms-of-use`, captured in
advance (`precapture.json`); the site itself was not opened. All three pages were in the list.

Fictional stand-in: **Rimlock**, maker of the **Veil**, a clip-on felt-and-neoprene shield that
sits on the snare rim and keeps cymbal wash out of the snare microphone. All copy is ours.

## Design language

- **Palette roles.** Four flat fields, alternated section by section, no gradients:
  near-black `#212121` (hero, mic setups, specs, footer, page-title band; header pill and
  glass buttons are cream at 15–20 % on it), warm cream `#f3f1e0` (features, FAQ, legal text),
  camel/tan `#ad9069` (statement + cards, reviews, parts list) and a hard signal yellow
  `#ffcc00` for every "buy" button, the active tab card, active mic index, stars and the
  "discover more" links on dark. Text is the near-black on light fields and the cream on dark.
  Mid-grey `#808080` for inactive index boxes.
- **Type.** One grotesk for everything big (weight 500, tight tracking −0.01 to −0.02 em, line
  heights 1.0–1.1), a bold *semi-mono* grotesk for all UI labels (12 px uppercase, 700), and a
  black-weight wordmark in the footer at 290 px with −5 px tracking and 0.8 line height.
  Scale at 1440: 12 (labels) · 16 (body) · 20 (feature body) · 24 (FAQ questions, card titles)
  · 29–32 (card heads, review quotes, small h2) · 43 (FAQ tabs, legal h2) · 57 (statement, h3)
  · 68–76 (h2, page title) · 290 (wordmark). At 390 the site scales type with the window
  (3.2 vw labels, 8.5 vw statement, 10.7 vw h2, 20 vw wordmark); we use fixed rems that equal
  those sizes at 390.
- **Spacing rhythm.** 40 px page gutter at 1440, 21 px at 390; sections breathe with
  ~120 px top/bottom padding; cards in a 40 px grid gap; buttons 43 px tall.
- **Layout grid.** Full width minus gutters (1360 px content at 1440). A 12-col feel: features
  copy sits in the last ~35 % (x = 915); FAQ splits 50/50 (tabs | accordion); specs 25/75.
- **Shapes and depth.** 5 px radius on everything (buttons, cards, inputs, squares). No shadows.
  Borders are 2 px near-black at 15 % (rules), 2 px solid near-black (FAQ +/− squares), 1 px
  cream at 20 % (spec rows), 2 px cream (spec groups).

## Type: faces and open substitutes

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Universal Sans Display 500 (+ Text) | neo-grotesk sans | normal width, large x-height, closed apertures | **Hanken Grotesk Variable** (500) | the open grotesk closest in width, x-height and the squarish, closed-aperture `a e s`; has 100–900 so one family also covers the wordmark |
| Aeonik Fono Bold | semi-monospaced grotesk (grotesk letters on near-fixed widths) | normal width, large x-height | **Spline Sans Mono Variable** (700) | a mono built on grotesk shapes without slab serifs on `i l` (unlike Plex Mono) and without Space Mono's quirks; reads like Fono in 12 px uppercase labels |
| Aeonik Black 900 (footer wordmark) | geometric-leaning grotesk, black | normal | Hanken Grotesk 900 | same family as the display face, black weight |

## Section map — landing (`page.tsx`)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header (fixed, over hero) | `hhhusher-header` | 80 px bar | wordmark · BUY · menu square | wordmark · centred pill nav (3 links + BUY) · currency box + language square | — | hides on scroll down, returns on scroll up; hover yellow |
| 2 | hero | `hhhusher-hero` | **100svh** | headline + copy + 3 buttons stacked at the bottom | headline at 40 % x bottom, copy + buttons right column bottom | video, fills the window, cover | load: rises in; video drifts down at half the scroll speed (scrubbed) |
| 3 | statement | `hhhusher-statement` | content | 33 px statement | 57 px statement, 4 lines over ~1300 px | — | lines rise 40–80 px + fade, staggered, on entering view |
| 4 | use-case cards | `hhhusher-overview` | content | stacked cards: tab card 348×694, then 401 / 348 / 302 tall | tab card 1360×720; below a 835×960 card left, 485×485 + 485×420 stacked right | 1 image per tab + 3 card images | cards fade in on entering view; images drift −72→72 px (scrubbed); tab switch on click |
| 5 | features | `hhhusher-features` | content, ~3760 px | text over the pinned frame, single column | intro left column, then 3 feature blocks in the right column with ~650 px gaps | 3D canvas, pinned, fills the window | canvas frame pinned (sticky) for the whole section and fades 0.2→1 on entry; headings rise line by line; copy fades in (scrubbed) |
| 6 | mic setups | `hhhusher-setups` | **100svh** at 390, 965 px (aspect 1.49) at 1440 | heading, 6 index rows, copy, BUY | the same column on the left, image fills | full-bleed photo | rows fade in staggered on entering view; hover: index box yellow, label yellow; click switches copy |
| 7 | FAQ | `hhhusher-faq` | content | tabs row on top (01 Product / 02 Features spread), accordion below | tabs left half, accordion right half | — | tab switch fades 1↔0.15; accordion opens; +/− square fills on hover |
| 8 | reviews | `hhhusher-reviews` | content | stacked | two columns | — | fade/rise in on entering view |
| 9 | footer | `hhhusher-footer` | content (~600 px) | newsletter, links, wordmark 78 px | newsletter left, two link columns right, full-width 290 px wordmark | — | revealed from underneath (fixed footer behind the page); wordmark letters slide in from the left |

## Section map — products (`pages/products.tsx`)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `hhhusher-header` | | | | | |
| 2 | product hero | `hhhusher-product-hero` | content (818 px at 1440) | gallery, thumbs, counter + arrows, title, price, copy, stepper, full-width checkout | gallery 726×427 + 4 thumbs left; title 43 px, price row, copy, stepper + checkout + note right | main image 1.70, 4 thumbs 1.54 | arrows/thumbs switch image; stepper; hover yellow/transparent |
| 3 | statement | `hhhusher-statement` | content | | | — | line reveal |
| 4 | review list | `hhhusher-review-list` | content (~2500 px) | label then list | "Reviews" label left (sticky), list right half | — | each review rises 40 px + fades on entering view |
| 5 | specs | `hhhusher-specs` | content | heading, table (group row then key/value rows), copy + FAQ button after | heading; copy + button left 25 %, three-column table right | — | rows fade in on entering view |
| 6 | parts | `hhhusher-parts` | content | number + right-aligned names, first one full strength, image above | 9 rows of 57 px names at 15 % strength; hovered row 100 % and an image follows the pointer | 310×352 floating image per part | rows rise 50 px staggered on entering view; hover opacity; image follows pointer |
| 7 | FAQ | `hhhusher-faq` | | | | | |
| 8 | footer | `hhhusher-footer` | | | | | |

## Section map — terms of use (`pages/terms-of-use.tsx`)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `hhhusher-header` | | | | | |
| 2 | title band | `hhhusher-page-title` | content (436 px at 1440, ~118 at 390) | 41 px title right under the bar | 76 px title at the band's bottom | — | none |
| 3 | legal text | `hhhusher-legal` | content | h2 29 px + 16 px paragraphs | h2 43 px, 16 px paragraphs, 640 px column | — | none |
| 4 | footer | `hhhusher-footer` | | | | | |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scroll direction | translateY 0 → −100 % (down), back (up) | 0.4 s cubic-bezier(0.32,0.94,0.6,1) | React scroll listener + transition (`hydrate: load`) |
| header links, BUY | hover | link text → yellow; BUY yellow fill → transparent + yellow text; glass squares → transparent + cream border | 0.3 s same curve | Tailwind `hover:` + `transition` |
| hero | load | headline + copy + buttons rise 24 px and fade in | 0.9 s, staggered | CSS `@keyframes`, fill both |
| hero | scrubbed | video placeholder translateY 0 → +50 % of the scroll (450 px over 900) | linear | CSS `animation-timeline: view()` exit range |
| statement (+ feature headings) | entering view | each line rises 40–80 px and fades 0 → 1, later lines further | ~0.8 s feel; scrubbed over entry | lines as props; CSS view timeline, per-line range offset |
| overview cards | entering view | fade 0 → 1 | scrubbed over entry | CSS view timeline |
| overview images | scrubbed | translateY −72 → 72 px inside the card | linear across cover | CSS view timeline on the image placeholder (card crops with `overflow-clip`) |
| overview tabs | click / hover | active tab expands yellow; others glass; hover → transparent + cream border | 0.3 s | React state + transitions (`hydrate: visible`) |
| "discover more" | hover | opacity 1 → 0.7 | 0.3 s | Tailwind hover |
| features frame | pinned | frame stays in view for the whole section, fades 0.2 → 1 on entry | — | `position: sticky` in the section + view timeline |
| features copy | scrubbed on entry | opacity 0 → 1 | entry 0–60 % | CSS view timeline |
| mic setups rows | entering view | opacity 0 → 1, staggered | scrubbed over entry | CSS view timeline with per-row offsets |
| mic setups rows | hover / click | index box grey → yellow fill, label → yellow; click selects | 0.3 s | Tailwind hover + React state |
| FAQ tabs | click | active 1, inactive 0.15 | 0.4 s | React state + opacity transition |
| FAQ accordion | click / hover | panel opens (height), + turns to −; square fills dark, icon cream on hover | 0.3 s | CSS grid-rows transition + state |
| reviews / review list | entering view | rise 40 px + fade | scrubbed over entry | CSS view timeline |
| specs rows | entering view | fade | scrubbed | CSS view timeline |
| parts rows | entering view | rise 50 px + fade to resting 15 % | staggered | CSS view timeline (animates translate only, resting opacity set by class) |
| parts rows | hover | opacity 0.15 → 1 | 0.3 s | Tailwind `hover:` |
| parts image | pointer move | floating image follows the pointer while over the list | eased 0.4 s | React pointer handler sets CSS vars (`hydrate: visible`) |
| footer | scrubbed (fixed reveal) | the footer looks fixed under the page: content stays put while the page slides off | — | inner translateY −100 % → 0 over the footer's view `entry` (same look as fixed, no duplicate DOM) |
| footer wordmark | entering view | opacity 0 → 1; letters slide in from −70 px (later letters further) | over entry | CSS view timeline, per-letter offset from a CSS var |
| product hero | click / hover | image swap, qty; checkout yellow → transparent + yellow | 0.3 s / 0.7 s | React state + Tailwind |
| smooth scroll | wheel | Lenis glide | — | `hhhusher-smooth-scroll` (Lenis) on each page, `hydrate: load` |

Skipped: the cookie banner (not part of the design), page-transition loader panels on the
terms page (a route-change effect, not a section), the 3D model's own rotation (media).

## Media slots → placeholders

| slot | original | placeholder |
|---|---|---|
| hero video | full window, cover | `bg-muted` (dark) field filling the section, with a soft `glow` radial wash; drifts down with scroll |
| tab-card images (per tab) | 1360×720 at 1440 / 348×694 at 390 | `bg-muted` fill inside the card, drifts |
| shape / materials / install cards | 835×960, 485×485, 485×420 (390: 348×401/348/302) | `bg-card` card (dark) with a soft `foreground/5` wash; same sizes, 5 px radius |
| features 3D canvas | full window, pinned | sticky full-window layer with a soft radial wash of `foreground` at 8 % centred left of middle |
| mic setups photo | full bleed, 1.49 | `bg-muted` (dark) fill + left-to-right `background` scrim |
| product gallery | 726×427 (1.70) + four 173×112 thumbs (1.54) | `bg-muted` frames, 5 px radius, 1 px border; active thumb outlined |
| parts images | 310×352 (0.88) | `bg-muted` floating card |

## Decisions

- **Light is the faithful mode.** `:root` = cream page / near-black text / tan `secondary` /
  yellow `primary`. Sections that are always dark in the original (hero, mic setups, specs,
  footer, page-title band, product hero, header) wrap themselves in `.dark`, so the dark
  palette is the original's near-black + cream. The tan sections use `bg-secondary`.
- `.dark` sibling: near-black page, cream text, a dimmed tan (`secondary`) so tan sections stay
  warm but low-key.
- Gutter and section padding change at `lg` inside the theme (`@media` on `:root`), so blocks
  only say `px-gutter` / `py-section`.
- Statement and feature headings take their text as **lines** (a list of strings), because the
  line-by-line rise needs one element per line and we can't measure lines without JS.
- Footer "fixed reveal" uses a view-timeline translate rather than `position: fixed`, so the
  block works alone, without z-index rules on the other blocks.
- Products hero background is pure black in the original; ours uses the dark `background`
  (`#212121`) to stay on tokens (a near-match).
- `package.json` / `pnpm-lock.yaml` were committed with other sessions' uncommitted font
  additions in them (shared files; can't split hunks unattended).
