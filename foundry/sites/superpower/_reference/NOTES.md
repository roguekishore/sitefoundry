# superpower — recreation notes

Original: https://superpower.com/ (captured in advance, 2026-10-21; landing page only, no other
pages asked for). Our fictional company: **Kestrel**, a yearly blood-testing health membership
with an AI guide called **Wren**. All names, numbers, quotes and institutions are invented.

## What the capture could and couldn't show

- A full-window **"new member benefit" popup** covers every 1440 frame and most 390 frames
  (including the fold). The hero underneath ("Your new health membership", a full-window
  video) is never visible: its layout is **inferred** from its measured box (390: 100% of the
  window, full-bleed video; 1440: starts under an 82px header, 818px tall, video 1425×810, so
  the video sits inset ~8px with rounded corners) and from the closing band, which shares its
  voice (rating line, large white heading, fact row, pill buttons).
- The popup itself is well captured, so it is recreated as its own block
  (`superpower-offer`) but **not placed on page.tsx** (it would cover our own captures, and a
  load-time popup is behaviour, not landing-page design). It can be used inline or as an overlay.
- A cookie banner covers the bottom of the 390 scroll frames; ignored.
- The 1440 section crops are taken from a full-page shot where the pinned tour (section 4)
  collapses: crops 05/06 are offset/blank. Matched by content instead.

## Design language

- **Palette:** clinical zinc greys on white. Text zinc-900 (#18181b), secondary text zinc-500,
  tertiary zinc-400, hairlines zinc-200. White page, zinc-50 bands (testimonials, alternating
  table rows, stat card), zinc-100 soft fills (accordions, plus buttons). Buttons are near-black
  pills (#111); the brand vermillion (#fc5f2b, hover #f7861e with an orange glow) is the CTA
  colour of `.button` and appears sparingly. Photography bands are warm and dark (amber, brown),
  with white type on them.
- **Type:** one grotesk at weight 400 for everything, headings included (no bold headings),
  slightly negative tracking. 1440: 56px display (doctors, membership, closer, price), 45px
  section titles, 30px step titles and stat figures, 22px card titles, 17px lead, 15px body,
  13px small. 390: 40px (membership), 32px (How it works, closer, stats, price), 24px for most
  section titles, 16/14/12 body. Line height ~1.2 on headings, ~1.45 on body. A mono for
  step numbers (01–04).
- **Spacing:** 120px side margins at 1440 (1200px content), 24px at 390. Sections breathe:
  ~90–120px top padding at 1440, ~45–50px at 390.
- **Shapes:** 12px radius on media and cards, 8px on small media and thumbnails, 4–6px on
  number badges and plus buttons, full pills for every button and tab. 24px on the big
  membership image.
- **Depth:** flat. Soft drop shadow only under the active step pill; dark frosted glass
  panels over photos (accordions in the tour, the popup's last option, the closer's second
  button).

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| NB International Pro (400, 700) | neo-grotesk with geometric rounds, normal width, large x-height, open apertures | **Hanken Grotesk Variable** (OFL, already installed) | same normal width and large x-height, round geometric o/c/e with grotesk terminals; reads the same at 400 for big headings |
| NB International Mono Pro | geometric mono | **DM Mono** (OFL, already installed) | low-contrast geometric mono that pairs with the grotesk; only used for 01–04 |
| Society / Squarepeg / adelle-sans | loaded, not seen on the landing page | — | not used |

No new packages were added.

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | header | `superpower-header` | 72px / 82px | white bar: wordmark, dark pill CTA, 3×3-dot menu button | wordmark left; links + dark pill CTA right; wordmark large at top, shrinks to 75% after 450px scroll | — | fixed; logo scale scrubbed by scroll |
| 1 | hero | `superpower-hero` | **100svh** / **calc(100svh − 82px)** (inferred) | full-bleed media, header over it, heading + CTA at bottom | media inset 8px, 12px radius, text bottom-left | video → placeholder (fills window, cover) | load-in fade/rise (inferred) |
| 2 | credentials | `superpower-credentials` | content (279 / 163) | avatar stack, 2-line line, institutions 2×2 | one row: avatars + line, 4 institutions in a row | 3 avatars 32px round | — |
| 3 | how it works | `superpower-steps` | content / **88svh** | centred title, 4 stacked cards (media 1.5:1) with centred text | centred title, 4 cards in a row, square media, left text | 4 images, radius 12 | cards fade + rise 22px, staggered, on entering view |
| 4 | tour (pinned) | `superpower-tour` | **289svh / 300svh**, sticky 100svh panel | pills, title, body, soft accordions, media 374×314 at bottom | copy column left (45px in), glass accordions at the bottom, media fills the window behind | 4 visuals (fill window at 1440) | pinned; step changes by scroll: copy cross-fades, visual wipes in (clip-path) + scale, active pill widens (0.75s) and others dim to 0.65 |
| 5 | included | `superpower-included` | content (975 / 869) | centred intro, rows with detail below | 600px table, two columns, alternate rows tinted | — | rows fade + rise 12px, staggered |
| 6 | doctors | `superpower-doctors` | content (490 / 626) | title 24px, institutions row, horizontal scroller of 2-row columns (photo 68px + name + role) | title 56px, horizontal row of wide cards: photo 206×248 + institution, name, role, bio, link; hairlines between | photos | horizontal scroll (touch/trackpad) |
| 7 | stories | `superpower-stories` | content (825 / 1006) | rating, title, sub, slides 324 wide, segmented progress + counter | same, slides 645×300, hairlines between, others at 50% | slide images radius 8 | autoplay carousel: track slides (0.75s ease-in-out), active segment widens and fills over time, others dim to 0.5 |
| 8 | voices | `superpower-voices` | content (530 / 771) | title, horizontal row of 352px cards | title 45px, row of 394px cards (portrait, wide, stacked short card + quote card), round arrow buttons | card images/videos | horizontal scroll, arrows |
| 9 | membership | `superpower-membership` | content (1753 / 1353) | gallery, then rating, title 40px, price, checklist, CTA, facts, footnotes, stats card, FAQ | two columns: sticky gallery (main + 7 thumbs) left, the rest right | main image + 7 thumbnails | thumbnail swaps the main image; FAQ expands |
| 10 | closer | `superpower-closer` | content (512 band / ~700 above footer) | media band 512px with text; footer below on its own | media runs behind the footer card, text top-left | photo/video → placeholder | — |
| 11 | footer | `superpower-footer` | content | zinc-50 page, wordmark, newsletter, 2-col links, app box, legal stacked | white 12px-radius card inset 22px over the closer's media | QR code box | — |
| – | popup | `superpower-offer` | **100svh** | centred badge, heading, 5 full-width option pills, facts | content in the right half over a full-window photo | full-window photo | fade in (opacity 0→1) |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scrubbed (0→450px scroll) | wordmark scale 1→0.75 (desktop) | linear with scroll | CSS `animation-timeline: scroll()` with `animation-range: 0 450px` |
| header | hover | links colour to zinc-700, CTA bg lightens | 0.2s ease | Tailwind transitions |
| hero | load | heading, text, buttons fade + rise (inferred) | 0.8s ease, staggered | CSS keyframes, fill both |
| steps | entering view | cards opacity 0→1, rise 22px, stagger | over ~450px | `superpower-reveal` (view timeline, fixed px range, step offsets) |
| tour | pinned | whole panel holds for 3 screens | — | sticky panel in a 300svh wrapper |
| tour | scrubbed (step index from progress) | copy opacity 1→0 / 0→1; visual clip-path wipe + scale 0.96→1 + blur off; pill label grows (flex-grow 0.75s cubic-bezier(.45,0,.55,1)), inactive pills 0.65 | 0.6s ease (copy), 0.75s (pills, visual) | `motion/react` `useScroll` → active step state; CSS transitions do the rest; `hydrate: visible` |
| tour | loop | notification card + tap ring inside the device mock-up (4.2s, 1.2s) | — | **skipped**: it lives inside the product screenshot (media) |
| included | entering view | rows opacity 0→1, rise 12px, staggered (11 rows) | ~450px | `superpower-reveal` |
| stories | time (autoplay) | track translateX by one slide; active slide 0.5→1, others 1→0.5; active progress segment widens and fills | slide 0.75s ease-in-out, opacity 0.4s, ~6s per slide | React state + interval (paused under reduced motion, on hover and off-screen); CSS transitions and a keyframe fill; `hydrate: visible` |
| buttons | hover | primary: bg to vermillion-700 + orange glow; dark: bg to zinc-800; light: bg to zinc-50 | 0.25s cubic-bezier(.4,0,.2,1) | Tailwind transitions in `superpower-button` |
| doctors | hover | "Learn more" link and arrow icons: opacity 0.8, rise 2px | 0.2s | Tailwind transitions |
| accordions | click | panel opens, plus turns | 0.25s ease | `<details>` + CSS (no JS) in `superpower-accordion` |
| popup | load | overlay fades in 0→1 | 0.6s ease | CSS keyframes (overlay mode only) |

## Media slots → placeholders

All become `superpower-media`: a token-coloured surface (`bg-muted`, or on the dark bands a warm
gradient from `highlight`/`glow` into the dark background) at the original's size, ratio and
radius. Every slot is a `ReactNode` prop so a real `<img>`/`<video>` can fill it.

- hero video (full window) · 3 credential avatars · 4 step images · 4 tour visuals (full window
  at 1440, 374×314 card at 390) · 5 story images · 7 voice cards (+1 short) · doctor photos ·
  membership main image + 7 thumbnails · closer band · footer QR box · popup photo.

## Decisions

- Light is the faithful mode. Photo bands (hero, closer, popup) force `.dark` on themselves so
  their text stays light over the dark placeholder in either mode and any theme.
- Section padding token `--section-y` = 6rem (desktop); phones use `py-12` explicitly, as the
  original roughly halves it.
- `--page-width` 78rem with a 1.5rem gutter = 1200px of content at 1440, as measured.
- The press/customer logos (universities, publications) become plain-text names of fictional
  institutions in varied type, passed as ReactNode marks from the demo.
- The App Store badge becomes a plain "Get the app" pill with a lucide icon; the "Ask AI" logo
  row becomes generic lucide icons.
- The stories carousel doesn't loop with clones (the original duplicates slides); it rewinds
  to the first slide after the last.
- The voices row is a native horizontal scroller with arrow buttons; the original starts it
  part-scrolled (a card cut at the left edge), ours starts aligned to the content edge.

## Round 1 (first capture of ours)

Window-sized checks pass: hero 100% (390) / 91% (1440), tour 289% / 300%. Motion list shows
every inventory row: header logo scale 1→0.75 at 450px, step cards rise 22px, tour pinned with
clip-path wipes, scale/blur and pill opacity 0.65, included rows rise 12px, stories track
translateX with 0.5↔1 slide opacity, hero load-in keyframes.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ok | inset gap showed the dark band colour, not the page | ok | yes: only the inner frame is `.dark` |
| credentials | 315 vs 279 tall; a mark wrapped to three lines | 190 vs 163 | — | yes: tighter padding, marks nowrap |
| tour | tab pills had a wide gap after the number (grid `auto` track stretched) and the 4th label was cut | same | wipes invisible on identical placeholders | yes: label opens by max-width; shorter tab; a soft glow placed differently per step |
| doctors | ok | headline wrapped to 3 lines (692 vs 626 tall) | — | yes: wider measure |
| stories | 740 vs 825 tall | ok | ok | yes: more padding on phones |
| voices | cards read as heavy dark slabs | same | — | yes: placeholder stays light, only the caption fade is dark |
| membership | stat figures not top-aligned; rating line wrapped | ok | — | yes |
| closer | headline 3 lines vs 2 | same | — | yes: wider measure |
| footer | ok | link rows 38px vs 34px apart | — | yes |
| overflow | 360/768 fit | 1024 overflowed by 11px (membership's fixed 660px column) | — | yes: minmax columns (membership, footer) |

## Round 2

capture.mjs could not finish (15 tries, each killed by gallery reloads from the other sessions
editing the repo), so this round used a smaller script in /tmp (playwright: section heights,
scrollWidth at 360/768/1024/1440, one frame per section at 390 and 1440, retried step by step).
Motion was already verified in round 1 and wasn't touched apart from the tour tabs.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 844 = window ✓ | inset 8px frame on the white page, 818 ✓ | load-in ✓ | — |
| credentials | 295 vs 279 | 170 vs 163 | — | close enough |
| steps | 1705 vs 1697 | 792 vs 790 (88svh) | rise 22px ✓ | — |
| tour | 2439 vs 2442 | 2700 = 300svh | tabs open by width, wipe visible ✓ | — |
| included | 952 vs 975 | 919 vs 869 | rows rise 12px ✓ | left: our headline is a little wider |
| doctors | 452 vs 490 | 629 vs 626, two-line headline ✓ | — | — |
| stories | 780 vs 825 | 991 vs 1006 | autoplay ✓ | — |
| voices | 542 vs 530 | 782 vs 771 | — | — |
| membership | 1820 vs 1753 | 1493 vs 1353 | — | left: our FAQ rows and checklist run a few px looser; not worth another round |
| closer + footer | 2093 vs 1915 | 1439 vs 1566 | — | desktop headline left an orphan word: narrower measure (fixed) |
| overflow | 360 ✓ 768 ✓ | 1024 ✓ | — | — |

Re-theme check: superpower-membership under sample-ember (light) and superpower-steps under
sample-ember (dark) both render correctly with that theme's colours, font and radius.
