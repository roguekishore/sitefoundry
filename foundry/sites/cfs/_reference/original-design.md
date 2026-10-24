# Design capture: https://cfs.energy/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Home | Commonwealth Fusion Systems (page 5304px tall, window 390×844)

**Fonts:** `nbInternationalMono` ×35 · `nbInternational` ×17

**Loaded faces:** nbInternational 300 normal · nbInternational 300 italic · nbInternational 400 normal · nbInternational 400 italic · nbInternational 600 normal · nbInternational 600 italic · nbInternational Fallback normal normal · nbInternationalMono 400 normal · nbInternationalMono Fallback normal normal · madSans 600 normal · madSans Fallback normal normal

**Font sizes:** `14px` ×35 · `16px` ×7 · `34px` ×3 · `10px` ×3 · `12.5px` ×2 · `24px` ×1 · `30px` ×1

**Weights:** `400` ×45 · `300` ×7

**Size / line height:** `14px / 28px` ×14 · `14px / 21px` ×9 · `14px / 16.8px` ×7 · `14px / 14px` ×5 · `16px / 24px` ×5 · `34px / 40.8px` ×3 · `16px / 20.8px` ×2 · `12.5px / 18.75px` ×2 · `10px / normal` ×2 · `24px / 36px` ×1

**Letter spacing:** `normal` ×47 · `-0.08px` ×2 · `1.8px` ×2 · `1.6px` ×1

**Text colours:** `rgb(255, 255, 255)` ×33 · `rgb(51, 51, 51)` ×13 · `rgb(207, 109, 70)` ×3 · `rgba(255, 255, 255, 0.7)` ×2 · `rgb(16, 28, 41)` ×1

**Backgrounds:** `rgb(204, 200, 195)` ×400 · `rgb(21, 37, 54)` ×399 · `rgb(51, 51, 51)` ×200 · `rgb(16, 28, 41)` ×61 · `rgb(207, 109, 70)` ×6

**Borders:** `1px solid rgb(255, 255, 255)` ×2 · `3px solid rgb(207, 109, 70)` ×1 · `1px solid rgba(255, 255, 255, 0.22)` ×1 · `1px solid rgb(207, 109, 70)` ×1

**Shadows:** `rgba(0, 0, 0, 0.4) 0px 18px 42px 0px` ×1

**Transitions:** `border-color 0.15s cubic-bezier(0.455` ×11 · `transform 0.15s cubic-bezier(0.455` ×4 · `transform, color 0.15s cubic-bezier(0.455` ×3 · `color 0.15s cubic-bezier(0.455` ×3 · `background-color, color, border-color 0.15s cubic-bezier(0.455` ×2 · `max-width, opacity, padding-left 0.3s ease` ×1 · `opacity 1s ease` ×1 · `color, border-color 0.15s cubic-bezier(0.455` ×1

### Sections

1. `main#site-main` at 0px, 3832px tall — “The world's largest and leading commercial fusion energy company” · original-390-section-01.png, original-390-section-02.png
2. `footer` at 3832px, 1472px tall — “Join the power movement” · original-390-section-03.png

### Media slots

- section 1: background image, 390×844 (aspect 0.46), fit cover, **fills the window height**
- section 1: image, 356×238 (aspect 1.50), fit cover
- section 1: image, 171×114 (aspect 1.50), fit auto
- section 1: image, 199×145 (aspect 1.37), fit auto
- section 1: background image, 390×422 (aspect 0.92), fit cover

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 11 half-screens · e.g. aside “PRIVACY NOTICE A quick word on cookies. ”
- section 1: scrubbed with the scroll — scale 1.00→1.04, at scroll 422–4460px · e.g. div

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `PageTransition-module-scss-module__INwY-W__fadeIn` on div “The world's largest and leading commerci”: 500ms (opacity)
- CSSAnimation `Topper-module-scss-module__tzx1ja__pulse` on div: 2000ms, loops forever (transform)
- CSSAnimation `CookieBanner-module-scss-module__iE5W0W__slide-in` on aside “PRIVACY NOTICE A quick word on cookies. ”: 420ms (transform, opacity)
- CSSAnimation `CookieBanner-module-scss-module__iE5W0W__bar-grow` on span: 560ms (transform)

**:hover rules in the CSS (first 20):**

- `.CookieBanner-module-scss-module__iE5W0W__link:hover { border-color: currentcolor; }`
- `.CookieBanner-module-scss-module__iE5W0W__link:hover, .CookieBanner-module-scss-module__iE5W0W__link:focus-visible { color: rgb(255, 255, 255); outline: none; }`
- `.CookieBanner-module-scss-module__iE5W0W__accept:hover, .CookieBanner-module-scss-module__iE5W0W__accept:focus-visible { color: rgb(16, 28, 41); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.CookieBanner-module-scss-module__iE5W0W__reject:hover, .CookieBanner-module-scss-module__iE5W0W__reject:focus-visible { color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.MenuToggleButton-module-scss-module__z0enAa__button:hover .MenuToggleButton-module-scss-module__z0enAa__menuSvg:not(.MenuToggleButton-module-scss-module__z0enAa__close) .MenuToggleButton-module-scss-module__z0enAa__rect`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItemLink:focus-visible, .MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItemLink:hover { color: rg`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItemLink:focus-visible, .MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItemLink:hover { color: rgb(204,`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuButton:hover { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuButton:hover { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51); }`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__logoContainer:hover .MainNav-module-scss-module__ncNLla__logo { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-color:`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__logoContainer:hover .MainNav-module-scss-module__ncNLla__logo { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color: rg`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItem:hover .MainNav-module-scss-module__ncNLla__menuItemLink { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-col`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItem:hover .MainNav-module-scss-module__ncNLla__menuItemLink { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color:`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__subMenuLink:focus-visible, .MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__subMenuLink:hover { color: rgb(`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__subMenuLink:focus-visible, .MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__subMenuLink:hover { color: rgb(204, 2`
- `.ui.pagination .item:not(:first-child):not(:last-child):not(.icon):hover { color: rgb(255, 255, 255); background-color: rgb(21, 37, 54); }`
- `.ui.pagination .item:first-child:hover svg, .ui.pagination .item:last-child:hover svg { transform: translate(2px); }`
- `.Button-module-scss-module__gW1A4G__button:hover .Button-module-scss-module__gW1A4G__arrow { transform: translate(2px); }`
- `.Button-module-scss-module__gW1A4G__button:hover .Button-module-scss-module__gW1A4G__circle { color: currentcolor; }`
- `.Button-module-scss-module__gW1A4G__arrowLeft:hover .Button-module-scss-module__gW1A4G__arrow { transform: translate(-2px) rotate(180deg); }`

### The site's own links

`/` Commonwealth Fusion Systems · `/technology/` Technology · `/company/story/` Company · `/devens-campus/overview/` Locations · `/careers/` Careers · `/company/our-mission/` Company · `/news-and-media/` Press Releases · `/privacy-policy/` Privacy Policy

## 1440px — Home | Commonwealth Fusion Systems (page 4712px tall, window 1440×900)

**Fonts:** `nbInternationalMono` ×35 · `nbInternational` ×17 · `Arial` ×8

**Loaded faces:** nbInternational 300 normal · nbInternational 300 italic · nbInternational 400 normal · nbInternational 400 italic · nbInternational 600 normal · nbInternational 600 italic · nbInternational Fallback normal normal · nbInternationalMono 400 normal · nbInternationalMono Fallback normal normal · madSans 600 normal · madSans Fallback normal normal

**Font sizes:** `14px` ×35 · `13.3333px` ×8 · `16px` ×7 · `63.1156px` ×3 · `10px` ×3 · `12.5px` ×2 · `30.4701px` ×1 · `46.1754px` ×1

**Weights:** `400` ×53 · `300` ×7

**Size / line height:** `14px / 28px` ×14 · `14px / 21px` ×9 · `13.3333px / normal` ×8 · `14px / 16.8px` ×7 · `14px / 14px` ×5 · `16px / 24px` ×5 · `63.1156px / 75.7388px` ×3 · `16px / 20.8px` ×2 · `12.5px / 18.75px` ×2 · `10px / normal` ×2

**Letter spacing:** `normal` ×55 · `-0.08px` ×2 · `1.8px` ×2 · `1.6px` ×1

**Text colours:** `rgb(255, 255, 255)` ×33 · `rgb(51, 51, 51)` ×13 · `rgb(207, 109, 70)` ×11 · `rgba(255, 255, 255, 0.7)` ×2 · `rgb(16, 28, 41)` ×1

**Backgrounds:** `rgb(204, 200, 195)` ×400 · `rgb(21, 37, 54)` ×400 · `rgb(51, 51, 51)` ×200 · `rgb(16, 28, 41)` ×52 · `rgb(207, 109, 70)` ×5 · `rgb(255, 255, 255)` ×0

**Borders:** `1px solid rgb(255, 255, 255)` ×2 · `1px solid rgba(255, 255, 255, 0.22)` ×1 · `1px solid rgb(207, 109, 70)` ×1

**Radii:** `50%` ×5

**Shadows:** `rgba(0, 0, 0, 0.4) 0px 18px 42px 0px` ×1

**Gradients:** `radial-gradient(rgba(255, 255, 255, 0) 18%, rgb(255, 255, 255), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))` ×1 · `radial-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.75) 50%)` ×1

**Transitions:** `border-color 0.15s cubic-bezier(0.455` ×11 · `transform, color 0.15s cubic-bezier(0.455` ×3 · `color 0.15s cubic-bezier(0.455` ×3 · `background-color, color, border-color 0.15s cubic-bezier(0.455` ×2 · `max-width, opacity, padding-left 0.3s ease` ×1 · `all 0.2s ease` ×1 · `opacity 0.3s ease` ×1 · `opacity 1s ease` ×1

### Sections

1. `div` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “The world's largest and leading commercial fusion energy company” · original-1440-section-01.png
2. `div` at 900px, 1517px tall — “A breakthrough for commercial fusion energy” · original-1440-section-02.png
3. `div` at 2417px, 1396px tall — “Founded on values that guide our mission-driven team” · original-1440-section-03.png
4. `footer` at 3812px, 900px tall — “Join the power movement” · original-1440-section-04.png

### Media slots

- section 1: background image, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 2: image, 1022×681 (aspect 1.50), fit cover
- section 2: image, 327×218 (aspect 1.50), fit auto
- section 2: image, 819×598 (aspect 1.37), fit auto
- section 3: background image, 844×755 (aspect 1.12), fit cover

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: reveal on entering view — opacity 1.00→0.00, at scroll 450–450px · 3 elements · e.g. p “Revolutionary high-temperature supercond”; p “Proven science and manufacturing at scal”; p “Fusion’s rapidly expanding ecosystem inc”
- section -: fixed, at scroll pinned for 9 half-screens · e.g. aside “PRIVACY NOTICE A quick word on cookies. ”
- section 1: scrubbed with the scroll — scale 1.00→1.05, at scroll 450–3812px · e.g. div
- section 1: reveal on entering view — translateY 0→450px, translateX 0→720px, at scroll 450–450px · e.g. div

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `PageTransition-module-scss-module__INwY-W__fadeIn` on div “The world's largest and leading commerci”: 500ms (opacity)
- CSSAnimation `Topper-module-scss-module__tzx1ja__pulse` on div: 2000ms, loops forever (transform)
- CSSAnimation `CookieBanner-module-scss-module__iE5W0W__slide-in` on aside “PRIVACY NOTICE A quick word on cookies. ”: 420ms (transform, opacity)
- CSSAnimation `CookieBanner-module-scss-module__iE5W0W__bar-grow` on span: 560ms (transform)

**On hover:**

- a “Commonwealth Fusion Systems”: inner color: rgb(255, 255, 255) → rgb(21, 37, 54); inner background: rgba(0, 0, 0, 0) → rgb(255, 255, 255) · transition `all`
- a “Technology”: color: rgb(255, 255, 255) → rgb(21, 37, 54); background: rgba(0, 0, 0, 0) → rgb(255, 255, 255) · transition `all`
- a “Learn more”: inner transform: matrix(1, 0, 0, 1, 0, 0) → matrix(1, 0, 0, 1, 2, 0) · transition `all`
- a “press@cfs.energy”: border: rgb(255, 255, 255) rgb(255, 255, 255) rgb(207, 109, 70) → rgb(255, 255, 255) · transition `border-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- a “Company”: border: rgb(255, 255, 255) rgb(255, 255, 255) rgb(207, 109, 70) → rgb(255, 255, 255) · transition `border-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- a “Blog”: border: rgb(255, 255, 255) rgb(255, 255, 255) rgb(207, 109, 70) → rgb(255, 255, 255) · transition `border-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- a “Privacy policy”: color: rgb(207, 109, 70) → rgb(255, 255, 255); border: rgb(207, 109, 70) rgb(207, 109, 70) rgba(207, 109, 70, 0.5) → rgb(255, 255, 255) · transition `color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955), border-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- button “DECLINE”: color: rgba(255, 255, 255, 0.7) → rgb(255, 255, 255); border: rgba(255, 255, 255, 0.22) → rgb(255, 255, 255) · transition `background-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955), color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955), bor`
- button “ACCEPT”: background: rgb(207, 109, 70) → rgb(255, 255, 255); border: rgb(207, 109, 70) → rgb(255, 255, 255) · transition `background-color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955), color 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955), bor`

**:hover rules in the CSS (first 20):**

- `.CookieBanner-module-scss-module__iE5W0W__link:hover { border-color: currentcolor; }`
- `.CookieBanner-module-scss-module__iE5W0W__link:hover, .CookieBanner-module-scss-module__iE5W0W__link:focus-visible { color: rgb(255, 255, 255); outline: none; }`
- `.CookieBanner-module-scss-module__iE5W0W__accept:hover, .CookieBanner-module-scss-module__iE5W0W__accept:focus-visible { color: rgb(16, 28, 41); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.CookieBanner-module-scss-module__iE5W0W__reject:hover, .CookieBanner-module-scss-module__iE5W0W__reject:focus-visible { color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.MenuToggleButton-module-scss-module__z0enAa__button:hover .MenuToggleButton-module-scss-module__z0enAa__menuSvg:not(.MenuToggleButton-module-scss-module__z0enAa__close) .MenuToggleButton-module-scss-module__z0enAa__rect`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItemLink:focus-visible, .MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItemLink:hover { color: rg`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItemLink:focus-visible, .MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItemLink:hover { color: rgb(204,`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuButton:hover { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); }`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuButton:hover { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51); }`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__logoContainer:hover .MainNav-module-scss-module__ncNLla__logo { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-color:`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__logoContainer:hover .MainNav-module-scss-module__ncNLla__logo { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color: rg`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__menuItem:hover .MainNav-module-scss-module__ncNLla__menuItemLink { color: rgb(21, 37, 54); background-color: rgb(255, 255, 255); border-col`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__menuItem:hover .MainNav-module-scss-module__ncNLla__menuItemLink { color: rgb(204, 200, 195); background-color: rgb(51, 51, 51); border-color:`
- `.MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__subMenuLink:focus-visible, .MainNav-module-scss-module__ncNLla__forest .MainNav-module-scss-module__ncNLla__subMenuLink:hover { color: rgb(`
- `.MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__subMenuLink:focus-visible, .MainNav-module-scss-module__ncNLla__tan .MainNav-module-scss-module__ncNLla__subMenuLink:hover { color: rgb(204, 2`
- `.ui.pagination .item:not(:first-child):not(:last-child):not(.icon):hover { color: rgb(255, 255, 255); background-color: rgb(21, 37, 54); }`
- `.ui.pagination .item:first-child:hover svg, .ui.pagination .item:last-child:hover svg { transform: translate(2px); }`
- `.Button-module-scss-module__gW1A4G__button:hover .Button-module-scss-module__gW1A4G__arrow { transform: translate(2px); }`
- `.Button-module-scss-module__gW1A4G__button:hover .Button-module-scss-module__gW1A4G__circle { color: currentcolor; }`
- `.Button-module-scss-module__gW1A4G__arrowLeft:hover .Button-module-scss-module__gW1A4G__arrow { transform: translate(-2px) rotate(180deg); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Commonwealth Fusion Systems · `/technology/` Technology · `/company/story/` Company · `/devens-campus/overview/` Locations · `/careers/` Careers · `/company/our-mission/` Company · `/news-and-media/` Press Releases · `/privacy-policy/` Privacy Policy
