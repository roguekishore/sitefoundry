# rioproperty (rioproperty.co.za): recreation notes

Captured in advance (precapture.json, landing page only; no other pages were asked for).
Recreated as **Fenwick Yard**, a fictional commercial-property broker in the made-up harbour
city of **Port Wexley**: own name, own copy, own deal names, own rules, own client names.

## Design language

- **Palette roles.** A warm paper white (`#FFFEFC`, background) carries almost the whole
  page. Headings are a deep indigo ink (`#230F66`); body copy is a plain mid grey (`#666`).
  The brand is an electric violet (`#4725B8`, primary): sub-heads, links, the contact panel,
  the hover bar of the deal cards. Two partners only appear on violet or indigo: a lavender
  (`#B39CFF`) for quiet text (contact sub-head, footer links, form labels) and a pure
  lemon yellow (`#FFEA00`) for the loud bits (the contact heading, SEND, the footer e-mail,
  the underline in the hero blurb, the radio rings). The footer is a whole band of the deep
  indigo. Client logos are a flat light grey (`#CCC`). Hairlines are a pale grey (`#E0E0E0`).
- **Type scale.** Two voices. A wide, geometric display grotesk at one weight (600),
  always UPPERCASE, very tight leading (0.966): hero 122px (8.5vw) / 50px (12.7vw), section
  heads 52px / 35px, card titles 36px, contact heading 74px / 47px, footer e-mail 52px / 23px.
  Everything else is Rubik 400 at 16px/24 (body, labels, captions), with an uppercase
  "title" style at 24px/36 (desktop) / 18px/27 (phone) in violet for sub-heads.
  No letter-spacing except the wordmark (very wide tracking, ~0.35em).
- **Spacing rhythm.** 60px side margins at 1440 (fluid clamp down to ~19px at 390), 16px
  gaps between cards, sections padded 84→120px (fluid), big empty right halves.
- **Grid.** 12 columns over 1320px. Statements: heading spans ~8 columns; the body copy sits
  in the last third (x≈951 → 1380, ~430px). Footer content starts at ~38% (x≈548).
  Contact panel: two halves.
- **Shapes and depth.** Everything square (radius 0). Completely flat: no shadows. Only
  round things: the radio rings of the form. Depth comes from motion (parallax, pinning,
  scale-in) not from shadows.

## Type

| Original | Kind | Open font used | Why |
|---|---|---|---|
| Blauer Nue 600 (display) | geometric grotesk, **wide** (caps ~0.8 em, circular O/C, straight-legged R), large x-height (only ever seen in caps), one weight | **Encode Sans Expanded 600** (`@fontsource/encode-sans-expanded`) | a natively wide grotesk with near-circular rounds and a straight R leg, so a `font-display` token alone gives the width (no `font-stretch` needed in blocks); the 600 weight matches. Archivo at wdth 125 was the alternative, but its rounds are squarer and it would need `font-stretch` in every block |
| Rubik 400 (body) | rounded-corner geometric sans, normal width, large x-height | **Rubik Variable** (`@fontsource-variable/rubik`) | it is the original's own face, OFL |

## Section map

Heights from the capture (1440 / 390).

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | nav | `rioproperty-header` | fixed overlay | wordmark on two lines (letter-spaced), 3-line burger right | wordmark on one line, burger right | – | slides up out of view once scrolled down; back on scroll up |
| 1 | hero | `rioproperty-hero` | **300svh** pinned at 1440, **100svh** at 390 (window-sized) | full-bleed photo; kicker list left at ~43%; blurb right-aligned under it; headline 4 rows (RIO / PROPERTY / KNOWS→right / CAPE TOWN→right) at the bottom | sticky 100svh photo; kicker list left and blurb at 58% across, at ~41%; headline 3 rows at the bottom: left word / left+right words / right words | 1 photo/video (canvas in the original), fills the window | headline words, kicker and blurb fly apart sideways (scrubbed while pinned); dark scrim fades out; photo drifts down as the section leaves |
| 2 | statement ("probably here to see") | `rioproperty-statement` | content (468 / 484) | heading 35px, link, body | heading 52px over 8 cols; link at left, body in the last third | – | heading words rise in masks (scrubbed); body rises 30px; link fades in |
| 3 | client logos | `rioproperty-logos` | content (465 / 228) | sub-head centred on two lines; a row of logos running off both sides | sub-head centred; row of 7 logos ~245px apart | – (logos become plain-text names) | sub-head words rise; row fades in and drifts right with the page scroll |
| 4 | personas | `rioproperty-personas` | content (763 / 2082) | heading, violet sub-head, 4 stacked cards 353×411 with title, line and ↗ | heading + sub-head; 4 columns 318×371 | 4 photos | columns drift up at 4 different speeds (37→148px, scrubbed); hover shows the line |
| 5 | deals | `rioproperty-deals` | content (1042 / 850) | heading, a sideways track of 334px cards, next one peeking | heading 3 lines, link; sideways track of 425px cards at staggered heights, 4th card cut by the edge | 7 photos | track drifts up 80px→-80px; link fades in; hover: photo greys, a dark veil, area + size, big name and a violet bar with the type and status in yellow, ↗ at the corner |
| 6 | laws | `rioproperty-laws` | content (1040 / 1234) | heading, sub-head, 6 laws stacked, "there's more" toggle | heading, sub-head, 3×4 grid of laws with hairlines | – | hairlines draw across (clip, scrubbed); law lines rise in masks |
| 7 | full image | `rioproperty-full-image` | content (820 / 583) | one photo 353×423 in the margins | one 2:1 photo 1320×660 | 1 photo | scales 1.25→1 as it enters; photo drifts inside its frame |
| 8 | statement ("we don't list") | `rioproperty-statement` | content (787 / 612) | heading, violet sub-head, body, link | heading 3 lines; sub-head left, body + link in the last third | – | as 2 |
| 9 | contact | `rioproperty-contact` | content (784 / 959) | violet panel in the margins: yellow heading, lavender sub, the form under | violet panel 1320×720: heading + sub left (centred vertically), the form right | – | panel scales 1.25→1 (from edge-to-edge into the margins) with its content counter-scaled 0.8→1; fields fade in; the checkbox row and message rise 10px |
| 10 | footer | `rioproperty-footer` | content (630 / 595) | indigo; yellow e-mail; contact left / nav right; social right; wide wordmark; tagline | e-mail + 3 columns from 38%; wordmark + tagline bottom-left | – | content slides down 158px into place with a dark veil fading out (reveal from under); e-mail rolls up to a copy on hover |
| – | smooth scroll | `rioproperty-smooth-scroll` | – | – | – | – | Lenis |

`rioproperty-statement` serves sections 2 and 8: they are the same layout (heading over a
left slot and a right copy column), only the left slot holds a link in one and a sub-head in
the other.

## Motion inventory

| section | trigger | what changes | timing / easing | build |
|---|---|---|---|---|
| nav | scrolled down past ~300px | bar slides up 108px (out); back when scrolling up | 0.75s cubic-bezier(.625,.05,0,1) | `rioproperty-header`: scroll listener sets hidden; Tailwind `translate` transition (hydrate load) |
| hero (1440) | pinned + scrubbed | words fly apart: left words -26…-60vw, right words +51…+69vw, kicker -28vw, blurb +85vw | linear, over the pin (319→2343px) | sticky 100svh stage inside a 300svh section; a named view timeline on the section, each word `translateX(var(--drift))`, range `contain 10% exit 15%` |
| hero (390) | scrubbed as it leaves | the same fly-apart | 296→609px | the same keyframes on range `exit 30% exit 75%` |
| hero | scrubbed | dark scrim 1→0 | over the pin | same timeline, opacity |
| hero | scrubbed while leaving | photo moves down 0→450px (half speed) | linear, exit range | same timeline, `exit 0% exit 100%`, translateY 0→50svh |
| statement, laws, deals, personas, logos, contact heads | scrubbed | each word rises 58px (100%) out of its mask, a ripple left to right | ~¾ of a screen | `rioproperty-rise-text`: words in clip masks, each its own view timeline, range starts shifted 1.5% per word |
| statement body, laws | scrubbed | rise 30px + fade | ~⅓ screen | `rise-text` with `mode="block"` on paragraphs (one mask, whole block) |
| statement / deals links | scrubbed | opacity 0→1 | ~⅔ screen | CSS view timeline, entry range |
| logos row | scrubbed (whole page) | opacity 0→1 as it enters; drifts right ~10vw while it crosses the window | linear | CSS view timeline on the row |
| personas (lg) | scrubbed | column i: translateY (i+1)·37px → −(i+1)·37px | linear, cover | CSS view timeline per column, `--i` multiplies the distance |
| deals | scrubbed | track translateY 80→-80px | linear, cover | CSS view timeline |
| deal card | hover | grey photo + veil, details slide up, violet bar; ↗ nudges 1px up-right | 0.75s cubic-bezier(.625,.05,0,1) | Tailwind `group-hover` transitions |
| personas card | hover | line grows open, ↗ appears (desktop; phones always open) | 0.75s cubic-bezier(.625,.05,0,1) | grid-rows 0fr→1fr transition (inferred: the capture only shows titles at 1440) |
| laws | scrubbed | hairlines draw left→right (horizontal) and down (vertical) | over the section | CSS view timeline, `scale` from 0 with an origin |
| laws (390) | click | "there's more" shows laws 7–12 | instant | a CSS checkbox toggle (no JavaScript) |
| full image | scrubbed | frame scale 1.25→1 entering; photo inside drifts -132→99px | linear | CSS view timelines; frame cropped with `overflow-clip` on the section |
| contact | scrubbed | panel 1.25→1 with content 0.8→1 inside (stays the same size), content drifts -56→56px; fields fade; checkbox row and message rise 10–12px | entry range | CSS view timelines; section is `overflow-clip` so the 1.25 panel can't widen the page |
| footer | scrubbed (last on page) | inner content translateY -158px→0, veil 1→0 | entry 0→100% | CSS view timeline (entry, reachable as the last block) |
| footer e-mail | hover | text rolls up to an identical copy; arrow leaves up-right and a twin comes in | 0.75s cubic-bezier(.625,.05,0,1) | two stacked copies in a clip, `group-hover` translate |
| links | hover | underline draws left→right (scaleX 0→1) | 0.75s cubic-bezier(.625,.05,0,1) | `rioproperty-arrow-link` |
| page | load | violet curtain lifts off the hero (inferred from the fixed `preloader_wrap`) | 0.9s cubic-bezier(.625,.05,0,1) | CSS `@keyframes` on a pseudo panel in the hero, `fill-mode both` |
| page | wheel | smooth scrolling | Lenis | `rioproperty-smooth-scroll` (hydrate load) |

Not rebuilt: the hero canvas's own zoom out through the office window (that is media), the
page-transition overlay (`transition_wrap`, only shows between pages), and the menu overlay's
own animation (the burger opens a plain violet panel).

## Media slots → placeholders

| slot | size | placeholder |
|---|---|---|
| hero photo/canvas | full bleed, fills the window | gradient from the deep indigo (secondary) to the glow violet, + a scrim |
| persona photos ×4 | 318×371 / 353×411 (0.86) | `bg-muted` with the dark bottom gradient the original uses for its titles |
| deal photos ×7 | 425×497 / 334×384 (0.86) | `bg-muted` |
| full image | 2:1 at 1320 / 0.83 at 353 | `bg-muted` |

## Decisions

- The hero is 300svh only from `lg` (1024) up, as the original: on phones it is 100svh and
  the words fly apart while it scrolls away.
- The hero curtain is inferred (the capture lists a fixed purple `preloader_wrap` but never
  shows it); `curtain={false}` turns it off.
- Logos become plain-text names of fictional clients in the display face, light grey,
  violet on hover.
- The burger menu opens a simple violet panel with the links in the display face.

## Comparison round 1

Section crops of ours are taken with every scroll-driven reveal at its start (headings still
inside their masks), so headings were compared in the scroll frames (`ours-<w>-scroll-NN`),
which show the same mid-rise states as the original's frames. Motion list: every inventory
row shows up with the same kind, direction and distance (the hero's fly-apart numbers match to
a few px: kicker -403 vs -397, blurb +1224 vs +1219, words -374/-864/+734/+994 vs
-368/-862/+740/+994; media 0→450px on exit; scrim 1→0; personas 37/74/111/148px; deals
80→-80px; full image 1.25→1; contact 1.25→1 with 0.8→1 inside; footer -158→0). 360/768/1024
fit. The hero is "sized by the window" at both widths (100% at 390, 300% at 1440).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all display type | Encode Sans Expanded 600 reads lighter than Blauer Nue 600 | same | – | yes: the theme loads only the 700 face, so `font-semibold` renders 700 |
| statement (2) | heading 5 lines vs 3 (our sentence longer) | 3 lines vs 2; body leading 1.75 vs 1.5 | ok | yes: shorter heading; body leading 1.6 |
| personas (4) | heading 4 lines vs 3 | heading 3 lines vs 2; the one-line descriptions showed at rest (the 0fr grid row didn't collapse: `overflow: clip` keeps the min-content size) | ok | yes: shorter heading; `min-h-0 overflow-hidden` on the line |
| laws (6) | heading 5 lines vs 4 | 3 lines vs 2 | lines draw, words ripple: ok | yes: shorter heading, wider measure |
| contact (9) | ok | panel 828 vs 784 tall | ok | yes: panel padding 80 → 64px |
| footer (10) | the e-mail's hidden twin showed under it | same | hover roll | yes: the clip span was inline (overflow does nothing there); now a block |
| hero (1) | ok (kicker 352 vs 362) | ok | ok | – |
| deals (5), logos (3), full image (7), off-market (8) | ok | ok | ok | – |

## Comparison round 2

Heights now (ours / original): 1440 — hero 2700/2700, statement 498/468, logos 452/465,
personas 803/763, deals 1080/1042, laws 1056/1040, full image 820/820, off-market 693/787,
contact 796/784, footer 662/630. 390 — hero 844/844, statement 540/484, logos 230/228,
personas 2101/2082, deals 879/850, laws 1255/1234, full image 582/583, off-market 609/612,
contact 907/959, footer 647/595. 360/768/1024 fit. Motion list unchanged from round 1.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero (1) | ok; display weight now heavy like the original | ok | ok | – |
| logos (3) | section was 318 vs 228 tall | 420 vs 465 | ok | yes (round 2 spacing): 230 / 452 |
| personas (4) | ok | heading now 2 lines; 925 → 803 tall (the original's cards run almost to the next section) | ok | yes |
| deals (5) | ok | 1144 → 1080 tall | ok | yes |
| laws (6) | ok | heading 2 lines; the mid-scroll frame (lines drawing, words rising in masks) matches the original's | ok | – |
| off-market (8) | ok | ~90px shorter than the original (our copy is a line shorter) | ok | left: content-driven |
| statement (2) | ~55px taller (our body copy runs one line longer) | ok | ok | left: content-driven |
| contact (9) | 50px shorter (our labels are shorter, the tick row fits on one line) | ok | ok | left: content-driven |
| footer (10) | ok | ok; the capture's hover test shows the e-mail mid-roll | ok | – |

Stopping here: every section pair reads as the same design at a glance; remaining gaps are
copy-length differences and media placeholders.

## Re-theme check

`rioproperty-deals` and `rioproperty-statement` captured under `sample-ember`
(`ours-ember-*`): both take its serif, cream paper, rust primary and page width cleanly. The
deals hover bar puts ember's highlight on its primary (green on rust), which is the theme's
pairing, as the meta notes say. The whole page in `mode=dark` (`ours-dark-*`) reads as a
deep indigo sibling: brighter violet contact panel, near-black footer band.
