# mrcresidencesbocaraton (mrcresidencesbocaraton.com): recreation notes

Captured in advance (precapture.json, landing page only; no other pages were asked for, and
the `pages` list is empty). Recreated as **Velloro Residences · Sarasota, FL**, a fictional
bayfront condominium "by the Aldani family": own name, own copy, own captions and field labels.

## Design language

- **Palette roles.** Two colours carry the whole page: a brick / Venetian red (`#a73c38`,
  primary) for whole bands, the mobile header bar, the footer and the submit pill; and a pale
  blush (`#fbe8e1`, background) for the alternate bands and the form, where the text turns
  red. Text on red is white. Line patterns are a peach/salmon (`~#eba082`, highlight) on both.
  The hero is near-black footage under a black tint (30% → 80% while scrolling); without
  footage it reads as red under that tint (`#642624`).
- **Type scale.** One family, Montserrat, all caps for every heading and label. Headings are
  Regular (400) and large but not huge: 42px hero line (with the name in Bold), 36px/1.15
  section heads at 1440; 22px/1.15 for both at 390. Body 14px/1.6 with +0.05em tracking
  (12px/1.6 on phones). Small labels in SemiBold: nav 14px, "explore" links 14.4px +0.07em
  with a 1px underline (16px on phones), button 11px, captions and the scroll cue 9px.
- **Spacing rhythm.** Generous and vertical: the split bands centre a ~330px text block in
  ~800px (≈235px above and below) at 1440; on phones 40px top / 60px bottom then a 106px
  pattern strip. 40px page inset at desktop (logo, header), 16px text inset on phones (25px
  for the form and footer).
- **Grid.** Full-bleed bands. The split band puts the pattern panel on the left 43.4%
  (625/1440) and starts the text column at 51.5% (741px), ~520px wide. The form is a centred
  825px two-column grid (33px gap); one column on phones.
- **Shapes and depth.** Flat: no shadows anywhere. Square edges except the full pill submit
  button and the 30px-rounded lockup panel of the brand band. 1px lines: outline hero
  button, underline form fields, link underlines, the header's vertical rule.

## Type

| Original | Kind | Open font used | Why |
|---|---|---|---|
| Montserrat (Regular, Medium, SemiBold, Bold, Light) | geometric sans, wide-ish, large x-height, round O's | **Montserrat Variable** (`@fontsource-variable/montserrat`, already in the workspace) | it is the original's own face and OFL; the variable build covers 300–700 |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | header | `mrcresidencesbocaraton-header` | 62px bar (390) / overlay (1440) | **fixed** red bar: lockup left, "MENU" + 3-line burger right; opens a side menu | **absolute** over the hero: lockup top-left (40,40), 10 right-aligned SemiBold 14px links in a column with a 1px white rule at their right | – | link underline grows from the left on hover; side menu slides in |
| 1 | hero | `mrcresidencesbocaraton-hero` | 390: 429px (content/aspect, under the bar); 1440: **101svh, sized by the window** | video under the bar, 22px line + 126×31 outline button centred | full-bleed video, 42px line centred at ~48%, 155×47 outline button 40px under, "scroll for more" cue at the bottom | video (fills, cover) | **sticky**: the rest of the page slides over it; scrubbed: content fades 1→0 over half a screen, tint 0.3→0.8 over 0.75 screen, wrap drifts up ~8% of the window; cue fades over a quarter screen; video fades in on load 0.5s; button hover → white fill 0.5s |
| 2 | "refined residences" (red) | `mrcresidencesbocaraton-split` (tone primary) | content: 516 / 797 | text first, then a 106px full-width pattern strip | pattern panel left 43.4%, text column right at 51.5%, vertically centred | pattern (decor) | title, body, link fade in on entering view (0.5s ease-out); link underline shrinks to the right on hover |
| 3 | building image | `mrcresidencesbocaraton-picture` (window) | 293 / **900 = window height** | 390×293 image, captions 9px bottom-left / bottom-right | full-bleed, the window's height | image (cover) | scrubbed parallax: image slides ~120px inside the frame across its pass |
| 4 | "indulge" (blush) | `mrcresidencesbocaraton-split` (tone soft) | content: 536 / 820 | as 2, red text on blush | as 2 | pattern | as 2 |
| 5 | pool image | `mrcresidencesbocaraton-picture` (window) | 293 / 900 | as 3 | as 3 | image | as 3 |
| 6 | "heritage" (red) | `mrcresidencesbocaraton-split` | content: 459 / 752 | as 2 | as 2 | pattern | as 2 |
| 7 | boat video | `mrcresidencesbocaraton-picture` (wide) | 293 / 753 (aspect 1.91) | as 3, one caption bottom-right | full-bleed 1440×753 | video | as 3 |
| 8 | register form | `mrcresidencesbocaraton-register` | content: 1112 / 1077 | crest, 2-line intro, ten stacked underline fields + checkbox group, full pill submit | crest, intro, 825px two-column grid of fields, checkbox group left, full-width pill | crest (a mark) | form fades in on entering view; submit hover: fill → transparent, red text 0.5s |
| 9 | brand band | `mrcresidencesbocaraton-brand` | 420 both | pattern full-bleed, central solid panel with mark, lockup + "by" column, credit line | same, panel 634×273 | – | none |
| 10 | footer | `mrcresidencesbocaraton-footer` | content: 219 / 37 | two columns of stacked underlined links | one 37px row: call / email left, legal + credit right, separated by thin bars | – | underline shrinks to the right on hover, regrows from the left |

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| header (1440) | hover | link underline scaleX 0→1 from the left | 0.3s ease | Tailwind `group-hover` on a span (underline-link component, `grow`) |
| header (390) | click MENU | side menu slides in from the right | all 0.5s ease | React state + Tailwind `translate` transition (hydrate load) |
| hero | page scroll | the whole hero is sticky at the top; later sections slide over it | – | `position: sticky; top: 0` on the hero section; later blocks are `relative` so they paint above |
| hero | scrubbed | content opacity 1→0 | first half screen (214→663 of a 900 window) | CSS `animation-timeline: scroll(root)`, range 0 → 50svh |
| hero | scrubbed | black tint 0.3→0.8 | first ¾ screen | same, 0 → 75svh |
| hero | scrubbed | content wrap translateY 0 → ≈ −8% of the window (−497px over 6.2k px of page) | linear | same, 0 → 100svh (after that the hero is covered) |
| hero | scrubbed | scroll cue opacity 1→0 | first quarter screen | same, 0 → 25svh |
| hero | load | video fades in | 0.5s | CSS `@keyframes`, fill both, on the media slot |
| hero | hover | outline button: transparent → white fill, dark text | 0.5s ease | Tailwind transition (text uses primary: tokens have no black) |
| hero | hover | scroll cue opacity 0.7, chevron drops 10px | 0.5s ease | Tailwind `group-hover` |
| split bands | entering view | title, body, link: opacity 0→1, rise (~30px) | 0.5s ease-out (class toggle) | CSS view timeline, `entry 0px → entry 220px`, +40px per item |
| split / footer links | hover | underline scaleX 1→0 to the right; back from the left | 0.5s ease | underline-link component (`shrink`) |
| pictures | scrubbed | image translateY ≈ −60px → +60px inside the frame (−82→327 over the page) | linear, cover range | CSS view timeline on an oversized inner layer, `overflow-clip` frame |
| register | entering view | form opacity 0→1 | 0.5s ease-out | CSS view timeline, entry range |
| register | hover | submit: red fill → transparent, white → red text | 0.5s ease | Tailwind transition |

Not rebuilt: the desktop "small" header (`header.small.hidden`): the capture saw it hidden at
every scroll position, so its appearing rule isn't known.

## Media slots → placeholders

| slot | size | placeholder |
|---|---|---|
| hero video | 390: full width × 367 (under the bar); 1440: full bleed, 101svh | `bg-primary` under the black tint (the original's look before the video loads), fades in 0.5s |
| building / pool images | 390×293; 1440×100svh | soft gradient `highlight → muted` surface, oversized for the parallax |
| boat video | 390×293; 1440×753 | same |
| crest above the form | ~55×100 | lucide `Wine` icon, thin stroke, primary (an icon, not their mark) |
| pattern panels | 625×full / 390×106 / full-bleed band | our own CSS pattern (see decisions), overridable by a `pattern` slot |

## Decisions

- **Pattern.** The original's ogee/arch lattice is part of its brand artwork, so it isn't
  copied. Ours is a CSS-only pattern of interlocking circles (a "scale" lattice) in
  `--highlight` at the same cell size (~38px) and line weight (1px), so the panels have the
  same density and colour. It is its own component (`mrcresidencesbocaraton-pattern`) and any
  block that uses it accepts a `pattern` node instead.
- **Lockup.** Plain text in Montserrat (light name + stacked "RESIDENCES / city"), with a
  lucide icon in front instead of their figure mark.
- **Hero colours over media** are white text on a black-ish tint in both modes; `--glow`
  is set to a near-black warm brown and used for the tint (the tokens have no "black").
- **Hover fill of the hero button** ends white with primary-coloured text instead of black
  text, for the same reason.
- **Mobile hero height** follows the original's 429px as an aspect ratio of the width
  (390:429), since it is not window-sized there; from 1024px it is 101svh.
- **Dark mode** is a sibling: deep oxblood-black background, blush text, the same red for
  bands, a darker blush-red for the "soft" bands.

## Comparison round 1

Capture artefact first: `-section-NN` crops are clipped from a full-page shot taken at the
top of the page, so anything on a view-timeline reveal below the first screen shows in its
pre-entry state there (blank split text, blank form). The scroll frames show every reveal
completing, and `ours-design.md` lists each one (opacity 0→1, rise 30→0px). The original's
reveals are class toggles that stay on, so its crops show the text. Not a page bug.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | lockup wider (7-letter name vs 5), same structure and bar height (62px) | nav column 360px tall vs 284: 32px link pitch vs 24 (the li kept the body's line height) | underline grows from the left on hover: detected | yes: li `leading-4`, pitch 24px, header 292px |
| hero | 429px, sticky, content centred under the bar: matches | content block centred at ~437 vs ~475 of 909 (sits ~40px high) | sticky, tint 0.3→0.8, drift −72px, copy and cue fade: all detected | yes: `lg:pt-10` instead of `lg:pb-10` |
| hero tint | empty hero reads lighter red (#7f2d2f) than the original's tinted red (#642624) | same | – | yes: `--glow` darkened to near-black (oklch 0.12) |
| split bands | body copy ~4% wider per character (0.05em tracking) | 7.7 vs 7.3 px per character, so lines broke earlier | reveals detected (3 per band) | yes: tracking 0.02em |
| split heights | 479 / 498 / 460 vs 516 / 536 / 459 (our copy is a line shorter) | 779 / 779 / 734 vs 797 / 820 / 752 | – | no: content length, same padding rule |
| pictures | 293px, captions bottom corners | 900 = window (marked "sized by the window"), wide band 753 | drift −14→14 / −60→60px detected | – |
| register | stacked fields, pill: matches | two-column 825px grid, pill 54px: matches | fade on entering view; submit hover detected | – |
| brand band | pattern edge, rounded panel shows its corners a little more | matches (420px, 634×273 panel) | none (as the original) | – |
| footer | two columns, 225 vs 219px | 37px row: matches | underline shrink on hover (not sampled by the capture's hover list) | – |
| overflow | 360 / 768 / 1024 fit | | | – |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | as round 1 | nav 292px tall, 24px pitch: matches | as round 1 | – |
| hero | darker tint now matches the original's empty-hero red | headline at y≈430, button at 497: matches (430 / 493) | all five hero rows detected | – |
| split bands | body width per character now 6.25 vs 6.4px | line breaks and text column (741→1265) match | as round 1 | – |
| everything else | unchanged, matching | unchanged, matching | | – |

Stopped here: section by section the pairs read the same apart from copy and the media
placeholders, every motion row shows up in `ours-design.md` with the same kind and
direction, and nothing overflows at 360 / 768 / 1024.

Left different on purpose: the lattice motif (ours interlocking circles, theirs an ogee
arch lattice) and the lucide glass mark in place of their figure; the hero button's hover
ends in white with red text, not black (no black token).

## Re-theme check

`mrcresidencesbocaraton-split` (both tones) and `mrcresidencesbocaraton-register` under
`sample-ember` (light): rust band with paper text and ember's green lattice; paper band with
rust text; the form keeps its underline fields, checkboxes and pill in ember's primary, in
ember's own fonts. Nothing depends on this site's colours.
