# Newhalo: design notes (recreating halodental.com, all pages)

Fictional brand: **Brio**, maker of "Lumen One", a lit, camera-carrying dental instrument.
Copy is ours; no logos (lucide icon + plain wordmark), partner and press names are made up.

## Design language
- **Palette:** warm paper page `#f5f1ee`, pure black bands and panels, white cards, one hot
  orange `#ff5e2b` with **black** text on it (turns light on hover). Big statement headings
  carry an amber `#ffa41c` → red `#ff362a` left-to-right gradient. Graphite `#241f1f` for
  cards on black. Hairlines: solid black on paper, white on black; inputs at 30%.
  A cobalt `#2d4fff` appears only in the product page's little animated icons (chart-4).
- **Type:** one grotesk at weight 400 everywhere. Scale at 1440: 100 / 64 / 32 / 28 / 24 / 16
  / 12 px; leading 0.95 on 100, 1.0 on 64, 1.1 on 24–28, 1.5 on body. At 390: 50 / 40 / 25 /
  21 / 16.6 / 14.6 / 12.5. The landing wordmark is ~280px (desktop only).
- **Layout:** 1440 page, 40px gutter (≈21px at 390), 12 columns with 24px gaps. Text columns
  sit in cols 1–4 (440px); the second column starts at col 6 (x=615) or col 9 (x=960).
- **Rhythm:** sections pad ~120px top/bottom at 1440, ~70px at 390. Colour changes
  (paper / black / white) separate sections, never borders.
- **Shapes and depth:** 4px radius on buttons, inputs and tiles; 8px on panels, cards and
  media. The landing hero and the footer are black panels inset 10px (6px on phones) from
  the page edge. No shadows anywhere (except the investors page card). Depth = black vs paper.

## Type
| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Nuckle (closed, Ivan Studio-style grotesk) | geometric-leaning grotesk, round bowls, double-storey a, single-storey g | slightly wide | large | **Manrope** (variable, 400) | same wide round bowls, single-storey g, large x-height; Hanken/Inter are narrower and more neutral |
| Helvetica bold (investors page only) | neo-grotesk | normal | medium | Manrope 700 | the theme has one typeface; Manrope's bold keeps the heavy, tight feel |

## Section map

### Landing `/`
| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | newhalo-header | 72 / 120 bar, fixed | logo, white "Reserve", menu square | logo · centred links · Reserve now · Fr · a11y | – | hides scrolling down, back on scroll up |
| 2 | hero | newhalo-hero | **100svh** (panel inset 6/10px) | video fills panel, tagline + orange play button bottom-left | video, giant wordmark bottom-left, tagline bottom at 58% | video slot (cover, window height) | media drifts down 0→108px scrubbed; play button follows the cursor (desktop) |
| 3 | digital mirror | newhalo-text-gallery | content (~1036 / 910) | text, list, CTA, then square image + thumbs row | text cols 1–4; image cols 6–11 (670²); thumbs 96px col 12 | 3 square images | text fades in; thumbs zoom 1.15→1 + fade; gallery blooms 1.1→1 scrubbed; image drifts ±34px |
| 4 | rebranding | newhalo-statement | content (~1110 / 760) | gradient heading, small photo centred, text, button, art | heading; photo 210² + text; art 440×520 right | photo, art (canvas) | heading gradient sweeps in; photo blooms; text fades |
| 5 | latest news | newhalo-news | content | heading, outline button, stacked cards | heading + button right, rows: image 325×180 · title · text · arrow | 4 thumbs 1.81:1 | header rises 60px; rows rise 50px; images settle 1.15→1; row hover lightens + arrow turns orange; last row faded, "View more" |
| 6 | newsletter | newhalo-newsletter | content (456 / 408), white | heading, field, consent, disabled button | heading cols 1–7; form cols 9–12 | – | form fades in |
| 7 | footer | newhalo-footer | content (803 / 497) | 2 cols links, CTAs, art | 3 link cols, 2 CTAs right, art strip | line art | panel clips from full-bleed to the 10px inset; links fade; art rises 60px |

### Product `/halo-digital-mirror` → `pages/product`
| # | section | block | height | notes |
|---|---|---|---|---|
| 1 | hero | newhalo-hero (title size xl) | **100svh** | orange gradient video; two-line 100px title right |
| 2 | sub-nav | newhalo-product-subnav | 60px bar, fixed bottom 10px | graphite bar, anchors, orange underline on the current one, "Reserve now →" segment right |
| 3 | overview | newhalo-product-overview | content ~1200 | full-bleed dark photo; title 32, text, qty list, full-width orange button |
| 4 | features | newhalo-product-features | content ~2800 | 100px heading, big 3D media, bento of graphite cards (2 / 1 / 2) with pulsing cobalt icons |
| 5 | lighting | newhalo-product-sequence | ~2.75 screens, **pinned** | sticky full-window media; captions fade in one after another at left |
| 6 | camera | newhalo-text-gallery | content | same block as landing #3, one image |
| 7 | benefits | newhalo-product-benefits | **120svh** | full-bleed photo; 100px heading top; two hairline columns bottom |
| 8 | software | newhalo-product-app | content ~960 | media left 650×720 with orange play; app tile + 64px heading; card accordion |
| 9 | everyday use | newhalo-product-care | content | heading left; graphite feature card right; text below |
| 10 | faq teaser | newhalo-faq-teaser | content | 64px heading + orange button left; hairline accordion right |
| 11 | waitlist | newhalo-waitlist-cta | content ~700 | full-bleed orange-gradient media; 100px heading; numbered steps; white button |
| 12 | footer | newhalo-footer | | |

### Get started `/pricing` → `pages/pricing`
page-hero (gradient heading + three numbered steps on a dotted line; vertical on phones) ·
newhalo-pricing-integration (full-window light media, pinned while it drifts; heading;
caption slider with prev/next) · footer.

### Company `/company` → `pages/company`
page-hero with media right (photo 700×680) · newhalo-values (2×2 white cards) ·
newhalo-text-gallery (work with us, list without icons, one image) · newhalo-showcase
(dark photo backdrop, heading, white card slider with prev/next) · newhalo-news ·
newhalo-newsletter · footer.

### FAQ `/faq` → `pages/faq`
page-hero (aside: "can't find…" + underlined link) · newhalo-faq (tile grid of topics
left, orange active; accordion right; phones: tiles scroll sideways, aside at the end) · footer.

### Contact `/contact` → `pages/contact`
page-hero with media (920 tall; phones: photo on top) · newhalo-contact-form (form left,
white FAQ card right) · newhalo-showcase (events: one centred card) · footer.

### Media room `/media-room` → `pages/media-room`
page-hero (aside) · newhalo-downloads (sticky left: heading + download cards with orange
"Download ZIP"; right: stacked 16:9 dark image cards with orange download tile) · footer.

### Checkout `/checkout` → `pages/checkout`
newhalo-checkout: **100svh** black split screen, own mini header (wordmark + step
breadcrumb pill), gradient heading, three choice cards with radio rings, disabled
"Continue" until a choice is made, art column right (canvas → placeholder).

### Investors `/investors/` → `pages/investors`
newhalo-investors: **100svh** near-black page, one centred graphite card with a 4px orange
top rule, 18px radius, soft long shadow; eyebrow, bold 66px heading, two document cards
(numbered, hover lifts 3px + orange border).

### Legal `/legal/terms-of-use`, `/legal/privacy-policy` → `pages/terms-of-use`, `pages/privacy-policy`
page-hero (aside) · newhalo-legal (sticky topic tiles left; prose right: 64px h2, 32/24 h3,
16px body, bullet lists) · footer.

## Motion inventory
| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | scroll direction | slides up out of view going down, back (on black) going up | 0.4s cubic-bezier(.32,.94,.6,1) | React state + transition (hydrate load) |
| page | wheel | Lenis smooth scroll | ~1.1s expo-out | newhalo-smooth-scroll (lenis) |
| hero | scrubbed | media translateY 0→108px over the first screen | linear | CSS `animation-timeline: scroll(root)` range 0–100vh |
| hero | pointer | "Play the video" button follows the cursor (desktop) | eased | pointer listener writing a transform (hydrate load) |
| buttons | hover | label rolls up, copy rolls in from below; primary text turns light; outline border turns orange | 0.35s / 0.3s | Tailwind group-hover transitions |
| text gallery | entering view | text block and list fade in; list hairlines draw from the left; heading sweeps in | ~0.5s | CSS view() reveals |
| text gallery | entering view | thumbnails fade + scale 1.15→1, staggered | 0.6s | CSS view() `zoom` with steps |
| text gallery | scrubbed | gallery opacity 0→1 + scale 1.1→1 | over half a screen | CSS view() `bloom` |
| text gallery / photos | scrubbed | picture drifts −34→+34px inside its frame | whole trip | CSS view() `drift` |
| statement | scrubbed | gradient fills the heading left→right over a dim base | entry → 50% | CSS view() on background-size |
| statement | scrubbed | photo opacity 0→1 + scale 1.1→1; text fades | | `bloom`, `fade` |
| news | entering view | header + button rise 60px; titles/text rise 50px; thumbs fade + settle 1.15→1 | ~0.5s | `rise`, `rise-sm`, `fade`, `settle` |
| news | hover | row background lightens; arrow tile turns orange | 0.3s | group-hover |
| newsletter | entering view | form groups fade in | | `fade` |
| footer | entering view | panel clip from full-bleed rectangle to inset 10px round 8px; link lists fade; art rises 60px | short | CSS view() clip-path + `fade` + `rise` |
| product features | loop | cobalt rings pulse out of the small icons | 10s wave → 2.4s ping | CSS keyframes |
| product features | entering view | cards fade + scale 1.1→1; titles rise 30px | | `bloom`, `rise` (30px via --newhalo-rise) |
| product sequence | pinned | media stays while 3 captions fade in one after another | 3 half-screens | sticky + view() per caption |
| product benefits / app / care | entering view | fades, media bloom | | reveals |
| product subnav | scroll | appears after the hero; current section underlined | 0.4s | scroll listener (hydrate load) |
| accordions | click | answer opens; plus becomes minus; open card turns white (app) | 0.4s | `<details name>` (exclusive, no JS) + CSS |
| sliders (showcase, integration, gallery) | click | track slides by one card | 0.6s cubic-bezier(.66,0,.34,1) | React state + transform (hydrate visible) |
| investors | hover | card lifts 3px, border turns orange; link underlines | | Tailwind hover |
| checkout | click | chosen card gets an orange ring; Continue lights up | | `:has(:checked)` CSS, no JS |
| page heroes | load | gradient heading sweeps in | 1s | CSS keyframes |

Not rebuilt: the page loader and page-transition curtain (site chrome, not a section), the
French switch, the 3D/WebGL dot field and the hotspot scene (they are media), the image
sequence inside the pinned lighting section (media; its frame is pinned and we pin it).

## Media slots → placeholders
| slot | size | placeholder |
|---|---|---|
| landing hero video | fills window panel | muted panel |
| product hero video | fills window panel | glow wash (it is orange in the original) |
| gallery images | square 670 / 383 | muted, 8px |
| thumbnails | 96px / 60px squares | muted, ring on active |
| statement photo | 210² / 164² | muted 8px |
| statement art (canvas) | 440×520 | glow wash |
| news thumbs | 1.81:1 | muted 8px |
| footer line art | ~960×250 strip / 300² on phones | glow wash, no drawing |
| product overview / benefits / showcase / waitlist backdrops | full-bleed | muted / glow |
| bento card media | fills card | muted |
| app media | 650×720 | muted 8px |
| contact / company hero photos | 700×680 | muted 8px |
| download images | 16:9 | muted 8px |
| checkout art | right column, window tall | glow wash |

## Decisions
- One `newhalo-text-gallery` serves the landing mirror section, product camera and company
  "work with us" (the original reuses one module too).
- `newhalo-page-hero` covers every inner-page black band (aside, media, or steps).
- Accordions use native `<details name="…">`, so only one opens at a time without JS.
- Dark panels wrap themselves in `.dark`, so they stay black on the paper theme.
- The product sub-nav is fixed at the bottom of the window (it is there in every scroll frame).

## Round 1 (all pages captured; static shots taken with reduced motion so scroll reveals show their end state)
| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| landing hero | ok | giant wordmark ("Lumora") ran into the title | drift 0→108px ✓ | yes: brand renamed **Brio**, shorter word |
| landing hero | placeholder graphite, original video near-black | same | – | yes: new `deep` tone (card colour) |
| footer | ok | links 32px apart (orig 29); art strip too narrow | clip + fade + rise ✓ | yes |
| product hero | title leading lost (class merge dropped leading-none) | "One instrument" too long for the right column | ✓ | yes |
| pricing steps | dotted connector missing (dot pattern on a 1px line) | same | – | yes: dotted borders |
| contact / company showcase | – | cards graphite, original white | rise ✓ | yes: foreground-coloured cards |
| media room | – | picture placeholders white on paper | bloom ✓, sticky ✓ | yes: frames get their own dark context |
| faq / legal | **page 1060px / 613px wide at 360** (tile row widened the grid) | ok | sticky ✓ | yes: grid-cols-1 |
| heights | all sections within ~5% of the original (product care +90px, FAQ teaser +110px: content) | | | accepted |
| motion | | | every inventory row shows in our capture (scrubbed hero, reveals, blooms, drifts, pinned sequence, sticky columns, footer clip, Lenis) | ✓ |

## Round 2
| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| landing text gallery | ok | at exactly 1024 the 96px thumbnails stuck out of the 12th column | – | yes: thumbs size to the column, max 96px |
| footer | ok | at 1024 three 230px columns + buttons overflowed | – | yes: 184px columns below 1280 |
| pricing steps | vertical dotted connector ✓ | horizontal dotted connector ✓ | – | ✓ |
| partner / event cards | – | white, as the original | rise ✓ | ✓ |
| faq / legal | fit at 360 / 768 / 1024 | ✓ | sticky tiles ✓ | ✓ |
| product hero | title leading back to 1.0 | "Lumen One" fits the right column | drift ✓ | ✓ |
| re-theme | | `newhalo-text-gallery` and `newhalo-statement` under sample-ember: serif display, rounded corners, ember colours, gradient follows highlight→glow | | ✓ |

Remaining, accepted: section heights differ where our copy is shorter or longer (FAQ teaser, care);
the static section crops from capture.mjs show CSS scroll reveals in their start state (blank), so
the comparison used scroll frames plus reduced-motion element screenshots of our own pages.
