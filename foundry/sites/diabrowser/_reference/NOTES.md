# diabrowser — recreation notes

Original: https://diabrowser.com/ (precaptured 2026-10-23; landing page only, no other pages asked for).
Fictional stand-in: **Kite**, "the browser for calmer workdays", made by "Paper Kite Co." All
copy is ours; the big hero logo becomes a plain wordmark set in the display serif.

## Design language

- **Palette.** A warm cream page (251,250,246) carries everything below the fold. The hero alone
  is loud: a full-window photo of sunlit golden leaves (gold 255,203,48 and pale butter
  255,228,140), with white type over it. Ink is black at 85% (text) and pure black for the one
  CTA; quiet text is black at 42–60%. Surfaces are near-white pills (header 248,248,248 at ~90%,
  labels white), a grey fill (black 8%) for the secondary pill button. Hairlines are black 8%;
  feature cards use a stronger black 30% outline on a transparent ground.
- **Type.** Three voices: a sharp text serif (Exposure) for every heading, tightly tracked
  (−0.05em at 48px); a grotesk (ABC Oracle / Oracle Triple) for UI and body, mostly 13–20px at
  weight 400; a grotesk mono (Favorit Mono) in uppercase with +1.3px tracking for the footer and
  the small numbers (01, 02…). Scale: 48/56 (h2, 54 on hero), 24/30 (list titles), 20/30 (card
  and privacy body), 16/20 (UI), 13/16 and 12 (labels, mono).
- **Rhythm.** Generous: ~120px between sections on desktop, 80px on phones; 1180px page width
  (130px margins at 1440) and only **10–12px gutters on phones** (cards and frames nearly touch
  the screen edge).
- **Grid.** 12 columns; the tour is 5 (sticky list) + 7 (screenshots); the feature cards alternate
  7/5, 5/7, 7/5 per row.
- **Shapes.** 20px cards, 12px frames and header pill, 16px hero window, full pills for buttons
  and labels. The signature shape is the **cream arc**: a very wide ellipse rising from the bottom
  of the window, carrying the black CTA pill, that stays docked at the bottom of the screen
  through the whole page on desktop.
- **Depth.** Almost flat. Frames have a soft layered drop (0 12px 28px −12px / 0 28px 56px −28px
  at 10–12%); the docked arc casts a faint shadow upward; the CTA gains a lifted shadow on hover.

## Type

| Original | Kind | Width / x-height | Ours | Why |
|---|---|---|---|---|
| Exposure VAR (205TF) | transitional text serif, moderate contrast, sharp wedge serifs | normal, mid x-height | **Newsreader Variable (opsz)** | closest open transitional serif with optical sizes; already installed. Runs ~8% wider, so headings track −0.045em and copy is sized to the original's line counts |
| ABC Oracle / Oracle Triple (Dinamo) | neo-grotesk with gothic flavour; Triple is semi-monospaced (even widths) | normal, large x-height | **Hanken Grotesk Variable** | normal-width neo-grotesk with a large x-height and open apertures; weight one step up (400→450) per our substitute rule, no positive tracking |
| ABC Favorit Mono (Dinamo) | grotesk monospace, low contrast | normal | **DM Mono** | the open mono closest to a grotesk mono (round, low contrast, not a typewriter mono) |

## Section map

| # | section | block | height | layout at 390 | layout at 1440 | media slots | motion |
|---|---|---|---|---|---|---|---|
| 1 | header | `diabrowser-header` | 52px, fixed | full-width pill (10px inset, top 14px): wordmark left, + menu button right | centred pill (top 28px): logo + 3 links; a separate "Join" pill appears top-right after the hero | — | links fade on hover; right pill fades/scales in after ~450px scroll |
| 2 | hero | `diabrowser-hero` | **100svh** | headline 2 lines, giant wordmark, window (358×255), cream arc + full-width CTA in the bottom 200px | headline 1 line (54px), giant wordmark ~400px tall, window 1115×793 cropped by the fold, cream arc docked | backdrop photo (fills window, cover), WebGL light canvas, window video (1.41) | window scrubs up −140px over the first half-screen |
| 3 | docked CTA | `diabrowser-waitlist-dock` (wraps sections 2–7) | 152px bar | not docked: a 200px arc bar after the hero (inside it) and after the closer | **sticky bottom bar** through the whole page, shrinks once you scroll (button 443→376px, caption off-screen), grows back under the closer heading | — | pinned; scrubbed shrink and regrow; button lift on hover |
| 4 | tour "reads between the tabs" | `diabrowser-tour` | content (~1950px) | heading; then per item: frame, number, title, body (all open) | 5/7 grid: left list sticky at 20vh with the active item open (bar + body), right column three 760×562 frames | 3 screenshots (1.35, 12px radius, grey frame) | heading/frames fade in; left list pinned; active item follows the frame in view (accordion) |
| 5 | features "Built for how you actually work" | `diabrowser-features` | content (~2080px) | heading; cards stacked full width | heading; 6 outlined cards, rows 7/5, 5/7, 7/5 | 6 product shots at card bottom, faded edges | cards fade in on entering view |
| 6 | privacy | `diabrowser-privacy` | content (600px) | dashed box 10px inset, lock tab on top edge, heading split around a chip strip, body, grey pill link | same, 1180 wide, body 20/30 max ~670px | — | fade in; chip strip drifts sideways with scroll; link arrow nudges 6px on hover |
| 7 | closer heading "Ready for a better day?" | part of `diabrowser-waitlist-dock` | ~400px incl. the bar | heading, then the arc bar | heading, then the docked bar settles under it | — | fade in |
| 8 | footer | `diabrowser-footer` | content (266 / 483px) | 2×2 link columns, rule, credit, copyright centred | 4 columns + a seal at right, rule, copyright left / credit centred | — | link colour on hover |

Components: `diabrowser-button` (black pill CTA with lift, grey pill, outline pill), `diabrowser-frame`
(the soft-shadowed 12px screenshot frame placeholder), `diabrowser-heading` (the tight serif h2).

## Motion inventory

| section | trigger | what changes | timing | build |
|---|---|---|---|---|
| header links | hover | opacity .7→1 (nav), 1→.7 (logo) | 200ms cubic-bezier(.4,0,.2,1) | Tailwind transition-opacity |
| header right pill | scrolled past hero | opacity 0→1, scale .95→1 | 350ms | CSS `scroll(root)` timeline, keyframe jumps over 380–450px (desktop only) |
| hero window | scrubbed | translateY 0→−140px, origin bottom | first 450px of scroll | CSS `scroll(root)` with `animation-range: 0 450px` |
| hero headline + wordmark | load | fade + small rise (inferred: the hero is static in the capture, no load motion seen) | — | none; hero shows at once |
| dock (desktop) | pinned | sticky at bottom for the whole page | — | `position: sticky; bottom: 0` at the end of a wrapper around the page |
| dock shrink | scrubbed | bar slides down 44px (caption leaves), button scale 1→.85 | first 450px | CSS `scroll(root)` on an outer layer |
| dock regrow | scrubbed | back to full size as it settles under the closer heading | closer heading entering | named view timeline on the heading (`timeline-scope` on the wrapper), inner layer undoes the shrink |
| CTA hover | hover | scale 1.02, inset highlight + deep drop shadow | 300ms all | Tailwind transition + hover:scale + hover:shadow |
| tour heading/frames | entering view | opacity 0→1 (rise 20px on phones' text blocks) | 300–700ms | CSS view() reveal, `entry 0px → entry 200px` |
| tour list | pinned | sticky at top 20vh | — | `lg:sticky lg:top-[20vh]` |
| tour active item | scroll position | active title dark + 2px bar, body opens (0fr→1fr), others grey and closed | 300ms | small JS: IntersectionObserver on the frames sets the active index (`hydrate: visible`); static HTML shows item 1 open and phones show all open |
| feature cards | entering view | opacity 0→1 | 400ms | CSS view() reveal |
| privacy box | entering view | opacity 0→1 | 400ms | CSS view() reveal |
| privacy chips | scrubbed | translateX 0→−32px (whole strip, sampled) | across the section's pass | CSS view() timeline, `cover` range, −48px (an allowed-to-be-partial drift) |
| privacy link | hover | arrow translateX 6px | 300ms | group-hover translate |
| footer links | hover | colour 42%→85% ink | 200ms | transition-colors |

## Media slots → placeholders

- Hero backdrop photo + WebGL light: a full-bleed soft gradient from `highlight` to `glow` (slot `backdrop`).
- Hero window video: 1115×793 (1.41), 16px radius, `bg-card` surface with a hairline (slot `media`).
- Tour screenshots ×3: 760×562 (1.35) frames, 12px radius, `bg-muted` (slot per item).
- Feature shots ×6: bottom-of-card slots (wide 558×362/350/381, narrow 318×399/278×350), faded into the card (slot per card).

## Decisions

- **One dock for the whole page on desktop** (sticky at the end of a wrapper) rather than two
  bars: that's what the capture shows (one sticky element pinned 12 half-screens, settling under the
  closer). On phones the original has two static bars, so the hero carries its own bar below lg
  (`dockBelow` prop) and the dock bar is static there.
- **Active tour item by JS** (IntersectionObserver): a pure-CSS version would need one named view
  timeline per frame and keyframed grid rows; the JS is shorter to read. No opacity-0 in markup.
- Privacy chip drift built as a scrubbed drift (the capture lists no running keyframes for it).
- The original's Dia logo (a black dome) and giant "DIA" lettering are replaced by a plain
  serif wordmark; the footer seal becomes a plain round text stamp built from type (no logo shape).
- Phones' second bar has a pale yellow wash behind the arc in the original; skipped (the arc reads the same without it).

## Comparison round 1

Motion checks: hero "sized by the window" at both widths ✓; dock sticky at 748px (152px) ✓ like
the original; scroll frames show the dock shrinking to a 376px button mid-page and growing back
to 451px with small print under the closer ✓; header pill appears top right after the hero ✓;
tour list pinned at 20vh with the active step following the frame in view ✓; no horizontal
overflow at 360/768/1024 ✓. Full-page crops show the scroll reveals at their start (blank), as expected.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | name too small and high (caps 200–275 vs 250–338), window 64px too high | name caps start 27px too high and run too tall; window top ✓ (400) | window lift ✓ | yes: name 34vw/21vw (300px max), more space above, window overlap retuned |
| hero | — | light type reads grey on the gold | — | yes: dark-scope foreground 0.94 → 0.965 |
| hero | window placeholder glaring white | same | — | yes: card at 85% |
| features | ✓ | cards 64px narrower than the 1180 page (gutter inside max-w) | reveal ✓ | yes: gutter outside the max-width |
| dock | ✓ | a faint shadow seam along the docked bar's flat bottom edge (visible above the footer) | ✓ | yes: clip-path keeps the arc's shadow above the curve |
| tour | ✓ | body text a touch loose next to Oracle | ✓ | yes: −0.005em |
| privacy | ✓ | ✓ (box 609 vs 600) | drift ✓ | — |
| footer | ✓ | ✓ | ✓ | — |

## Comparison round 2

Motion checks repeated: hero still window-sized at both widths, dock sticky (748px, 152px), shrink
and regrow seen in the scroll frames, active tour step follows the frames, no overflow at
360/768/1024 ✓.

| section | 390 | 1440 | motion | fixed? |
|---|---|---|---|---|
| hero | ✓ name caps 245–355, window top 336 (orig 250 / 338) | name now ~760px wide, caps from 212, its lower third hidden by the window like the original | ✓ | yes (round 1 change) |
| hero | — | translucent window let the name show through (the original's is opaque) | — | yes: opaque card again |
| tour → features | gap 160px vs the original's 80px | gap 243px vs ~170px | — | yes: tour bottom padding 0 / 50px |
| tour | — | heading to first frame 80px vs ~52px | — | yes: 50px |
| features | ✓ card padding, tag pill, 4-line body, shot at the bottom | ✓ 1180 wide now, 7/5 · 5/7 · 7/5 | ✓ | — |
| privacy, closer, footer | ✓ | ✓ | ✓ | — |

Re-theme check: diabrowser-hero, -features and -privacy under sample-ember (dark) keep their
structure and take ember's colours and fonts (hero: green highlight backdrop, orange pill on a
dark arc). In our own dark mode the hero's butter pools read as brown smudges, so the dark glow
is now pale butter.

Left as is: the original's photo, WebGL light, product video and screenshots (placeholders of the
same size, radius and frame); the Dia logo and swash lettering (a plain serif wordmark instead);
the phones' second bar's pale yellow wash; Oracle Triple's semi-mono rhythm (Hanken Grotesk is
proportional, so body lines run a few characters different).
