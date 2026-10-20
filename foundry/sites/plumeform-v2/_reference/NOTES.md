# plumeform-v2 — recreation notes

Captured in advance (precapture.json): landing, `original-pricing`, `original-about`. Nothing
was skipped. Most section crops past the hero are blank (the site's reveals had not fired when
the crops were taken), so the **scroll frames** at 1440 and 390 were the main source. The
landing's FAQ ("Before you start."), template gallery and footer never appear in a landing
frame: the FAQ and footer are taken from the pricing/about frames (same components there), the
template gallery layout is inferred (see Decisions).

Fictional product for the recreation: **Murmur**, a questionnaire builder (wordmark in Manrope
plus lucide `AudioWaveform`). All copy is ours.

## Design language

- **Two surfaces, one page.** A warm off-white paper (`oklch(0.984 0.005 91)`) for most of the
  page, and deep green-black bands (`oklch(0.185 0.028 195)`) lit by a fluted-glass canvas
  (vertical ribbed teal light). Paper and band alternate: hero (dark) · rows (paper) · checks
  (dark) · embed (paper) · question types (dark) · rows (paper) · looks (dark) · integrations
  (paper) · at a glance (dark) · pricing (paper) · import (dark) · FAQ, templates, contact
  (paper) · footer (teal → dark).
- **Palette roles.** Ink `oklch(0.23 0.014 210)` for headings and dark pills; slate
  `oklch(0.42 0.012 208)` for body; plume teal `oklch(0.42–0.48 0.09 186)` for toggles, bars,
  underlines and the Pro card; mint `oklch(0.925 0.04 180)` for hover/highlight on dark and
  the PRO badges (`oklch(0.76 0.082 182)` on dark); pastel fog (sky, peach, butter, mint) as
  blurred blobs inside and around the light panels.
- **Type scale (Manrope).** h1 72px/1.0 at 1440, 60px at 390, weight 800, tracking −0.035em.
  h2 48px (36px at 390), weight 700, tracking −0.025em, line-height 1.05. Lead 20px; body
  16px/26px (14px/22px in cards); eyebrows 11–11.5px, weight 600, tracking 0.22em, upper case;
  UI text 13–14px. Big stat numerals ~128px weight 800 with a paper→mint gradient fill.
- **Spacing rhythm.** Very airy: feature rows sit ~250px apart at 1440 (~160px at 390);
  section padding ~120–150px. Content column 1104px (168px margins at 1440), 24px gutter at 390.
- **Shapes.** Pills everywhere (buttons, header, chips, toggles); 28px cards on dark and on
  pricing; 20px light panels; 10px fields; footer has 33px top corners and a 16px side inset.
- **Depth.** Dark glass cards: white 7%→3% gradient, 1px white/10 border, 1px inset top
  highlight, a long soft dark drop (0 20px 50px −30px). Light panels: near-white glass with a
  white inset edge and a faint 0 20px 46px −30px shadow, sitting in a pastel fog.

## Type

| Original | Classification | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Manrope (200–800) | geometric-grotesque sans | normal, tall x-height | **Manrope Variable** (`@fontsource-variable/manrope`, already installed) | it is the original's face and is open (OFL) |
| Instrument Serif italic (used once, a hand-written "← us" in the compare table) | condensed display serif | narrow | not loaded; the note is set in Manrope italic | one glyph-run isn't worth a font download |
| ui-monospace (code chip `{{q:name}}`, API line) | mono | — | the theme's mono stack (system ui-monospace) | same as the original |

## Section map (landing)

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `plumeform-v2-header` | 52px pill, sticky 8px | logo · Start free · burger | logo · 6 links (3 with chevrons) · Log in · Start free | — | sticky; turns dark over dark bands; hover tint |
| 2 | hero | `plumeform-v2-hero` | content (1093 / 1234) | centred h1 60px, lead, CTA, tall phone-shaped frame | centred h1 72px, lead, CTA, 1026px framed embed overhanging the band by ~75px | fluted-glass canvas → backdrop placeholder; embedded survey → frame placeholder | load rise; aurora fade-in; halo border spin loop; frame scale scrubbed |
| 3 | intro line + 3 feature rows | `plumeform-v2-feature-rows` | content (2332 / 2975) | text then panel | 2 columns, alternating sides | 3 demo panels → panel placeholders | reveal (fade, rise 22px, blur); blob drift scrubbed + float loop |
| 4 | quality checks (dark) | `plumeform-v2-card-grid` | content (1040 / 2045) | centred heading, stacked cards | centred heading, CTA + note row, 3×2 glass cards | fluted-glass backdrop | backdrop fade-in; staggered card reveal |
| 5 | embed | `plumeform-v2-embed` | content (1190 / 1894) | heading, body, panels stacked | heading left / body right; two panels with an arrow between | site panel + dashboard panel → placeholders in framed chrome | reveal; blob drift |
| 6 | question types (dark) | `plumeform-v2-question-types` | content (1638 / 2063) | heading, body, chips, card, 2-col type list | heading+chips left, body+card stack right; 5-col type list | question demo card → placeholder in a stacked glass card | reveal; chip hover |
| 7 | compare + open-text rows | `plumeform-v2-feature-rows` | content (1917 / 2834) | text then panel | 2 columns, alternating; bullets | 2 panels → placeholders | reveal; blob drift |
| 8 | make it yours (dark) | `plumeform-v2-looks` | content (1384 / 2708) | stacked | heading; picker list + preview; 54 stat card + theme chips; 3 small cards; link | layout preview → placeholder | reveal; swap-in when picking a layout |
| 9 | integrations | `plumeform-v2-integrations` | content (1301 / 2071) | stacked | heading left / body right; response panel → dashed curves → 5 integration cards; export/share chip rows | response card → panel placeholder | reveal; blob drift |
| 10 | at a glance (dark) | `plumeform-v2-glance` | content (886 / 1243) | stacked stat cards | bento: tall 100 card, two small, one wide | backdrop | reveal stagger |
| 11 | pricing | `plumeform-v2-pricing` + `plumeform-v2-compare` | content (2003 / 3054) | stacked cards, scrolling table | heading + link right; Free / Pro cards; compare table | — | reveal; monthly/yearly toggle |
| 12 | import (dark) | `plumeform-v2-card-grid` | content (792 / 1246) | stacked | left heading with PRO badge; 3 eyebrow cards | backdrop | reveal |
| 13 | FAQ | `plumeform-v2-faq` | content (622 / 930) | stacked | heading then full-width white question cards with + | — | reveal; open/close |
| 14 | templates + CTA band | `plumeform-v2-templates` + `plumeform-v2-cta-band` | content (1461 / 2045) | stacked | heading, filter chips, 3-col template cards; mint wash; 1104×553 dark rounded band | band backdrop placeholder | reveal; card hover lift |
| 15 | contact | `plumeform-v2-contact` | content (715 / 1288) | stacked | text + choice pills + bullets left, form panel right | — | reveal; blob drift; choice toggle |
| 16 | footer | `plumeform-v2-footer` | content (843 / 1761) | 2-col link grid | brand + actions; 5 link columns; library row; legal row | — | hover underline |

Pricing page: header · `plumeform-v2-pricing` (page heading variant) · `plumeform-v2-compare` (with
heading and "long version" links) · `plumeform-v2-faq` · `plumeform-v2-cta-band` · footer.
About page: header · `plumeform-v2-about-intro` (heading, person card) · `plumeform-v2-cta-band` · footer.

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| header | pinned | sticky 8px from top for the whole page | — | `position: sticky` top-2 |
| header | scroll position | tone flips light ↔ dark over dark bands | 0.3s colour transition | JS hit test under the bar (`.dark` ancestor), `hydrate: load` |
| header / buttons | hover | link colour + 8% tint; CTA bg change and lift 1px | 0.2s | Tailwind `transition` + `hover:` |
| hero backdrop | load | aurora fade-in (opacity 0→1, scale 1.04→1) | 1600ms | CSS keyframes, fill both |
| hero h1 / lead | load | rise in place (translateY 16→0, no fade) | 650ms | CSS keyframes |
| hero CTA / frame | load | rise (opacity 0→1, translateY 16→0), staggered | 650ms | CSS keyframes with delays |
| hero frame | loop | halo border: conic gradient spinning round the frame | 3s linear infinite | CSS keyframes on a rotating conic layer clipped by the frame |
| hero frame | scrubbed | scale 0.86→1 as it scrolls up; glow 0.18→0 | entry → cover 45% | CSS `animation-timeline: view()` |
| rows, cards, headings | entering view | opacity 0→1, translateY 22→0, blur 6px→0; staggered in lists | over the first 220px of entry | `plumeform-v2-reveal` component: view timeline, range `entry 0 → entry 220px`, +40px per stagger step |
| panel fog blobs | scrubbed | translateY −50→−10px, translateX, scale 1.1→1.02 | whole pass | view timeline on the blob layer (`cover`) |
| panel fog blobs | loop | slow float | 12s | CSS keyframes on an inner span |
| fluted-glass canvases | entering view | opacity 0→1 | quick | `plumeform-v2-backdrop`: view timeline `entry 0% entry 25%` |
| looks picker | click | detail swaps in (opacity, translateY 6px) | 340ms | React state + CSS keyframes (`hydrate: visible`) |
| question chips | hover | text → foreground, border → white/30 | 0.2s ease | Tailwind |
| template cards | hover | lift 2px, border and shadow | 0.3s cubic-bezier(0.2,0.8,0.2,1) | Tailwind |
| FAQ | click | open; + turns to × | 0.2s | native `<details>`, `group-open:rotate-45` |
| pricing | click | monthly/yearly toggle swaps price | 0.2s | React state (`hydrate: visible`) |
| contact | click | segment choice | 0.2s | React state (`hydrate: visible`) |

Not rebuilt (motion inside media): the canvas's own shimmer, the AI-summary chips flying into a
summary (`li.rounded-field` scale 1→0.1), the embedded survey's spinner, the dashboard demos.

## Media slots → placeholders

- Fluted-glass canvases (hero, checks, question types, looks, glance, import, CTA band):
  `plumeform-v2-backdrop`, a `media` slot; empty = dark token surface with a soft `glow` wash.
- Hero embedded survey (924×567 → 1026 wide at full scale; 342×720 at 390): the frame with its
  halo, label strip and a `bg-muted` body.
- Every interactive product demo panel (feature rows, embed, integrations response card,
  question card): the light glass panel (fog, radius, border, shadow) kept, its inside a
  `media` slot with a plain `bg-muted/60` placeholder of the original's height.
- Looks: the small layout preview → placeholder.

## Decisions

- **Light is the faithful mode.** Dark bands force themselves dark with the `dark` class (as
  clerk does); in the theme's dark mode the paper sections turn ink, the bands stay.
- The demo panels are product demos (like screenshots), so they are placeholders inside a built
  frame; UI that is page layout (chips, toggles, pricing toggle, form fields, type list,
  integration cards, swatch chips) is built.
- Reveals are scroll-driven CSS (no JS), inside `@supports (animation-timeline: view())` and
  `prefers-reduced-motion: no-preference`, so static HTML shows everything.
- Templates section (never captured visibly): heading, wrap of filter pills, a 3-column grid of
  light glass cards with hover lift (the capture lists `div.flex.flex-wrap` and
  `a.glass-card-light.group` reveals), then the dark CTA band that the pricing and about pages
  show in full (the landing's 1104×553 canvas).
- Landing FAQ uses the same block as the pricing FAQ (white cards with a round + button).
- Theme swatches in "looks" take token names, so they re-theme.
- Pastel fog blobs use `chart-3/4/5` and `glow` (sky, peach, butter, mint); noted in the theme.

## Round 1 (ours vs original, light mode)

Section heights at 1440 (orig → ours): hero+rows 3425 → 3266 · checks 1040 → 1106 · embed 1190 → 1189 ·
question types 1638 → 1673 · compare rows 1917 → 1710 · looks 1384 → 1468 · integrations 1301 → 1129 ·
glance 886 → 996 · pricing+table 2003 → 1870 · import 792 → 741 · FAQ 622 → 649 · templates+band 1461 → 1496 ·
contact 715 → 714 · footer 843 → 875. No horizontal overflow at 360/768/1024 (after fix below).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all light panels | fog blobs spilled past the window: page was 447px wide | — | — | yes: `overflow-x-clip` on every section holding panels |
| header | — | stayed light over the dark hero: the hit test found the full-width `<header>` itself | tone flip | yes: outer header ignores the pointer, only the pill is hidden for the test |
| hero | 160px taller; frame starts at 88% (original 76–78%, grows from its centre) | close | grow scrubbed ✓, halo loop ✓, load rise ✓ | yes: phones start at 78% from the centre, aspect 342/680, less bottom padding |
| feature rows | headings wrap to 3 lines (our copy longer) | same | reveal ✓, fog drift ✓ | yes: shorter copy |
| panels | fog shows faint concentric rings (blurred discs) | same | — | yes: radial-gradient blobs instead of blur filters |
| question types | all five chip groups wrap; original shows one group as a sideways-scrolling row | close | reveal ✓ | yes |
| compare rows / integrations | — | ~200px / ~170px shorter | — | yes: taller placeholders, integration cards 116px |
| glance | tall card 300px tall on phones | close | stagger ✓ | yes: tall only from tablets up |
| backdrop | fluted ribbing not drawn (placeholder) | same | fade-in ✓ | no: media placeholder by design |
| FAQ | 250px shorter (shorter questions) | close | — | no: content length |

## Round 2

Heights at 390 (orig → ours): hero 1234 → 1246 · rows 2975 → 2710 · checks 2045 → 2062 · question types 2063 → 2153 ·
compare rows 2834 → 2540 · looks 2708 → 2859 · integrations 2071 → 1947 · glance 1243 → 1452 · contact 1288 → 1283 ·
footer 1761 → 1715. Pricing page 1440: 2834 + 753 → 2987 + 752; about page 1440: 1464 → 1537. All three pages fit at
360/768/1024. Motion list of ours shows every inventory row with the same kind and direction: sticky header; hero
load rise + aurora + halo loop + scale scrubbed 0.88→1; reveals opacity 0→1 / 22px / blur; fog drift −50→−10px,
scale 1.1→1.02; backdrop fades; hover colour + 8% tint on links, paper→mint + 1px lift on pills, chip border 12%→30%.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| pricing page plans | — | cards half-revealed (blurred) in the first screen: the reveal range was a share of each element's height | reveal | yes: fixed 220px reveal distance (+40px per step) |
| panels | faint ripple inside panels (backdrop blur over gradients) | same | — | yes: no backdrop blur on the panel |
| hero frame | frame now starts at 78% from its centre like the original | same | ✓ | — |
| looks / glance | ~150 / ~200px taller on phones (longer copy) | close | ✓ | no: content length |
| CTA band, backdrops | no fluted ribbing (placeholder) | same | fade ✓ | no: media placeholder by design |
| re-theme | `plumeform-v2-feature-rows` and `plumeform-v2-pricing` under `sample-ember`: fog, cards, Pro card and type follow the theme | — | — | ✓ |
| dark mode | paper sections turn ink, bands and glass panels stay legible | — | — | ✓ |
