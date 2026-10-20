# Design capture: https://www.wiemer.store/kontakt

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Kontakt (page 2546px tall, window 390×844)

**Fonts:** `Neue Montreal` ×38 · `Supply Mono` ×2

**Loaded faces:** webflow-icons 400 normal · Neue Montreal 600 normal · Neue Montreal 500 normal · Neue Montreal 400 normal · Neue Montreal 300 normal · Supply Mono 400 normal

**Font sizes:** `15px` ×29 · `14px` ×4 · `16px` ×3 · `12px` ×2 · `40px` ×1 · `20px` ×1

**Weights:** `400` ×32 · `500` ×7 · `600` ×1

**Size / line height:** `15px / 18px` ×15 · `15px / 21px` ×8 · `15px / 15px` ×6 · `16px / 20.8px` ×3 · `14px / 16.8px` ×3 · `12px / 12px` ×2 · `40px / 48px` ×1 · `20px / 24px` ×1 · `14px / 18.2px` ×1

**Letter spacing:** `normal` ×38 · `-0.25px` ×2

**Text colours:** `rgb(18, 18, 18)` ×27 · `rgb(1, 113, 227)` ×4 · `rgb(255, 255, 255)` ×4 · `rgb(176, 176, 176)` ×3 · `rgb(254, 111, 45)` ×2

**Backgrounds:** `rgb(242, 242, 242)` ×600 · `rgb(251, 251, 251)` ×399 · `rgb(254, 111, 45)` ×200 · `rgb(255, 255, 255)` ×71 · `rgba(221, 221, 221, 0)` ×28 · `rgb(1, 113, 227)` ×26 · `rgba(254, 111, 45, 0.2)` ×4 · `rgb(239, 238, 236)` ×0

**Borders:** `1px solid rgba(18, 18, 18, 0.1)` ×4 · `1px solid rgb(18, 18, 18)` ×2 · `1px solid rgba(0, 0, 0, 0.05)` ×2 · `1px solid rgb(1, 113, 227)` ×2 · `1px solid rgb(19, 19, 19)` ×1 · `1px solid rgba(18, 18, 18, 0.05)` ×1

**Radii:** `7px` ×4 · `5.25px` ×3 · `100px` ×2 · `6px` ×2 · `10.5px` ×2 · `1.75px` ×1 · `16px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px` ×3 · `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` ×1 · `rgba(38, 41, 38, 0.05) 0px 4px 16px 0px` ×1

**Transitions:** `all 0.2s ease` ×9

**:root variables (39):** `--colors--orange: #fe6f2d` · `--colors--whitesmoke: #fbfbfb` · `--colors--black: #121212` · `--width--100: 100%` · `--spacing--7: 7rem` · `--spacing--4: 4rem` · `--spacing--3: 3rem` · `--font-size--m: 48px` · `--colors--white: white` · `--spacing--2: 2rem` · `--spacing--1: 1rem` · `--spacing--5: 5rem` · `--spacing--6: 6rem` · `--spacing--05: .5rem` · `--spacing--025: .25rem` · `--spacing--10: 10rem` · `--spacing--9: 9rem` · `--spacing--8: 8rem` · `--font-size--l: 64px` · `--font-size--s: 32px` · `--font-size--xs: 24px` · `--font-size--copytext: 18px` · `--width--15: 15rem` · `--width--20: 20rem` · `--width--25: 25rem` · `--width--30: 30rem` · `--width--35: 35rem` · `--width--40: 40rem` · `--width--45: 45rem` · `--width--50: 50rem` · `--width--55: 55rem` · `--width--60: 60rem` · `--width--65: 65rem` · `--width--70: 70rem` · `--width--75: 75rem` · `--width--80: 80rem` · `--colors--grey: #b0b0b0` · `--font-size--copytext-small: 16px` · `--colors--blue: #0171e3`

### Sections

1. `div` at 0px, 1031px tall — “Du hast eine Frage?” · original-kontakt-390-section-01.png
2. `div` at 1031px, 585px tall · original-kontakt-390-section-02.png
3. `div` at 1616px, 930px tall · original-kontakt-390-section-03.png

### Media slots

- section 2: image, 390×702 (aspect 0.56), fit cover

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 6 half-screens · 2 elements · e.g. div.page-transition; div.ck-cookie-w “Cookie Einstellungen Wenn Sie auf „Akzep”
- section -: reveal on entering view — translateY 0→-96px, while pinned, at scroll 396–396px · e.g. div.nav.w-nav “Für Warteliste eintragen”
- section 2: scrubbed with the scroll — translateY -49→48px, at scroll 396–1700px · e.g. img.parallax-img

**:hover rules in the CSS (first 7):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.unselected:hover { border-color: var(--colors--grey); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.copy-email-button:hover .copy-email-icon__wrap { background: rgba(48, 48, 48, 0.9); }`
- `.copy-email-button:hover .copy-email-text__el { transform: translate(0px, -100%); }`

### The site's own links

`/kontakt` Dropdown

## 1440px — Kontakt (page 2976px tall, window 1440×900)

**Fonts:** `Neue Montreal` ×38 · `Supply Mono` ×2

**Loaded faces:** webflow-icons 400 normal · Neue Montreal 600 normal · Neue Montreal 500 normal · Neue Montreal 400 normal · Neue Montreal 300 normal · Supply Mono 400 normal

**Font sizes:** `15px` ×29 · `17.28px` ×3 · `14px` ×3 · `12px` ×2 · `57.6px` ×1 · `23.04px` ×1 · `14.4px` ×1

**Weights:** `400` ×32 · `500` ×7 · `600` ×1

**Size / line height:** `15px / 18px` ×15 · `15px / 21px` ×8 · `15px / 15px` ×6 · `17.28px / 22.464px` ×3 · `14px / 16.8px` ×3 · `12px / 12px` ×2 · `57.6px / 69.12px` ×1 · `23.04px / 27.648px` ×1 · `14.4px / 18.72px` ×1

**Letter spacing:** `normal` ×38 · `-0.75px` ×1 · `-0.25px` ×1

**Text colours:** `rgb(18, 18, 18)` ×27 · `rgb(1, 113, 227)` ×4 · `rgb(255, 255, 255)` ×4 · `rgb(176, 176, 176)` ×3 · `rgb(254, 111, 45)` ×2

**Backgrounds:** `rgb(251, 251, 251)` ×697 · `rgb(242, 242, 242)` ×400 · `rgb(254, 111, 45)` ×200 · `rgb(229, 229, 229)` ×114 · `rgba(221, 221, 221, 0)` ×105 · `rgb(255, 255, 255)` ×85 · `rgb(1, 113, 227)` ×24 · `rgba(254, 111, 45, 0.2)` ×4 · `rgb(239, 238, 236)` ×0

**Borders:** `1px solid rgba(18, 18, 18, 0.1)` ×4 · `1px solid rgb(18, 18, 18)` ×2 · `1px solid rgba(0, 0, 0, 0.05)` ×2 · `1px solid rgb(1, 113, 227)` ×2 · `1px solid rgb(19, 19, 19)` ×1 · `1px solid rgba(18, 18, 18, 0.05)` ×1

**Radii:** `50%` ×88 · `7px` ×4 · `14px` ×3 · `5.25px` ×3 · `100px` ×2 · `6px` ×2 · `1.75px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px` ×3 · `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` ×1 · `rgba(38, 41, 38, 0.05) 0px 4px 16px 0px` ×1

**Transitions:** `all 0.2s ease` ×9

**:root variables (39):** `--colors--orange: #fe6f2d` · `--colors--whitesmoke: #fbfbfb` · `--colors--black: #121212` · `--width--100: 100%` · `--spacing--7: 7rem` · `--spacing--4: 4rem` · `--spacing--3: 3rem` · `--font-size--m: 48px` · `--colors--white: white` · `--spacing--2: 2rem` · `--spacing--1: 1rem` · `--spacing--5: 5rem` · `--spacing--6: 6rem` · `--spacing--05: .5rem` · `--spacing--025: .25rem` · `--spacing--10: 10rem` · `--spacing--9: 9rem` · `--spacing--8: 8rem` · `--font-size--l: 64px` · `--font-size--s: 32px` · `--font-size--xs: 24px` · `--font-size--copytext: 18px` · `--width--15: 15rem` · `--width--20: 20rem` · `--width--25: 25rem` · `--width--30: 30rem` · `--width--35: 35rem` · `--width--40: 40rem` · `--width--45: 45rem` · `--width--50: 50rem` · `--width--55: 55rem` · `--width--60: 60rem` · `--width--65: 65rem` · `--width--70: 70rem` · `--width--75: 75rem` · `--width--80: 80rem` · `--colors--grey: #b0b0b0` · `--font-size--copytext-small: 16px` · `--colors--blue: #0171e3`

### Sections

1. `div` at 0px, 1504px tall — “Du hast eine Frage?” · original-kontakt-1440-section-01.png
2. `div` at 1504px, 960px tall · original-kontakt-1440-section-02.png
3. `div` at 2464px, 512px tall · original-kontakt-1440-section-03.png

### Media slots

- section 2: image, 1440×1152 (aspect 1.25), fit cover
- section 3: image, 164×164 (aspect 1.00), fit cover, radius 7px

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 7 half-screens · 2 elements · e.g. div.page-transition; div.ck-cookie-w “Cookie Einstellungen Wenn Sie auf „Akzep”
- section -: reveal on entering view — translateY 0→-96px, while pinned, at scroll 423–423px · e.g. div.nav.w-nav “Für Warteliste eintragen”
- section 2: scrubbed with the scroll — translateY -81→39px, at scroll 871–2075px · e.g. img.parallax-img

**On hover:**

- a “Instagram”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “AGB”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “Widerrufsbelehrung”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “Kontakt aufnehmen”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “Akzeptieren Akzeptieren”: transform: matrix(1, 0, 0, 1, 0, 0) → matrix(0.98, 0, 0, 0.98, 0, 0) · transition `all`
- a “Ablehnen Ablehnen”: transform: matrix(1, 0, 0, 1, 0, 0) → matrix(0.98, 0, 0, 0.98, 0, 0) · transition `all`

**:hover rules in the CSS (first 7):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.unselected:hover { border-color: var(--colors--grey); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.copy-email-button:hover .copy-email-icon__wrap { background: rgba(48, 48, 48, 0.9); }`
- `.copy-email-button:hover .copy-email-text__el { transform: translate(0px, -100%); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/kontakt` Dropdown
