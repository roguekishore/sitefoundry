# Design capture: https://www.meow.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Business banking | Meow (page 15543px tall, window 390×844)

**Fonts:** `untitledSans` ×134

**Loaded faces:** untitledSans 300 normal · untitledSans 400 normal · untitledSans 400 italic · untitledSans 500 normal · untitledSans 500 italic · untitledSans 700 normal · untitledSans Fallback normal normal

**Font sizes:** `16px` ×72 · `14px` ×25 · `13px` ×12 · `18px` ×10 · `24px` ×6 · `11px` ×4 · `56px` ×2 · `32px` ×1 · `72px` ×1 · `40px` ×1

**Weights:** `400` ×83 · `500` ×48 · `700` ×2 · `600` ×1

**Size / line height:** `16px / 24px` ×70 · `14px / 20px` ×22 · `18px / 24px` ×10 · `13px / 19.5px` ×8 · `24px / 32px` ×6 · `13px / 18px` ×4 · `11px / 15.95px` ×3 · `14px / 21px` ×3 · `16px / 16px` ×2 · `56px / 64px` ×2

**Letter spacing:** `-0.07px` ×53 · `-0.16px` ×38 · `normal` ×16 · `-0.27px` ×10 · `-0.36px` ×6 · `0.195px` ×4

**Text colours:** `rgb(255, 255, 255)` ×58 · `rgb(24, 27, 37)` ×52 · `rgb(54, 55, 58)` ×14 · `rgba(255, 255, 255, 0.8)` ×4 · `rgb(219, 219, 219)` ×4 · `rgb(10, 10, 10)` ×1 · `rgb(89, 90, 95)` ×1

**Backgrounds:** `rgb(246, 246, 246)` ×1456 · `rgb(23, 25, 35)` ×499 · `rgb(255, 255, 255)` ×111 · `rgb(0, 0, 0)` ×69 · `rgba(255, 255, 255, 0.8)` ×41 · `rgb(255, 102, 49)` ×22 · `rgb(56, 123, 240)` ×6 · `rgb(235, 235, 235)` ×5 · `rgb(255, 0, 51)` ×3 · `rgb(28, 186, 107)` ×0 · `rgb(163, 163, 163)` ×0 · `rgb(206, 227, 254)` ×0

**Borders:** `1px solid rgb(235, 235, 235)` ×11 · `1px solid rgba(28, 27, 23, 0.1)` ×2 · `1px solid rgb(229, 231, 235)` ×1 · `1px dashed rgb(235, 235, 235)` ×1 · `9px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `4px` ×29 · `2px` ×10 · `9999px` ×9 · `8px` ×5 · `16px` ×5 · `6px` ×3 · `12px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` ×1

**Transitions:** `transform 0.2s cubic-bezier(0.4` ×13 · `opacity 0.2s cubic-bezier(0.4` ×3 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×2 · `color, background-color, border-color, text-decoration-color 0.2s cubic-bezier(0.4` ×2 · `all 0.15s cubic-bezier(0.4` ×2 · `opacity 0.15s cubic-bezier(0.4` ×2 · `color, background-color, border-color, text-decoration-color 0.1s cubic-bezier(0.4` ×1 · `opacity 1s ease` ×1

**:root variables (26):** `--background: 0 0% 100%` · `--foreground: 0 0% 3.9%` · `--card: 0 0% 100%` · `--card-foreground: 0 0% 3.9%` · `--popover: 0 0% 100%` · `--popover-foreground: 0 0% 3.9%` · `--primary: 0 0% 9%` · `--primary-foreground: 0 0% 98%` · `--secondary: 0 0% 96.1%` · `--secondary-foreground: 0 0% 9%` · `--muted: 0 0% 96.1%` · `--muted-foreground: 0 0% 45.1%` · `--accent: 0 0% 96.1%` · `--accent-foreground: 0 0% 9%` · `--destructive: 0 84.2% 60.2%` · `--destructive-foreground: 0 0% 98%` · `--border: 0 0% 89.8%` · `--input: 0 0% 89.8%` · `--ring: 0 0% 3.9%` · `--chart-1: 12 76% 61%` · `--chart-2: 173 58% 39%` · `--chart-3: 197 37% 24%` · `--chart-4: 43 74% 66%` · `--chart-5: 27 87% 67%` · `--radius: 0.5rem` · `--pr-bg: #171923`

### Sections

1. `header` at 0px, 65px tall, position fixed — “Business Checking” · original-390-section-01.png
2. `main` at 0px, 9968px tall — “Modern banking for AI agents and global teams” · original-390-section-02.png, original-390-section-03.png, original-390-section-04.png, original-390-section-05.png, original-390-section-06.png
3. `div` at 9968px, 298px tall — “Apply in less than 10 minutes today” · original-390-section-07.png
4. `footer` at 10266px, 5277px tall — “Footer” · original-390-section-08.png, original-390-section-09.png, original-390-section-10.png

### Media slots

- section 2: canvas (WebGL/2D), 320×320 (aspect 1.00), fit auto
- section 2: image, 350×197 (aspect 1.78), fit cover
- section 2: image, 350×302 (aspect 1.16), fit auto, radius 4px
- section 2: image, 350×301 (aspect 1.16), fit auto, radius 4px
- section 2: image, 305×233 (aspect 1.31), fit auto, radius 4px
- section 2: image, 265×177 (aspect 1.50), fit auto, radius 4px
- section 2: image, 284×190 (aspect 1.49), fit auto, radius 4px
- section 2: image, 264×194 (aspect 1.36), fit auto, radius 4px
- section 2: image, 342×274 (aspect 1.25), fit cover, radius 4px
- section 2: image, 284×265 (aspect 1.07), fit auto, radius 4px
- section 2: image, 344×288 (aspect 1.19), fit auto, radius 4px
- section 2: image, 344×271 (aspect 1.27), fit auto, radius 4px

### Motion

**Libraries and media seen:** 1 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section 1: fixed, at scroll pinned for 35 half-screens · e.g. header.group.fixed
- section 2: scrubbed with the scroll — translateX -354→-1448px, at scroll 422–14699px · e.g. div.flex.animate-scroll-x
- section 2: reveal on entering view — scale 1.00→1.00, at scroll 844–1266px · e.g. span.absolute.left-1/2

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `scroll-x` on div.flex.animate-scroll-x: 60000ms, loops forever (transform)

**:hover rules in the CSS (first 20):**

- `a:hover .pr-logo { opacity: 1; }`
- `a:hover .cs-arrow { color: rgb(255, 255, 255); transform: translate(1px, -1px); }`
- `.feat5-cta:hover { color: rgb(143, 187, 255); }`
- `.feat5-cell:hover { background: rgb(29, 32, 49); transform: scale(1.08); border-radius: 14px; z-index: 5; box-shadow: rgba(0, 0, 0, 0.72) 0px 20px 46px -14px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px; }`
- `.feat5-cell:hover .pr-logo { opacity: 1; }`
- `.feat5-cell--link:hover .feat5-cell-logo { transform: translateY(-9px); }`
- `.feat5-cell--link:hover .feat5-cell-cta { opacity: 1; transform: translateY(0px); }`
- `.feat5-cell--link:hover .feat5-cell-arrow { opacity: 0; }`
- `.hover\:-translate-y-0\.5:hover { --tw-translate-y: -0.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-sc`
- `.hover\:border-gray-300:hover { --tw-border-opacity: 1; border-color: rgb(209 213 219/var(--tw-border-opacity,1)); }`
- `.hover\:border-neutral-400:hover { --tw-border-opacity: 1; border-color: rgb(219 219 219/var(--tw-border-opacity,1)); }`
- `.hover\:border-orange-primary\/70:hover { border-color: rgba(255, 102, 49, 0.7); }`
- `.hover\:border-white\/40:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.hover\:bg-\[\#1e2130\]:hover { --tw-bg-opacity: 1; background-color: rgb(30 33 48/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-\[\#3a32ff\]:hover { --tw-bg-opacity: 1; background-color: rgb(58 50 255/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-muted\/50:hover { background-color: hsl(var(--muted)/.5); }`
- `.hover\:bg-neutral-100:hover { --tw-bg-opacity: 1; background-color: rgb(255 255 255/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-200:hover { --tw-bg-opacity: 1; background-color: rgb(246 246 246/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-300:hover { --tw-bg-opacity: 1; background-color: rgb(235 235 235/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-50:hover { --tw-bg-opacity: 1; background-color: rgb(250 250 250/var(--tw-bg-opacity,1)); }`

### The site's own links

`/` Meow's Logo · `/business-checking` Business CheckingAccess a global busines · `/cards` Global CardsIssue virtual and physical c · `/crypto` CryptoSend and receive USDC and USDT fro · `/mcp` AI AgentsOpen a bank account with your A · `/backoffice` BookkeepingEligible startups get bookkee · `/treasury` Global TreasuryBuy, auto-roll, and ladde · `/invoices` InvoicingSend invoices and collect payme · `/mortgage` Founder MortgagesApply for a founder-fri · `/sba-loans` SBA LoansApply for SBA loans from Meow's · `/for-businesses` For BusinessesGet a business checking ac · `/for-funds` For FundsOnboard your funds and manageme · `/real-estate` For Real EstateOnboard your funds and ma · `/for-startups` For StartupsAccess exclusive perks with  · `/customer-stories/why-freeport-markets-uses-meow-for-business-banking-and-corporate-treasury` Why Freeport Markets Uses Meow for Busin · `/customer-stories/why-clera-uses-meow-for-business-banking-and-backoffice` Why Clera Uses Meow for Business Banking · `/customer-stories/why-1kx-ventures-uses-meow-for-business-banking-and-stablecoin-payments` Why 1kx Ventures Uses Meow for Business  · `/customer-stories` View allStories · `/about` About · `/blog` Blog · `/faq` FAQ · `/legal` Legal · `/blog/why-ai-agents-will-open-bank-accounts` Why Every Bank Account Will Be Opened by · `/blog/open-business-bank-account-ai-agent-meow` How to Open a Business Bank Account with · `/blog/ai-agents-can-now-open-and-run-your-business-bank-account` AI Agents Can Now Open and Run Your Busi · `/business-loans` Business Loans · `/terms-of-service` Legal Section

## 1440px — Business banking | Meow (page 8655px tall, window 1440×900)

**Fonts:** `untitledSans` ×141

**Loaded faces:** untitledSans 300 normal · untitledSans 400 normal · untitledSans 400 italic · untitledSans 500 normal · untitledSans 500 italic · untitledSans 700 normal · untitledSans Fallback normal normal

**Font sizes:** `16px` ×74 · `14px` ×30 · `13px` ×12 · `32px` ×6 · `18px` ×6 · `11px` ×4 · `28px` ×4 · `56px` ×3 · `120px` ×1 · `40px` ×1

**Weights:** `400` ×90 · `500` ×48 · `700` ×2 · `600` ×1

**Size / line height:** `16px / 24px` ×72 · `14px / 20px` ×25 · `13px / 19.5px` ×8 · `32px / 40px` ×6 · `18px / 24px` ×6 · `13px / 18px` ×4 · `28px / 36px` ×4 · `56px / 64px` ×3 · `11px / 15.95px` ×3 · `14px / 21px` ×3

**Letter spacing:** `-0.07px` ×58 · `-0.16px` ×40 · `normal` ×16 · `-0.8px` ×6 · `-0.27px` ×6 · `0.195px` ×4

**Text colours:** `rgb(255, 255, 255)` ×65 · `rgb(24, 27, 37)` ×52 · `rgb(54, 55, 58)` ×14 · `rgba(255, 255, 255, 0.8)` ×4 · `rgb(219, 219, 219)` ×4 · `rgb(10, 10, 10)` ×1 · `rgb(89, 90, 95)` ×1

**Backgrounds:** `rgb(246, 246, 246)` ×1883 · `rgb(23, 25, 35)` ×694 · `rgb(255, 255, 255)` ×216 · `rgb(0, 0, 0)` ×171 · `rgba(255, 255, 255, 0.8)` ×57 · `rgb(255, 102, 49)` ×22 · `rgb(235, 235, 235)` ×11 · `rgb(56, 123, 240)` ×6 · `rgb(255, 0, 51)` ×3 · `rgb(28, 186, 107)` ×0 · `rgb(163, 163, 163)` ×0 · `rgb(206, 227, 254)` ×0

**Borders:** `1px solid rgb(235, 235, 235)` ×11 · `1px solid rgba(28, 27, 23, 0.1)` ×2 · `1px solid rgb(255, 102, 49)` ×1 · `1px solid rgb(229, 231, 235)` ×1 · `1px dashed rgb(235, 235, 235)` ×1 · `9px solid rgba(0, 0, 0, 0)` ×1

**Radii:** `4px` ×31 · `2px` ×10 · `9999px` ×9 · `8px` ×5 · `16px` ×5 · `6px` ×2 · `12px` ×1

**Shadows:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` ×1

**Transitions:** `transform 0.2s cubic-bezier(0.4` ×13 · `opacity 0.2s cubic-bezier(0.4` ×3 · `color, background-color, border-color, text-decoration-color 0.15s cubic-bezier(0.4` ×2 · `color, background-color, border-color, text-decoration-color 0.2s cubic-bezier(0.4` ×2 · `all 0.15s cubic-bezier(0.4` ×2 · `opacity 0.15s cubic-bezier(0.4` ×2 · `color, background-color, border-color, text-decoration-color 0.1s cubic-bezier(0.4` ×1 · `all 0.1s cubic-bezier(0.4` ×1

**:root variables (26):** `--background: 0 0% 100%` · `--foreground: 0 0% 3.9%` · `--card: 0 0% 100%` · `--card-foreground: 0 0% 3.9%` · `--popover: 0 0% 100%` · `--popover-foreground: 0 0% 3.9%` · `--primary: 0 0% 9%` · `--primary-foreground: 0 0% 98%` · `--secondary: 0 0% 96.1%` · `--secondary-foreground: 0 0% 9%` · `--muted: 0 0% 96.1%` · `--muted-foreground: 0 0% 45.1%` · `--accent: 0 0% 96.1%` · `--accent-foreground: 0 0% 9%` · `--destructive: 0 84.2% 60.2%` · `--destructive-foreground: 0 0% 98%` · `--border: 0 0% 89.8%` · `--input: 0 0% 89.8%` · `--ring: 0 0% 3.9%` · `--chart-1: 12 76% 61%` · `--chart-2: 173 58% 39%` · `--chart-3: 197 37% 24%` · `--chart-4: 43 74% 66%` · `--chart-5: 27 87% 67%` · `--radius: 0.5rem` · `--pr-bg: #171923`

### Sections

1. `header` at 0px, 65px tall, position fixed — “Business Checking” · original-1440-section-01.png
2. `main` at 0px, 6088px tall — “Modern banking for AI agents and global teams” · original-1440-section-02.png, original-1440-section-03.png, original-1440-section-04.png, original-1440-section-05.png
3. `div` at 6088px, 298px tall — “Apply in less than 10 minutes today” · original-1440-section-06.png
4. `footer` at 6386px, 2269px tall — “Footer” · original-1440-section-07.png, original-1440-section-08.png

### Media slots

- section 2: canvas (WebGL/2D), 520×520 (aspect 1.00), fit auto
- section 2: image, 552×311 (aspect 1.78), fit cover
- section 2: image, 371×319 (aspect 1.16), fit auto, radius 4px
- section 2: image, 371×319 (aspect 1.16), fit auto, radius 4px
- section 2: image, 305×233 (aspect 1.31), fit auto, radius 4px
- section 2: image, 265×177 (aspect 1.50), fit auto, radius 4px
- section 2: image, 284×190 (aspect 1.49), fit auto, radius 4px
- section 2: image, 264×194 (aspect 1.36), fit auto, radius 4px
- section 2: image, 600×440 (aspect 1.36), fit cover, radius 4px
- section 2: image, 284×265 (aspect 1.07), fit auto, radius 4px
- section 2: image, 344×288 (aspect 1.19), fit auto, radius 4px
- section 2: image, 344×271 (aspect 1.27), fit auto, radius 4px

### Motion

**Libraries and media seen:** 1 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section 1: fixed, at scroll pinned for 18 half-screens · e.g. header.group.fixed “Products Services Solutions Case Studies”
- section 2: scrubbed with the scroll — translateX -559→-1237px, at scroll 450–7755px · e.g. div.flex.animate-scroll-x

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `scroll-x` on div.flex.animate-scroll-x: 60000ms, loops forever (transform)

**On hover:**

- button “Products”: color: rgb(255, 255, 255) → rgb(24, 27, 37) · transition `all`
- a “Sign In”: background: rgba(0, 0, 0, 0) → rgb(246, 246, 246) · transition `all`
- a “Get Started”: opacity: 1 → 0.9 · transition `0.1s cubic-bezier(0.4, 0, 0.2, 1)`
- a “Get started with Claude”: background: rgb(255, 102, 49) → rgb(30, 33, 48) · transition `0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- a “Learn more about agentic business format”: background: rgba(0, 0, 0, 0) → rgb(255, 255, 255) · transition `0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- a “and more”: color: rgb(89, 90, 95) → rgb(54, 55, 58); border: rgb(235, 235, 235) → rgb(219, 219, 219) · transition `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-`
- a “Learn more about fee-free business check”: opacity: 1 → 0.8 · transition `opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
- a “developer docs”: opacity: 1 → 0.8 · transition `opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- button “Get Started”: background: rgb(56, 123, 240) → rgba(56, 123, 240, 0.9) · transition `color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bez`

**:hover rules in the CSS (first 20):**

- `a:hover .pr-logo { opacity: 1; }`
- `a:hover .cs-arrow { color: rgb(255, 255, 255); transform: translate(1px, -1px); }`
- `.feat5-cta:hover { color: rgb(143, 187, 255); }`
- `.feat5-cell:hover { background: rgb(29, 32, 49); transform: scale(1.08); border-radius: 14px; z-index: 5; box-shadow: rgba(0, 0, 0, 0.72) 0px 20px 46px -14px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px; }`
- `.feat5-cell:hover .pr-logo { opacity: 1; }`
- `.feat5-cell--link:hover .feat5-cell-logo { transform: translateY(-9px); }`
- `.feat5-cell--link:hover .feat5-cell-cta { opacity: 1; transform: translateY(0px); }`
- `.feat5-cell--link:hover .feat5-cell-arrow { opacity: 0; }`
- `.hover\:-translate-y-0\.5:hover { --tw-translate-y: -0.125rem; transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-sc`
- `.hover\:border-gray-300:hover { --tw-border-opacity: 1; border-color: rgb(209 213 219/var(--tw-border-opacity,1)); }`
- `.hover\:border-neutral-400:hover { --tw-border-opacity: 1; border-color: rgb(219 219 219/var(--tw-border-opacity,1)); }`
- `.hover\:border-orange-primary\/70:hover { border-color: rgba(255, 102, 49, 0.7); }`
- `.hover\:border-white\/40:hover { border-color: rgba(255, 255, 255, 0.4); }`
- `.hover\:bg-\[\#1e2130\]:hover { --tw-bg-opacity: 1; background-color: rgb(30 33 48/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-\[\#3a32ff\]:hover { --tw-bg-opacity: 1; background-color: rgb(58 50 255/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-muted\/50:hover { background-color: hsl(var(--muted)/.5); }`
- `.hover\:bg-neutral-100:hover { --tw-bg-opacity: 1; background-color: rgb(255 255 255/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-200:hover { --tw-bg-opacity: 1; background-color: rgb(246 246 246/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-300:hover { --tw-bg-opacity: 1; background-color: rgb(235 235 235/var(--tw-bg-opacity,1)); }`
- `.hover\:bg-neutral-50:hover { --tw-bg-opacity: 1; background-color: rgb(250 250 250/var(--tw-bg-opacity,1)); }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Meow's Logo · `/business-checking` Business Checking · `/cards` Global Cards · `/treasury` Global Treasury · `/invoices` Invoicing · `/business-loans` Business Loans · `/mcp` AI Agents · `/mortgage` Founder Mortgages · `/sba-loans` SBA Loans · `/for-businesses` Businesses · `/for-funds` Funds · `/for-startups` Startups · `/about` About · `/customer-stories` Customer Stories · `/blog` Blog · `/faq` FAQ · `/legal` Legal · `/terms-of-service` Legal Section
