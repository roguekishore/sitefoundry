# Stripe — design notes

Source: https://stripe.com/in (captured 2026-10-18). Content in the recreation is for a
fictional payments company, **fernpay**.

## Design language

**One white page held in a frame.** Almost everything sits on white inside a 1264px column
whose left and right edges are drawn as faint vertical hairlines (`#e5edf5`) from the hero
to the footer. Sub-sections inside that frame are divided by full-width horizontal
hairlines (solid or dashed). On phones the frame lines disappear and content runs at a
16px gutter. Two bands break the white: a deep-navy developer band (`#0d1738`) and a
pale `#f8fafd` closing CTA + footer band.

**Palette roles**
- ink `#061b31` (navy, never black) for headings and lead text
- slate `#64748d` for the second half of every heading; `#50617a` for body copy
- indigo `#533afd` for every button, link and the small icon accents
- borders `#e5edf5`; quiet panels `#f8fafd`; lavender `#e8e6ff`-ish icon buttons
- the dark band: `#0d1738` page, `#122054` raised cards, `#839bc8` muted heading half,
  `#a3b5d6` body
- a warm "ribbon" spectrum used only in art: sky lavender → orange `#ff7600` → pink
  `#fb76fa` → violet `#7232f1`, plus a yellow `#ffcf5e`

**Type.** Söhne (closed) at weight **300** for almost everything: headings and body alike.
400 is used only for small labels, bold leads in feature text, buttons and nav. Sizes
(phone → desktop): hero 34 → 48px (−0.02em); section heading 22 → 32px (lh 1.1, −0.02em);
sub-heading 20 → 26px; stat numbers 28 → 48px; body 16px/1.4; lead paragraphs 18px/1.4.
Every heading is **two-tone**: a dark lead sentence followed inline by a slate sentence.
Mono (Source Code Pro 500) only inside code mocks.

**Spacing rhythm.** Sections ~64px apart on phones, 96–128px on desktop. The hero text is
indented one column (104px) on desktop. Three-column feature rows at 416px pitch.

**Shapes.** Small radii: 4px buttons and icon boxes, 6px cards, 16px for nothing but the
book card. Buttons are rectangles, not pills. Icon "chips": 30px squares with a 1px border
and a 1.5px-stroke indigo icon.

**Depth.** Mostly flat; product cards have a 1px border and no shadow. Mock UI floats with
Stripe's soft navy shadow `0 30px 45px -30px rgba(50,50,93,.25), 0 18px 36px -18px
rgba(0,0,0,.1)`. Colour washes (radial gradients fading into white) sit under mock UI.

**Motion.**
- hero: a slow, flowing ribbon of fibres sweeping from the top centre to the right edge
  (WebGL on the original; we do layered SVG strokes that drift with CSS).
- logo strip: logos swap in place every few seconds.
- stats band: one stat at a time is "active" (ink) while the rest are slate, with a short
  gradient line sliding along the rule above it; the band has a light/dark switch.
- buttons: 300ms colour transitions; the chevron grows a stem and nudges right on hover.
- story accordion, stories carousel with arrow buttons, a "squeezy" news carousel whose
  slivers widen into the main card.
- header is static (scrolls away), transparent over the hero ribbon.

## Blocks

| Item | What |
|---|---|
| `stripe-header` | wordmark, nav with chevrons, white "sign in" + indigo CTA; phone: square burger → menu |
| `stripe-hero` | ribbon art, live-counter line, two-tone light headline, CTA, logo strip |
| `stripe-solutions` | two-tone heading + bento of product tiles (2/3+1/3, 3×1/3, full) with mock visuals |
| `stripe-banner` | full-width dark event banner: headline, white button, CSS stage art |
| `stripe-stats` | centred heading, four stats with rotating highlight, ray-burst art, light/dark switch |
| `stripe-segment` | (component) title + CTA left, lead paragraph right, hairline above |
| `stripe-stories` | segment + accordion of customer stories (logo chip, title, plus; open shows art + facts) |
| `stripe-features` | optional heading + three icon features (bold lead, slate text, link) |
| `stripe-carousel` | segment + horizontally scrolling story cards with arrow buttons + two promo cards |
| `stripe-showcase` | segment + big gradient panel holding a dashboard mock with floating code callouts |
| `stripe-quote` | centred quote, attribution, link, logo tabs with sliding progress underline |
| `stripe-devhero` | dark band opener: two-tone heading, indigo + outline buttons |
| `stripe-diagram` | dark: heading + integration diagram (chip rows, dashed connectors, dotted grid) |
| `stripe-scale` | dark: heading + gradient-text metrics + flowing line art |
| `stripe-paths` | dark: heading + three cards (chat/QR, app-icon wall, code editor) |
| `stripe-news` | "squeezy" carousel: one wide card, narrow slivers, caption + outline button |
| `stripe-book` | split card: warm panel with a CSS book cover, pale panel with title/author/blurb/seal |
| `stripe-cta` | pale band: heading, text, CTA + two icon link columns |
| `stripe-footer` | pale band: four link columns with dashed dividers, locale, copyright, mark |

Components: `stripe-button`, `stripe-heading`, `stripe-frame`, `stripe-segment`,
`stripe-ribbon`, `stripe-mock`.

## Decisions

- **Hanken Grotesk** (variable, OFL) stands in for Söhne: same neutral grotesk build and it
  has a real 300 weight, which this design lives on. **Source Code Pro** (open, and the
  original's own mono) for code.
- Light is the faithful mode. The developer band forces `.dark`; the stats band starts in
  the page's mode and can be flipped with its switch.
- The ribbon is SVG strokes, not WebGL: no canvas, renders in static HTML, cheap on phones.
- Customer logos are text wordmarks set in the theme font; story/news images are CSS art.
- Not built: the nav mega-menus (the chevrons are decoration), the counter that ticks in
  the hero (it's a static figure prop).
