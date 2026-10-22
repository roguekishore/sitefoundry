# Design capture: https://aspensearch.com/

Counts are how often a value occurs (backgrounds: weighted by area).
Images: `-fold` (first screen), `-full` (whole page, shrinks when viewed), `-section-NN` (each section at full size: compare these), `-scroll-NN` (frames while scrolling).

## 390px — Aspen Search - Executive Search for Quantitative Finance & Tech (page 15208px tall, window 390×844)

**Fonts:** `suisseIntl` ×333 · `suisseIntlMono` ×74

**Loaded faces:** suisseIntl 400 normal · suisseIntl 400 italic · suisseIntl 450 normal · suisseIntl 450 italic · suisseIntl 600 normal · suisseIntl 600 italic · suisseIntl Fallback normal normal · suisseIntlMono 400 normal · suisseIntlMono Fallback normal normal

**Font sizes:** `14px` ×111 · `16px` ×55 · `12px` ×54 · `24.1959px` ×45 · `80px` ×32 · `24px` ×26 · `24.098px` ×25 · `80.7347px` ×24 · `80.4898px` ×22 · `53.8122px` ×4 · `33.618px` ×4 · `58.0118px` ×3 · `80.8644px` ×2

**Weights:** `450` ×242 · `400` ×163 · `500` ×2

**Size / line height:** `14px / 14px` ×111 · `16px / 20.8px` ×50 · `24.1959px / 26.6155px` ×45 · `12px / 13.2px` ×34 · `80px / 80px` ×32 · `24px / 26.4px` ×26 · `24.098px / 26.5078px` ×25 · `80.7347px / 80.7347px` ×24 · `80.4898px / 80.4898px` ×22 · `12px / 12px` ×20

**Letter spacing:** `-4%` ×356 · `-2%` ×51

**Text colours:** `rgb(35, 35, 35)` ×300 · `rgb(255, 255, 255)` ×102 · `oklab(0.999994 0.0000455678 0.0000200868 / 0.65)` ×3 · `oklab(0.256152 0.0000116825 0.000005126 / 0.65)` ×2

**Backgrounds:** `rgb(255, 255, 255)` ×1547 · `rgb(35, 35, 35)` ×872 · `rgb(161, 255, 203)` ×806 · `rgb(224, 224, 224)` ×552 · `rgb(217, 217, 217)` ×127

**Borders:** `1px solid rgb(35, 35, 35)` ×8 · `1px solid rgb(255, 255, 255)` ×1

**Shadows:** `rgb(35, 35, 35) 0px 1px 0px 0px` ×1 · `rgb(35, 35, 35) 0px 1px 0px 0px inset` ×1

**Transitions:** `transform, color 0.8s cubic-bezier(0.16` ×16 · `color, background-color, border-color, outline-color, text-d 0.8s cubic-bezier(0.16` ×14 · `color, background-color, border-color, outline-color, text-d 0.6s cubic-bezier(0.16` ×4 · `clip-path 0.8s cubic-bezier(0.87` ×2 · `transform, translate, scale, rotate 0.65s cubic-bezier(0.16` ×1 · `transform, translate, scale, rotate 0.56s cubic-bezier(0.16` ×1 · `transform, translate, scale, rotate 0.8s cubic-bezier(0.16` ×1 · `color, background-color, border-color, outline-color, text-d 0.3s cubic-bezier(0.87` ×1

**:root variables (2):** `--site-header-height: calc(var(--spacing) * 60)` · `--sbw: 0px`

### Sections

1. `header` at 0px, 61px tall, position sticky · original-390-section-01.png
2. `div` at 61px, 1523px tall — “Aspen” · original-390-section-02.png
3. `div#about` at 1584px, 1528px tall · original-390-section-03.png
4. `div` at 3111px, 2904px tall — “Connectingtop-tiertalent” · original-390-section-04.png, original-390-section-05.png
5. `div#clients` at 6016px, 1599px tall — “Clients” · original-390-section-06.png
6. `div#testimonials` at 7615px, 1157px tall · original-390-section-07.png
7. `div#team` at 8772px, 4313px tall — “Team” · original-390-section-08.png, original-390-section-09.png, original-390-section-10.png
8. `section` at 12579px, 1290px tall — **sized by the window: 153% of the window height** (953px in a 633px window) · original-390-section-11.png
9. `footer` at 13870px, 1338px tall · original-390-section-12.png

### Media slots

- section 2: canvas (WebGL/2D), 390×1523 (aspect 0.26), fit auto
- section 5: canvas (WebGL/2D), 390×389 (aspect 1.00), fit auto
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 7: image, 390×488 (aspect 0.80), fit cover
- section 8: canvas (WebGL/2D), 390×1290 (aspect 0.30), fit auto
- section -: canvas (WebGL/2D), 390×844 (aspect 0.46), fit auto, **fills the window height**

### Motion

**Libraries and media seen:** Lenis smooth scroll · 5 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 36 half-screens · 19 elements · e.g. div.pointer-events-none.fixed; div.pointer-events-none.fixed; div.pointer-events-none.fixed
- section -: scrubbed with the scroll — scale 0.67→0.78, rotate 0→180°, at scroll 401–14364px · e.g. div.vt-exclude.transform-3d
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 13061–13061px · 5 elements · e.g. span.block “Let's”; span.block “Start”; span.block “Conversation”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 0→0px, at scroll 2084–2508px · e.g. span.block “Let's”
- section -: scrubbed with the scroll — opacity 1.00→0.00, at scroll 401–2508px · e.g. span.block “Start”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 9→0px, at scroll 401–2508px · e.g. span.block “Conversation”
- section 1: pinned (sticky), at scroll pinned for 36 half-screens · e.g. header.sticky.inset-x-0 “LA: 10:05 AM 01:05 PM 0 1 2 3 4 5 6 7 8 ”
- section 1: scrubbed with the scroll — translateY 0→-14px, at scroll 823–14364px · e.g. span.flex.flex-col “01:05 PM 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5”
- section 1: scrubbed with the scroll — scale 0.89→0.78, rotate 180→180°, at scroll 401–14362px · e.g. div.vt-exclude.transform-3d
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 401–401px · e.g. div.flex.w-full “We don't move volume. We move careers th”
- section 2: scrubbed with the scroll — translateX -260→-103px, at scroll 401–14364px · 2 elements · e.g. div; div
- section 2: reveal on entering view — clip-path changes, at scroll 1243–1243px · 5 elements · e.g. div “We don't move volume. We move”; div “careers that compound — and the”; div “firms smart enough to invest in”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 401–823px · 5 elements · e.g. div “We don't move volume. We move”; div “careers that compound — and the”; div “firms smart enough to invest in”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1243–1243px · e.g. div.flex.w-full “Aspen Search was founded on a simple obs”
- section 3: reveal on entering view — translateY 0→-400px, at scroll 2084–2508px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: scrubbed with the scroll — translateY 0→-81px, at scroll 2084–2928px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: scrubbed with the scroll — translateY 0→-404px, at scroll 2084–2928px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — translateY 0→-80px, at scroll 2508–2928px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — translateY 0→-724px, at scroll 2508–2928px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — clip-path changes, at scroll 2508–2508px · 25 elements · e.g. div “Aspen Search was founded on a”; div “simple observation: the best”; div “quantitative researchers and”
- section 3: reveal on entering view — opacity 0.52→1.00, translateY 13→0px, at scroll 401–401px · e.g. div “quantitative researchers and”
- section 3: reveal on entering view — opacity 0.15→1.00, translateY 22→0px, at scroll 401–823px · e.g. div “engineers don't apply to jobs.”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 27→0px, at scroll 401–823px · 18 elements · e.g. div “They get one shot every few years”; div “to make a move, and they want”; div “that conversation to be with”
- section 3: scrubbed with the scroll — opacity 0.00→1.00, translateY 27→0px, at scroll 401–1243px · 3 elements · e.g. div “systems, the strategies, the”; div “decades inside the hiring rooms”; div “where someone should spend the”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 48→0px, at scroll 2508–2928px · 3 elements · e.g. span.block.whitespace-nowrap “CONNECTING”; span.block.whitespace-nowrap “TOP-TIER”; span.block.whitespace-nowrap “TALENT”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 2928–2928px · 13 elements · e.g. div.flex.w-full “At Aspen Search, we don't just fill posi”; span.inline-block “Quantitative Research”; div.flex.w-full “Researchers who own a signal end to end,”
- section 4: reveal on entering view — rotate 0→-50°, at scroll pinned for 0 half-screens · e.g. svg
- section 4: reveal on entering view — clip-path changes, at scroll 823–823px · 49 elements · e.g. div “At Aspen Search, we don't just fill posi”; div “careers and transform companies. We spec”; div “connecting exceptional engineering and r”
- section 4: reveal on entering view — opacity 0.72→1.00, at scroll 401–401px · e.g. div “connecting exceptional engineering and r”
- section 4: reveal on entering view — opacity 0.46→1.00, translateY 11→0px, at scroll 401–823px · e.g. div “talent with the world's most innovative ”
- section 4: reveal on entering view — opacity 0.08→1.00, translateY 19→0px, at scroll 401–823px · e.g. div “trading firms and venture-backed technol”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 401–823px · 9 elements · e.g. div “companies.”; div “idea to live capital. We know which pods”; div “hiring, how each firm structures its res”
- section 4: reveal on entering view — opacity 0.61→1.00, translateY 10→0px, at scroll 401–401px · e.g. div “Research”
- section 4: reveal on entering view — opacity 0.15→1.00, translateY 17→0px, at scroll 401–823px · e.g. div “Researchers who own a signal end to end,”
- section 4: reveal on entering view — opacity 0.71→1.00, at scroll 401–401px · e.g. div “SIGNAL RESEARCH”
- section 4: reveal on entering view — opacity 0.45→1.00, at scroll 401–823px · e.g. div “PORTFOLIO CONSTRUCTION”
- section 4: reveal on entering view — opacity 0.07→1.00, translateY 13→0px, at scroll 401–823px · e.g. div “SYSTEMATIC EQUITIES AND FUTURES”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 401–823px · 8 elements · e.g. div “PHD AND POST-DOC MOVES”; div “MARKET DATA PIPELINES”; div “RESEARCH PLATFORM TEAMS”
- section 4: reveal on entering view — opacity 0.68→1.00, at scroll 401–401px · e.g. div “execution, market data, and the platform”
- section 4: reveal on entering view — opacity 0.39→1.00, translateY 12→0px, at scroll 401–401px · e.g. div “researchers build on top of. Most arrive”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 20→0px, at scroll 401–823px · e.g. div “and want an honest read on what the swit”
- section 4: reveal on entering view — opacity 0.46→1.00, at scroll 401–401px · e.g. div “LOW-LATENCY C++”
- section 4: reveal on entering view — opacity 0.07→1.00, translateY 12→0px, at scroll 401–823px · e.g. div “EXECUTION AND ORDER ROUTING”
- section 4: reveal on entering view — opacity 0.66→1.00, at scroll 401–401px · e.g. div “Researchers and engineers moving between”
- section 4: reveal on entering view — opacity 0.36→1.00, translateY 13→0px, at scroll 401–823px · e.g. div “labs, venture-backed teams, and the fund”
- section 4: reveal on entering view — opacity 0.65→1.00, translateY 9→0px, at scroll 401–401px · e.g. div “Leadership”
- section 4: reveal on entering view — opacity 0.35→1.00, translateY 17→0px, at scroll 401–823px · e.g. div “& Team Builds”
- section 4: reveal on entering view — opacity 0.65→1.00, at scroll 401–401px · e.g. div “later, with a desk, a platform team, and”
- section 4: reveal on entering view — opacity 0.35→1.00, translateY 13→0px, at scroll 401–823px · e.g. div “running both.”
- section 4: reveal on entering view — opacity 0.73→1.00, at scroll 401–401px · e.g. div “HEADS OF RESEARCH”
- section 4: reveal on entering view — opacity 0.47→1.00, at scroll 401–823px · e.g. div “ENGINEERING LEADERSHIP”
- section 4: reveal on entering view — opacity 0.09→1.00, translateY 12→0px, at scroll 401–823px · e.g. div “NEW DESK BUILDOUTS”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 5882–5882px · 2 elements · e.g. span.inline-block “Clients”; div.flex.w-full “Our client relationships have existed fo”
- section 5: reveal on entering view — clip-path changes, at scroll 823–823px · 8 elements · e.g. div “Clients”; div “Our client relationships have existed fo”; div “decades. They're not logos we collected ”
- section 5: reveal on entering view — translateY 9→0px, at scroll 401–401px · e.g. div “Clients”
- section 5: reveal on entering view — opacity 0.29→1.00, translateY 14→0px, at scroll 401–401px · e.g. div “Our client relationships have existed fo”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 401–823px · 5 elements · e.g. div “decades. They're not logos we collected ”; div “firms we've helped staff through generat”; div “from a single quant researcher to entire”
- section 5: scrubbed with the scroll — opacity 0.00→1.00, translateY 21→0px, at scroll 401–1243px · e.g. div “and treat hiring as a long game.”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 7150–7150px · e.g. div.flex.w-full “Ben helped me get my dream job. My whole”
- section 6: reveal on entering view — clip-path changes, at scroll 2508–2508px · 24 elements · e.g. div “Ben helped me get my dream job.”; div “My whole work experience had”; div “been in big tech, and I could tell that”
- section 6: reveal on entering view — opacity 0.75→1.00, at scroll 401–401px · e.g. div “My whole work experience had”
- section 6: reveal on entering view — opacity 0.51→1.00, translateY 13→0px, at scroll 401–823px · e.g. div “been in big tech, and I could tell that”
- section 6: reveal on entering view — opacity 0.15→1.00, translateY 22→0px, at scroll 401–823px · e.g. div “there is a different style of”
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 27→0px, at scroll 401–823px · 16 elements · e.g. div “interviewing, communicating, and”; div “culture in quant. They were very”; div “hands on with prepping me for the”
- section 6: scrubbed with the scroll — opacity 0.00→1.00, translateY 27→0px, at scroll 401–1243px · 4 elements · e.g. div “and confident because of their”; div “Most importantly, I believe they are”; div “honest and transparent people. For”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 8413–8413px · 11 elements · e.g. span.inline-block “Team”; span.inline-block “Small team. High Signal.”; div.flex.w-full “Aspen is run by partners who do the work”
- section 7: reveal on entering view — clip-path changes, at scroll 823–823px · 24 elements · e.g. div “Team”; div “Small team.”; div “High Signal.”
- section 7: reveal on entering view — opacity 0.62→1.00, at scroll 401–401px · e.g. div “No junior researchers cold-DMing candida”
- section 7: reveal on entering view — opacity 0.30→1.00, translateY 14→0px, at scroll 401–823px · e.g. div “algorithmic outreach, no spray-and-pray.”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 401–823px · 2 elements · e.g. div “talk to someone at Aspen, you're talking”; div “who will run your search from intake to ”
- section 7: reveal on entering view — opacity 0.52→1.00, translateY 12→0px, at scroll 401–823px · e.g. div “Herman”
- section 7: reveal on entering view — opacity 0.37→1.00, translateY 16→0px, at scroll 401–823px · e.g. div “Lira”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 26→0px, at scroll 401–823px · e.g. div “Aptekman”
- section 7: reveal on entering view — opacity 0.73→1.00, at scroll 401–401px · e.g. div “Leonard”
- section 7: reveal on entering view — opacity 0.62→1.00, translateY 10→0px, at scroll 401–401px · e.g. div “Mlinaric”
- section 7: reveal on entering view — opacity 0.48→1.00, translateY 12→0px, at scroll 401–401px · e.g. div “Shawn”
- section 7: reveal on entering view — opacity 0.10→1.00, translateY 21→0px, at scroll 401–823px · e.g. div “Glabach”
- section 8: reveal on entering view — translateY 12→0px, at scroll 401–401px · e.g. span.block “LET'S”
- section 8: reveal on entering view — translateY 30→0px, at scroll 401–401px · 3 elements · e.g. span.block “START”; span.block “CONVERSATION”; span.block “A”
- section 9: reveal on entering view — opacity 0.00→1.00, at scroll 13482–13482px · 2 elements · e.g. span.inline-block “Raise your trajectory”; span.inline-block “Let’s start a conversation”
- section 9: reveal on entering view — clip-path changes, at scroll 823–823px · 4 elements · e.g. div “Raise your”; div “trajectory”; div “Let’s start a”
- section 9: reveal on entering view — opacity 0.57→1.00, translateY 11→0px, at scroll 401–823px · e.g. div “conversation”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `marqyL` on div: 12800ms, loops forever (transform)
- Animation `` on div “We don't move volume. We move”: 1000ms (opacity)
- Animation `` on div “careers that compound — and the”: 1000ms (opacity)
- Animation `` on div “firms smart enough to invest in”: 1000ms (opacity)
- Animation `` on div “them.”: 1000ms (opacity)
- Animation `` on div “Recent hires from:”: 1000ms (opacity)
- Animation `` on div “Aspen Search was founded on a”: 1000ms (opacity)
- Animation `` on div “simple observation: the best”: 1000ms (opacity)
- Animation `` on div “quantitative researchers and”: 1000ms (opacity)
- Animation `` on div “engineers don't apply to jobs.”: 1000ms (opacity)
- Animation `` on div “They get one shot every few years”: 1000ms (opacity)
- Animation `` on div “to make a move, and they want”: 1000ms (opacity)
- Animation `` on div “that conversation to be with”: 1000ms (opacity)
- Animation `` on div “someone who actually”: 1000ms (opacity)
- Animation `` on div “understands the work — the”: 1000ms (opacity)
- Animation `` on div “systems, the strategies, the”: 1000ms (opacity)
- Animation `` on div “tradeoffs, and the difference”: 1000ms (opacity)
- Animation `` on div “between a fund that will sharpen”: 1000ms (opacity)
- Animation `` on div “them and one that will stall them.”: 1000ms (opacity)
- Animation `` on div “That's the bar we hold ourselves”: 1000ms (opacity)
- Animation `` on div “to. We've spent nearly two”: 1000ms (opacity)
- Animation `` on div “decades inside the hiring rooms”: 1000ms (opacity)
- Animation `` on div “of the top systematic firms and”: 1000ms (opacity)
- Animation `` on div “the venture-backed teams”: 1000ms (opacity)
- Animation `` on div “competing for the same minds.”: 1000ms (opacity)
- Animation `` on div “We don't pitch roles. We have”: 1000ms (opacity)
- Animation `` on div “honest conversations about”: 1000ms (opacity)
- Animation `` on div “where someone should spend the”: 1000ms (opacity)
- Animation `` on div “next five years of their career —”: 1000ms (opacity)
- Animation `` on div “and we're often the reason it's the”: 1000ms (opacity)
- Animation `` on div “right call.”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “CONNECTING”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “TOP-TIER”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “TALENT”: 1000ms (opacity)
- Animation `` on div “At Aspen Search, we don't just fill posi”: 1000ms (opacity)
- Animation `` on div “careers and transform companies. We spec”: 1000ms (opacity)
- Animation `` on div “connecting exceptional engineering and r”: 1000ms (opacity)
- Animation `` on div “talent with the world's most innovative ”: 1000ms (opacity)
- Animation `` on div “trading firms and venture-backed technol”: 1000ms (opacity)
- Animation `` on div “companies.”: 1000ms (opacity)

**:hover rules in the CSS (first 19):**

- `.group-hover\:-translate-y-4:is(:where(.group):hover *) { --tw-translate-y: calc(var(--spacing) * -4); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:\[clip-path\:inset\(0_0_0_0\)\]:is(:where(.group):hover *) { clip-path: inset(0px); }`
- `.group-hover\:\[clip-path\:inset\(0_0_0_100\%\)\]:is(:where(.group):hover *) { clip-path: inset(0px 0px 0px 100%); }`
- `.peer-hover\:bg-theme-fg:is(:where(.peer):hover ~ *) { background-color: rgb(var(--theme-fg)); }`
- `.peer-hover\:text-theme-bg:is(:where(.peer):hover ~ *) { color: rgb(var(--theme-bg)); }`
- `.hover\:text-black:hover { color: var(--color-black); }`
- `.hover\:text-current:hover { color: currentcolor; }`
- `.hover\:text-mint:hover { color: var(--color-mint); }`
- `.hover\:text-theme-bg:hover { color: rgb(var(--theme-bg)); }`
- `.hover\:before\:scale-x-100:hover::before { content: var(--tw-content); --tw-scale-x: 100%; scale: var(--tw-scale-x) var(--tw-scale-y); }`
- `.motion-safe\:group-hover\:rotate-180:is(:where(.group):hover *) { rotate: 180deg; }`
- `.motion-reduce\:group-hover\:transform-\[translate\(0\,0\)\]:is(:where(.group):hover *) { transform: translate(0px); }`
- `.motion-reduce\:hover\:bg-black:hover { background-color: var(--color-black); }`
- `.motion-reduce\:hover\:bg-mint:hover { background-color: var(--color-mint); }`
- `.motion-reduce\:hover\:bg-theme-fg:hover { background-color: rgb(var(--theme-fg)); }`
- `.motion-reduce\:hover\:text-black:hover { color: var(--color-black); }`
- `.motion-reduce\:hover\:text-mint:hover { color: var(--color-mint); }`
- `.motion-reduce\:hover\:text-theme-bg:hover { color: rgb(var(--theme-bg)); }`
- `[data-marqy][data-pause-on-hover]:hover > [data-marqy-inner] > [data-marqy-content] { animation-play-state: paused; }`

### The site's own links

`/` Aspen Search home

## 1440px — Aspen Search - Executive Search for Quantitative Finance & Tech (page 10847px tall, window 1440×900)

**Fonts:** `suisseIntl` ×314 · `suisseIntlMono` ×104

**Loaded faces:** suisseIntl 400 normal · suisseIntl 400 italic · suisseIntl 450 normal · suisseIntl 450 italic · suisseIntl 600 normal · suisseIntl 600 italic · suisseIntl Fallback normal normal · suisseIntlMono 400 normal · suisseIntlMono Fallback normal normal

**Font sizes:** `14px` ×111 · `12px` ×84 · `16px` ×62 · `80px` ×32 · `37.9102px` ×31 · `132.163px` ×24 · `24px` ×22 · `114.776px` ×22 · `30.9551px` ×17 · `180.669px` ×4 · `124.128px` ×4 · `107.623px` ×3 · `150.24px` ×2

**Weights:** `450` ×223 · `400` ×193 · `500` ×2

**Size / line height:** `14px / 14px` ×111 · `16px / 20.8px` ×60 · `12px / 12px` ×47 · `12px / 13.2px` ×37 · `80px / 80px` ×32 · `37.9102px / 41.7012px` ×31 · `132.163px / 132.163px` ×24 · `24px / 26.4px` ×22 · `114.776px / 114.776px` ×22 · `30.9551px / 34.0506px` ×17

**Letter spacing:** `-4%` ×379 · `-2%` ×39

**Text colours:** `rgb(35, 35, 35)` ×305 · `rgb(255, 255, 255)` ×108 · `oklab(0.999994 0.0000455678 0.0000200868 / 0.65)` ×3 · `oklab(0.256152 0.0000116825 0.000005126 / 0.65)` ×2

**Backgrounds:** `rgb(255, 255, 255)` ×2121 · `rgb(35, 35, 35)` ×1412 · `rgb(161, 255, 203)` ×926 · `rgb(224, 224, 224)` ×751 · `rgb(217, 217, 217)` ×544 · `rgb(8, 34, 90)` ×301 · `rgb(0, 75, 135)` ×151 · `rgb(0, 154, 166)` ×151 · `rgb(38, 33, 96)` ×151 · `rgb(3, 89, 140)` ×151

**Borders:** `1px solid rgb(35, 35, 35)` ×12 · `1px solid rgb(255, 255, 255)` ×1

**Shadows:** `rgb(35, 35, 35) 0px 1px 0px 0px` ×2 · `rgb(35, 35, 35) 0px 1px 0px 0px inset` ×1

**Transitions:** `transform, color 0.8s cubic-bezier(0.16` ×19 · `color, background-color, border-color, outline-color, text-d 0.8s cubic-bezier(0.16` ×14 · `color, background-color, border-color, outline-color, text-d 0.6s cubic-bezier(0.16` ×8 · `clip-path 0.8s cubic-bezier(0.87` ×2 · `transform, translate, scale, rotate 0.65s cubic-bezier(0.16` ×1 · `transform, translate, scale, rotate 0.2s cubic-bezier(0.16` ×1 · `transform, translate, scale, rotate 0.45s cubic-bezier(0.34` ×1 · `transform, translate, scale, rotate 0.8s cubic-bezier(0.16` ×1

**:root variables (2):** `--site-header-height: calc(var(--spacing) * 60)` · `--sbw: 0px`

### Sections

1. `header` at 0px, 61px tall, position sticky · original-1440-section-01.png
2. `div` at 61px, 1845px tall — **sized by the window: 205% of the window height** (1361px in a 675px window) — “Aspen” · original-1440-section-02.png
3. `div#about` at 1906px, 1979px tall · original-1440-section-03.png
4. `div` at 3885px, 1728px tall — “Connectingtop-tiertalent” · original-1440-section-04.png
5. `div#clients` at 5612px, 1426px tall — “Clients” · original-1440-section-05.png
6. `div#testimonials` at 7038px, 840px tall · original-1440-section-06.png
7. `div#team` at 7878px, 1289px tall — “Team” · original-1440-section-07.png
8. `section` at 8627px, 1380px tall — **sized by the window: 153% of the window height** (1020px in a 675px window) · original-1440-section-08.png
9. `footer` at 10007px, 840px tall — **sized by the window: 93% of the window height** (615px in a 675px window) · original-1440-section-09.png

### Media slots

- section 2: canvas (WebGL/2D), 1440×1845 (aspect 0.78), fit auto
- section 5: canvas (WebGL/2D), 720×584 (aspect 1.23), fit auto
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 5: image, 200×200 (aspect 1.00), fit contain
- section 6: image, 391×457 (aspect 0.86), fit cover
- section 6: canvas (WebGL/2D), 360×420 (aspect 0.86), fit auto
- section 7: image, 359×449 (aspect 0.80), fit cover
- section 7: image, 359×449 (aspect 0.80), fit cover
- section 7: canvas (WebGL/2D), 1440×900 (aspect 1.60), fit auto, **fills the window height**
- section 8: canvas (WebGL/2D), 1440×1380 (aspect 1.04), fit auto

### Motion

**Libraries and media seen:** Lenis smooth scroll · 5 canvas element(s) (WebGL/2D art)

**While scrolling** (sampled every half screen):

- section -: fixed, at scroll pinned for 24 half-screens · 18 elements · e.g. div.pointer-events-none.fixed; div.pointer-events-none.fixed; div.pointer-events-none.fixed
- section -: scrubbed with the scroll — scale 0.95→0.14, rotate 0→180°, at scroll 443–9947px · e.g. div.vt-exclude.transform-3d
- section -: reveal on entering view — opacity 1.00→0.00, at scroll 8988–8988px · 4 elements · e.g. span.block “Let's”; span.block “Start”; span.block “Conversation”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 7→0px, at scroll 443–1794px · e.g. span.block “Let's”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 19→0px, at scroll 443–1794px · e.g. span.block “Start”
- section -: reveal on entering view — opacity 1.00→0.00, translateY 112→0px, at scroll 443–1794px · e.g. span.block “Conversation”
- section -: scrubbed with the scroll — opacity 1.00→0.00, translateY 52→0px, at scroll 443–1794px · e.g. span.block “a”
- section -: reveal on entering view — translateY 10→0px, at scroll 443–443px · e.g. span.block “Let's”
- section -: reveal on entering view — translateY 26→0px, at scroll 443–443px · e.g. span.block “Start”
- section -: reveal on entering view — translateY 112→0px, at scroll 443–443px · e.g. span.block “Conversation”
- section -: reveal on entering view — translateY 73→0px, at scroll 443–443px · e.g. span.block “a”
- section 1: pinned (sticky), at scroll pinned for 24 half-screens · e.g. header.sticky.inset-x-0 “NYC: 01:06 PM 01:06 PM 0 1 2 3 4 5 6 7 8”
- section 1: scrubbed with the scroll — scale 0.95→0.14, rotate 0→180°, at scroll 443–9947px · e.g. div.vt-exclude.transform-3d
- section 1: reveal on entering view — translateY 0→-14px, at scroll 443–9944px · e.g. span.flex.flex-col “01:06 PM 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5”
- section 2: scrubbed with the scroll — translateX -310→-190px, at scroll 443–9947px · 2 elements · e.g. div; div
- section 2: reveal on entering view — opacity 0.00→1.00, at scroll 443–443px · e.g. span.inline-block “Search”
- section 2: reveal on entering view — opacity 0.00→1.00, translateY 123→0px, at scroll 890–1336px · 2 elements · e.g. span.block.whitespace-nowrap “PLACING”; span.block.whitespace-nowrap “WINNERS.”
- section 2: reveal on entering view — clip-path changes, at scroll 443–443px · e.g. div “Search”
- section 2: reveal on entering view — translateY 14→0px, at scroll 443–443px · e.g. div “Search”
- section 3: reveal on entering view — opacity 0.00→1.00, at scroll 1336–1336px · e.g. div.flex.w-full “Aspen Search was founded on a simple obs”
- section 3: scrubbed with the scroll — translateY 0→-400px, at scroll 2238–3122px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — translateY 0→-132px, at scroll 2675–3122px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: scrubbed with the scroll — translateY 0→-661px, at scroll 2675–3571px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — translateY 0→-115px, at scroll 2675–3122px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: scrubbed with the scroll — translateY 0→-1033px, at scroll 2675–3571px · e.g. span.absolute.inset-x-0 “0 1 2 3 4 5 6 7 8 9”
- section 3: reveal on entering view — clip-path changes, at scroll 890–890px · 17 elements · e.g. div “Aspen Search was founded on a simple”; div “observation: the best quantitative resea”; div “and engineers don't apply to jobs. They ”
- section 3: reveal on entering view — opacity 0.74→1.00, at scroll 443–443px · e.g. div “and engineers don't apply to jobs. They ”
- section 3: reveal on entering view — opacity 0.49→1.00, translateY 16→0px, at scroll 443–443px · e.g. div “shot every few years to make a move, and”
- section 3: reveal on entering view — opacity 0.11→1.00, translateY 28→0px, at scroll 443–443px · e.g. div “want that conversation to be with someon”
- section 3: reveal on entering view — opacity 0.00→1.00, translateY 34→0px, at scroll 443–443px · 12 elements · e.g. div “actually understands the work — the syst”; div “strategies, the tradeoffs, and the diffe”; div “between a fund that will sharpen them an”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 88→0px, at scroll 3122–4025px · e.g. span.block.whitespace-nowrap “CONNECTING”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 88→0px, at scroll 3571–4025px · 2 elements · e.g. span.block.whitespace-nowrap “TOP-TIER”; span.block.whitespace-nowrap “TALENT”
- section 4: reveal on entering view — opacity 0.00→1.00, at scroll 4025–4025px · 13 elements · e.g. div.flex.w-full “At Aspen Search, we don't just fill posi”; span.inline-block “Quantitative Research”; div.flex.w-full “Researchers who own a signal end to end,”
- section 4: reveal on entering view — rotate 0→-50°, at scroll pinned for 0 half-screens · e.g. svg
- section 4: reveal on entering view — clip-path changes, at scroll 890–890px · 53 elements · e.g. div “Quantitative”; div “Research”; div “Researchers who own a signal end to end,”
- section 4: reveal on entering view — opacity 0.10→1.00, translateY 36→0px, at scroll 443–890px · e.g. div “Quantitative”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 42→0px, at scroll 443–890px · 2 elements · e.g. div “Research”; div “Learning”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 443–890px · 18 elements · e.g. div “Researchers who own a signal end to end,”; div “from first idea to live capital. We know”; div “which pods are actually hiring, how each”
- section 4: scrubbed with the scroll — opacity 0.00→1.00, translateY 21→0px, at scroll 443–1336px · 2 elements · e.g. div “a real offer looks like before you ever ”; div “like.”
- section 4: reveal on entering view — opacity 0.48→1.00, at scroll 443–443px · 2 elements · e.g. div “SIGNAL RESEARCH”; div “LOW-LATENCY C++”
- section 4: reveal on entering view — opacity 0.10→1.00, translateY 12→0px, at scroll 443–890px · e.g. div “PORTFOLIO CONSTRUCTION”
- section 4: reveal on entering view — opacity 0.00→1.00, translateY 14→0px, at scroll 443–890px · 8 elements · e.g. div “SYSTEMATIC EQUITIES AND FUTURES”; div “PHD AND POST-DOC MOVES”; div “MARKET DATA PIPELINES”
- section 4: reveal on entering view — opacity 0.42→1.00, translateY 23→0px, at scroll 443–443px · e.g. div “Engineering”
- section 4: reveal on entering view — opacity 0.02→1.00, translateY 39→0px, at scroll 443–890px · e.g. div “& Infrastructure”
- section 4: reveal on entering view — opacity 0.02→1.00, translateY 20→0px, at scroll 443–890px · e.g. div “The engineers who keep a strategy alive ”
- section 4: reveal on entering view — opacity 0.71→1.00, at scroll 443–443px · e.g. div “specialize in connecting exceptional eng”
- section 4: reveal on entering view — opacity 0.45→1.00, translateY 11→0px, at scroll 443–890px · e.g. div “and research talent with the world's mos”
- section 4: reveal on entering view — opacity 0.07→1.00, translateY 19→0px, at scroll 443–890px · e.g. div “innovative quantitative trading firms an”
- section 4: reveal on entering view — opacity 0.11→1.00, translateY 12→0px, at scroll 443–890px · e.g. div “EXECUTION AND ORDER ROUTING”
- section 4: reveal on entering view — opacity 0.66→1.00, translateY 14→0px, at scroll 443–443px · e.g. div “AI &”
- section 4: reveal on entering view — opacity 0.37→1.00, translateY 26→0px, at scroll 443–890px · e.g. div “Machine”
- section 4: reveal on entering view — opacity 0.37→1.00, translateY 13→0px, at scroll 443–890px · e.g. div “Researchers and engineers moving”
- section 4: reveal on entering view — opacity 0.50→1.00, at scroll 443–443px · e.g. div “APPLIED AI ENGINEERING”
- section 4: reveal on entering view — opacity 0.14→1.00, translateY 12→0px, at scroll 443–890px · e.g. div “ML AND DEEP LEARNING RESEARCH”
- section 4: reveal on entering view — opacity 0.56→1.00, translateY 17→0px, at scroll 443–443px · e.g. div “Leadership”
- section 4: reveal on entering view — opacity 0.21→1.00, translateY 31→0px, at scroll 443–443px · e.g. div “& Team Builds”
- section 4: reveal on entering view — opacity 0.21→1.00, translateY 16→0px, at scroll 443–443px · e.g. div “Whole functions, not single seats. Some ”
- section 4: reveal on entering view — opacity 0.65→1.00, at scroll 443–443px · e.g. div “HEADS OF RESEARCH”
- section 4: reveal on entering view — opacity 0.34→1.00, translateY 9→0px, at scroll 443–443px · e.g. div “ENGINEERING LEADERSHIP”
- section 5: reveal on entering view — opacity 0.00→1.00, at scroll 4927–4927px · 2 elements · e.g. span.inline-block “Clients”; div.flex.w-full “Our client relationships have existed fo”
- section 5: scrubbed with the scroll — translateY 0→-60px, at scroll 6275–7169px · e.g. span.flex.flex-col “HEADLANDS TWO SIGMA EQR - CITADEL VATIC ”
- section 5: scrubbed with the scroll — translateY 0→-2100px, at scroll 6275–7169px · e.g. div.absolute.inset-x-0
- section 5: reveal on entering view — clip-path changes, at scroll 890–890px · 9 elements · e.g. div “Clients”; div “Our client relationships have existed fo”; div “two decades. They're not logos we collec”
- section 5: reveal on entering view — opacity 0.75→1.00, translateY 34→0px, at scroll 443–443px · e.g. div “Clients”
- section 5: reveal on entering view — opacity 0.54→1.00, translateY 9→0px, at scroll 443–443px · e.g. div “generations of hiring, from a single qua”
- section 5: reveal on entering view — opacity 0.19→1.00, translateY 16→0px, at scroll 443–890px · e.g. div “researcher to entire engineering organiz”
- section 5: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 443–890px · 3 elements · e.g. div “We work with the firms that pay the top ”; div “market, run the best research environmen”; div “and treat hiring as a long game.”
- section 6: reveal on entering view — opacity 0.00→1.00, at scroll 6727–6727px · e.g. div.flex.w-full “Lira’s great! She helped narrow my searc”
- section 6: reveal on entering view — clip-path changes, at scroll 890–890px · 9 elements · e.g. div “Lira’s great! She helped narrow my searc”; div “to trading firms I’d actually be interes”; div “and would not have known about”
- section 6: reveal on entering view — translateY 8→0px, at scroll 443–443px · e.g. div “and would not have known about”
- section 6: reveal on entering view — opacity 0.59→1.00, translateY 17→0px, at scroll 443–890px · e.g. div “otherwise, had a ton of valuable”
- section 6: reveal on entering view — opacity 0.26→1.00, translateY 30→0px, at scroll 443–890px · e.g. div “connections, and provided specific insig”
- section 6: reveal on entering view — opacity 0.00→1.00, translateY 42→0px, at scroll 443–890px · 4 elements · e.g. div “at every step of the process. She was”; div “responsive, but didn’t call at 7 or 8am ”; div “many recruiters in the space. Highly”
- section 7: reveal on entering view — opacity 0.00→1.00, at scroll 7169–7169px · 7 elements · e.g. span.inline-block “Team”; span.inline-block “Small team. High Signal.”; div.flex.w-full “Aspen is run by partners who do the work”
- section 7: scrubbed with the scroll — translateY 90→-90px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Ben Herman FOUNDER & CEO”
- section 7: reveal on entering view — opacity 1.00→0.00, at scroll 7630–7630px · 6 elements · e.g. img.max-w-full.size-full; img.max-w-full.size-full; img.max-w-full.size-full
- section 7: scrubbed with the scroll — translateY 247→-247px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Lira Aptekman TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 157→-157px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Tyler Guimaraes TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 314→-314px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Kunal Batra TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 180→-180px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Chris Demmel TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 112→-112px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Mike Leonard TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 269→-269px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Mario Mlinaric TALENT PARTNER”
- section 7: scrubbed with the scroll — translateY 202→-202px, at scroll 7630–9430px · e.g. div.lg:shrink-0.lg:basis-(--card-basis) “Shawn Glabach TALENT PARTNER”
- section 7: fixed, at scroll pinned for 24 half-screens · e.g. div.!border-0
- section 7: reveal on entering view — clip-path changes, at scroll 443–443px · 11 elements · e.g. div “Team”; div “Small team.”; div “High Signal.”
- section 7: reveal on entering view — opacity 0.64→1.00, translateY 47→0px, at scroll 443–443px · e.g. div “Team”
- section 7: reveal on entering view — translateY 9→0px, at scroll 443–443px · e.g. div “High Signal.”
- section 7: reveal on entering view — opacity 0.60→1.00, at scroll 443–443px · e.g. div “themselves. No junior researchers cold-D”
- section 7: reveal on entering view — opacity 0.28→1.00, translateY 15→0px, at scroll 443–890px · e.g. div “candidates, no algorithmic outreach, no ”
- section 7: reveal on entering view — opacity 0.00→1.00, translateY 21→0px, at scroll 443–890px · 3 elements · e.g. div “and-pray. When you talk to someone at As”; div “you're talking to the person who will ru”; div “search from intake to offer.”
- section 9: reveal on entering view — opacity 0.00→1.00, at scroll 9430–9430px · 2 elements · e.g. span.inline-block “Raise your trajectory”; span.inline-block “Let’s start a conversation”
- section 9: pinned (sticky), at scroll pinned for 2 half-screens · e.g. div.grid.grid-cols-1 “© 2026 ASPEN SEARCH • Privacy Policy WEB”
- section 9: reveal on entering view — clip-path changes, at scroll 443–443px · 4 elements · e.g. div “Raise your”; div “trajectory”; div “Let’s start a”

**Animations running** (CSS keyframes and Web Animations):

- CSSAnimation `marqyL` on div: 12800ms, loops forever (transform)
- Animation `` on div “Search”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “PLACING”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “WINNERS.”: 1000ms (opacity)
- Animation `` on div “Aspen Search was founded on a simple”: 1000ms (opacity)
- Animation `` on div “observation: the best quantitative resea”: 1000ms (opacity)
- Animation `` on div “and engineers don't apply to jobs. They ”: 1000ms (opacity)
- Animation `` on div “shot every few years to make a move, and”: 1000ms (opacity)
- Animation `` on div “want that conversation to be with someon”: 1000ms (opacity)
- Animation `` on div “actually understands the work — the syst”: 1000ms (opacity)
- Animation `` on div “strategies, the tradeoffs, and the diffe”: 1000ms (opacity)
- Animation `` on div “between a fund that will sharpen them an”: 1000ms (opacity)
- Animation `` on div “that will stall them.”: 1000ms (opacity)
- Animation `` on div “That's the bar we hold ourselves to. We'”: 1000ms (opacity)
- Animation `` on div “nearly two decades inside the hiring roo”: 1000ms (opacity)
- Animation `` on div “top systematic firms and the venture-bac”: 1000ms (opacity)
- Animation `` on div “teams competing for the same minds. We d”: 1000ms (opacity)
- Animation `` on div “pitch roles. We have honest conversation”: 1000ms (opacity)
- Animation `` on div “where someone should spend the next five”: 1000ms (opacity)
- Animation `` on div “of their career — and we're often the re”: 1000ms (opacity)
- Animation `` on div “the right call.”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “CONNECTING”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “TOP-TIER”: 1000ms (opacity)
- Animation `` on span.block.whitespace-nowrap “TALENT”: 1000ms (opacity)
- Animation `` on div “Quantitative”: 1000ms (opacity)
- Animation `` on div “Research”: 1000ms (opacity)
- Animation `` on div “Researchers who own a signal end to end,”: 1000ms (opacity)
- Animation `` on div “from first idea to live capital. We know”: 1000ms (opacity)
- Animation `` on div “which pods are actually hiring, how each”: 1000ms (opacity)
- Animation `` on div “firm structures its research stack, and ”: 1000ms (opacity)
- Animation `` on div “a real offer looks like before you ever ”: 1000ms (opacity)
- Animation `` on div “one.”: 1000ms (opacity)
- Animation `` on div “SIGNAL RESEARCH”: 1000ms (opacity)
- Animation `` on div “PORTFOLIO CONSTRUCTION”: 1000ms (opacity)
- Animation `` on div “SYSTEMATIC EQUITIES AND FUTURES”: 1000ms (opacity)
- Animation `` on div “PHD AND POST-DOC MOVES”: 1000ms (opacity)
- Animation `` on div “Engineering”: 1000ms (opacity)
- Animation `` on div “& Infrastructure”: 1000ms (opacity)
- Animation `` on div “The engineers who keep a strategy alive ”: 1000ms (opacity)
- Animation `` on div “production: execution, market data, and”: 1000ms (opacity)

**On hover:**

- a “About”: color: rgb(35, 35, 35) → rgb(255, 255, 255); border: rgb(35, 35, 35) → rgb(255, 255, 255); inner color: rgb(35, 35, 35) → rgb(255, 255, 255); inner border: rgb(35, 35, 35) → rgb(255, 255, 255); inner transform: matrix(1, 0, 0, 1, 0, 29.7969) → matrix(1, 0, 0, 1, 0, -0.458264) · transition `color 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s cubic-b`
- button “Contact”: color: rgb(255, 255, 255) → rgb(38, 38, 38); border: rgb(255, 255, 255) → rgb(38, 38, 38); inner color: rgb(255, 255, 255) → rgb(38, 38, 38); inner border: rgb(255, 255, 255) → rgb(38, 38, 38) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- button “START A CONVERSATION”: color: rgb(255, 255, 255) → rgb(37, 37, 37); border: rgb(255, 255, 255) → rgb(37, 37, 37); inner color: rgb(255, 255, 255) → rgb(37, 37, 37); inner border: rgb(255, 255, 255) → rgb(37, 37, 37) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- button “TALK TO A PARTNER”: color: rgb(255, 255, 255) → rgb(37, 37, 37); border: rgb(255, 255, 255) → rgb(37, 37, 37); inner color: rgb(255, 255, 255) → rgb(37, 37, 37); inner border: rgb(255, 255, 255) → rgb(37, 37, 37) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- button “Headlands QUANT FINANCE”: color: rgb(35, 35, 35) → rgb(251, 251, 251); border: rgb(35, 35, 35) → rgb(251, 251, 251); inner color: rgb(35, 35, 35) → rgb(251, 251, 251); inner border: rgb(35, 35, 35) → rgb(251, 251, 251); inner scale: 1 0 → 1 0.979917 · transition `color 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.8s cubic-b`
- button “Syntria AI”: color: rgb(37, 37, 37) → rgb(253, 253, 253); border: rgb(37, 37, 37) → rgb(253, 253, 253); inner color: rgb(37, 37, 37) → rgb(253, 253, 253); inner border: rgb(37, 37, 37) → rgb(253, 253, 253); inner scale: 1 0.0095158 → 1 0.995095 · transition `color 0.8s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.8s cubic-b`
- button: color: rgb(35, 35, 35) → rgb(253, 253, 253); border: rgb(35, 35, 35) → rgb(253, 253, 253); inner color: rgb(35, 35, 35) → rgb(253, 253, 253); inner border: rgb(35, 35, 35) → rgb(253, 253, 253) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- button: color: rgb(35, 35, 35) → rgb(252, 252, 252); border: rgb(35, 35, 35) → rgb(252, 252, 252); inner color: rgb(35, 35, 35) → rgb(252, 252, 252); inner border: rgb(35, 35, 35) → rgb(252, 252, 252) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- button: color: rgb(35, 35, 35) → rgb(158, 251, 200); border: rgb(35, 35, 35) → rgb(158, 251, 200); inner color: rgb(35, 35, 35) → rgb(158, 251, 200); inner border: rgb(35, 35, 35) → rgb(158, 251, 200) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
- a “ben@aspensearch.com”: color: rgb(35, 35, 35) → rgb(253, 253, 253); border: rgb(35, 35, 35) → rgb(253, 253, 253); inner color: rgb(35, 35, 35) → rgb(253, 253, 253); inner border: rgb(35, 35, 35) → rgb(253, 253, 253) · transition `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1)`

**:hover rules in the CSS (first 19):**

- `.group-hover\:-translate-y-4:is(:where(.group):hover *) { --tw-translate-y: calc(var(--spacing) * -4); translate: var(--tw-translate-x) var(--tw-translate-y); }`
- `.group-hover\:\[clip-path\:inset\(0_0_0_0\)\]:is(:where(.group):hover *) { clip-path: inset(0px); }`
- `.group-hover\:\[clip-path\:inset\(0_0_0_100\%\)\]:is(:where(.group):hover *) { clip-path: inset(0px 0px 0px 100%); }`
- `.peer-hover\:bg-theme-fg:is(:where(.peer):hover ~ *) { background-color: rgb(var(--theme-fg)); }`
- `.peer-hover\:text-theme-bg:is(:where(.peer):hover ~ *) { color: rgb(var(--theme-bg)); }`
- `.hover\:text-black:hover { color: var(--color-black); }`
- `.hover\:text-current:hover { color: currentcolor; }`
- `.hover\:text-mint:hover { color: var(--color-mint); }`
- `.hover\:text-theme-bg:hover { color: rgb(var(--theme-bg)); }`
- `.hover\:before\:scale-x-100:hover::before { content: var(--tw-content); --tw-scale-x: 100%; scale: var(--tw-scale-x) var(--tw-scale-y); }`
- `.motion-safe\:group-hover\:rotate-180:is(:where(.group):hover *) { rotate: 180deg; }`
- `.motion-reduce\:group-hover\:transform-\[translate\(0\,0\)\]:is(:where(.group):hover *) { transform: translate(0px); }`
- `.motion-reduce\:hover\:bg-black:hover { background-color: var(--color-black); }`
- `.motion-reduce\:hover\:bg-mint:hover { background-color: var(--color-mint); }`
- `.motion-reduce\:hover\:bg-theme-fg:hover { background-color: rgb(var(--theme-fg)); }`
- `.motion-reduce\:hover\:text-black:hover { color: var(--color-black); }`
- `.motion-reduce\:hover\:text-mint:hover { color: var(--color-mint); }`
- `.motion-reduce\:hover\:text-theme-bg:hover { color: rgb(var(--theme-bg)); }`
- `[data-marqy][data-pause-on-hover]:hover > [data-marqy-inner] > [data-marqy-content] { animation-play-state: paused; }`

### Horizontal overflow

- 360px: fits
- 768px: fits
- 1024px: fits

### The site's own links

`/` Aspen Search home
