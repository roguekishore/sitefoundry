# Superhuman → "Wayfinder" (recreation notes)

Landing page only (no other pages were named). Precaptured at 390 and 1440; the original was not opened.
The fictional company is **Wayfinder** with three products: **Post** (mail), **Pilot** (the AI assistant, "Go" in the original) and **Pages** (docs).

## Design language

- **Palette roles.** A warm off-white page (`#F7F5F2`) with white only in the header. Tiles and cards are warm greys
  (`#F2F0EB` raised, `#DEDBD5` stone). One brand purple (`#714CB6`) for buttons and links; a lilac (`#D4C7FF`) for the
  button on dark and a pale lilac (`#E8E0FF`) for the announcement bar and the quote band. Four deep surfaces carry the
  bold moments: near-black (`#141413`), maroon (`#421D24`), deep teal (`#0C4243`), deep indigo (`#281647`). Text is a warm
  charcoal (`#292827`), secondary copy the same colour at 65 %.
- **Type.** One family for everything. Headlines are regular weight (460) at a big size with tight tracking
  (-0.0275em); emphasis is weight 600–700. Scale 1440 / 390: h2 49/58.8 → 32/38.4, tile title 25/30 → 20/24,
  lead 18/27, body 16/24, small 14/16.8. Product mark = bold caps, wide tracking.
- **Spacing rhythm.** 1280 content column in 1440 (80 gutter), 16 px gutter on phones. Product sections: 96 px above the
  mark on desktop, 40 on phones. Tiles are separated by 32 px (16 on phones).
- **Shapes.** 12 px radius for tiles/cards, 8 px for buttons and the sign-in pill, 999 px nowhere visible.
- **Depth.** Almost flat. Cards get a three-layer hairline shadow (1 px ring + 4/8 + 2/4 soft). Tiles have no shadow.
  Strong colour fields do the work that shadows would.

## Type

| Original face | Class | Width | x-height | Open font used |
|---|---|---|---|---|
| Super Sans VF (100–900 variable, used everywhere) | neo-grotesk, slightly tight, single-storey `g`, straight-leg `y` | normal | medium-high | **Hanken Grotesk Variable**: same grotesk shape and tight rhythm, true variable weight axis so 460/540/600 work |
| Super Serif VF | serif | not on the landing page | – | not used |
| Super Sans Mono VF | mono | not on the landing page | – | base mono stack |

Display = body (the original headlines are the same sans). Not Inter/Geist.

## Section map

| # | section | block | height | layout 390 | layout 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | sticky header | `superhuman-header` | 67px content | logo + menu button, dropdown | logo, 6 nav items with chevrons, Contact sales, Sign in pill | – | sticky; link colour 0.2s; sign-in ring 1→2px |
| 2 | announcement bar | `superhuman-banner` | 56px | one centred line | same | – | arrow nudge on hover |
| 3 | hero carousel | `superhuman-hero` | 823 / 650 content | dark column: heading, 2 buttons, media 358×448 below | left half near-black, right half maroon; heading 49px; "One toolkit" list at the bottom; media 640×801 cropped to 650 on the right half | video 640×801 | slide dissolve 500ms; 10s progress bar; row hover sweep |
| 4 | logo strip | `superhuman-logos` | 327 / 338 content | caption + 3×2 bordered grid | 6 bordered cells | 6 wordmarks (text) | – |
| 5 | Pilot (Go) | `superhuman-pilot` | 2676 / 1614 content | mark, h2, sub, buttons, 3 stacked tiles, scrolling tab strip, 3 cards stacked | bento (1 wide + 2 half), tab strip, 3 cards | 3 tile screenshots | tab hover; card swap on tab |
| 6 | quote | `superhuman-quote` | 409 / 466 content | centred 28px quote | centred 39px quote | – | link chevron nudge |
| 7 | Post (Mail) | `superhuman-post` | 1598 / 1249 content | mark, h2, sub, buttons, 3 stacked tiles | tall tile left (7/12) + 2 stacked right | 3 screenshots | – |
| 8 | Pages (Docs) | `superhuman-pages` | 1787 / 1263 content | same, 3 tiles | wide tile + 2 half tiles | 3 screenshots | – |
| 9 | enterprise | `superhuman-enterprise` | 683 / 570 content | text then media bleeding off the right edge | text left, media right | screenshot 672×378 | – |
| 10 | closing band | `superhuman-cta` | 225 / 251 content | heading, full-width outline button | heading left, outline button right | background image 1440×251 | button hover |
| 11 | footer | `superhuman-footer` | 1823 / 859 content | brand then 4 stacked lists | brand + 4 columns, giant ghost wordmark | – | link colour |

Cookie banner and its dim overlay are not part of the design and are left out.

## Motion inventory

| section | trigger | what changes | timing | built with |
|---|---|---|---|---|
| header | scroll | pinned (sticky) | – | `position: sticky; top: 0` |
| hero | loop (every 10s) / click | content dissolves in (opacity 0→1) when the active product changes | 500ms | state + `superhuman-hero-dissolve` keyframes (CSS) |
| hero | loop | progress bar fills on the active row (scaleX 0→1) | 10s linear | `superhuman-hero-progress` keyframes; its `animationend` advances |
| hero | hover | row gets a left-to-right white wash (0 → 6 % at 10 %) | 0.2s | Tailwind transition |
| links / buttons | hover | colour darkens (`#292827`→`#141413`, purple `#714CB6`→`#533192`, lilac →`#BEA1F5`) | 0.2s ease(-in-out) | Tailwind |
| "Learn more" | hover | chevron translate 0→4px, underline | 0.3s | Tailwind |
| Sign in | hover | inset ring 1px→2px | 0.2s | Tailwind |
| tabs | hover | background black 5 % | 0.2s | Tailwind |

No scroll reveals appear in the capture (none were found at either width), so none are added.

## Media slots → placeholders

Hero video (640×801), 9 tile screenshots (aspect 1.2–2.3), enterprise screenshot 672×378, closing band image 1440×251,
card icons (lucide icons on tinted tiles). All are `media?: ReactNode` props; when empty a `superhuman-placeholder`
(colour-wash or panel surface, no drawing).

## Decisions

- Mobile hero hides the "One toolkit" list: the 390 capture has no room for it (823px tall, media 448 + text).
- Dark mode is a sibling (warm near-black page, lilac primary); the four deep surfaces keep their colour in both.
- Deep surfaces map to `chart-1…5` (teal, maroon, indigo, purple, ink) and text on them to `primary-foreground`. Noted in each block.
- Fonts: Hanken Grotesk Variable (already a root dependency).

## Comparison round 1 (first build vs original, 390 / 1440)

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| header | 68 vs 67 tall | 68 vs 67 (border added to the 66px bar) | sticky ✓, link/pill hover ✓ | yes: bar is 66 + 1px border |
| hero | 843 vs 823 (switcher too airy) | 650 ✓; media wash was muddy grey-purple over maroon | dissolve + progress present | yes: tighter switcher; wash now sits on a white base so it reads as pastel |
| logos | 327 ✓ | 338 ✓ | – | – |
| Pilot | 2538 vs 2676: cards shorter (one-line titles) | 1701 vs 1614: headline wrapped to 2 lines (heading box 768px, original ~870px); tabs equal-width instead of content-sized | tab hover ✓ | yes: heading box 60rem, lead 50rem, shorter sample copy, tabs `flex-auto`, cards min-height 279 at 390 |
| quote | 394 vs 409 | 460 vs 466 | link nudge ✓ | no (content-dependent line count) |
| Post | 1733 vs 1598: middle tile 408 tall (original 239, text over the media); gap under heading 40 vs 80 | 1250 ✓ | – | yes: `overlay` tile layout at 390, mb-20 under the heading |
| Pages | 1760 vs 1787 | 1264 ✓ | – | no (copy length) |
| enterprise | 695 vs 683 | 642 vs 570: headline wrapped to 3 lines, padding 112 | – | yes: shorter headline, 30rem measure, py 104 |
| closing band | 261 vs 225: headline wrapped to 3 lines | 251 ✓ | – | yes: shorter headline |
| footer | 1883 vs 1823 | 800 vs 859: link columns at 530/740 instead of 562/771; Company list 12 not 14 links; ghost word spread | link hover ✓ | yes: columns 170px + 40px gap, two more links, ghost word letters spaced across the width, tighter bottom spacing at 390 |

## Comparison round 2

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | 827 vs 823 ✓ | 650 ✓ | dissolve 500ms, 10s progress line, row hover wash all in ours' Motion list | – |
| Pilot | 2643 vs 2676 | 1615 vs 1614 ✓ | – | ok |
| Post | 1559 vs 1598 | 1250 vs 1249 ✓ | – | ok (tile text 3 lines vs 4) |
| enterprise | 668 vs 683 | 568 vs 570 ✓ | – | ok |
| closing band | 223 vs 225 ✓ | 251 ✓ | – | ok |
| footer | 1823 vs 1823 ✓ | 863 vs 859 ✓ | – | ghost word bumped to 14cqw (letters of a 9-letter name, not 10) |

Overflow at 360 / 768 / 1024: fits (ours-design.md). Hover changes match the original (colour deepens 0.2s, chevron slides, sign-in ring 1→2px, tab tint, row wash).
Not "sized by the window": the original's hero is content-sized (650 at 1440 / 823 at 390), and so is ours.
Remaining differences: typeface is Hanken Grotesk, a little wider than Super Sans, so headlines wrap earlier and copy was written shorter to keep line counts; media slots are plain placeholders; the cookie banner is left out.
Re-theme check: `superhuman-post` (dark) and `superhuman-hero` (light) under `sample-ember` re-colour fully.
