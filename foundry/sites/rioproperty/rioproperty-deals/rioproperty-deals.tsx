import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RiopropertyArrowLink } from "@foundry/rioproperty-arrow-link";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";
import "./rioproperty-deals.css";

export interface RiopropertyDeal {
  /** the street or building, shown big on hover */
  name: string;
  /** the district */
  area: string;
  /** the size, e.g. "640 m²" */
  size: string;
  /** what kind of property: under the photo, and in the violet bar on hover */
  type: string;
  /** what happened: sold, leased… */
  status: string;
  href: string;
  /** a photo; fills the card like object-fit cover. Empty: a placeholder */
  media?: ReactNode;
}

export interface RiopropertyDealsProps {
  /** the big capital heading */
  heading: string;
  /** a small arrow link under the heading */
  link?: { label: string; href: string };
  /** the cards of the sideways track */
  deals: RiopropertyDeal[];
  className?: string;
}

// The original's hover timing: 0.75s on a long, snappy ease.
const ease = "duration-[750ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

export function RiopropertyDeals({ heading, link, deals, className }: RiopropertyDealsProps) {
  return (
    <section className={cn("overflow-clip bg-background pt-section pb-section text-foreground lg:pb-14", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RiopropertyRiseText
          text={heading}
          className="max-w-[18rem] font-display text-[clamp(2.19rem,1.8rem+1.61vw,3.25rem)] leading-[0.966] font-semibold uppercase sm:max-w-none lg:max-w-[38rem]"
        />
        {link && (
          <div className="mt-8 hidden lg:block">
            <RiopropertyArrowLink href={link.href} reveal>
              {link.label}
            </RiopropertyArrowLink>
          </div>
        )}
      </div>

      {/* the whole track drifts up as it crosses the window; the track itself scrolls sideways */}
      <div className="rioproperty-deals-drift mx-auto mt-14 max-w-page lg:mt-12">
        <ul className="rioproperty-deals-track flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter pb-4">
          {deals.map((deal) => (
            <li key={deal.name} className="rioproperty-deals-card shrink-0 snap-start">
              <a href={deal.href} className="group/deal block w-[85.6vw] sm:w-[22rem] lg:w-[min(29.5vw,32rem)]">
                <div className="relative isolate aspect-[425/497] overflow-clip bg-muted">
                  <div className={cn("absolute inset-0 -z-10 transition-[filter] group-hover/deal:grayscale", ease)}>{deal.media}</div>
                  <div aria-hidden className={cn("absolute inset-0 -z-10 bg-secondary/55 opacity-0 transition-opacity group-hover/deal:opacity-100", ease)} />

                  {/* the corner tab with the arrow */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-0 right-0 flex size-14 origin-top-right scale-0 items-center justify-center bg-background text-primary transition-[scale] group-hover/deal:scale-100 lg:size-16",
                      ease,
                    )}
                  >
                    <ArrowUpRight strokeWidth={1.25} className={cn("size-9 transition-[translate] group-hover/deal:translate-x-px group-hover/deal:-translate-y-px", ease)} />
                  </span>

                  {/* the details rise in from below on hover */}
                  <div className={cn("absolute inset-x-0 bottom-0 translate-y-full transition-[translate] group-hover/deal:translate-y-0", ease)}>
                    <div className="px-6 pb-5 text-background dark:text-foreground">
                      <p className="flex gap-6 text-sm leading-normal uppercase lg:text-base">
                        <span className="w-1/2">{deal.area}</span>
                        <span>{deal.size}</span>
                      </p>
                      <p className="mt-3 font-display text-[1.6875rem] leading-[1.17] font-semibold uppercase lg:text-[2.25rem]">{deal.name}</p>
                    </div>
                    <p className="flex justify-between bg-primary px-2 py-2 text-sm leading-normal font-medium text-highlight uppercase lg:text-base">
                      <span>{deal.type}</span>
                      <span>{deal.status}</span>
                    </p>
                  </div>
                </div>
                {/* the caption under the photo slides up out of sight on hover */}
                <div className="overflow-clip">
                  <p
                    className={cn(
                      "flex justify-between px-2 pt-2 text-sm leading-normal text-muted-foreground uppercase transition-[translate] group-hover/deal:-translate-y-full lg:text-base",
                      ease,
                    )}
                  >
                    <span>{deal.type}</span>
                    <span>{deal.status}</span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
