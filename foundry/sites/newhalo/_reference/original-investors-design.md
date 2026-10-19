# Design capture: https://halodental.com/investors/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Investor access | Halo (page 964px tall, window 390×844)

**Fonts:** `Helvetica` ×12

**Font sizes:** `12px` ×4 · `28px` ×2 · `16px` ×2 · `14px` ×2 · `38px` ×1 · `18px` ×1

**Weights:** `700` ×8 · `400` ×4

**Size / line height:** `12px / normal` ×4 · `28px / 29.4px` ×2 · `16px / 24px` ×2 · `14px / normal` ×2 · `38px / 37.24px` ×1 · `18px / 27px` ×1

**Letter spacing:** `normal` ×6 · `1.92px` ×3 · `-0.7px` ×2 · `-1.71px` ×1

**Text colours:** `rgb(255, 122, 34)` ×5 · `rgb(255, 255, 255)` ×3 · `rgb(170, 170, 170)` ×2 · `rgb(189, 189, 189)` ×1 · `rgb(119, 119, 119)` ×1

**Backgrounds:** `rgb(32, 32, 32)` ×200 · `rgb(41, 41, 41)` ×76 · `rgb(38, 38, 38)` ×76

**Borders:** `4px solid rgb(255, 95, 0)` ×1 · `1px solid rgb(255, 95, 0)` ×1 · `1px solid rgb(65, 65, 65)` ×1

**Radii:** `14px` ×2 · `18px` ×1

**Shadows:** `rgba(0, 0, 0, 0.35) 0px 24px 70px 0px` ×1

**Transitions:** `border-color, transform, background 0.2s ease` ×2

### Sections

1. `h1` at 155px, 74px tall · original-investors-390-section-01.png
2. `p` at 244px, 54px tall · original-investors-390-section-02.png
3. `div` at 332px, 535px tall — “Pitch Deck” · original-investors-390-section-03.png
4. `footer` at 895px, 14px tall

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling:** nothing changed.

**:hover rules in the CSS (first 2):**

- `.choice:hover { transform: translateY(-3px); border-color: rgb(255, 95, 0); background: rgb(41, 41, 41); }`
- `.action:hover { text-decoration: underline; }`

## 1440px — Investor access | Halo (page 900px tall, window 1440×900)

**Fonts:** `Helvetica` ×12

**Font sizes:** `12px` ×4 · `28px` ×2 · `16px` ×2 · `14px` ×2 · `66px` ×1 · `18px` ×1

**Weights:** `700` ×8 · `400` ×4

**Size / line height:** `12px / normal` ×4 · `28px / 29.4px` ×2 · `16px / 24px` ×2 · `14px / normal` ×2 · `66px / 64.68px` ×1 · `18px / 27px` ×1

**Letter spacing:** `normal` ×6 · `1.92px` ×3 · `-0.7px` ×2 · `-2.97px` ×1

**Text colours:** `rgb(255, 122, 34)` ×5 · `rgb(255, 255, 255)` ×3 · `rgb(170, 170, 170)` ×2 · `rgb(189, 189, 189)` ×1 · `rgb(119, 119, 119)` ×1

**Backgrounds:** `rgb(38, 38, 38)` ×209 · `rgb(32, 32, 32)` ×200

**Borders:** `1px solid rgb(65, 65, 65)` ×2 · `4px solid rgb(255, 95, 0)` ×1

**Radii:** `14px` ×2 · `18px` ×1

**Shadows:** `rgba(0, 0, 0, 0.35) 0px 24px 70px 0px` ×1

**Transitions:** `border-color, transform, background 0.2s ease` ×2

### Sections

1. `main` at 139px, 622px tall — “Choose your document.” · original-investors-1440-section-01.png

### Motion

**Libraries and media seen:** none detected (bundled libraries often don't show; the scroll effects below are the evidence)

**While scrolling:** nothing changed.

**On hover:**

- a “Access the pitch deck →”: decoration: none → underline · transition `all`

**:hover rules in the CSS (first 2):**

- `.choice:hover { transform: translateY(-3px); border-color: rgb(255, 95, 0); background: rgb(41, 41, 41); }`
- `.action:hover { text-decoration: underline; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits
