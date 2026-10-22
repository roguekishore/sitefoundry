# granola — recreation notes

Original: https://www.granola.ai/ (precaptured 2026-10-21; landing page only, no other pages
asked for). Every original scroll frame and both folds sit under a cookie dialog with a grey
scrim, so the frames look duller than the page is; colours come from `original-design.md` and
the section crops, which are not scrimmed. The dialog also hides the centre of every frame:
the middle of the hero and steps motion is read from the Motion list.

Fictional company: **Tidemark**, an AI notebook for meetings that records from your own device
(no bot). All copy, names, customer and tool names are invented.

## Design language

- **Paper and ink.** White page, a warm off-white "oat" surface (`#f7f7f2`) for app windows,
  the connect section and the closing card; ink `#292929` for text and for dark pill buttons;
  warm greys `#72726e` (secondary) and `#acada8` (tertiary); hairlines are a warm olive at 20%
  (`#47432a33`) or black at 10%.
- **Two loud notes.** A dark olive `#5b6f00` for the main Download pills, and a lime
  `#b2c248` for the whole chat band and the "New" badge. A pastel rainbow (amber, pink, lilac,
  sky, lime) only ever appears as a shimmer sweeping through text.
- **Dark bands.** The logo wall and the testimonials sit on `#292929` with white text and white
  hairlines.
- **Type.** An editorial serif with low contrast and a large x-height (Quadrant) for every
  heading, from 14px eyebrows to 163px; a neutral grotesque (Melange) for body and UI.
  Headings are regular weight (400), tight leading (0.9–1.05), never bold.
  Scale at 1440: 163 (doers, width-sized) · 108 (section heads) · 86 (hero, closing card) ·
  60 (testimonial head) · 48 (statements) · 36 (quotes) · 32 (feature rows) · 24 (steps,
  footer heads). At 390: 48 · 60/46.8/36 · 24. Body 20 (hero lead), 17/27.6 (feature rows),
  14–16 elsewhere.
- **Grid.** Content is 1200 wide at 1440 (x 120–1320); the features list and the
  effortless-notes rows use a 1280 frame (x 80–1360) with a dashed vertical rule at each edge.
  Two-column sections put text at x 720 (the right half): the statement, the steps, the feature
  descriptions at x 912. 16px gutter at 390.
- **Rhythm.** Sections breathe: ~140px top padding on light sections at 1440, ~90 at 390;
  feature rows ~120px apart, each opened by a full-width hairline.
- **Shapes and depth.** Pills for every button; app windows and step media 16px; media tiles
  4px; the chat box 28px; testimonial cards square with a white hairline. Shadows are soft and
  rare: the chat box (`0 8px 48px #00000026`), the hero window (`0 20px 25px -5px #0000001a`).

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Quadrant (400) | serif, low contrast, bracketed wedge serifs, large x-height, normal-to-wide width, ball terminals | **Newsreader Variable** (`@fontsource-variable/newsreader`, already in the repo) | the closest open serif on contrast, x-height and width; its optical-size axis keeps big heads light like Quadrant's. Young Serif was the other candidate but is heavier and single-weight |
| Melange (300–600) | neo-grotesque sans with a slight humanist warmth, normal width, tall x-height | **Instrument Sans Variable** (`@fontsource-variable/instrument-sans`, already in the repo) | same neutral grotesque skeleton, tall x-height and warm curves; covers 400–600 |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | nav | `granola-header` | 56 (fixed) | wordmark · "Get the app" pill · burger | wordmark · 5 centred links · "Talk to sales" outline pill + Download pill | — | fixed; at top full-width and bare, after scrolling becomes an inset pill with a hairline and the Download pill turns olive |
| 2 | hero + effortless notes | `granola-hero` | **200svh** (window-sized; 1688 / 1800) | badge, h1 46.8px 4 lines, lead, CTA; app window 358×537 below with three art cards fanned behind; then "Effortless notes" h2 36 + 3 icon rows with hairlines (544, content) | left: badge, h1 86/0.95, lead 20, olive CTA 56px, platform note; right half: sticky app window 460×690 with art cards behind. Second screen: "Effortless notes" h2 48 + 3 rows + 2 empty hairline rows inside a dashed 1280 frame, window still pinned on the right | app window (4:6, radius 16, shadow), 3 art cards (0.55–0.8 aspect, radius 4), video-call strip | window scales 1.2→1 and drifts (+96,−54)→0 as the first screen scrolls (50–100% of first screen); art cards converge to it, shrink to 0.75 and fade; call strip parallax 27→−103px; on 390 the window shrinks 1→0.8 |
| 3 | logo wall | `granola-logos` | content (572 / 709) | head 48 on white; dark band: shimmer title, 3×4 names | head 163 (width-sized) on white; dark band: title, 6×2 names with + marks at the joins | — (names as text) | headline slides down 61 / 208px under the band while the section leaves (scrubbed) |
| 4 | statement | part of `granola-steps` | content (312 / 464) | h2 36, left | h2 48 in the right half | — | — |
| 5 | steps | `granola-steps` | content (1882 / 2452) | per step: serif eyebrow, title 24, body, media 358² | sticky step nav top-left (3 labels with progress lines); right half: title 24, body, media 600² per step | 3 step media, 1:1, radius 16 | nav pinned (sticky top 96); each label turns ink and its line fills while its step crosses the window |
| 6 | chat | `granola-chat` | content (705 / 582) | eyebrow, h2 60 3 lines, chat box below (358 wide) | lime band; eyebrow + h2 108 left; white chat box 28px radius bleeding off the right edge | — (chat box is UI chrome) | caret blinks (1.1s loop); prompts type in (clip reveal) and fade in turn with their chip |
| 7 | testimonials | `granola-testimonials` | content (795 / 848) | centred h2 36; cards 324 wide, photo under quote, next card peeks | centred h2 60; cards 700×440 in a row running off the right | portrait 160 / 179 square | horizontal scroll-snap track (no autoplay seen) |
| 8 | features | `granola-features` | content (3047 / 4663) | eyebrow, h2 60 4 lines, full-width ink CTA; rows stacked: title 24, body, media | eyebrow, h2 108 2 lines, ink CTA; 5 rows: hairline, title 32 left / body 17 at x 912, media 1280×527 (one wide or two split) | 7 media tiles, radius 4 | — (no reveals in the capture) |
| 9 | connect | `granola-integrations` | content (955 / 1151) | oat band; eyebrow, h2 60, CTA, hairline row; tile strip | oat band; eyebrow, h2 108, CTA; hairline row title 32 / body 17; strip of white square tiles of graded size (90–152px) | — (tiles hold names/icons) | tile strip slides left with the scroll (scrubbed, ~1870px over the section's pass) |
| 10 | closing card | `granola-cta` | content (532 / 749) | card 358 wide from y 64, h2 36, stacked full-width pills | full-bleed art backdrop; oat window card 768 wide from y 96 running off the bottom, dots, h2 86 3 lines, body 22, two pills | backdrop art 1440×749 cover | backdrop fades in on entering |
| 11 | footer | `granola-footer` | content (1097 / 828) | 2×2 link groups, socials, ©, wordmark full width | Features column left, Product/Company/Resources right; socials + © row; giant wordmark across 1200 | — | fixed "reveal" panel: the page slides up off it (desktop) |

Shared components: `granola-button` (olive / ink / outline / soft pills), `granola-wordmark`
(text wordmark), `granola-media` (the placeholder surface every media slot falls back to),
`granola-window` (the oat card with three window dots, used by the closing card).

## Motion inventory

| section | trigger | what changes | timing | how |
|---|---|---|---|---|
| header | scrubbed with page scroll (0–120px) | bar insets to a pill: hairline + translucent fill + blur fade in; Download pill soft → olive | linear over 120px | CSS `animation-timeline: scroll(root)` on the fill layer and the pill's olive layer |
| header links | hover | colour to ink / pill fill | 0.15s cubic-bezier(.4,0,.2,1) | Tailwind `transition-colors duration-150` |
| hero window | scrubbed (second half of the first screen) | scale 1.2→1, translate (96,−54)→0 at 1440; scale 1→0.8 at 390 | linear | CSS view timeline on the hero (`contain 50vh`→`contain 100vh`) |
| hero art cards | scrubbed, same range | translate to the window, scale 1→0.75, opacity 1→0 | linear | same view timeline, one keyframe per card via CSS vars |
| hero call strip | scrubbed (25–75% of hero) | translateY 27→−103px | linear | same timeline, own range |
| hero load-in | load | badge, h1, lead, CTA rise 16px + fade, 80ms stagger (suggested: the capture has no load reveal, but its frames are under the dialog) | 0.7s ease-out | **skipped**: nothing in the capture shows one |
| doers headline | scrubbed as the section leaves | translateY 0→208px (61 at 390), sliding under the dark band | linear over 450px | CSS view timeline, `exit 0%`→`exit 450px` |
| logos title | entering view | rainbow shimmer sweeps through the text once | 0.4s in the original | CSS view timeline on `background-position` (`entry 0%`→`entry 100%`) |
| steps nav | pinned | nav column sticks at top 96 while steps scroll | — | `position: sticky` |
| steps progress | scrubbed per step | label muted→ink, line fills 0→100% then clears | linear | named view timelines per step + `timeline-scope` on the section |
| chat caret | loop | opacity blink | 1.1s steps | CSS `@keyframes` |
| chat prompts | loop | each prompt types in (clip-path left→right), holds, fades; chip swaps with it | 12s cycle for 3 | CSS `@keyframes` with per-item delay |
| testimonials | user scroll | horizontal track, snap | — | `overflow-x-auto snap-x` |
| connect tiles | scrubbed | strip translateX +40%→−60% of its width across the section's pass | linear | CSS view timeline on the section |
| closing backdrop | entering view | opacity 0→1 | linear over 300px | CSS view timeline `entry 0%`→`entry 300px` |
| footer | pinned (fixed reveal) | page slides up off the footer | — | `lg:sticky bottom-0` with the footer under the page (`-z-10` inside the page's `isolate`) |
| buttons | hover | fill darkens / outline fills | 0.15–0.3s | Tailwind transitions |

Inside media (skipped, the placeholder's business): the hero window's notes, its "Enhancing
notes" pill and clip-path reveal of the enhanced notes, the gradient text sweeps inside the
demos, the step demos' typing, the dancing audio bars, the spinner.

## Media slots

| slot | original | placeholder |
|---|---|---|
| hero app window | 460×690 at 1440 (4:6), 358×537 at 390, radius 16, hairline, shadow | `granola-media` oat card, same frame, moves like the original |
| hero art cards ×3 | 378×687, 461×819, 530×662 (390: 215×382 …), radius 4 | lime/glow and ink-toned surfaces at the same sizes |
| hero call strip | 128×275, radius 12, black frame | dark surface |
| step media ×3 | 600×600 / 358×358, radius 16 | muted surface with a soft glow |
| testimonial portraits | 179² / 160² square | muted surface |
| feature media ×7 | 1280×527 split 2:1 or whole, radius 4 | muted surfaces |
| closing backdrop | 1440×749 full-bleed | highlight → glow gradient field |

## Decisions

- The hero and the "Effortless notes" rows are one block: on desktop the app window stays
  pinned across both screens, so they can't be separated without losing the motion. On phones
  the rows follow the pinned window instead of sitting beside it.
- The statement ("…before, during and after…") is the steps block's intro, because it sits on
  the steps' grid (right half) and only introduces them.
- The hero's 200svh: desktop is two `min-h-svh` rows beside a sticky column (= 200svh);
  phones are the copy plus a 130svh sticky track for the window (≈ 1690px at 844, like the
  original's 1688).
- Logos, testimonials and integration tiles are fictional names set in type; social icons
  are lucide icons passed in by the page.
- The footer wordmark is an SVG `<text>` stretched with `textLength`, so it always spans the
  content width like the original logo does.
- Dark mode is a sibling: warm charcoal page, the same oat/lime family lifted for contrast.
  The dark bands (logos, testimonials) carry the `dark` class themselves, so in dark mode they
  blend into the page.

## Comparison round 1

Original frames are under the cookie dialog; compared on crops, the unmasked edges of frames and
the Motion lists. Sizes: ours 390 hero+rows 2191 (orig 1688+544), logos 564 (572), steps 2172
(312+1882), chat 715 (705), testimonials 798 (795), features 3065 (3047), connect 900 (955),
card 541 (532), footer 1208 (1097); 1440 hero 1800 (1800, window-sized ✓), logos 684 (709),
steps 2912 (464+2452), chat 614 (582), testimonials 852 (848), features 4555 (4663), connect
1128 (1151), card 766 (749), footer 954 (828). No horizontal overflow at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | window settles over scroll 844–1688 (orig 422–844): the hero is taller than the original's because it also holds the rows | rows heading wraps to 3 lines (orig 2) | settle, art fade, strip parallax all present and in the same direction/distance | yes: ranges now in window heights (`contain 50vh → 100vh`), heading 20ch |
| logos | headline clipped at both edges (our line is longer than the original's) | headline spans 1290px (orig 985); band 186 tall (orig 208) | slide-under 61/208px ✓, shimmer ✓ | yes: shorter line ("Built to ship"), band padding |
| steps | ✓ | ✓ nav pinned, labels/lines fill per step | ✓ | — |
| chat | ✓ | 32px taller | typing loop, caret ✓ | yes: tighter leading and bottom padding |
| testimonials | ✓ | second quote runs 6 lines into the name; heading breaks unevenly | — | yes: shorter sample quote, balanced heading |
| features | ✓ | ✓ | — | — |
| connect | ✓ | ✓ tiles slide with scroll | ✓ | — |
| closing card | ✓ | ✓ backdrop fades in | ✓ | — |
| footer | link pitch 38 (orig 35) | link pitch 34 (orig 30), columns start 67px further right | reveal ✓ (sticky under the page) | yes: link line-height, column gap |
| header | ✓ | ✓ bare → inset pill, Download turns olive | ✓ | — |

## Comparison round 2

Sizes now: 390 logos 583 (572), footer 1149 (1097); 1440 logos 700 (709), chat 585 (582),
footer 898 (828, the wordmark is a little taller). Overflow: fits at 360/768/1024.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ window pinned at y≈145, 0.8× by scroll 844 (orig 150, 0.8× at 844) | ✓ rows heading on 2 lines; wraps "…tidied in / seconds" | settle / fade / parallax in the same ranges as the original | yes: balanced wrap |
| logos | ✓ one line, band 86 | ✓ band 202 (orig 208), headline 860 wide (orig 985: shorter words) | ✓ | — (width follows the copy) |
| chat | ✓ | ✓ 585 | ✓ | — |
| testimonials | ✓ | ✓ quotes 5 lines | — | — |
| footer | ✓ link pitch 35 | ✓ pitch 30, columns at 790/1010/1205 (orig 754/1000/1200) | reveal ✓ | — |

Re-theme check: `granola-chat` and `granola-testimonials` under `sample-ember` (light) keep their
layout and pick up ember's colours and faces (green band, cream box, charcoal-brown band).

Still different, by choice: Newsreader is a touch more contrasted than Quadrant; every media slot
(app window, art cards, call strip, step demos, portraits, feature shots, closing backdrop) is a
plain placeholder; motion inside those demos (typing notes, "enhancing" sweep, audio bars) is not
rebuilt; the footer reveal is desktop-only (on phones the footer is taller than the window).
