# puzzle — recreation notes

Source: https://puzzle.io/ (captured in advance, 2026-10-23; landing page only, no other pages asked for).
Fictional stand-in: **Oakbook**, AI-native bookkeeping software with optional bookkeepers on top.

## Design language

- **Palette roles.** A warm off-white "powder" page (#f3f4f1) with pure white cards; near-black
  ink (#0a0b0b) for text and the main solid button; one deep brand violet (#311164) for whole
  bands (AI suite, closing CTA) and the "services" card; a soft violet (#ceb4fa) for the
  "try for free" button; a very pale violet (#f3edfe) for callout banners and the managed plan
  card; a lavender (#e6def8) announcement bar; a vivid spring green (#50faab) for the logo
  mark and the hero badge's dot, and a mint (#cafde6) card. Hover moves text to a brighter
  violet (#8a4ef4) and solid buttons to the deep violet. Secondary text is ink at 60–70%.
- **Type.** Haskoy (a friendly grotesk) for headings and body at 400–500 — headings are never
  bold; JetBrains Mono uppercase for eyebrows ("TWO WAYS TO …") in grey with wide-ish tracking.
  Scale at 1440: h1 52/1.25, h2 36/1.2, card titles 28/1.25, big figures 36, body 18/1.5 and
  16/1.5, small print 14. At 390: h1 ~44/1.15 centred, h2 28/1.2, card titles 24, body 15.4/1.5.
- **Spacing rhythm.** Content-sized sections, ~54px gaps above/below cards at 1440, 28px at 390;
  cards have 32px inner padding (1440) / 24px (390). Lists of ticks 34px apart.
- **Grid.** Two widths: a wide 1332px column (hero, AI suite, services, stories) and a 1200px
  column (stats, two-ways, chooser, platform, callouts). Two-up and four-up card rows; all stack
  to one column at 390 with 28px gutters.
- **Shapes.** Rounded everything: cards ~16–18px, the AI-suite panels ~29px, buttons 8px, pills
  fully round. Hairline borders (ink at 10%) on the chooser and migrate cards.
- **Depth.** Almost flat. Stat and chooser cards carry a soft violet shadow
  (rgba(192,143,238,.2) 0 2px 20px). The deep-violet bands have faint pixel-square shapes in
  their corners (decorative puzzle squares, built as plain token squares).

## Type

| Original | Class | Width | x-height | Stand-in | Why |
|---|---|---|---|---|---|
| Haskoy (display + body) | soft grotesk with geometric leanings, single-storey g, straight-tailed y | normal | large | **Figtree Variable** | the closest open grotesk on all three traits: geometric-leaning, normal width, generous x-height, same friendly round bowls; available as a variable font so 400/500 match |
| General Sans (a few button labels) | neo-grotesk | normal | large | Figtree (same) | too few uses to warrant a second family |
| JetBrains Mono (eyebrows, numerals) | monospace | normal | large | **JetBrains Mono Variable** | it's open (OFL), so the original itself |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | announcement bar + nav | puzzle-header | content (111 / 119px), sticky | lavender bar (one line + X), logo · "try" button · burger | bar centred + X; logo, 6 nav links (3 with chevrons), dark + violet buttons, sign in | — | sticky; link hover colour; dismiss bar; burger menu |
| 2 | hero | puzzle-hero | content (919 / 576) | centred: mint badge, h1, text, full-width stacked buttons, link, media below | 2 columns: left copy + buttons in a row, right 617×370 media r18 | 1 video/image, 1.67 | button hovers |
| 3 | stat cards | puzzle-stats | content (655 / 263) | 4 stacked white cards | 4-up row in 1200 | — | reveal on entering view, rise 21px + fade, staggered |
| 4 | two ways | puzzle-paths | content (1330 / 663) | eyebrow + h2 centred, 2 stacked cards, footers stacked centred | 2-up: white card + deep violet card, footer row price + button | — | button hovers |
| 5 | AI suite | puzzle-ai-suite | content (2836 / 2116) | violet band: heading, outline button, feature card / panel / feature card / panel, MCP strip | 2×2 grid: translucent feature cards (media inside) + powder chat panels; MCP strip full width | 2 (565×500, 565×405) | button hovers |
| 6 | services | puzzle-services | content (2285 / 1176) | heading; 2 plan cards; sub-heading; 4 stacked project cards | 2-up plans (white + pale violet); sub-heading; 4-up project cards | — | — |
| 7 | how much help | puzzle-chooser | content (977 / 469) | white panel, centred heading, full-width outline button, 4 stacked numbered cards | white panel, heading left + button right, 4-up numbered cards | — | — |
| 8 | platform + integrations | puzzle-platform | content (932 / 505) | mint card then white card with chips | 2-up | — | button hovers |
| 9 | money-back callout | puzzle-callout | content (510 / 342) | pale violet panel, button full width | title + small print left, button right | — | — |
| 10 | customer stories | puzzle-stories | content (717 / 733) | heading centred, one card + peek, arrows centred, link | heading, 4.5 cards of 299×378 r18, arrows left, link right | 10 photos 0.79 / 0.64 | horizontal carousel, card hover zoom |
| 11 | migrate | puzzle-migrate | content (1296 / 998) | heading, stacked buttons, 3 stacked cards (middle has media) | heading, buttons row, 3-step timeline, 3-up cards | 1 (346×206) | — |
| 12 | firms callout | puzzle-callout (2nd use) | content (408 / 293) | same as 9 with eyebrow | same as 9 with eyebrow | — | — |
| 13 | closing CTA | puzzle-cta | content (598 / 624) | violet band rounded top, centred, stacked buttons | violet band rounded top corners, centred, buttons row | — | button hovers |
| 14 | FAQ | puzzle-faq | content (1153 / 1206) | white band, title, tabs, rows with chevron | same in a 960px column | — | tabs, accordion open, chevron rotate |
| 15 | footer | puzzle-footer | content (845 / 652) | framed (corner brackets), logo + text + socials, accordion groups, legal | framed: brand column + 3 link columns split by hairlines, bottom bar | — | link hover opacity |

No section is "sized by the window" in the capture; all heights come from padding and content.

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header | pinned | whole header (bar + nav) sticks to the top | for the whole page | `position: sticky; top: 0` |
| header nav links | hover | colour ink → bright violet | 0.3s ease | `transition-colors duration-300 hover:text-highlight` |
| header bar | click | announcement bar closes | instant | `useState`, hydrate load |
| header (390) | click | burger opens a link panel | 0.3s | `useState` + CSS grid-rows transition |
| solid dark button | hover | ink → deep violet | 0.2s ease | `hover:bg-primary duration-200` |
| violet button | hover | soft violet → deep violet, text → white | 0.2s ease | `hover:bg-primary hover:text-primary-foreground` |
| outline button | hover | transparent → ink at 10% | 0.2s ease | `hover:bg-foreground/10` |
| card button (#212427) | hover | → deep violet | 0.4s ease | `hover:bg-primary duration-400` |
| stat cards | entering view | opacity 0→1, translateY 21→0, the 4th card a little later | ~half a screen of scroll | CSS `animation-timeline: view()`, `animation-range: entry 0% entry 100%`, per-card range offset |
| stories | click arrows / swipe | track slides one card | 0.3s ease (Swiper) | scroll-snap track, arrows `scrollBy` smooth, hydrate visible |
| stories card | hover | photo scales up slightly | 0.4s ease | `group-hover:scale-105 duration-400` on the placeholder |
| FAQ | click | tab switch; answer opens, chevron turns 90° | 0.3s ease | `useState`, grid-rows 0fr→1fr, rotate-90 |
| footer links | hover | opacity 0.7 → 1 | 0.3s | `hover:opacity-100` |
| footer (390) | click | groups open | — | `<details>` (no JS) |

Skipped: the cookie banner and chat launcher (third-party overlays, not the design).

## Media slots

- hero: 617×370 (1.67) r18 video/image → `media` slot, soft violet gradient placeholder (`highlight`/`secondary`), with the "play the video" pill kept as a built UI chip.
- AI suite feature cards: 565×500 and 565×405 r7 → `media` per feature, powder placeholder.
- stories: ten 299×378 photos r18 (0.64 at 390) → `media` per story, muted placeholder under a dark scrim so the white text still reads.
- migrate middle card: 346×206 photo → `media`, gradient placeholder flush with the card bottom.

## Decisions

- **Chat panels in the AI suite are built** (bubbles, three figure tiles, a subscription table
  with two buttons) because in the original they are HTML text, not media; all their text is
  props. The left feature cards' illustration/video is a placeholder.
- **One callout block for sections 9 and 12** (same pale violet banner; eyebrow optional).
- **Token mapping:** `primary` = deep violet (bands, hover fill), `foreground` = ink (main solid
  button is `bg-foreground`), `secondary` = soft violet button, `accent` = pale violet surfaces,
  `highlight` = bright violet hover text, `glow` = spring green (logo, badge, mint card as
  `bg-glow/30`), `muted` = the greige chip colour, `card` = white.
- **Page width:** `--page-width: 87rem` includes the gutters (1392 − 2×28 = 1336 ≈ the 1332px
  column); the 1200px column is `max-w-[78.5rem]` with the same gutter.
- Dark mode is a sibling: an ink-violet night page with violet-tinted panels; the deep violet
  bands stay violet.

## Comparison round 1

Heights 1440 (original → ours): header 119→120, hero 576→602, stats 263→264, two ways 663→704,
AI suite 2116→2095, services 1176→1228, chooser 469→495, platform 505→518, guarantee 342→391,
stories 733→801, migrate 998→1027, firms 293→296, CTA 624→650, FAQ 1206→1243, footer 652→651.
390 within ±60px everywhere except two ways (1330→1461). No horizontal overflow at 360/768/1024.
Motion: sticky header ✓; stat-card reveal (opacity 0→1, rise 21→0) ✓; hover colours and timings
on links and every button variant match the original's list ✓; story card hover zoom ✓.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| all display titles | Figtree at 400 reads lighter than Haskoy | same | — | yes: card/section titles to 500 (stat figures and feature titles stay 400) |
| header | announcement truncates (longer copy) | ✓ | ✓ | yes: optional `shortText` for phones |
| hero | ✓ | 26px taller (bottom padding) | ✓ | yes: pb 100→80px |
| two ways | eyebrow wraps, lists wrap (longer copy); card 40px taller | price line wraps to 3 lines; list pitch 37 vs 34px | ✓ | yes: shorter demo copy, list gap 12→10px |
| AI suite | ✓ | ✓ (heading 3 lines vs 2: longer copy) | — | — |
| services | ✓ | plan cards 30px taller | — | yes: tighter inner spacing |
| chooser | ✓ | heading row 14px lower than original (aligned to bottom) | — | yes: align top |
| guarantee | ✓ | title wraps to 3 lines | — | yes: shorter demo title |
| stories | heading 3 lines vs 2 | heading 2 lines vs 1 | ✓ | yes: wider heading measure |
| firms callout | ✓ | button label left-aligned when wrapped | — | yes: centred |
| CTA | ✓ | pixel squares brighter than the original's; 26px taller | — | yes: dimmer squares, pb 160→144px |
| FAQ | ✓ | 37px taller | — | yes: pb 96→80px |

## Comparison round 2

Heights 1440 (original → ours): header 119→120, hero 576→582, stats 263→264, two ways 663→677,
AI suite 2116→2095, services 1176→1208, chooser 469→470, platform 505→518, guarantee 342→346,
stories 733→758, migrate 998→1027, firms 293→296, CTA 624→634, FAQ 1206→1227, footer 652→651.
390: all within ±60px of the original (two ways 1330→1363, AI suite 2836→2733). No overflow at
360/768/1024. Motion list unchanged: sticky header, stat-card reveal (0→1, 21px), hovers.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| two ways | ✓ | price line wrapped to 3 lines in the violet card | ✓ | yes: shorter demo price line |
| stories | ✓ | heading on 2 lines vs 1 | ✓ | yes: no max width from desktop |
| dark mode | icons and the "Software" tag on the green tiles were light-on-green | same | — | yes: `dark:text-background` on green/violet tiles |
| AI suite | answer card 100px shorter (shorter demo copy) | ✓ | — | no: content length only |
| stories cards | tag set in mono, the original uses a serif fallback | same | — | no: kept mono (the original's serif looks like a missing font) |

Re-theme check: `puzzle-paths` under sample-ember (light) and `puzzle-ai-suite` under
sample-midnight (dark) both re-colour cleanly; the AI band takes the other theme's brand
colour, as its notes say.
