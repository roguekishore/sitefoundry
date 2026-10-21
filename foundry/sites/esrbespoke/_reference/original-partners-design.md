# Design capture: https://esrbespoke.au/partners

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Partners | ESR (page 4228px tall, window 390×844)

**Fonts:** `__headingFont_a39ca7` ×122 · `__bodyFont_0f148b` ×63

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×122 · `40px` ×35 · `38px` ×18 · `15px` ×8 · `18px` ×2

**Weights:** `300` ×116 · `500` ×69

**Size / line height:** `14px / 14px` ×121 · `40px / 40px` ×35 · `38px / 36.1px` ×18 · `15px / 18px` ×8 · `18px / 23.4px` ×2 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×121 · `-0.4px` ×35 · `-0.38px` ×18 · `-0.15px` ×6 · `normal` ×4 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×162 · `rgb(255, 255, 255)` ×23

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×386 · `rgb(55, 86, 98)` ×186 · `rgb(60, 60, 60)` ×94 · `rgb(190, 190, 190)` ×94 · `rgb(43, 43, 43)` ×2 · `rgba(0, 0, 0, 0.1)` ×1

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×6

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×21 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `section` at 0px, 1093px tall — “Luxury specialists” · original-partners-390-section-01.png
3. `section` at 1125px, 201px tall — “Global Partnerships” · original-partners-390-section-02.png
4. `section` at 1406px, 883px tall · original-partners-390-section-03.png
5. `section` at 2369px, 960px tall · original-partners-390-section-04.png
6. `footer` at 3409px, 818px tall · original-partners-390-section-05.png

### Media slots

- section 2: canvas (WebGL/2D), 390×477 (aspect 0.82), fit auto
- section 2: image, 390×477 (aspect 0.82), fit cover
- section 4: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 4: image, 354×266 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 5: image, 354×266 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 8 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 3374–3384px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 9 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 2953–2953px · 267 elements · e.g. div “A”; div “U”; div “T”
- section 6: reveal on entering view — opacity 1.00→1.00, at scroll 3374–3384px · e.g. a “419-431 CANTERBURY ROAD, CAMPSIE NSW 219”

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

## 1440px — Partners | ESR (page 5076px tall, window 1440×900)

**Fonts:** `__headingFont_a39ca7` ×157 · `__bodyFont_0f148b` ×63

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×157 · `62px` ×53 · `20px` ×8 · `18px` ×2

**Weights:** `300` ×151 · `500` ×69

**Size / line height:** `14px / 14px` ×156 · `62px / 62px` ×35 · `62px / 58.9px` ×18 · `20px / 24px` ×8 · `18px / 23.4px` ×2 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×156 · `-0.62px` ×53 · `-0.2px` ×6 · `normal` ×4 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×193 · `rgb(255, 255, 255)` ×27

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×400 · `rgb(55, 86, 98)` ×200 · `rgb(60, 60, 60)` ×200 · `rgb(190, 190, 190)` ×200 · `rgba(0, 0, 0, 0.1)` ×3

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×6

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×21 · `opacity 0.5s cubic-bezier(0.19` ×13 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-partners-1440-section-01.png
2. `section` at 0px, 1516px tall — “Luxury specialists” · original-partners-1440-section-02.png
3. `section` at 1548px, 114px tall — “Global Partnerships” · original-partners-1440-section-03.png
4. `section` at 1790px, 1041px tall · original-partners-1440-section-04.png
5. `section` at 2959px, 1089px tall · original-partners-1440-section-05.png
6. `footer` at 4176px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-partners-1440-section-06.png

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
- section 4: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 4: image, 680×510 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 5: image, 680×510 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 8 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 4048–4176px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 10 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · 71 elements · e.g. div “s”; div “E”; div “L”
- section 2: reveal on entering view — translateY 16→0px, at scroll 448–898px · e.g. div.w-auto.aspect-[393/481]
- section 2: scrubbed with the scroll — translateY -185→1068px, at scroll 448–4176px · e.g. div.!absolute.inset-0
- section 6: fixed, at scroll pinned for 10 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 4048–4048px · 267 elements · e.g. div “A”; div “U”; div “T”

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
