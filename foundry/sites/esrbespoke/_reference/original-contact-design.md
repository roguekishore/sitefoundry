# Design capture: https://esrbespoke.au/contact

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Contact | ESR (page 5026px tall, window 390×844)

**Fonts:** `__headingFont_a39ca7` ×115 · `__bodyFont_0f148b` ×65

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×115 · `40px` ×35 · `15px` ×16 · `38px` ×12 · `18px` ×2

**Weights:** `300` ×109 · `500` ×71

**Size / line height:** `14px / 14px` ×114 · `40px / 40px` ×35 · `15px / 18px` ×16 · `38px / 36.1px` ×12 · `18px / 23.4px` ×2 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×114 · `-0.4px` ×35 · `-0.15px` ×13 · `-0.38px` ×12 · `normal` ×5 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×155 · `rgb(255, 255, 255)` ×25

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×388 · `rgb(130, 126, 122)` ×186 · `rgb(170, 202, 210)` ×94 · `rgb(48, 72, 74)` ×94 · `rgb(72, 44, 34)` ×94 · `rgb(75, 68, 62)` ×94 · `rgb(114, 121, 127)` ×94 · `rgb(56, 61, 66)` ×94 · `rgb(83, 64, 58)` ×94 · `rgb(43, 43, 43)` ×2 · `rgba(0, 0, 0, 0.1)` ×1

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×6

**Radii:** `2px` ×2

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×22 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 14px tall, position absolute
2. `section` at 0px, 1093px tall — “Get in touch” · original-contact-390-section-01.png
3. `section` at 1125px, 494px tall — “Enquiries” · original-contact-390-section-02.png
4. `section` at 1699px, 218px tall — “Visit us” · original-contact-390-section-03.png
5. `section` at 1997px, 1025px tall · original-contact-390-section-04.png
6. `section` at 3102px, 1026px tall · original-contact-390-section-05.png
7. `footer` at 4208px, 818px tall · original-contact-390-section-06.png

### Media slots

- section 2: canvas (WebGL/2D), 390×477 (aspect 0.82), fit auto
- section 2: image, 390×477 (aspect 0.82), fit cover
- section 5: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 5: image, 354×266 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 5: image, 354×266 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 5: image, 354×266 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 6: image, 354×266 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 6: image, 354×266 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 6: image, 354×266 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 354×266 (aspect 1.33), fit auto
- section 6: image, 354×266 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 13 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 4181–4182px · e.g. div.fixed.right-[calc(2rem+1.15rem)] “CONTACT”
- section -: fixed, at scroll pinned for 11 half-screens · 5 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 7: reveal on entering view — opacity 1.00→1.00, at scroll 3374–3797px · 21 elements · e.g. div “S”; div “R”; div “B”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 3797–3797px · 267 elements · e.g. div “A”; div “U”; div “T”

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

## 1440px — Contact | ESR (page 5492px tall, window 1440×900)

**Fonts:** `__headingFont_a39ca7` ×150 · `__bodyFont_0f148b` ×65

**Loaded faces:** __bodyFont_0f148b 400 normal · __bodyFont_0f148b 400 italic · __bodyFont_0f148b 500 normal · __bodyFont_0f148b 500 italic · __bodyFont_Fallback_0f148b normal normal · __headingFont_a39ca7 normal normal · __headingFont_Fallback_a39ca7 normal normal

**Font sizes:** `14px` ×150 · `62px` ×47 · `20px` ×16 · `18px` ×2

**Weights:** `300` ×144 · `500` ×71

**Size / line height:** `14px / 14px` ×149 · `62px / 62px` ×35 · `20px / 24px` ×16 · `62px / 58.9px` ×12 · `18px / 23.4px` ×2 · `14px / 20px` ×1

**Letter spacing:** `1.26px` ×149 · `-0.62px` ×47 · `-0.2px` ×13 · `normal` ×5 · `0.7px` ×1

**Text colours:** `rgb(0, 0, 0)` ×186 · `rgb(255, 255, 255)` ×29

**Backgrounds:** `rgb(255, 255, 255)` ×600 · `rgb(0, 0, 0)` ×402 · `rgb(130, 126, 122)` ×200 · `rgb(170, 202, 210)` ×200 · `rgb(48, 72, 74)` ×200 · `rgb(72, 44, 34)` ×200 · `rgb(75, 68, 62)` ×200 · `rgb(114, 121, 127)` ×200 · `rgb(56, 61, 66)` ×200 · `rgb(83, 64, 58)` ×200 · `rgba(0, 0, 0, 0.1)` ×4

**Borders:** `1px solid rgba(0, 0, 0, 0.1)` ×5

**Radii:** `2px` ×1

**Transitions:** `opacity 0.3s cubic-bezier(0.19` ×22 · `opacity 0.5s cubic-bezier(0.19` ×13 · `margin, transform, opacity 0.5s cubic-bezier(0.19` ×2 · `color, background-color, border-color, text-decoration-color 0.3s cubic-bezier(0.19` ×1

**:root variables (4):** `--foreground-rgb: 0,0,0` · `--background-rgb: 255,255,255` · `--border-rgb: 0,0,0` · `--scrollbarWidth: 0px`

### Sections

1. `header#header` at 28px, 85px tall, position absolute · original-contact-1440-section-01.png
2. `section` at 0px, 1516px tall — “Get in touch” · original-contact-1440-section-02.png
3. `section` at 1548px, 211px tall — “Enquiries” · original-contact-1440-section-03.png
4. `section` at 1887px, 142px tall — “Visit us” · original-contact-1440-section-04.png
5. `section` at 2157px, 1099px tall · original-contact-1440-section-05.png
6. `section` at 3384px, 1080px tall · original-contact-1440-section-06.png
7. `footer` at 4592px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) · original-contact-1440-section-07.png

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
- section 5: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 5: image, 680×510 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 5: image, 680×510 (aspect 1.33), fit cover
- section 5: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 5: image, 680×510 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 6: image, 680×510 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 6: image, 680×510 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 6: image, 680×510 (aspect 1.33), fit cover
- section 6: canvas (WebGL/2D), 680×510 (aspect 1.33), fit auto
- section 6: image, 680×510 (aspect 1.33), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll · 13 canvas element(s) (WebGL/2D art) · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — translateY 0→-120px, at scroll 4498–4592px · e.g. div.fixed.right-[calc(2rem+1.15rem)]
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · e.g. div.w-auto.h-6
- section -: fixed, at scroll pinned for 11 half-screens · 5 elements · e.g. section.w-auto.grid-layout “Services Partners About Contact Careers ”; div.fixed.inset-0; div.w-auto.grid-layout
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 448–448px · 56 elements · e.g. div “U”; div “E”; div “S”
- section 2: reveal on entering view — translateY 17→0px, at scroll 448–898px · e.g. div.w-auto.aspect-[393/481]
- section 2: scrubbed with the scroll — translateY -185→1193px, at scroll 448–4592px · e.g. div.!absolute.inset-0
- section 5: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.grid.grid-cols-6 “ESR Bespoke Studio 16–20 BIRMINGHAM STRE”
- section 6: reveal on entering view — opacity 0.26→1.00, at scroll 448–448px · e.g. img.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.08→1.00, at scroll 448–448px · 2 elements · e.g. img.opacity-0.absolute; img.opacity-0.absolute
- section 6: reveal on entering view — opacity 0.03→1.00, at scroll 448–448px · e.g. img.opacity-0.absolute
- section 7: fixed, at scroll pinned for 11 half-screens · e.g. div.w-auto.px-[1.125rem] “ESR BESPOKE AUTOMOTIVE GROUP. SYDNEY, AU”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 4498–4498px · 267 elements · e.g. div “A”; div “U”; div “T”

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
