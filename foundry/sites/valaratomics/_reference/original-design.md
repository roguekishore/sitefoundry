# Design capture: https://valaratomics.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — The New Atomic Age | Valar Atomics (page 10958px tall, window 390×844)

**Fonts:** `__saans_6f9383` ×32 · `__saansMono_4049e8` ×29 · `__druk_6e504a` ×2

**Loaded faces:** __druk_6e504a 400 normal · __druk_Fallback_6e504a normal normal · __saans_6f9383 400 normal · __saans_6f9383 500 normal · __saans_Fallback_6f9383 normal normal · __saansMono_4049e8 400 normal · __saansMono_4049e8 500 600 normal · __saansMono_Fallback_4049e8 normal normal

**Font sizes:** `18px` ×15 · `24px` ×15 · `22px` ×13 · `42px` ×7 · `32px` ×4 · `14px` ×4 · `16px` ×4 · `36px` ×1

**Weights:** `400` ×42 · `500` ×14 · `600` ×4 · `700` ×2 · `300` ×1

**Size / line height:** `18px / 19.8px` ×10 · `24px / 24px` ×9 · `22px / 24.2px` ×9 · `42px / 37.8px` ×7 · `18px / 18px` ×4 · `24px / 25.68px` ×4 · `22px / 23.54px` ×4 · `16px / 16px` ×4 · `14px / 14.98px` ×3 · `32px / 32px` ×3

**Letter spacing:** `normal` ×28 · `-0.18px` ×10 · `-0.96px` ×9 · `-0.84px` ×6 · `-0.44px` ×4 · `-0.64px` ×3

**Text colours:** `rgb(0, 0, 0)` ×33 · `rgb(255, 255, 255)` ×27 · `rgb(233, 183, 9)` ×3

**Backgrounds:** `rgb(0, 0, 0)` ×1189 · `rgb(231, 231, 231)` ×1005 · `rgb(255, 255, 255)` ×686 · `rgb(243, 243, 243)` ×200 · `rgba(0, 0, 0, 0.5)` ×9

**Borders:** `1px solid rgb(233, 183, 9)` ×3 · `1px solid rgba(255, 255, 255, 0.5)` ×1 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×4 · `8px` ×1 · `5px` ×1

**Gradients:** `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0))` ×2 · `linear-gradient(rgb(0, 0, 0), rgba(255, 255, 255, 0))` ×1

**Transitions:** `opacity 0.15s cubic-bezier(0.4` ×12 · `filter 0.3s cubic-bezier(0.4` ×6 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×4 · `opacity 0.25s ease` ×4 · `filter, opacity 0.5s ease-in-out` ×3 · `opacity 0.3s cubic-bezier(0.4` ×1 · `clip-path 0.5s cubic-bezier(0.92` ×1 · `all 0.5s cubic-bezier(0.4` ×1

**:root variables (34):** `--vh: 1vh` · `--nav-height: 106px` · `--num-grid-cols: 12` · `--px-section: 5.9vw` · `--py-section: calc(var(--vh) * 16)` · `--testing-grid-cols: 12` · `--column-gap: 2vw` · `--black: #000` · `--white: #fff` · `--bg: #f3f3f3` · `--gray: #e7e7e7` · `--gold: #e9b709` · `--letter-heading: -0.02em` · `--letter-body: -0.01em` · `--text-heading: 48px` · `--line-heading: 0.9` · `--text-body: 22px` · `--line-body: 1.1` · `--letter-eyebrow: 0em` · `--text-eyebrow: 18px` · `--line-eyebrow: 1.07` · `--spacing-lg: 144px` · `--spacing-base: 72px` · `--spacing-sm: 36px` · `--spacing-paragraph: 22px` · `--media-control-bar-background: rgba(0,0,0,.5)` · `--media-control-bar-border-radius: 20px` · `--media-control-bar-backdrop-filter: blur(20px)` · `--media-control-bar-height: 40px` · `--media-control-bar-margin: 0.5rem` · `--media-control-bar-padding: 0.5rem 0.75rem` · `--media-control-bar-gap: 0.25rem` · `--media-control-bar-border: 1px solid hsla(0,0%,100%,.2)` · `--media-control-bar-z-index: 10`

### Sections

1. `header` at 0px, 76px tall, position fixed · original-390-section-01.png
2. `section` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “The New Atomic Age” · original-390-section-02.png
3. `section` at 844px, 700px tall — “Nuclear needs scale.” · original-390-section-03.png
4. `section` at 1544px, 877px tall — “A New Model for Nuclear” · original-390-section-04.png
5. `section` at 2421px, 990px tall — “Proven Technology” · original-390-section-05.png
6. `section` at 3411px, 1541px tall — “Products” · original-390-section-06.png
7. `section` at 4952px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Ward 250” · original-390-section-07.png
8. `div` at 5796px, 969px tall — “Unlocking Abundant Energy” · original-390-section-08.png
9. `section` at 6766px, 3357px tall — “Media and Press” · original-390-section-09.png, original-390-section-10.png
10. `footer` at 10123px, 835px tall — “Build with us” · original-390-section-11.png

### Media slots

- section 2: video autoplay loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 4: image, 381×921 (aspect 0.41), fit cover
- section 5: video, 363×440 (aspect 0.82), fit cover
- section 6: image, 363×230 (aspect 1.58), fit cover
- section 6: video autoplay loop, 363×230 (aspect 1.58), fit cover
- section 6: image, 363×230 (aspect 1.58), fit cover
- section 6: video autoplay loop, 363×230 (aspect 1.58), fit cover
- section 6: image, 363×254 (aspect 1.43), fit cover
- section 6: video autoplay loop, 363×254 (aspect 1.43), fit cover
- section 6: image, 363×301 (aspect 1.21), fit cover
- section 6: video autoplay loop, 363×301 (aspect 1.21), fit cover
- section 7: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 8: image, 362×236 (aspect 1.54), fit auto
- section 8: image, 363×236 (aspect 1.54), fit auto
- section 10: image, 780×694 (aspect 1.12), fit auto

### Motion

**Libraries and media seen:** 6 video element(s)

**While scrolling** (sampled every half screen):

- section 1: fixed, at scroll pinned for 24 half-screens · e.g. header.fixed.top-0
- section 1: reveal on entering view — opacity 1.00→0.00, at scroll 422–422px · e.g. svg
- section 3: scrubbed with the scroll — opacity 0.10→0.10, filter changes (e.g. blur), at scroll 422–2532px · e.g. div.md:max-w-[600px].md:mx-auto “Nuclear needs scale. Since its invention”
- section 4: scrubbed with the scroll — opacity 0.00→0.00, translateY 75→75px, scale 1.05→1.05, at scroll 844–2954px · e.g. div.origin-bottom.absolute
- section 5: scrubbed with the scroll — clip-path changes, at scroll 5486–9706px · e.g. div.bg-black.w-full
- section 5: reveal on entering view — opacity 1.00→0.50, filter changes (e.g. blur), at scroll 5486–5486px · e.g. div.flex.flex-col “FUEL TRISO”
- section 5: reveal on entering view — opacity 0.50→0.50, filter changes (e.g. blur), at scroll 5486–9706px · e.g. div.flex.flex-col “MODERATOR GRAPHITE”
- section 5: reveal on entering view — opacity 0.50→1.00, filter changes (e.g. blur), at scroll 9284–9706px · e.g. div.flex.flex-col “COOLANT HELIUM”
- section 9: reveal on entering view — opacity 0.30→0.30, at scroll 6752–7174px · 6 elements · e.g. div.flex.flex-row “READ MORE”; div.flex.flex-row “READ MORE”; div.flex.flex-row “READ MORE”
- section 10: fixed, at scroll pinned for 24 half-screens · e.g. div.bg-black.fixed “BUILD WITH US JOIN THE TEAM USE OUR ENER”

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on div.md:max-w-[600px].md:mx-auto “Nuclear needs scale. Since its invention”: 1000ms (opacity)
- Animation `` on div.origin-bottom.absolute: 750ms (opacity)

**:hover rules in the CSS (first 20):**

- `.hover\:border-gold:hover { border-color: var(--gold); }`
- `.hover\:bg-gold:hover { background-color: var(--gold); }`
- `.hover\:pl-\[10px\]:hover { padding-left: 10px; }`
- `.hover\:text-\[rgba\(0\,0\,0\,\.5\)\]:hover { color: rgba(0, 0, 0, 0.5); }`
- `.hover\:text-black:hover { color: var(--black); }`
- `.hover\:text-gold:hover { color: var(--gold); }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.group:hover .group-hover\:translate-x-1 { --tw-translate-x: 0.25rem; }`
- `.group:hover .group-hover\:translate-x-1, .group\/card:hover .group-hover\/card\:scale-\[1\.04\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(`
- `.group\/card:hover .group-hover\/card\:scale-\[1\.04\] { --tw-scale-x: 1.04; --tw-scale-y: 1.04; }`
- `.group:hover .group-hover\:scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }`
- `.group:hover .group-hover\:scale-105, .group:hover .group-hover\:scale-110 { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scal`
- `.group:hover .group-hover\:scale-110 { --tw-scale-x: 1.1; --tw-scale-y: 1.1; }`
- `.group:hover .group-hover\:scale-\[1\.03\] { --tw-scale-x: 1.03; --tw-scale-y: 1.03; }`
- `.group:hover .group-hover\:scale-\[1\.03\], .group:hover .group-hover\:scale-\[1\.045\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-`
- `.group:hover .group-hover\:scale-\[1\.045\] { --tw-scale-x: 1.045; --tw-scale-y: 1.045; }`
- `.group:hover .group-hover\:scale-\[1\.04\] { --tw-scale-x: 1.04; --tw-scale-y: 1.04; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-`
- `.group:hover .group-hover\:border-gold { border-color: var(--gold); }`
- `.group:hover .group-hover\:bg-\[rgba\(0\,0\,0\,\.06\)\] { background-color: rgba(0, 0, 0, 0.06); }`

### The site's own links

`/` Home · `/technology` Technology · `/ward-250` Ward 250 · `/castle-country` Castle Country · `/mission` Mission · `/docs` Docs · `/careers` Join our Team

## 1440px — The New Atomic Age | Valar Atomics (page 9060px tall, window 1440×900)

**Fonts:** `__saansMono_4049e8` ×37 · `__saans_6f9383` ×32 · `__druk_6e504a` ×2

**Loaded faces:** __druk_6e504a 400 normal · __druk_Fallback_6e504a normal normal · __saans_6f9383 400 normal · __saans_6f9383 500 normal · __saans_Fallback_6f9383 normal normal · __saansMono_4049e8 400 normal · __saansMono_4049e8 500 600 normal · __saansMono_Fallback_4049e8 normal normal

**Font sizes:** `22px` ×24 · `16px` ×12 · `48px` ×9 · `30px` ×9 · `18px` ×8 · `24px` ×5 · `80px` ×1 · `60px` ×1 · `85px` ×1 · `14px` ×1

**Weights:** `400` ×50 · `500` ×14 · `600` ×4 · `700` ×2 · `300` ×1

**Size / line height:** `22px / 24.2px` ×20 · `30px / 30px` ×9 · `16px / 24px` ×6 · `48px / 43.2px` ×6 · `16px / 16px` ×6 · `18px / 18px` ×4 · `18px / 19.26px` ×4 · `24px / 25.68px` ×4 · `22px / 23.54px` ×4 · `48px / 48px` ×3

**Letter spacing:** `normal` ×30 · `-0.22px` ×11 · `-1.2px` ×10 · `-0.96px` ×9 · `-0.16px` ×6 · `-0.44px` ×4

**Text colours:** `rgb(255, 255, 255)` ×35 · `rgb(0, 0, 0)` ×33 · `rgb(233, 183, 9)` ×3

**Backgrounds:** `rgb(231, 231, 231)` ×1513 · `rgb(0, 0, 0)` ×1229 · `rgb(255, 255, 255)` ×800 · `rgb(243, 243, 243)` ×200 · `rgba(0, 0, 0, 0.5)` ×9

**Borders:** `1px solid rgb(233, 183, 9)` ×3 · `1px solid rgba(255, 255, 255, 0.5)` ×1 · `1px solid rgb(255, 255, 255)` ×1

**Radii:** `4px` ×4 · `8px` ×1 · `5px` ×1

**Gradients:** `linear-gradient(to top, rgb(0, 0, 0), rgba(255, 255, 255, 0))` ×2 · `linear-gradient(rgb(0, 0, 0), rgba(255, 255, 255, 0))` ×1

**Transitions:** `opacity 0.15s cubic-bezier(0.4` ×12 · `filter 0.3s cubic-bezier(0.4` ×6 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×4 · `opacity 0.25s ease` ×4 · `filter, opacity 0.5s ease-in-out` ×3 · `opacity 0.3s cubic-bezier(0.4` ×2 · `clip-path 0.5s cubic-bezier(0.92` ×1 · `all 0.5s cubic-bezier(0.4` ×1

**:root variables (34):** `--vh: 1vh` · `--nav-height: 106px` · `--num-grid-cols: 12` · `--px-section: 5.9vw` · `--py-section: calc(var(--vh) * 16)` · `--testing-grid-cols: 12` · `--column-gap: 2vw` · `--black: #000` · `--white: #fff` · `--bg: #f3f3f3` · `--gray: #e7e7e7` · `--gold: #e9b709` · `--letter-heading: -0.02em` · `--letter-body: -0.01em` · `--text-heading: 48px` · `--line-heading: 0.9` · `--text-body: 22px` · `--line-body: 1.1` · `--letter-eyebrow: 0em` · `--text-eyebrow: 18px` · `--line-eyebrow: 1.07` · `--spacing-lg: 144px` · `--spacing-base: 72px` · `--spacing-sm: 36px` · `--spacing-paragraph: 22px` · `--media-control-bar-background: rgba(0,0,0,.5)` · `--media-control-bar-border-radius: 20px` · `--media-control-bar-backdrop-filter: blur(20px)` · `--media-control-bar-height: 40px` · `--media-control-bar-margin: 0.5rem` · `--media-control-bar-padding: 0.5rem 0.75rem` · `--media-control-bar-gap: 0.25rem` · `--media-control-bar-border: 1px solid hsla(0,0%,100%,.2)` · `--media-control-bar-z-index: 10`

### Sections

1. `header` at 0px, 106px tall, position fixed · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “The New Atomic Age” · original-1440-section-02.png
3. `section` at 900px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Nuclear needs scale.” · original-1440-section-03.png
4. `section` at 1800px, 765px tall — **sized by the window: 85% of the window height** (583px in a 675px window) — “A New Model for Nuclear” · original-1440-section-04.png
5. `section` at 2565px, 1048px tall — “Proven Technology” · original-1440-section-05.png
6. `section` at 3613px, 939px tall — “Products” · original-1440-section-06.png
7. `section` at 4552px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Ward 250” · original-1440-section-07.png
8. `div` at 5452px, 836px tall — “Unlocking Abundant Energy” · original-1440-section-08.png
9. `section` at 6288px, 1937px tall — “Media and Press” · original-1440-section-09.png
10. `footer` at 8225px, 835px tall — “Build with us” · original-1440-section-10.png

### Media slots

- section 2: video autoplay loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 4: image, 1334×803 (aspect 1.66), fit cover
- section 5: video, 1270×440 (aspect 2.89), fit cover
- section 6: image, 303×410 (aspect 0.74), fit cover
- section 6: video autoplay loop, 303×410 (aspect 0.74), fit cover
- section 6: image, 303×410 (aspect 0.74), fit cover
- section 6: video autoplay loop, 303×410 (aspect 0.74), fit cover
- section 6: image, 303×410 (aspect 0.74), fit cover
- section 6: video autoplay loop, 303×410 (aspect 0.74), fit cover
- section 6: image, 303×410 (aspect 0.74), fit cover
- section 6: video autoplay loop, 303×410 (aspect 0.74), fit cover
- section 7: image, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 8: image, 620×404 (aspect 1.54), fit auto
- section 8: image, 621×404 (aspect 1.54), fit auto
- section 10: image, 1000×890 (aspect 1.12), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** 6 video element(s)

**While scrolling** (sampled every half screen):

- section 1: fixed, at scroll pinned for 19 half-screens · e.g. header.fixed.top-0 “TECHNOLOGY WARD 250 CASTLE COUNTRY MISSI”
- section 1: reveal on entering view — opacity 1.00→0.00, at scroll 450–450px · 2 elements · e.g. svg; div.hidden.lg:flex “TECHNOLOGY WARD 250 CASTLE COUNTRY MISSI”
- section 3: scrubbed with the scroll — opacity 0.10→0.10, filter changes (e.g. blur), at scroll 450–2700px · e.g. div.md:max-w-[600px].md:mx-auto “Nuclear needs scale. Since its invention”
- section 4: scrubbed with the scroll — opacity 0.00→0.00, translateY 75→75px, scale 1.05→1.05, at scroll 1350–3150px · e.g. div.origin-bottom.absolute
- section 5: scrubbed with the scroll — clip-path changes, at scroll 5400–8160px · e.g. div.bg-black.w-full
- section 5: reveal on entering view — opacity 1.00→0.50, filter changes (e.g. blur), at scroll 5400–5850px · e.g. div.flex.flex-col “FUEL TRISO”
- section 5: scrubbed with the scroll — opacity 0.50→0.93, filter changes (e.g. blur), at scroll 5400–8160px · e.g. div.flex.flex-col “MODERATOR GRAPHITE”
- section 5: reveal on entering view — filter changes (e.g. blur), at scroll 8160–8160px · e.g. div.flex.flex-col “COOLANT HELIUM”
- section 9: reveal on entering view — opacity 0.30→0.30, at scroll 6300–6750px · 3 elements · e.g. div.flex.flex-row “READ MORE”; div.flex.flex-row “READ MORE”; div.flex.flex-row “READ MORE”
- section 10: fixed, at scroll pinned for 19 half-screens · e.g. div.bg-black.fixed “BUILD WITH US PROUDLY BUILT IN AMERICA ©”
- section 10: scrubbed with the scroll — opacity 0.00→1.00, at scroll 7650–8160px · e.g. div.absolute.bottom-0

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on div.md:max-w-[600px].md:mx-auto “Nuclear needs scale. Since its invention”: 1000ms (opacity)
- Animation `` on div.origin-bottom.absolute: 750ms (opacity)

**On hover:**

- a “CONTACT US”: color: rgb(255, 255, 255) → rgb(0, 0, 0); background: rgba(0, 0, 0, 0.5) → rgb(233, 183, 9); inner color: rgb(255, 255, 255) → rgb(0, 0, 0); inner border: rgb(255, 255, 255) → rgb(0, 0, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “OUR TECHNOLOGY”: color: rgb(255, 255, 255) → rgb(0, 0, 0); background: rgb(0, 0, 0) → rgb(233, 183, 9); inner color: rgb(255, 255, 255) → rgb(0, 0, 0); inner border: rgb(255, 255, 255) → rgb(0, 0, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “LEARN MORE”: color: rgb(255, 255, 255) → rgb(0, 0, 0); background: rgb(0, 0, 0) → rgb(233, 183, 9); inner color: rgb(255, 255, 255) → rgb(0, 0, 0); inner border: rgb(255, 255, 255) → rgb(0, 0, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “JOIN OUR MISSION”: filter: none → drop-shadow(rgba(233, 183, 11, 0.02) 0px 0.5px 0.7px) drop-shadow(rgba(233, 183, 11, 0.07) 0px 2.4px 3.3px) drop-shadow(rgba(233, 183, 11, 0.1) 0px 5.3px 7.2px) drop-shadow(rgba(233, 183, 11, 0.14) -0.1px 11.7px 15.9px) · transition `filter 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- button “SHOW MORE”: color: rgb(255, 255, 255) → rgb(0, 0, 0); background: rgb(0, 0, 0) → rgb(233, 183, 9); inner color: rgb(255, 255, 255) → rgb(0, 0, 0); inner border: rgb(255, 255, 255) → rgb(0, 0, 0) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`

**:hover rules in the CSS (first 20):**

- `.hover\:border-gold:hover { border-color: var(--gold); }`
- `.hover\:bg-gold:hover { background-color: var(--gold); }`
- `.hover\:pl-\[10px\]:hover { padding-left: 10px; }`
- `.hover\:text-\[rgba\(0\,0\,0\,\.5\)\]:hover { color: rgba(0, 0, 0, 0.5); }`
- `.hover\:text-black:hover { color: var(--black); }`
- `.hover\:text-gold:hover { color: var(--gold); }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.group:hover .group-hover\:translate-x-1 { --tw-translate-x: 0.25rem; }`
- `.group:hover .group-hover\:translate-x-1, .group\/card:hover .group-hover\/card\:scale-\[1\.04\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(`
- `.group\/card:hover .group-hover\/card\:scale-\[1\.04\] { --tw-scale-x: 1.04; --tw-scale-y: 1.04; }`
- `.group:hover .group-hover\:scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }`
- `.group:hover .group-hover\:scale-105, .group:hover .group-hover\:scale-110 { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scal`
- `.group:hover .group-hover\:scale-110 { --tw-scale-x: 1.1; --tw-scale-y: 1.1; }`
- `.group:hover .group-hover\:scale-\[1\.03\] { --tw-scale-x: 1.03; --tw-scale-y: 1.03; }`
- `.group:hover .group-hover\:scale-\[1\.03\], .group:hover .group-hover\:scale-\[1\.045\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-`
- `.group:hover .group-hover\:scale-\[1\.045\] { --tw-scale-x: 1.045; --tw-scale-y: 1.045; }`
- `.group:hover .group-hover\:scale-\[1\.04\] { --tw-scale-x: 1.04; --tw-scale-y: 1.04; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-`
- `.group:hover .group-hover\:border-gold { border-color: var(--gold); }`
- `.group:hover .group-hover\:bg-\[rgba\(0\,0\,0\,\.06\)\] { background-color: rgba(0, 0, 0, 0.06); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Home · `/technology` TECHNOLOGY · `/ward-250` WARD 250 · `/castle-country` CASTLE COUNTRY · `/mission` MISSION · `/docs` DOCS · `/careers` JOIN OUR TEAM
