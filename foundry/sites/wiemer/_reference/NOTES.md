# wiemer — recreation notes

Original: https://www.wiemer.store/ (a German one-product furniture launch page, Webflow +
GSAP ScrollTrigger + Lenis). Captured in advance; pages asked for: landing, `kontakt`,
`warteliste`, `agb`. **`agb` was not captured** (not in the site's links, and `/agb`
answered 404), so it is skipped.

Fictional stand-in: **Grundform**, a small studio making one modular side table, the
**Raster**, from brushed steel rods and a perforated anodised plate. Launching spring 2028.
Copy is in English, in the original's short, plain, first-person-founder voice.

## Design language

- **Palette roles.** Near-white page `#fbfbfb` (background), a second light grey `#f2f2f2`
  (muted: the waitlist band, product cards, the price box, the footer), near-black ink
  `#121212` (foreground). One loud brand orange `#fe6f2d` (primary): the whole Specs band,
  the phone header bar, and at 20% behind mono "coming soon" tags with orange text. A
  sparing system blue `#0171e3` (highlight) only for form submit buttons and the required-
  field asterisks. A pale grey `#b0b0b0` (muted-foreground) for footer column labels and
  placeholders. Hairlines are ink at 10%.
- **Type scale.** One neo-grotesk for everything, plus a mono for tags, prices, tabs and
  dimension labels. Desktop sizes follow the window width (Webflow vw sizes): hero wordmark
  12.5vw (180px at 1440, line-height 0.9), section display 9vw (129.6px, lh 1.1, -1px),
  sublines 1.6vw (23px, lh 1.2), body 1.2vw (17.3px, lh 1.3), UI 15px, mono tags 12px.
  Phones: display 64px, small display 40px, subline 20px, body 16px. Weight 500 dominates
  (sublines and body), 400 for display. Letter-spacing -0.25px on text.
- **Spacing rhythm.** Section padding 7rem at 1440 (their `--spacing--7`), 3rem on phones.
  Gutters 40px at 1440, 24px at 390. Small gaps 8/16/32px.
- **Grid.** Full-bleed 12 columns with a 14px gap between the 40px gutters. The text column
  of the intro, the about image and the hero/footer teaser card all sit on columns 9–12
  (x=957, 443px wide). Display headings sit at the left edge or dead centre.
- **Shapes.** Small radii: 6px tags and fields, 7px small images, 10.5px cards on phones,
  14px cards and images on desktop, full pills for the circled arrows. `--radius: 6px` so
  `lg`=6, `xl`=10, `2xl`=14.
- **Depth.** Flat. No shadows apart from a barely-there 4px/16px 5% on one card; panels are
  separated by tone (#fbfbfb card on #f2f2f2) and 1px hairlines.
- **Motif.** The perforated plate: a grid of round holes. It appears as the background dot
  field behind the forms (pale #e5e5e5 dots, 36px on a 113px pitch, which darken where the
  pointer passes and fade back), and as the hole grid in the product photos.

## Type

| Original | Kind | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Neue Montreal (Pangram Pangram, closed) | neo-grotesk sans, slightly quirky | normal | large | **Hanken Grotesk Variable** | open neo-grotesk with the same normal width, large x-height and flat terminals; holds weight 500 well at body size and looks right at 180px. Already installed in the repo. |
| Supply Mono (Pangram Pangram, closed) | geometric monospace | normal | large | **Space Mono** (`@fontsource/space-mono`, 400/700) | the open geometric mono closest in feel: round, constructed letters and an open 4, as in the original's prices and tags. |

## Section map — landing (`/`)

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | header | `wiemer-header` | 72px, fixed | orange bar: wordmark left, "join the waitlist" + circled arrow right | transparent over the hero, white text; becomes a near-white bar after the hero | – | hides on scroll down (-96px), back on scroll up; transparent→solid after the hero |
| 1 | hero | `wiemer-hero` | **100svh** (390) / **150svh** (1440) | full-window photo; tagline + teaser card at the bottom (title hidden on phones, see decisions) | photo fills 150% of the window; huge centred white wordmark-sized title + 2-line subline in the first screen; hairline, left tagline and right teaser card at the bottom | hero photo 1440×1620 cover (parallax); teaser thumb 164×164 r7 | photo parallax scrubbed (translateY ≈ -30→113px); title block fades out as it leaves |
| 2 | intro | `wiemer-intro` | content (1797 / 1094) | tag, 64px two-line greeting, subline, 4 paragraphs, arrow link, then a horizontal card track | tag + 129.6px two-line greeting at left; text column on cols 9–12; 12 product cards 475×594 r14 in a track | 12 card images (4:5) | greeting letters rise 157px + fade, staggered; subline letters rise 30px; paragraph lines rise 25px; card track scrubbed sideways with the scroll |
| 3 | waitlist | `wiemer-waitlist` | content (1575 / 908) | centred tag, 40px heading, paragraph, full-width form card | centred tag, 129.6px heading, paragraph; form card 478px wide centred on a 12×9 dot field | – | tag fades, heading letters rise; dots darken on hover and fade back |
| 4 | exploded video | `wiemer-video-band` | content (810 / 693) | 9:16 full-bleed video | 16:9 full-bleed video | video 1440×810 / 390×693 | (inside the video only) |
| 5 | about | `wiemer-about` | content (975 / 1095) | photo first (342×513 r10.5) with mono name chip, then 64px "About", subline, 3 paragraphs, arrow link | 129.6px heading top-left; text column (445px) left, bottom-aligned with the portrait photo 443×664 r14 on cols 9–12 | portrait 2:3 | photo parallax inside its frame (±46px); heading letters rise; paragraph lines rise; link fades |
| 6 | photo with hotspots | `wiemer-photo-band` | content: photo at 1440/1035 (1440) / 2:3 (390) | full-bleed photo | full-bleed photo; three white 48px plus buttons on items | photo; hotspot modal image 421×316 r7 | plus turns 45° and grows 1.1 on hover (0.3s); click opens a centred card |
| 7 | specs | `wiemer-specs` | content (1563 / 1211) | orange band; centred 64px "Specs"; tab bar wraps to two lines in a darker orange box; drawing with rulers; info paragraph; spec rows | centred 129.6px heading; mono tab bar with sliding black active pill; 696px drawing with a thick top ruler and right ruler, mm labels; bottom: hairline, info left (cols 1–6), spec rows right (cols 9–12) | one drawing per tab | heading letters rise; info letters rise; active pill slides (0.6s cubic-bezier(.625,.05,0,1)) |
| 8 | footer | `wiemer-footer` | content (512 / 930) | wordmark, tagline, teaser card, three link columns stacked, © + company line stacked | wordmark left, tagline right; three columns left, teaser card right; © left, company line right | teaser thumb 164×164 r7 | link underline grows from the left on hover (0.2s) |

## Section map — `kontakt` (pages/kontakt.tsx)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| – | header | `wiemer-header` (solid) | 72px | near-white bar | near-white bar with hairline | – | hides on scroll down |
| 1 | contact form | `wiemer-contact` | content (1504 / 1031) | tag, 40px heading, one line, form card full width | centred tag, 57.6px (4vw) heading, one line; 414px card on the dot field | – | dots darken on hover |
| 2 | photo | `wiemer-photo-band` (no hotspots, 3:2 desktop) | content (960 / 585) | full-bleed photo | full-bleed photo | photo | photo parallax (≈ -80→40px) |
| 3 | footer | `wiemer-footer` | | | | | |

## Section map — `warteliste` (pages/warteliste.tsx)

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| – | header | `wiemer-header` (solid) | 72px | | | | hides on scroll down |
| 1 | waitlist | `wiemer-waitlist` (offset below the header) | content (1559 / 988) | as on the landing | as on the landing | – | dots |
| 2 | footer | `wiemer-footer` | | | | | |

## Motion inventory

| section | trigger | what changes | timing / easing | how we build it |
|---|---|---|---|---|
| header | scroll direction | translateY 0 ↔ -100% (96px) | 0.6s cubic-bezier(.625,.05,0,1) | `wiemer-header`, a small scroll listener sets `data-hidden`; CSS transition (hydrate load) |
| header | passing the hero | transparent/white text → near-white bar; transparent copy slides up and fades | ~0.4s | same listener sets `data-solid` once the hero's bottom passes; CSS transition |
| hero | scrubbed | photo translateY -30→113px over the hero's trip | linear | CSS `animation-timeline: view()` on the photo layer, `cover` range |
| hero | leaving view | title block opacity 1→0 | scrubbed | CSS view timeline, `exit` range |
| intro, waitlist, about, specs | entering view | display headings: each letter rises ~100% of its line + fades, staggered | ~0.8s each, stagger ~0.03s | `wiemer-split-text` component: letters on one named view timeline, each letter's range offset a little later; masked by an `overflow-clip` line |
| intro, about, specs | entering view | sublines: letters rise 30px + fade, staggered | | `wiemer-split-text` with `size="sm"` (30px rise) |
| intro, about, specs | entering view | paragraph lines rise 23–25px (masked) | | per paragraph: rise 24px + fade, CSS view timeline (`wiemer-reveal`, `rise`) — real line splitting needs JS measuring, see decisions |
| intro, about, waitlist | entering view | tags, arrow links fade in | | `wiemer-reveal` `fade` |
| intro | scrubbed | card track translateX ≈ -2255→-415px across the page | linear | CSS view timeline on the track, `cover 0% cover 100%`, translateX(-30%)→(0) |
| about | scrubbed | photo translateY -46→46px inside its frame | linear | `wiemer-reveal` `drift` inside an `overflow-clip` frame |
| photo band | scrubbed | photo translateY ≈ -80→40px | linear | same drift, photo layer 12% taller than its frame |
| waitlist / contact | hover | a dot goes dark grey at once, then fades back | instant on, ~0.8s off | CSS `transition` with `hover:duration-0` on each dot (a pointer trail without JS) |
| photo band | hover | plus button scale 1.1, rotate 45° | 0.3s cubic-bezier(.38,.005,.215,1) | Tailwind `transition-transform` |
| specs | click | black active pill slides to the chosen tab | 0.6s cubic-bezier(.625,.05,0,1) | React state + measured pill (hydrate visible) |
| footer | hover | underline scaleX 0→1 from the left | 0.2s | Tailwind `scale-x-0 group-hover:scale-x-100 origin-left` |
| arrow links | hover | circled arrow fills ink, arrow turns light, nudges | 0.3s cubic-bezier(.38,.005,.215,1) | Tailwind transitions in `wiemer-arrow-link` |
| page | wheel | Lenis smooth scrolling | | `wiemer-smooth-scroll` (hydrate load) |

## Media slots → placeholders

| slot | original | placeholder |
|---|---|---|
| hero photo | interior photo, full bleed, 150svh + parallax overscan | soft vertical gradient from `glow` to ink, dark enough for the white title |
| teaser thumb (hero, footer) | 164×164 product render on #f2f2f2, r7 | `bg-muted` square, r7 |
| intro cards ×12 | 475×594 (4:5) product renders, r14 | `bg-muted` 4:5 cards, r14 |
| exploded video | 1440×810 / 390×693 white-backed render loop | `bg-muted` 16:9 / 9:16 band |
| about portrait | 443×664 r14 (2:3) | `bg-muted` with a soft `glow` tint, r14, drifts inside the frame |
| photo band | 1440×1035 / 390×585 interior photo | gradient surface from `muted` to `glow` |
| hotspot modal image | 421×316 r7 (4:3) | `bg-muted` 4:3 r7 |
| specs drawings ×3 | outline drawings with hole grids | an ink-outlined frame at the part's proportion (no holes drawn); the dimension rulers and mm labels are layout and are built |

## Decisions

- **Cookie banner skipped.** It is consent chrome, not a section of the design.
- **Phone hero shows no big title.** The 390 capture has no 180px wordmark in its font list
  and the first screen shows only the photo under the orange bar; the title appears from
  `md` up. The bottom row (tagline + teaser card) is shown on phones too: the 390 capture
  hides that area under the cookie banner, so its exact phone layout is a guess.
- **Logo:** the original's five-dot cluster is their logo shape; ours is a plain wordmark.
- **Paragraph "line" reveals** are done per paragraph (rise + fade). Splitting rendered
  lines needs JS measurement after fonts load and re-splitting on resize; a per-paragraph
  rise looks the same at reading distance and stays CSS-only.
- **Reveals are scroll-scrubbed** (CSS view timelines) where GSAP plays them on a timer
  once triggered; ranges are short (`entry` → a fixed distance) so they finish quickly.
- **Specs drawings** are media slots: an outlined frame at the right proportion, no hole
  grid (that would be drawing the product). Rulers and mm labels are built.
- **Hotspots** use the HTML `popover` attribute (no JavaScript), opened by the plus buttons;
  it shows as a centred card like the original's modal.
- **Specs tabs** need state for the sliding pill → `hydrate: "visible"`. The spec table is
  the same for all tabs, as in the original.
- **agb** page skipped (404 at capture time).

## Verification

**About the section crops.** Our `ours-<w>-section-NN.png` crops come out empty below the
first screen: they are cut from one full-page screenshot taken at scroll 0, where every CSS
scroll-driven reveal is still in its "not yet entered" state. (The original's GSAP reveals
had already fired.) So the comparison below uses the scroll frames (`-scroll-NN`), which show
each section in place, plus the section heights from `ours-design.md`. Browsers without
scroll-driven animations, and static HTML, show everything in place.

### Round 1 (landing)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | orange bar, wordmark + arrow link: matches | transparent, light text, solid after hero: matches | hides on scroll down (-100px) ✓ | – |
| hero | 844 = 100svh ✓; photo + launch line + card | 1350 = 150svh ✓; subline wrapped to 3 lines (original 2) | parallax -30→115px ✓ (orig -30→113); copy fades out ✓ | shorter subline ✓ |
| intro | 1170 vs 1094: greeting wrapped to 3 lines (Hanken is wider than Neue Montreal) | 1777 vs 1797 ✓; column on cols 9–12 at x=956 ✓ | letters rise 150px ✓ (orig 157), subline 30px ✓, paragraphs 24px ✓, track -2225→-468px ✓ (orig -2255→-415) | shorter greeting ✓ |
| waitlist | 883 vs 908 ✓ | 1591 vs 1575 ✓; dot pitch 120px from the window edge (orig 113px inside the 40px gutters) | heading letters rise ✓, tag fades ✓; dot hover trail ✓ | dots inside gutters ✓ |
| video band | 693 ✓ | 810 ✓ | – | – |
| about | 1136 vs 1095 | 1033 vs 975 (our paragraphs run a line longer) | drift ±46px ✓, letters, rise, link fade ✓ | left: content length |
| photo band | 585 ✓ | 1035 ✓; hotspots at the same places | drift ±60px (orig: none recorded on the landing, -81→39 on kontakt); plus scale 1.1 + rotate 45° on hover ✓ | – |
| specs | 1210 vs 1211 ✓ | 1588 vs 1563 ✓; drawing frame 620px (orig 696); mm labels regular (orig bold) | letters rise ✓; pill slides 0.6s ✓ | frame 56vw, bold labels ✓ |
| footer | 987 vs 930 | 534 vs 512; columns row 24px low | underline grows on hover ✓ | spacing tightened ✓ |
| overflow | fits at 360/768/1024 ✓ | | | |

### Round 2 (landing again; kontakt and warteliste first round)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ | subline two lines ✓ | ✓ | – |
| intro | 1100 vs 1094 ✓; subline still 2 lines (orig 1) | ✓ | ✓ | shorter subline ✓ |
| waitlist | ✓ | dot centres at x=97, 210… ✓ (orig 97, 210…) | ✓ | – |
| specs | ✓ | frame ✓, bold labels ✓ | ✓ | – |
| footer | 979 ✓ | 518 vs 512 ✓ | ✓ | – |
| kontakt: header | solid near-white bar with hairline ✓ | ✓ | hides on scroll down ✓ | – |
| kontakt: form | heading wrapped to 2 lines (orig 1) | 1535 incl. header vs 1504 ✓; card 414px on the dot field ✓; tag sits 24px lower (orig section padding is smaller on this page) | dots ✓ | shorter heading ✓; padding left |
| kontakt: photo | 585 ✓ | 960 (3:2) ✓ | drift ✓ | – |
| warteliste | 72 + 883 ✓ | 72 + 1591 vs 1559 ✓ | ✓ | – |
| re-theme | `wiemer-specs` and `wiemer-waitlist` under `sample-ember`: re-colour and re-type cleanly; specs mixed `foreground` and `primary-foreground` ink on the band | | | specs uses primary-foreground throughout ✓ |
| dark mode | whole landing in `.dark`: graphite page, orange band kept, light text on the hero | | | – |

Left as is: the about section runs ~40–60px taller than the original (longer sample
paragraphs); kontakt's top padding is the shared `--section-y` rather than the original's
slightly smaller one on that page.
