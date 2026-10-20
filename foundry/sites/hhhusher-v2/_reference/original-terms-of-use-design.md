# Design capture: https://www.hhhusher.com/terms-of-use

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Terms of Use | HHHusher – Hi-Hat Isolation for Drummers (page 3504px tall, window 390×844)

**Fonts:** `UniversalSansDisplay` ×22 · `Aeonik-Black` ×7 · `AeonikFono-Bold` ×6 · `UniversalSansText` ×2

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `16.64px` ×10 · `78.5417px` ×7 · `12.48px` ×6 · `14px` ×5 · `29.12px` ×4 · `18px` ×1 · `49.92px` ×1 · `41.6px` ×1 · `20.8px` ×1 · `14.56px` ×1

**Weights:** `500` ×16 · `700` ×8 · `900` ×7 · `100` ×5 · `400` ×1

**Size / line height:** `16.64px / 21.632px` ×10 · `78.5417px / 62.8333px` ×7 · `12.48px / 16.224px` ×6 · `14px / 24px` ×5 · `29.12px / 29.12px` ×4 · `18px / 24px` ×1 · `49.92px / 37.44px` ×1 · `41.6px / 41.6px` ×1 · `20.8px / 27.04px` ×1 · `14.56px / 18.928px` ×1

**Letter spacing:** `normal` ×17 · `-0.3328px` ×10 · `-1.35417px` ×7 · `-0.28px` ×2 · `-0.36px` ×1

**Text colours:** `rgb(33, 33, 33)` ×20 · `rgb(243, 241, 224)` ×15 · `rgb(255, 255, 255)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×503 · `rgb(243, 241, 224)` ×201 · `rgb(255, 255, 255)` ×124 · `rgba(244, 242, 226, 0.2)` ×15 · `rgb(255, 204, 0)` ×2 · `rgba(244, 242, 226, 0.15)` ×2

**Borders:** `2px solid rgb(33, 33, 33)` ×3 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgb(255, 204, 0)` ×1 · `1px solid rgba(244, 242, 226, 0.2)` ×1 · `1px solid rgb(243, 241, 224)` ×1

**Radii:** `5px` ×5 · `2px` ×3 · `6px` ×2 · `3.12px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `color 0.3s cubic-bezier(0.32` ×4 · `all 0.3s cubic-bezier(0.32` ×2 · `padding-top 0.4s cubic-bezier(0.32` ×1 · `background-color, color 0.7s cubic-bezier(0.32` ×1 · `transform 0.3s cubic-bezier(0.32` ×1

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 118px tall — “Terms of use” · original-terms-of-use-390-section-01.png
3. `p` at 191px, 670px tall · original-terms-of-use-390-section-02.png
4. `p` at 912px, 130px tall · original-terms-of-use-390-section-03.png
5. `p` at 1060px, 173px tall · original-terms-of-use-390-section-04.png
6. `p` at 1284px, 411px tall · original-terms-of-use-390-section-05.png
7. `p` at 1713px, 108px tall · original-terms-of-use-390-section-06.png
8. `p` at 1872px, 195px tall · original-terms-of-use-390-section-07.png
9. `p` at 2085px, 151px tall · original-terms-of-use-390-section-08.png
10. `p` at 2254px, 151px tall · original-terms-of-use-390-section-09.png
11. `p` at 2424px, 260px tall · original-terms-of-use-390-section-10.png

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 8 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-78px, while pinned, at scroll 408–408px · e.g. div.common-header “BUY”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 2517–2655px · e.g. div.logo-container “H Husher”
- section -: reveal on entering view — translateX -17→0px, at scroll 408–827px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -25→0px, at scroll 408–827px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -26→0px, at scroll 408–827px · e.g. div.charChild “u”
- section -: reveal on entering view — translateX -28→0px, at scroll 408–827px · e.g. div.charChild “s”
- section -: reveal on entering view — translateX -37→0px, at scroll 408–827px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -43→0px, at scroll 408–827px · e.g. div.charChild “e”
- section -: reveal on entering view — translateX -30→0px, at scroll 408–827px · e.g. div.charChild “r”

**:hover rules in the CSS (first 20):**

- `.t-wysiwyg a:focus, .t-wysiwyg a:hover { color: rgb(33, 33, 33); }`
- `.common-navigation ul.mainmenu .ui-fragments-button:hover { color: rgb(255, 204, 0); }`
- `.common-navigation ul.mainmenu .nav-buy-item .common-shop-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button[data-v-67fe2d9a]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button:hover .shop-amount[data-v-67fe2d9a] { background-color: rgb(255, 204, 0); color: rgb(33, 33, 33); }`
- `.common-lang-switch:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-button-icon:focus-visible, .ui-fragments-button-icon:hover { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.common-footer .footer-links .link:hover { color: rgb(255, 204, 0); }`
- `.ui-fragments-accordion .title:hover .ui-fragments-button-icon { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.app-currency-switcher__select[data-v-0ac859d4]:focus-visible, .app-currency-switcher__select[data-v-0ac859d4]:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-product-line .qty button[data-v-38ac0cc4]:hover { background-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.c-shop-modal .checkoutBtn[data-v-26e73037]:hover { background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active) { background: rgba(2`
- `.cky-consent-bar button:hover, .cky-modal.cky-modal-open button:hover, .cky-consent-bar button:focus, .cky-modal.cky-modal-open button:focus { text-decoration: none; }`

### The site's own links

`/` Overview · `/products` Products · `/terms-of-use` FAQ

## 1440px — Terms of Use | HHHusher – Hi-Hat Isolation for Drummers (page 3081px tall, window 1440×900)

**Fonts:** `UniversalSansDisplay` ×22 · `AeonikFono-Bold` ×10 · `Aeonik-Black` ×7 · `UniversalSansText` ×2

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `12px` ×10 · `16px` ×10 · `290px` ×7 · `14px` ×6 · `43px` ×4 · `18px` ×1 · `101px` ×1 · `76px` ×1 · `24px` ×1

**Weights:** `500` ×16 · `700` ×12 · `900` ×7 · `100` ×5 · `400` ×1

**Size / line height:** `12px / 15.6px` ×10 · `16px / 20.8px` ×10 · `290px / 232px` ×7 · `14px / 24px` ×5 · `43px / 43px` ×4 · `18px / 24px` ×1 · `101px / 75.75px` ×1 · `76px / 76px` ×1 · `24px / 31.2px` ×1 · `14px / 18.2px` ×1

**Letter spacing:** `normal` ×21 · `-0.32px` ×10 · `-5px` ×7 · `-0.28px` ×2 · `-0.36px` ×1

**Text colours:** `rgb(33, 33, 33)` ×20 · `rgb(243, 241, 224)` ×19 · `rgb(255, 255, 255)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×1127 · `rgb(243, 241, 224)` ×211 · `rgb(255, 255, 255)` ×92 · `rgba(244, 242, 226, 0.2)` ×20 · `rgba(244, 242, 226, 0.15)` ×19 · `rgb(255, 204, 0)` ×2

**Borders:** `2px solid rgb(33, 33, 33)` ×3 · `2px solid rgba(0, 0, 0, 0)` ×2 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgb(255, 204, 0)` ×1 · `1px solid rgba(244, 242, 226, 0.2)` ×1 · `1px solid rgb(243, 241, 224)` ×1

**Radii:** `5px` ×9 · `2px` ×3 · `6px` ×2 · `3px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `color 0.3s cubic-bezier(0.32` ×8 · `all 0.3s cubic-bezier(0.32` ×3 · `padding-top 0.4s cubic-bezier(0.32` ×1

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 2360px tall — “Terms of Use | HHHusher Hi-Hat Isolation” · original-terms-of-use-1440-section-01.png, original-terms-of-use-1440-section-02.png

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 6 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-100px, while pinned, at scroll 433–433px · e.g. div.common-header “OVERVIEW PRODUCTS FAQ BUY $CAD CHFCHF €E”
- section -: scrubbed with the scroll — opacity 0.00→1.00, translateY -95→0px, at scroll 433–1784px · e.g. div.c.common-header__inner “OVERVIEW PRODUCTS FAQ BUY $CAD CHFCHF €E”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 2166–2181px · e.g. div.logo-container “H Husher”
- section -: scrubbed with the scroll — translateX -70→0px, at scroll 2166–2181px · e.g. div.mask-container
- section -: reveal on entering view — scale 0.04→0.00, at scroll 433–433px · e.g. div.stagger.loader-panel
- section -: reveal on entering view — scale 0.08→0.00, at scroll 433–433px · e.g. div.stagger.loader-panel
- section -: reveal on entering view — scale 0.19→0.00, at scroll 433–433px · e.g. div.stagger.loader-panel
- section -: reveal on entering view — scale 0.49→0.00, at scroll 433–433px · e.g. div.stagger.loader-panel
- section -: reveal on entering view — translateX -42→0px, at scroll 433–884px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -65→0px, at scroll 433–884px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -68→0px, at scroll 433–884px · e.g. div.charChild “u”
- section -: reveal on entering view — translateX -75→0px, at scroll 433–884px · e.g. div.charChild “s”
- section -: reveal on entering view — translateX -102→0px, at scroll 433–884px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -120→0px, at scroll 433–884px · e.g. div.charChild “e”
- section -: reveal on entering view — translateX -95→0px, at scroll 433–884px · e.g. div.charChild “r”

**On hover:**

- button “Customize”: opacity: 1 → 0.8 · transition `all`
- button “Reject All”: opacity: 1 → 0.8 · transition `all`
- button “Accept All”: opacity: 1 → 0.8 · transition `all`
- a “OVERVIEW”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FAQ”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button “BUY”: color: rgb(33, 33, 33) → rgb(255, 204, 0); background: rgb(255, 204, 0) → rgba(0, 0, 0, 0); inner color: rgb(33, 33, 33) → rgb(255, 204, 0); inner border: rgb(33, 33, 33) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FR”: background: rgba(244, 242, 226, 0.15) → rgba(0, 0, 0, 0); border: rgba(0, 0, 0, 0) → rgb(243, 241, 224) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`

**:hover rules in the CSS (first 20):**

- `.t-wysiwyg a:focus, .t-wysiwyg a:hover { color: rgb(33, 33, 33); }`
- `.common-navigation ul.mainmenu .ui-fragments-button:hover { color: rgb(255, 204, 0); }`
- `.common-navigation ul.mainmenu .nav-buy-item .common-shop-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-button:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button[data-v-67fe2d9a]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.common-shop-button:hover .shop-amount[data-v-67fe2d9a] { background-color: rgb(255, 204, 0); color: rgb(33, 33, 33); }`
- `.common-lang-switch:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-button-icon:focus-visible, .ui-fragments-button-icon:hover { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.common-footer .footer-links .link:hover { color: rgb(255, 204, 0); }`
- `.ui-fragments-accordion .title:hover .ui-fragments-button-icon { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.app-currency-switcher__select[data-v-0ac859d4]:focus-visible, .app-currency-switcher__select[data-v-0ac859d4]:hover { background: transparent; border: 2px solid rgb(243, 241, 224); color: rgb(243, 241, 224); }`
- `.ui-fragments-product-line .qty button[data-v-38ac0cc4]:hover { background-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.c-shop-modal .checkoutBtn[data-v-26e73037]:hover { background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active) { background: rgba(2`
- `.cky-consent-bar button:hover, .cky-modal.cky-modal-open button:hover, .cky-consent-bar button:focus, .cky-modal.cky-modal-open button:focus { text-decoration: none; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` OVERVIEW · `/products` PRODUCTS · `/terms-of-use` FAQ
