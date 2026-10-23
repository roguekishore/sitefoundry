# whoop — recreation notes

Original: https://whoop.com/ (captured in advance; it served the India Shopify storefront).
Landing page only; no other pages were asked for.
Fictional stand-in: **Kairos**, a screenless health band sold with three memberships
(Base, Apex, Aeon). Own names, copy, prices and people.

**The 1440 capture is blind:** at 1440 the site answered with a Cloudflare "you have been
blocked" page (the 1440 numbers and crops in `original-design.md` are of that page, not the
site). Everything below at 1440 is **inferred** from the 390 capture and the site's own
layout variables (`--narrow-page-width: 90rem`, `--normal-content-width: 42rem`…). Marked
"(inferred)" where it matters.

## Design language

- **Palette roles.** Stark black and white in alternating full-bleed bands: white content
  bands (black ink) and pure black bands (header, "choose a device", "built to be worn",
  disclaimer, footer) with white ink. Greys only for secondary text: #999 (footer headings,
  inactive tabs, MRP), #777/#444 (small print). Accents are rare and come from product
  context: an electric periwinkle #4a53ff announcement strip, a navy #03245d "no-cost EMI"
  band and green #178c41 figures on the plan cards, and three pastel gradients on the plan
  cards (silver-white, white→steel blue #479ac2, mauve→cream→mint). The hero image is a warm
  amber-to-rust backdrop.
- **Type scale (390).** One family (Proxima Nova). Display headings 50/50px, weight 400,
  tracking −1.5px: big, light-feeling and tight. Card titles 24/26px semibold, tab titles
  30px semibold, body 16/25.6, small body 14/22.4, footer 14px, small print 12–13px.
  Buttons 14–16px bold uppercase. Plan names are spaced capitals (~30px, tracking ~0.2em).
- **Spacing rhythm.** 20px gutter at 390. Sections breathe ~50px top and bottom; heading →
  body gap ~30–40px. Carousels run full-bleed to the right edge with the next card peeking.
- **Layout grid.** Single column on phones; carousels (Swiper) for every repeated thing.
  Desktop (inferred): a ~1280px content column, headings left with body beside them,
  carousels showing 3+ cards, the plans side by side.
- **Shapes.** Generous radii: 30px on feature photos, 18px on carousel cards, 24px on plan
  cards, 11px on athlete cards and plan buttons, full pills (60px) for tabs and CTA. The hero
  ends in a white lip with 30px top corners that overlaps the image.
- **Depth.** Flat. One soft shadow (0 5px 30px /15%) on popups; translucent white panels
  (white/37%, white/10%) inside cards; nothing else.

## Type

| original | classification | width / x-height | ours | why |
|---|---|---|---|---|
| Proxima Nova (everything) | geometric-humanist sans: round o, single-storey-ish geometric caps, double-storey a, low contrast | normal width, large x-height | **Figtree** (variable, already installed) | the closest open geometric-humanist sans: same round bowls, large x-height, double-storey a, similar widths at 400/600/700; Montserrat is much wider, Inter/Geist too grotesque |

The wordmark is a thin, wide geometric capital logotype: ours is the brand name set in
Figtree 300, uppercase, tracking 0.06em (no logo shape).

## Section map (390 measured, 1440 inferred)

| # | section | block | height | layout at 390 | layout at 1440 (inferred) | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | announcement strip + header | `whoop-header` | 15px strip + 80px bar, content | periwinkle 15px strip with tiny centred text; black bar, wordmark left, menu + bag icons right | wordmark left, six links centred, account + bag right | – | bar is sticky (strip scrolls away); menu opens a black drawer |
| 1 | hero banner | `whoop-hero` | content (aspect 390:693), not window-sized | full-bleed image; white lip with 30px top corners overlaps its bottom 30px | full-bleed, aspect ~1440:640 | 1 image, cover (the text in the original is baked into it: ours is an optional badge panel) | – |
| 2 | "Wear… improve your health" + photo | `whoop-statement` (with media) | content, ~306 + 450 | heading 50px 3 lines, 16px body; then a 350² photo r30 | heading left, body right on one row; photo a wide r30 frame | 1 image 1:1 r30 | photo zooms 1.015 on hover |
| 3 | "Unlock the full picture" + insight cards | `whoop-insights` | content, ~321 + 600 | heading + body; card track 333×446 r18, next card peeks, dots | heading/body row; ~3.3 cards visible | 5 images 333×446 r18 | swipe/snap carousel, dots follow; "+" opens a detail panel (fade 0.5s) |
| 4 | "Choose a device" + plan cards | `whoop-plans` | content, 145 + 983 | black band; heading; centred 321px plan cards with both neighbours peeking, starts on the middle one; dots | three cards side by side | 3 product images 302×168 | snap carousel centred on card 2; buttons colour 0.125s |
| 5 | "Backed by…" + athletes | `whoop-athletes` | content, 247 + 409 | heading + body; two-row horizontal track of 229×150 r11 photo cards, name + role in white, small "+" | 4 × 2 grid | 8 images 229×150 r11 | track scrolls sideways; card photo zoom on hover |
| 6 | "Built to be worn 24/7" + animated accordion | `whoop-always-on` | content, 150 + 813 | black band; heading; 351² image r17; track of 253×240 r18 translucent cards; dots | accordion list left (inactive titles at 40%), image right | 1 image per step, 1:1 | steps advance on their own; inactive titles 40% opacity; body opens (0.2s); image crossfades |
| 7 | "One device, endless ways" + band tabs | `whoop-styles` | content, 200 + 754 | heading; pill tabs (black active, 2px grey outline inactive), scroll sideways; 350² image r30; 30px title, body, black pill CTA | tabs on top; image left, text right | 1 image per tab, 1:1 r30 | tab panel crossfades (opacity 0.3s) |
| 8 | medical small print | `whoop-disclaimer` | content, 306 | black; 18px semibold title, numbered 13px paragraphs with bold leads | same, narrower column | – | – |
| 9 | footer | `whoop-footer` | content, 761 + 143 | black; three link groups stacked (grey heading, white links, 37px rows); big centred wordmark; centred grey mission line | three columns; wordmark centred | – | link colour 0.125s |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | scroll (pinned) | bar sticks to the top for the whole page; strip above scrolls away | – | `position: sticky; top: 0` on the bar, strip outside it |
| header | click | menu drawer slides in from the side, backdrop fades | opacity/visibility 0.5s ease-in-out | React state; `translate-x` + opacity transitions 0.5s; `hydrate: load` |
| insights, plans, always-on (phone), styles tabs | drag / swipe (Swiper) | track slides; dots show the current card | Swiper | native `scroll-snap` track (`whoop-snap-track`), dots from the scroll position, dot click scrolls; `hydrate: visible` |
| insights | click "+" | detail panel fades over the card | opacity, visibility 0.5s ease-in-out | state + opacity transition 0.5s |
| always-on | loop (timed) + scrubbed track on phones | active step: title opacity 0.4 → 1, body opens, image changes; capture shows the track translateX while scrolling | opacity 0.3s ease, block-size 0.2s ease | timer advances the step every 6s (off under reduced motion); grid-rows 0fr→1fr; a thin progress line fills (CSS keyframe); phone track is the snap track |
| styles | click tab | panel crossfades | opacity 0.3s ease | all panels stacked in one grid cell, opacity transition 0.3s |
| buttons, tabs | hover | background / colour / border swap | 0.125s ease-in-out | Tailwind `transition-colors duration-125 ease-in-out` |
| links | hover | text-decoration colour / colour | 0.125s ease-in-out | same |
| photo cards | hover | image subtle zoom 1.015 (theme var `--hover-subtle-zoom-amount`) | 0.25s ease-out | `group-hover:scale-[1.015]` on the placeholder, `duration-250 ease-out` |

The capture also saw "CSS scroll-driven animations (animation-timeline)" in the CSS but no
element changed while scrolling apart from the accordion: nothing to rebuild there.

## Media slots → placeholders (`whoop-placeholder`)

- hero image → `warm` tone: amber gradient from the theme's `glow`.
- feature photo, tab images, accordion images → `photo` tone: neutral `muted` wash.
- insight cards → `photo` tone with a white haze at the top for the dark title.
- athlete cards → `shade` tone (grey→ink) so the light name reads; inverts with dark mode.
- plan product images → `glass` tone: a faint white panel on the pastel card.

## Decisions

- **Desktop inferred** (blind 1440): content column `--page-width: 82.5rem` (1280 + gutters),
  display headings 50px → 72px at lg, heading/body side by side, carousels show more cards,
  plans in a 3-column grid, athletes a 4×2 grid, accordion as two columns.
- Light is the faithful mode. Black bands use `bg-foreground text-background` in light and
  `bg-card` in dark (where the page is already near-black).
- Navy EMI band → `secondary` (white text in both modes); periwinkle strip and EMI chip →
  `highlight`; green figures → `chart-5`; plan card gradients → `chart-1..4`.
- The hero's text is part of its image in the original; ours offers an optional badge panel
  (uppercase bold title + wordmark on a pale wash) so the block isn't empty.
- Headings and the section that follows them are one block (e.g. "Choose a device" is inside
  `whoop-plans`), so each block works alone.
- Currency/price strings are props; the demo uses dollars.
