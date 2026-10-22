import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchButton } from "@foundry/aspensearch-button";
import { AspensearchHalftone } from "@foundry/aspensearch-halftone";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";
import "./aspensearch-hero.css";

export interface AspensearchHeroProps {
  /** the first giant word, in the white tile top left (≈5 letters fit on phones) */
  wordTop: string;
  /** the second giant word, in the grey tile (≈6 letters fit on phones) */
  wordBottom: string;
  /** the shouted headline in the ink tile, one entry per line */
  headline: string[];
  /** the short intro in the ink tile */
  intro: string;
  /** the button under the intro */
  action: { label: string; href: string };
  /** the statement in the mint tile */
  pitch: string;
  /** the small line above the marquee, e.g. "Recent hires from:" */
  hiresLabel: string;
  /** names scrolling in the mint tile's marquee (plain text, no logos) */
  hires: string[];
  /** media for the top-right window; empty: halftone placeholder */
  mediaTop?: ReactNode;
  /** media for the tall left window (bottom-left square on phones); empty: halftone placeholder */
  mediaSide?: ReactNode;
  /** media for the bottom-right window (desktop only); empty: halftone placeholder */
  mediaBottom?: ReactNode;
  className?: string;
}

const word = "font-display text-[13.8vw]/none tracking-[-0.04em] lg:text-[12.5vw]/none";

/**
 * The original's opening wall of tiles. Phones: a 2×2 of square-ish tiles (giant word,
 * halftone window, window, grey tile with the second word), then an ink block with the
 * shouted headline, intro and an outlined button, and a mint block with a statement and a
 * looping marquee of names. Desktop: two columns of half-window rows: word / window,
 * window / [ink intro + mint statement], window / grey word, ink headline / window.
 * The first word rises in on load; the rest rises line by line as it scrolls into view.
 */
export function AspensearchHero({ wordTop, wordBottom, headline, intro, action, pitch, hiresLabel, hires, mediaTop, mediaSide, mediaBottom, className }: AspensearchHeroProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-2 bg-background font-sans tracking-[-0.04em] text-foreground [--r:max(20rem,calc((100svh-3.8125rem)/2))] lg:grid-cols-4 lg:grid-rows-[var(--r)_var(--r)_var(--r)_calc(var(--r)*1.4)]",
        className,
      )}
    >
      {/* Giant first word, rising in on load. */}
      <div className="flex aspect-[195/251] items-end border-r border-b border-border px-3 pb-3 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:px-5 lg:pb-[0.13em] lg:text-[12.5vw]">
        <h1 className={cn("aspensearch-hero-rise overflow-clip pb-[0.14em] -mb-[0.14em]", word)}>
          <span className="block">{wordTop}</span>
        </h1>
      </div>

      <AspensearchHalftone media={mediaTop} className="aspect-[195/251] border-b border-border lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:aspect-auto" />
      <AspensearchHalftone media={mediaSide} className="aspect-[195/251] border-r border-border lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:aspect-auto" />

      {/* Grey tile with the second word. */}
      <div className="flex aspect-[195/251] items-end bg-muted px-3 pb-3 lg:col-span-2 lg:col-start-3 lg:row-start-3 lg:aspect-auto lg:border-b lg:border-border lg:px-6 lg:pb-[0.18em] lg:text-[12.5vw]">
        <AspensearchRevealText as="p" variant="display" text={wordBottom} className={word} />
      </div>

      {/* Ink headline tile. */}
      <div className="col-span-2 bg-foreground px-3 pt-4 text-background lg:col-span-2 lg:col-start-1 lg:row-start-4 lg:px-6 lg:pt-5">
        {headline.map((line, i) => (
          <AspensearchRevealText
            key={i}
            as="p"
            variant="display"
            delay={i * 6}
            text={line}
            className="font-display text-[20.5vw]/[0.88] tracking-[-0.04em] whitespace-nowrap uppercase lg:text-[10.4vw]/[0.88]"
          />
        ))}
      </div>

      {/* Ink intro tile: joins the headline on phones, sits beside the mint tile on desktop. */}
      <div className="col-span-2 flex min-h-[90vw] flex-col bg-foreground px-3 pt-10 pb-5 text-background lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:min-h-0 lg:px-5 lg:pt-6 lg:pb-0">
        <AspensearchRevealText text={intro} className="text-2xl/[1.1] lg:pr-2" />
        <div className="mt-auto flex justify-end pt-10 lg:hidden">
          <AspensearchButton href={action.href} tone="paper">
            {action.label}
          </AspensearchButton>
        </div>
        <AspensearchButton href={action.href} width="full" className="mt-auto mb-6 hidden h-[3.75rem] px-8 lg:-mx-5 lg:flex lg:w-auto">
          {action.label}
        </AspensearchButton>
      </div>

      {/* Mint statement tile with the marquee of names along the bottom. */}
      <div className="col-span-2 flex min-h-[114vw] flex-col overflow-clip bg-highlight pt-4 text-highlight-foreground lg:col-span-1 lg:col-start-4 lg:row-start-2 lg:min-h-0 lg:pt-6">
        <AspensearchRevealText text={pitch} className="px-3 text-2xl/[1.1] lg:px-5" />
        <p className="mt-6 px-3 text-2xl/[1.1] lg:px-5">{hiresLabel}</p>
        <div className="aspensearch-hero-marquee mt-auto flex w-max pb-6 lg:pb-7">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-10 pr-10">
              {hires.map((name) => (
                <li key={name} className="font-display text-xl/none font-semibold tracking-[-0.03em] whitespace-nowrap">
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <AspensearchHalftone media={mediaBottom} className="hidden lg:col-span-2 lg:col-start-3 lg:row-start-4 lg:block" />
    </section>
  );
}
