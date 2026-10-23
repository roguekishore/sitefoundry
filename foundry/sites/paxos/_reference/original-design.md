# Design capture: https://paxos.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Paxos | Regulated Blockchain Infrastructure (page 6867px tall, window 390×844)

**Fonts:** `Geist` ×80 · `sans-serif` ×3 · `Geist Variable` ×3 · `Muli` ×2

**Loaded faces:** Geist 300 normal · Mulish 500 italic · Mulish 400 normal · Geist Variable 100 900 normal · Fragment Mono 400 normal · Geist 900 normal · Geist Mono 400 normal · Geist Mono 500 normal · Geist Mono 600 normal · Geist Mono 700 normal · Geist 400 normal · Geist 700 normal · Geist 500 normal · Geist 600 normal · Feature Deck Web Regular 400 normal · Feature Deck Web Medium 500 normal · Söhne Buch 400 normal · Söhne Kräftig 500 normal · Söhne Kräftig normal normal · Inter 400 normal

**Font sizes:** `12px` ×40 · `14.4px` ×10 · `13px` ×9 · `20px` ×8 · `10px` ×5 · `28px` ×4 · `14px` ×3 · `15px` ×3 · `24px` ×3 · `19px` ×1 · `16px` ×1 · `35px` ×1

**Weights:** `400` ×73 · `500` ×12 · `300` ×2 · `700` ×1

**Size / line height:** `12px / 13.8px` ×35 · `14.4px / 19px` ×10 · `20px / 21px` ×8 · `13px / 22px` ×6 · `28px / 34px` ×4 · `12px / 22px` ×4 · `10px / 17px` ×4 · `14px / 24px` ×3 · `15px / 20px` ×3 · `24px / 29px` ×3

**Letter spacing:** `normal` ×42 · `-0.288px` ×10 · `-0.13px` ×9 · `-0.4px` ×8 · `-0.56px` ×4 · `-0.12px` ×4

**Text colours:** `rgb(25, 40, 47)` ×47 · `rgb(130, 131, 133)` ×23 · `rgb(67, 73, 78)` ×8 · `rgb(255, 255, 255)` ×5 · `rgb(0, 0, 0)` ×5

**Backgrounds:** `rgb(255, 255, 255)` ×1060 · `rgba(246, 248, 251, 0.4)` ×406 · `rgb(233, 235, 239)` ×280 · `rgb(246, 248, 251)` ×114 · `rgba(246, 248, 251, 0.2)` ×51 · `rgb(67, 73, 78)` ×15 · `rgb(25, 40, 47)` ×13 · `rgba(255, 255, 255, 0)` ×7

**Borders:** `2px solid rgb(67, 73, 78)` ×2 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `8px` ×17 · `91.85px` ×6 · `2px` ×2 · `100px` ×2 · `100000px` ×2

**Gradients:** `linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)` ×3 · `radial-gradient(69% 69%, rgb(255, 255, 255) 0%, rgba(0, 148, 216, 0) 100%)` ×1 · `radial-gradient(69% 69%, rgba(161, 214, 44, 0.8) 0%, rgba(0, 148, 216, 0) 100%)` ×1 · `linear-gradient(47deg, rgba(246, 248, 251, 0.2) 0%, rgba(246, 248, 251, 0.2) 50%, rgba(246, 248, 251, 0.2) 100%)` ×1

**Transitions:** `color 0.4s cubic-bezier(0.44` ×28 · `color, background-color, text-decoration-color 0.15s ease` ×1 · `opacity, transform 0.15s ease` ×1

### Sections

1. `div` at 80px, 650px tall — “Blockchain Infrastructure for Enterprises” · original-390-section-01.png
2. `div` at 730px, 1461px tall — “A suite of regulated blockchain products” · original-390-section-02.png
3. `div` at 2191px, 1665px tall — “Regulated, fully-backed digital assets” · original-390-section-03.png
4. `div` at 3856px, 1088px tall — “Technology built within global regulatory structures” · original-390-section-04.png
5. `div` at 4944px, 484px tall — “Learn how Paxos works with PayPal to build innovative crypto products” · original-390-section-05.png
6. `div` at 5428px, 305px tall — “Build a more open, trusted and transparent financial system with Paxos” · original-390-section-06.png

### Media slots

- section 1: image, 350×539 (aspect 0.65), fit cover, radius 8px
- section 1: image, 490×370 (aspect 1.32), fit cover
- section 2: image, 348×348 (aspect 1.00), fit cover
- section 2: image, 286×286 (aspect 1.00), fit cover
- section 4: image, 350×180 (aspect 1.94), fit cover, radius 8px
- section 5: video loop, 350×199 (aspect 1.75), fit cover, radius 8px
- section 6: image, 390×305 (aspect 1.28), fit cover
- section -: embed, 280×188 (aspect 1.49), fit auto

### Motion

**Libraries and media seen:** Framer site (Framer Motion) · 1 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 15 half-screens · 2 elements · e.g. div.cky-consent-container.cky-banner-bottom “We value your privacy We use cookies to ”; div.cky-modal
- section -: pinned (sticky), at scroll pinned for 15 half-screens · e.g. div.framer-f6uscd-container
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→-100px, at scroll 422–422px · e.g. div.framer-fBgHK.framer-n7p08c
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 3376–3376px · 2 elements · e.g. div.framer-1le68x “View Reports”; div.framer-xzip4o “View Reports”
- section 1: reveal on entering view — translateX -121→-143px, at scroll 422–844px · e.g. ul

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on ul: 19800ms, loops forever (transform)

**:hover rules in the CSS (first 20):**

- `a.framer-text:hover, span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-text-color-rgb,var(--framer-link-text-color,var(--framer-`
- `code.framer-text a.framer-text:hover, code.framer-text span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-text-color-rgb,var(--fr`
- `a.framer-text[data-framer-page-link-current]:hover, span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-current-text-`
- `code.framer-text a.framer-text[data-framer-page-link-current]:hover, code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]), code.framer-text span.framer-text[data-fram`
- `[data-framer-component-type="Text"] a:hover, [data-framer-component-type="Text"] a div span:hover, [data-framer-component-type="Text"] a span span span:hover, [data-framer-component-type="Text"] a p span span:hover, [dat`
- `a.framer-text:where(:not(.framer-image)):hover, a.framer-text:hover span.framer-text:not([data-text-fill]), span.framer-text[data-nested-link]:hover, span.framer-text[data-nested-link]:hover span.framer-text:not([data-te`
- `a.framer-text:hover, span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-text-color,var(--framer-blockquote-text-color,var(--framer-text-color,#000)))); text-decoration-`
- `code.framer-text a.framer-text:hover, code.framer-text span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-text-color,var(--framer-blockquote-text-color,var(--framer-cod`
- `a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover, a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]), span.framer-text[data-framer-page-link-current]:ho`
- `a.framer-text[data-framer-page-link-current]:hover, span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-current-text-color,var(--framer-link-text-color,var(`
- `code.framer-text a.framer-text[data-framer-page-link-current]:hover, code.framer-text span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-current-text-color`
- `[data-framer-component-type="DeprecatedRichText"] a:hover, [data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) { font-family: var(--framer-link-hover-font-family,var(--framer-link-font-fa`
- `[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover, [data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nest`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active) { background: rgba(2`
- `.cky-consent-bar button:hover, .cky-modal.cky-modal-open button:hover, .cky-consent-bar button:focus, .cky-modal.cky-modal-open button:focus { text-decoration: none; }`

## 1440px — Paxos | Regulated Blockchain Infrastructure (page 5418px tall, window 1440×900)

**Fonts:** `Geist` ×88 · `sans-serif` ×3 · `Geist Variable` ×3 · `Muli` ×2

**Loaded faces:** Geist 300 normal · Mulish 500 italic · Mulish 400 normal · Geist Variable 100 900 normal · Fragment Mono 400 normal · Geist 900 normal · Geist Mono 400 normal · Geist Mono 500 normal · Geist Mono 600 normal · Geist Mono 700 normal · Geist 400 normal · Geist 700 normal · Geist 500 normal · Geist 600 normal · Feature Deck Web Regular 400 normal · Feature Deck Web Medium 500 normal · Söhne Buch 400 normal · Söhne Kräftig 500 normal · Söhne Kräftig normal normal · Inter 400 normal

**Font sizes:** `12px` ×37 · `16px` ×25 · `14px` ×9 · `24px` ×8 · `18px` ×4 · `48px` ×4 · `10px` ×4 · `32px` ×3 · `19px` ×1 · `64px` ×1

**Weights:** `400` ×81 · `500` ×12 · `300` ×2 · `700` ×1

**Size / line height:** `12px / 13.8px` ×35 · `16px / 22px` ×14 · `16px / 23px` ×10 · `24px / 30px` ×8 · `14px / 22px` ×6 · `18px / 24px` ×4 · `48px / 54px` ×4 · `10px / 17px` ×4 · `14px / 24px` ×3 · `32px / 38px` ×3

**Letter spacing:** `normal` ×42 · `-0.16px` ×14 · `-0.32px` ×10 · `-0.48px` ×8 · `-0.14px` ×6 · `-0.36px` ×4

**Text colours:** `rgb(25, 40, 47)` ×53 · `rgb(130, 131, 133)` ×24 · `rgb(67, 73, 78)` ×8 · `rgb(0, 0, 0)` ×6 · `rgb(255, 255, 255)` ×5

**Backgrounds:** `rgb(255, 255, 255)` ×1095 · `rgba(246, 248, 251, 0.4)` ×436 · `rgb(233, 235, 239)` ×400 · `rgb(246, 248, 251)` ×173 · `rgba(246, 248, 251, 0.2)` ×124 · `rgb(25, 40, 47)` ×14 · `rgba(255, 255, 255, 0)` ×7 · `rgb(67, 73, 78)` ×5

**Borders:** `2px solid rgb(67, 73, 78)` ×2 · `1px solid rgb(244, 244, 244)` ×1 · `1px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `8px` ×17 · `91.85px` ×8 · `2px` ×2 · `100000px` ×2

**Gradients:** `linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)` ×3 · `radial-gradient(69% 69%, rgb(255, 255, 255) 0%, rgba(0, 148, 216, 0) 100%)` ×1 · `radial-gradient(69% 69%, rgba(161, 214, 44, 0.8) 0%, rgba(0, 148, 216, 0) 100%)` ×1 · `linear-gradient(47deg, rgba(246, 248, 251, 0.2) 0%, rgba(246, 248, 251, 0.2) 50%, rgba(246, 248, 251, 0.2) 100%)` ×1

**Transitions:** `color 0.4s cubic-bezier(0.44` ×28 · `color, background-color, text-decoration-color 0.15s ease` ×1 · `opacity, transform 0.15s ease` ×1

### Sections

1. `div` at 102px, 624px tall — “Blockchain Infrastructure for Enterprises” · original-1440-section-01.png
2. `div` at 726px, 934px tall — “A suite of regulated blockchain products” · original-1440-section-02.png
3. `div` at 1659px, 819px tall — “Regulated, fully-backed digital assets” · original-1440-section-03.png
4. `div` at 2478px, 841px tall — “Technology built within global regulatory structures” · original-1440-section-04.png
5. `div` at 3319px, 1016px tall — “Learn how Paxos works with PayPal to build innovative crypto products” · original-1440-section-05.png
6. `div` at 4336px, 534px tall — “Build a more open, trusted and transparentfinancial system with Paxos” · original-1440-section-06.png

### Media slots

- section 1: image, 1240×550 (aspect 2.25), fit cover, radius 8px
- section 1: image, 1161×540 (aspect 2.15), fit cover
- section 2: image, 454×454 (aspect 1.00), fit cover
- section 2: image, 324×324 (aspect 1.00), fit cover
- section 4: image, 559×400 (aspect 1.40), fit cover, radius 8px
- section 5: video loop, 992×565 (aspect 1.75), fit cover, radius 8px
- section 6: image, 1440×534 (aspect 2.70), fit cover
- section -: embed, 280×188 (aspect 1.49), fit auto

### Motion

**Libraries and media seen:** Framer site (Framer Motion) · 1 video element(s) · CSS scroll-driven animations (animation-timeline)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 11 half-screens · 2 elements · e.g. div.cky-consent-container.cky-banner-bottom “We value your privacy We use cookies to ”; div.cky-modal
- section -: pinned (sticky), at scroll pinned for 11 half-screens · e.g. div.framer-f6uscd-container “Products Assets Company Transparency Dev”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→-100px, at scroll 450–450px · e.g. div.framer-fBgHK.framer-n7p08c “Products Assets Company Transparency Dev”
- section 1: reveal on entering view — translateX -129→-156px, at scroll 450–900px · e.g. ul

**Animations running** (CSS keyframes and Web Animations):

- Animation `` on ul: 54600ms, loops forever (transform)

**On hover:**

- button “Customize”: filter: none → brightness(0.9) · transition `all`
- button “Accept All”: filter: none → brightness(0.9) · transition `all`

**:hover rules in the CSS (first 20):**

- `a.framer-text:hover, span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-text-color-rgb,var(--framer-link-text-color,var(--framer-`
- `code.framer-text a.framer-text:hover, code.framer-text span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-text-color-rgb,var(--fr`
- `a.framer-text[data-framer-page-link-current]:hover, span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color-rgb,var(--framer-link-hover-text-color,var(--framer-link-current-text-`
- `code.framer-text a.framer-text[data-framer-page-link-current]:hover, code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]), code.framer-text span.framer-text[data-fram`
- `[data-framer-component-type="Text"] a:hover, [data-framer-component-type="Text"] a div span:hover, [data-framer-component-type="Text"] a span span span:hover, [data-framer-component-type="Text"] a p span span:hover, [dat`
- `a.framer-text:where(:not(.framer-image)):hover, a.framer-text:hover span.framer-text:not([data-text-fill]), span.framer-text[data-nested-link]:hover, span.framer-text[data-nested-link]:hover span.framer-text:not([data-te`
- `a.framer-text:hover, span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-text-color,var(--framer-blockquote-text-color,var(--framer-text-color,#000)))); text-decoration-`
- `code.framer-text a.framer-text:hover, code.framer-text span.framer-text[data-nested-link]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-text-color,var(--framer-blockquote-text-color,var(--framer-cod`
- `a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover, a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]), span.framer-text[data-framer-page-link-current]:ho`
- `a.framer-text[data-framer-page-link-current]:hover, span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-current-text-color,var(--framer-link-text-color,var(`
- `code.framer-text a.framer-text[data-framer-page-link-current]:hover, code.framer-text span.framer-text[data-framer-page-link-current]:hover { color: var(--framer-link-hover-text-color,var(--framer-link-current-text-color`
- `[data-framer-component-type="DeprecatedRichText"] a:hover, [data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) { font-family: var(--framer-link-hover-font-family,var(--framer-link-font-fa`
- `[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover, [data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nest`
- `.cky-revisit-bottom-left:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-co`
- `.cky-revisit-bottom-left:hover::after { position: absolute; content: ""; border-width: 5px 5px 5px 0px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgb(78, 75, 102) rgba(255, 255, 255, 0) rgba(255, 255, 255`
- `.cky-revisit-bottom-right:hover::before { content: attr(data-tooltip); position: absolute; background: rgb(78, 75, 102); color: rgb(255, 255, 255); right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-`
- `.cky-revisit-bottom-right:hover::after { position: absolute; content: ""; border-width: 5px 0px 5px 5px; border-style: solid; border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgb(78, 75,`
- `button.cky-show-desc-btn:not(:hover):not(:active) { color: rgb(24, 99, 220); background: rgba(255, 255, 255, 0); }`
- `button.cky-accordion-btn:not(:hover):not(:active), button.cky-banner-btn-close:not(:hover):not(:active), button.cky-btn-close:not(:hover):not(:active), button.cky-btn-revisit:not(:hover):not(:active) { background: rgba(2`
- `.cky-consent-bar button:hover, .cky-modal.cky-modal-open button:hover, .cky-consent-bar button:focus, .cky-modal.cky-modal-open button:focus { text-decoration: none; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
