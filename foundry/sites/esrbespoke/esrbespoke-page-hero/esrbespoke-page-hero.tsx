import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { EsrbespokeParallax } from "@foundry/esrbespoke-parallax";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { EsrbespokeTypeOn } from "@foundry/esrbespoke-type-on";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokePageHeroProps {
  /** the page title (two lines) */
  title: string;
  /** a short note in tiny capitals at column 9 */
  note: string;
  /** where the down arrow leads (the next section) */
  arrowHref?: string;
  /** an accessible name for the arrow */
  arrowLabel?: string;
  /** the full-width photo (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  tone?: EsrbespokeTone;
  className?: string;
}

/** Inner page opening: title and note at the bottom of a tall white band, then a drifting photo. */
export function EsrbespokePageHero({ title, note, arrowHref = "#", arrowLabel = "Scroll down", media, tone = "light", className }: EsrbespokePageHeroProps) {
  return (
    <section className={cn(toneClass(tone), className)}>
      <div className="grid h-[38.5rem] grid-cols-2 grid-rows-[auto_1fr_auto] gap-x-4 px-gutter pt-[14.25rem] pb-7 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:pt-0">
        <h1 className="col-span-2 max-w-[8em] font-display text-[2.375rem] leading-[0.95] font-medium tracking-[-0.01em] font-stretch-[106%] lg:col-span-7 lg:row-start-2 lg:text-[3.875rem]">
          {title}
        </h1>
        <div className="col-span-2 row-start-3 flex items-end justify-between gap-6 lg:col-span-4 lg:col-start-9 lg:row-start-2">
          <EsrbespokeTypeOn
            as="p"
            text={note}
            step={10}
            delay={300}
            className="block max-w-[17rem] font-mono text-[0.875rem] leading-none tracking-[0.09em] uppercase font-stretch-[88%]"
          />
          <a href={arrowHref} aria-label={arrowLabel} className="shrink-0 transition-opacity duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:opacity-50">
            <ArrowDown className="size-4" strokeWidth={1.25} />
          </a>
        </div>
      </div>
      <EsrbespokeParallax media={media} rise className="aspect-[393/481] sm:aspect-[4/3] lg:aspect-[16/10]" />
    </section>
  );
}
