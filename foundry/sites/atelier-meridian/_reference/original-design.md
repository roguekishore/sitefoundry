# Design capture: https://atelier-meridian-site.webflow.io/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Atelier (page 5806px tall, window 390×844)

**Fonts:** `PP Neue Montreal Regular` ×19 · `PP Neue Montreal Medium` ×7 · `PP Neue Montreal Book` ×2

**Loaded faces:** webflow-icons normal normal · PP Neue Montreal Regular 400 normal · PP Neue Montreal Medium 500 normal · PP Neue Montreal Book 400 normal · swiper-icons 400 normal

**Font sizes:** `16.64px` ×12 · `33.28px` ×8 · `37.44px` ×4 · `18.72px` ×2 · `13.52px` ×2

**Weights:** `400` ×24 · `500` ×4

**Size / line height:** `33.28px / 33.28px` ×8 · `16.64px / 20.8px` ×7 · `37.44px / 37.44px` ×4 · `16.64px / 18.72px` ×3 · `18.72px / 18.72px` ×2 · `16.64px / 16.1408px` ×2 · `13.52px / 18.252px` ×2

**Letter spacing:** `normal` ×14 · `-0.52px` ×10 · `-1.04px` ×2 · `0.52px` ×2

**Text colours:** `rgb(0, 0, 0)` ×21 · `rgb(157, 157, 157)` ×7

**Backgrounds:** `rgb(245, 245, 245)` ×291 · `rgba(255, 255, 255, 0)` ×7 · `rgb(255, 255, 255)` ×3 · `rgb(243, 243, 243)` ×3 · `rgb(0, 0, 0)` ×2

**Borders:** `1px solid rgb(0, 0, 0)` ×2

**Radii:** `4.16px` ×1

**Transitions:** `all 0.2s ease` ×9 · `opacity 0.3s ease` ×2 · `all 0.6s ease` ×2 · `opacity, max-height 0.3s ease` ×1

**:root variables (26):** `--text-primary: #000` · `--text-hover: #3e3e3e` · `--icon-disabled: #dcdcdc` · `--icon-primary: #000` · `--border-primary: #000` · `--white: white` · `--gray-95: #f3f3f3` · `--surf-inverse-primary: #000` · `--text-on-action: white` · `--surf-inverse-tertiary: #3e3e3e` · `--text-secondary: #9d9d9d` · `--surf-cont-primary: #f3f3f3` · `--border-disabled: #dcdcdc` · `--black: black` · `--gray-10: #212121` · `--gray-25: #3e3e3e` · `--gray-60: #9d9d9d` · `--gray-85: gainsboro` · `--gray-90: #e7e7e7` · `--text-disabled: #dcdcdc` · `--text-error: red` · `--border-secondary: #f3f3f3` · `--border-error: red` · `--surface: white` · `--surf-cont-secondary: #e7e7e7` · `--surf-inverse-secondary: #212121`

### Sections

1. `div` at 0px, 50px tall, position sticky · original-390-section-01.png
2. `section` at 50px, 831px tall — “Christian Valmont” · original-390-section-02.png
3. `section` at 881px, 596px tall — “Atelier Meridien” · original-390-section-03.png
4. `section` at 1477px, 969px tall · original-390-section-04.png
5. `section` at 2445px, 674px tall — “Our galleries” · original-390-section-05.png
6. `section` at 3119px, 782px tall — “Never miss an opening” · original-390-section-06.png
7. `section` at 3901px, 737px tall — “Gallery Programs” · original-390-section-07.png
8. `div` at 4637px, 1169px tall · original-390-section-08.png

### Media slots

- section 2: image, 348×518 (aspect 0.67), fit cover
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 4: image, 348×196 (aspect 1.78), fit auto
- section 5: image, 348×302 (aspect 1.15), fit cover
- section 5: image, 348×302 (aspect 1.15), fit cover
- section 6: video autoplay loop, 390×233 (aspect 1.67), fit contain

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 1 video element(s)

**While scrolling** (sampled every half screen):

- section 1: scrubbed with the scroll — opacity 0.00→1.00, while pinned, at scroll 1266–0px · e.g. div.header.div-block
- section 1: fixed, at scroll pinned for 18 half-screens · e.g. div.mobile-menu
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 58→0px, at scroll 1266–1266px · e.g. h1.h1.intro-h1 “Christian Valmont”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 46→0px, at scroll 1266–1688px · e.g. h2.h2.color-secondary “The Weight of Light”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 60→0px, at scroll 1688–0px · e.g. h4.h4.intro__info--loc “Location: Atelier Meridien 350 Bermondse”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 61→0px, at scroll 1688–0px · e.g. h4.h4.intro__info--date “Dates: 11 August – 29 August 2026”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 1688–0px · e.g. a.button.w-inline-block “VISIT EXHIBITION”
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 255→0px, at scroll 422–0px · e.g. div.intro-imgs__title “Atelier Meridien”
- section 2: scrubbed with the scroll — translateY 556→0px, translateX 189→0px, at scroll 422–0px · e.g. div.intro-imgs__item.intro-main-img
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 478→0px, translateX 255→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 357→0px, translateX 277→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 240→0px, translateX 246→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 172→0px, translateX 176→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 178→0px, translateX 91→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 257→0px, translateX 26→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 378→0px, translateX 4→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 495→0px, translateX 34→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 563→0px, translateX 105→0px, at scroll 422–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY -213→0px, at scroll 422–0px · e.g. div.body-small.intro-imgs__txt “more than an exhibition space”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 422–823px · e.g. div.tag
- section 3: scrubbed with the scroll — translateY 85→0px, at scroll 422–1248px · e.g. h2.h1 “Atelier Meridien”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 28→0px, at scroll 422–823px · 2 elements · e.g. div.column; div.column
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 30→0px, at scroll 844–1248px · e.g. div.marquee
- section 3: scrubbed with the scroll — translateX -137→-586px, at scroll 422–4962px · 3 elements · e.g. div.marquee__track; div.marquee__track; div.marquee__track
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 14→0px, at scroll 1266–1668px · e.g. div.tag
- section 4: scrubbed with the scroll — translateY 56→0px, at scroll 1266–1668px · 7 elements · e.g. div.exhibition__title “Refracted Realities”; div.exhibition__title “Spatial Geometries”; div.exhibition__title “Synthetic Landscapes”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 2088–2510px · e.g. div.tag
- section 5: reveal on entering view — translateY 85→0px, at scroll 2088–2510px · e.g. h2.h1 “Our galleries”
- section 5: scrubbed with the scroll — translateX -5→-365px, at scroll 422–4962px · e.g. div.events__list.swiper-wrapper
- section 5: scrubbed with the scroll — clip-path changes, at scroll 2088–2936px · 2 elements · e.g. img.events__img; img.events__img
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 20→0px, at scroll 2510–2936px · 6 elements · e.g. div.tag; h5.h5.events__title; p.body-medium.events__desc
- section 5: scrubbed with the scroll — scale 1.00→0.50, at scroll 1266–4947px · e.g. span
- section 6: scrubbed with the scroll — opacity 0.00→1.00, translateY 26→0px, at scroll 2510–3355px · 2 elements · e.g. img.image; a.button.w-inline-block
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 2936–3355px · 2 elements · e.g. h2.h1.subscribe__title; p.body-large
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 3779–4200px · e.g. div.tag
- section 7: scrubbed with the scroll — translateY 85→0px, at scroll 3355–4200px · e.g. h2.h1 “Gallery Programs”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 34→0px, at scroll 3779–4200px · 3 elements · e.g. div.programs__item.swiper-slide; div.programs__item.swiper-slide; div.programs__item.swiper-slide
- section 8: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 4200–4625px · 2 elements · e.g. div.column; div.column
- section 8: scrubbed with the scroll — translateY 42→0px, at scroll 4947–4962px · e.g. div.w-embed

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `scroll` on div.marquee__track: 20000ms, loops forever (transform)

**:hover rules in the CSS (first 20):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.nav-link:hover { color: rgba(26, 27, 31, 0.75); }`
- `.nav-dropdown-toggle:hover { color: rgba(26, 27, 31, 0.75); }`
- `.nav-link-accent:hover { color: rgba(26, 27, 31, 0.75); }`
- `.button-primary:hover { color: rgb(255, 255, 255); background-color: rgb(50, 52, 58); }`
- `.header-nav__link:hover { color: var(--text-hover); }`
- `.button:hover { background-color: var(--surf-inverse-tertiary); }`
- `.button:hover:where(.w-variant-e0db36d9-5a2b-8738-c2c6-24154a5ec101) { border-bottom-color: var(--text-hover); color: var(--text-hover); -webkit-text-stroke-color: var(--text-hover); background-color: rgba(255, 255, 255,`
- `.btn-link:hover { color: var(--text-hover); text-decoration: none; }`
- `.button-large.footer-menu__link:hover { color: var(--text-hover); }`
- `.button-large.footer__email:hover { color: var(--text-hover); }`
- `.button-large.footer__legal--link:hover { color: var(--text-hover); }`
- `.h4.locations__link:hover { color: var(--text-hover); }`
- `.h4.contact__email:hover { color: var(--text-hover); }`
- `.btn-link-2:hover { color: rgb(62, 62, 62); text-decoration: none; }`
- `.intro__nav--link:hover { color: var(--text-hover); }`
- `.button-2:hover { background-color: rgb(62, 62, 62); }`
- `.button-large-2.footer__legal--link:hover { color: rgb(62, 62, 62); }`

## 1440px — Atelier (page 5857px tall, window 1440×900)

**Fonts:** `PP Neue Montreal Medium` ×14 · `PP Neue Montreal Regular` ×13 · `PP Neue Montreal Book` ×2

**Loaded faces:** webflow-icons normal normal · PP Neue Montreal Regular 400 normal · PP Neue Montreal Medium 500 normal · PP Neue Montreal Book 400 normal · swiper-icons 400 normal

**Font sizes:** `16px` ×11 · `60px` ×8 · `84px` ×4 · `13px` ×3 · `22px` ×2 · `15px` ×1

**Weights:** `400` ×18 · `500` ×11

**Size / line height:** `16px / 18px` ×8 · `60px / 54px` ×8 · `84px / 84px` ×4 · `16px / 15.52px` ×3 · `13px / 17.55px` ×3 · `22px / 29.7px` ×2 · `15px / 18px` ×1

**Letter spacing:** `normal` ×17 · `-1.5px` ×12

**Text colours:** `rgb(0, 0, 0)` ×20 · `rgb(157, 157, 157)` ×8 · `rgb(255, 255, 255)` ×1

**Backgrounds:** `rgb(245, 245, 245)` ×200 · `rgba(0, 0, 0, 0.05)` ×21 · `rgb(0, 0, 0)` ×6 · `rgb(255, 255, 255)` ×6 · `rgb(243, 243, 243)` ×6 · `rgba(255, 255, 255, 0)` ×5 · `rgb(220, 220, 220)` ×0

**Borders:** `1px solid rgb(0, 0, 0)` ×3 · `1px solid rgb(220, 220, 220)` ×1

**Radii:** `4px` ×4 · `7px` ×1 · `50%` ×1

**Transitions:** `all 0.2s ease` ×10 · `opacity 0.3s ease` ×1 · `all 0.6s ease` ×1

**:root variables (26):** `--text-primary: #000` · `--text-hover: #3e3e3e` · `--icon-disabled: #dcdcdc` · `--icon-primary: #000` · `--border-primary: #000` · `--white: white` · `--gray-95: #f3f3f3` · `--surf-inverse-primary: #000` · `--text-on-action: white` · `--surf-inverse-tertiary: #3e3e3e` · `--text-secondary: #9d9d9d` · `--surf-cont-primary: #f3f3f3` · `--border-disabled: #dcdcdc` · `--black: black` · `--gray-10: #212121` · `--gray-25: #3e3e3e` · `--gray-60: #9d9d9d` · `--gray-85: gainsboro` · `--gray-90: #e7e7e7` · `--text-disabled: #dcdcdc` · `--text-error: red` · `--border-secondary: #f3f3f3` · `--border-error: red` · `--surface: white` · `--surf-cont-secondary: #e7e7e7` · `--surf-inverse-secondary: #212121`

### Sections

1. `div` at 0px, 76px tall, position sticky — **sized by the window: 8% of the window height** (67px in a 675px window) · original-1440-section-01.png
2. `section` at 76px, 1089px tall — “Christian Valmont” · original-1440-section-02.png
3. `section` at 1165px, 867px tall — “Atelier Meridien” · original-1440-section-03.png
4. `section` at 2032px, 871px tall · original-1440-section-04.png
5. `section` at 2903px, 910px tall — “Our galleries” · original-1440-section-05.png
6. `section` at 3812px, 810px tall — “Never miss an opening” · original-1440-section-06.png
7. `section` at 4623px, 669px tall — “Gallery Programs” · original-1440-section-07.png
8. `div` at 5292px, 565px tall · original-1440-section-08.png

### Media slots

- section 2: image, 1385×791 (aspect 1.75), fit auto
- section 5: image, 683×467 (aspect 1.46), fit auto
- section 5: image, 683×467 (aspect 1.46), fit auto
- section 6: video autoplay loop, 1425×810 (aspect 1.76), fit cover

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 1 video element(s)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — opacity 0.00→1.00, translateY 20→0px, while pinned, at scroll 0–271px · e.g. div.cookie.home “By clicking “Accept”, you agree to the s”
- section 1: scrubbed with the scroll — opacity 0.00→1.00, while pinned, at scroll 1350–0px · e.g. div.header.div-block “Tuesday: Closed About Us Contacts”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 104→0px, at scroll 1350–1800px · e.g. h1.h1.intro-h1 “Christian Valmont”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 66→0px, at scroll 1800–0px · e.g. h2.h2.color-secondary “The Weight of Light”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 32→0px, at scroll 1800–0px · 2 elements · e.g. h4.h4.intro__info--loc “Location: Atelier Meridien 350 Bermondse”; h4.h4.intro__info--date “Dates: 11 August – 29 August 2026”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 1800–0px · e.g. a.button.w-inline-block “VISIT EXHIBITION”
- section 2: reveal on entering view — opacity 1.00→0.00, translateY 69→0px, at scroll 900–0px · e.g. div.intro-imgs__title “Atelier Meridien”
- section 2: scrubbed with the scroll — translateY 539→0px, translateX 855→0px, at scroll 450–0px · e.g. div.intro-imgs__item.intro-main-img
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 401→0px, translateX 944→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 247→0px, translateX 913→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 137→0px, translateX 775→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 112→0px, translateX 582→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 183→0px, translateX 407→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 321→0px, translateX 318→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 475→0px, translateX 349→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 585→0px, translateX 487→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: scrubbed with the scroll — opacity 1.00→0.00, translateY 610→0px, translateX 680→0px, at scroll 450–0px · e.g. div.intro-imgs__item
- section 2: reveal on entering view — opacity 1.00→0.00, translateY -45→0px, at scroll 900–0px · e.g. div.body-small.intro-imgs__txt “more than an exhibition space”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 14→0px, at scroll 900–1493px · e.g. div.tag
- section 3: scrubbed with the scroll — translateY 94→0px, at scroll 900–1493px · e.g. h2.h1 “Atelier Meridien”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 28→0px, at scroll 900–1493px · e.g. div.column
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 28→0px, at scroll 900–1493px · e.g. div.column
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 30→0px, at scroll 900–1493px · e.g. div.marquee
- section 3: scrubbed with the scroll — translateX -255→-1058px, at scroll 450–4957px · 3 elements · e.g. div.marquee__track; div.marquee__track; div.marquee__track
- section 3: reveal on entering view — scale 1.00→1.00, at scroll 900–0px · e.g. div.reveal-line
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 1800–1943px · e.g. div.tag
- section 4: scrubbed with the scroll — translateY 72→0px, at scroll 1800–2394px · 6 elements · e.g. div.exhibition__title “Refracted Realities”; div.exhibition__title “Spatial Geometries”; div.exhibition__title “Synthetic Landscapes”
- section 4: reveal on entering view — opacity 0.00→0.00, scale 0.94→0.94, at scroll 1800–271px · e.g. img.exhibition__img
- section 4: reveal on entering view — opacity 0.00→0.00, at scroll 1800–271px · 3 elements · e.g. div.exhibition__desc; img.exhibition__img; div.exhibition__desc
- section 4: reveal on entering view — translateY 72→0px, at scroll 2394–2842px · e.g. div.exhibition__title “Silent Matter”
- section 4: reveal on entering view — scale 0.94→1.00, at scroll 450–450px · e.g. div.reveal-line
- section 4: reveal on entering view — scale 0.89→1.00, at scroll 450–450px · e.g. div.reveal-line
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 2842–2842px · e.g. div.tag
- section 5: scrubbed with the scroll — translateY 94→0px, at scroll 2394–3292px · e.g. h2.h1 “Our galleries”
- section 5: reveal on entering view — clip-path changes, at scroll 2842–3292px · e.g. img.events__img
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 20→0px, at scroll 2842–3292px · 5 elements · e.g. div.tag; h5.h5.events__title; p.body-medium.events__desc
- section 5: scrubbed with the scroll — clip-path changes, at scroll 2842–3745px · e.g. img.events__img
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY 20→0px, at scroll 2842–3745px · e.g. div.tag
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 3292–3745px · 4 elements · e.g. img.image; h2.h1.subscribe__title; p.body-large
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 4190–4643px · e.g. div.tag
- section 7: reveal on entering view — translateY 94→0px, at scroll 4190–4643px · e.g. h2.h1 “Gallery Programs”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 34→0px, at scroll 4190–4643px · 3 elements · e.g. div.programs__item.swiper-slide; div.programs__item.swiper-slide; div.programs__item.swiper-slide
- section 8: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 4643–4941px · e.g. div.column
- section 8: scrubbed with the scroll — opacity 0.00→1.00, translateY 30→0px, at scroll 4643–4957px · e.g. div.column
- section 8: scrubbed with the scroll — translateY 139→0px, at scroll 4941–4957px · e.g. div.w-embed

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `scroll` on div.marquee__track: 20000ms, loops forever (transform)
- CSSAnimation `cookieFadeIn` on div.cookie.home “By clicking “Accept”, you agree to the s”: 600ms (transform, opacity)

**On hover:**

- a “About Us”: color: rgb(0, 0, 0) → rgb(62, 62, 62); border: rgb(0, 0, 0) → rgb(62, 62, 62) · transition `all`
- a “VISIT EXHIBITION”: color: rgb(0, 0, 0) → rgb(62, 62, 62); border: rgb(0, 0, 0) → rgb(62, 62, 62); inner color: rgb(0, 0, 0) → rgb(62, 62, 62); inner border: rgb(0, 0, 0) → rgb(62, 62, 62) · transition `0.2s`
- a “Allow”: background: rgb(0, 0, 0) → rgb(62, 62, 62) · transition `0.2s`
- a “DENY”: color: rgb(0, 0, 0) → rgb(62, 62, 62); border: rgb(0, 0, 0) → rgb(62, 62, 62); decoration: underline → none · transition `all`
- a “Privacy Policy”: color: rgb(0, 0, 0) → rgb(62, 62, 62); border: rgb(0, 0, 0) → rgb(62, 62, 62) · transition `all`
- a “Terms & Conditions”: color: rgb(0, 0, 0) → rgb(62, 62, 62); border: rgb(0, 0, 0) → rgb(62, 62, 62) · transition `all`

**:hover rules in the CSS (first 20):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.nav-link:hover { color: rgba(26, 27, 31, 0.75); }`
- `.nav-dropdown-toggle:hover { color: rgba(26, 27, 31, 0.75); }`
- `.nav-link-accent:hover { color: rgba(26, 27, 31, 0.75); }`
- `.button-primary:hover { color: rgb(255, 255, 255); background-color: rgb(50, 52, 58); }`
- `.header-nav__link:hover { color: var(--text-hover); }`
- `.button:hover { background-color: var(--surf-inverse-tertiary); }`
- `.button:hover:where(.w-variant-e0db36d9-5a2b-8738-c2c6-24154a5ec101) { border-bottom-color: var(--text-hover); color: var(--text-hover); -webkit-text-stroke-color: var(--text-hover); background-color: rgba(255, 255, 255,`
- `.btn-link:hover { color: var(--text-hover); text-decoration: none; }`
- `.button-large.footer-menu__link:hover { color: var(--text-hover); }`
- `.button-large.footer__email:hover { color: var(--text-hover); }`
- `.button-large.footer__legal--link:hover { color: var(--text-hover); }`
- `.h4.locations__link:hover { color: var(--text-hover); }`
- `.h4.contact__email:hover { color: var(--text-hover); }`
- `.btn-link-2:hover { color: rgb(62, 62, 62); text-decoration: none; }`
- `.intro__nav--link:hover { color: var(--text-hover); }`
- `.button-2:hover { background-color: rgb(62, 62, 62); }`
- `.button-large-2.footer__legal--link:hover { color: rgb(62, 62, 62); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
