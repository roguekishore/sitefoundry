import { useRef, type ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthArrow, useParsleyhealthCarousel } from "@foundry/parsleyhealth-carousel";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";

export interface ParsleyhealthReview {
  /** the member's first name */
  name: string;
  /** a short quote, with its quotation marks */
  quote: string;
  /** the video still (an img, sized to fill); a placeholder when empty */
  media?: ReactNode;
}

export interface ParsleyhealthReviewsProps {
  /** small capitals above the title */
  eyebrow?: string;
  /** the title */
  title: string;
  /** the reviews */
  items: ParsleyhealthReview[];
  /** the ochre pill on the first card */
  action?: { label: string; href: string };
  /** screen-reader labels of the arrows */
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

/** A narrow title beside a track of framed 9:16 video stills. */
export function ParsleyhealthReviews({ eyebrow, title, items, action, prevLabel, nextLabel, className }: ParsleyhealthReviewsProps) {
  const track = useRef<HTMLUListElement>(null);
  const { prev, next, atStart, atEnd, index } = useParsleyhealthCarousel(track);

  return (
    <section
      className={cn(
        "overflow-clip bg-background py-[calc(var(--section-y)*1.17)] lg:px-gutter lg:py-[calc(var(--section-y)*1.95)]",
        className,
      )}
    >
      <div className="mx-auto grid max-w-page grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:gap-[4.75rem]">
        <ParsleyhealthHeading
          eyebrow={eyebrow}
          title={title}
          align="phone-center"
          className="px-gutter lg:px-0"
          titleClassName="mx-auto max-w-[21rem] lg:mx-0 lg:max-w-[17.5rem]"
        />

        <div className="relative lg:flex lg:items-center lg:gap-6">
          <ul
            ref={track}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-[calc(50%-7.3125rem)] [scrollbar-width:none] lg:flex-1 lg:snap-proximity lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => {
              const featured = i === 0;
              return (
                <li
                  key={item.name}
                  className={cn(
                    "group w-[14.625rem] shrink-0 snap-center self-start border lg:snap-start",
                    featured ? "border-primary" : "border-transparent",
                  )}
                >
                  <div className={cn("p-1.5", !featured && "-m-px border border-primary")}>
                    <div className="relative aspect-[221/393] overflow-clip">
                      <div className="size-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover">
                        {item.media ?? <ParsleyhealthPlaceholder />}
                      </div>
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-1/2 grid size-[2.625rem] -translate-1/2 place-items-center rounded-full border-2 border-primary-foreground/90 text-primary-foreground transition-colors duration-300 group-hover:bg-primary-foreground/15 motion-reduce:transition-none"
                      >
                        <Play className="ml-0.5 size-5" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                  <div className="px-3 pb-4 lg:px-3">
                    <p className="border-b border-primary pt-3 pb-2.5 text-[1.3063rem] leading-[1.273] text-secondary lg:text-[1.4438rem]">{item.name}</p>
                    <p className="mt-3 text-[0.9625rem] leading-[1.455] text-foreground">{item.quote}</p>
                    {featured && action ? (
                      <ParsleyhealthButton href={action.href} variant="highlight" size="sm" className="mt-3.5 px-6.5">
                        {action.label}
                      </ParsleyhealthButton>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
          {/* phones: neighbours fade out at the edges */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r from-background to-transparent lg:hidden" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l from-background to-transparent lg:hidden" />
          <ParsleyhealthArrow direction="next" label={nextLabel ?? ""} variant="dot" disabled={atEnd} onClick={next} className="max-lg:hidden" />
        </div>

        <div className="-mt-6 flex items-center justify-between px-[4.3rem] lg:hidden">
          <ParsleyhealthArrow direction="prev" label={prevLabel ?? ""} variant="solid" disabled={atStart} onClick={prev} />
          <div aria-hidden className="flex gap-2">
            {items.map((item, i) => (
              <span key={item.name} className={cn("size-1.5 rounded-full", i === index ? "bg-primary" : "bg-primary/25")} />
            ))}
          </div>
          <ParsleyhealthArrow direction="next" label={nextLabel ?? ""} variant="solid" disabled={atEnd} onClick={next} />
        </div>
      </div>
    </section>
  );
}
