# hhhusher-v2: notes

Inspiration: https://www.hhhusher.com/ (a hi-hat bleed enclosure for drummers), landing page
plus `products` and `terms-of-use`. Captured in advance (precapture.json); the original was
never opened from this session. Both extra pages were in the capture list (`products` found by
its nav link, `terms-of-use` guessed at `<origin>/terms-of-use`), so nothing was skipped.

Fictional stand-in: **Quello**, a small studio-gear maker, product **the Quello Hood**:
a clamp-on hood that keeps cymbal wash out of the snare mic. All copy is ours.

## Design language

- **Palette roles.** Four flat bands, no gradients, no shadows:
  - near-black `#212121` (hero, mic setups, specs, footer, terms band; the product hero is pure
    black) with cream text `#F3F1E0`;
  - cream `#F3F1E0` (features, FAQ, legal body) with `#212121` text;
  - tan/bronze `#AD9069` (overview, testimonials, reviews, parts) with `#212121` text;
  - one hot accent, signal yellow `#FFCC00`: every BUY / checkout button, the active tab card,
    active mic-setup index, review stars, "discover more" links on dark cards.
  - Glass chrome over dark: cream at 15–20% (`rgba(244,242,226,.15)`) for the nav pill,
    currency, FR, menu, play button and inactive tabs.
- **Type scale.** A big, calm, medium-weight (500) neo-grotesk does everything: 68px h2,
  57px taglines/panel heads, 43px FAQ index, 24px quotes/questions, 16–20px body; labels and
  buttons are a 12px bold monospaced grotesk in caps. The footer ends in a 290px black-weight
  wordmark with -5px tracking. At 390 the scale drops (33px heads, 12.5px labels).
- **Spacing rhythm.** 40px gutters at 1440 (21px at 390), ~120px between blocks inside a band,
  40px grid gaps in the bento, 40px tall rows in lists.
- **Layout grid.** 1360px content. Desktop splits are mostly ~5/12 + 7/12 or "left third free,
  right text column starting at 915px". Mobile simply stacks; the hero text sits at the bottom.
- **Shapes.** 5px radius on everything (buttons, cards, inputs, tabs, icon boxes); 2px borders
  on outline bits (FAQ plus box, divider rules 2px at 15%).
- **Depth.** None: flat colour bands, media full-bleed or in 5px cards.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| UniversalSansDisplay 500 (headings, body) | neo-grotesk with a touch of geometric roundness, double-storey a, single-storey g | normal width, large x-height | **Hanken Grotesk Variable** (500) | the closest installed neo-grotesk on width and x-height, with the same plain, slightly rounded bowls; variable, so the 100 light product title and the 900 wordmark come from the same family |
| UniversalSansText (cookie text only) | same family, text cut | normal | Hanken Grotesk | not used by any of our blocks |
| AeonikFono Bold (all caps labels, buttons, reviewer names) | monospaced grotesk ("fono"), bold | normal, large x-height | **Geist Mono Variable** (700) | a grotesk-shaped mono with similar bold, squarish caps; already in the workspace |
| Aeonik Black (footer wordmark) | geometric grotesk, black | normal | Hanken Grotesk at 900 | one family keeps the wordmark in voice; no extra package |

No new packages were needed (Hanken Grotesk, Geist Mono and lenis were already installed).

## Section map

Landing (`page.tsx`):

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 0 | header | `hhhusher-v2-header` | fixed overlay | wordmark · yellow BUY · glass menu square | wordmark · centred glass pill (3 mono links + yellow BUY) · glass currency + language | — | hides on scroll down, returns on scroll up; hover colours |
| 1 | hero | `hhhusher-v2-hero` | **100svh** | video fills window; heading + text + three buttons stacked at the bottom | video fills window; 68px heading bottom-middle (starts at 40%), 20px text + play/glass/BUY bottom-right | video, window-filling | video drifts down as you scroll (parallax 0→50%) |
| 2 | intro + tabbed slider (#overview, part 1) | `hhhusher-v2-overview` | content (~1250 at 1440) | 33px tagline; 348×694 card, title top-left, stacked tabs at the bottom (active yellow) | 57px tagline 4 lines; 1360×720 card, tabs row at the bottom-left (yellow active 560 wide, two 140 glass tabs) | 3 slide images (one per tab) | tagline lines rise + fade in; image parallax ±72px; tabs fade in; hover on tabs |
| 3 | bento (#overview, part 2) | `hhhusher-v2-bento` | content (~1130 at 1440) | three stacked dark cards (title, text, link, media fills) | big card 835×960 left; two cards 485×485 and 485×420 stacked right; 40px gaps | 3 videos | card text fades in on view; link hover opacity .7 |
| 4 | features (#features) | `hhhusher-v2-features` | ~4 windows; media **100svh sticky** | sticky object behind; four text panels scroll over | panel 1 in the left third (head top, text lower); panels 2–4 in the right column at 915px | WebGL canvas, window-filling, pinned | headings rise per line; panel text fades in; canvas pinned (sticky) |
| 5 | microphone setups (#specifications) | `hhhusher-v2-mic-setups` | **100svh** at 390; content (965) at 1440 | full-bleed photo; heading, 6-item numbered list, text, BUY | same, left column, text 720 wide | 1 photo per setup | list items fade in staggered; hover yellow index/label |
| 6 | FAQ (#faq) | `hhhusher-v2-faq` | content | index (01 Product / 02 Features) on top, then list | sticky index left (number + label, 43px), list right from 740px | — | sticky index; active group switches with scroll (1 ↔ .15); accordion; hover fills the plus box |
| 7 | testimonials | `hhhusher-v2-testimonials` | content | heading 3 lines, two reviews stacked | 68px heading; two reviews side by side | — | reviews rise + fade in |
| 8 | footer | `hhhusher-v2-footer` | content (~600 at 1440) | newsletter, links, wordmark | newsletter left, two link columns right, giant wordmark | — | revealed from under the page (fixed curtain); wordmark letters slide in from the left, staggered, through a mask |

Products (`pages/products.tsx`):

| # | section | block | height | 390 | 1440 | media | motion |
|---|---|---|---|---|---|---|---|
| 1 | product hero | `hhhusher-v2-product-hero` | content (818 at 1440) | gallery, thumbs, 1/4 counter + arrows, title, price, text, full-width stepper + checkout | gallery left 726×427 + 4 thumbs + arrows; right: light 43px title, price row, text, stepper + checkout + note | 4 images | gallery switching; hover on buttons |
| 2 | tagline + reviews | `hhhusher-v2-reviews` | content | tagline, "Reviews", list | tagline full width; "Reviews" left, list right from 756px | — | tagline per line; reviews rise 40px + fade |
| 3 | technical specs | `hhhusher-v2-specs` | content (1177) | heading, table (group label on its own row), intro, FAQ button | 76px heading; intro + FAQ button left; 3-column table right with cream rules | — | table groups fade in |
| 4 | parts | `hhhusher-v2-parts` | content (953) | numbers left, names right (29px), rows at 15% | 57px names right-aligned, rows at 15% | 1 image per part (follows pointer) | rows rise 50px staggered; hover lights a row, its image follows the pointer |
| 5 | FAQ | `hhhusher-v2-faq` | — | — | — | — | — |
| 6 | footer | `hhhusher-v2-footer` | | | | | |

Terms (`pages/terms-of-use.tsx`): header, `hhhusher-v2-page-title` (dark band, 436px at 1440,
title bottom-left 76px; tight under the header at 390), `hhhusher-v2-legal` (cream, 640px column
of 43px headings and 16px paragraphs), footer.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| all pages | smooth scroll | Lenis wheel easing | — | `hhhusher-v2-smooth-scroll` (lenis), hydrate load |
| header | scroll direction | translateY 0 → -100% on scroll down, back on scroll up | .4s cubic-bezier(.32,.94,.6,1) | small effect in the header (hydrate load) |
| header / buttons | hover | links → yellow; BUY yellow → transparent with yellow text; glass .15 → transparent + cream border; play .2 → .4; links opacity → .7 | .3s cubic-bezier(.32,.94,.6,1) | Tailwind `transition` + `hover:` with that easing |
| hero video | scrubbed | translateY 0 → 50% of its height while the hero leaves | linear | CSS `animation-timeline: view()`, range `exit` |
| hero text | load | (not in the capture; the site's text-reveal fragments) rise + fade | .9s | CSS keyframes, fill both |
| taglines, h2/h3 headings | entering view | each line rises ~40px and fades 0 → 1, lower lines later | | `hhhusher-v2-reveal-text`: each word on its own `view()` timeline, so words on one line move together and lower lines follow |
| slider tabs | entering view | fade in | | CSS view timeline |
| slider/bento images | scrubbed | translateY -72 → 72px | linear | CSS view timeline on the placeholder, inside an `overflow-clip` frame |
| features canvas | pinned | sticky for the whole section; object fades .2 → 1 | | `position: sticky` + view timeline opacity |
| features body text | entering view | fade in | | CSS view timeline |
| mic list items | entering view, staggered | fade + small rise | | CSS view timeline with per-item range offset |
| mic list | hover / click | index box → yellow; label → yellow; active = yellow outlined | .3s | Tailwind hover; React state for the active setup (hydrate visible) |
| FAQ index | pinned + scrubbed | sticky; active label 1 ↔ .15 as each group passes | | sticky + named view timelines per group (`timeline-scope`) |
| FAQ plus box | hover | fills dark, icon cream | .3s | Tailwind hover; native `<details>` |
| testimonials / reviews | entering view | rise 40px + fade | | CSS view timeline |
| specs table | entering view | groups fade in | | CSS view timeline |
| parts rows | entering view, staggered | rise 50px | | CSS view timeline |
| parts rows | hover | row 15% → 100%; part image appears at the pointer and follows it | .3s | Tailwind group-hover + pointer position in CSS variables (hydrate visible) |
| footer | scroll to the end | page lifts off a fixed footer (curtain) | | `position: fixed` inside a `clip-path` wrapper of the same height |
| footer wordmark | entering view | letters slide in from the left through a mask, farther letters from farther away | | CSS view timeline on the footer wrapper, per-letter distance |
| terms loader panels | page load | panels scale away (page transition) | | skipped: a route-transition loader, not a section |

## Media slots and placeholders

All become props (`media?: ReactNode` or one per item) with a token-coloured stand-in of the
same box: hero video → full-window `bg-card` with a faint glow wash; slider images → 5px card
`bg-muted`; bento videos → `bg-muted` card surfaces; features canvas → a sticky window-sized
layer with a soft `bg-muted` panel where the object floats; mic-setup photos → full-bleed
`bg-muted` with a darkening wash on the text side; product gallery → `bg-muted` 1.7:1 frame +
1.54:1 thumbs; parts images → 0.88:1 `bg-muted` card that follows the pointer.

## Decisions

- Light (cream) is the faithful mode: the dark bands (hero, mic setups, specs, footer, terms
  title, header) force themselves dark with the `dark` class; tan bands use `bg-secondary`.
  The dark theme mode is a sibling: cream bands become charcoal, tan becomes deep bronze.
- Gutter and section padding follow the original's two sizes through a media query in the
  theme (`--page-gutter` 1.3rem → 2.5rem, `--section-y` 4.5rem → 7.5rem at 1024px).
- The header gets a dark backdrop once the page has scrolled (the original only shows it over
  the dark hero in the capture; over cream bands it would otherwise be unreadable).
- The cookie banner is the site's consent tool, not design: left out.
- The product hero is pure black in the original; we use the dark `card` token (#111).
- Overview: split into two blocks (tagline + tabbed slider, bento) — one captured section, two
  visual sections.

## Comparison round 1

Captured ours for the landing page, `products` and `terms-of-use`. Section crops come from a
full-page screenshot, where every scroll-driven reveal below the first screen is still in its
"before" state, so ours look empty there; the scroll frames show the content. Heights:
hero 900/900 (window), overview+bento 2370/2384, features 3528/3760, setups 994/965,
testimonials 688/737 (1440); product hero 838/818, specs 1271/1177, parts 958/953.
No horizontal overflow at 360/768/1024 on any page.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all display text | Hanken at 500 reads lighter and looser than Universal Sans 500 | same | — | yes: weight 570, tracking -0.02em |
| header | — | wordmark smaller than the original logo (100 vs 180px wide) | hide on scroll down: matches (translateY 0→-100px) | yes: 2.6rem |
| hero | layout as inferred (the original's 390 text is under its cookie banner) | matches: heading from 40%, text + 3 buttons bottom right | parallax 0→450px over a window: matches | — |
| overview | matches | matches (tagline 4 lines, card 720 tall, tabs) | lines rise per line, tabs fade, picture drift ±72px: match | — |
| bento | matches | matches (835 + 485 columns, 40px gaps) | text fades in: matches | — |
| features | — | placeholder panel ran under the right text column | stage sticky + fade .2→1, headings per line, text fades: match | yes: narrower panel |
| setups | 844 window-sized | matches | list items rise staggered: matches | — |
| FAQ | — | index went to 15% for both groups while the last group was below mid-window | sticky index: matches | yes: groups touch (padding not gap), last entry stays lit to the end |
| testimonials | matches | matches | reviews rise 40px: matches | — |
| footer | — | wordmark spanned 1050px of 1345 | curtain + per-letter slide from the left: matches | yes: capitals, 24vw |
| product hero | matches | title lighter than the original | — | yes: weight 400 |
| parts | names rarely wrap, rows shorter (527 vs 854) | matches | rows rise staggered; hover lights the row, picture follows the pointer | yes: names held to 65% on phones |
| specs, reviews, terms | match | match | fade / rise: match | — |

## Comparison round 2

Recaptured the landing page and `products` after the round 1 fixes; spot-checked frames
against the original's at the same scroll positions.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| display text | weight and set width now close to the original's | same | — | — |
| footer | wordmark ~94px, full width | wordmark 1240 of 1345px wide, cap height close to the original's 205px | per-letter slide (far letters travel farther): matches | — |
| FAQ index | — | first group lit until mid-section, second lit while it crosses mid-window and until the end (checked in a browser at 200px steps; the capture's sampler reports 0.15 throughout because it reads before the timeline updates) | sticky: matches | — |
| features | panel overlaps the text as the original's object does | panel now centre-left like the object | pinned stage: matches | — |
| parts | rows wrap like the original (two-line names) | matches | the floating picture keeps its last pointer spot while the page scrolls (the original re-tracks) | no: small, noted |
| products, terms | match | match | — | — |

Re-theme check: `hhhusher-v2-overview` under sample-ember (light) and `hhhusher-v2-faq` under
sample-ember (dark) both pick up the other theme's colours and fonts cleanly. Our own dark
mode turns the cream and tan bands into charcoal and deep bronze; the forced-dark bands are
unchanged.

### Still different, by design or by limit

- Media are placeholders (hero film, slider pictures, bento films, the 3D object, setup
  photos, product gallery, part pictures).
- Universal Sans and Aeonik are closed fonts: Hanken Grotesk and Geist Mono stand in.
- The 390 hero text layout is inferred: the original's capture has its cookie banner over it.
- The terms page's page-transition loader (panels scaling away on load) isn't rebuilt.
- The original's FAQ list on its own looked the same for both groups in the capture; ours
  lists both groups' questions one after the other, so our FAQ is taller (1238 vs 963).
