import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeArt, type StripeArtVariant } from "@foundry/stripe-art";
import { StripeButton } from "@foundry/stripe-button";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import "./stripe-news.css";

export interface StripeNewsItem {
  /** big white words on the open card (e.g. "Year in review 2026") */
  label?: string;
  /** the dark lead of the caption */
  title: string;
  /** the softer sentences after it */
  text: string;
  link: { label: string; href: string };
  art: StripeArtVariant;
}

export interface StripeNewsProps {
  /** the dark first line of the heading */
  title: string;
  /** the softer second line */
  rest?: string;
  items: StripeNewsItem[];
  /** labels of the arrow buttons, for screen readers */
  prevLabel?: string;
  nextLabel?: string;
  rule?: "solid" | "dashed" | "none";
  className?: string;
}

// How much room each card takes by its distance from the open one: the "squeezy" row.
const GROW = [16, 4, 2, 1, 0.45, 0.25, 0.15];

/**
 * "What's happening": a squeezy carousel. The open card is wide with big white words on its
 * picture; the next ones narrow into slivers. Click a sliver or an arrow to open it. The
 * caption under the row is a two-tone line with an outline button.
 */
export function StripeNews({ title, rest, items, prevLabel = "Previous", nextLabel = "Next", rule = "none", className }: StripeNewsProps) {
  const [active, setActive] = useState(0);
  const go = (to: number) => setActive((to + items.length) % items.length);
  const item = items[active];

  return (
    <StripeFrame rule={rule} className={className} innerClassName="py-14 lg:py-20">
      <div className="flex items-end justify-between gap-4">
        <StripeHeading lead={title} rest={rest} stacked />
        <div className="hidden gap-2 lg:flex">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => go(active - 1)}
            className="flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => go(active + 1)}
            className="flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-10 flex h-[23rem] gap-2 lg:mt-12 lg:h-[30rem] lg:gap-3">
        {items.map((it, i) => {
          const d = i - active;
          const grow = d < 0 ? 0 : (GROW[d] ?? 0.1);
          return (
            <button
              key={it.title}
              type="button"
              aria-label={it.title}
              aria-current={d === 0}
              onClick={() => go(i)}
              className={cn(
                "relative min-w-0 overflow-hidden rounded-md text-left transition-[flex-grow,opacity] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none",
                d < 0 && "opacity-0",
                d > 1 && "max-lg:hidden",
              )}
              style={{ flexGrow: grow, flexBasis: 0 }}
            >
              <StripeArt variant={it.art} />
              {it.label && (
                <span
                  className={cn(
                    "absolute bottom-6 left-6 max-w-[14rem] font-display text-[1.75rem] leading-[1.05] font-light tracking-[-0.02em] text-primary-foreground transition-opacity duration-500 lg:bottom-8 lg:left-8 lg:text-[2.25rem]",
                    d === 0 ? "opacity-100" : "opacity-0",
                  )}
                >
                  {it.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div key={active} className="mt-8 flex animate-[stripe-news-in_500ms_ease-out] flex-col gap-6 motion-reduce:animate-none lg:flex-row lg:items-start lg:justify-between">
        <StripeHeading as="h3" size="card" lead={item.title} rest={item.text} className="max-w-[45rem] lg:text-[1.375rem]" />
        <StripeButton href={item.link.href} variant="outline" className="self-start">
          {item.link.label}
        </StripeButton>
      </div>
    </StripeFrame>
  );
}
