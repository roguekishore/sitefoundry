# Stoke Space — recreation notes

Original: https://stokespace.com/ (precaptured 2026-10-24; landing page only, no other pages
asked for). Recreated as **Orrery**, a made-up launch company flying a reusable rocket called
**Vireo**. All copy is ours.

## Design language

- **Palette:** pure black page (#000) with one off-white ink (#f2f2f2) for everything. Muted
  text is the same ink at 30% (accordion rows), panels are the ink at 5% (header pill, contact
  button). Three neon accents appear only as thin glowing bars over section labels and in the
  footer's rising gradient: orange #ff4f00 (also every hover colour), magenta #de3cb3 and
  violet #af73ff. Glow = layered box-shadows of the accent colour (9.5px, 7px, 3.6px and a
  1.9px inset).
- **Type scale:** a very wide, heavy all-caps grotesk (Druk Wide) for every heading, tight
  (−0.02em, line-height 1 desktop / 0.89 phone): 78.6px hero, 55.8px section heads, 34.8px
  the smaller Nova head (phone: 39 / 30 / 30). Everything else is Inter Display **Light
  (300)**: 18.8px/1.2 body and links at 1440, 14px/1.35 on phones; nav 16px/1 at −0.02em;
  9–11.4px uppercase labels tracked +0.12em–0.25em; "Get in touch" 30px light.
- **Grid:** full-bleed. A 12-column grid with 20px gaps and only **10px side gutters** at
  1440 (20px on phones). Content snaps to quarters: headings start at column 4 (x=370),
  text columns at the half (x=730), two-up media at halves.
- **Rhythm:** every section is separated by 140px at 1440 and 70px at 390 (so
  `--section-y` = 70px / 35px). Inside a section: label → heading ~75px, heading → media ~70px.
- **Shapes and depth:** square media (0 radius), 4px radius only on the header pill and the
  contact button. No shadows except the neon glows. Hairlines are the ink at 30%.

## Type

| Original | Kind | Stand-in | Why |
|---|---|---|---|
| Druk Wide Web 500 | extra-wide heavy grotesk, all caps, squarish rounds, low contrast | **Archivo Variable** (`wdth.css`) at `font-stretch:125%`, weight 800 | Measured against the hero's four lines: Archivo 125/800 sets 91% of Druk Wide's width, Mona Sans Wide 77%, Encode Sans Expanded 78–82%. Same neo-grotesk skeleton with squarish rounds. The 9% gap is closed with a theme-only `--stokespace-widen: 0.05em` added to the heading tracking (593/729/854/711px vs the original's 605/725/861/721px). |
| interDisplay (Inter Display) | neo-grotesk, normal width, tall x-height | **Inter Variable** (`opsz.css`) | The original *is* Inter (its Display cut); the variable font's optical-size axis gives the display shapes at large sizes. Body line measured 617px vs 595px (+3.7%), under the 5% threshold. |
| lmMono | mono (loaded, not visible on the landing page) | none | unused on the landing page |

The wide face only applies under the stokespace theme: blocks read
`[font-stretch:var(--stokespace-stretch,100%)]`, so under other themes headings are just
`font-display` at normal width.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `stokespace-header` | content: 76px / 126px, sticky | full-width 76px bar, ink-5% + blur, wordmark left, glowing orange plus (menu) right | transparent 126px strip; centred 712×64 pill (ink 5% + blur, 4px radius) holding wordmark + 5 links | – | sticky; link hover → orange 0.35s; plus menu opens a panel |
| 2 | hero | `stokespace-hero` | content: media aspect (9:16 phone, 16:9 desktop) + 16–24px top gap | full-bleed 390×693 video, 6-line heading bottom-left (20px in, 32px up) | full-bleed 1440×810 video, 4-line 78.6px heading bottom-left (10px in, ~125px up) | 1 video | none |
| 3 | reusability | `stokespace-reusability` | content (1741 / 1169) | label, 4-line head, 350×197 image, 350×438 image, 4 accordion rows (68px) | label col 1, 2-line head cols 4–12; 1420×609 image; then 700×875 image left, 4 accordion rows (102px, 595 wide) right | 21:9 image, 4:5 image | row hover: label 30%→100% + plus; click expands (grid-rows 0fr→1fr) |
| 4 | nova | `stokespace-nova` | content (1155 / 680) | label, 3-line head, 2 paragraphs, link, 350×150 image | label; head cols 1–5, paragraphs + link at x=730 (595 wide); 1420×609 image | 21:9 image (rocket render over a sky gradient) | link hover → orange + arrow nudge |
| 5 | work with | `stokespace-work` | content (794 / 779) | label, head, two stacked 4:3 images each with an arrow link | label, 55.8px head, two 700×525 images side by side, links under | two 4:3 images | images fade in on entering view; link hover |
| 6 | footer | `stokespace-footer` | content (544 / 617) | link grid (3 cols) + legal; "Get in touch" + contact button row; flag; small wordmark + address | "Get in touch" + contact button left, 4 link columns at col 8+; giant wordmark (cols 1–7) + flag + address | 80×43 flag | gradient glow rises from below as the footer enters (translateY ~250→0); contact button border shimmer on hover; arrow nudge |

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll | sticky at top the whole page | – | `sticky top-0` on the header (page shell lets it stick) |
| header | hover | link colour ink → orange | 0.35s cubic-bezier(.165,.84,.44,1) | `transition-colors duration-350 ease-[…]` |
| header (phone) | click | plus → menu panel | 0.35s clip-path (capture: `clip-path 0.4s cubic-bezier(.77,0,.175,1)`) | React state, panel clip-path inset transition, plus rotates 45° |
| reusability accordion | hover | label + plus 30% → 100% ink | all, ~0.35s | `group-hover:` classes |
| reusability accordion | click | row expands to show text | grid-rows 0fr→1fr | React state + `grid-template-rows` transition |
| nova / work / footer links | hover | colour → orange, arrow nudges +0.15em (x) | 0.35s same ease | `group-hover:translate-x-[0.15em]` |
| work | entering view | images opacity 0→1 | over ~450px of scroll | CSS `animation-timeline: view()`, `entry 0% entry 60%` |
| footer | entering view (scrubbed) | gradient glow translateY 488→239px | ends when page bottoms out | CSS view timeline `entry 0% entry 100%`, translateY 250px→0 |
| footer contact | hover | border shimmer (4s loop, paused until hover) + arrow nudge | 4s linear infinite | `@keyframes stokespace-footer-shimmer` on a masked `::before`, `animation-play-state` running on hover |
| footer email / legal | hover | opacity 1 → 0.7, underline off | all | `hover:opacity-70` |

Not rebuilt: the cookie-consent box fixed bottom-right (site chrome, not design of a section),
the "skip to content" link, the 196px hairline at the very top-left (it never changes in
any frame; its hover-only `group/progress` rules can't be read from the capture), and the
image hotspots over the engine photo (`group/hotspot` glow: part of the media).

## Media slots → placeholders

| slot | original | placeholder |
|---|---|---|
| hero video | 9:16 phone, 16:9 desktop, full bleed | `bg-muted` surface, same aspect, heading laid over it |
| reusability wide | 21:9 (1420×609), 350×197 phone (16:9) | `bg-muted`, `aspect-video lg:aspect-[7/3]` |
| reusability tall | 4:5 (700×875 / 350×438) | `bg-muted`, `aspect-[4/5]` |
| nova render | 21:9 (1420×609 / 350×150) | soft vertical gradient background → glow → highlight (the frame's sky gradient, no rocket) |
| work ×2 | 4:3 | `bg-muted`, `aspect-[4/3]` |
| footer flag | 80×43 | `bg-muted` 80×43 |

## Decisions

- The capture flags the 700×875 engine photo as "fills the window height"; 700 × 5/4 = 875
  and the phone one is also 4:5, so it is an aspect-ratio box that happens to match a 900px
  window. Built as `aspect-[4/5]`.
- Section gaps are 140px / 70px between every pair, so each content block uses `py-section`
  with `--section-y` 4.375rem (lg) / 2.1875rem; the hero only pads its bottom.
- Gutter is a theme token: 1.25rem on phones, 0.625rem from 1024px (the original's 10px).
- The accordion and phone menu need React state (`hydrate: "visible"` / `"load"`); everything
  else is CSS.
- Accent colours: orange = `primary` (it is the hover colour of every link), magenta =
  `highlight`, violet = `glow`. Section labels take a `tone` prop picking one of the three.
- Logo replaced by a plain "ORRERY" wordmark in the display face.
