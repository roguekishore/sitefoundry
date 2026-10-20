# Design capture: https://www.cellart.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Custom Cellars | Bespoke Wine & Storage Solutions | Cellart (page 6690px tall, window 390×844)

**Fonts:** `StyreneB` ×30 · `Signifier` ×20

**Loaded faces:** StyreneB 400 normal · Signifier 400 normal · Signifier 400 italic · swiper-icons 400 normal

**Font sizes:** `12.48px` ×30 · `14.56px` ×9 · `14px` ×4 · `23.92px` ×3 · `18.72px` ×3 · `18px` ×1

**Weights:** `400` ×46 · `500` ×3 · `700` ×1

**Size / line height:** `12.48px / 11.232px` ×30 · `14.56px / 17.472px` ×9 · `14px / 24px` ×4 · `23.92px / 26.312px` ×3 · `18.72px / 22.464px` ×3 · `18px / 24px` ×1

**Letter spacing:** `normal` ×47 · `-0.2392px` ×3

**Text colours:** `rgb(0, 0, 0)` ×38 · `rgb(255, 255, 255)` ×9 · `rgb(33, 33, 33)` ×3

**Backgrounds:** `rgb(255, 255, 255)` ×532 · `rgb(0, 0, 0)` ×208 · `rgb(248, 247, 243)` ×199 · `rgb(238, 236, 231)` ×188 · `rgb(33, 33, 33)` ×30

**Borders:** `1px solid rgba(0, 0, 0, 0.3)` ×6 · `2px solid rgb(33, 33, 33)` ×3 · `1px solid rgb(244, 244, 244)` ×1

**Radii:** `2px` ×3 · `6px` ×2 · `4px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `opacity 0.6s cubic-bezier(0.66` ×15 · `transform 0.4s cubic-bezier(0.32` ×13 · `opacity 0.5s cubic-bezier(0.32` ×10 · `clip-path 1s cubic-bezier(0.215` ×9 · `transform 0.7s cubic-bezier(0.32` ×8 · `opacity 0.4s cubic-bezier(0.32` ×8 · `transform 1s cubic-bezier(0.215` ×7 · `opacity 0.4s cubic-bezier(0.4` ×6

**:root variables (28):** `--power-0: cubic-bezier(0,0,1,1)` · `--power-1-in: cubic-bezier(.26,0,.6,.2)` · `--power-1-out: cubic-bezier(.4,.8,.74,1)` · `--power-1-in-out: cubic-bezier(.48,.04,.52,.96)` · `--power-2-in: cubic-bezier(.4,0,.68,.06)` · `--power-2-out: cubic-bezier(.32,.94,.6,1)` · `--power-2-in-out: cubic-bezier(.66,0,.34,1)` · `--power-3-in: cubic-bezier(.52,0,.74,0)` · `--power-3-out: cubic-bezier(.26,1,.48,1)` · `--power-3-in-out: cubic-bezier(.76,0,.24,1)` · `--power-4-in: cubic-bezier(.64,0,.78,0)` · `--power-4-out: cubic-bezier(.22,1,.36,1)` · `--power-4-in-out: cubic-bezier(.84,0,.16,1)` · `--size-in: cubic-bezier(.32,0,.6,.36)` · `--sine-out: cubic-bezier(.4,.64,.68,1)` · `--sine-in-out: cubic-bezier(.36,0,.64,1)` · `--expo-in: cubic-bezier(.66,0,.86,0)` · `--expo-out: cubic-bezier(.14,1,.34,1)` · `--expo-in-out: cubic-bezier(.9,0,.1,1)` · `--circ-in: cubic-bezier(.54,0,1,.44)` · `--circ-out: cubic-bezier(0,.56,.46,1)` · `--circ-in-out: cubic-bezier(.88,.14,.12,.86)` · `--smooth-in-out: cubic-bezier(.77,0,.18,1)` · `--refSize: 375` · `--max-columns: 24` · `--sbw: 0px` · `--header-height: 5rem` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 50px tall, position fixed · original-390-section-01.png
2. `section` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Tailor-made spaces that challenge the ordinary” · original-390-section-02.png
3. `section#main` at 844px, 347px tall — “Our raison d'être” · original-390-section-03.png
4. `section#main` at 1191px, 3664px tall — “Perléo” · original-390-section-04.png, original-390-section-05.png
5. `section` at 4855px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Magnum Opus” · original-390-section-06.png
6. `section` at 5699px, 509px tall — “Approach” · original-390-section-07.png
7. `footer` at 6208px, 482px tall · original-390-section-08.png

### Media slots

- section 2: video loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 4: image, 359×437 (aspect 0.82), fit cover
- section 4: image, 359×233 (aspect 1.54), fit cover
- section 4: image, 359×225 (aspect 1.59), fit cover
- section 4: image, 359×429 (aspect 0.84), fit cover
- section 4: image, 359×437 (aspect 0.82), fit cover
- section 4: image, 359×429 (aspect 0.84), fit cover
- section 5: image, 172×212 (aspect 0.81), fit cover
- section 5: image, 172×212 (aspect 0.81), fit cover
- section 5: image, 445×962 (aspect 0.46), fit cover
- section 6: image, 172×232 (aspect 0.74), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 2 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 16 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-right “We value your privacy We use cookies to ”; div.cky-modal; div.common-skip-link.fixed “SKIP TO MAIN CONTENT”
- section 1: reveal on entering view — translateY 0→-50px, while pinned, at scroll 394–394px · e.g. header.common-header.w-full
- section 2: scrubbed with the scroll — translateY 0→84px, at scroll 394–1239px · e.g. div.absolute.top-0 “Tailor-made spaces that challenge the or”
- section 3: reveal on entering view — translateY 12→0px, at scroll 394–814px · e.g. span.block.|| “OUR RAISON D'ÊTRE”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 394–814px · e.g. div.col-span-full.body-1 “It started with a passion for wine and a”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 814–1239px · 8 elements · e.g. div.home-grid-item__content.px-spacingPage “PERLÉO A wine collection that stands con”; div.home-grid-item__content.px-spacingPage “TONNERRE DE VIGNE Binding nature, tradit”; div.home-grid-item__content.px-spacingPage “QUANTUM LIMIT Where tradition, art, and ”
- section 4: reveal on entering view — clip-path changes, at scroll 814–1239px · e.g. div.ui-fragments-media.relative
- section 4: reveal on entering view — scale 1.07→1.00, at scroll 814–1239px · 6 elements · e.g. div.media__wrap.w-full; div.media__wrap.w-full; div.media__wrap.w-full
- section 4: reveal on entering view — translateY 60→0px, at scroll 814–1239px · 7 elements · e.g. p.caption.|| “1.1”; p.caption.|| “2.1”; p.caption.|| “3.1”
- section 4: scrubbed with the scroll — clip-path changes, at scroll 1239–2081px · 5 elements · e.g. div.ui-fragments-media.relative; div.ui-fragments-media.relative; div.ui-fragments-media.relative
- section 4: fixed, at scroll pinned for 16 half-screens · e.g. div.base-modal.c-common-modal-project
- section 4: pinned (sticky), at scroll pinned for 16 half-screens · e.g. div.bg-white.flex
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 4615–5034px · 4 elements · e.g. p.caption.text-right “2026 EDITIONS”; span.ui-layout-button__label “COMPLETE”; span.ui-layout-button__label “COLLECTION”
- section 5: scrubbed with the scroll — clip-path changes, at scroll 4190–5459px · 2 elements · e.g. div.image-mask; div.image-mask
- section 5: reveal on entering view — opacity 0.00→1.00, scale 1.15→1.00, at scroll 4190–4615px · e.g. div.ui-fragments-media.relative
- section 5: scrubbed with the scroll — translateY -59→59px, at scroll 4190–5823px · e.g. div.media__wrap.w-full
- section 6: reveal on entering view — translateY 60→0px, at scroll 5034–5459px · e.g. span.block.|| “APPROACH”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 5459–5459px · e.g. span.ui-layout-button__label “DISCOVER”
- section 6: scrubbed with the scroll — clip-path changes, at scroll 5034–5823px · e.g. div.ui-fragments-media.relative
- section 6: reveal on entering view — scale 1.07→1.00, at scroll 5034–5459px · e.g. div.media__wrap.w-full
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 5823–5823px · 4 elements · e.g. span.ui-layout-button__label “CONTACT US”; div.col-span-2.col-end-full “FR”; div.fade-in “5704-3804-01 General Contractor License”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 5823–5845px · 2 elements · e.g. a.ui-fragments-link-internal.ui-fragments-link “TERMS AND CONDITIONS”; a.ui-fragments-link-internal.ui-fragments-link “PRIVACY POLICY”

**:hover rules in the CSS (first 20):**

- `.hover\:bg-grey-100:hover { --tw-bg-opacity: 1; background-color: rgb(248 247 243/var(--tw-bg-opacity,1)); }`
- `.-hover:focus-visible .t-underline, .-hover:hover .t-underline, .t-underline:focus-visible, .t-underline:hover { background-position: 0 var(--bg-y-position,92%); background-size: 100% var(--bg-size,1px); }`
- `.-hover:focus-visible .t-underline.-has-underline, .-hover:hover .t-underline.-has-underline, .t-underline.-has-underline:focus-visible, .t-underline.-has-underline:hover { background-size: 0 var(--bg-size,1px); }`
- `.form .custom-select:not(.sr-only):hover, .form input:not(.sr-only):hover, .form textarea:not(.sr-only):hover { border-color: rgb(0, 0, 0); }`
- `.form input:-webkit-autofill, .form input:-webkit-autofill:active, .form input:-webkit-autofill:focus, .form input:-webkit-autofill:hover, .form textarea:-webkit-autofill, .form textarea:-webkit-autofill:active, .form te`
- `.form__field.-float-label:hover label { opacity: 1 !important; }`
- `.html-text a:focus-visible, .html-text a:hover { text-decoration-color: rgb(0, 0, 0); }`
- `.thumb-anchor:hover { opacity: 1; }`
- `.thumb-anchor:hover .refNumber::after, .thumb-anchor:hover .refNumber::before { transform: scale(1); }`
- `.thumb-anchor:hover picture { transform: scale(1.05); }`
- `.-hover:focus-visible .ui-layout-button.-primary::after, .-hover:hover .ui-layout-button.-primary::after, .ui-layout-button.-primary:focus-visible::after, .ui-layout-button.-primary:hover::after { transform: scaleX(1) tr`
- `.-hover:focus-visible .ui-layout-button.-secondary .ui-layout-button__icon svg, .-hover:hover .ui-layout-button.-secondary .ui-layout-button__icon svg, .ui-layout-button.-secondary:focus-visible .ui-layout-button__icon s`
- `.-hover:focus-visible .ui-layout-button.-secondary .ui-layout-button__icon svg.-external, .-hover:hover .ui-layout-button.-secondary .ui-layout-button__icon svg.-external, .ui-layout-button.-secondary:focus-visible .ui-l`
- `.-hover:focus-visible .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg, .-hover:hover .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg, .ui-layout-button.-secondary:focus-visible`
- `.-hover:focus-visible .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg.-external, .-hover:hover .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg.-external, .ui-layout-button.-sec`
- `.-hover:hover .ui-layout-link::before { transform: scale(1) translateZ(0px); }`
- `.-hover:hover .ui-layout-link .ui-layout-link__label { transform: translate(20px) translateZ(0px); }`
- `.ui-fragments-link.-highlight:hover { opacity: 1; }`
- `.ui-fragments-link.-highlight:hover ~ .link { opacity: 0.4; }`
- `.ui-fragments-link.-highlight:has(~ .link:hover) { opacity: 0.4; }`

### The site's own links

`/` Home · `/collection` Collection · `/who-we-are` Who we are · `/approach` Approach · `/stories-exception` Stories of exception · `/meet-with-us` Meet with us · `/press` PRESS · `/terms-and-conditions` TERMS AND CONDITIONS · `/privacy-policy` PRIVACY POLICY · `/fr` fr

## 1440px — Custom Cellars | Bespoke Wine & Storage Solutions | Cellart (page 7032px tall, window 1440×900)

**Fonts:** `StyreneB` ×49 · `Signifier` ×24

**Loaded faces:** StyreneB 400 normal · Signifier 400 normal · Signifier 400 italic · swiper-icons 400 normal

**Font sizes:** `13px` ×49 · `14px` ×17 · `27px` ×3 · `21px` ×3 · `18px` ×1

**Weights:** `400` ×69 · `500` ×3 · `700` ×1

**Size / line height:** `13px / 11.7px` ×49 · `14px / 16.8px` ×13 · `14px / 24px` ×4 · `27px / 29.7px` ×3 · `21px / 25.2px` ×3 · `18px / 24px` ×1

**Letter spacing:** `normal` ×70 · `-0.54px` ×3

**Text colours:** `rgb(0, 0, 0)` ×55 · `rgb(255, 255, 255)` ×15 · `rgb(33, 33, 33)` ×3

**Backgrounds:** `rgb(255, 255, 255)` ×483 · `rgb(0, 0, 0)` ×208 · `rgb(248, 247, 243)` ×200 · `rgb(238, 236, 231)` ×200 · `rgb(33, 33, 33)` ×11

**Borders:** `2px solid rgb(33, 33, 33)` ×3 · `1px solid rgb(244, 244, 244)` ×1

**Radii:** `2px` ×3 · `6px` ×2 · `4px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `transform 0.4s cubic-bezier(0.32` ×31 · `opacity 0.4s cubic-bezier(0.32` ×20 · `transform 0.7s cubic-bezier(0.32` ×19 · `opacity 0.5s cubic-bezier(0.32` ×17 · `clip-path 1s cubic-bezier(0.215` ×16 · `opacity 0.6s cubic-bezier(0.66` ×15 · `transform 1s cubic-bezier(0.215` ×14 · `transform 0.6s cubic-bezier(0.32` ×13

**:root variables (28):** `--power-0: cubic-bezier(0,0,1,1)` · `--power-1-in: cubic-bezier(.26,0,.6,.2)` · `--power-1-out: cubic-bezier(.4,.8,.74,1)` · `--power-1-in-out: cubic-bezier(.48,.04,.52,.96)` · `--power-2-in: cubic-bezier(.4,0,.68,.06)` · `--power-2-out: cubic-bezier(.32,.94,.6,1)` · `--power-2-in-out: cubic-bezier(.66,0,.34,1)` · `--power-3-in: cubic-bezier(.52,0,.74,0)` · `--power-3-out: cubic-bezier(.26,1,.48,1)` · `--power-3-in-out: cubic-bezier(.76,0,.24,1)` · `--power-4-in: cubic-bezier(.64,0,.78,0)` · `--power-4-out: cubic-bezier(.22,1,.36,1)` · `--power-4-in-out: cubic-bezier(.84,0,.16,1)` · `--size-in: cubic-bezier(.32,0,.6,.36)` · `--sine-out: cubic-bezier(.4,.64,.68,1)` · `--sine-in-out: cubic-bezier(.36,0,.64,1)` · `--expo-in: cubic-bezier(.66,0,.86,0)` · `--expo-out: cubic-bezier(.14,1,.34,1)` · `--expo-in-out: cubic-bezier(.9,0,.1,1)` · `--circ-in: cubic-bezier(.54,0,1,.44)` · `--circ-out: cubic-bezier(0,.56,.46,1)` · `--circ-in-out: cubic-bezier(.88,.14,.12,.86)` · `--smooth-in-out: cubic-bezier(.77,0,.18,1)` · `--refSize: 375` · `--max-columns: 24` · `--sbw: 0px` · `--header-height: 5rem` · `--swiper-theme-color: #007aff`

### Sections

1. `header` at 0px, 62px tall, position fixed · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Tailor-made spaces that challenge the ordinary” · original-1440-section-02.png
3. `section#main` at 900px, 327px tall — “Our raison d'être” · original-1440-section-03.png
4. `section#main` at 1227px, 4344px tall — “Perléo” · original-1440-section-04.png, original-1440-section-05.png, original-1440-section-06.png
5. `section` at 5571px, 720px tall — “Magnum Opus” · original-1440-section-07.png
6. `section` at 6291px, 451px tall — “Approach” · original-1440-section-08.png
7. `footer` at 6742px, 290px tall · original-1440-section-09.png

### Media slots

- section 2: video loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 4: image, 579×704 (aspect 0.82), fit cover
- section 4: image, 401×260 (aspect 1.54), fit cover
- section 4: image, 401×260 (aspect 1.54), fit cover
- section 4: image, 579×579 (aspect 1.00), fit cover
- section 4: image, 994×624 (aspect 1.59), fit cover
- section 4: image, 401×480 (aspect 0.83), fit cover
- section 4: image, 341×260 (aspect 1.31), fit cover
- section 4: image, 223×300 (aspect 0.74), fit cover
- section 4: image, 579×704 (aspect 0.82), fit cover
- section 4: image, 401×260 (aspect 1.54), fit cover
- section 4: image, 401×480 (aspect 0.83), fit cover
- section 4: image, 341×260 (aspect 1.31), fit cover
- section 4: image, 223×300 (aspect 0.74), fit cover
- section 5: image, 223×275 (aspect 0.81), fit cover
- section 5: image, 223×275 (aspect 0.81), fit cover
- section 5: image, 1642×821 (aspect 2.00), fit cover
- section 6: image, 223×301 (aspect 0.74), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 2 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 15 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-right “We value your privacy We use cookies to ”; div.cky-modal; div.common-skip-link.fixed “SKIP TO MAIN CONTENT”
- section 1: reveal on entering view — translateY 0→-62px, while pinned, at scroll 420–420px · e.g. header.common-header.w-full “SPACES COLLECTION WHO WE ARE APPROACH ST”
- section 2: scrubbed with the scroll — translateY 0→90px, at scroll 420–1319px · e.g. div.absolute.top-0 “Tailor-made spaces that challenge the or”
- section 3: reveal on entering view — translateY 13→0px, at scroll 420–868px · e.g. span.block.|| “OUR RAISON D'ÊTRE”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 420–868px · e.g. div.col-span-full.body-1 “It started with a passion for wine and a”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→-1162px, while pinned, at scroll 868–6132px · 5 elements · e.g. div.home-grid-item__content.px-spacingPage “PERLÉO A wine collection that stands con”; div.home-grid-item__content.px-spacingPage “TONNERRE DE VIGNE Binding nature, tradit”; div.home-grid-item__content.px-spacingPage “QUANTUM LIMIT Where tradition, art, and ”
- section 4: reveal on entering view — opacity 1.00→0.60, at scroll 2222–2668px · 3 elements · e.g. h3.caption.home-grid-item__caption “PERLÉO”; h3.caption.home-grid-item__caption “TONNERRE DE VIGNE”; h3.caption.home-grid-item__caption “QUANTUM LIMIT”
- section 4: reveal on entering view — opacity 1.00→0.00, at scroll 2222–2668px · e.g. div.mt-12 “A wine collection that stands confidentl”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 868–868px · 8 elements · e.g. span.ui-layout-button__label “EXPLORE”; span.ui-layout-button__label “EXPLORE”; span.ui-layout-button__label “EXPLORE”
- section 4: reveal on entering view — clip-path changes, at scroll 868–1319px · 2 elements · e.g. div.ui-fragments-media.relative; div.ui-fragments-media.relative
- section 4: reveal on entering view — scale 1.07→1.00, at scroll 868–1319px · 13 elements · e.g. div.media__wrap.w-full; div.media__wrap.w-full; div.media__wrap.w-full
- section 4: reveal on entering view — scale 1.00→1.00, at scroll 1319–2222px · 6 elements · e.g. picture.ui-fragments-image.isLoaded; picture.ui-fragments-image.isLoaded; picture.ui-fragments-image.isLoaded
- section 4: reveal on entering view — translateY 60→0px, at scroll 868–1319px · 16 elements · e.g. p.caption.|| “1.1”; p.caption.|| “1.2”; div.body-3.|| “Inclined clear acrylic shelves”
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 2222–3119px · 4 elements · e.g. div.mt-12.md:opacity-0 “Binding nature, tradition, and ritual in”; div.mt-12.md:opacity-0 “Where tradition, art, and personal herit”; div.mt-12.md:opacity-0 “A concealed passage between passion and ”
- section 4: scrubbed with the scroll — clip-path changes, at scroll 1319–2222px · 11 elements · e.g. div.ui-fragments-media.relative; div.ui-fragments-media.relative; div.ui-fragments-media.relative
- section 4: scrubbed with the scroll — translateY 60→0px, at scroll 1319–2222px · 2 elements · e.g. p.caption.|| “2.1”; p.caption.|| “2.2”
- section 4: scrubbed with the scroll — opacity 1.00→0.60, at scroll 2222–4468px · 2 elements · e.g. h3.caption.home-grid-item__caption “ACCORD”; h3.caption.home-grid-item__caption “CHAMBER”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→-1162px, at scroll 4022–6132px · e.g. div.home-grid-item__content.px-spacingPage “LUMENOAK A dialogue between material int”
- section 4: fixed, at scroll pinned for 15 half-screens · e.g. div.base-modal.c-common-modal-project
- section 4: pinned (sticky), at scroll pinned for 15 half-screens · e.g. div.md:sticky.top-0
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 5371–5819px · 4 elements · e.g. p.caption.text-right “2026 EDITIONS”; span.ui-layout-button__label “COMPLETE”; span.ui-layout-button__label “COLLECTION”
- section 5: scrubbed with the scroll — clip-path changes, at scroll 4919–6112px · 2 elements · e.g. div.image-mask; div.image-mask
- section 5: reveal on entering view — opacity 0.00→1.00, scale 1.15→1.00, at scroll 4919–5371px · e.g. div.ui-fragments-media.relative
- section 5: scrubbed with the scroll — translateY -50→38px, at scroll 4919–6132px · e.g. div.media__wrap.w-full
- section 6: reveal on entering view — translateY 60→0px, at scroll 5819–6112px · e.g. span.block.|| “APPROACH”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 5819–6112px · e.g. span.ui-layout-button__label “DISCOVER”
- section 6: scrubbed with the scroll — clip-path changes, at scroll 5819–6132px · e.g. div.ui-fragments-media.relative
- section 6: reveal on entering view — scale 1.07→1.00, at scroll 5819–6112px · e.g. div.media__wrap.w-full
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 6112–6132px · 4 elements · e.g. span.ui-layout-button__label “CONTACT US”; div.col-span-2.col-end-full “FR”; div.fade-in “5704-3804-01 General Contractor License”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 6112–6132px · 2 elements · e.g. a.ui-fragments-link-internal.ui-fragments-link “TERMS AND CONDITIONS”; a.ui-fragments-link-internal.ui-fragments-link “PRIVACY POLICY”

**On hover:**

- button “Customise”: opacity: 1 → 0.8 · transition `all`
- button “Reject All”: opacity: 1 → 0.8 · transition `all`
- button “Accept All”: opacity: 1 → 0.8 · transition `all`

**:hover rules in the CSS (first 20):**

- `.hover\:bg-grey-100:hover { --tw-bg-opacity: 1; background-color: rgb(248 247 243/var(--tw-bg-opacity,1)); }`
- `.-hover:focus-visible .t-underline, .-hover:hover .t-underline, .t-underline:focus-visible, .t-underline:hover { background-position: 0 var(--bg-y-position,92%); background-size: 100% var(--bg-size,1px); }`
- `.-hover:focus-visible .t-underline.-has-underline, .-hover:hover .t-underline.-has-underline, .t-underline.-has-underline:focus-visible, .t-underline.-has-underline:hover { background-size: 0 var(--bg-size,1px); }`
- `.form .custom-select:not(.sr-only):hover, .form input:not(.sr-only):hover, .form textarea:not(.sr-only):hover { border-color: rgb(0, 0, 0); }`
- `.form input:-webkit-autofill, .form input:-webkit-autofill:active, .form input:-webkit-autofill:focus, .form input:-webkit-autofill:hover, .form textarea:-webkit-autofill, .form textarea:-webkit-autofill:active, .form te`
- `.form__field.-float-label:hover label { opacity: 1 !important; }`
- `.html-text a:focus-visible, .html-text a:hover { text-decoration-color: rgb(0, 0, 0); }`
- `.thumb-anchor:hover { opacity: 1; }`
- `.thumb-anchor:hover .refNumber::after, .thumb-anchor:hover .refNumber::before { transform: scale(1); }`
- `.thumb-anchor:hover picture { transform: scale(1.05); }`
- `.-hover:focus-visible .ui-layout-button.-primary::after, .-hover:hover .ui-layout-button.-primary::after, .ui-layout-button.-primary:focus-visible::after, .ui-layout-button.-primary:hover::after { transform: scaleX(1) tr`
- `.-hover:focus-visible .ui-layout-button.-secondary .ui-layout-button__icon svg, .-hover:hover .ui-layout-button.-secondary .ui-layout-button__icon svg, .ui-layout-button.-secondary:focus-visible .ui-layout-button__icon s`
- `.-hover:focus-visible .ui-layout-button.-secondary .ui-layout-button__icon svg.-external, .-hover:hover .ui-layout-button.-secondary .ui-layout-button__icon svg.-external, .ui-layout-button.-secondary:focus-visible .ui-l`
- `.-hover:focus-visible .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg, .-hover:hover .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg, .ui-layout-button.-secondary:focus-visible`
- `.-hover:focus-visible .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg.-external, .-hover:hover .ui-layout-button.-secondary.-icon-before .ui-layout-button__icon svg.-external, .ui-layout-button.-sec`
- `.-hover:hover .ui-layout-link::before { transform: scale(1) translateZ(0px); }`
- `.-hover:hover .ui-layout-link .ui-layout-link__label { transform: translate(20px) translateZ(0px); }`
- `.ui-fragments-link.-highlight:hover { opacity: 1; }`
- `.ui-fragments-link.-highlight:hover ~ .link { opacity: 0.4; }`
- `.ui-fragments-link.-highlight:has(~ .link:hover) { opacity: 0.4; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Home · `/collection` COLLECTION · `/who-we-are` WHO WE ARE · `/approach` APPROACH · `/stories-exception` STORIES OF EXCEPTION · `/meet-with-us` MEET WITH US · `/press` PRESS · `/terms-and-conditions` TERMS AND CONDITIONS · `/privacy-policy` PRIVACY POLICY · `/fr` fr
