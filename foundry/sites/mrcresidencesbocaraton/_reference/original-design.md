# Design capture: https://mrcresidencesbocaraton.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Mr. C Residences Boca Raton | New Luxury Residences for Sale (page 4568px tall, window 390×844)

**Fonts:** `Montserrat-Regular` ×24 · `Montserrat-SemiBold` ×15 · `Montserrat-Bold` ×7 · `Montserrat-Medium` ×2

**Loaded faces:** Montserrat-Bold normal normal · Montserrat-Medium normal normal · Montserrat-Regular normal normal · Montserrat-SemiBold normal normal · Montserrat-Light normal normal

**Font sizes:** `16px` ×16 · `12px` ×11 · `14px` ×10 · `22px` ×5 · `9px` ×5 · `11px` ×1

**Weights:** `400` ×47 · `700` ×1

**Size / line height:** `14px / 21px` ×10 · `16px / 18.4px` ×9 · `12px / 13.8px` ×8 · `16px / 47px` ×6 · `22px / 25.3px` ×5 · `12px / 19.2px` ×3 · `9px / 10.35px` ×3 · `9px / 13.5px` ×2 · `11px / 12.65px` ×1 · `16px / 22.4px` ×1

**Letter spacing:** `normal` ×42 · `0.7px` ×6

**Text colours:** `rgb(255, 255, 255)` ×33 · `rgb(167, 60, 56)` ×15

**Backgrounds:** `rgb(167, 60, 56)` ×1126 · `rgb(251, 232, 225)` ×600 · `rgb(0, 0, 0)` ×167 · `rgb(255, 255, 255)` ×0

**Borders:** `1px solid rgb(255, 255, 255)` ×1 · `1px solid rgb(167, 60, 56)` ×1

**Radii:** `50px` ×1 · `30px` ×1

**Transitions:** `opacity, transform 0.5s ease-out` ×10 · `all 0.5s ease` ×5 · `all 0.3s ease` ×3 · `all 1s ease` ×3

### Sections

1. `header#header` at 0px, 0px tall, position absolute
2. `div` at 0px, 429px tall, position sticky — “COME HOME TO MR. C” · original-390-section-01.png
3. `section` at 429px, 516px tall · original-390-section-02.png
4. `section` at 945px, 293px tall · original-390-section-03.png
5. `section` at 1238px, 536px tall · original-390-section-04.png
6. `section` at 1773px, 293px tall · original-390-section-05.png
7. `section` at 2066px, 459px tall · original-390-section-06.png
8. `section` at 2525px, 293px tall · original-390-section-07.png
9. `section` at 2817px, 1112px tall · original-390-section-08.png
10. `section` at 3929px, 420px tall · original-390-section-09.png
11. `footer` at 4349px, 219px tall · original-390-section-10.png

### Media slots

- section 2: video autoplay loop, 801×451 (aspect 1.78), fit contain
- section 4: image, 390×322 (aspect 1.21), fit cover
- section 6: image, 390×322 (aspect 1.21), fit cover
- section 8: image, 390×322 (aspect 1.21), fit cover
- section 10: image, 339×273 (aspect 1.24), fit contain, radius 30px
- section 10: image, 390×420 (aspect 0.93), fit cover

### Motion

**Libraries and media seen:** 2 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 9 half-screens · 2 elements · e.g. header.small “MENU”; div.side-menu “HOME THE MR. C STORY RESIDENCES SERVICES”
- section 2: pinned (sticky), at scroll pinned for 9 half-screens · e.g. div.hero_wrap.disable “COME HOME TO MR. C CONTACT US”
- section 2: scrubbed with the scroll — translateY 0→-286px, at scroll 422–3724px · e.g. div.parallax_wrap “COME HOME TO MR. C CONTACT US”
- section 2: scrubbed with the scroll — opacity 0.30→0.80, at scroll 422–1266px · e.g. div.tint-overlay
- section 2: scrubbed with the scroll — opacity 1.00→0.00, at scroll 422–1266px · e.g. div.content_wrap.visible “COME HOME TO MR. C CONTACT US”
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 422–422px · e.g. div.scroll-indicator.visible “SCROLL FOR MORE”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `hero-video-fade-in` on video.mobile.lazy-bg-video: 500ms (opacity)

**:hover rules in the CSS (first 20):**

- `.custom-combobox .cs-option:hover { background-color: rgb(167, 60, 56); color: rgb(255, 255, 255); }`
- `footer .left a:hover::after, footer .right a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `footer .left a:not(:hover)::after, footer .right a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header .links a:hover::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header .links .menu_open:hover p::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header.large .menu ul li:hover::after { width: 100%; }`
- `.side-menu ul li:hover::after { width: 100%; }`
- `.home_wrap .first_section .right .content_wrap a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `.home_wrap .first_section .right .content_wrap a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`
- `.contact_wrap .contact_section .form_wrap .form_text a:hover::after { width: 100%; }`
- `.contact_wrap .contact_section .form_wrap .wpcf7 form button:hover { color: rgb(167, 60, 56); background: transparent; }`
- `.news_wrap .news_section #news-container a:hover .image_wrap img { transform: translate(-50%, -50%) scale(1.05); }`
- `.news_wrap .news_section #news-container a:hover h2 .light { opacity: 0; }`
- `.news_wrap .news_section #news-container a:hover h2 .dark { opacity: 1; }`
- `.form_submit_wrap .content_wrap .wrap .button:hover { background: rgb(167, 60, 56); color: rgb(255, 255, 255); }`
- `.hero_wrap .parallax_wrap .content_wrap .button:hover { background: rgb(255, 255, 255); color: rgb(0, 0, 0); }`
- `.hero_wrap .parallax_wrap .scroll-indicator:hover { opacity: 0.7; }`
- `.hero_wrap .parallax_wrap .scroll-indicator:hover img { top: 10px; }`
- `.patern_text .right .content_wrap a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `.patern_text .right .content_wrap a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`

### The site's own links

`/` Home · `/mr-c-story/` THE MR. C STORY · `/residences/` Residences · `/services-amenities/` Services & Amenities · `/neighborhood/` Neighborhood · `/gallery/` Gallery · `/team/` Team · `/downloads/` Downloads · `/contact/` Contact us · `/news/` News · `/contact` CONTACT US · `/terms-and-conditions` Terms & Conditions · `/privacy-policy` Privacy policy

## 1440px — Mr. C Residences Boca Raton | New Luxury Residences for Sale (page 7365px tall, window 1440×900)

**Fonts:** `Montserrat-SemiBold` ×28 · `Montserrat-Regular` ×24 · `Montserrat-Bold` ×7 · `Montserrat-Medium` ×2

**Loaded faces:** Montserrat-Bold normal normal · Montserrat-Medium normal normal · Montserrat-Regular normal normal · Montserrat-SemiBold normal normal · Montserrat-Light normal normal

**Font sizes:** `14px` ×26 · `16px` ×11 · `11px` ×8 · `9px` ×6 · `36px` ×3 · `14.4px` ×3 · `42px` ×2 · `17.28px` ×1 · `18px` ×1

**Weights:** `400` ×60 · `700` ×1

**Size / line height:** `14px / 16.1px` ×13 · `14px / 21px` ×10 · `11px / 12.65px` ×8 · `16px / 47px` ×6 · `16px / 18.4px` ×5 · `9px / 10.35px` ×4 · `36px / 41.4px` ×3 · `14px / 22.4px` ×3 · `14.4px / 16.56px` ×3 · `42px / 48.3px` ×2

**Letter spacing:** `normal` ×54 · `0.7px` ×6 · `1px` ×1

**Text colours:** `rgb(255, 255, 255)` ×46 · `rgb(167, 60, 56)` ×15

**Backgrounds:** `rgb(167, 60, 56)` ×1366 · `rgb(251, 232, 225)` ×600 · `rgb(0, 0, 0)` ×200 · `rgb(255, 255, 255)` ×0

**Borders:** `1px solid rgb(255, 255, 255)` ×1 · `1px solid rgb(167, 60, 56)` ×1

**Radii:** `50px` ×1 · `30px` ×1

**Transitions:** `all 0.5s ease` ×10 · `opacity, transform 0.5s ease-out` ×10 · `all 0.3s ease` ×3 · `all 1s ease` ×3 · `all 0.5s ease-in-out` ×1

### Sections

1. `header#header` at 0px, 284px tall, position absolute · original-1440-section-01.png
2. `div` at 0px, 909px tall, position sticky — **sized by the window: 101% of the window height** (682px in a 675px window) — “COME HOME TO MR. C” · original-1440-section-02.png
3. `section` at 909px, 797px tall · original-1440-section-03.png
4. `section` at 1706px, 900px tall · original-1440-section-04.png
5. `section` at 2606px, 820px tall · original-1440-section-05.png
6. `section` at 3426px, 900px tall · original-1440-section-06.png
7. `section` at 4326px, 752px tall · original-1440-section-07.png
8. `section` at 5078px, 753px tall · original-1440-section-08.png
9. `section` at 5832px, 1077px tall · original-1440-section-09.png
10. `section` at 6908px, 420px tall · original-1440-section-10.png
11. `footer` at 7328px, 37px tall · original-1440-section-11.png

### Media slots

- section 4: image, 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 6: image, 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 8: image, 1440×753 (aspect 1.91), fit auto
- section 10: image, 634×273 (aspect 2.32), fit contain, radius 30px
- section 10: image, 1440×420 (aspect 3.43), fit cover

### Motion

**Libraries and media seen:** 2 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 30 half-screens · 2 elements · e.g. header.small.hidden “CONTACT US T (561) 782-0636 MENU”; div.side-menu “HOME THE MR. C STORY RESIDENCES SERVICES”
- section 2: pinned (sticky), at scroll pinned for 29 half-screens · e.g. div.hero_wrap.disable “COME HOME TO MR. C CONTACT US SCROLL FOR”
- section 2: scrubbed with the scroll — translateY 0→-497px, at scroll 214–6457px · e.g. div.parallax_wrap “COME HOME TO MR. C CONTACT US SCROLL FOR”
- section 2: scrubbed with the scroll — opacity 0.30→0.80, at scroll 214–888px · e.g. div.tint-overlay
- section 2: scrubbed with the scroll — opacity 1.00→0.00, at scroll 214–663px · e.g. div.content_wrap.visible “COME HOME TO MR. C CONTACT US”
- section 2: reveal on entering view — opacity 1.00→0.00, at scroll 214–438px · e.g. div.scroll-indicator.visible “SCROLL FOR MORE”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 438–663px · 3 elements · e.g. div.title.fadein-wrap “THOUGHTFULLY REFINED PRIVATE RESIDENCES”; div.description.fadein-wrap “Inspired by four generations of the Cipr”; a.fadein-wrap.in-view “EXPLORE RESIDENCES”
- section 4: scrubbed with the scroll — translateY -82→327px, at scroll 214–6457px · e.g. img
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 2238–2463px · 3 elements · e.g. div.title.fadein-wrap “INDULGE, RELAX, REPEAT”; div.description.fadein-wrap “Mr. C Residences offer home owners and t”; a.fadein-wrap.in-view “EXPLORE AMENITIES”
- section 6: scrubbed with the scroll — translateY -196→220px, at scroll 214–6465px · e.g. img
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 3813–4038px · 3 elements · e.g. div.title.fadein-wrap “BOCA RATON A HERITAGE OF STYLE”; div.description.fadein-wrap “Boca Raton is where elegance lives witho”; a.fadein-wrap.in-view “EXPLORE BOCA RATON”
- section 8: scrubbed with the scroll — translateY -309→122px, at scroll 214–6457px · e.g. picture
- section 8: scrubbed with the scroll — translateY -307→117px, at scroll 214–6465px · e.g. img
- section 9: reveal on entering view — opacity 0.00→1.00, at scroll 5163–5388px · e.g. div.form_wrap.light_background “Be the first to receive news and updates”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `hero-video-fade-in` on video.desktop.lazy-bg-video: 500ms (opacity)

**On hover:**

- a “CONTACT US”: color: rgb(255, 255, 255) → rgb(0, 0, 0); background: rgba(0, 0, 0, 0) → rgb(255, 255, 255) · transition `0.5s`
- button “SUBMIT”: color: rgb(255, 255, 255) → rgb(167, 60, 56); background: rgb(167, 60, 56) → rgba(167, 60, 56, 0) · transition `0.5s`

**:hover rules in the CSS (first 20):**

- `.custom-combobox .cs-option:hover { background-color: rgb(167, 60, 56); color: rgb(255, 255, 255); }`
- `footer .left a:hover::after, footer .right a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `footer .left a:not(:hover)::after, footer .right a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header .links a:hover::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header .links .menu_open:hover p::after { transform: scaleX(1); transform-origin: left bottom; }`
- `header.large .menu ul li:hover::after { width: 100%; }`
- `.side-menu ul li:hover::after { width: 100%; }`
- `.home_wrap .first_section .right .content_wrap a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `.home_wrap .first_section .right .content_wrap a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`
- `.contact_wrap .contact_section .form_wrap .form_text a:hover::after { width: 100%; }`
- `.contact_wrap .contact_section .form_wrap .wpcf7 form button:hover { color: rgb(167, 60, 56); background: transparent; }`
- `.news_wrap .news_section #news-container a:hover .image_wrap img { transform: translate(-50%, -50%) scale(1.05); }`
- `.news_wrap .news_section #news-container a:hover h2 .light { opacity: 0; }`
- `.news_wrap .news_section #news-container a:hover h2 .dark { opacity: 1; }`
- `.form_submit_wrap .content_wrap .wrap .button:hover { background: rgb(167, 60, 56); color: rgb(255, 255, 255); }`
- `.hero_wrap .parallax_wrap .content_wrap .button:hover { background: rgb(255, 255, 255); color: rgb(0, 0, 0); }`
- `.hero_wrap .parallax_wrap .scroll-indicator:hover { opacity: 0.7; }`
- `.hero_wrap .parallax_wrap .scroll-indicator:hover img { top: 10px; }`
- `.patern_text .right .content_wrap a:hover::after { transform: scaleX(0); transform-origin: right bottom; }`
- `.patern_text .right .content_wrap a:not(:hover)::after { transform: scaleX(1); transform-origin: left bottom; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Home · `/mr-c-story/` THE MR. C STORY · `/residences/` RESIDENCES · `/services-amenities/` SERVICES & AMENITIES · `/neighborhood/` NEIGHBORHOOD · `/gallery/` GALLERY · `/team/` TEAM · `/downloads/` DOWNLOADS · `/contact/` CONTACT US · `/news/` NEWS · `/contact` CONTACT US · `/terms-and-conditions` Terms & Conditions · `/privacy-policy` Privacy policy
