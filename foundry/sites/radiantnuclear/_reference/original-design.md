# Design capture: https://www.radiantnuclear.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Radiant (page 10852px tall, window 390×844)

**Fonts:** `avenir-next-lt-pro` ×96

**Loaded faces:** avenir-next-lt-pro 700 normal · avenir-next-lt-pro 200 normal · avenir-next-lt-pro 800 normal · avenir-next-lt-pro 500 normal · avenir-next-lt-pro 400 normal

**Font sizes:** `20px` ×49 · `16px` ×18 · `14px` ×8 · `30px` ×6 · `18px` ×6 · `24px` ×5 · `36px` ×3 · `10px` ×1

**Weights:** `700` ×63 · `400` ×20 · `500` ×13

**Size / line height:** `20px / 23px` ×49 · `16px / 22px` ×11 · `14px / 14px` ×5 · `18px / 27px` ×5 · `24px / 30px` ×5 · `16px / 24px` ×5 · `14px / 21px` ×3 · `30px / 30px` ×3 · `36px / 42px` ×3 · `30px / 34.5px` ×2

**Letter spacing:** `normal` ×96

**Text colours:** `rgb(0, 126, 162)` ×48 · `rgb(255, 255, 255)` ×24 · `rgb(43, 41, 42)` ×23 · `oklab(0.999994 0.0000455678 0.0000200868 / 0.5)` ×1

**Backgrounds:** `rgb(0, 0, 0)` ×657 · `rgb(242, 234, 225)` ×600 · `rgb(186, 146, 100)` ×588 · `rgb(253, 251, 249)` ×220 · `rgb(243, 234, 225)` ×200 · `oklab(0.186103 0.0078812 0.0244639 / 0.4)` ×20 · `oklab(0.999994 0.0000455678 0.0000200868 / 0.2)` ×5 · `rgba(43, 41, 42, 0.15)` ×0 · `rgba(43, 41, 42, 0.32)` ×0

**Gradients:** `linear-gradient(to top, oklab(0 0 0 / 0.7) 0%, oklab(0 0 0 / 0.1) 50%, oklab(0 0 0 / 0.2) 100%)` ×4 · `linear-gradient(to top, oklab(0 0 0 / 0.8) 0%, oklab(0 0 0 / 0.35) 45%, oklab(0 0 0 / 0.2) 100%)` ×1

**Transitions:** `color, background-color, border-color, outline-color, text-d 0.4s cubic-bezier(0.4` ×10

**:root variables (6):** `--nav-clear: 80px` · `--site-max: 2000px` · `--block-max-h: 1100px` · `--gutter-step: 24px` · `--letterbox: max(0px, calc((100vw - var(--site-max)) / 2))` · `--gutter: calc(var(--letterbox) + var(--gutter-step))`

### Sections

1. `section` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Radiant Wins $750M Contract to Deliver Energy Independence to US Military Bases” · original-390-section-01.png
2. `section` at 844px, 800px tall · original-390-section-02.png
3. `section` at 1644px, 1988px tall — “MANUFACTURING THAT DELIVERS” · original-390-section-03.png
4. `div` at 3632px, 3376px tall — **sized by the window: 400% of the window height** (2532px in a 633px window) — “Janus: The Launch Pad for Commercial Deployments” · original-390-section-04.png, original-390-section-05.png
5. `section` at 7008px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “SCALABLE PRIME POWERSCALABLE PRIME POWER” · original-390-section-06.png
6. `section` at 7852px, 2518px tall — “Latest News” · original-390-section-07.png, original-390-section-08.png
7. `footer` at 10370px, 483px tall · original-390-section-09.png

### Media slots

- section 1: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 2: image, 988×480 (aspect 2.06), fit auto
- section 3: image, 390×220 (aspect 1.78), fit cover
- section 3: video autoplay loop, 390×220 (aspect 1.78), fit cover
- section 3: image, 390×220 (aspect 1.78), fit cover
- section 3: video autoplay loop, 390×220 (aspect 1.78), fit cover
- section 3: image, 390×220 (aspect 1.78), fit cover
- section 3: video autoplay loop, 390×220 (aspect 1.78), fit cover
- section 4: image, 390×866 (aspect 0.45), fit auto, **fills the window height**
- section 5: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 5: video autoplay loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 6: image, 342×190 (aspect 1.80), fit cover
- section 6: image, 342×190 (aspect 1.80), fit cover
- section 6: image, 342×190 (aspect 1.80), fit cover
- section 6: image, 342×190 (aspect 1.80), fit cover
- section 6: image, 342×190 (aspect 1.80), fit cover

### Motion

**Libraries and media seen:** 1 canvas element(s) (WebGL/2D art) · 4 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 24 half-screens · e.g. nav.fixed.left-1/2 “NEWS CAREERS”
- section -: reveal on entering view — opacity 0.90→0.20, at scroll 422–422px · e.g. div.bg-glass-light.absolute
- section -: reveal on entering view — translateY 0→0px, at scroll 6752–7174px · 2 elements · e.g. div “SCALABLE PRIME”; div “POWER”
- section 2: reveal on entering view — translateY 384→0px, at scroll 422–844px · e.g. img.block.h-full
- section 4: pinned (sticky), at scroll pinned for 5 half-screens · e.g. section.capped-block.h-svh “JANUS: THE LAUNCH PAD FOR COMMERCIAL DEP”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 4220–4220px · 9 elements · e.g. img.absolute.left-1/2; img.absolute.left-1/2; img.absolute.left-1/2
- section 4: reveal on entering view — opacity 1.00→0.00, translateY 0→14px, at scroll 4220–4220px · 2 elements · e.g. p.ig-line.opacity-0 “From prototype to product:”; p.ig-line.opacity-0 “Janus volume establishes Kaleidos as a r”
- section 4: reveal on entering view — opacity 0.00→0.00, translateY 14→14px, at scroll 4220–5064px · 4 elements · e.g. p.ig-line.opacity-0 “Capacity built for scale:”; p.ig-line.opacity-0 “Janus accelerates the timeline to mass-p”; p.ig-line.opacity-0 “Real-world operating experience:”
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 5064–5486px · 2 elements · e.g. p.ig-line.opacity-0 “A fleet of Kaleidos will be deployed to ”; p.ig-line.opacity-0 “The Janus program shortens the runway to”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 5908–6330px · 2 elements · e.g. p.ig-line.opacity-0 “Volume to reduce costs:”; p.ig-line.opacity-0 “The production volume achieved through t”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 7174–7174px · e.g. div.vt-cue.col-start-1 “SCALABLE PRIME POWER SCALABLE PRIME POWE”

**:hover rules in the CSS (first 20):**

- `.btn:hover { background-color: rgba(43, 41, 42, 0.8); }`
- `.btn:hover { background-color: color-mix(in oklab, var(--color-charcoal) 80%, transparent); }`
- `.btn:hover { --tw-duration: .15s; transition-duration: 0.15s; }`
- `.rich-html a:hover { opacity: 0.7; }`
- `.group-hover\:translate-x-0:is(:where(.group):hover *) { --tw-translate-x: 0px; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:scale-0:is(:where(.group):hover *) { --tw-scale-x: 0%; --tw-scale-y: 0%; --tw-scale-z: 0%; scale: var(--tw-scale-x) var(--tw-scale-y); }`
- `.group-hover\:scale-x-100:is(:where(.group):hover *) { --tw-scale-x: 100%; scale: var(--tw-scale-x) var(--tw-scale-y); }`
- `.group-hover\:bg-charcoal:is(:where(.group):hover *) { background-color: var(--color-charcoal); }`
- `.group-hover\:opacity-100:is(:where(.group):hover *) { opacity: 1; }`
- `.group-hover\:brightness-100:is(:where(.group):hover *) { --tw-brightness: brightness(100%); filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) `
- `.group-hover\:delay-150:is(:where(.group):hover *) { transition-delay: 0.15s; }`
- `.group-hover\:duration-150:is(:where(.group):hover *) { --tw-duration: .15s; transition-duration: 0.15s; }`
- `.group-hover\:duration-300:is(:where(.group):hover *) { --tw-duration: .3s; transition-duration: 0.3s; }`
- `.group-enabled\:group-hover\:translate-x-0:is(:where(.group):enabled *):is(:where(.group):hover *) { --tw-translate-x: 0px; translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-enabled\:group-hover\:translate-x-7:is(:where(.group):enabled *):is(:where(.group):hover *) { --tw-translate-x: calc(var(--spacing) * 7); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.hover\:bg-glass-dark\/30:hover { background-color: rgba(26, 17, 6, 0.3); }`
- `.hover\:bg-glass-dark\/30:hover { background-color: color-mix(in oklab, var(--color-glass-dark) 30%, transparent); }`
- `.hover\:bg-white\/50:hover { background-color: rgba(255, 255, 255, 0.5); }`
- `.hover\:bg-white\/50:hover { background-color: color-mix(in oklab, var(--color-white) 50%, transparent); }`
- `.hover\:text-charcoal:hover { color: var(--color-charcoal); }`

### The site's own links

`/news` NEWS · `/careers` CAREERS · `/privacy-policy` Privacy Policy · `/terms-of-use` Terms of Use

## 1440px — Just a moment... (page 900px tall, window 1440×900)

**Fonts:** `system-ui` ×7 · `monospace` ×1

**Font sizes:** `12px` ×5 · `40px` ×1 · `24px` ×1 · `16px` ×1

**Weights:** `400` ×6 · `600` ×2

**Size / line height:** `12px / 18px` ×5 · `40px / 50px` ×1 · `24px / 30px` ×1 · `16px / 24px` ×1

**Letter spacing:** `normal` ×8

**Text colours:** `rgb(49, 49, 49)` ×6 · `rgb(0, 0, 238)` ×2

**Borders:** `1px solid rgb(217, 217, 217)` ×2

### Sections

1. `div` at 128px, 244px tall — “www.radiantnuclear.com” · original-1440-section-01.png
2. `div` at 830px, 70px tall · original-1440-section-02.png

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling:** nothing changed.

**:hover rules in the CSS (first 16):**

- `.Jtxg3 a:hover { color: rgb(185, 214, 255); }`
- `.Jtxg3 .yxXg6 a:hover { color: rgb(38, 38, 38); }`
- `.VopDi9 a:hover { color: rgb(185, 214, 255); }`
- `.VopDi9 .yxXg6 a:hover { color: rgb(38, 38, 38); }`
- `body.VopDi9 a:hover { color: rgb(185, 214, 255); }`
- `body.VopDi9 .QbXz1 a:hover { color: rgb(185, 214, 255); border-bottom-color: rgb(185, 214, 255); }`
- `body.VopDi9 .QbXz1 a:hover path { fill: rgb(185, 214, 255); }`
- `body.xSvhu9 a:hover { color: rgb(0, 54, 129); }`
- `body.xSvhu9 .QbXz1 a:hover { color: rgb(0, 54, 129); border-bottom-color: rgb(0, 54, 129); }`
- `body.xSvhu9 .QbXz1 a:hover path { fill: rgb(0, 54, 129); }`
- `.Udns7:hover { border-color: rgb(0, 54, 129); background-color: rgb(0, 54, 129); color: rgb(255, 255, 255); cursor: pointer; }`
- `.yxXg6 a:hover { color: rgb(153, 27, 27); }`
- `.yxXg6 a:hover { color: rgb(254, 226, 226); }`
- `body a:hover { color: rgb(185, 214, 255); }`
- `body .QbXz1 a:hover { color: rgb(185, 214, 255); border-bottom-color: rgb(185, 214, 255); }`
- `body .QbXz1 a:hover path { fill: rgb(185, 214, 255); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
