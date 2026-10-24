import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MymindMedia } from "@foundry/mymind-media";
import { MymindPlayLink } from "@foundry/mymind-play-link";
import "./mymind-testimonials.css";

export interface MymindQuote {
  /** what they said */
  text: string;
  /** who said it (for screen readers and the avatar's alt) */
  name: string;
  /** a round photo; empty shows a placeholder */
  avatar?: ReactNode;
}

export interface MymindTestimonialsProps {
  /** the big white line in the middle */
  title: string[];
  /** the quotes; the first five get the scattered layout */
  quotes: MymindQuote[];
  /** arrow link under the bubbles */
  link: { label: string; href: string };
  className?: string;
}

/** Desktop spots (stage 1440×1608) and phone nudges for five bubbles, plus each drift. */
const spots = [
  { desk: "lg:left-[30.3%] lg:top-[17.25rem] lg:w-[29.6rem]", phone: "ml-[18%]", side: "right", drift: -40 },
  { desk: "lg:left-[12.6%] lg:top-[26.6rem] lg:w-[29.6rem]", phone: "ml-[6%]", side: "left", drift: -85 },
  { desk: "lg:left-[55.7%] lg:top-[29.6rem] lg:w-[28.5rem]", phone: "ml-[20%]", side: "right", drift: -100 },
  { desk: "lg:left-[46.1%] lg:top-[60.5rem] lg:w-[29.6rem]", phone: "ml-[23%]", side: "right", drift: -42 },
  { desk: "lg:left-[23%] lg:top-[70.75rem] lg:w-[36.25rem]", phone: "ml-[6%]", side: "left", drift: -68 },
] as const;

function Bubble({ quote, i }: { quote: MymindQuote; i: number }) {
  const spot = spots[i];
  const right = spot ? spot.side === "right" : i % 2 === 0;
  return (
    <figure
      className={cn("mymind-testimonials-drift relative w-[68%] pb-14 lg:pb-0", spot ? cn(spot.phone, "lg:absolute lg:ml-0", spot.desk) : "mx-auto lg:mt-10")}
      style={{ "--mymind-drift": `${spot ? spot.drift : -50}px` } as CSSProperties}
    >
      <blockquote className="rounded-full bg-card px-6 py-3.5 text-[0.6875rem] leading-[1.35] text-card-foreground lg:px-12 lg:py-[1.375rem] lg:text-lg lg:leading-[1.4]">
        {quote.text}
      </blockquote>
      <figcaption className={cn("absolute bottom-0 flex flex-col lg:-bottom-[5.25rem]", right ? "right-[4%] items-end lg:-right-[1%]" : "left-[6%] items-start lg:left-[8%]")}>
        <span aria-hidden className={cn("size-2.5 rounded-full bg-card lg:size-4", right ? "mr-8 lg:mr-14" : "ml-8 lg:ml-12")} />
        <span aria-hidden className={cn("mt-0.5 size-1.5 rounded-full bg-card lg:size-2.5", right ? "mr-6 lg:mr-10" : "ml-10 lg:ml-[3.75rem]")} />
        <MymindMedia className="mt-1 size-8 rounded-full lg:size-[3.75rem]">{quote.avatar}</MymindMedia>
        <span className="sr-only">{quote.name}</span>
      </figcaption>
    </figure>
  );
}

/** Scattered speech bubbles that drift around a big white line. */
export function MymindTestimonials({ title, quotes, link, className }: MymindTestimonialsProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-x-clip bg-accent pt-24 pb-16 text-foreground lg:pt-0 lg:pb-[9.5rem]",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_48%_36%_at_50%_42%,color-mix(in_oklab,var(--chart-2)_70%,var(--accent))_0%,color-mix(in_oklab,var(--chart-2)_30%,var(--accent))_55%,transparent_100%),radial-gradient(ellipse_42%_26%_at_50%_70%,color-mix(in_oklab,var(--primary)_45%,var(--accent))_0%,transparent_100%)] blur-[20px] max-lg:bg-[radial-gradient(ellipse_90%_40%_at_50%_45%,color-mix(in_oklab,var(--chart-2)_65%,var(--accent))_0%,transparent_100%),radial-gradient(ellipse_80%_25%_at_50%_68%,color-mix(in_oklab,var(--primary)_40%,var(--accent))_0%,transparent_100%)]"
      />
      <div className="relative mx-auto flex max-w-[90rem] flex-col lg:block lg:h-[90.75rem]">
        {quotes.slice(0, 3).map((q, i) => (
          <Bubble key={q.name} quote={q} i={i} />
        ))}
        <h2 className="my-10 text-center font-display text-[3rem] leading-[1.06] tracking-[-0.045em] text-primary-foreground lg:absolute lg:inset-x-0 lg:top-[43.75rem] lg:my-0 lg:text-[5.75rem] lg:leading-[0.92]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        {quotes.slice(3).map((q, i) => (
          <Bubble key={q.name} quote={q} i={i + 3} />
        ))}
      </div>
      <div className="mt-4 flex justify-center lg:mt-0">
        <MymindPlayLink href={link.href} icon="arrow">
          {link.label}
        </MymindPlayLink>
      </div>
    </section>
  );
}
