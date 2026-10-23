# Design capture: https://arc.tech/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Arc (page 10917px tall, window 390×844)

**Fonts:** `gt-america` ×129 · `Arial` ×6

**Loaded faces:** gt-america 400 normal · gt-america 500 normal · gt-america 700 normal · Inter 400 normal · Inter 500 normal · Inter 600 normal · Inter 700 normal

**Font sizes:** `12px` ×59 · `12.1489px` ×29 · `14.1489px` ×18 · `8.5px` ×9 · `22.5957px` ×6 · `41.7872px` ×5 · `13px` ×3 · `18.2979px` ×3 · `16px` ×2 · `16.1489px` ×1

**Weights:** `400` ×111 · `500` ×14 · `700` ×9 · `300` ×1

**Size / line height:** `12px / 18px` ×53 · `12.1489px / 17.0085px` ×19 · `14.1489px / 21.2234px` ×13 · `8.5px / 22.4px` ×9 · `22.5957px / 27.1149px` ×6 · `41.7872px / 45.966px` ×5 · `12.1489px / 22.4px` ×5 · `14.1489px / 22.4px` ×5 · `12.1489px / 18.2234px` ×5 · `12px / 21.2234px` ×5

**Letter spacing:** `normal` ×121 · `-0.338936px` ×6 · `-0.626809px` ×5 · `-0.274468px` ×3

**Text colours:** `rgb(83, 82, 75)` ×88 · `rgb(30, 30, 28)` ×26 · `rgb(255, 255, 255)` ×9 · `rgba(255, 255, 255, 0.75)` ×3 · `rgb(29, 28, 29)` ×3 · `rgb(0, 0, 238)` ×2 · `rgb(18, 100, 163)` ×2 · `rgb(250, 250, 249)` ×1 · `rgb(0, 0, 0)` ×1

**Backgrounds:** `rgb(243, 243, 243)` ×359 · `rgb(255, 255, 255)` ×213 · `rgb(34, 34, 34)` ×200 · `rgb(30, 30, 28)` ×169 · `rgb(222, 232, 217)` ×159 · `rgb(38, 45, 47)` ×159 · `rgb(203, 217, 227)` ×149 · `rgb(235, 230, 217)` ×149 · `rgb(23, 23, 23)` ×29 · `rgb(32, 109, 105)` ×20 · `rgba(30, 30, 28, 0.1)` ×10 · `rgb(134, 224, 178)` ×7

**Borders:** `1px solid rgb(234, 234, 232)` ×2 · `2px solid rgb(32, 109, 105)` ×1 · `2px solid rgba(30, 30, 28, 0.2)` ×1 · `2px solid rgb(134, 224, 178)` ×1 · `1px inset rgb(83, 82, 75)` ×1

**Radii:** `4px` ×5 · `16px` ×5 · `20px` ×5 · `5px` ×3 · `10px` ×3 · `50%` ×3 · `8px` ×1

**Shadows:** `rgba(0, 0, 0, 0.03) 0px 100px 80px 0px, rgba(0, 0, 0, 0.024) 0px 41.7776px 33.4221px 0px, rgba(0, 0, 0, 0.02) 0px 22.3363px 17.869px 0px, rgba(0, 0, 0, 0.016) 0px 12.5216px 10.0172px 0px, rgba(0, 0, 0` ×2

**Gradients:** `linear-gradient(rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 0px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 0px)` ×1

**Transitions:** `all 0.2s ease` ×51 · `opacity, transform 0.75s ease-in-out` ×14 · `opacity 0.3s ease-in-out` ×5 · `background-color, opacity, top, transform, visibility 0.3s ease` ×3 · `background-color, border-color, color, fill, background-posi 0.2s ease` ×3 · `background-color, box-shadow 0.4s ease-in-out` ×1 · `fill 0.2s ease` ×1 · `opacity, transform 1s ease-in-out` ×1

### Sections

1. `div` at 0px, 74px tall · original-390-section-01.png
2. `header` at 74px, 72px tall · original-390-section-02.png
3. `main` at 74px, 6621px tall — “Intelligent cash management for technology companies” · original-390-section-03.png, original-390-section-04.png, original-390-section-05.png, original-390-section-06.png
4. `footer` at 6695px, 4222px tall · original-390-section-07.png, original-390-section-08.png, original-390-section-09.png

### Media slots

- section 3: image, 361×190 (aspect 1.90), fit auto, radius 8px
- section 3: image, 352×214 (aspect 1.65), fit auto
- section 3: image, 352×214 (aspect 1.65), fit auto
- section 3: image, 352×214 (aspect 1.65), fit auto
- section 3: image, 352×214 (aspect 1.65), fit auto
- section 3: image, 352×214 (aspect 1.65), fit auto
- section 3: image, 352×391 (aspect 0.90), fit auto, radius 10px
- section 3: image, 352×391 (aspect 0.90), fit auto, radius 10px
- section 3: image, 352×391 (aspect 0.90), fit auto, radius 10px
- section 3: image, 300×350 (aspect 0.86), fit auto

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 24 half-screens · e.g. nav.responsiveNav
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 15→0px, at scroll 422–844px · 8 elements · e.g. div.grid.heading “Cash Management accounts built for scale”; div.featureCard.isAnimated “Business Manage your money with ease Sen”; div.featureCard.isAnimated “Treasury Unlock competitive yield on idl”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 15→0px, at scroll 422–1266px · 3 elements · e.g. div.featureCard.isAnimated “Control / DACA Simplify lender complianc”; div.innerCol.isAnimated “White-glove support Get a dedicated rela”; div.quoteLarge__content.isAnimated “Arc is the future of cash management for”

**:hover rules in the CSS (first 20):**

- `a, a:hover { transition: 0.2s; }`
- `button:hover { cursor: pointer; }`
- `.brandMenu__item:hover { color: rgb(30, 30, 28); background-color: rgb(245, 245, 245); }`
- `.header__primaryNavItem:hover, .header__primaryNavItemLink:hover { color: rgb(30, 30, 28); }`
- `.header__primaryNavItem.hasSubMenu:hover .headerSubMenu { transform: none; visibility: visible; z-index: 9; opacity: 1; }`
- `.header.theme--green-300 .header__primaryNavItem, .header.theme--green-300 .header__primaryNavItem:hover, .header.theme--green-300 .header__primaryNavItemLink, .header.theme--green-300 .header__primaryNavItemLink:hover {`
- `.header__primaryNavItemLink:hover::after { opacity: 1; visibility: visible; }`
- `.button:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button:hover:not(:disabled), .button:hover:not(:disabled)::after, .button:hover:not(:disabled)::before { transition: background-color 0.2s, border-color 0.2s, color 0.2s, fill 0.2s, background-position 0.2s; }`
- `.button:disabled, .button:disabled:hover { cursor: not-allowed; }`
- `.button.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`
- `.button.theme--green-300, .button.theme--green-300:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--green-300.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--green-300.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`
- `.button.theme--primary:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--primary.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--primary.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`

### The site's own links

`/business-account` Business Account · `/treasury-management` Treasury Account · `/daca` Control Account (DACA) · `/capital-markets-borrowers` Debt Raise · `/archie` CFO Agent · `/capital-markets-lenders` Capital Markets · `/blog` Blog · `/about` About · `/careers` Careers · `/newsroom` Newsroom · `/partners` Partner benefits · `/contact` Contact us · `/pricing` Pricing for companies · `/treasury-investment-options` Treasury investment options · `/` Arc homepage · `/general-disclosures` General Disclosures · `/rewards-terms` Arc Rewards Terms · `/case-studies` Case studies · `/glossary` Glossary · `/calculator` Funding calculator · `/learning-center` Learning center · `/guides` Guides · `/terms-of-use` Terms of Use · `/privacy` Privacy Policy · `/referral-agreement` Referral Agreement

## 1440px — Arc (page 7488px tall, window 1440×900)

**Fonts:** `gt-america` ×134 · `Arial` ×6

**Loaded faces:** gt-america 400 normal · gt-america 500 normal · gt-america 700 normal

**Font sizes:** `12px` ×59 · `14px` ×33 · `16px` ×24 · `8.5px` ×9 · `30px` ×6 · `64px` ×5 · `22px` ×3 · `18px` ×1

**Weights:** `400` ×111 · `500` ×19 · `700` ×9 · `300` ×1

**Size / line height:** `12px / 18px` ×53 · `14px / 19.6px` ×19 · `16px / 24px` ×13 · `16px / 22.4px` ×11 · `8.5px / 22.4px` ×9 · `30px / 34.5px` ×6 · `64px / 70.4px` ×5 · `14px / 22.4px` ×5 · `14px / 21px` ×5 · `12px / 24px` ×5

**Letter spacing:** `normal` ×126 · `-0.45px` ×6 · `-0.96px` ×5 · `-0.33px` ×3

**Text colours:** `rgb(83, 82, 75)` ×92 · `rgb(30, 30, 28)` ×26 · `rgb(255, 255, 255)` ×9 · `rgba(255, 255, 255, 0.75)` ×3 · `rgb(29, 28, 29)` ×3 · `rgb(0, 0, 238)` ×2 · `rgb(0, 0, 0)` ×2 · `rgb(18, 100, 163)` ×2 · `rgb(250, 250, 249)` ×1

**Backgrounds:** `rgb(243, 243, 243)` ×400 · `rgb(255, 255, 255)` ×207 · `rgb(38, 45, 47)` ×200 · `rgb(34, 34, 34)` ×200 · `rgb(30, 30, 28)` ×200 · `rgb(235, 230, 217)` ×194 · `rgb(203, 217, 227)` ×194 · `rgb(222, 232, 217)` ×194 · `rgb(23, 23, 23)` ×81 · `rgb(32, 109, 105)` ×15 · `rgba(30, 30, 28, 0.1)` ×11 · `rgb(134, 224, 178)` ×9

**Borders:** `1px solid rgb(234, 234, 232)` ×2 · `2px solid rgba(0, 0, 0, 0.15)` ×1 · `2px solid rgb(32, 109, 105)` ×1 · `2px solid rgba(30, 30, 28, 0.2)` ×1 · `2px solid rgb(134, 224, 178)` ×1 · `1px inset rgb(83, 82, 75)` ×1

**Radii:** `4px` ×6 · `16px` ×5 · `20px` ×5 · `10px` ×3 · `50%` ×3 · `8px` ×1

**Shadows:** `rgba(0, 0, 0, 0.03) 0px 100px 80px 0px, rgba(0, 0, 0, 0.024) 0px 41.7776px 33.4221px 0px, rgba(0, 0, 0, 0.02) 0px 22.3363px 17.869px 0px, rgba(0, 0, 0, 0.016) 0px 12.5216px 10.0172px 0px, rgba(0, 0, 0` ×2

**Gradients:** `linear-gradient(rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 0px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 0px)` ×1

**Transitions:** `all 0.2s ease` ×51 · `opacity, transform 0.75s ease-in-out` ×14 · `color 0.2s ease` ×9 · `opacity 0.3s ease-in-out` ×5 · `background-color, border-color, color, fill, background-posi 0.2s ease` ×4 · `background-color, box-shadow 0.4s ease-in-out` ×1 · `fill 0.2s ease` ×1 · `opacity, transform 1s ease-in-out` ×1

### Sections

1. `div` at 0px, 56px tall · original-1440-section-01.png
2. `header` at 56px, 100px tall · original-1440-section-02.png
3. `main` at 56px, 5326px tall — “Intelligent cash management for technology companies” · original-1440-section-03.png, original-1440-section-04.png, original-1440-section-05.png
4. `footer` at 5382px, 2106px tall · original-1440-section-06.png, original-1440-section-07.png

### Media slots

- section 3: image, 1137×652 (aspect 1.74), fit auto, radius 8px
- section 3: image, 363×221 (aspect 1.65), fit auto
- section 3: image, 363×221 (aspect 1.65), fit auto
- section 3: image, 363×221 (aspect 1.65), fit auto
- section 3: image, 455×316 (aspect 1.44), fit contain
- section 3: image, 455×316 (aspect 1.44), fit contain
- section 3: image, 322×358 (aspect 0.90), fit auto, radius 10px
- section 3: image, 322×358 (aspect 0.90), fit auto, radius 10px
- section 3: image, 322×358 (aspect 0.90), fit auto, radius 10px
- section 3: image, 455×531 (aspect 0.86), fit auto

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 15 half-screens · e.g. nav.responsiveNav
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 15→0px, at scroll 900–1350px · 8 elements · e.g. div.grid.heading “Cash Management accounts built for scale”; div.featureCard.isAnimated “Business Manage your money with ease Sen”; div.featureCard.isAnimated “Treasury Unlock competitive yield on idl”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 15→0px, at scroll 900–1800px · 3 elements · e.g. div.featureCard.isAnimated “Control / DACA Simplify lender complianc”; div.innerCol.isAnimated “White-glove support Get a dedicated rela”; div.quoteLarge__content.isAnimated “Arc is the future of cash management for”

**On hover:**

- a “Pricing”: color: rgb(83, 82, 75) → rgb(30, 30, 28); border: rgb(83, 82, 75) → rgb(30, 30, 28) · transition `color 0.2s`
- a “Log in”: color: rgb(83, 82, 75) → rgb(30, 30, 28); border: rgb(83, 82, 75) → rgb(30, 30, 28) · transition `color 0.2s`
- a “Get started”: color: rgb(0, 0, 0) → rgb(250, 250, 249); background: rgba(0, 0, 0, 0) → rgb(32, 109, 105); border: rgba(0, 0, 0, 0.15) → rgb(32, 109, 105); inner color: rgb(0, 0, 0) → rgb(250, 250, 249); inner border: rgb(0, 0, 0) → rgb(250, 250, 249) · transition `background-color 0.2s, border-color 0.2s, color 0.2s, fill 0.2s, background-position 0.2s`
- a “Book a demo”: color: rgb(30, 30, 28) → rgb(255, 255, 255); background: rgba(0, 0, 0, 0) → rgb(32, 109, 105); border: rgba(30, 30, 28, 0.2) → rgb(17, 160, 128); inner color: rgb(30, 30, 28) → rgb(255, 255, 255); inner border: rgb(30, 30, 28) → rgb(255, 255, 255) · transition `background-color 0.2s, border-color 0.2s, color 0.2s, fill 0.2s, background-position 0.2s`
- a “Business Manage your money with ease Sen”: inner opacity: 1 → 0.9 · transition `0.2s`
- a “CFO Agent Put financial analysis on auto”: inner opacity: 1 → 0.9 · transition `0.2s`

**:hover rules in the CSS (first 20):**

- `a, a:hover { transition: 0.2s; }`
- `button:hover { cursor: pointer; }`
- `.brandMenu__item:hover { color: rgb(30, 30, 28); background-color: rgb(245, 245, 245); }`
- `.header__primaryNavItem:hover, .header__primaryNavItemLink:hover { color: rgb(30, 30, 28); }`
- `.header__primaryNavItem.hasSubMenu:hover .headerSubMenu { transform: none; visibility: visible; z-index: 9; opacity: 1; }`
- `.header.theme--green-300 .header__primaryNavItem, .header.theme--green-300 .header__primaryNavItem:hover, .header.theme--green-300 .header__primaryNavItemLink, .header.theme--green-300 .header__primaryNavItemLink:hover {`
- `.header__primaryNavItemLink:hover::after { opacity: 1; visibility: visible; }`
- `.button:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button:hover:not(:disabled), .button:hover:not(:disabled)::after, .button:hover:not(:disabled)::before { transition: background-color 0.2s, border-color 0.2s, color 0.2s, fill 0.2s, background-position 0.2s; }`
- `.button:disabled, .button:disabled:hover { cursor: not-allowed; }`
- `.button.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--gray-100.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`
- `.button.theme--green-300, .button.theme--green-300:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--green-300.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--green-300.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`
- `.button.theme--primary:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--primary.style--outlined:hover:not(:disabled) { background-color: rgb(32, 109, 105); border-color: rgb(32, 109, 105); color: rgb(250, 250, 249); }`
- `.button.theme--primary.style--outlined:hover:not(:disabled) .button__icon path { fill: rgb(250, 250, 249); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/business-account` Business Account · `/treasury-management` Treasury Account · `/daca` Control Account (DACA) · `/capital-markets-borrowers` Debt Raise · `/archie` CFO Agent · `/capital-markets-lenders` Capital Markets · `/blog` Blog · `/about` About · `/careers` Careers · `/newsroom` Newsroom · `/partners` Partner benefits · `/contact` Contact us · `/pricing` Pricing for companies · `/treasury-investment-options` Treasury investment options · `/` Arc homepage · `/general-disclosures` General Disclosures · `/rewards-terms` Arc Rewards Terms · `/case-studies` Case studies · `/glossary` Glossary · `/calculator` Funding calculator · `/learning-center` Learning center · `/guides` Guides · `/terms-of-use` Terms of Use · `/privacy` Privacy Policy · `/referral-agreement` Referral Agreement
