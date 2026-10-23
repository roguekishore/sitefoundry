# arc — recreation notes

Original: https://arc.tech/ (precaptured 2026-10-23; only the landing page was asked for).
Fictional stand-in company: **basin**, a cash-management account for venture-backed software
companies. All copy is ours.

## Design language

- **Palette.** A quiet, papery fintech page. White page, a pale grey (#f3f3f3) hero and the
  "AI" feature panel, warm-black ink (#1e1e1c) and a warm grey (#53524b) for every secondary
  line. One deep teal (#206d69) is the only action colour on light; on the dark bands the
  action turns mint (#86e0b2). Three soft pastels tint the account cards: blue-grey #cbd9e3,
  sage #dee8d9, sand #ebe6d9. A slate (#262d2f) panel, a #222 grid-lined testimonial band and a
  #1e1e1c closing band carry the dark part of the page.
- **Type.** One grotesque everywhere, at regular weight even for the biggest headings
  (64px/1.1, −0.015em). Card titles 30px/1.15, feature titles 22px, body 16px/1.5 and 14px/1.5,
  small print 12px/1.5. Medium (500) only for nav, buttons and "Learn more" links.
- **Rhythm.** About 120px between sections on desktop and 60px on phones; ~70px from a section
  heading to its content on desktop, ~35px on phones. Content column 1138px.
- **Grid.** Section headings sit left, max ~60% wide. Three equal columns (accounts, security),
  full-width two-column panels (solutions), photo + quote split.
- **Shapes and depth.** 4px buttons with 2px outlines, 20px cards, 10px media, pill badges.
  Flat surfaces; the only depth is a very long, very soft shadow under the hero dashboard and
  the pinned header once scrolled.

## Type

| Original | Class | Width / x-height | Ours | Why |
|---|---|---|---|---|
| GT America (Standard) 400/500/700 | neo-grotesque with American-gothic (Franklin) roots | normal width, fairly large x-height | **Public Sans Variable** | It is a Franklin-Gothic-derived neutral grotesque with the same normal width, open apertures and large x-height; already installed |

Public Sans sets a touch wider than GT America; headings keep the original's −0.015em tracking
and the heading max-widths are set so the line breaks match.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | dark announcement strip | `arc-announcement` | content (74 / 56) | centred, wraps to two lines | one centred line + arrow | — | link hover |
| 2 | header | `arc-header` | content (72 / 100) | wordmark + menu icon | wordmark · 3 centred links · log in + outlined button | — | pinned; grey→white + soft shadow once scrolled; hover colours |
| 3 | hero | `arc-hero` | content | centred 42px headline, sub, two buttons side by side, dashboard image slightly wider than the column | centred 64px headline over two lines, sub, buttons, 1137×652 dashboard; grey band stops 120px above the image's foot | dashboard 361×190 / 1137×652, r8, long soft shadow | image load-in (inferred); button hover |
| 4 | accounts | `arc-accounts` | content | heading, cards stacked | heading, 3 pastel cards (363×532) | card illustrations 352×214 / 363×221 | heading + cards reveal (opacity 0→1, rise 15px, staggered); card hover opacity 0.9 |
| 5 | solutions | `arc-solutions` | content | heading, two stacked panels, media on top | heading, two 1138×320 panels (grey, slate), media left, copy right | 352×214 / 455×316 | reveal |
| 6 | security | `arc-security` | content | heading, items stacked | heading, 3 columns | 352×391 / 322×358, r10 | reveal, staggered |
| 7 | testimonial | `arc-quote` | content (~770 at 1440) | photo 300×350 centred, quote under | photo left 455×531, quote right | portrait 300×350 / 455×531 | reveal of the quote |
| 8 | closing CTA | `arc-cta` | content (~606) | heading, sub, mint button | same, left, heading max ~830px | — | reveal; button hover |
| 9 | disclosures | `arc-disclosures` | content | small print, footnotes | same, full column | — | — |
| 10 | footer | `arc-footer` | content | wordmark, 2-col link groups, newsletter, legal row | wordmark + 4 columns (link groups, newsletter), legal row | — | link hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | stays at the top for the whole page | — | `position: sticky` |
| header | scrubbed with scroll (first 100px) | background grey → white, soft shadow appears | linear over 0–100px | CSS `animation-timeline: scroll()` in `arc-header.css` |
| nav links, log in | hover | colour #53524b → #1e1e1c | 0.2s ease | `transition-colors duration-200` |
| outlined button | hover | transparent → teal fill, ink → near-white, border → teal | 0.2s ease | Tailwind hover classes in `arc-button` |
| solid button | hover | teal → a darker teal | 0.2s ease | `hover:bg-primary/90` |
| section headings, cards, items, quote | entering view | opacity 0→1, translateY 15→0px; cards one after another | 0.75s ease-in-out in the original (JS one-shot) | CSS `animation-timeline: view()`, range `entry 0px` → `entry 220px`, +40px per stagger step (`arc-reveal` component's CSS) |
| account / solution cards | hover | inner content opacity 1 → 0.9 | 0.2s | `group-hover:opacity-90 transition-opacity` |
| hero dashboard | load (inferred from a lone `opacity, transform 1s ease-in-out` transition) | fade in, rise 15px | 1s ease-in-out | CSS `@keyframes` with fill-mode both |

All of it is off under `prefers-reduced-motion: reduce`, and the scroll-driven parts sit
inside `@supports (animation-timeline: view())`.

## Media slots → placeholders

- hero dashboard screenshot → `arc-placeholder` (white card surface with border) at 361×190 /
  1137×652, r8, the long soft shadow kept.
- account card illustrations (wire, fund, lock) → muted surface on the pastel card, full card
  width, 352×214 / 363×221.
- solutions panel illustrations (analysis list, slider card) → foreground/5 surface centred in
  the left half, 352×214 / 455×316.
- security illustrations → muted surface, 0.9 aspect, r10.
- testimonial portrait → muted surface 300×350 / 455×531.

## Decisions

- Pastel card tones map to `--accent` (blue-grey), `--secondary` (sage) and `--highlight`
  (sand), so `arc-accounts` takes a `tone` per card; the hero/AI grey is `--muted`.
- The dark parts (announcement, slate panel, testimonial, CTA) put the `dark` class on their
  own wrapper (the brex pattern), so they use the theme's dark tokens: mint `--primary`, slate
  `--card`, #222 `--muted`, #1e1e1c `--background`.
- `--section-y` is a clamp (60px at 390 → 120px at 1440) because the original's rhythm
  doubles between phone and desktop.
- The original's long legal disclosures become a shorter set of fictional, plainly-worded
  disclosures with the same structure (bold leads, a rule, numbered footnotes) and density.
- The header's grey → white change is built with a scroll timeline rather than JS, so the
  header needs no hydration.

## Round 1 (first capture of ours)

Heights: main (hero → CTA) 5242 vs 5226 at 1440 and 6572 vs 6549 at 390; header 100/72 and
announcement 56/74 exact. Motion list shows the sticky header, its scroll-linked grey→white
change, the hero load-in and the reveals (opacity 0→1, rise 15px) as in the original. Fits at
360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | matches (4-line headline, buttons side by side, slightly bleeding screenshot) | matches | load-in ok | — |
| solid buttons | — | hover lightened the teal (`primary/90` over grey); the original keeps it | hover | yes: `brightness(0.92)` instead |
| section headings | full width ok | measure ~1100px gave an orphan ("…finance / team"); original lines run 650–865px | reveal ok | yes: `lg:max-w-[56rem]` |
| solutions | badge ok | badge label pushed out of its pill (an `[&>span]` padding override also hit the badge) | reveal ok | yes: override removed, link gap `pt-6 lg:pt-8` in the copy stack |
| testimonial | portrait placeholder see-through (grid lines showed) | same; also much darker than the original's pale portrait | reveal ok | yes: opaque frame, glow→ink wash |
| CTA | — | heading on two lines, original three | reveal ok | yes: demo copy |
| disclosures | shorter than the original (legal copy is ours) | 931 vs ~1500 px | — | partly: three more paragraphs |
| footer | wordmark and links a size large at 390 (original 12px links) | matches | — | yes |
