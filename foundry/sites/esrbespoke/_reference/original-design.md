# Design capture: https://esrbespoke.au/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — ESR (page 4578px tall, window 390×844)

**Fonts:** `__headingFont_a39ca7` ×119 · `__bodyFont_0f148b` ×79

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×119 · `38px` ×36 · `40px` ×35 · `15px` ×6 · `20px` ×2

**Weights:** `300` ×119 · `500` ×79

**Size / line height:** `14px / 14px` ×117 · `38px / 36.1px` ×36 · `40px / 40px` ×35 · `15px / 18px` ×6 · `14px / 20px` ×2 · `20px / 20px` ×2

**Letter spacing:** `1.26px` ×117 · `-0.38px` ×36 · `-0.4px` ×35 · `normal` ×6 · `-0.2px` ×2 · `1.4px` ×1

**Text colours:** `rgb(255, 255, 255)` ×113 · `rgb(0, 0, 0)` ×85

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×599 · `rgb(25, 25, 25)` ×200 · `rgb(4, 4, 12)` ×8 · `rgb(43, 43, 43)` ×2

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×1

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×21 · `opacity 0.1s cubic-bezier(0.19` ×12 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1 · `opacity 0.3s cubic-bezier(0.16` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `section` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Exceptional is our standard” · original-390-section-01.png
3. `section` at 900px, 476px tall — “ESR is recognised as an official Porsche Certified Collision Centre, one of only” · original-390-section-02.png
4. `section` at 1408px, 488px tall · original-390-section-03.png
5. `section` at 1928px, 612px tall · original-390-section-04.png
6. `section` at 2651px, 1109px tall — “At ESR, we offer a complete end-to-end service experience for owners of luxury a” · original-390-section-05.png
7. `footer` at 3760px, 818px tall · original-390-section-06.png

### Media slots

- section 2: video autoplay loop, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 4: canvas (WebGL/2D), 390×488 (aspect 0.80), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll · 18 canvas element(s) (WebGL/2D art) · 3 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 3733–3733px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 10 half-screens · 4 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 5: reveal on entering view — opacity 1.00→0.10, at scroll 2109–2109px · e.g. a.transition-opacity.duration-100 “Porsche”
- section 5: reveal on entering view — opacity 0.10→1.00, at scroll 2109–2109px · e.g. span.transition-opacity.duration-100 “Maserati”
- section 5: reveal on entering view — opacity 1.00→0.00, at scroll 2109–2109px · e.g. div.opacity-0.absolute
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2109–2109px · e.g. div.opacity-100.absolute
- section 7: reveal on entering view — opacity 1.00→1.00, at scroll 2953–3375px · 10 elements · e.g. div “E”; div “S”; div “P”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 3375–3375px · 267 elements · e.g. div “A”; div “U”; div “T”

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

## 1440px — ESR (page 6870px tall, window 1440×900)

**Fonts:** `__headingFont_a39ca7` ×154 · `__bodyFont_0f148b` ×79

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×154 · `62px` ×59 · `92px` ×12 · `20px` ×6 · `40px` ×2

**Weights:** `300` ×154 · `500` ×79

**Size / line height:** `14px / 14px` ×152 · `62px / 62px` ×35 · `62px / 58.9px` ×24 · `92px / 87.4px` ×12 · `20px / 24px` ×6 · `14px / 20px` ×2 · `40px / 40px` ×2

**Letter spacing:** `1.26px` ×152 · `-0.62px` ×59 · `-0.92px` ×12 · `normal` ×6 · `-0.4px` ×2 · `1.4px` ×1

**Text colours:** `rgb(255, 255, 255)` ×143 · `rgb(0, 0, 0)` ×90

**Backgrounds:** `rgb(0, 0, 0)` ×648 · `rgb(255, 255, 255)` ×600 · `rgb(25, 25, 25)` ×200 · `rgb(4, 4, 12)` ×47

**Borders:** `1px solid rgba(255, 255, 255, 0.1)` ×1

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×21 · `opacity 0.5s cubic-bezier(0.19` ×13 · `opacity 0.1s cubic-bezier(0.19` ×12 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1 · `opacity 0.3s cubic-bezier(0.16` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Exceptional is our standard” · original-1440-section-02.png
3. `section` at 956px, 648px tall — “ESR is recognised as an official Porsche Certified Collision Centre, one of only” · original-1440-section-03.png
4. `section` at 1636px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-1440-section-04.png
5. `section` at 2568px, 1721px tall · original-1440-section-05.png
6. `section` at 4289px, 1681px tall — “At ESR, we offer a complete end-to-end service experience for owners of luxury a” · original-1440-section-06.png
7. `footer` at 5970px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-1440-section-07.png

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
- section 2: video autoplay loop, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 4: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 5: image, 216×216 (aspect 1.00), fit cover
- section 5: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto

### Motion

**Libraries and media seen:** GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · 18 canvas element(s) (WebGL/2D art) · 3 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 5849–5970px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 14 half-screens · 4 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section -: reveal on entering view — clip-path changes, at scroll 1348–2248px · e.g. div.ml-4.mt-4 “NEXT”
- section 2: scrubbed with the scroll — translateY 0→1791px, at scroll 448–5970px · e.g. div.!absolute.inset-0
- section 5: reveal on entering view — translateY 0→960px, at scroll 3598–3598px · e.g. div.w-auto.grid-layout “MARQUES ESR SPECIALISE EXCLUSIVELY WITH ”
- section 5: reveal on entering view — opacity 1.00→0.10, at scroll 2698–2698px · e.g. a.transition-opacity.duration-100 “Porsche”
- section 5: reveal on entering view — opacity 0.10→0.10, at scroll 2698–3148px · 2 elements · e.g. a.transition-opacity.duration-100 “Rolls-Royce”; a.transition-opacity.duration-100 “Mercedes-AMG”
- section 5: reveal on entering view — opacity 0.10→1.00, at scroll 3598–3598px · e.g. span.transition-opacity.duration-100 “Maserati”
- section 5: reveal on entering view — opacity 1.00→0.00, at scroll 2698–2698px · e.g. div.opacity-0.absolute
- section 5: reveal on entering view — opacity 0.00→0.00, at scroll 2698–3148px · 2 elements · e.g. div.opacity-0.absolute; div.opacity-0.absolute
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 3598–3598px · e.g. div.opacity-100.absolute
- section 7: fixed, at scroll pinned for 14 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 5849–5849px · 267 elements · e.g. div “A”; div “U”; div “T”

**On hover:**

- button “UNMUTE”: opacity: 1 → 0.7 · transition `opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- a “Porsche”: opacity: 0.1 → 1 · transition `opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)`
- a “Rolls-Royce”: opacity: 0.1 → 1 · transition `opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)`
- a “Aston Martin”: opacity: 0.1 → 1 · transition `opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)`
- a “McLaren”: opacity: 0.1 → 1 · transition `opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)`

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
