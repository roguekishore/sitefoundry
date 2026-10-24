# Castelion — recreation notes

Captured in advance (precapture.json, landing page only; no other pages asked for).
Fictional stand-in company: **Pellworth** (an aerospace hardware maker, programme "Skylark"),
with its own copy in a similar voice and length.

## Design language

- **Palette (three flat colours plus ink):** a warm parchment cream `#E7DBC3` for the page and
  all text on navy; a deep flag navy `#1F3B64` for headings on cream and for whole bands; one
  signal red `#BB2024` for the two filled buttons; a near-black ink `#191919` for one notice
  card. A slightly deeper cream `#DFD0B0` shows up behind media. Cream text on navy at 70% for
  quiet copy. No gradients except the darkened film over the hero video.
- **Rhythm:** sections alternate cream and navy, and every hand-over is "drawn": cream
  venetian-blind stripes close over the hero film; two hairlines where the cream page meets the
  navy band under the big photo card; a navy band with a curved (elliptical) bottom edge; and the
  footer ends in navy stripes that thicken downwards. The stripe motif is the brand.
- **Type scale (Futura throughout):** page titles 86px/1.31 bold (42px on phones), block titles
  52px bold (29px), news headlines 32px (22px), hero lead 22px bold (18px), body 16px/1.4 medium
  (14px), button labels 16px semibold +0.08em. Titles carry +0.02em tracking. Body copy is
  justified almost everywhere: a print/poster voice.
- **Grid:** 1296px content in a 1440 window: 72px gutters (18px on phones). Two-column splits at
  the page midline (the hero lead starts at 686px, the jobs list at 708px). Media is
  rectangular with a 4px radius; buttons are square-cornered red slabs 56px tall.
- **Depth:** none — no shadows. Depth comes from layering (text panel over a painted
  backdrop, cards over bands) and from parallax.

## Type

| original | classification | width / x-height | ours | why |
|---|---|---|---|---|
| Futura (500, 600, 700) | geometric sans | normal width, small x-height, pointed apexes, single-storey a | **Jost** (`@fontsource-variable/jost`) | an open Futura revival: same geometric skeleton, small x-height and single-storey a; the closest open match on every trait |

The original's logo is a brush script; ours is a plain wordmark in Jost italic (no logo shapes).

## Section map (heights at 1440 / 390)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | fixed header over the hero | `castelion-header` | 65 / 110 content | wordmark left, 3-line menu button right, full-width rule with a dart tip below | wordmark left, 4 nav links right, full-width 2px rule with a dart tip at 105px | — | load: rule draws left→right 2.2s, wordmark fades 1s, nav links rise one after another 0.7s; hides on scroll down |
| 2 | film hero with mission + motto | `castelion-hero` | **300svh** (window-sized) | film pinned behind; "Our Mission" one line at 165svh, lead below; motto 2 lines at 258svh | film pinned behind; "Our Mission" 2 lines left and bold lead right at 155svh; motto one line at 242svh | full-window video (cover) | film pinned (sticky) for the whole section; cream blinds rise and thicken from the bottom (scrubbed); title lines rise out of masks; lead fades/rises |
| 3 | big photo card | `castelion-feature-card` | content (552 / 1104) | photo card 354×590, title 3 lines + lead stacked on it; navy band behind the card's foot | photo card 1296×1110, title 4 lines left, justified lead right; navy band behind the bottom 266px, two hairlines at its top | card-filling image (cover) | card rises 227px into place (scrubbed); title lines mask-rise; lead fades + rises 32px |
| 4 | navy statement with curved foot | `castelion-statement` | content (223 / 323) | 4 centred lines 29px, shallow curve | 3 centred lines 52px, deep elliptical curve | — | lines mask-rise (scrubbed) |
| 5 | painted backdrop + text panel | `castelion-split-story` | content (976 / 1108) | backdrop from 168px to the bottom, cream panel over its middle; two stories stacked | backdrop 144–1004px full-bleed, cream panel over the 654–1094px column; two stories | backdrop image, 2 floating object cut-outs | backdrop drifts up (parallax 116→−175px), the two cut-outs drift up faster (≈600 and ≈520px) |
| 6 | big rotating list + careers call | `castelion-careers-call` | content (550 / 625) | 3 list lines 42px, then title, text, full-width red button | 3 list lines 86px left; title, text, 318px red button right | — | list lines light up in turn (opacity 0.4→1→0.4, scrubbed); lines mask-rise; right column fades + rises |
| 7 | featured roles | `castelion-roles` | content (471 / 429) | title, line, scroll box of outlined cards with a rail + dart thumb on the right | title + line left; scroll box of outlined cards (598px) right, rail at the page edge | — | title mask-rise; the rail's dart follows the box's scroll; card hover |
| 8 | notice card | `castelion-notice` | content (285 / 275) | ink card, icon + title, then justified text | ink card, icon + title left, justified text right | — | text rises 34px (scrubbed) |
| 9 | news | `castelion-news` | content (2976 / 1943) | title; every post stacked: square image, date, 2-line headline, text, rule; button centred last | title + red button; banner image with a cream text box inset; rule; left: 2 rows (square image + headline + 2-column text), right: divider + tall card | banner 16:9, 3 square images | title mask-rise; posts rise 64px (scrubbed); button hover |
| 10 | footer | `castelion-footer` | content (693 / 554) | wordmark, 3-col links, addresses, legal, copyright, stripes | wordmark, 3 link columns, addresses right; copyright + legal row; stripes | — | link hover underline |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | load | rule + dart draw in from the left | 2.2s cubic-bezier(.215,.61,.355,1) | CSS keyframes (clip-path inset) |
| header | load | wordmark fades in; nav links fade + rise in turn | 1s / 0.7s, 0.1s stagger | CSS keyframes, fill both |
| header | scroll | slides up out of view on scroll down (≈0.47 window), back on scroll up | 0.5s ease | small scroll listener (hydrate load) |
| hero | pinned | film stays put for the whole 300svh section | — | `position: sticky` frame in an absolute layer |
| hero | scrubbed | cream blind stripes thicken from the bottom and close over the film | scroll 0.47→2H | CSS view timeline on the section, per-stripe range offsets (scaleY) |
| hero | scrubbed | title lines rise 100% out of masks; lead lines rise 28px and fade in | over ~300px of scroll | `castelion-lines` (view timeline, entry 0px → entry 280px) |
| feature card | scrubbed | whole card rises 227px into place | entering view | CSS view timeline (translateY) |
| feature card | scrubbed | title lines mask-rise; lead fade + rise 32px | entering view | `castelion-lines`; CSS view timeline |
| statement | scrubbed | lines mask-rise | entering view | `castelion-lines` |
| split story | scrubbed | backdrop drifts 116→−175px; cut-outs drift ≈611→−382 and 518→−47px | across the section's cover range | CSS view timeline (parallax translateY) |
| careers call | scrubbed | list lines light up in turn (0.4→1→0.4) | across the section | CSS view timeline with per-line ranges |
| careers call | scrubbed | right column fades + rises 83px; button rises 28px | entering view | CSS view timeline |
| roles | scroll (inner) | dart thumb travels down the rail as the list scrolls | — | CSS scroll timeline on the list (`scroll-timeline` + `timeline-scope`) |
| roles / news | scrubbed | title mask-rise; intro text fade + rise 32px; posts rise 64px | entering view | `castelion-lines`; CSS view timeline |
| notice | scrubbed | content rises 34px | entering view | CSS view timeline |
| buttons | hover | red → cream with navy text and border ("Open Positions"); red → navy ("More News") | background/colour 0.5s ease | Tailwind transitions |
| links | hover | underline fades in | 0.5s ease | Tailwind `decoration-transparent` → current |
| page | wheel | Lenis smooth scrolling | — | `castelion-smooth-scroll` (lenis), hydrate load |

Motion inside media (the film itself) is the placeholder's business and not rebuilt. The
Splide carousel behind the roles list is replaced by a native scroll box with the same rail.

## Media slots → placeholders

- hero film (fills the window, cover) → `media` prop; empty: a dusk wash (muted → warm glow)
  in the band's dark scope, darkened like the original film.
- feature card image (cover, 4px radius) → `media`; empty: a sky wash from the dark scope's
  highlight blue to muted, cream text stays legible.
- split story backdrop (full-bleed band) → `backdrop`; two upright cut-out slots
  (`objects`, aspect 0.21 and 0.31) → translucent cream panels with a hairline, drifting.
- news banner (16:9 at 1440, square on phones) and three square post images → `image` props;
  empty: `castelion-placeholder` muted surfaces with the 4px radius.

## Decisions

- **Light is the faithful mode** (the cream page). Navy bands use the `dark` class plus
  `bg-secondary`; the theme's `.dark` secondary is the flag navy and `.dark` background a deeper
  ink-navy, so in dark mode the page goes ink-navy and the bands stay a lighter navy (distinct).
- **Hero blinds use the page background token** and sit outside the hero's dark scope, so they
  always close onto whatever colour the next section has.
- **Header:** the original hides on scroll down; ours also drops back on scroll up and then gets
  the navy band colour so its cream text never lands on cream. Phones get a simple drop-down
  panel behind the 3-line button.
- **The feature card does not overlap the hero** (the original pulls it 78px up under the
  blinds): blocks must work alone; the blinds are solid by then, so the seam doesn't show.
- **Roles list:** the original is a Splide vertical slider; ours is a native scroll box (wheel,
  touch, keyboard) with the rail and dart thumb on a CSS scroll timeline.
- Cloud overlays that cross the split story's top/bottom edges are part of its artwork; they are
  folded into the backdrop slot.
- Font sizes are fluid clamps between the 390 and 1440 measurements.

## Comparison round 1

Section crops (`-section-NN`) show CSS scroll reveals at their start state; reveals were judged
on the scroll frames and the Motion list.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 72px tall vs 65 | 120px tall, rule at 110 vs 110 / 105 | load-in and hide match | yes: tighter top/bottom spacing |
| hero | lead lines (inline-blocks) broke raggedly on phones | — | blinds band thinner and lower than the original at the end of the pin (300 vs 390px, thin bars) | yes: fade lines flow inline on phones; stack ends at 42% with thicker bars |
| hero film slot | — | dusk wash read navy-grey, the film is dusty warm | — | yes: warmer wash |
| feature card | 610 vs 552 | 1182 vs 1104 | rise 227px matches | no: the original pulls the card 78px up under the blinds; ours stays in its own section (decision above) |
| statement | 5 lines vs 4 (second line wrapped) | 319 vs 323 | mask rise matches | yes: shorter second line, less bottom padding |
| split story | panel margins collapsed through the band (overflow: clip is no BFC): the backdrop strips above/below the panel were missing, 835 vs 976 | 1095 vs 1108 | parallax distances match the original exactly | yes: band padding instead of panel margins |
| careers call | phrases double-spaced (hidden `br` forced back to inline): 661 vs 550 | 630 vs 625 | light-up in turn matches | yes |
| roles | 455 vs 471 | 429 vs 429 | rail dart follows the list | — |
| notice | title one line vs two | 275 vs 275 | rise matches | yes: longer title |
| news | 2909 vs 2976 | 1942 vs 1943 | posts rise 64px | — |
| news / footer at 1024 | — | page overflowed to 1127px at 1024 (fixed rem columns) | — | yes: percentage columns, post text columns from 1280 |
| footer | 658 vs 693 | 553 vs 554 | link hovers | — |
