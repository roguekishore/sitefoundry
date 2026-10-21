# Design capture: https://esrbespoke.au/services

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Services | ESR (page 7033px tall, window 390×844)

**Fonts:** `__headingFont_a39ca7` ×115 · `__bodyFont_0f148b` ×92

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×115 · `38px` ×36 · `40px` ×35 · `15px` ×11 · `20px` ×10

**Weights:** `300` ×115 · `500` ×92

**Size / line height:** `14px / 14px` ×114 · `38px / 36.1px` ×36 · `40px / 40px` ×35 · `15px / 18px` ×11 · `20px / 24px` ×10 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×114 · `-0.38px` ×36 · `-0.4px` ×35 · `normal` ×21 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×204 · `rgb(255, 255, 255)` ×3

**Backgrounds:** `rgb(255, 255, 255)` ×800 · `rgb(0, 0, 0)` ×795 · `rgb(13, 98, 200)` ×200 · `rgb(51, 86, 107)` ×200 · `rgb(72, 44, 34)` ×200 · `rgb(48, 72, 74)` ×186 · `rgb(4, 4, 12)` ×8 · `rgba(0, 0, 0, 0.1)` ×4 · `rgb(43, 43, 43)` ×2

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×8

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×31 · `opacity 0.1s cubic-bezier(0.19` ×12 · `transform 0.15s cubic-bezier(0.4` ×10 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `section` at 0px, 1093px tall — “Exceeding expectations” · original-services-390-section-01.png
3. `section` at 1125px, 298px tall — “What we offer” · original-services-390-section-02.png
4. `section` at 1503px, 568px tall · original-services-390-section-03.png
5. `section` at 2151px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) · original-services-390-section-04.png
6. `section` at 3051px, 612px tall · original-services-390-section-05.png
7. `section` at 3775px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “The details that drive us” · original-services-390-section-06.png
8. `div#services` at 4611px, 64px tall · original-services-390-section-07.png
9. `section` at 4675px, 122px tall — “Exceptional standard” · original-services-390-section-08.png
10. `section` at 4877px, 414px tall · original-services-390-section-09.png
11. `section` at 5371px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) · original-services-390-section-10.png
12. `footer` at 6215px, 818px tall · original-services-390-section-11.png

### Media slots

- section 2: canvas (WebGL/2D), 390×477 (aspect 0.82), fit auto
- section 2: image, 390×477 (aspect 0.82), fit cover
- section 5: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section 5: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 7: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section 7: image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 11: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**
- section 11: image, 390×844 (aspect 0.46), fit cover, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 21 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 6188–6188px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 16 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 6: reveal on entering view — opacity 1.00→0.10, at scroll 2953–2953px · e.g. span.transition-opacity.duration-100 “Porsche”
- section 6: reveal on entering view — opacity 0.10→0.10, at scroll 2953–3375px · e.g. span.transition-opacity.duration-100 “Aston Martin”
- section 6: reveal on entering view — opacity 0.10→1.00, at scroll 3375–3375px · e.g. span.transition-opacity.duration-100 “Maserati”
- section 6: reveal on entering view — opacity 1.00→0.00, at scroll 2953–2953px · e.g. div.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.00→0.00, at scroll 2953–3375px · e.g. div.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 3375–3375px · e.g. div.opacity-100.absolute
- section 11: reveal on entering view — opacity 0.00→1.00, at scroll 2109–2531px · e.g. img.opacity-0.absolute
- section 12: reveal on entering view — opacity 1.00→1.00, at scroll 5485–5907px · 3 elements · e.g. div “O”; div “K”; div “E”
- section 12: reveal on entering view — opacity 0.00→1.00, at scroll 5485–5485px · 267 elements · e.g. div “A”; div “U”; div “T”

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

## 1440px — Services | ESR (page 8821px tall, window 1440×900)

**Fonts:** `__headingFont_a39ca7` ×150 · `__bodyFont_0f148b` ×92

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×150 · `62px` ×59 · `20px` ×21 · `92px` ×12

**Weights:** `300` ×150 · `500` ×92

**Size / line height:** `14px / 14px` ×149 · `62px / 62px` ×35 · `62px / 58.9px` ×24 · `20px / 24px` ×21 · `92px / 87.4px` ×12 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×149 · `-0.62px` ×59 · `normal` ×21 · `-0.92px` ×12 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×240 · `rgb(255, 255, 255)` ×2

**Backgrounds:** `rgb(0, 0, 0)` ×847 · `rgb(255, 255, 255)` ×800 · `rgb(48, 72, 74)` ×200 · `rgb(13, 98, 200)` ×200 · `rgb(51, 86, 107)` ×200 · `rgb(72, 44, 34)` ×200 · `rgb(4, 4, 12)` ×47 · `rgba(0, 0, 0, 0.1)` ×10

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×8

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×31 · `opacity 0.5s cubic-bezier(0.19` ×13 · `opacity 0.1s cubic-bezier(0.19` ×12 · `transform 0.15s cubic-bezier(0.4` ×10 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-services-1440-section-01.png
2. `section` at 0px, 1516px tall — “Exceeding expectations” · original-services-1440-section-02.png
3. `section` at 1548px, 200px tall — “What we offer” · original-services-1440-section-03.png
4. `section` at 1876px, 394px tall · original-services-1440-section-04.png
5. `section` at 2398px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-services-1440-section-05.png
6. `section` at 3354px, 1717px tall · original-services-1440-section-06.png
7. `section` at 5071px, 1260px tall — **sized by the window: 140% of the window height** (945px in a 675px window) — “The details that drive us” · original-services-1440-section-07.png
8. `div#services` at 6323px, 64px tall · original-services-1440-section-08.png
9. `section` at 6387px, 114px tall — “Exceptional standard” · original-services-1440-section-09.png
10. `section` at 6629px, 264px tall · original-services-1440-section-10.png
11. `section` at 7021px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-services-1440-section-11.png
12. `footer` at 7921px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-services-1440-section-12.png

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
- section 5: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 5: image, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto
- section 6: image, 216×216 (aspect 1.00), fit cover
- section 6: canvas (WebGL/2D), 216×216 (aspect 1.00), fit auto

### Motion

**Libraries and media seen:** GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · 21 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 7920–7920px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 19 half-screens · 3 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · 53 elements · e.g. div “I”; div “N”; div “G”
- section 2: scrubbed with the scroll — translateY -185→2192px, at scroll 448–7921px · e.g. div.!absolute.inset-0
- section 5: scrubbed with the scroll — translateY -719→1657px, at scroll 448–7920px · e.g. div.!absolute.inset-0
- section 6: reveal on entering view — translateY 0→956px, at scroll 4498–4498px · e.g. div.w-auto.grid-layout “MARQUES WE ARE TRUSTED TO DELIVER FACTOR”
- section 6: reveal on entering view — opacity 1.00→0.10, at scroll 3598–3598px · e.g. span.transition-opacity.duration-100 “Porsche”
- section 6: reveal on entering view — opacity 0.10→0.10, at scroll 3598–4049px · 2 elements · e.g. span.transition-opacity.duration-100 “Aston Martin”; span.transition-opacity.duration-100 “BMW M”
- section 6: reveal on entering view — opacity 0.10→1.00, at scroll 4498–4498px · e.g. span.transition-opacity.duration-100 “Maserati”
- section 6: reveal on entering view — opacity 1.00→0.00, at scroll 3598–3598px · e.g. div.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.00→0.00, at scroll 3598–4049px · 2 elements · e.g. div.opacity-0.absolute; div.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 4498–4498px · e.g. div.opacity-100.absolute
- section 7: scrubbed with the scroll — translateY -1521→855px, at scroll 448–7920px · e.g. div.!absolute.inset-0
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 1798–2249px · e.g. img.opacity-0.absolute
- section 11: scrubbed with the scroll — translateY -2106→270px, at scroll 448–7920px · e.g. div.!absolute.inset-0
- section 11: reveal on entering view — opacity 0.00→1.00, at scroll 2249–2249px · e.g. img.opacity-0.absolute
- section 12: fixed, at scroll pinned for 19 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 12: reveal on entering view — opacity 1.00→1.00, at scroll 7648–7920px · e.g. div “E”
- section 12: reveal on entering view — opacity 0.00→1.00, at scroll 7648–7648px · 267 elements · e.g. div “A”; div “U”; div “T”

**On hover:**

- a “Ferrari”: opacity: 0.1 → 1 · transition `opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)`

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
