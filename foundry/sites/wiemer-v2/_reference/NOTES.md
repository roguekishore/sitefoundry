# wiemer-v2 — recreation notes

Original: https://www.wiemer.store/ (Webflow, GSAP + ScrollTrigger + SplitText, Lenis).
Captured in advance (precapture.json). Pages asked for: landing, `kontakt`, `warteliste`, `agb`.
**`agb` is skipped**: it isn't in the site's links and `/agb` answered 404 at capture time.

Our fictional company: **Ostrand**, a small Bremen workshop making furniture from brushed
steel and anodised aluminium plates; first product the **Ilse** side table / shelf. All
copy is ours (English), no logos (lucide `Grip` icon + plain wordmark), media are placeholders.

## Design language

- **Palette (light, faithful):** off-white page `#fbfbfb`, a second flat grey band `#f2f2f2`
  (waitlist, footer, image cards), near-black ink `#121212`, one loud orange `#fe6f2d`
  (the specs band, the mobile header bar, the "coming soon" tags as orange-on-orange/20),
  and a utility blue `#0171e3` used only for form buttons and required asterisks.
  Pale grey `#b0b0b0` for footer column headings and placeholders, `#e5e5e5` for the
  perforation dots. Hairlines are ink at 10–20 %.
  → tokens: background `#fbfbfb`, muted/accent `#f2f2f2`, secondary `#e5e5e5`,
  foreground `#121212`, muted-foreground `#b0b0b0`, **highlight = orange** (foreground ink
  on it), **primary = blue**, card = pure white (inputs, the photo label chip).
- **Type scale (desktop is viewport-fluid):** display 9vw (129.6 px at 1440) / 1.1, hero
  wordmark 12.5vw (180 px) / 0.9, subheads 1.6vw (23 px) / 1.2, body 1.2vw (17.3 px) / 1.3,
  UI 15 px, mono tags 12 px uppercase. Phones: display 64 px, subhead 20 px, body 16 px.
  Weight 500 for display and subheads, 400 for body. Tight tracking on display (−1 px).
- **Spacing rhythm:** 40 px gutters at desktop (header 32 px), 24 px on phones; sections
  open with ~112 px (7 rem) of top space on desktop, 48 px on phones; long empty fields
  between heading and text (the intro's text sits in the right third, ~240 px lower).
- **Grid:** a 3-column feel: running text always starts at the last third (x = 957 at 1440,
  i.e. `lg:col-start-3` of 3), headings start at the left gutter or are centred.
- **Shapes and depth:** flat. Cards 14 px (10.5 px on phones), thumbnails/price box 7 px,
  inputs/tags 5–6 px, circle arrow buttons. No shadows except a 4 px/16 px 5 % one on the
  cookie banner (not rebuilt). Depth comes from photography and parallax.

## Type

| Original | Kind | Ours | Why |
|---|---|---|---|
| Neue Montreal (300–600) | neo-grotesk sans, normal width, large x-height, flat terminals, slightly squarish bowls | **Instrument Sans Variable** | the open neo-grotesk closest in width, x-height and its slightly condensed, crisp rhythm; not Inter/Geist |
| Supply Mono 400 | monospaced grotesk with squarish forms, used tiny and uppercase for tags/tabs, and for the prices | **DM Mono** (300/400/500) | an open mono with the same low-contrast geometric build; reads alike at 12 px uppercase |

## Section map (landing)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | header | `wiemer-v2-header` | 72 px fixed bar | orange bar, wordmark left, "join" link + circle arrow right | transparent over the hero, white text; turns solid off-white once past the hero | – | hides on scroll down (−96 px), back on scroll up; transparent → solid |
| 1 | hero | `wiemer-v2-hero` | **window: 100svh (390), 150svh (1440)** | full-window photo only | photo; giant white wordmark centred at the top + 2-line subline; at the bottom a white hairline, a 2-line caption left and the promo card right | 1 full-bleed photo (cover), promo thumbnail 164² r7 | photo parallax drift (scrubbed, ~140 px down) |
| 2a | intro | `wiemer-v2-intro` | content | tag, 2-line display heading, subhead + 4 paragraphs + link, all stacked | tag + heading top-left; text block in the right third, ~110 px below | – | heading chars rise 1.2em + fade, staggered; subhead chars rise; paragraphs rise 25 px |
| 2b | parts rail | `wiemer-v2-rail` | content (card height) | row of 215×268 grey cards, first cut at the left | row of 475×594 grey cards r14, gap 14 | 12 product cut-out cards → grey placeholders | track drifts right while the page scrolls (scrubbed) |
| 3 | waitlist | `wiemer-v2-waitlist` | content | grey band; centred tag, heading, paragraph; form card full width | same, then a 12-column field of grey perforation dots behind the centred 478 px form card | – | heading chars rise; dots darken under the pointer and fade back |
| 4 | video | `wiemer-v2-video` | content: 9:16 (390), 16:9 (1440) | full-bleed | full-bleed | 1 looping video → placeholder | – (motion is inside the video) |
| 5 | about | `wiemer-v2-about` | content | photo first (2:3, r10), then heading, subhead, paragraphs, link | heading top-left; text left (≤445 px) centred against a 443×664 r14 photo in the right third | 1 portrait photo with a mono label chip | heading chars rise; text rises; photo parallax ±46 px |
| 6 | photo band | `wiemer-v2-hotspots` | 2:3 (390); **115svh (1440)** | full-bleed photo with 3 white "+" hotspots | same | 1 full-bleed photo | hotspot hover: scale 1.1 + rotate 45°, 0.3 s; click opens a detail card |
| 7 | specs | `wiemer-v2-specs` | content | orange band; centred heading; tab pill (wraps); measured drawing; info text; spec table | same, drawing 696 px wide centred, info left 2/3, table in the right third | 1 drawing per tab → bordered placeholder with dimension rulers | heading chars rise; text rises; tabs: dark pill slides to the chosen tab |
| 8 | footer | `wiemer-v2-footer` | content | grey band; wordmark, tagline, promo card (no thumbnail), 3 link lists stacked, © lines | wordmark left + tagline right third; 3 link columns + promo card; © row | promo thumbnail 164² | link hover: underline grows from the left, 0.2 s |

### kontakt page

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| – | header | `wiemer-v2-header` (solid) | 72 px | off-white bar with bottom hairline | same | – | hides on scroll down |
| 1 | contact form | `wiemer-v2-kontakt-form` | content | grey band, tag, heading (40 px), one line, form card | heading 4vw, dot field behind a 414 px form card | – | dots hover |
| 2 | photo band | `wiemer-v2-hotspots` (no hotspots, 3:2) | 2:3 (390), 3:2 (1440) | full-bleed photo | full-bleed photo | 1 photo | parallax drift (−81 → 39 px) |
| 3 | footer | `wiemer-v2-footer` | | | | | |

### warteliste page

`wiemer-v2-header` (solid) → `wiemer-v2-waitlist` → `wiemer-v2-footer`.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll direction | translateY 0 → −100 % on scroll down, back on scroll up | ~0.4 s | React scroll listener toggling a class; CSS transition (`hydrate: load`) |
| header | scrolled past the hero | transparent/white text → solid off-white/ink | instant | same listener (overlay variant only) |
| hero photo | scrubbed | translateY ≈ −30 → +113 px over the hero's trip | linear | CSS `animation-timeline: view()`, `cover` range, on an oversize placeholder inside an `overflow-clip` frame |
| display headings (intro, waitlist, about, specs) | entering view | each char: opacity 0→1, translateY 1.2em→0, inside a line clip, staggered left→right | ~0.45 screen | `wiemer-v2-split-heading`: chars split at render, a named view timeline on the heading (bottom inset 15 %), per-char `entry` range offset |
| subheads | entering view | chars rise 30 px + fade | | same component, small size |
| paragraphs | entering view | each line rises 25 px inside a line clip | | per-paragraph rise 25 px + fade (`wiemer-v2-reveal`), lines aren't split (needs JS measuring) |
| tags, links | entering view | opacity 0→1 | | `wiemer-v2-reveal` fade |
| parts rail | scrubbed with the whole page | translateX moves right (≈0.22 px per px scrolled) | linear | CSS view timeline on the rail, `cover` range, translateX −22rem → 0 (−6rem on phones) |
| about photo | scrubbed | inner image translateY −46 → +46 px | linear | `wiemer-v2-reveal` drift on the placeholder inside an `overflow-clip` frame |
| photo band (kontakt) | scrubbed | translateY ≈ −80 → +40 px | linear | same drift |
| circle-arrow links | hover | arrow turns (rotate + scale 1.1), circle fills | 0.3 s cubic-bezier(.38,.005,.215,1) | Tailwind `group-hover:` transition |
| hotspots | hover / click | scale 1.1 + rotate 45°; opens a detail card | 0.3 s same curve | Tailwind hover; the card is a native `popover` (no JS) |
| footer links | hover | underline scaleX 0 → 1 from the left | 0.2 s | Tailwind `after:` + `group-hover` |
| perforation dots | pointer | dot darkens instantly, fades back | ~0.6 s | per-dot `hover:` with `duration-0` in, `duration-700` out |
| specs tabs | click | dark pill slides to the active tab | 0.3 s | React state + measured ghost with CSS transition (`hydrate: visible`) |
| page | wheel | Lenis smooth scrolling | | `wiemer-v2-smooth-scroll` (lenis, `hydrate: load`) on each page |
| hero/fold text | – | capture says hero text 1 → 0 at 872 px; the scroll frames still show it at ~1100 px | | skipped: the frames contradict it, treated as a sampling artefact |

Not rebuilt: the cookie banner (site chrome, not design), the page-transition overlay, the
draggable behaviour of the rail (only its scroll drift).

## Media slots → placeholders

- hero photo (full window, cover) → `bg-muted` surface with a soft highlight/glow wash, drifting.
- promo thumbnail 164² r7 → `bg-muted` square.
- rail cards 475×594 (4:5) r14 → `bg-muted` cards.
- video 16:9 / 9:16 → `bg-muted` band.
- about portrait 2:3 r14 → `bg-muted` with the label chip kept (chip is layout).
- photo band 115svh / 2:3 → `bg-muted` with soft wash; hotspots kept (UI chrome).
- spec drawings (409×304 mm plate etc.) → bordered `bg-foreground/5` box at the drawing's
  aspect, dimension rulers kept (they're layout and take their labels as props).
- hotspot detail image 421×316 r7 → `bg-muted`.

## Decisions

- `--page-gutter` and `--section-y` change at `lg` inside the theme (24 → 40 px, 3 → 7 rem),
  so blocks just use `px-gutter`/`py-section`.
- `--radius: 10px` gives sm 6 (tags/inputs), md 8 (thumbnails), lg 10 (phone cards),
  xl 14 (desktop cards).
- On phones the original hero shows only the photo (no wordmark, caption or card); we follow
  that by default, and the hero has a `textOnPhones` prop to show them.
- The perforation dot field is decorative pattern, not product art: built as real dots.
- Scroll entrances end on `entry …%` (reachable even for a last section), parallax uses `cover`.
- Headings: words stay whole (inline-block), so lines wrap at spaces as normal text.

## Round 1 (ours vs original, landing + kontakt + warteliste)

Section crops of ours show scroll reveals in their pre-state (the crop is taken with those
sections below the window; CSS scroll-driven reveals sit at their start until scrolled to),
so content was compared on the scroll frames.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | orange bar, wordmark, link: matches | transparent with light text over hero: matches; hides on scroll down | hide −100 % (orig −96 px) | – |
| hero | photo-only, 100svh: matches | 150svh ✓; subline wrapped to 3 lines (orig 2) | drift 53→113 px (orig −30→113) | copy shortened |
| intro | stacked, 2-line heading ✓ | heading left, text in right third ✓ | chars rise 156 px (orig 157) ✓, paragraphs 25 px ✓ | – |
| rail | 55vw 4:5 cards, first cut off ✓ | 33vw cards r14 ✓ | translateX −416 → −48 scrubbed (orig moves right) ✓ | – |
| waitlist | heading 40 px, stacked prices ✓ | dots 12×9 behind 480 px card ✓; price note wrapped to 3 lines | chars rise ✓ | copy shortened |
| video | 9:16 ✓ | 16:9 ✓ | – | – |
| about | photo first ✓ | section 112 px too tall: the original's frame is 4:5 (the 2:3 is the oversize parallax image inside) | drift ±46 ✓ | frame → 4:5 |
| hotspots | 2:3 ✓ | 115svh ✓, hotspots in place ✓ | hover scale+rotate ✓ | – |
| specs | tabs wrap in a full-width pill ✓ | drawing + rulers ✓, table ✓; active tab text is orange (orig white) | heading rise ✓ | kept: no light-on-ink token that works in dark mode (note) |
| footer | stacked, promo without picture ✓ | ✓ | underline on hover | – |
| kontakt | header solid, form card ✓ | heading 4vw, 416 px card over dots ✓ | photo band drift −80→40 ✓ | – |
| warteliste | ✓ | ✓ | – | – |

Overflow at 360/768/1024: fits on all three pages. Window-sized: hero (100 % / 150 %) and the
photo band (115 %) are marked so in ours, as in the original.

## Round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | subline now 2 lines ✓ | ✓ | – |
| about | 1062 px (orig 1095) ✓ | 976 px (orig 975) ✓, 4:5 frame | drift ✓ | – |
| waitlist | ✓ | price notes on 2 lines ✓ | ✓ | – |
| whole page | 7392 px (orig 7360) | 9609 px (orig 9616) | all inventory rows present (hide-on-scroll header, drift ×3, rail drift, char rises, paragraph rises, fades) | – |

Remaining, on purpose: placeholders instead of photos/video/drawings; active specs tab text
is the accent (original white); paragraphs rise as whole paragraphs, not split lines; the
hero text's fade-out isn't rebuilt; the rail isn't draggable; no cookie banner.

**Re-theme check:** `wiemer-v2-waitlist` and `wiemer-v2-specs` under `sample-ember` (light) take
its serif display, green accent band and cream grounds cleanly (the dots get faint there,
as ember's secondary is close to its muted); `wiemer-v2-specs` in `wiemer-v2-theme` dark keeps
the orange band with dark ink and the tab marker readable.
