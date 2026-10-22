import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoRail } from "@foundry/rho-rail";
import { RhoReveal } from "@foundry/rho-reveal";

export interface RhoQuote {
  /** the quote, with its quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** an optional social handle under the name */
  handle?: string;
  /** a 40px square portrait; empty: their initials */
  avatar?: ReactNode;
}

export interface RhoTestimonialsProps {
  /** the heading */
  title: string;
  /** the quotes; six fill the desktop grid */
  quotes: RhoQuote[];
  /** screen-reader labels for the phone rail's arrows */
  prevLabel: string;
  nextLabel: string;
  /** dark or light section */
  tone?: "dark" | "light";
  className?: string;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

function QuoteCard({ q }: { q: RhoQuote }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-8 rounded-lg bg-card p-5 text-card-foreground lg:p-7">
      <blockquote className="text-lg leading-[1.3] tracking-[-0.01em] lg:text-xl lg:leading-[1.3]">{q.quote}</blockquote>
      <figcaption className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center overflow-clip rounded-md bg-muted text-[0.8125rem] font-medium text-muted-foreground">
          {q.avatar ?? initials(q.name)}
        </span>
        <span className="text-[0.75rem] leading-[1.4]">
          <span className="block font-medium">{q.name}</span>
          {q.handle && <span className="block text-muted-foreground">{q.handle}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export function RhoTestimonials({ title, quotes, prevLabel, nextLabel, tone = "light", className }: RhoTestimonialsProps) {
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background py-14 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RhoHeading text={title} />
      </div>
      <RhoReveal className="mt-10 lg:mt-14 lg:[animation:none]! motion-reduce:[animation:none]!">
        <RhoRail
          items={quotes.map((q, i) => (
            <RhoReveal key={q.name} step={i % 3} className="h-full">
              <QuoteCard q={q} />
            </RhoReveal>
          ))}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          gridOnDesktop
          itemClassName="w-[85%] min-h-[15.5rem] sm:w-[22rem] lg:h-[15.625rem] lg:w-auto"
          trackClassName="lg:mx-auto lg:grid lg:max-w-page lg:grid-cols-3 lg:overflow-visible lg:px-gutter"
          arrowsClassName="lg:hidden"
        />
      </RhoReveal>
    </section>
  );
}
