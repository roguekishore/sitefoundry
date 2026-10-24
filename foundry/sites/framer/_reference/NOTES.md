# framer: recreation notes

Original: https://framer.com/ (precaptured 2026-10-24, landing page only; no other pages asked for).
Fictional stand-in: **Tessel**, a website builder with a design agent. Customers, publications and
sites shown are invented names; every screenshot, video and product mock is a placeholder.

## Design language

- **Palette (dark is the faithful mode).** Pure black page (#000). Raised surfaces are only a
  few steps up: #111 (side panels, the community window), #171717 (media wells inside cards),
  #1a1a1a (quiet buttons, hairlines), #1f1f1f (inner wells). Text is white for headings, labels
  and links, and white at 60% (#999) for body copy. One brand blue, #0099ff, appears only in
  tiny touches (focus, the cookie link, figures in product UI). Primary buttons are white with
  black text; secondary buttons are #1a1a1a with white text.
- **Type scale.** A geometric display face (GT Walsheim Medium) for headings: 54px hero title
  and closing title on desktop (36px on phones), 44px section titles (28px on phones), all
  with tight tracking (−0.04em) and line-height ≈1.1. Everything else is Inter: 18px/24.3px
  body (sub-titles, card copy), 14px/19.6px UI (nav, buttons, links, footer), 12–13px small print.
  Weights are only 400 and 500.
- **Spacing rhythm.** Sections sit ~240px apart on desktop (120px padding each side) and
  ~120px apart on phones. Section heads: title left, a small button pinned to the bottom right.
  Inside cards, 30px text padding; media wells inset 10px from the card edge.
- **Grid.** 1200px content column (120px side margins at 1440), 20px gutter on phones.
  Agent cards 930px + a 260px sticky side panel (10px gap); MCP row 750 + 440. Platform bento:
  3 columns × 400px, rows of 480px, the middle and right columns of row 2 split into two
  240px cells. Showcase rows are 450px tall tiles (700 landscape / 220 portrait) with 10px gaps,
  clipped to the column. Story cards 360×460 in a full-bleed ticker.
- **Shapes.** Buttons 8px radius, 30–34px tall. Cards 20px. Media wells and showcase tiles 15px.
  Hairline borders #1a1a1a. Depth is almost all tonal (black → #111 → #171717); no big shadows.

## Type

| Original | Class / traits | Ours | Why |
|---|---|---|---|
| GT Walsheim Medium (headings) | geometric sans, normal width, single-storey a and g, round o, moderate x-height, slightly quirky t | **Outfit Variable** @ 500 | the closest open geometric with single-storey a/g and round bowls; rendered side by side with the original's hero line it matches stroke and width once tracked −0.04em (Urbanist was thinner and wider). |
| Inter / Inter Variable (body, UI) | neo-grotesk, normal width, tall x-height | **Inter Variable** | the original uses Inter, so Inter it is. |
| Input Mono (terminal panel) | monospace | **JetBrains Mono Variable** | open mono of similar width; used only by the MCP terminal placeholder label. |

## Section map

Heights at 1440 unless noted; "content" = from padding and content.

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed bar | `framer-header` | 64px, fixed | wordmark · Log in · white Sign up · menu button | wordmark · 5 nav items (3 with chevrons) · Log in · Sign up | — | fixed; Log in / Sign up fade in on load (400ms) |
| 2 | hero | `framer-hero` | content (~1050px incl. video) | 36px title in 4 lines, 18px sub, two small buttons, "New:" link under them; video full-bleed 390×219 between hairlines | 54px title (2 lines, ~720px), sub (2 lines), buttons left + "New:" link right; video 1200×674, radius 15, hairline | hero video | none (video content is media) |
| 3 | logos | `framer-logos` | content (~130 + 200 padding) | one ticker row of names | 2×4 grid, ~575px wide, centred | — | phone: ticker loop |
| 4 | agents | `framer-agents` | content (~2880px) | heading, small button below; 4 stacked cards, media well on top (220px) and copy below | heading left / button right; 3 cards (930×640) left, sticky 260×640 chat panel right; then MCP card (750) + terminal panel (440) | 3 card media, chat panel, MCP media, terminal panel | cards & MCP row: opacity 0.2→1 + x −20→0 scrubbed as they enter; chat panel pinned (sticky) beside the cards |
| 5 | platform bento | `framer-platform` | content (~1630px) | title, sub; 9 cells stacked (480 / 320 tall) | title + sub; 3-col bento, rows 480; labels "X →" bottom-left of each cell | one media well per cell (fading out at the edges) | none beyond media |
| 6 | showcase | `framer-showcase` | content (~1000px) | 2-line title + button right; rows of 260px tiles | title + button; two rows of 450px tiles | 6–7 site shots | rows drift sideways in opposite directions, scrubbed |
| 7 | stories | `framer-stories` | content (~600px) | 2-line title, button below; 190×320 cards | title + button right; 360×460 cards, full-bleed | (logo on each card: a plain name) | ticker loop (leftwards) |
| 8 | community | `framer-community` | content (~680px) | title, count + button row, window 350×253 | title left, count + button right; app window 1200×540, radius 15 | community app window | none (its feed scroll is media) |
| 9 | closing CTA | `framer-cta` | 641px (526 at 390), content | 36px centred title in 2 lines, white button, glowing canvas panel | 54px centred title, prompt box 580×185 with model label and send button, 4 chips, "Start without AI →" | phone: glowing canvas panel | prompt text types itself in and cycles |
| 10 | footer | `framer-footer` | content (612px) | 2 columns of groups; bottom stack (mark, language, socials, badges, status, ©) | 6 columns of groups; bottom row | — | link hover .6→1 |

The cookie card in every frame is the site's consent banner, not a section: skipped.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | load | Log in / Sign up opacity 0→1 | 400ms ease-out | CSS keyframes, fill both |
| header | fixed | stays at top | — | `fixed` bar + 64px spacer |
| header, footer, links | hover | colour white/60% → white | ~150ms linear | `transition-colors` |
| logos (phones) | loop | ticker moving left | ~30s loop | CSS keyframes in `framer-logos.css` |
| agents cards + MCP row | scrubbed on entering view | opacity 0.2→1, translateX −20px→0 | over the first ~500px of entry | `animation-timeline: view()`, range `entry 0%` → `entry 0% + 500px`… (fixed distance) |
| agents chat panel | pinned | sticky at top 120px while the three cards scroll past | — | `position: sticky` in a stretched grid cell |
| showcase rows | scrubbed | row 1 x 0→−80px, row 2 x −80→0 | across the section's pass | `animation-timeline: view()` on each row, `cover` range |
| stories | loop | card ticker moving left | ~40s loop | CSS keyframes, list doubled, `mask` edges none (original is hard-edged) |
| CTA prompt | loop | placeholder prompt types itself, holds, clears, next prompt | ~50ms/char | small client component (`hydrate: visible`); static HTML shows the first prompt |
| buttons | hover | background lightens | 150ms | `transition-colors` |
| "X →" links | hover | arrow nudges right 2px | 200ms | `transition-transform` on the arrow |

Skipped (inside media): the hero video, the image-wheel scale/blur scrub, CMS rows rising in,
the terminal lines fading in, the community feed scrolling, the 800ms looping spinner.

## Media slots → placeholders

All placeholders are `framer-placeholder`: a token surface (`bg-muted`, or `bg-card`) in the
original's frame (radius, hairline), optionally fading to the page at one edge as the original's
UI shots do (`fade: right / bottom`). Nothing is drawn inside.

- hero video 1200×674 (r15, hairline) / 390×219 full-bleed
- agent card wells 910×477 (r15, #171717); chat panel 260×640 (r20, #111); MCP well 730×477;
  terminal panel 440×640 (r20, #111)
- bento cell wells: each cell's UI shot, fading right/bottom
- showcase tiles 700×450 / 220×450 (r15); phone 404×260 / 127×260 (r6)
- community window 1200×540 (r15, #111, hairline)
- CTA phone canvas panel ~300×190 with a blue glow rim (from `--glow`)

## Decisions

- **Phone 4th agent card**: the original swaps the MCP row for a fourth plain card on phones.
  We render the MCP card as a normal card on phones (its side panel is desktop-only), so the
  same props serve both.
- **CTA**: phones get the white button + glow panel, desktop gets the prompt box; both come from
  the same props (`action`, `prompts`, `chips`, `secondary`).
- **Logos**: customer marks become plain-text fictional names set in the display face.
- Section padding: `--section-y` is the desktop 7.5rem; phones use a fixed 3.75rem in blocks.
