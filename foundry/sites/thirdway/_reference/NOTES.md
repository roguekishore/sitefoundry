# Thirdway → "Hollin" (recreation notes)

Original: https://www.thirdway.com/ (an interior design and workplace-delivery practice). Captured in advance
(`precapture.json`); landing page only (no other pages were asked for). The recreation uses a fictional practice
called **Hollin**, with its own copy, people and client names.

## Design language

- **Palette roles.** Warm cream paper `#f7f1e9` is the page; an olive-black ink `#20221a` is every piece of
  type and the whole footer. Cards and logo tiles are a 4–6% ink veil on the cream; the only fill colours are
  sand `#d4cdb7` (mobile team cards, the menu square) and the project accent colours of the original
  (mustard `#8e7000`, teal `#3d6062`, olive `#444828`, khaki `#77714e`, mint `#deefe3`, butter `#ffe7a6`) which
  became highlight, glow and the chart colours. Photography carries all the colour.
- **Type scale.** One tight neo-grotesk at weight 500 for everything, always with heavy negative tracking:
  120/56 px hero (`-0.06em`, line-height 0.9), 72/40 px section headings, 64/32 px accolade, 32/24 px body
  statements, 18–20 px card titles, 14 px labels. A light old-style serif (weight 350) appears only in small
  doses: team names ("Studio"), roles, the second line of the accolade, and small footer headings.
- **Spacing.** Page gutter 16 px on phones and 32 px from tablet up; sections are 80 px (phones) to 112–120 px
  (desktop) of padding; cards sit 12–16 px apart. Content runs the full width, there is no centred max-width
  column except for the centred accolade.
- **Shapes and depth.** Corners are 2 px on photos and tiles, 4 px nowhere visible, full pills for chips, arrows,
  date/number pills (2 px outline). No shadows at all: depth comes from photography, 40% hairlines, and the cream page
  sliding up over the pinned video.

## Type

| Original | Class | Width / x-height | Open font used |
|---|---|---|---|
| Waldenburg (500) | neo-grotesk, Helvetica-like, tight spacing | normal width, medium-large x-height | **Host Grotesk** (variable, `@fontsource-variable/host-grotesk`): the closest neo-grotesk in the open set, with the same straight terminals and narrow apertures; Hanken Grotesk is more humanist and Archivo wider, Inter/Geist are excluded |
| Marist (350/400) | old-style (Garamond-like) text serif, light | normal width, small x-height | **Newsreader** (variable, `@fontsource-variable/newsreader`): a light text serif with the same small x-height and calligraphic stress |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `thirdway-header` | fixed, 76/84 px incl. margin | one cream bar: wordmark, "Let's talk", sand menu square | clock (circled digits) left, cream wordmark box with menu square centred, "Let's talk" + arrow chip right | none | clock ticks; menu opens a panel; clock and CTA invert over photos |
| 2 | hero | `thirdway-hero` | **155svh** (first 100svh pinned) | video fills the window, 56 px headline at the bottom, scroll cue; statement below at 24 px | same at 120 px; statement sits in the right half at 32 px | full-window looping video (placeholder) | media pinned; statement brightens per character; scroll cue loops and fades |
| 3 | teams | `thirdway-teams` | content | heading, paragraph, link; carousel of sand cards (84×130 portrait, title, signature, rule, text); arrows below | heading left, paragraph right; count pill + arrows above 328×437 photo cards that open a description on hover | 6 portraits, 6 signatures | heading lines rise; paragraph rises; carousel; hover reveal |
| 4 | accolade | `thirdway-award` | content (311 / 398 px) | 32 px centred two-line pair | 64 px centred pair | none | fade and rise 24 px |
| 5 | projects | `thirdway-projects` | **400svh** (n × 100svh), pinned | each project fills the window; counter, 40 px name, inline details, link at the bottom | 72 px name, details left, quote right, hover "View project" | 4 full-bleed photos | pinned; each photo wipes up from the bottom (clip-path), scrubbed |
| 6 | clients | `thirdway-clients` | content / 685 px | heading, text, three rows of 128 px tiles | heading left, three columns of square tiles right with a fade | none (wordmarks) | rows glide sideways / columns glide vertically with the scroll |
| 7 | journal | `thirdway-journal` | content (610 / 902 px) | heading, snap carousel of cards, arrows and "View all" below | heading + "View all", cards 6/3/3 columns | 3 covers | heading rise; hover zoom 1.04; carousel on tablets |
| 8 | footer | `thirdway-footer` | content | 480 px photo with CTA card, ruler rail, links, legal, credits | 606 px photo, CTA card at the right, ruler rail left, columns right | 1 photo | scroll counter in the ruler label; link hover |

## Motion inventory

| Section | Trigger | What changes | Timing / easing | Built with |
|---|---|---|---|---|
| page | wheel | smooth gliding scroll (Lenis) | exponential ease-out, 1.2 s | `thirdway-smooth-scroll` (`lenis`) |
| hero | scrubbed + pinned | media layer stays fixed while the cream page slides over | sticky | `position: sticky` in a 155svh section |
| hero | scrubbed | 174 characters opacity 0.3 → 1, each starting a little after the last | linear, scrubbed | one named view timeline on the paragraph, per-character `animation-range` offsets from `--i` |
| hero | loop | scroll cue arrow runs down the capsule, 2800 ms | ease-in-out, infinite | CSS `@keyframes` |
| hero | scrubbed | "Scroll" cue fades to 0 in the first 30svh | linear | `animation-timeline: scroll(root)` |
| teams / journal / clients / accolade headings | entering view | line opacity 0 → 1, rise 60 px (heading) or 24 px (text), staggered per line | scrubbed `entry 0% → cover 24–30%` | `thirdway-heading`, `thirdway-reveal` (view timelines) |
| teams | hover | description opens upwards on the photo card | 0.4 s `cubic-bezier(.66,.01,.12,.98)`, grid-rows 0fr → 1fr | Tailwind `group-hover` |
| teams / journal | click | prev/next scroll one card | smooth | `thirdway-carousel` (scroll-snap + buttons, hydrate visible) |
| projects | pinned + scrubbed | each next photo clip-path from `inset(100% 0 0 0)` to `inset(0)` | linear over one window of scroll each | `view-timeline` on the 400svh section, `animation-range: cover from to` |
| projects | hover | "View project" fades in centred | 0.3 s same easing | `group-hover` |
| clients | scrubbed | outer columns move up 230 px, the middle one down 260 px (rows sideways ±110 px on phones) | linear across the section's whole pass | CSS view timelines |
| journal | hover | cover scales 1 → 1.04 | 0.5 s ease | `group-hover` |
| links | hover | underline draws away; arrow swaps for a second one sliding in | 0.25 s ease-out / 0.4 s expo | `thirdway-arrow-link` |
| footer | scrolled | "You've scrolled N cm" updates live | per scroll event | `useEffect` |

## Media slots

All photos and video are placeholders (`ThirdwayPlaceholder`, a butter/sand wash or a flat tile): the 100svh hero
video, six team portraits and signatures, four full-bleed project photos, three journal covers and the footer photo.
The original's client logos became plain-text wordmarks of invented companies.

## Decisions

- Fictional company **Hollin**; the original's circled "TW" mark and trade-mark badge are dropped, a plain superscript
  slot (`mark`) stands in.
- The cookie consent bar (fixed, bottom-left on every screen) is third-party UI, not design: not rebuilt.
- The menu overlay of the original (ticker rows of journal and project links) is replaced by a simple panel of links;
  the capture does not show it open.
- The original's pinned-scroll uses GSAP; here it is CSS `view-timeline` on the section plus one sticky stage, per the
  skill. Without scroll-driven animation (or with reduced motion) projects stack, statements show fully lit.
- The slow parallax drift of each project photo (translateY ±47 px) is not rebuilt: the photo is a placeholder.
- Hero statement: 55svh below the pinned screen carries it, like the original's 155svh.
- Spacing tokens: `--page-gutter` is 1 rem; blocks use `calc(var(--page-gutter) * 2)` from `md:` to get the 32 px desktop gutter.
- Serif face is a theme token (`--typeface-serif`) added by the theme itself; blocks read it with a Georgia fallback.

## Comparison round 1 (first capture of ours vs the original)

Note: the `-section-NN` crops are taken with the page scrolled to the top, so scrubbed reveals (headings, paragraphs) sit
at their start state in them; the scroll frames were used to judge those. Heights come from `ours-design.md`.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | bar 48 px tall (original 44), wordmark box narrower than the original's | clock and "Let's talk" at 14 px (original 16/18 px), box height 48 | n/a | yes: padding 6 px (44 px bar), wordmark 26 px, clock 16 px, CTA 18 px |
| hero | headline was four lines (copy too long) and the scroll cue sat 30 px low | headline was pinned with the media, so the statement overlapped it; the original lets the headline scroll away and pins only the media | media pinned ✓, per-character fill ✓, cue loop ✓ | yes: media is a sticky out-of-flow layer, the headline is in the first window of flow; copy shortened to 21/18 characters; bottom padding 72 px on phones |
| all headings | looser word spaces and a lighter stroke than Waldenburg | same | n/a | yes: weight 560 instead of 500, `word-spacing: -0.07em` |
| teams | fine | descriptions of all four cards were open (grid row did not collapse: `overflow-clip` does not zero the min height), signature placeholders were dark blocks | hover reveal now closes | yes: `overflow-hidden`, translucent "veil" placeholder tone |
| projects | text ghosting through during a wipe | same: the placeholder was semi-transparent so the previous project showed through | clip-path wipe ✓ (same direction, one window per project) | yes: placeholder photo tone now sits on an opaque `bg-secondary` |
| footer | CTA card was ink, the original's is cream | same | scroll counter ✓ | yes: card is `bg-background` with ink type |
| heights | teams 738 vs 869, award 270 vs 311, journal 578 vs 610 (copy is shorter than the original's) | teams 918 vs 951, award 382 vs 398, journal 881 vs 902, footer 1279 vs 1297 | n/a | yes: paddings nudged (see round 2 for the result) |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 44 px bar, logo / "Let's talk" / menu square in the original's order | wordmark box 138×44, clock and CTA sized as the original | clock ticks, menu toggles | ✓ |
| hero | headline at the original's place (bottom-left, bottom padding ≈ 190 px at 844), cue at the right | headline and cue as the original; statement appears over the pinned media at the right half; cream page slides over at the end | Motion list shows pinned (sticky), 186 characters 0.3→1, cue fade-out | ✓ |
| teams | portrait 84×130 sand cards, 312 wide | 328×437 photo cards, heading 72 px two lines | heading lines rise 60 px, paragraph rises 24 px | ✓ (heights 754 vs 869 on phones: our copy is shorter; 934→950 vs 951 on desktop) |
| award | 310 vs 311 | 398 vs 398 | rise 24 px | ✓ |
| projects | 3376 = 400svh ✓; counter, name, details and link at the original's heights | 3600 = 400svh ✓; rule at 62% of the window, quote in the right half | clip-path scrubbed ×3 | ✓ (no inner parallax, noted) |
| clients | 128 px tiles in three rows | square tiles in three columns, 685 px tall, fade top and bottom | translateX ±110 / translateY -230, +260 | ✓ |
| journal | carousel with arrows and "View all" below | 6/3/3 grid, 902 px (original 902) | rise, hover zoom | ✓ |
| footer | 1339 vs 1471 (our columns are shorter) | 1297 vs 1297 | scroll counter | ✓ |
| overflow | fits at 360, 768 and 1024 (checked in `ours-design.md`) | — | — | ✓ |

Re-theming: `thirdway-teams` and `thirdway-journal` opened under `sample-ember` keep their layout; colours, the grotesk
and the serif fall back to that theme's tokens (Georgia for the serif).

## Still different

- Photos, the hero video, signatures and logos are placeholders or invented plain wordmarks.
- Host Grotesk and Newsreader are close to Waldenburg and Marist but not identical (Host Grotesk spaces words wider, so words are tightened by hand).
- No cookie bar, no menu-overlay ticker rows, no inner photo parallax in the projects section.
- The header's clock and CTA use `mix-blend-difference` to stay legible; the original switches their colour per section.
