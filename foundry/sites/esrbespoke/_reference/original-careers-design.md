# Design capture: https://esrbespoke.au/careers

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Careers | ESR (page 2787px tall, window 390×844)

**Fonts:** `__bodyFont_0f148b` ×253 · `__headingFont_a39ca7` ×35

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `24px` ×210 · `14px` ×35 · `40px` ×35 · `15px` ×8

**Weights:** `500` ×253 · `300` ×35

**Size / line height:** `24px / 24px` ×210 · `40px / 40px` ×35 · `14px / 14px` ×34 · `15px / 18px` ×8 · `14px / 20px` ×1

**Letter spacing:** `-0.24px` ×210 · `-0.4px` ×35 · `1.26px` ×34 · `normal` ×8 · `0.7px` ×1

**Text colours:** `rgb(255, 255, 255)` ×220 · `rgb(0, 0, 0)` ×68

**Backgrounds:** `rgb(255, 255, 255)` ×400 · `rgb(25, 25, 25)` ×284 · `rgb(0, 0, 0)` ×200 · `rgb(189, 186, 185)` ×200 · `rgb(43, 43, 43)` ×2 · `rgba(255, 255, 255, 0.1)` ×0

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×3

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×29 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `div` at 0px, 1969px tall — “ESR Prestige seeks to employ skilled individuals to join our business and play a” · original-careers-390-section-01.png
3. `footer` at 1969px, 818px tall · original-careers-390-section-02.png

### Media slots

- section 2: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section 2: image, 390×844 (aspect 0.46), fit cover, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 6 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 1942–1942px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 6 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 421–421px · 11 elements · e.g. div “o”; div “u”; div “n”
- section 3: reveal on entering view — opacity 1.00→1.00, at scroll 1265–1686px · 2 elements · e.g. div “K”; div “E”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1265–1265px · 267 elements · e.g. div “A”; div “U”; div “T”

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

## 1440px — Careers | ESR (page 2915px tall, window 1440×900)

**Fonts:** `__bodyFont_0f148b` ×253 · `__headingFont_a39ca7` ×70

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `40px` ×210 · `14px` ×70 · `62px` ×35 · `20px` ×8

**Weights:** `500` ×253 · `300` ×70

**Size / line height:** `40px / 40px` ×210 · `14px / 14px` ×69 · `62px / 62px` ×35 · `20px / 24px` ×8 · `14px / 20px` ×1

**Letter spacing:** `-0.4px` ×210 · `1.26px` ×69 · `-0.62px` ×35 · `normal` ×8 · `0.7px` ×1

**Text colours:** `rgb(255, 255, 255)` ×250 · `rgb(0, 0, 0)` ×73

**Backgrounds:** `rgb(255, 255, 255)` ×400 · `rgb(25, 25, 25)` ×400 · `rgb(0, 0, 0)` ×200 · `rgb(189, 186, 185)` ×200 · `rgba(255, 255, 255, 0.1)` ×1

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×3

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×29 · `opacity 0.5s cubic-bezier(0.19` ×13 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-careers-1440-section-01.png
2. `div` at 0px, 2015px tall — “ESR Prestige seeks to employ skilled individuals to join our business and play a” · original-careers-1440-section-02.png
3. `footer` at 2015px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-careers-1440-section-03.png

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

### Motion

**Libraries and media seen:** Lenis smooth scroll · 6 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 1798–2014px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 449–449px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 6 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 449–449px · 166 elements · e.g. div “j”; div “o”; div “i”
- section 2: scrubbed with the scroll — translateY -334→270px, at scroll 449–2014px · e.g. div.!absolute.inset-0
- section 3: fixed, at scroll pinned for 6 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 3: reveal on entering view — opacity 1.00→1.00, at scroll 1798–2014px · e.g. div “E”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1798–1798px · 267 elements · e.g. div “A”; div “U”; div “T”

**On hover:**

- a “Production Manager ESR HQ”: inner opacity: 0.25 → 1 · transition `all`
- a “Paint Technician Apprenticeship 1st - 4t”: inner opacity: 0.25 → 1 · transition `all`

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
