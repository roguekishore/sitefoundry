# Design capture: https://www.hhhusher.com/products

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — HHHusher Eliminate Hi-Hat Bleed (page 8989px tall, window 390×844)

**Fonts:** `UniversalSansDisplay` ×57 · `AeonikFono-Bold` ×47 · `Aeonik Fono` ×7 · `Aeonik-Black` ×7 · `UniversalSansText` ×3 · `Universal Sans Display` ×2

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `14.56px` ×44 · `20.8px` ×20 · `33.28px` ×19 · `29.12px` ×9 · `12.48px` ×7 · `78.5417px` ×7 · `14px` ×5 · `11.44px` ×3 · `18.72px` ×3 · `16.64px` ×2 · `18px` ×1 · `49.92px` ×1 · `43.68px` ×1 · `41.6px` ×1

**Weights:** `500` ×73 · `100` ×26 · `700` ×16 · `900` ×7 · `400` ×1

**Size / line height:** `14.56px / 16.744px` ×28 · `33.28px / 33.28px` ×18 · `14.56px / 18.928px` ×16 · `20.8px / 24.96px` ×11 · `20.8px / 27.04px` ×9 · `12.48px / 16.224px` ×7 · `78.5417px / 62.8333px` ×7 · `14px / 24px` ×5 · `29.12px / 37.856px` ×4 · `29.12px / 29.12px` ×4

**Letter spacing:** `normal` ×65 · `-0.1456px` ×28 · `-0.52px` ×11 · `-1.35417px` ×7 · `-0.5824px` ×4 · `-0.28px` ×2

**Text colours:** `rgb(33, 33, 33)` ×63 · `rgb(243, 241, 224)` ×57 · `rgb(255, 255, 255)` ×1 · `rgb(173, 144, 105)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×857 · `rgb(173, 144, 105)` ×400 · `rgb(243, 241, 224)` ×206 · `rgb(0, 0, 0)` ×200 · `rgb(255, 255, 255)` ×124 · `rgb(17, 17, 17)` ×72 · `rgb(255, 204, 0)` ×28 · `rgb(75, 75, 75)` ×21 · `rgba(244, 242, 226, 0.2)` ×15 · `rgba(244, 242, 226, 0.15)` ×2

**Borders:** `2px solid rgb(33, 33, 33)` ×22 · `2px solid rgba(33, 33, 33, 0.15)` ×8 · `2px solid rgb(243, 241, 224)` ×4 · `1px solid rgb(255, 204, 0)` ×3 · `1px solid rgb(243, 241, 224)` ×2 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(244, 242, 225, 0.15)` ×1 · `1px solid rgb(173, 144, 105)` ×1

**Radii:** `5px` ×16 · `1.08333px` ×5 · `4.16px` ×4 · `2px` ×3 · `6px` ×2 · `3.12px` ×2 · `2.16667px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `opacity 0.4s cubic-bezier(0.32` ×14 · `background-color, color 0.7s cubic-bezier(0.32` ×13 · `transform 0.3s cubic-bezier(0.32` ×13 · `opacity, transform 0.8s cubic-bezier(0.215` ×11 · `opacity 0.3s cubic-bezier(0.32` ×9 · `all 0.3s cubic-bezier(0.32` ×4 · `opacity 0.3s ease` ×4 · `color 0.3s cubic-bezier(0.32` ×4

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 1451px tall — “HHHusher Eliminate Hi-Hat Bleed” · original-products-390-section-01.png
3. `div` at 1451px, 3438px tall — “HHHusher reduces hi-hat bleed at the source, giving studio drummers cleaner reco” · original-products-390-section-02.png, original-products-390-section-03.png
4. `div#technical-specs` at 4889px, 1459px tall — “Technical Specification” · original-products-390-section-04.png
5. `div#parts` at 6348px, 854px tall — “01” · original-products-390-section-05.png
6. `div#faq` at 7202px, 1124px tall · original-products-390-section-06.png

### Media slots

- section 2: image, 346×203 (aspect 1.70), fit cover
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto
- section 5: image, 125×142 (aspect 0.88), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 21 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-78px, while pinned, at scroll 406–406px · e.g. div.common-header “BUY”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 8001–8140px · e.g. div.logo-container “H Husher”
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 1251–1251px · 9 elements · e.g. div.line “HHHusher reduces”; div.line “hi-hat bleed at the”; div.line “source, giving studio”
- section -: scrubbed with the scroll — opacity 0.00→0.00, translateY 37→0px, at scroll 406–1251px · 5 elements · e.g. div.lineChild “HHHusher reduces”; div.lineChild “hi-hat bleed at the”; div.lineChild “source, giving studio”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 37→0px, at scroll 827–1251px · 2 elements · e.g. div.lineChild “mixes, and true”; div.lineChild “professional sound.”
- section -: reveal on entering view — opacity 0.00→0.00, translateY 46→0px, at scroll 406–827px · 2 elements · e.g. div.lineChild “Technical”; div.lineChild “Specification”
- section -: reveal on entering view — translateX -21→0px, at scroll 406–827px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -31→0px, at scroll 406–827px · 2 elements · e.g. div.charChild “H”; div.charChild “u”
- section -: reveal on entering view — translateX -34→0px, at scroll 406–827px · e.g. div.charChild “s”
- section -: reveal on entering view — translateX -44→0px, at scroll 406–827px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -45→0px, at scroll 406–827px · e.g. div.charChild “e”
- section -: reveal on entering view — translateX -30→0px, at scroll 406–827px · e.g. div.charChild “r”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 827–827px · e.g. h3.ui-fragments-text-reveal.tagline “HHHusher reduces hi-hat bleed at the sou”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 42→0px, at scroll 1671–2095px · 8 elements · e.g. div.testimonial “Every drummer should have a HHHusher bec”; div.testimonial “As an engineer it has saved me many time”; div.testimonial ““As an engineer, the HHHusher is incredi”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 42→0px, at scroll 1671–2517px · 3 elements · e.g. div.testimonial “1000% the hhhusher-v2 is a must have game c”; div.testimonial “Big shouts out to my folks over at hhhus”; div.testimonial “I’ve had the hhhusher-v2 for a couple weeks”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 4203–4203px · e.g. h2.ui-fragments-text-reveal.h2 “Technical Specification”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 0→0px, at scroll 4625–5047px · e.g. div.modules-specs-table--single “HHHUSHER HEIGHT 50 MM (1.97 IN) DEPTH 18”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 4625–5469px · 4 elements · e.g. div.modules-specs-table--single “HI-HATS DIAMETER 14”, 15”, 16” WEIGHT TH”; div.modules-specs-table--single “HI-HATS POST DIAMETER 0.5” TO 1.0” TYPE ”; div.modules-specs-table--single “OTHER REQUIREMENTS SIDE OF THE DRUMMER L”
- section 6: reveal on entering view — opacity 1.00→0.15, at scroll 8001–8001px · e.g. li.h4.-active “01 Product”
- section 6: reveal on entering view — opacity 0.15→1.00, at scroll 8001–8001px · e.g. li.h4 “02 Features”

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
- `.modules-products-hero .slider-controls .arrows button[data-v-e4bb6c42]:hover { background: transparent; color: rgb(243, 241, 224); }`
- `.modules-products-hero .buy-block .qty button[data-v-e4bb6c42]:hover { background-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.modules-products-hero .buy-block .checkoutBtn[data-v-e4bb6c42]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-accordion .title:hover .ui-fragments-button-icon { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active) { background: rgba(2`
- `.cky-consent-bar button:hover, .cky-modal.cky-modal-open button:hover, .cky-consent-bar button:focus, .cky-modal.cky-modal-open button:focus { text-decoration: none; }`

### The site's own links

`/` Overview · `/products` Products

## 1440px — HHHusher Eliminate Hi-Hat Bleed (page 8092px tall, window 1440×900)

**Fonts:** `UniversalSansDisplay` ×57 · `AeonikFono-Bold` ×51 · `Aeonik Fono` ×7 · `Aeonik-Black` ×7 · `UniversalSansText` ×3 · `Universal Sans Display` ×2

**Loaded faces:** UniversalSansDisplay 500 normal · AeonikFono-Regular 700 normal · AeonikFono-Bold 700 normal · Aeonik-Black 900 normal · UniversalSansText normal normal

**Font sizes:** `14px` ×34 · `57px` ×19 · `12px` ×14 · `29px` ×11 · `20px` ×11 · `24px` ×9 · `290px` ×7 · `28px` ×4 · `43px` ×4 · `27px` ×3 · `19px` ×3 · `16px` ×2 · `18px` ×1 · `101px` ×1

**Weights:** `500` ×73 · `100` ×26 · `700` ×20 · `900` ×7 · `400` ×1

**Size / line height:** `14px / 16.1px` ×28 · `57px / 57px` ×18 · `12px / 15.6px` ×12 · `29px / 34.8px` ×11 · `20px / 26px` ×11 · `24px / 31.2px` ×9 · `290px / 232px` ×7 · `14px / 24px` ×5 · `28px / 36.4px` ×4 · `43px / 43px` ×4

**Letter spacing:** `normal` ×69 · `-0.14px` ×28 · `-0.6px` ×11 · `-5px` ×7 · `-0.56px` ×4 · `-0.28px` ×2

**Text colours:** `rgb(33, 33, 33)` ×63 · `rgb(243, 241, 224)` ×61 · `rgb(255, 255, 255)` ×1 · `rgb(173, 144, 105)` ×1 · `rgba(244, 242, 226, 0.5)` ×1

**Backgrounds:** `rgb(33, 33, 33)` ×1327 · `rgb(173, 144, 105)` ×400 · `rgb(243, 241, 224)` ×215 · `rgb(0, 0, 0)` ×200 · `rgb(17, 17, 17)` ×200 · `rgb(255, 255, 255)` ×92 · `rgba(244, 242, 226, 0.2)` ×20 · `rgba(244, 242, 226, 0.15)` ×19 · `rgb(255, 204, 0)` ×15 · `rgb(75, 75, 75)` ×7

**Borders:** `2px solid rgb(33, 33, 33)` ×22 · `2px solid rgba(33, 33, 33, 0.15)` ×8 · `2px solid rgb(243, 241, 224)` ×4 · `1px solid rgb(255, 204, 0)` ×3 · `2px solid rgba(0, 0, 0, 0)` ×2 · `1px solid rgb(243, 241, 224)` ×2 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(244, 242, 225, 0.15)` ×1

**Radii:** `5px` ×20 · `4px` ×9 · `2px` ×3 · `6px` ×2 · `3px` ×2 · `8px` ×1

**Shadows:** `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px` ×1

**Transitions:** `opacity 0.4s cubic-bezier(0.32` ×14 · `background-color, color 0.7s cubic-bezier(0.32` ×12 · `transform 0.3s cubic-bezier(0.32` ×12 · `opacity, transform 0.8s cubic-bezier(0.215` ×11 · `opacity 0.3s cubic-bezier(0.32` ×9 · `color 0.3s cubic-bezier(0.32` ×8 · `all 0.3s cubic-bezier(0.32` ×5 · `opacity 0.3s ease` ×4

### Sections

1. `header` at 0px, 0px tall — “Your order”
2. `div` at 0px, 818px tall — “HHHusher Eliminate Hi-Hat Bleed” · original-products-1440-section-01.png
3. `div` at 818px, 3579px tall — “HHHusher reduces hi-hat bleed at the source, giving studio drummers cleaner reco” · original-products-1440-section-02.png, original-products-1440-section-03.png
4. `div#technical-specs` at 4398px, 1177px tall — “Technical Specification” · original-products-1440-section-04.png
5. `div#parts` at 5574px, 953px tall — “01” · original-products-1440-section-05.png
6. `div#faq` at 6527px, 963px tall · original-products-1440-section-06.png

### Media slots

- section 2: image, 726×427 (aspect 1.70), fit cover
- section 2: image, 171×111 (aspect 1.54), fit cover, radius 4px
- section 2: image, 173×112 (aspect 1.54), fit cover, radius 4px
- section 2: image, 173×112 (aspect 1.54), fit cover, radius 4px
- section 2: image, 173×112 (aspect 1.54), fit cover, radius 4px
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto
- section 5: image, 310×352 (aspect 0.88), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 17 half-screens · 4 elements · e.g. div.cky-consent-container.cky-box-bottom-left “We use cookies on this site We and our p”; div.cky-modal; div.c.common-footer “Stay in the Loop SUBSCRIBE I agree to re”
- section -: reveal on entering view — translateY 0→-100px, while pinned, at scroll 433–433px · e.g. div.common-header “OVERVIEW PRODUCTS FAQ BUY $CAD CHFCHF €E”
- section -: reveal on entering view — opacity 0.00→1.00, at scroll 7175–7192px · e.g. div.logo-container “H Husher”
- section -: scrubbed with the scroll — translateX -70→0px, at scroll 7175–7192px · e.g. div.mask-container
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 882–882px · 5 elements · e.g. div.line “HHHusher reduces hi-hat bleed at the sou”; div.line “studio drummers cleaner recordings, tigh”; div.line “and true professional sound.”
- section -: reveal on entering view — opacity 0.79→0.00, translateY 13→0px, at scroll 433–882px · e.g. div.lineChild “HHHusher reduces hi-hat bleed at the sou”
- section -: reveal on entering view — opacity 0.65→0.00, translateY 22→0px, at scroll 433–882px · e.g. div.lineChild “studio drummers cleaner recordings, tigh”
- section -: reveal on entering view — opacity 0.46→0.00, translateY 34→0px, at scroll 433–882px · e.g. div.lineChild “and true professional sound.”
- section -: reveal on entering view — opacity 0.79→0.00, translateY 17→0px, at scroll 433–882px · e.g. div.lineChild “Technical”
- section -: reveal on entering view — opacity 0.65→0.00, translateY 29→0px, at scroll 433–882px · e.g. div.lineChild “Specification”
- section -: reveal on entering view — translateX -66→0px, at scroll 433–882px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -99→0px, at scroll 433–882px · e.g. div.charChild “H”
- section -: reveal on entering view — translateX -101→0px, at scroll 433–882px · e.g. div.charChild “u”
- section -: reveal on entering view — translateX -111→0px, at scroll 433–882px · 2 elements · e.g. div.charChild “s”; div.charChild “r”
- section -: reveal on entering view — translateX -146→0px, at scroll 433–882px · e.g. div.charChild “h”
- section -: reveal on entering view — translateX -167→0px, at scroll 433–882px · e.g. div.charChild “e”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 433–433px · e.g. h3.ui-fragments-text-reveal.tagline “HHHusher reduces hi-hat bleed at the sou”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 40→0px, at scroll 882–1332px · 8 elements · e.g. div.testimonial “Every drummer should have a HHHusher bec”; div.testimonial “As an engineer it has saved me many time”; div.testimonial ““As an engineer, the HHHusher is incredi”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 40→0px, at scroll 882–1782px · 3 elements · e.g. div.testimonial “1000% the hhhusher-v2 is a must have game c”; div.testimonial “Big shouts out to my folks over at hhhus”; div.testimonial “I’ve had the hhhusher-v2 for a couple weeks”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 4032–4032px · e.g. h2.ui-fragments-text-reveal.h2 “Technical Specification”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 0→0px, at scroll 4032–4934px · 5 elements · e.g. span “Before you go ahead and invest in a HHHu”; div.modules-specs-table--single “HHHUSHER HEIGHT 50 MM (1.97 IN) DEPTH 18”; div.modules-specs-table--single “HI-HATS DIAMETER 14”, 15”, 16” WEIGHT TH”
- section 4: reveal on entering view — translateY 0→0px, at scroll 4032–4482px · 12 elements · e.g. div.specs-content--single “HEIGHT 50 MM (1.97 IN)”; div.specs-content--single “DEPTH 180 MM (7.08 IN)”; div.specs-content--single “WIDTH 107 MM (4.21 IN)”
- section 5: reveal on entering view — translateY 0→450px, translateX 0→360px, while pinned, at scroll 4934–4934px · e.g. div.modules-parts-img-gallery
- section 5: reveal on entering view — opacity 0.00→0.00, at scroll 5384–5833px · 2 elements · e.g. picture.ui-fragments-image.isLoaded; picture.ui-fragments-image.isLoaded
- section 5: reveal on entering view — opacity 0.00→0.15, translateY 50→0px, at scroll 5384–5833px · 4 elements · e.g. li.stagger “01 Main Structural Frame”; li.stagger “02 Bottom Neoprene Sound Barier”; li.stagger “07 Screw”
- section 5: reveal on entering view — translateY 50→0px, at scroll 5384–5833px · 5 elements · e.g. li.stagger “03 Upper Neoprene Lip”; li.stagger “04 Interior Sound Damping Lining”; li.stagger “05 Velcro for Microphone”
- section 6: pinned (sticky), at scroll pinned for 2 half-screens · e.g. ul “01 Product 02 Features”
- section 6: reveal on entering view — opacity 1.00→0.15, at scroll 7175–7175px · e.g. li.h4.-active “01 Product”
- section 6: reveal on entering view — opacity 0.15→1.00, at scroll 7175–7175px · e.g. li.h4 “02 Features”

**On hover:**

- button “Customize”: opacity: 1 → 0.8 · transition `all`
- button “Reject All”: opacity: 1 → 0.8 · transition `all`
- button “Accept All”: opacity: 1 → 0.8 · transition `all`
- a “OVERVIEW”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “PRODUCTS”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FAQ”: color: rgb(243, 241, 224) → rgb(255, 204, 0); border: rgb(243, 241, 224) → rgb(255, 204, 0); inner color: rgb(243, 241, 224) → rgb(255, 204, 0); inner border: rgb(243, 241, 224) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button “BUY”: color: rgb(33, 33, 33) → rgb(255, 204, 0); background: rgb(255, 204, 0) → rgba(0, 0, 0, 0); inner color: rgb(33, 33, 33) → rgb(255, 204, 0); inner border: rgb(33, 33, 33) → rgb(255, 204, 0) · transition `color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FR”: background: rgba(244, 242, 226, 0.15) → rgba(0, 0, 0, 0); border: rgba(0, 0, 0, 0) → rgb(243, 241, 224) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button: color: rgb(173, 144, 105) → rgb(242, 239, 222); border: rgb(173, 144, 105) → rgb(242, 239, 222); inner color: rgb(173, 144, 105) → rgb(242, 239, 222); inner border: rgb(173, 144, 105) → rgb(242, 239, 222) · transition `background-color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1), color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button: color: rgb(173, 144, 105) → rgb(242, 239, 222); border: rgb(173, 144, 105) → rgb(242, 239, 222); inner color: rgb(173, 144, 105) → rgb(242, 239, 222); inner border: rgb(173, 144, 105) → rgb(242, 239, 222) · transition `background-color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1), color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button: color: rgb(33, 33, 33) → rgb(238, 236, 219); background: rgb(243, 241, 224) → rgb(38, 38, 38); inner color: rgb(33, 33, 33) → rgb(238, 236, 219); inner border: rgb(33, 33, 33) → rgb(238, 236, 219) · transition `background-color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1), color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1)`
- button: color: rgb(33, 33, 33) → rgb(239, 237, 220); background: rgb(243, 241, 224) → rgb(37, 37, 37); inner color: rgb(33, 33, 33) → rgb(239, 237, 220); inner border: rgb(33, 33, 33) → rgb(239, 237, 220) · transition `background-color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1), color 0.7s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “CONTINUE TO CHECKOUT”: color: rgb(33, 33, 33) → rgb(255, 204, 0); background: rgb(255, 204, 0) → rgba(0, 0, 0, 0); inner color: rgb(33, 33, 33) → rgb(255, 204, 0); inner border: rgb(33, 33, 33) → rgb(255, 204, 0) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`
- a “FAQ”: color: rgb(33, 33, 33) → rgb(255, 204, 0); background: rgb(255, 204, 0) → rgba(0, 0, 0, 0); inner color: rgb(33, 33, 33) → rgb(255, 204, 0); inner border: rgb(33, 33, 33) → rgb(255, 204, 0) · transition `0.3s cubic-bezier(0.32, 0.94, 0.6, 1)`

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
- `.modules-products-hero .slider-controls .arrows button[data-v-e4bb6c42]:hover { background: transparent; color: rgb(243, 241, 224); }`
- `.modules-products-hero .buy-block .qty button[data-v-e4bb6c42]:hover { background-color: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.modules-products-hero .buy-block .checkoutBtn[data-v-e4bb6c42]:hover { background: transparent; color: rgb(255, 204, 0); }`
- `.ui-fragments-accordion .title:hover .ui-fragments-button-icon { background: rgb(33, 33, 33); color: rgb(243, 241, 224); }`
- `.modules-parts-no-touch ul li:hover { opacity: 1 !important; }`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active) { background: rgba(2`

### Horizontal overflow

- 360px: **overflows** (page 710px wide) — div.cky-preference-center (right edge 665px), div.modules-parts-img-gallery (right edge 710px)
- 768px: **overflows** (page 1107px wide) — div.modules-parts-img-gallery (right edge 1107px)
- 1024px: fits

### The site's own links

`/` OVERVIEW · `/products` PRODUCTS
