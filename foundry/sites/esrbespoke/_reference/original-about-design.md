# Design capture: https://esrbespoke.au/about

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — About | ESR (page 3509px tall, window 390×844)

**Fonts:** `__headingFont_a39ca7` ×120 · `__bodyFont_0f148b` ×74

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×120 · `40px` ×35 · `38px` ×26 · `18px` ×12 · `15px` ×1

**Weights:** `300` ×120 · `500` ×74

**Size / line height:** `14px / 14px` ×119 · `40px / 40px` ×35 · `38px / 36.1px` ×26 · `18px / 23.4px` ×12 · `15px / 18px` ×1 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×119 · `-0.4px` ×35 · `-0.38px` ×26 · `normal` ×13 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×171 · `rgb(255, 255, 255)` ×23

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×386 · `rgb(97, 71, 51)` ×186 · `rgb(170, 179, 185)` ×84 · `rgb(181, 216, 207)` ×84 · `rgb(178, 190, 192)` ×84 · `rgb(118, 137, 139)` ×84 · `rgb(39, 161, 194)` ×84 · `rgb(51, 68, 70)` ×84 · `rgb(43, 43, 43)` ×2 · `rgba(0, 0, 0, 0.1)` ×1

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×6

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×27 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `div` at 0px, 2691px tall — “Restoring luxury since 1989” · original-about-390-section-01.png, original-about-390-section-02.png
3. `footer` at 2691px, 818px tall · original-about-390-section-03.png

### Media slots

- section 2: canvas (WebGL/2D), 390×477 (aspect 0.82), fit auto
- section 2: image, 390×477 (aspect 0.82), fit cover
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: image, 354×236 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: image, 354×236 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: image, 354×236 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: image, 354×236 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 354×236 (aspect 1.50), fit auto
- section 2: image, 354×236 (aspect 1.50), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 18 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 2531–2665px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 7 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 3: reveal on entering view — opacity 1.00→1.00, at scroll 2108–2531px · e.g. div “E”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 2108–2108px · 267 elements · e.g. div “A”; div “U”; div “T”

**:hover rules in the CSS (first 16):**

- `a:hover { text-decoration: none; }`
- `.hover\:\!bg-\[rgba\(0\,0\,0\,0\.1\)\]:hover { background-color: rgba(0, 0, 0, 0.1) !important; }`
- `.hover\:bg-black:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity)); }`
- `.hover\:\!opacity-50:hover { opacity: 0.5 !important; }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.hover\:before\:scale-100:hover::before { content: var(--tw-content); --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) s`
- `.group:hover .group-hover\:translate-y-\[-1px\] { --tw-translate-y: -1px; }`
- `.group:hover .group-hover\:translate-y-\[-1px\], .group:hover .group-hover\:translate-y-\[1px\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(v`
- `.group:hover .group-hover\:translate-y-\[1px\] { --tw-translate-y: 1px; }`
- `.group:hover .group-hover\:scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(v`
- `.group:hover .group-hover\:\!opacity-100 { opacity: 1 !important; }`
- `.group:hover .md\:group-hover\:opacity-100 { opacity: 1; }`
- `.\[\&_a\:hover\]\:\!opacity-50 a:hover { opacity: 0.5 !important; }`
- `.\[\&_a\:hover\]\:opacity-50 a:hover { opacity: 0.5; }`

### The site's own links

`/` Home · `/services` Services · `/partners` Partners · `/about` About · `/contact` Contact · `/careers` Careers · `/privacy-policy` PRIVACY

## 1440px — About | ESR (page 4068px tall, window 1440×900)

**Fonts:** `__headingFont_a39ca7` ×155 · `__bodyFont_0f148b` ×74

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×155 · `62px` ×61 · `18px` ×12 · `20px` ×1

**Weights:** `300` ×155 · `500` ×74

**Size / line height:** `14px / 14px` ×154 · `62px / 62px` ×35 · `62px / 58.9px` ×26 · `18px / 23.4px` ×12 · `20px / 24px` ×1 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×154 · `-0.62px` ×61 · `normal` ×13 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×202 · `rgb(255, 255, 255)` ×27

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×400 · `rgb(97, 71, 51)` ×200 · `rgba(0, 0, 0, 0.1)` ×4

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×27 · `opacity 0.5s cubic-bezier(0.19` ×13 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-about-1440-section-01.png
2. `div` at 0px, 3168px tall — “Restoring luxury since 1989” · original-about-1440-section-02.png, original-about-1440-section-03.png
3. `footer` at 3168px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-about-1440-section-04.png

### Media slots

- section -: video autoplay loop, 216×270 (aspect 0.80), fit cover
- section -: canvas (WebGL/2D), 216×270 (aspect 0.80), fit auto
- section -: image, 216×270 (aspect 0.80), fit cover
- section -: canvas (WebGL/2D), 216×270 (aspect 0.80), fit auto
- section -: image, 216×270 (aspect 0.80), fit cover
- section -: canvas (WebGL/2D), 216×270 (aspect 0.80), fit auto
- section -: image, 216×270 (aspect 0.80), fit cover
- section -: canvas (WebGL/2D), 216×270 (aspect 0.80), fit auto
- section -: image, 216×270 (aspect 0.80), fit cover
- section -: canvas (WebGL/2D), 216×270 (aspect 0.80), fit auto
- section -: image, 216×270 (aspect 0.80), fit cover
- section 2: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 2: image, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover
- section 2: canvas (WebGL/2D), 332×221 (aspect 1.50), fit auto
- section 2: image, 332×221 (aspect 1.50), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 18 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 3148–3168px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 8 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: scrubbed with the scroll — translateY -185→766px, at scroll 448–3168px · e.g. div.!absolute.inset-0
- section 3: fixed, at scroll pinned for 8 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 3: reveal on entering view — opacity 1.00→1.00, at scroll 2698–3148px · 12 elements · e.g. div “B”; div “E”; div “S”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 3148–3148px · 267 elements · e.g. div “A”; div “U”; div “T”

**:hover rules in the CSS (first 16):**

- `a:hover { text-decoration: none; }`
- `.hover\:\!bg-\[rgba\(0\,0\,0\,0\.1\)\]:hover { background-color: rgba(0, 0, 0, 0.1) !important; }`
- `.hover\:bg-black:hover { --tw-bg-opacity: 1; background-color: rgb(0 0 0/var(--tw-bg-opacity)); }`
- `.hover\:\!opacity-50:hover { opacity: 0.5 !important; }`
- `.hover\:opacity-100:hover { opacity: 1; }`
- `.hover\:opacity-50:hover { opacity: 0.5; }`
- `.hover\:opacity-70:hover { opacity: 0.7; }`
- `.hover\:before\:scale-100:hover::before { content: var(--tw-content); --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) s`
- `.group:hover .group-hover\:translate-y-\[-1px\] { --tw-translate-y: -1px; }`
- `.group:hover .group-hover\:translate-y-\[-1px\], .group:hover .group-hover\:translate-y-\[1px\] { transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(v`
- `.group:hover .group-hover\:translate-y-\[1px\] { --tw-translate-y: 1px; }`
- `.group:hover .group-hover\:scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(v`
- `.group:hover .group-hover\:\!opacity-100 { opacity: 1 !important; }`
- `.group:hover .md\:group-hover\:opacity-100 { opacity: 1; }`
- `.\[\&_a\:hover\]\:\!opacity-50 a:hover { opacity: 0.5 !important; }`
- `.\[\&_a\:hover\]\:opacity-50 a:hover { opacity: 0.5; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` ESR BESPOKE · `/services` SERVICES · `/partners` PARTNERS · `/about` ABOUT · `/contact` CONTACT · `/careers` CAREERS · `/privacy-policy` PRIVACY
