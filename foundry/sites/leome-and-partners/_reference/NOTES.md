# leome-and-partners: notes

Recreating the landing page of https://leome-and-partners.com/ (a law firm, Webflow + GSAP
ScrollTrigger + Lenis). Precaptured; no other pages asked for. Our fictional firm:
**Marlow Kessler**, a small commercial law practice.

## Design language

- **Palette:** one deep bottle green (#052824) everywhere, a near-black green (#021d1a) for
  overlays, and one pale mint (#b1f9e1) for almost all text, hairlines (mint at 30%/50%),
  filled buttons and arrow tiles. White is used sparingly: the second hero line and the
  article descriptions. Tag chips are mint at 15% on the green. No shadows anywhere.
- **Type:** one family (Brockmann) at 500 for display and 400–500 for text. Display sizes
  are tight (line-height 1.05–1.2) with -0.02em tracking: 88px hero (60px phone), 64px
  section headings (44px phone), 32px card titles (24px phone), 28px statement paragraph
  (20px phone), 24px links and article titles, 16px body, 12–13.6px labels and chips.
- **Spacing:** em-based. Gutter 40px at desktop, 16px on phones; section padding
  7em (112px) at desktop, 5em (80px) on phones; gaps 2em (32px).
- **Grid:** full-bleed (no max width), three or four columns with 32px gaps.
- **Shapes:** square corners (radius 0), 1px mint hairline borders, small 11px mint squares
  as corner marks on image panels, 48px mint tiles holding a thick up-right arrow.
- **Depth:** none; depth comes from motion (sticky hero covered by the next panels,
  parallax photos, cards drifting at different speeds).

## Type

| Original | Class | Width | x-height | Ours | Why |
|---|---|---|---|---|---|
| Brockmann (500/400) | geometric-grotesk sans, double-storey a, single-storey g, low contrast | normal | large | **DM Sans Variable** (already installed) | closest open geometric-grotesk with the same a/g shapes, large x-height and a firm 500; Inter/Geist would be the generic default |

## Section map

| # | section | block | height | 390 | 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| – | fixed header | `-header` | content | logo mark + two-line wordmark left, mint "Menu" button right, 40px insets | same | none (mark is a lucide icon) | fixed; menu button: chars roll, bg insets, bars shorten on hover; opens a full-screen menu |
| 1 | hero | `-hero` | **100svh, sticky** | centred: line 1 (60px mint), photo 358×239, line 2 (60px white); four practice labels along the bottom | same, 88px, photo 512×341 | hero photo 3:2 | intro panel slides up; words rise out of masks; labels rise; photo scales up with scroll; whole hero stays pinned while the next panels cover it |
| 2 | statement | `-statement` (on `-media-panel`) | max(100svh, width/1.5) | full-bleed photo, corner marks, 20px paragraph bottom-left | 960 tall, paragraph 28px, ~29em wide | full-bleed photo with parallax | photo parallax ±8%; paragraph rises line by line |
| 3 | expertise | `-expertise` | content (py-section) | heading, card 01, "Our services" link, cards 02–04, all full width squares | 3 columns: heading col 1, link col 3, cards staggered (01 col 2 top, 02 col 1, 03 col 3 lower, 04 col 2 bottom) | none | cards drift at three speeds (desktop); a mint panel covering each card shrinks into its top-right corner as it enters; title fades up; heading rises; arrow swaps on hover |
| 4 | team | `-team` (on `-media-panel`) | as 2 | full-bleed photo, heading (44px, wraps to 5 lines) and "About us" link below | heading (64px, 2 lines) bottom-left, link bottom-right | full-bleed photo with parallax | parallax ±8%; heading rises line by line |
| 5 | insights | `-insights` | content | heading, three articles stacked (first image 16:9, others 300px tall) | heading, 4-col grid: first article spans 2 (664×300), two 316×300 | three article photos | heading rises |
| 6 | footer | `-footer` | content | photo frame, 16px inset green panel: big mark, links + hours in two columns, wordmark 10vw, credit, legal row | photo frame, 28px inset panel: mark, 4-col grid (links col 3, hours col 4), 11vw wordmark, one legal row | full-bleed backdrop photo (shows as a frame) | wordmark letters rise one by one; links roll on hover |

## Motion inventory

| section | trigger | what changes | timing | how we build it |
|---|---|---|---|---|
| page | wheel | Lenis smooth scrolling | ~1.1s glide | `-smooth-scroll` component (lenis), hydrate load |
| header | always | fixed for the whole page | – | `position: fixed` |
| header menu | hover | label characters roll up 1.3em to a copy (staggered), button fill insets 0.125em, outer bars shorten to half and spread | 0.6s cubic-bezier(0.625,0.05,0,1) | `-roll-text` component (CSS transitions, per-char delay); Tailwind transitions |
| header menu | click | full-screen menu reveals with a clip-path; big links; hovering one dims the others to 15% | clip-path 1s cubic-bezier(0.9,0,0.1,1) | React state + CSS transitions; `:has(li:hover)` dimming (**inferred**: the open menu isn't in the capture) |
| hero | load | intro panel slides up 0 → -100% | ~0.9s | CSS keyframes, fill both |
| hero | load | each word rises 106px → 0 out of its mask (stagger) | ~0.9s, expo-out | `-word-reveal` component, load mode (CSS keyframes + per-word delay) |
| hero | load | bottom labels rise 12px → 0 | ~0.6s | CSS keyframes |
| hero | scrubbed | photo scale 1 → 1.5 inside its frame | over the scroll | CSS `animation-timeline: scroll(root)`, 1 → 1.3 over the first window (the rest is hidden anyway) |
| hero | pinned | hero sticky while panels 2–4 slide over it | – | `position: sticky; top: 0` + page wraps later blocks in `relative z-10` |
| statement, team | scrubbed | photo layer translateY -77 → 77px (≈ ±8%) | linear | CSS view timeline, cover 0–100% |
| statement, team, expertise, insights headings | entering view | lines rise 39–77px → 0 out of masks | ~0.8s | `-word-reveal` view mode: each word's mask has its own view timeline, so all words on a line move together and lower lines follow: a line reveal without JS splitting |
| expertise cards | scrubbed (desktop) | translateY 86 → -43 (01, 04), 130 → -43 (02), 173 → -65 (03) | linear | CSS view timeline per card, cover 0–100%, from 1024px |
| expertise cards | entering view | mint overlay scales 1 → 0 from the top-right corner; title opacity 0.35 → 1 | – | CSS view timeline, entry 20–100% |
| expertise cards | hover | arrow leaves to the top-right, a copy comes in from bottom-left; border brightens | 0.6s cubic-bezier(0.625,0.05,0,1) | Tailwind transitions |
| footer | entering view | wordmark letters rise 100% → 0, one after another | scrubbed | CSS view timeline on the wordmark, per-letter range offset (`--lp-i`) |
| footer links, line links | hover | characters roll up to a copy | 0.6s | `-roll-text` |

## Media slots and placeholders

- hero photo 3:2 (358×239 / 512×341): `bg-muted` frame with a soft glow gradient inside the
  scaling layer, so the scroll zoom is visible.
- statement and team photos, full bleed, 120% tall for parallax: `bg-muted` → `bg-card`
  gradient layer, a bottom scrim (`to-card/80`, the original's black 0→80% gradient).
- insight photos (664×300, 316×300; phone 16:9, 358×300): `bg-muted`.
- footer backdrop photo: a soft `glow` → `muted` gradient (the original's photo reads as a
  teal-to-sand frame).
- The logo griffin (header and footer) becomes a lucide icon (`Scale`) passed as `mark`.
- The Webflow "Nominee" badge is third-party, not recreated.

## Decisions

- **Faithful mode is dark** (`.dark`); light is a pale-mint-paper sibling with green ink.
- Token mapping: foreground and primary = mint; highlight = white (second hero line);
  muted-foreground = white (article descriptions); accent = mint 15% (chips); border = mint 30%;
  input = mint 50% (the underline of text links); card = #021d1a (menu, intro panel).
- `--page-gutter: clamp(1rem, 2.78vw, 2.5rem)` gives 16px at 390 and 40px at 1440; the header
  keeps 40px at every width as the original does.
- `--section-y: clamp(5rem, 7.8vw, 7rem)`.
- Media panels are `min-h-svh aspect-[3/2]`: window-sized on phones (844 in 844), 960 at
  1440×900, as captured.
- Expertise stagger uses percentage margins (of the column width) so the offsets scale
  between 1024 and 1440.
- The "Our services" link sits after card 01 on phones (as captured) and top-right at desktop.
- The cards' hidden sub-lists (the original's DOM holds sub-services per card) are not shown
  in any frame; not built.
- The footer wordmark is 11vw (10.2vw on phones) like the original; a 14-letter name fills a
  little less of the width than the original's 16.

## Comparison round 1

Heights: ours 900 (sticky, window) / 960 / 1585 / 960 / 842 / 809 at 1440 against the
original's 900 / 960 / 1584 / 960 / 845 / 798; at 390 844 (window) / 844 (window) / 1881 /
844 (window) / 1722 / 894 against 844 / 844 / 1881 / 844 / 1843 / 967. No overflow at 360,
768 or 1024. Every motion row shows in ours' Motion list (fixed header, sticky hero, scale
1→1.3 scrubbed, panel drift ±81px, word rises, cover scale 1→0, name opacity, card drifts
at three speeds, footer letters).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | first line "Sound counsel" wrapped to two lines at 60px (the original's fits on one) | matches | load rise, intro, label lift and zoom all present | yes: copy changed to "Steady hands / for hard calls", which fits |
| expertise | matches | cards rest lower than the original: I had taken the crop's positions, which already include the original's starting parallax offset (+86/+130/+173px) | drift present, but rest positions shifted | yes: rest margins now 0 / 7% / 7% / 115% of the column, so crop + drift lines up |
| footer | gap above the wordmark 175px against 200px; the "Marlow Kessler" link touched the hours column | matches (wordmark 11vw fills ~80% of the width with a 14-letter name) | letters rise on entry | yes: mt-52 on phones; the link label is now "The firm" |
| insights | 120px shorter: our sample excerpts are shorter than the original's | matches | heading rise | no: content length, not design |
| statement, team | matches (placeholders instead of photos) | matches | drift and line rises | – |
| header | matches; lucide scale icon stands in for the griffin mark | matches | – | – |

## Comparison round 2

Heights unchanged from round 1 except the 390 footer (926, was 894; original 967). All
"sized by the window" sections match (hero at both widths; both photo panels at 390). No
overflow at 360/768/1024. Card positions in the 1440 scroll frames now line up with the
original's frames within ~20px (heading 200 vs 210, card 01 214 vs 228, cards 02/03 765/800
vs 780/826).

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | "Steady hands" still wrapped: DM Sans is wider than Brockmann, so a 12-letter line overflows 358px at 60px | matches | – | yes: top line is now "Plain talk" (one line, like the original) |
| expertise | arrow drawn small (lucide arrow fills only 40% of its box) | same | the cover had fully shrunk once the card was in view; in the original it is still shrinking while the whole card shows | yes: arrow svg 68px with stroke 1.75, centred in the 48px tile (a thick ~28px arrow like the original); cover range `entry 10% contain 25%` |
| insights | 120px shorter (shorter sample copy) | matches | – | no: content |
| footer | wordmark fills ~85% of the width (14 letters vs 16) | same | letters rise on entry | no: name length, noted in meta |

Frames with the cursor over a card catch the hover arrow swap mid-flight; that is the
hover, not a layout fault.

**Re-theme check:** `leome-and-partners-expertise` and `leome-and-partners-insights` under
`sample-ember` (light): the cards, rust arrow tiles, covers, chips and type all take the theme
(a serif display face for headings). Our own light sibling also reads as one coherent palette.

**Note on the cover range:** it ends on `contain 25%`, not `entry`, to match the original's
timing. It always finishes inside a page (the expertise section has bottom padding and other
sections follow), and the demo adds space after it.
