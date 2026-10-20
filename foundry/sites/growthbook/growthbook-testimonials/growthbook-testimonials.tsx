import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookRail } from "@foundry/growthbook-rail";
import { GrowthbookTrack } from "@foundry/growthbook-track";

export interface GrowthbookQuote {
  /** customer name, for screen readers */
  company: string;
  /** customer wordmark (svg, img or styled text), about 30px tall */
  logo?: ReactNode;
  quote: string;
  name: string;
  role: string;
}

export interface GrowthbookTestimonialsProps {
  quotes: GrowthbookQuote[];
  /** accessible name of the carousel and its buttons */
  carouselLabel: string;
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

export function GrowthbookTestimonials({ quotes, carouselLabel, prevLabel, nextLabel, className }: GrowthbookTestimonialsProps) {
  return (
    <section className={cn("dark overflow-x-clip bg-linear-to-br from-popover to-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*4)] px-gutter md:px-[calc(var(--page-gutter)*2)]">
        <div className="relative border-l border-border pt-12 pb-40 lg:pt-20 lg:pb-40">
          <GrowthbookRail />
          <GrowthbookTrack
            label={carouselLabel}
            prevLabel={prevLabel}
            nextLabel={nextLabel}
            dimInactive
            arrowsClassName="mb-20 lg:mb-[6.25rem]"
            slideClassName="w-[19.875rem] lg:w-[29.375rem]"
            trackClassName="gap-10 pl-10 scroll-pl-10 lg:gap-[3.625rem] lg:-mr-[calc((100vw-min(100vw,var(--page-width)+var(--page-gutter)*4))/2+var(--page-gutter)*2)]"
            items={quotes.map((q) => (
              <figure key={q.company + q.name}>
                <div role="img" aria-label={q.company} className="flex h-10 items-center text-foreground">
                  {q.logo}
                </div>
                <blockquote className="mt-14 text-lg leading-[1.95] lg:text-xl lg:leading-[1.75]">{q.quote}</blockquote>
                <figcaption className="mt-5 text-base leading-[1.75] text-muted-foreground">
                  <span className="block">{q.name}</span>
                  <span className="block">{q.role}</span>
                </figcaption>
              </figure>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
