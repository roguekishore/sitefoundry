# Design capture: https://www.wiemer.store/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Wiemer (page 7360px tall, window 390×844)

**Fonts:** `Neue Montreal` ×195 · `Supply Mono` ×9

**Loaded faces:** webflow-icons 400 normal · Neue Montreal 600 normal · Neue Montreal 500 normal · Neue Montreal 400 normal · Neue Montreal 300 normal · Supply Mono 400 normal

**Font sizes:** `20px` ×75 · `16px` ×52 · `64px` ×36 · `15px` ×27 · `12px` ×7 · `14px` ×6 · `40px` ×1

**Weights:** `500` ×119 · `400` ×84 · `600` ×1

**Size / line height:** `20px / 24px` ×75 · `16px / 20.8px` ×52 · `64px / 70.4px` ×36 · `15px / 18px` ×15 · `15px / 21px` ×10 · `12px / 12px` ×4 · `14px / 18.2px` ×3 · `14px / 16.8px` ×3 · `12px / 20px` ×3 · `15px / 15px` ×2

**Letter spacing:** `-0.25px` ×112 · `normal` ×92

**Text colours:** `rgb(18, 18, 18)` ×182 · `rgb(255, 255, 255)` ×10 · `rgb(254, 111, 45)` ×3 · `rgb(176, 176, 176)` ×3 · `rgb(251, 251, 251)` ×2 · `rgb(1, 113, 227)` ×2 · `rgba(35, 36, 25, 0.65)` ×2

**Backgrounds:** `rgb(251, 251, 251)` ×1578 · `rgb(242, 242, 242)` ×461 · `rgb(254, 111, 45)` ×429 · `rgba(221, 221, 221, 0)` ×28 · `rgba(35, 36, 25, 0.08)` ×28 · `rgb(1, 113, 227)` ×26 · `rgb(255, 255, 255)` ×18 · `rgba(254, 111, 45, 0.2)` ×8 · `rgb(18, 18, 18)` ×4 · `rgba(70, 70, 70, 0.35)` ×2 · `rgb(32, 29, 29)` ×1 · `rgb(239, 238, 236)` ×0

**Borders:** `1px solid rgb(18, 18, 18)` ×4 · `2px solid rgb(237, 233, 228)` ×3 · `1px solid rgba(0, 0, 0, 0.05)` ×2 · `1px solid rgba(18, 18, 18, 0.1)` ×2 · `1px solid rgb(1, 113, 227)` ×2 · `1px solid rgba(18, 18, 18, 0.05)` ×2 · `1px solid rgb(19, 19, 19)` ×1

**Radii:** `10.5px` ×15 · `700px` ×9 · `6px` ×7 · `7px` ×7 · `100px` ×4 · `5.25px` ×1 · `1.75px` ×1 · `8.4px` ×1 · `16px` ×1 · `14px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px` ×4 · `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` ×1 · `rgba(38, 41, 38, 0.05) 0px 4px 16px 0px` ×1

**Transitions:** `all 0.2s ease` ×9 · `transform, background-color 0.3s cubic-bezier(0.38` ×3 · `color 0.3s ease` ×3 · `transform 0.6s cubic-bezier(0.625` ×1 · `opacity, transform 0.6s cubic-bezier(0.625` ×1

**:root variables (39):** `--colors--orange: #fe6f2d` · `--colors--whitesmoke: #fbfbfb` · `--colors--black: #121212` · `--width--100: 100%` · `--spacing--7: 7rem` · `--spacing--4: 4rem` · `--spacing--3: 3rem` · `--font-size--m: 48px` · `--colors--white: white` · `--spacing--2: 2rem` · `--spacing--1: 1rem` · `--spacing--5: 5rem` · `--spacing--6: 6rem` · `--spacing--05: .5rem` · `--spacing--025: .25rem` · `--spacing--10: 10rem` · `--spacing--9: 9rem` · `--spacing--8: 8rem` · `--font-size--l: 64px` · `--font-size--s: 32px` · `--font-size--xs: 24px` · `--font-size--copytext: 18px` · `--width--15: 15rem` · `--width--20: 20rem` · `--width--25: 25rem` · `--width--30: 30rem` · `--width--35: 35rem` · `--width--40: 40rem` · `--width--45: 45rem` · `--width--50: 50rem` · `--width--55: 55rem` · `--width--60: 60rem` · `--width--65: 65rem` · `--width--70: 70rem` · `--width--75: 75rem` · `--width--80: 80rem` · `--colors--grey: #b0b0b0` · `--font-size--copytext-small: 16px` · `--colors--blue: #0171e3`

### Sections

1. `div` at 0px, 844px tall — **sized by the window: 100% of the window height** (633px in a 633px window) — “Wiemer” · original-390-section-01.png
2. `div` at 844px, 1094px tall — “Ein Möbelstück, das bleibt. Der Matthias.” · original-390-section-02.png
3. `div#waitlist` at 1938px, 908px tall — “Für die Warteliste eintragen” · original-390-section-03.png
4. `div` at 2846px, 693px tall · original-390-section-04.png
5. `div` at 3540px, 1095px tall — “Über die Brand” · original-390-section-05.png
6. `div` at 4634px, 585px tall · original-390-section-06.png
7. `div` at 5219px, 1211px tall — “Specs” · original-390-section-07.png
8. `div` at 6430px, 930px tall · original-390-section-08.png

### Media slots

- section 1: image, 390×1013 (aspect 0.39), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 214×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 2: image, 215×268 (aspect 0.80), fit cover
- section 4: video autoplay loop, 390×693 (aspect 0.56), fit cover
- section 5: image, 342×513 (aspect 0.67), fit cover, radius 10.5px
- section 6: image, 390×585 (aspect 0.67), fit cover
- section 6: image, 390×585 (aspect 0.67), fit cover
- section 7: image, 342×266 (aspect 1.29), fit cover
- section -: image, 335×251 (aspect 1.33), fit cover, radius 7px

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 17 half-screens · 3 elements · e.g. div.page-transition; div.ck-cookie-w “Cookie Einstellungen Wenn Sie auf „Akzep”; div.hotspot-modal “Lochtplatte aus eloxiertem Aluminium Die”
- section -: reveal on entering view — translateY 0→-96px, while pinned, at scroll 396–2505px · e.g. div.nav.w-nav “Für Warteliste eintragen”
- section 1: scrubbed with the scroll — translateY 17→142px, at scroll 396–1661px · e.g. img.parallax-asset-hero
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 396–817px · 2 elements · e.g. div.tag.is-aligned “COMING SOON”; div.global-subline-div._2 “Für Warteliste eintragen”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 77→0px, at scroll 396–817px · 17 elements · e.g. div “H”; div “e”; div “l”
- section 2: scrubbed with the scroll — opacity 0.00→1.00, translateY 77→0px, at scroll 396–1239px · 3 elements · e.g. div “e”; div “,”; div “M”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 817–1239px · 34 elements · e.g. div “E”; div “i”; div “n”
- section 2: scrubbed with the scroll — opacity 0.00→1.00, translateY 26→0px, at scroll 1239–2083px · 2 elements · e.g. div “i”; div “a”
- section 2: reveal on entering view — translateY 23→0px, at scroll 1239–1661px · 13 elements · e.g. div.line “Matthias ist nicht durch Komplexität def”; div.line “Sondern durch die Entscheidung, eine Sac”; div.line “außergewöhnlich gut zu machen. Hergestel”
- section 2: scrubbed with the scroll — translateX -937→-1329px, at scroll 396–6516px · e.g. div.draggable-marquee__collection
- section 5: scrubbed with the scroll — translateY -36→36px, at scroll 2927–4615px · e.g. img.parallax-img
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 77→0px, at scroll 2927–3352px · 5 elements · e.g. div “A”; div “b”; div “o”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 3352–3771px · 12 elements · e.g. div “Ü”; div “b”; div “e”
- section 5: reveal on entering view — translateY 23→0px, at scroll 3771–4196px · 14 elements · e.g. div.line “"Ein guter Cappuccino aus der Siebträger”; div.line “einem entspannten Morgen statt Kapselkaf”; div.line “dem hektischen Weg zur Arbeit. Ein helle”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 4196–4615px · e.g. div.global-subline-div._2 “Folge uns auf Instagram”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 77→0px, at scroll 4196–4615px · 5 elements · e.g. div “S”; div “p”; div “e”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 5040–5459px · 19 elements · e.g. div “S”; div “o”; div “n”
- section 7: scrubbed with the scroll — opacity 0.00→1.00, translateY 26→0px, at scroll 5040–5884px · 2 elements · e.g. div “t”; div “i”
- section 7: reveal on entering view — translateY 23→0px, at scroll 5459–5884px · 9 elements · e.g. div.line “Aluminium ist ein empfindliches Material”; div.line “während der Herstellung oder des Transpo”; div.line “können kleinere Imperfektionen auf der”
- section 7: reveal on entering view — opacity 0.98→0.00, at scroll 396–396px · e.g. div.bouncy-tabs__ghost

**:hover rules in the CSS (first 8):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.unselected:hover { border-color: var(--colors--grey); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.copy-email-button:hover .copy-email-icon__wrap { background: rgba(48, 48, 48, 0.9); }`
- `.copy-email-button:hover .copy-email-text__el { transform: translate(0px, -100%); }`
- `.hotspot-plus-btn:hover, .hotspot-plus-btn[data-hotspot-status="active"] { transform: scale(1.1) rotate(45deg); }`

### The site's own links

`/` Dropdown · `/kontakt` Kontakt aufnehmen

## 1440px — Wiemer (page 9616px tall, window 1440×900)

**Fonts:** `Neue Montreal` ×204 · `Supply Mono` ×10

**Loaded faces:** webflow-icons 400 normal · Neue Montreal 600 normal · Neue Montreal 500 normal · Neue Montreal 400 normal · Neue Montreal 300 normal · Supply Mono 400 normal

**Font sizes:** `23.04px` ×76 · `17.28px` ×49 · `129.6px` ×40 · `15px` ×29 · `12px` ×8 · `180px` ×6 · `14.4px` ×3 · `14px` ×3

**Weights:** `500` ×130 · `400` ×83 · `600` ×1

**Size / line height:** `23.04px / 27.648px` ×76 · `17.28px / 22.464px` ×49 · `129.6px / 142.56px` ×40 · `15px / 18px` ×15 · `15px / 21px` ×12 · `180px / 162px` ×6 · `12px / 12px` ×5 · `14.4px / 18.72px` ×3 · `14px / 16.8px` ×3 · `12px / 20px` ×3

**Letter spacing:** `normal` ×92 · `-0.25px` ×76 · `-1px` ×40 · `-0.75px` ×6

**Text colours:** `rgb(18, 18, 18)` ×189 · `rgb(255, 255, 255)` ×11 · `rgb(254, 111, 45)` ×4 · `rgb(251, 251, 251)` ×3 · `rgb(176, 176, 176)` ×3 · `rgb(1, 113, 227)` ×2 · `rgba(35, 36, 25, 0.65)` ×2

**Backgrounds:** `rgb(251, 251, 251)` ×1694 · `rgb(242, 242, 242)` ×448 · `rgb(254, 111, 45)` ×400 · `rgb(229, 229, 229)` ×114 · `rgba(221, 221, 221, 0)` ×105 · `rgb(1, 113, 227)` ×27 · `rgb(255, 255, 255)` ×24 · `rgba(35, 36, 25, 0.08)` ×23 · `rgba(254, 111, 45, 0.2)` ×10 · `rgba(35, 36, 25, 0.1)` ×7 · `rgb(18, 18, 18)` ×4 · `rgba(70, 70, 70, 0.35)` ×4

**Borders:** `1px solid rgb(18, 18, 18)` ×5 · `1px solid rgba(0, 0, 0, 0.05)` ×3 · `2px solid rgb(237, 233, 228)` ×3 · `1px solid rgba(18, 18, 18, 0.1)` ×2 · `1px solid rgb(1, 113, 227)` ×2 · `1px solid rgba(18, 18, 18, 0.05)` ×2 · `1px solid rgb(255, 255, 255)` ×1 · `1px solid rgb(19, 19, 19)` ×1

**Radii:** `50%` ×88 · `14px` ×18 · `7px` ×9 · `700px` ×9 · `6px` ×8 · `100px` ×6 · `5.25px` ×1 · `1.75px` ×1 · `8.4px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px` ×4 · `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` ×1 · `rgba(38, 41, 38, 0.05) 0px 4px 16px 0px` ×1

**Gradients:** `linear-gradient(rgba(0, 0, 0, 0.35), rgba(255, 255, 255, 0) 30%)` ×1

**Transitions:** `all 0.2s ease` ×9 · `transform, background-color 0.3s cubic-bezier(0.38` ×3 · `color 0.3s ease` ×3 · `transform 0.6s cubic-bezier(0.625` ×1 · `opacity, transform 0.6s cubic-bezier(0.625` ×1

**:root variables (39):** `--colors--orange: #fe6f2d` · `--colors--whitesmoke: #fbfbfb` · `--colors--black: #121212` · `--width--100: 100%` · `--spacing--7: 7rem` · `--spacing--4: 4rem` · `--spacing--3: 3rem` · `--font-size--m: 48px` · `--colors--white: white` · `--spacing--2: 2rem` · `--spacing--1: 1rem` · `--spacing--5: 5rem` · `--spacing--6: 6rem` · `--spacing--05: .5rem` · `--spacing--025: .25rem` · `--spacing--10: 10rem` · `--spacing--9: 9rem` · `--spacing--8: 8rem` · `--font-size--l: 64px` · `--font-size--s: 32px` · `--font-size--xs: 24px` · `--font-size--copytext: 18px` · `--width--15: 15rem` · `--width--20: 20rem` · `--width--25: 25rem` · `--width--30: 30rem` · `--width--35: 35rem` · `--width--40: 40rem` · `--width--45: 45rem` · `--width--50: 50rem` · `--width--55: 55rem` · `--width--60: 60rem` · `--width--65: 65rem` · `--width--70: 70rem` · `--width--75: 75rem` · `--width--80: 80rem` · `--colors--grey: #b0b0b0` · `--font-size--copytext-small: 16px` · `--colors--blue: #0171e3`

### Sections

1. `div` at 0px, 1350px tall — **sized by the window: 150% of the window height** (1013px in a 675px window) — “Wiemer” · original-1440-section-01.png
2. `div` at 1350px, 1797px tall — “Ein Möbelstück, das bleibt. Der Matthias.” · original-1440-section-02.png
3. `div#waitlist` at 3147px, 1575px tall — “Für die Warteliste eintragen” · original-1440-section-03.png
4. `div` at 4721px, 810px tall · original-1440-section-04.png
5. `div` at 5531px, 975px tall — “Über die Brand” · original-1440-section-05.png
6. `div` at 6507px, 1035px tall — **sized by the window: 115% of the window height** (776px in a 675px window) · original-1440-section-06.png
7. `div` at 7542px, 1563px tall — “Specs” · original-1440-section-07.png
8. `div` at 9105px, 512px tall · original-1440-section-08.png

### Media slots

- section 1: image, 1440×1620 (aspect 0.89), fit cover
- section 1: image, 164×164 (aspect 1.00), fit cover, radius 7px
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 2: image, 475×594 (aspect 0.80), fit cover
- section 4: video autoplay loop, 1440×810 (aspect 1.78), fit cover
- section 5: image, 443×664 (aspect 0.67), fit cover, radius 14px
- section 6: image, 1440×1035 (aspect 1.39), fit cover
- section 7: image, 787×611 (aspect 1.29), fit cover
- section 8: image, 164×164 (aspect 1.00), fit cover, radius 7px
- section -: image, 421×316 (aspect 1.33), fit cover, radius 7px

### Motion

**Libraries and media seen:** GSAP 3.15.0 · GSAP ScrollTrigger (pinning / scrubbing) · Lenis smooth scroll · Webflow interactions · 2 video element(s)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 21 half-screens · 3 elements · e.g. div.page-transition; div.ck-cookie-w “Cookie Einstellungen Wenn Sie auf „Akzep”; div.hotspot-modal “Lochtplatte aus eloxiertem Aluminium Die”
- section -: reveal on entering view — translateY 0→-96px, while pinned, at scroll 425–425px · e.g. div.nav.w-nav “Für Warteliste eintragen Für Warteliste ”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 1322–1322px · e.g. div.nav-default “Für Warteliste eintragen”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→-240px, at scroll 1322–1322px · e.g. div.nav-transparent “Für Warteliste eintragen”
- section -: reveal on entering view — translateY 25→0px, at scroll 1771–2222px · 33 elements · e.g. div.line “Matthias ist nicht durch Komplexität def”; div.line “die Entscheidung, eine Sache außergewöhn”; div.line “machen. Hergestellt in Deutschland aus E”
- section 1: scrubbed with the scroll — translateY -30→113px, at scroll 425–2222px · e.g. img.parallax-img
- section 1: reveal on entering view — opacity 1.00→0.00, at scroll 872–872px · 2 elements · e.g. div.vh-100 “Wiemer Zeitlose Designermöbel aus Edelst”; div.vh-50 “Der erste in der Produktfamilie. Der Mat”
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 872–1322px · 2 elements · e.g. div.tag.is-aligned “COMING SOON”; div.global-subline-div._2 “Für Warteliste eintragen”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 157→0px, at scroll 872–1322px · 20 elements · e.g. div “H”; div “e”; div “l”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 1322–1771px · 34 elements · e.g. div “E”; div “i”; div “n”
- section 2: scrubbed with the scroll — opacity 0.00→1.00, translateY 30→0px, at scroll 1322–2222px · 2 elements · e.g. div “ü”; div “c”
- section 2: scrubbed with the scroll — translateX -2255→-415px, at scroll 425–8716px · e.g. div.draggable-marquee__collection
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 2671–3122px · e.g. div.tag “COMING SOON”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 157→0px, at scroll 2671–3122px · 10 elements · e.g. div “C”; div “o”; div “m”
- section 5: scrubbed with the scroll — translateY -46→46px, at scroll 4922–6722px · e.g. img.parallax-img
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 157→0px, at scroll 4922–5372px · 3 elements · e.g. div “A”; div “b”; div “o”
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY 157→0px, at scroll 4922–5822px · 2 elements · e.g. div “u”; div “t”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 5372–5822px · 12 elements · e.g. div “Ü”; div “b”; div “e”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 6722–6722px · e.g. div.global-subline-div._2 “Folge uns auf Instagram”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 157→0px, at scroll 7171–7622px · 5 elements · e.g. div “S”; div “p”; div “e”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 30→0px, at scroll 8071–8522px · 21 elements · e.g. div “S”; div “o”; div “n”

**On hover:**

- button: transform: matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0) → matrix(0.777817, 0.777817, -0.777817, 0.777817, 0, 0) · transition `transform 0.3s cubic-bezier(0.38, 0.005, 0.215, 1), background-color 0.3s cubic-bezier(0.38, 0.005, 0.215, 1)`
- a “Instagram”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “AGB”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “Widerrufsbelehrung”: inner transform: matrix(0, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 0, 0) · transition `0.2s`
- a “Akzeptieren Akzeptieren”: transform: matrix(1, 0, 0, 1, 0, 0) → matrix(0.98, 0, 0, 0.98, 0, 0) · transition `all`
- a “Ablehnen Ablehnen”: transform: matrix(1, 0, 0, 1, 0, 0) → matrix(0.98, 0, 0, 0.98, 0, 0) · transition `all`

**:hover rules in the CSS (first 8):**

- `a:active, a:hover { outline: 0px; }`
- `.w-lightbox-control:hover { opacity: 1; }`
- `.w-lightbox-inactive, .w-lightbox-inactive:hover { opacity: 0; }`
- `.unselected:hover { border-color: var(--colors--grey); }`
- `.img-slider__thumb:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.copy-email-button:hover .copy-email-icon__wrap { background: rgba(48, 48, 48, 0.9); }`
- `.copy-email-button:hover .copy-email-text__el { transform: translate(0px, -100%); }`
- `.hotspot-plus-btn:hover, .hotspot-plus-btn[data-hotspot-status="active"] { transform: scale(1.1) rotate(45deg); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Dropdown · `/kontakt` Kontakt aufnehmen
