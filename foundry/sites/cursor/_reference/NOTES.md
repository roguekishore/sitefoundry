# Cursor (cursor.com) — recreation notes

Recreated as **Fernwork**, a made-up coding agent from a made-up lab ("Fernwork Labs").
All copy, names, quotes and posts are invented. Captured in advance (precapture.json, landing
page only; no other pages were asked for).

## Design language

- **Palette:** a warm paper page (#f7f7f4) with slightly darker paper panels (#f2f1ed) and a
  warm near-black ink (#26251e). Secondary text is the same ink at 60% (≈#7a7975), tertiary at
  40%. Hairlines are ink at 5–10%. One loud colour only: a hot orange (#f54e00) for text links
  ("Learn more →"). Buttons are ink pills (#26251e → #3b3a33 on hover) and pale grey pills
  (#e6e5e0 → #e1e0db). Card links darken a step on hover (#ebeae5). No gradients outside media,
  no shadows on page elements (shadows live only inside the product mock-ups).
- **Type scale:** small and quiet. Body 16px/24px; nav 14px; hero heading only 26px/1.25
  (24px at 390); feature titles and their descriptions both 22px/1.3 (title ink, description
  60% ink); section titles 22px; testimonial heading 36px; the closing "Try … now." is the
  only big type (~72px at 1440, ~48px at 390, tight tracking). One weight (400) nearly
  everywhere; the wordmark is bold.
- **Spacing:** 1300px content frame (70px gutters at 1440, 19px at 390); sections ~64–80px
  top and bottom; cards 10px apart in grids; feature panels 90px apart.
- **Layout grid:** feature panels are full-width 1300px cards with a 1/3 text column
  (vertically centred) and a 2/3 media frame inset 17px from the card edges, alternating
  sides. Grids of 3 (testimonials, frontier) and 4 (changelog, posts), 8 logo tiles.
- **Shapes:** 4px radius on every card, tile and media frame; full pills for buttons; round
  40px avatars. 1px ink-5% borders on cards.
- **Depth:** flat. Panels separate by tone (page vs card), not shadows.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| CursorGothic (custom) | neo-grotesk sans, normal width, large x-height, single-storey g, tight at display sizes | **Hanken Grotesk Variable** | closest open neo-grotesk on width and x-height, already installed; neutral at 14–22px and tightens well at 72px |
| berkeleyMono | monospace, slightly rounded, large x-height | **JetBrains Mono Variable** | similar x-height and width; only used for the install command chip |
| EB Garamond, Lato, system-ui | only inside product mock-ups | — | media, not rebuilt |

## Section map (1440 heights from the capture; none are window-sized)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `cursor-header` | 56 / 52px, fixed | wordmark, Sign in, burger | wordmark · centred nav (5) · Sign in, outline pill, ink pill | — | stays on top; link/pill hovers |
| 2 | hero | `cursor-hero` | content (1066 / 1086) | 24px heading, one ink pill, media 720px tall full width | 26px heading in 2 lines, two pills, media 1300×720 | hero picture (painting + product window) 720px tall | button hovers |
| 3 | logos | `cursor-logos` | content (219 / 177) | caption 2 lines, 4×2 tiles 82×60 | caption, 8 tiles 154×100 in one row | logo tiles (become text wordmarks) | — |
| 4 | features | `cursor-features` (4 panels) | content (3741 / 3203) | stacked: text then media 320×680 | 1300×715 panels, text ⅓ / media 840×680 inset 17px, alternating | 4 product windows 840×680 | link hover |
| 5 | testimonials | `cursor-testimonials` | content (886 / 700) | 2-line 34px heading, 3 cards stacked | centred 36px heading, 3×2 cards 427×216 | avatars 40px | — |
| 6 | frontier | `cursor-frontier` | content (1630 / 739) | 3 cards stacked | title + 3 cards, square media 392 | 3 square images | link hover |
| 7 | changelog | `cursor-changelog` | content (313 / 334) | sideways scroller, cards ~262 wide | title + 4 cards in a row + link | — | card hover |
| 8 | research | `cursor-research` | content (437 / 694) | stacked: text, image 320×180 | 1300×560 panel, text ⅓ / image 840×525 | team photo | link hover |
| 9 | highlights | `cursor-highlights` | content (343 / 341) | sideways scroller | title + 4 post cards + link | author avatars 24px | card hover |
| 10 | cta | `cursor-cta` | content (310 / 346) | 48px heading, pill | 72px heading, pill | — | button hover |
| 11 | footer | `cursor-footer` | content (1183 / 526) | 2-col link grid, Connect alone, stacked bottom row | 5 columns, bottom row: © + certs / theme switch + language | — | link hover |

Shared components: `cursor-button` (ink / pale / outline pills), `cursor-arrow-link` (orange
text link with → or ↗), `cursor-section-title`, `cursor-media` (placeholder frame),
`cursor-split-panel` (the text-⅓ / media-⅔ card used by features and research),
`cursor-post-row` (title + 4 link cards + link, with the phone scroller; used by changelog
and highlights).

## Motion inventory

The page itself barely moves: every scroll "reveal" in the capture belongs to the animated
product mock-ups inside the media frames (typing, shimmer text, tiles popping in), which are
media and become placeholders. What's left:

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll | stays fixed at the top for the whole page | — | `sticky top-0` (works alone too) |
| header nav, Sign in | hover | ink → ink 75% | 150ms cubic-bezier(.4,0,.2,1) | `transition-colors hover:text-foreground/75` |
| outline pill (Contact) | hover | transparent → card fill | 150ms same ease | `hover:bg-card` |
| ink pill (Download) | hover | #26251e → #3b3a33 | 150ms | `hover:bg-primary/88` (mix toward page) |
| pale pill (Request a demo) | hover | #e6e5e0 → #e1e0db | 150ms | `bg-secondary hover:bg-accent` (theme step) |
| orange links | hover | orange → orange 75% | 150ms | `hover:text-highlight/75` |
| changelog / post cards | hover | card → one step darker | 150ms | `hover:bg-accent` |
| changelog / posts at 390 | swipe | sideways scroll with the next card peeking | native | `overflow-x-auto snap-x` |

Skipped: the cookie banner (not the site's design, a consent layer); the logo tiles' swap
(the capture shows a single opacity change on two logo images, not enough to tell a pattern).

## Media slots → placeholders

- hero: 1300×720 (353×720 at 390), square corners → `cursor-media` tone "picture": a soft
  vertical gradient from `muted` to `accent` with a faint `glow` wash. No inner window
  frame: that would be mock UI.
- features: 840×680 frames (320×680 at 390), 4px radius, tinted backdrop → same placeholder.
- frontier: three 1:1 squares, 4px radius.
- research: 840×525 (1.6), 4px radius; 320×180 at 390.
- avatars: 40px and 24px circles in `muted`.
- logos: tiles kept (they're layout); the wordmarks become plain text names of made-up firms.

## Decisions

- Light is the faithful mode. Dark is a sibling in Cursor's own dark palette spirit: warm
  near-black (#14120b) page, #1b1913 panels, off-white ink, the same orange.
- Hero media fixed at 720px tall at both widths (the capture shows 720 at 390 and 1440; not
  window-sized).
- Mobile hero shows only the primary pill with its own shorter label (`mobileLabel`), like
  the original's "Get started →".
- Testimonials: phones show the first three cards, as the original does.
- Phone menu is a `<details>` disclosure so the header needs no JavaScript.

## Comparison round 1 (light, 390 and 1440)

Page height: 390 10358 vs 10186 · 1440 8216 vs 8199. No sideways overflow at 360/768/1024
(both). Header is sticky (original: fixed) and stays on top in every scroll frame.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 1063 vs 1066; layout, pill, 720px frame match | 1085 vs 1086; heading a touch lighter than CursorGothic | hovers only, as original | weight 450 on the heading: yes |
| logos | 216 vs 219, 4×2 tiles match | 176 vs 177 | — | — |
| features | 3888 vs 3741: gaps 88 vs 85, and the original's last frame is 650 not 680 | media 829 vs 840 wide | — | media width 66.4%, phone gap 84px: yes; kept one 680px frame height for all panels (one rule) |
| testimonials | 861 vs 886 | 650 vs 700: our quotes 3 lines vs the original's 4–5 | — | quotes lengthened to 4–5 lines; heading weight 450: yes |
| avatars / team photo | plain placeholder (bg-muted) nearly invisible on the card panel | same | — | plain tone now bg-glow/70: yes |
| frontier | 1627 vs 1630 | 742 vs 739 | link hovers | — |
| changelog / highlights | cards 143 vs 130 tall (padding) | 345 vs 341 | card hover darkens a step | py-3.5 on phones, byline gap 10/12px: yes |
| research | 440 vs 437 | 685 vs 694 | — | — |
| cta | 304 vs 310 | 344 vs 346; type lighter and rounder | — | weight 450: yes |
| footer | 1223 vs 1183: link rhythm 34 vs 31 | 549 vs 526: link rhythm 33 vs 30 (line-height lost on the inline links) | — | leading moved onto the list: yes |

## Comparison round 2 (light, after the round 1 fixes)

Page height: 390 10320 vs 10186 · 1440 8218 vs 8199. Fits at 360/768/1024. Header sticky
for the whole scroll. Every hover in ours-design.md matches the original's values and
timing: nav ink → ink 75%, outline pill → panel fill, ink pill #26251e → #3b3a33, pale pill
#e6e5e0 → #e1e0db, orange links → 75%, link cards #f2f1ed → #ebeae5, all 150ms
cubic-bezier(.4,0,.2,1). No scroll reveals on either side (the original's are inside its
product mock-ups, which are placeholders here).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| features | 3876 vs 3741: the original's fourth frame is 650px, ours 680 (one rule for all) | 3253 vs 3203, same cause; media now 840 wide | — | left as is (judgement: one frame height) |
| testimonials | 906 vs 886 | 674 vs 700: our second-row quotes run 3–4 lines, theirs 5 | — | copy length only; left |
| footer | 1160 vs 1183 | 522 vs 526 | — | — |
| all others | within 10px | within 10px | — | — |

Re-theme: `cursor-hero` and `cursor-post-row` under `sample-ember` take its serif, terracotta
pill, green links, rounder cards and orange glow wash with no leftovers.
Stopped here: each section pair reads as the same design apart from copy and placeholders.
