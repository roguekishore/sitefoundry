# Design capture: https://kononenkogroup.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Kononenko Architectural Bureau (page 11373px tall, window 390×844)

**Fonts:** `n` ×143 · `h` ×107

**Loaded faces:** n 400 normal · h 400 normal

**Font sizes:** `14.56px` ×164 · `27.04px` ×38 · `37.44px` ×24 · `41.6px` ×15 · `31.2px` ×8 · `17.16px` ×1

**Weights:** `400` ×250

**Size / line height:** `14.56px / 17.472px` ×158 · `27.04px / 29.744px` ×38 · `37.44px / 33.696px` ×24 · `31.2px / 24.96px` ×8 · `41.6px / 29.12px` ×8 · `14.56px / 14.56px` ×6 · `41.6px / 33.9733px` ×5 · `41.6px / 35.36px` ×2 · `17.16px / 20.592px` ×1

**Letter spacing:** `-0.2912px` ×164 · `-0.8112px` ×38 · `-1.1232px` ×24 · `-1.248px` ×15 · `-0.936px` ×8 · `-0.3432px` ×1

**Text colours:** `rgb(0, 0, 0)` ×127 · `rgb(255, 255, 255)` ×65 · `rgb(146, 146, 146)` ×58

**Backgrounds:** `rgb(0, 0, 0)` ×553

**Transitions:** `transform 0.6s cubic-bezier(0.17` ×12 · `transform, opacity 1.109s cubic-bezier(0.17` ×6 · `opacity 0.3s ease` ×4 · `transform, mix-blend-mode 0.6s cubic-bezier(0.17` ×1 · `background-color, color 0.3s cubic-bezier(0.17` ×1

### Sections

1. `header` at 0px, 64px tall, position fixed — “KononenkoArchitecturalBureau” · original-390-section-01.png
2. `section` at 0px, 836px tall — **sized by the window: 99% of the window height** (625px in a 633px window) — “Kononenko Architectural Bureau” · original-390-section-02.png
3. `section` at 888px, 546px tall — “SystematicClarity & Creativity” · original-390-section-03.png
4. `section` at 1475px, 1374px tall — “Founded” · original-390-section-04.png
5. `section` at 2891px, 1327px tall — “Architectural concept, facade and planning solutions, sketch project, working do” · original-390-section-05.png
6. `section` at 4293px, 2217px tall — “From Sketch to Strategy” · original-390-section-06.png, original-390-section-07.png
7. `section` at 6586px, 1926px tall — “Pokrovskoe Private House” · original-390-section-08.png
8. `section` at 8511px, 1545px tall — “People & Process” · original-390-section-09.png
9. `section` at 10056px, 378px tall — “The World’s Most Ambitious Brands Choose to Work With Us” · original-390-section-10.png
10. `footer` at 10434px, 939px tall — “KononenkoArchitecturalBureau” · original-390-section-11.png

### Media slots

- section 2: image, 390×836 (aspect 0.47), fit cover, **fills the window height**
- section 3: image, 390×260 (aspect 1.50), fit cover
- section 6: image, 359×213 (aspect 1.68), fit cover
- section 6: image, 359×213 (aspect 1.68), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover
- section 7: image, 359×224 (aspect 1.60), fit cover

### Motion

**Libraries and media seen:** Lenis smooth scroll

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 26 half-screens · e.g. div.dyh
- section 1: fixed, at scroll pinned for 26 half-screens · e.g. header.kbp.kvx “Kononenko Architectural Bureau Work, Abo”
- section 1: reveal on entering view — translateY 0→-22px, at scroll 10520–10529px · 3 elements · e.g. span.ln “Kononenko”; span.ln “Architectural”; span.ln “Bureau”
- section 1: reveal on entering view — translateY 0→-18px, at scroll 10520–10529px · 3 elements · e.g. a.link “Work,”; a.link “About,”; a.link “Contact”
- section 3: reveal on entering view — translateY 50→0px, at scroll 413–835px · 2 elements · e.g. span.wd “Systematic”; span.wd “Clarity”
- section 3: scrubbed with the scroll — translateY 50→0px, at scroll 413–1257px · 2 elements · e.g. span.wd “&”; span.wd “Creativity”
- section 3: reveal on entering view — translateY 18→0px, at scroll 413–835px · 4 elements · e.g. span.ln “Sustainability strategy, material effici”; span.ln “energy modeling, lifecycle analysis”; span.ln “Сoncept, facade and planning solutions, ”
- section 4: reveal on entering view — translateY 18→0px, at scroll 835–1257px · 24 elements · e.g. span.ln “Founded”; span.ln “2011”; span.ln “Founder”
- section 4: scrubbed with the scroll — translateY 18→0px, at scroll 835–1679px · 8 elements · e.g. span.ln “layouts, sketches, documentation, and”; span.ln “immersive visualizations.”; span.ln “1st place in the competition "Space", "G”
- section 4: scrubbed with the scroll — translateY 44→0px, at scroll 835–1679px · 6 elements · e.g. span.ln “An architecture bureau rooted”; span.ln “in precision and emotion. We”; span.ln “design with a deep”
- section 4: reveal on entering view — translateY 44→0px, at scroll 1257–1679px · 5 elements · e.g. span.ln “understanding of context,”; span.ln “function, and timeless form —”; span.ln “shaping environments that”
- section 5: reveal on entering view — translateY 53→0px, at scroll 2101–2523px · 3 elements · e.g. span.ln “Architectural”; span.ln “working”; span.ln “documentation,”
- section 5: scrubbed with the scroll — translateY 53→0px, at scroll 2101–2945px · 4 elements · e.g. span.ln “concept, facade and”; span.ln “planning solutions,”; span.ln “sketch project,”
- section 5: reveal on entering view — translateY 82→0px, at scroll 2523–2945px · e.g. div.hgh “Head office Italy, Rome 45 Casa di Maydw”
- section 5: reveal on entering view — translateY 65→0px, at scroll 2523–2945px · 5 elements · e.g. div.hgh “Corporate Headquarters Italy, Milan 102 ”; div.hgh “Central Office Italy, Turin 11 Sparrenwe”; div.hgh “Corporate Headquarters Netherlands, Gron”
- section 5: scrubbed with the scroll — translateY 82→0px, at scroll 2523–3367px · 2 elements · e.g. div.hgh “Main Headquarters Netherlands, Amsterdam”; div.hgh “Headquarters Italy, Bologna 23 Wilgenlaa”
- section 5: scrubbed with the scroll — translateY 65→0px, at scroll 2523–3367px · 6 elements · e.g. div.hgh “Central Office Netherlands, Rotterdam 56”; div.hgh “Administrative Office Italy, Florence 34”; div.hgh “Executive Office Netherlands, Utrecht 90”
- section 6: scrubbed with the scroll — translateY 41→0px, at scroll 3367–4211px · 2 elements · e.g. span.ln “From Sketch to”; span.ln “Strategy”
- section 6: scrubbed with the scroll — translateY 53→0px, at scroll 3789–4634px · 4 elements · e.g. span.ln “Early-stage ideas”; span.ln “are distilled into”; span.ln “precise frameworks,”
- section 6: reveal on entering view — translateY 53→0px, at scroll 4211–4634px · e.g. span.ln “analysis, and clarity.”
- section 6: reveal on entering view — translateY 18→0px, at scroll 4211–4634px · 9 elements · e.g. span.ln “From Sketch to Strategy”; span.ln “Publications”; span.ln “Kukha Design Award 2025”
- section 6: reveal on entering view — translateY 44→0px, at scroll 4211–4634px · 13 elements · e.g. span.ln “We begin with the essentials”; span.ln “— sketches, diagrams, raw”; span.ln “outlines. This is where we test”
- section 6: scrubbed with the scroll — translateY 44→0px, at scroll 4211–5056px · 14 elements · e.g. span.ln “the logic of space, the rhythm”; span.ln “of circulation, and the”; span.ln “relationship between human”
- section 6: scrubbed with the scroll — translateY 18→0px, at scroll 4634–5477px · 3 elements · e.g. span.ln “"Public Building Architecture"”; span.ln “"Completed Apartment Interior over 60 sq”; span.ln “Addawards 2023”
- section 6: reveal on entering view — translateY 41→0px, at scroll 5056–5477px · 2 elements · e.g. span.ln “Precision in”; span.ln “Development”
- section 7: reveal on entering view — translateY 44→0px, at scroll 5900–6321px · e.g. span.ln “Selected Projects (8+)”
- section 7: reveal on entering view — translateY 126→0px, at scroll 5900–6321px · 2 elements · e.g. a.qct “Pokrovskoe Private House 611 m² Visit”; a.qct “KNS Stolbovo 3,345 m² Visit”
- section 7: scrubbed with the scroll — opacity 1.00→1.00, at scroll 6743–8431px · 5 elements · e.g. img; img; img
- section 7: scrubbed with the scroll — translateY 126→0px, at scroll 5900–6743px · 4 elements · e.g. a.qct “Millenium Private Park 1,360 m² Visit”; a.qct “Bolshevik Residential 8,200 m² Visit”; a.qct “Kotelnaya Kinetics 16,488 m² Visit”
- section 7: reveal on entering view — translateY 0→0px, at scroll 6743–7165px · 2 elements · e.g. p.dlx “1,360 m²”; p.dlx “16,488 m²”
- section 7: reveal on entering view — translateY 18→18px, at scroll 6743–7587px · 2 elements · e.g. p.jts.link “Visit”; p.jts.link “Visit”
- section 7: reveal on entering view — opacity 1.00→1.00, at scroll 6743–8010px · e.g. img
- section 8: reveal on entering view — translateY 18→0px, at scroll 7587–8010px · 5 elements · e.g. span.ln “People & Process”; span.ln “Design approach grounded in passive stra”; span.ln “logic, and environmental responsibility.”
- section 8: scrubbed with the scroll — translateY 43→0px, at scroll 7587–8431px · e.g. span.ln “A studio shaped by”
- section 8: scrubbed with the scroll — translateY 53→0px, at scroll 7587–8431px · 8 elements · e.g. span.ln “clarity, trust, and a”; span.ln “Years of”; span.ln “experience”
- section 8: reveal on entering view — translateY 53→0px, at scroll 8010–8431px · 3 elements · e.g. span.ln “collective pursuit of”; span.ln “thoughtful design.”; span.ln “Completed”
- section 8: reveal on entering view — translateY 57→0px, at scroll 8010–8431px · e.g. span.ln “2011 Year”
- section 8: scrubbed with the scroll — translateY 57→0px, at scroll 8010–8854px · e.g. span.ln “of Foundation”
- section 8: reveal on entering view — translateY 50→0px, at scroll 8431–8854px · 3 elements · e.g. span.ln “15+”; span.ln “490+”; span.ln “45+”
- section 8: scrubbed with the scroll — translateY 50→0px, at scroll 8854–9697px · e.g. span.ln “40K”
- section 9: reveal on entering view — translateY 55→0px, at scroll 9275–9697px · 2 elements · e.g. span.ln “The”; span.ln “With Us”
- section 9: scrubbed with the scroll — translateY 55→0px, at scroll 9275–10119px · 3 elements · e.g. span.ln “World’s Most”; span.ln “Ambitious Brands”; span.ln “Choose to Work”
- section 10: reveal on entering view — translateY 15→0px, at scroll 9697–10119px · 3 elements · e.g. span.ln “Kononenko”; span.ln “Architectural”; span.ln “Bureau”
- section 10: reveal on entering view — translateY 18→0px, at scroll 9697–10119px · 19 elements · e.g. span.ln “Navigation”; span.ln “Index”; span.ln “About”
- section 10: scrubbed with the scroll — translateY 18→0px, at scroll 9697–10520px · 10 elements · e.g. span.ln “Work”; span.ln “Team”; span.ln “Contact”

**:hover rules in the CSS (first 19):**

- `.jke .rsp:hover { background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); }`
- `.frl .qct:hover .piz img { transform: scale(1.035); }`
- `.frl .qct:hover .i-c .dlx { transform: translateY(-101%); }`
- `.frl .qct:hover .i-c .jts { transform: translateY(0px); }`
- `.frl .qct:hover .i-c .jts::before { transform: scaleX(1); transform-origin: left center; transition-delay: 0.3s; }`
- `.link:not(.btn):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.link:not(.btn):not(button).is--a:hover::before, .link:not(.btn):not(button).router-link-active:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.asl:not(.btn):not(button).active:hover::before, .asl:not(.btn):not(button).router-link-active:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.art a:hover { opacity: 0.8; }`
- `.eun:hover { opacity: 0.7; width: 10px; }`
- `.xgy .ouf .qgi:hover { opacity: 1; }`
- `.ccc .ldk .lhy:hover { background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); }`
- `.rse .eoc:hover { opacity: 1; }`
- `.bjz:hover .fcr .tit img { opacity: 1; transform: scale(1); }`
- `.ijt .cew .dam .zkb:hover { opacity: 1; }`
- `.nnb .zsc .bcd:not(.ozu):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.nnb .zsc .bcd:not(.ozu):not(button).hqo:hover::before, .nnb .zsc .bcd:not(.ozu):not(button).put:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.nnb .zsc .gmu:not(.ozu):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.nnb .zsc .gmu:not(.ozu):not(button).hqo:hover::before, .nnb .zsc .gmu:not(.ozu):not(button).put:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`

### The site's own links

`/` Kononenko Architectural Bureau · `/work` Work, · `/about` About, · `/contact` Contact · `/legal` Legal documents

## 1440px — Kononenko Architectural Bureau (page 19034px tall, window 1440×900)

**Fonts:** `n` ×165 · `h` ×93

**Loaded faces:** n 400 normal · h 400 normal

**Font sizes:** `12px` ×173 · `30px` ×22 · `88.5px` ×19 · `131.25px` ×16 · `60px` ×13 · `9px` ×8 · `14.25px` ×6 · `33px` ×1

**Weights:** `400` ×258

**Size / line height:** `12px / 14.4px` ×173 · `30px / 33px` ×22 · `88.5px / 79.65px` ×19 · `60px / 48px` ×9 · `131.25px / 91.875px` ×8 · `9px / 10.8px` ×8 · `14.25px / 14.25px` ×6 · `131.25px / 107.188px` ×6 · `60px / 52.5px` ×4 · `131.25px / 111.562px` ×2

**Letter spacing:** `-0.24px` ×181 · `-0.9px` ×22 · `-2.655px` ×19 · `-3.9375px` ×16 · `-1.8px` ×13 · `-0.285px` ×6

**Text colours:** `rgb(0, 0, 0)` ×129 · `rgb(255, 255, 255)` ×68 · `rgb(146, 146, 146)` ×61

**Backgrounds:** `rgb(0, 0, 0)` ×610 · `rgb(248, 248, 248)` ×203

**Radii:** `50%` ×17

**Transitions:** `transform 0.6s cubic-bezier(0.17` ×16 · `transform, opacity 1.109s cubic-bezier(0.17` ×8 · `opacity 0.3s ease` ×4 · `background-color, color 0.3s cubic-bezier(0.17` ×2 · `transform, mix-blend-mode 0.6s cubic-bezier(0.17` ×1 · `opacity 0.3s cubic-bezier(0.17` ×1

### Sections

1. `header` at 0px, 73px tall, position fixed — “KononenkoArchitecturalBureau” · original-1440-section-01.png
2. `section` at 0px, 900px tall — **sized by the window: 100% of the window height** (675px in a 675px window) — “Kononenko Architectural Bureau” · original-1440-section-02.png
3. `section` at 1032px, 1135px tall — “SystematicClarity & Creativity” · original-1440-section-03.png
4. `section` at 2268px, 598px tall — “Founded” · original-1440-section-04.png
5. `section` at 2986px, 904px tall — “Architectural concept, facade and planning solutions, sketch project, working do” · original-1440-section-05.png
6. `section` at 4025px, 3447px tall — “From Sketch to Strategy” · original-1440-section-06.png, original-1440-section-07.png
7. `section` at 7682px, 3494px tall — “Pokrovskoe Private House” · original-1440-section-08.png, original-1440-section-09.png
8. `section` at 11176px, 1800px tall — **sized by the window: 200% of the window height** (1350px in a 675px window) — “Refined & Bold Essential” · original-1440-section-10.png
9. `section` at 12976px, 4239px tall — “People & Process” · original-1440-section-11.png, original-1440-section-12.png, original-1440-section-13.png
10. `section` at 17215px, 903px tall — “The World’s Most Ambitious Brands Choose to Work With Us” · original-1440-section-14.png
11. `footer` at 18118px, 916px tall — “KononenkoArchitecturalBureau” · original-1440-section-15.png

### Media slots

- section 2: image, 1440×900 (aspect 1.60), fit cover, **fills the window height**
- section 3: image, 1504×752 (aspect 2.00), fit cover
- section 7: image, 643×405 (aspect 1.59), fit cover
- section 7: image, 643×405 (aspect 1.59), fit cover
- section 7: image, 361×525 (aspect 0.69), fit cover
- section 7: image, 549×405 (aspect 1.36), fit cover
- section 7: image, 643×405 (aspect 1.59), fit cover
- section 7: image, 361×525 (aspect 0.69), fit cover
- section 7: image, 643×405 (aspect 1.59), fit cover
- section 7: image, 643×405 (aspect 1.59), fit cover
- section 10: image, 126×126 (aspect 1.00), fit cover
- section 10: image, 125×125 (aspect 1.00), fit cover
- section 10: image, 127×127 (aspect 1.00), fit cover
- section 10: image, 127×127 (aspect 1.00), fit cover
- section -: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 1 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 42 half-screens · 2 elements · e.g. div.dyh; div.wglw
- section 1: fixed, at scroll pinned for 42 half-screens · e.g. header.kbp.kvx “Kononenko Architectural Bureau Index, Wo”
- section 1: scrubbed with the scroll — translateY 0→-22px, at scroll 18131–18134px · 2 elements · e.g. span.ln “Kononenko”; span.ln “Architectural”
- section 1: scrubbed with the scroll — translateY 1→-22px, at scroll 441–18134px · e.g. span.ln “Bureau”
- section 1: reveal on entering view — translateY 0→-15px, at scroll 18131–18134px · e.g. a.router-link-active.router-link-exact-active “Index,”
- section 1: scrubbed with the scroll — translateY 1→-15px, at scroll 441–18134px · 2 elements · e.g. a.link “Work,”; a.link “About,”
- section 1: scrubbed with the scroll — translateY 2→-15px, at scroll 441–18134px · e.g. a.link “Contact”
- section 2: scrubbed with the scroll — translateY 0→180px, at scroll 441–1340px · e.g. div.mimg.hyy
- section 3: scrubbed with the scroll — translateY 159→0px, at scroll 441–1340px · 4 elements · e.g. span.wd “Systematic”; span.wd “Clarity”; span.wd “&”
- section 3: reveal on entering view — translateY 15→0px, at scroll 891–1340px · 4 elements · e.g. span.ln “Sustainability strategy, material effici”; span.ln “systems, energy modeling, lifecycle anal”; span.ln “Сoncept, facade and planning solutions, ”
- section 3: scrubbed with the scroll — translateY -144→144px, at scroll 891–2240px · e.g. img
- section 4: reveal on entering view — translateY 15→0px, at scroll 1791–2240px · 34 elements · e.g. span.ln “Founded”; span.ln “2011”; span.ln “Founder”
- section 4: reveal on entering view — translateY 48→0px, at scroll 1791–2240px · 5 elements · e.g. span.ln “An architecture bureau rooted in precisi”; span.ln “design with a deep understanding of cont”; span.ln “timeless form — shaping environments tha”
- section 4: scrubbed with the scroll — translateY 15→0px, at scroll 2240–3140px · 4 elements · e.g. span.ln “Over 80+ awards”; span.ln “in global competitions”; span.ln “Over 20+ publications”
- section 5: scrubbed with the scroll — translateY 125→0px, at scroll 2240–3140px · 3 elements · e.g. span.ln “Architectural concept, facade and”; span.ln “planning solutions, sketch project,”; span.ln “working documentation,”
- section 5: reveal on entering view — translateY 125→0px, at scroll 2690–3140px · e.g. span.ln “visualizations.”
- section 5: reveal on entering view — translateY 36→0px, at scroll 2690–3140px · 9 elements · e.g. div.hgh “Head office Italy, Rome 45 Casa di Maydw”; div.hgh “Main Office Italy, Venice 12 Cederweg, S”; div.hgh “Corporate Office Netherlands, The Hague ”
- section 5: scrubbed with the scroll — translateY 36→0px, at scroll 2690–3592px · 5 elements · e.g. div.hgh “Corporate Headquarters Italy, Milan 102 ”; div.hgh “Main Headquarters Netherlands, Amsterdam”; div.hgh “Central Office Netherlands, Rotterdam 56”
- section 6: reveal on entering view — translateY 79→0px, at scroll 3592–4043px · 4 elements · e.g. span.ln “From Sketch”; span.ln “to Strategy”; span.ln “Precision in”
- section 6: reveal on entering view — translateY 125→0px, at scroll 4492–4941px · 3 elements · e.g. span.ln “Early-stage ideas are distilled into”; span.ln “precise frameworks, balancing”; span.ln “intuition, analysis, and clarity.”
- section 6: reveal on entering view — translateY 15→0px, at scroll 4941–5390px · 12 elements · e.g. span.ln “From Sketch”; span.ln “to Strategy”; span.ln “Publications”
- section 6: reveal on entering view — translateY 48→0px, at scroll 4941–5390px · 8 elements · e.g. span.ln “We begin with the essentials — sketches,”; span.ln “outlines. This is where we test the logi”; span.ln “grounded, strategic direction — thoughtf”
- section 6: scrubbed with the scroll — translateY 48→0px, at scroll 4941–5841px · 9 elements · e.g. span.ln “rhythm of circulation, and the relations”; span.ln “human behavior and built form. Every lin”; span.ln “question and an answer, a tool for clari”
- section 6: scrubbed with the scroll — translateY 15→0px, at scroll 5390–6292px · e.g. span.ln “1st place in the competition "Space", "G”
- section 7: reveal on entering view — translateY 79→0px, at scroll 7190–7641px · e.g. span.ln “Selected”
- section 7: reveal on entering view — translateY 84→0px, at scroll 7190–7641px · e.g. span.ln “Projects (8+)”
- section 7: reveal on entering view — translateY 216→0px, at scroll 7190–7641px · 5 elements · e.g. a.qct “Pokrovskoe Private House 611 m² Visit”; a.qct “Millenium Private Park 1,360 m² Visit”; a.qct “KNS Stolbovo 3,345 m² Visit”
- section 7: reveal on entering view — opacity 1.00→1.00, at scroll 8540–10340px · 7 elements · e.g. img; img; img
- section 7: reveal on entering view — translateY 276→0px, at scroll 8091–8540px · 2 elements · e.g. a.qct “Bolshevik Residential 8,200 m² Visit”; a.qct “Vision Mansion 991 m² Visit”
- section 7: reveal on entering view — translateY 0→0px, at scroll 8540–8989px · e.g. p.dlx “3,345 m²”
- section 7: reveal on entering view — translateY 15→15px, at scroll 8540–9440px · e.g. p.jts.link “Visit”
- section 7: scrubbed with the scroll — translateY 216→0px, at scroll 8540–9440px · e.g. a.qct “Kotelnaya Kinetics 16,488 m² Visit”
- section 8: scrubbed with the scroll — translateY 0→-83px, at scroll 11690–12591px · 2 elements · e.g. span.ln “Refined & Bold”; span.ln “Essential”
- section 8: reveal on entering view — translateY 83→0px, at scroll 12140–12591px · e.g. span.ln “Simplicity & Clarity”
- section 8: scrubbed with the scroll — translateY 83→0px, at scroll 12140–13040px · e.g. span.ln “of Approach”
- section 8: scrubbed with the scroll — translateY -387→376px, translateX -4→-4px, at scroll 10340–13941px · e.g. span “01”
- section 8: scrubbed with the scroll — translateY -275→264px, translateX 265→-275px, at scroll 10340–13490px · e.g. span “02”
- section 8: scrubbed with the scroll — translateY -5→-5px, translateX 376→-387px, at scroll 10340–13941px · e.g. span “03”
- section 8: scrubbed with the scroll — translateY 264→-275px, translateX 265→-275px, at scroll 10340–13941px · e.g. span “04”
- section 8: scrubbed with the scroll — translateY 376→-387px, translateX -5→-5px, at scroll 10340–13490px · e.g. span “05”
- section 8: scrubbed with the scroll — translateY 264→-275px, translateX -275→265px, at scroll 10340–13490px · e.g. span “06”
- section 8: scrubbed with the scroll — translateY -5→-5px, translateX -386→377px, at scroll 10340–13490px · e.g. span “07”
- section 8: scrubbed with the scroll — translateY -275→264px, translateX -275→265px, at scroll 10340–13941px · e.g. span “08”
- section 9: reveal on entering view — translateY 15→0px, at scroll 12591–13040px · 4 elements · e.g. span.ln “People &”; span.ln “Process”; span.ln “Design approach grounded in passive stra”
- section 9: scrubbed with the scroll — translateY 103→0px, at scroll 12591–13490px · e.g. span.ln “A studio shaped by”
- section 9: scrubbed with the scroll — translateY 125→0px, at scroll 12591–13490px · 8 elements · e.g. span.ln “clarity, trust, and a”; span.ln “collective pursuit of”; span.ln “Completed”
- section 9: reveal on entering view — translateY 125→0px, at scroll 13040–13490px · 3 elements · e.g. span.ln “thoughtful design.”; span.ln “Years of”; span.ln “experience”
- section 9: reveal on entering view — translateY 179→0px, at scroll 13941–14390px · e.g. span.ln “2011 Year”
- section 9: scrubbed with the scroll — translateY 179→0px, at scroll 13941–14840px · e.g. span.ln “of Foundation”
- section 9: scrubbed with the scroll — translateY 15→0px, at scroll 13941–14840px · 2 elements · e.g. span.ln “material logic, and environmental respon”; span.ln “sustainable choices, and long-term value”
- section 9: reveal on entering view — opacity 0.20→0.20, at scroll 15290–15740px · 3 elements · e.g. div.ohb “15+ Years of experience”; div.ohb “490+ Completed projects”; div.ohb “45+ Professionals on the team”
- section 9: scrubbed with the scroll — translateY 159→0px, at scroll 14840–15740px · 4 elements · e.g. span.ln “15+”; span.ln “490+”; span.ln “45+”
- section 10: scrubbed with the scroll — translateY 175→0px, at scroll 16640–17541px · 4 elements · e.g. span.ln “The”; span.ln “World’s Most”; span.ln “Ambitious”
- section 10: reveal on entering view — translateY 175→0px, at scroll 17089–17541px · 2 elements · e.g. span.ln “Brands”; span.ln “Choose to”
- section 10: scrubbed with the scroll — opacity 0.00→0.94, translateY 356→263px, translateX 128→309px, scale 1.00→0.99, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.82, translateY 285→148px, translateX 278→429px, scale 0.99→0.96, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.64, translateY 177→-1px, translateX 405→500px, scale 0.96→0.91, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.42, translateY 35→-166px, translateX 490→491px, scale 0.92→0.84, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.25, translateY -129→-298px, translateX 501→394px, scale 0.86→0.78, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.15, translateY -273→-372px, translateX 422→245px, scale 0.80→0.74, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.11, translateY -360→-392px, translateX 281→80px, scale 0.75→0.71, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.10, translateY -392→-369px, translateX 118→-84px, scale 0.72→0.70, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.10, translateY -378→-308px, translateX -47→-239px, scale 0.70→0.71, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.13, translateY -325→-210px, translateX -205→-373px, scale 0.70→0.73, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.21, translateY -235→-77px, translateX -345→-472px, scale 0.72→0.77, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.36, translateY -110→84px, translateX -454→-507px, scale 0.76→0.82, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.57, translateY 46→239px, translateX -507→-452px, scale 0.81→0.89, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.77, translateY 207→342px, translateX -472→-323px, scale 0.87→0.94, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.91, translateY 324→388px, translateX -356→-164px, scale 0.93→0.98, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→0.99, translateY 382→386px, translateX -201→3px, scale 0.97→1.00, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 10: scrubbed with the scroll — opacity 0.00→1.00, translateY 390→343px, translateX -35→163px, scale 0.99→1.00, at scroll 16190–18134px · e.g. div.mimg.hyy
- section 11: reveal on entering view — translateY 15→0px, at scroll 17541–17991px · 8 elements · e.g. span.ln “Navigation”; span.ln “Media”; span.ln “Address”
- section 11: scrubbed with the scroll — translateY 15→0px, at scroll 17541–18131px · 12 elements · e.g. span.ln “Italia”; span.ln “Keizersgracht 421,”; span.ln “All rights reserved”

**:hover rules in the CSS (first 19):**

- `.jke .rsp:hover { background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); }`
- `.frl .qct:hover .piz img { transform: scale(1.035); }`
- `.frl .qct:hover .i-c .dlx { transform: translateY(-101%); }`
- `.frl .qct:hover .i-c .jts { transform: translateY(0px); }`
- `.frl .qct:hover .i-c .jts::before { transform: scaleX(1); transform-origin: left center; transition-delay: 0.3s; }`
- `.link:not(.btn):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.link:not(.btn):not(button).is--a:hover::before, .link:not(.btn):not(button).router-link-active:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.asl:not(.btn):not(button).active:hover::before, .asl:not(.btn):not(button).router-link-active:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.art a:hover { opacity: 0.8; }`
- `.eun:hover { opacity: 0.7; width: 10px; }`
- `.xgy .ouf .qgi:hover { opacity: 1; }`
- `.ccc .ldk .lhy:hover { background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); }`
- `.rse .eoc:hover { opacity: 1; }`
- `.bjz:hover .fcr .tit img { opacity: 1; transform: scale(1); }`
- `.ijt .cew .dam .zkb:hover { opacity: 1; }`
- `.nnb .zsc .bcd:not(.ozu):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.nnb .zsc .bcd:not(.ozu):not(button).hqo:hover::before, .nnb .zsc .bcd:not(.ozu):not(button).put:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`
- `.nnb .zsc .gmu:not(.ozu):not(button):hover::before { transform: scaleX(1); transform-origin: left center; }`
- `.nnb .zsc .gmu:not(.ozu):not(button).hqo:hover::before, .nnb .zsc .gmu:not(.ozu):not(button).put:hover::before { transform: scaleX(0); transform-origin: 100% 100%; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Kononenko Architectural Bureau · `/work` Work, · `/about` About, · `/contact` Contact · `/legal` Legal documents
