# instituteofhealth — recreation notes

Source: https://instituteofhealth.com/ (landing page only; captured in advance, `precapture.json`
lists no other pages and none were asked for). Fictional stand-in: **Calder Academy**, a school
that trains practitioners in clinical nutrition and lab interpretation.

## Design language

- **Palette:** greyscale paper. Page `#f1f1f1`, a darker band `#e6e6e6` for the course,
  about, testimonial and FAQ sections, white `#fff` for the active cards, `#d9d9d9` square icon
  buttons (hover `#c7c7c7`), ink `#242424` for text and the filled buttons, `#6d6d6d` for quiet
  labels and the button hover border. The only colour comes from the media: a blood-red macro
  video behind the pinned story and the closing CTA. Footer is a `#242424` slab with a huge
  `#575757` wordmark.
- **Type:** one neo-grotesk (Lay Grotesk) at weight 500 almost everywhere, 400 for long
  paragraphs. Large headings sit at line-height ~1 with slightly tight tracking; small text
  (12–15px) is dense and tight (−0.018em). The site scales its rem: 1440 sizes are 57.6 / 50.4 /
  44.6 / 33.1 / 24.5 / 16.6 / 13 / 12.2px; 390 sizes are 39.8 / 33.2 / 27.3 / 23.4 / 17.6 /
  15.6 / 14px.
- **Spacing:** 32px side gutter at 1440, 16px at 390; sections breathe with ~90–100px of
  vertical padding at 1440, ~56px at 390. Layout is full-bleed (content runs gutter to gutter),
  often a 50/50 split with the right half starting at the page centre (x = 720).
- **Shapes:** small radii: 4–5px buttons, 6px images, 10px card frames (16px on phones), round
  social buttons and step counter. Borders are hairlines `rgba(36,36,36,.25)`.
- **Depth:** none. No shadows anywhere; hierarchy comes from white vs grey surfaces and opacity
  (inactive slides at 45%, inactive thumbnails at 65%).
- **Buttons:** a signature shape: a wide rectangle (≈244×65 at 1440) with the label top-left and
  a small ↳ arrow bottom-right. Dark, light and glass (white 15% + white 45% border) variants;
  hover lightens the 2px border to `#6d6d6d` over 0.45s.

## Type

| Original | Classification | Ours | Why |
|---|---|---|---|
| Lay Grotesk 400/500 | neo-grotesk sans, normal width, large x-height, closed apertures, tight default spacing | **Hanken Grotesk Variable** (`@fontsource-variable/hanken-grotesk`, already installed) | closest open neo-grotesk on width and x-height, with the same plain, slightly condensed-feeling rhythm at 500; not a default face |
| "IOH" serif logo | high-contrast serif wordmark | plain wordmark in Hanken Grotesk | logos are never copied; the theme has one family |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | nav | `instituteofhealth-header` | 64px / 60px bar | fixed top bar: wordmark left, "Menu" + two-line burger right; transparent with light text over the hero, page-grey after it | fixed **bottom** bar (`#f1f1f1`, 60px): wordmark left, 5 centred links, 2 links + dark "Student login" button right | – | hides while scrolling down, back on scroll up (translateY) |
| 1 | hero | `instituteofhealth-hero` | **100svh**, pinned | video full-bleed under a dark gradient; one stat at the top under a 2px progress line (label, number, "•••" dots); headline + sub + glass "Learn more" button at the bottom | same video; three stats stacked top-right (each under a 2px rule), headline bottom-left | video 100svh, cover | sticky: the next section slides over it; stats count/cycle (mobile: one at a time, progress line fills 1.5s) |
| 2 | courses carousel | `instituteofhealth-courses` | content (≈1030px) | 33px headline, dark "All courses" button; one card ~350 wide, centred, neighbours peek | 50px headline left (≈780 wide), button; 314px cards 40px apart, active one centred and white | card images 282×259 (1440) / 319×242 (390), radius 6 | autoplay slide (translateX), inactive cards 45% opacity, info box rises 16px + fades in |
| 3 | tabbed features | `instituteofhealth-features` | content (≈1047px) | centred 33px heading, thumbs column + tall image, tab pill full-width, centred text, button | centred 50px heading; left: tab pill (prev / label / next) + 33px heading, body, button; right half: 4 thumbs (72×89) + main image 608×720 | main image + 4 thumbs | autoplay through tabs; text lines blur + rise 10px in; thumbs 65% → 100% when active |
| 4 | pinned story | `instituteofhealth-story` | ≈5.4 windows, inner **100svh** pinned | same as desktop, narrower text | full-bleed red macro media, step counter circle top-centre, three progress bars bottom-centre, white centred statements | background media 100svh | pinned; media scales 1→1.3 and drifts 45px; statements blur/rise in (14px) and out (−14px); tags float in; counter 1→3; bars fill |
| 5 | about split | `instituteofhealth-about` | content (432px) | stacked: heading, chips, rule, paragraph, button | two halves split by a hairline: heading + chips (bottom) / 24px paragraph + "About us" button (bottom) | – | – |
| 6 | testimonials reel | `instituteofhealth-testimonials` | content (≈1023px) | eyebrow, 3-line 23px heading, one card + peek, line, centred arrows | eyebrow, 50px centred heading, 385×518 cards in a row bleeding right, progress line left + arrows right | video per card (365×488, radius 6), avatar per card | horizontal scroll, progress line follows, arrow hover |
| 7 | FAQ | `instituteofhealth-faq` | content (530px) | heading, accordion, help text, full-width button | heading + help + button left; accordion in right half | – | plus button turns to ×, answer opens |
| 8 | closing CTA | `instituteofhealth-cta` | **100svh** (390) / ~128svh (1440) | small text top, 40px heading centred, light full-width button | small text top, 76px heading centred, light button 346 wide | background video full-bleed | – |
| 9 | footer | `instituteofhealth-footer` | content (≈914px) | wordmark, two link columns, contact, social circles, giant wordmark, bottom line | wordmark left, columns from the centre, social circles right, giant wordmark fills the width, bottom line | – | links fade to 65% on hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll direction | bar slides out (translateY 100% / −100%) on scroll down, back on scroll up | 0.4s ease | small scroll listener, `hydrate: load` |
| header (390) | scroll position | transparent + light text over the hero → page-grey bar with ink text | 0.4s | same listener (past one window height) |
| hero | pinned | hero stays while the course band slides over it | – | `position: sticky; top: 0` on the hero, the page wraps everything after it in a `relative z-10` layer |
| hero stats | loop | numbers tick to a new value, dots pulse; on phones one stat at a time with a 2px line filling (width 1.5s ease-in-out) | ~4.5s cycle | React state cycling the stat + CSS keyframes for the line and the dots, `hydrate: load` |
| hero | load | headline, sub, button rise in | 0.8s ease-out | CSS keyframes, fill both |
| courses | loop (timed) | track slides one card (translateX); active card white + full opacity, others 45% | 0.8s ease, every 4s | React state + CSS transition, `hydrate: visible` |
| courses | slide change | "Units" bar and overview box: opacity 0→1, rise 16px→0 | 0.55s ease | keyed element + CSS keyframes |
| features | loop (timed) / click | tab label, image and text swap; thumbs 65%→100% + ring | ~6s | React state, `hydrate: visible` |
| features | slide change | text lines: opacity 0→1, rise 10px→0, blur 6px→0, staggered | 0.8s ease-out | keyed elements + CSS keyframes with delays |
| story | pinned | 100svh stage stays while the 5.4-window section scrolls | – | sticky stage inside a tall wrapper |
| story | scrubbed | media scale 1→1.3, translateY 0→45px | whole pin | `animation-timeline: --story` (named view timeline), `contain` range |
| story | scrubbed | statement lines blur + rise in (14px), hold, rise out (−14px) | per step range | same timeline, ranges per step |
| story | scrubbed | tags float in (20px) and out, then the final statement fades in | step 3 | same timeline |
| story | scrubbed | counter 1→2→3, progress bars fill one by one | per step | same timeline (opacity swaps, scaleX) |
| testimonials | user scroll | progress line fills with the reel's horizontal scroll | – | `scroll-timeline` on the track, `timeline-scope` on the section |
| testimonials / features | hover | arrow buttons `#d9d9d9 → #c7c7c7` | 0.4s ease | Tailwind transition |
| buttons | hover | 2px border `#242424 → #6d6d6d` | 0.45s ease | Tailwind transition |
| footer / links | hover | opacity → 0.65 | 0.4s ease | Tailwind transition |
| faq | click | plus rotates to ×, answer shows | 0.4s | native `<details>`, CSS rotate |

Not rebuilt: Lenis smooth scrolling (the capture lists it, but the scroll frames show nothing that
depends on it; left out to keep the page light — suggestion only). Motion inside the videos.

## Media slots → placeholders

| slot | size | placeholder |
|---|---|---|
| hero video | full-bleed, 100svh, cover | `bg-muted-foreground` surface under the same dark gradient overlay |
| course card images | 282×259 (1440), 319×242 (390), radius 6 | `bg-muted` box in the card, same ratio |
| feature main image | 608×720, radius 6 | `bg-muted` box |
| feature thumbnails | 72×89, radius 4 | `bg-muted` boxes |
| story background | full-bleed, 100svh, scaled 1→1.3 | soft radial gradient from `highlight` to `glow`, dark overlay |
| testimonial videos | 365×488, radius 6 | `bg-foreground` (they read as black frames until played) |
| testimonial avatars | 44px circles | `bg-muted` circles |
| CTA background video | full-bleed | gradient from `highlight` into near-black |

## Decisions

- **Desktop nav at the bottom.** The capture places the 1440 nav as a 60px bar docked at the
  bottom of the window (seen above the footer in the full-page image and at the bottom of the CTA
  crop); phones get a top bar. Built that way.
- **Hero pin.** The original pins the hero under the course band (GSAP). Ours: sticky hero +
  the page wraps later sections in `relative z-10`, so the courses band slides over it.
- **Story fallback.** Without scroll-driven animation support (or with reduced motion) the story
  shows its three statements stacked in place over the media, no pinning.
- **Lenis skipped** (see above).
- **Wordmark:** "CALDER" in the display face; footer giant text "Calder Academy".

## Comparison round 1

Captured with a private copy of `capture.mjs` (in the git-ignored `tools/claude-batch/runs/`)
that stubs out Vite's HMR websocket: other sessions editing the repo made the shared gallery
hot-reload mid-capture and the stock script kept failing with "execution context destroyed".

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | top bar matches (wordmark, Menu + two lines, see-through over hero) | bottom bar matches; at scroll 0 it covered the hero's button | slides out on scroll down (translateY 0→100%), back on scroll up | hero padding fixed (below) |
| hero | 844 = window, stat line + one stat, headline/sub/glass button at the bottom: matches | stats column matches (rules, 36px figures, dots); glass button hidden under the bottom bar | pinned (sticky) ✓, counters, dots loop, load rise ✓ | yes: `lg:pb-[5.75rem]` so the content clears the bar |
| courses | 833 vs 833 ✓, card + peeks, bar, overview box ✓ | 1039 vs 1027 ✓, centred white card, 45% neighbours, bar and box ✓ | track translateX, 0.45 opacity, box rise 16px ✓ | – |
| features | 1015 vs 1023 ✓; heading wrapped to 3 lines (original 2) | 1048 vs 1047 ✓, pill, text, thumbs + 608×720 image ✓ | tab swap with blur-rise 10px ✓, thumbs 0.65 → 1 ✓ | yes: wider phone heading |
| story | 4642 vs 4844 (shorter pin) | 4950 vs 4900 | pinned ✓, media scale 1→1.3 + 45px ✓, lines ±14px blur ✓, tags ±20px ✓, counter, bars ✓ | yes: 575svh on phones, 545svh from 1024px |
| about | 505 vs 541: chips sit too close under the heading | 432 vs 432 ✓, divider, chips, paragraph, button ✓ | – | yes: bigger phone gap |
| testimonials | 804 vs 805 ✓ | 1037 vs 1023 ✓, cards, mute badge, name chip, line + arrows ✓ | reel scroll + progress line; arrow hover #d9→#c7 ✓ | – |
| faq | 633 vs 616 ✓ | 534 vs 530 ✓ | plus → × on open | – |
| cta | 100svh ✓ | 128svh (original 1215px incl. the 60px bar) ✓ | – | – |
| footer | giant name overflows the right edge | giant name overflows (“Calder Acaden…”) | link hover 0.65 ✓ | yes: 13.3vw / 13.8vw |
| fonts | Hanken Grotesk is a touch rounder and wider than Lay Grotesk; scale and weights match | same | – | accepted (closest open face) |
| overflow | 360 / 768 / 1024 fit ✓ | | | |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | headline block now clears the docked bar (button bottom at 808, bar from 840) | ✓ | – |
| features | 962 vs 1023: the gap is copy length (our tab text is 2 + 2 lines, the original's 3 + 4); spacing matches | ✓ | ✓ | accepted (content) |
| story | 4853 vs 4844 ✓ | 4905 vs 4900 ✓ | all rows ✓ | – |
| about | 527 vs 541 ✓ | ✓ | – | – |
| footer | giant name fits 16→372 | fits 32→1386 (original 32→1408) | ✓ | – |
| phone stage | under mobile emulation `svh` is the 633px small viewport, so the story stage and CTA measure 633 while the window is 844; the original uses the full height. `svh` kept on purpose (no jump when the browser bar hides) | – | – | accepted |

Motion check against the original's list: pinned hero ✓, pinned story ✓, scrubbed media scale
1→1.3 + 45px ✓, statement lines ±14px with blur ✓, tags ±20px with blur ✓, step counter and
bars ✓, carousel translateX with 45% neighbours ✓, overview box rise 16px ✓, tab text blur-rise
10px ✓, thumbnails 65% → 100% ✓, header translateY on desktop ✓, hovers (button border
→ grey 0.45s, icon buttons darker 0.4s, links → 65% 0.4s) ✓. No horizontal overflow at 360,
768 or 1024.

Re-theme check: `instituteofhealth-courses` under sample-ember (light),
`instituteofhealth-faq` under sample-ember (dark) and `instituteofhealth-features` under
sample-midnight (dark, 390) all pick up the other theme's fonts, colours and radii and stay
legible.

Stopping here: section by section the pairs read as the same page apart from copy and the
media placeholders, which sit in the same place at the same size and shape.
