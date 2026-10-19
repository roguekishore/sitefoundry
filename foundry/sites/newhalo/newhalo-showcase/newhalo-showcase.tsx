import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloShowcaseCard {
  /** the 28px line at the top of the card (a partner's name, an event list title) */
  title: string;
  /** the paragraph at the bottom of the card */
  text: string;
  /** makes the card a link, with a small arrow at the top right */
  href?: string;
}

export interface NewhaloShowcaseProps {
  /** the white heading over the photo */
  title: string;
  /** md: 64px · xl: 100px */
  titleSize?: "md" | "xl";
  /** one card sits centred; several form a slider with arrow buttons */
  cards: NewhaloShowcaseCard[];
  /** screen-reader names of the slider arrows */
  controlLabels?: { previous: string; next: string };
  /** the full-bleed photo behind it all; empty shows the placeholder */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed dark photo band with a big white heading and tall white cards: one card centred,
 * or a row that runs off the right edge and slides with two square arrow buttons. The photo
 * drifts as you scroll; cards rise in.
 */
export function NewhaloShowcase({ title, titleSize = "md", cards, controlLabels = { previous: "Previous", next: "Next" }, media, className }: NewhaloShowcaseProps) {
  const [index, setIndex] = useState(0);
  const slider = cards.length > 1;
  const last = Math.max(0, cards.length - 1);

  return (
    <section className={cn("dark relative overflow-clip bg-background text-foreground", className)}>
      <NewhaloMedia tone="deep" className="absolute inset-0" innerClassName={cn("-inset-y-12 opacity-80", newhaloReveal("drift"))}>
        {media}
      </NewhaloMedia>
      <div className="relative mx-auto flex min-h-[48rem] max-w-page flex-col px-gutter py-section lg:grid lg:min-h-[56rem] lg:grid-cols-12 lg:gap-x-6">
        <h2
          className={cn(
            "font-display tracking-[-0.01em] lg:col-span-8",
            titleSize === "xl" ? "text-[3.125rem] leading-[0.95] lg:text-[6.25rem]" : "text-[2.5rem] leading-[1.1] lg:text-[4rem] lg:leading-none",
          )}
        >
          {title}
        </h2>

        <div className={cn("mt-auto pt-16 lg:col-span-12 lg:pt-0", slider ? "lg:col-start-5 lg:-mr-gutter lg:col-end-13 lg:self-end" : "lg:col-span-3 lg:col-start-5 lg:self-center")}>
          <ul
            className={cn("flex gap-5 transition-transform duration-600 ease-[cubic-bezier(0.66,0,0.34,1)] motion-reduce:transition-none", !slider && "block")}
            style={slider ? { transform: `translateX(calc(${index} * (-1 * (min(20.3rem, 82vw) + 1.25rem))))` } : undefined}
          >
            {cards.map((c, i) => {
              const inner = (
                <>
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display text-[1.56rem] leading-[1.1] lg:text-[1.75rem]">{c.title}</span>
                    {c.href && <ArrowUpRight aria-hidden strokeWidth={1} className="size-5 shrink-0 text-card-foreground/70" />}
                  </span>
                  <span className="text-sm leading-normal lg:text-base">{c.text}</span>
                </>
              );
              const classes = "flex h-[25rem] flex-col justify-between rounded-lg bg-card p-5 text-card-foreground";
              return (
                <li key={c.title} className={cn("w-[min(20.3rem,82vw)] shrink-0", !slider && "w-full", newhaloReveal("rise"))} style={newhaloRevealStyle(i)}>
                  {c.href ? (
                    <a href={c.href} className={classes}>
                      {inner}
                    </a>
                  ) : (
                    <div className={classes}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {slider && (
          <div className="mt-8 flex gap-2.5 lg:absolute lg:bottom-[7.5rem] lg:left-gutter lg:mt-0">
            <button
              type="button"
              aria-label={controlLabels.previous}
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 disabled:bg-foreground/10 disabled:text-foreground/30"
            >
              <ArrowLeft aria-hidden strokeWidth={1.25} className="size-5" />
            </button>
            <button
              type="button"
              aria-label={controlLabels.next}
              disabled={index === last}
              onClick={() => setIndex((i) => Math.min(last, i + 1))}
              className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 disabled:bg-foreground/10 disabled:text-foreground/30"
            >
              <ArrowRight aria-hidden strokeWidth={1.25} className="size-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
