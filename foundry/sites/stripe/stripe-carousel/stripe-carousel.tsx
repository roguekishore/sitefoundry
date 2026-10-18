import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeArt, type StripeArtVariant } from "@foundry/stripe-art";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeSegment, type StripeSegmentProps } from "@foundry/stripe-segment";

export interface StripeCarouselCard {
  /** the company's wordmark, set in white at the bottom left of the picture */
  brand: string;
  /** one or two lines under the picture */
  text: string;
  link: { label: string; href: string };
  art: StripeArtVariant;
}

export interface StripeCarouselPromo {
  /** the dark lead, ending in a full stop */
  lead: string;
  /** the slate sentence after it */
  text: string;
  link: { label: string; href: string };
  /** the corner shape: a violet wedge or a sun-yellow fold */
  shape: "wedge" | "fold";
}

export interface StripeCarouselProps {
  /** the segment opener: title, paragraph and button */
  segment?: StripeSegmentProps;
  cards: StripeCarouselCard[];
  /** two small promo cards under the carousel */
  promos?: StripeCarouselPromo[];
  /** labels of the arrow buttons, for screen readers */
  prevLabel?: string;
  nextLabel?: string;
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

/**
 * Startup stories: a segment opener, a row of tall picture cards that scrolls sideways (snap on
 * phones, arrow buttons on desktop), and two pale promo cards with a bold corner shape.
 */
export function StripeCarousel({ segment, cards, promos = [], prevLabel = "Previous", nextLabel = "Next", rule = "none", className }: StripeCarouselProps) {
  const track = useRef<HTMLDivElement>(null);
  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 16), behavior: "smooth" });
  };

  return (
    <StripeFrame rule={rule} className={className} innerClassName="py-14 lg:py-24">
      {segment && <StripeSegment {...segment} />}

      <div className="mt-12 hidden justify-end gap-2 lg:mt-6 lg:flex">
        <button
          type="button"
          aria-label={prevLabel}
          onClick={() => step(-1)}
          className="flex size-8 items-center justify-center rounded-md border border-border bg-background text-primary/70 transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => step(1)}
          className="flex size-8 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      <div
        ref={track}
        className="-mx-gutter mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-gutter pb-2 [scrollbar-width:none] motion-reduce:scroll-auto lg:mx-0 lg:mt-4 lg:mr-[calc(-1*var(--page-gutter))] lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c) => (
          <article key={c.brand} className="w-[calc(100%-1rem)] shrink-0 snap-start sm:w-[20.75rem]">
            <a href={c.link.href} className="group relative block aspect-[0.96] overflow-hidden rounded-md sm:aspect-[0.74]">
              <StripeArt variant={c.art} className="transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none" />
              <span className="absolute bottom-4 left-4 font-display text-[1.75rem] leading-none font-bold tracking-[-0.04em] text-primary-foreground drop-shadow-sm lg:text-[1.375rem]">
                {c.brand}
              </span>
            </a>
            <p className="mt-6 text-base leading-[1.4] font-light text-foreground lg:mt-5 lg:max-w-[16rem]">{c.text}</p>
            <StripeButton href={c.link.href} variant="link" className="mt-4 text-base lg:mt-3">
              {c.link.label}
            </StripeButton>
          </article>
        ))}
      </div>

      {promos.length > 0 && (
        <div className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-2 lg:gap-4">
          {promos.map((p) => (
            <div key={p.lead} className="relative isolate overflow-hidden rounded-md border border-border bg-muted p-4 lg:p-6 lg:pr-[40%]">
              <span
                aria-hidden
                className={cn(
                  "absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block",
                  p.shape === "wedge"
                    ? "bg-linear-to-br from-chart-2 via-chart-3 to-primary [clip-path:polygon(70%_0,100%_0,100%_100%,0_100%)]"
                    : "bg-linear-to-b from-chart-1 to-chart-4 [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)] after:absolute after:inset-0 after:bg-chart-4 after:[clip-path:polygon(0_100%,30%_0,60%_100%)]",
                )}
              />
              <p className="text-base leading-[1.4] font-light text-muted-foreground">
                <span className="font-normal text-foreground">{p.lead}</span> {p.text}
              </p>
              <StripeButton href={p.link.href} variant="link" className="mt-5 text-base">
                {p.link.label}
              </StripeButton>
            </div>
          ))}
        </div>
      )}
    </StripeFrame>
  );
}
