# varda.com — recreation notes

Recreated as **Halden Orbital Works**, a made-up company that grows crystals and tissue in
free fall and flies them home in its own capsules ("Kiln"). None of the original's copy,
names, logo, photos or video are used. Landing page only (no other pages were asked for;
`precapture.json` lists none).

## Design language

- **Palette (dark is faithful).** A deep navy page `#0a3065` (blue-900) carries almost
  everything. One loud orange `#e6813b` (orange-400) for the H1, the blue-tile headings and
  eyebrows, and a whole orange tile. Body text is a cool off-white `#eaecee` (neutral-200),
  the brightest white `#fafcff` (neutral-100) is the announcement strip. Light tiles are
  `#eaecee` with navy text; they hover to `#cfd4d9` (neutral-300). Blue tiles hover to
  `#1a4682` (blue-700). Secondary text (footer labels) is a dusty blue `#90a7c7` (blue-300);
  hairlines are `#496792` (blue-500), dashed for the background grid, solid for frames.
  The header cells use the off-white as their hairline at 1440.
- **Engineering-drawing grid.** The hero is a frame inset by the gutter (21px at 1440, 16 at
  390) holding a 6 × 3 grid of square cells (233px at 1440) drawn in dashed blue-500 lines;
  the right half carries a solid blue-300 frame. The header row sits in the frame's top
  72px. The footer keeps the frame's dashed side lines. Everything else is a flush bento of
  colour blocks with no gaps, no radius and no shadows: depth is pure colour.
- **Type scale.** One face throughout. H1 107/107 bold, -0.03em (44.8 at 390). Tile H2
  54.7/63 weight 500, -0.02em (32/36.8 at 390). Small tile H3 35.6/42.7 (20/24 at 390).
  Lead 22.5/30 (20/29 at 390). Hero link cells 21.8/32.7. Announcement 22/24. Eyebrows
  ~17px bold (16 at 390). Footer links 17/26 weight 500, footer labels 13.8 uppercase
  +0.05em blue-300, legal 12.8 weight 500.
- **Rhythm.** Everything pads by the gutter (gap-main: 16px at 390 → 24px max; 21px at
  1440). Tiles: eyebrow row at the top, heading pushed to the bottom (justify-between).
- **Shapes.** Square everywhere (radius 0). Icons are thin arrows (up-right) at the
  top-right of every link cell / tile.

## Type

| Original | Classification | Ours | Why |
|---|---|---|---|
| MT Everyday Sans 400/500/700 | grotesk with geometric bowls, normal-to-wide set, large x-height, double-storey a, single-storey g, low contrast | **Manrope Variable** | open face closest on width and x-height: round wide bowls, big x-height, double-storey a / single-storey g, low contrast; already in the workspace |
| — | — | JetBrains Mono (mono token only) | no mono on the page; filled for the token |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header (fixed) | `varda-header` | 72px row (1440); 260px right column (390) | right third of the hero's top row: logo cell (icon top-right, wordmark bottom-left, 155 tall) over menu cell (hamburger, "Menu", 105 tall), transparent, blue-500 lines | row of six 1/6 cells inside the hero frame at 21px: logo+wordmark, two empty (transparent), Jobs + icon, Contact + icon, Menu + hamburger; solid navy, off-white hairlines | — | fixed; after leaving the hero the row collapses to two 72px squares (logo icon left, menu right; 64px stacked top-right at 390), wordmark / labels fade; cells hover to neutral-300 with navy text |
| 1 | hero | `varda-hero` | content (740 at 1440 / 598 at 390) | H1 left 2/3 of a 260px top row, lead in a full-width row, three full-width link rows (63px) | 6×3 dashed grid of squares; H1 bottom of row 2 left half; right half framed: lead at the bottom of row 2, three link cells in row 3 | full-bleed duotone terrain photo behind | bg drifts (CSS `slide` 300s loop of background-position); link cells hover to off-white with navy text |
| 2 | announcement | `varda-announcement` | content (128 / 136) | eyebrow + arrow, 2-line text | eyebrow + arrow top, one-line text | — | — |
| 3 | bento | `varda-bento` | content (1193 / ~1380) | stacked: video, platform text, gov+bio side by side, mission + image, careers + image | 3 × 480 columns: platform text + 918×438 video (2 cols); mission (col 1, rows 2–3, image 459×360 at the bottom); gov / bio small tiles; careers (text col 2, image col 3) | video 918×438 (2.1), image 459×360 (1.33), image 480×461 (1.04); at 390: 358×163, 374×187, 374×187 | tiles hover: blue → blue-700, light → neutral-300, 0.3s |
| 4 | footer | `varda-footer` | content (448 / 665) | stacked: logo, address, contact, socials, two link columns, dashed rule, copyright, legal | logo + address/contact/socials left; COMPANY and SOLUTIONS/PLATFORM columns from the middle; dashed rule; copyright left, legal right | — | link hover |

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | scroll past ~half a screen | row/column collapses to two squares; wordmark, Menu text, Jobs/Contact cells fade out; squares get solid navy | 0.5s cubic-bezier(.165,.84,.44,1) | `useEffect` scroll listener sets `data-compact`; CSS transitions on width/height/opacity (hydrate: load) |
| header | hover | cell bg → neutral-300 (accent), text/icon → navy | 0.3s same easing | `hover:` + `transition-colors` |
| hero | loop | background drifts slowly (background-position, 300s) | linear, infinite | CSS keyframes on the placeholder wash's background-position |
| hero | hover | link cell bg transparent → off-white, text → navy | 0.3s | `hover:` classes |
| bento | hover | blue tiles → blue-700, light → neutral-300, orange → orange-500 | 0.3s | `hover:` classes |
| tiles / links | hover | arrow nudges up-right 2px (inferred from 27 `transform, opacity 0.5s` transitions; not seen directly) | 0.5s | `group-hover:translate-*` |
| footer | hover | link underline; email → neutral-100 | instant | `hover:` |

No scroll reveals, parallax or pinned sections were captured (the "pinned" rows in the
capture are the fixed header squares).

## Media slots

| slot | placeholder |
|---|---|
| hero terrain photo (full bleed) | soft navy wash with a faint orange `glow` light, slowly drifting; `background` prop takes a real image |
| platform video 918×438 / 358×163 | `varda-placeholder` (blue-700 surface, soft glow), with the built play button over it |
| mission photo 459×360 / 374×187 | `varda-placeholder`, inset left by the gutter, flush right and bottom |
| careers photo 480×461 / 374×187 | `varda-placeholder`, flush right and bottom under a gutter-tall strip |

## Decisions

- **Faithful mode is dark**: the navy page is `.dark`; `:root` is a light sibling
  (off-white page, navy text, same orange, navy "secondary" tiles).
- Token roles: background navy, foreground neutral-200, primary orange (primary-foreground
  navy), secondary neutral-200 (light tiles, navy text), accent neutral-300 (hover of light
  surfaces), muted blue-700 (hover of navy tiles, placeholder surface), muted-foreground
  blue-300, card neutral-100 (announcement), border blue-500, highlight orange-500.
- The header and hero share the grid by convention: the hero leaves the header's 72px row
  (1440) / right third of a 260px row (390) free. Both blocks note it.
- The header compaction is a JS toggle (it's a switch with a 0.5s transition, not a scrub),
  so the header hydrates on load. Static HTML shows the full header.
- Socials in the footer are lucide generic icons (lucide has no brand icons; also no logos).
- The tile arrow nudge on hover is inferred, not observed.

## Comparison round 1

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | the cell column sat centred (130→260), not in the right third | doubled hairline at the first link cell (negative margins pushed cells 2px right of the hero frame line) | collapse to two squares at ~1 screen, labels fade: matches (both widths) | yes: `ml-auto` on phones; cells use border-y/border-l instead of −1px margins |
| hero | H1 4 lines, 260px top row, lead row, 63px link rows: match | H1 ~9px lower than the original's | 300s backdrop loop present | yes: H1 aligned to the top of row 2 |
| hero links | arrows thinner than the original's | same | hover → off-white with navy text (same colours, 0.3s) | yes: stroke 2.25 |
| announcement | 136 vs 136 | 129 vs 128 | — | — |
| bento | stacking order, video first, pair side by side, insets: match; shorter because our headings wrap to fewer lines | 1198 vs 1193; same 3×480 grid, placements, insets, play button | tile hovers match (navy→blue-700, light→neutral-300) | — |
| footer | 693 vs 665 (spacing under the logo and before the columns) | 482 vs 448 (links had 1.5 line boxes, columns 13px right) | link hover | yes: links `block`, gaps tightened, columns start at the half |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| footer | 669 vs 665 | 462 vs 448: detail blocks 8px further apart | — | yes: gap 3.5 (now 456) |
| type weight | Manrope 500 reads a touch lighter than MT Everyday 500 in tile headings and footer links | same | — | yes: tile headings 550, footer links and details 600 |
| hero under other themes | — | with sample-ember (72rem page width, serif display) the H1 sized from the viewport overflowed the frame | — | yes: H1 sized from the frame (`cqw` container units) |
| all | fits at 360 / 768 / 1024 | | header fixed + fade at 844–1266 (390) / 900–1350 (1440), original 844 / 900; hero loop 300s | — |

Still different, on purpose: the backdrop, video and photos are placeholders; the hero links
don't wrap ("Research labs" is shorter than the original's label); bento heights follow our
shorter copy. Re-theme check: `varda-bento` (sample-ember light) and `varda-hero`
(sample-ember dark) both re-theme; wide serif display faces wrap the hero headline to more
lines (noted in the hero's meta).
