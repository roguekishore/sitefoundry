# Parsley Health: recreation notes

Captured in advance (`precapture.json`, landing page only, no other pages asked for). Every
1440 and 390 first-screen capture is covered by a newsletter modal and a dark scrim, so the
hero (section 3) is read through the blur: layout, sizes and the overlay gradient come from
`original-design.md` (media slot 1425×760 cover; gradient `90deg beige 0–24% → transparent
68%` plus a bottom shade to 18% black) and from the blurred shapes. The modal is a pop-up,
not a section, and is not rebuilt.

Fictional company for the demo content: **Halden Health**, a root-cause primary-care
practice. All copy, names and the insurer/publication names are invented.

## Design language

- **Palette roles.** Warm ivory `#f8f6f2` page; deep forest `#284849` for headings, primary
  buttons and the two dark bands (plans, footer); deeper "deep sea" `#132d2e` for the nav
  bar; sage `#4a786a` for eyebrows, underlined links and the softer buttons; clover
  `#6fb29f` hairlines (card outlines, dividers, timeline dots, footer column titles); mint
  `#c1e5db` for the announcement bar and the "us" column of the comparison; seafoam
  `#ebf2f0` bands (trust strip, FAQ, closing CTA); beige `#eadec8` behind the clinician
  section and in the hero's left wash; ochre `#bf7e3d` sparingly (price notes, the reviews
  pill); peach on the footer button. Body copy is neutral `#333`, quiet text `#737373`.
- **Type scale.** A light (300) book serif for every heading: 64px hero, 48px section
  titles (36px on phones), 36px plan titles, 48px pull quote; tracking −0.02em, line height
  ~1.12. A round geometric sans for everything else: 18px/1.6 paragraphs (16px on phones),
  21px medium card titles and FAQ questions, 16px medium buttons and nav, 11–12px medium
  uppercase eyebrows with wide tracking.
- **Spacing rhythm.** Content column 1105px (160px margins at 1440), the hero and clinician
  section widen to 80px margins. Sections breathe: ~120px top/bottom on desktop, ~64px on
  phones. 20px phone gutter.
- **Shapes.** Every button is a full pill (56–60px tall on desktop, full width on phones).
  Cards: 12px (trust tiles) and 16px (condition cards) radius with a 1px clover outline and
  no fill; plan cards are square-cornered ivory panels. Round 90px thumbnails.
- **Depth.** Flat. No shadows except the floating pill. Depth comes from band colour changes.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| EuclidCircularB (300/400/500) | geometric sans, single-storey `a` and `g` | normal width, large x-height, round bowls | **Outfit Variable** | geometric, single-storey a/g, round O, large x-height, same normal width; Urbanist is narrower, DM Sans has a double-storey a |
| Teodor (300/400) | light book serif, moderate contrast, bracketed serifs | slightly narrow, moderate x-height | **Newsreader Variable (opsz)** at 300 | open serif with a light weight and an optical-size axis, so 48–64px headings get the fine display cut; similar narrow-ish proportions |

## Section map (landing)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1–2 | mint announcement bar + deep-sea nav | `parsleyhealth-header` | content (86+82 / 58+82) | bar: 2-line note + pill + ×; nav: menu icon, monogram, outlined "Join" pill | centred note + pill, × at far right; wordmark, 5 links, bone pill, "Log in →" | none | both sticky at top; hover colour 150ms |
| — | floating "Verify insurance" pill | `parsleyhealth-floating-cta` | — | full-width pill 16px from the bottom | 210px pill centred at the bottom | none | fixed; appears after the first screen |
| 3 | hero | `parsleyhealth-hero` | content-fixed: 600 / 760 (not window-sized in the capture) | photo fills, text and two pills at the bottom over a beige wash | photo fills; text column (480px) at left over a beige-to-clear wash; bottom shade | photo 390×600 / 1425×760 cover | none (hover only) |
| 4 | trust strip | `parsleyhealth-trust` | content (450 / 208) | 5 list rows, icon left, clover dividers | 5 outlined 200×112 tiles, icon breaking the top border | none (line icons) | none |
| 5 | "a doctor who asks why" split | `parsleyhealth-split` | content (823 / 813) | photo first, centred title/text, full-width sage pill | text left (col 160–600), square photo right | photo 350×350 / 505×505 | none |
| 6 | insurance | `parsleyhealth-insurance` | content (1008 / 1065) | eyebrow, title, insurer names 2×4, text, two stacked pills, all centred | text + two pills left, insurer names 2×4 right | insurer logos → plain-text names | none |
| 7 | two plans | `parsleyhealth-plans` | content (1556 / 1006) | forest band; stacked square ivory cards; timeline vertical | wide card (776) + narrow card (332); horizontal 6-step timeline | none | none |
| 8 | pull quote | `parsleyhealth-quote` | content (641 / 613) | mint→lavender wash, stars, 34px quote, name, pill | same, 48px quote, 830px measure | none | reveal: section fades in, quote rises 20px (600ms) |
| 9 | conditions carousel | `parsleyhealth-conditions` | content (731 / 690) | centred title; 300px cards; arrows + pill below | title + pill + arrows left; cards bleed off the right edge | round 90px thumbnail per card | horizontal scroll with arrow buttons; hover |
| 10 | clinicians | `parsleyhealth-experts` | content (680 / 680) | ivory; title, lead, rule, checklist left half, portrait bottom-right | beige band; wide title, lead, checklist, name; cut-out portrait at bottom right | portrait 160×256 / 609×442 | reveal: text rises 16px + fades; portrait scales 0.96→1 + fades (600/700ms) |
| 11 | video reviews | `parsleyhealth-reviews` | content (1184 / 1097) | centred title; centred card with faded neighbours; arrows + dots | title left (col 160–440); 3.5 cards to the right, round arrow | 5 portrait stills 221×393 cover, play icon | horizontal scroll with arrows; hover |
| 12 | comparison table | `parsleyhealth-compare` | content (838 / 1141) | 2 rival columns + mint "us" column holding the row label | label column + 3 rivals + mint "us" column | none | none |
| 13 | FAQ | `parsleyhealth-faq` | content (1188 / 1228) | seafoam; centred title; accordion | title left, 540px accordion right | none | open/close (details) |
| 14 | closing CTA | `parsleyhealth-cta` | content (390 / 402) | centred title, stacked full-width pills | centred title, two pills in a row | none | none |
| 15 | footer | `parsleyhealth-footer` | content (1568 / 1087) | handle row, feed slot, wordmark, 2-col links, pills, newsletter, socials, legal | handle row, feed slot, rule, brand/newsletter column + 3 link columns, rule, legal right-aligned | social feed embed 350×237 / 1105×185 | hover colour |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | bar + nav stay at the top for the whole page | — | `sticky top-0` on the header |
| floating pill | scroll (after first screen) | appears, rise 16px → 0 and fade in | ~300ms ease-out on the original | CSS `animation-timeline: scroll(root)` over 60–90vh of scroll |
| quote (8) | entering view | section opacity 0→1, quote rises 20px → 0 | 600ms | CSS `view()` reveal, `entry 0px → entry 240px` |
| experts (10) | entering view | text opacity 0→1 + rise 16px; portrait opacity 0→1 + scale 0.96→1 | 600 / 700ms | CSS `view()` reveals, fixed px ranges on `entry` |
| buttons | hover | colour change 150ms `cubic-bezier(.4,0,.2,1)`; arrow nudges 4px right (`group-hover:translate-x-1`) | 150–200ms | Tailwind `transition-colors`, `group-hover:translate-x-1` |
| condition cards | hover | outline strengthens, thumbnail scales 1.05 | 300ms | `group-hover:scale-105`, `hover:border-primary` |
| review cards | hover | still scales 1.05 under the frame, play ring brightens | 300ms | `group-hover:scale-105` inside `overflow-clip` |
| carousels | click | scroll by one card | smooth | `scrollBy` with `behavior: smooth` (auto under reduced motion); `hydrate: visible` |
| FAQ | click | item opens (− / +) | — | `<details>`; icon swaps |

The capture's "opacity 1→0 on 2,100 elements at 422px" is the newsletter modal's scrim
being dismissed, not a page effect; skipped.

## Media slots → placeholders

- hero photo → `parsleyhealth-placeholder` "photo" (warm beige-to-seafoam surface), fills the hero like cover
- split photo → square photo placeholder
- insurer logo wall → a 2×4 grid of plain-text insurer names (fictional), not an image
- condition thumbnails → 90px round placeholders
- clinician cut-out portrait → a placeholder of the same box, bottom aligned
- review video stills → 9:16 placeholders with the play ring (UI chrome) on top
- footer social feed embed → a flat placeholder strip of the same size

## Decisions

- **Dark bands.** The nav bar and the footer are `.dark` scopes (as on other sites here), so
  the theme's dark palette is the forest/deep-sea palette of those bands; dark mode is the
  whole site in forest. The plans band is `bg-primary` with `bg-background` cards so the
  ivory panels stay ivory in light mode; in dark mode it inverts (bone band, forest cards).
- **Phone padding** is 0.55 × `--section-y` (≈64px), desktop the full 7.5rem.
- **Hero height** follows the capture's fixed numbers (600 / 760px) because the capture does
  not mark it window-sized (760 = 900 − 140 only at that window).
- **Social icons**: lucide 1.x has no brand icons, so the footer takes icons as props and the
  demo uses neutral lucide glyphs. The HIPAA seal becomes a small text badge.
- Footer link columns and header links come from props; the cart drawer and modal are skipped.

## Comparison round 1

Our capture runs through a copy of `capture.mjs` in /tmp with Vite's live-reload socket
stubbed (other sessions' edits kept reloading the shared gallery). Section heights at 1440
matched within ~10px for 11 of 14 sections. Reveal sections (quote, clinicians) show their
pre-state in the section crops; checked on the scroll frames instead.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all body text | Outfit reads ~10% smaller than Euclid Circular B at the same px (x-height 0.46 vs ~0.5, and narrower) | same | — | yes: every sans size in the blocks ×1.1 (serif headings untouched), unitless line heights ÷1.1 so line spacing stays |
| hero | — | headline 3 lines on a wide measure; original 4 lines at ~430px | none on either | yes: measure 27rem |
| conditions, reviews | title and controls missing: grid without columns grew to the track's width and was clipped | fine | arrows work | yes: `grid-cols-[minmax(0,1fr)]` |
| plans | fine | band 72px taller (price note wrapped, big gap under the timeline) | — | yes: gap 6→4rem, price column wider, shorter note |
| split / conditions titles | 3 lines vs 2 (copy length) | hyphen break in "long-running" | — | yes: demo copy |
| footer | link rows 32px apart vs 27; groups balance differently in 2 columns | links 36 vs 33px apart; footer 94px taller | hover | yes: tighter gaps; phone grouping left as is |
| FAQ | — | 225px shorter: our questions fit one line, answer shorter | details | no: content length, row rhythm matches |
| quote, experts | — | — | reveals present: fade + rise 20px, rise 16px, scale 0.96→1 | — |
| floating pill | — | — | appears after the first screen, rise 16px | — |
| overflow | fits at 360/768/1024 | | | |
