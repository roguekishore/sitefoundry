import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArrowUpRight } from "lucide-react";
import "./roveia-cases.css";

export interface RoveiaCase {
  /** the client's name, the card's title */
  name: string;
  /** what was done and what changed, two to four sentences */
  description: string;
  href?: string;
  /** the full-bleed video or photo; a placeholder when empty */
  media?: ReactNode;
}

export interface RoveiaCasesProps {
  cases: RoveiaCase[];
  /** label of the pill that appears in the middle of a card on hover */
  linkLabel: string;
  className?: string;
}

/**
 * Case studies as a deck of full-bleed media cards (24px corners) with the client's name and a
 * short story at the bottom-left over a darkening gradient. On desktop each card is nearly a
 * window high and sticks at the top, so the next one slides up over it, growing from 90% to
 * full size as it arrives. Hovering a card shows a blue "read the story" pill in its middle.
 */
export function RoveiaCases({ cases, linkLabel, className }: RoveiaCasesProps) {
  return (
    <section className={cn("bg-background pt-5 pb-16 text-foreground lg:pt-18 lg:pb-section", className)}>
      <ul className="flex flex-col gap-18 px-9 lg:gap-8 lg:px-9">
        {cases.map((c) => (
          <li key={c.name} className="lg:sticky lg:top-5 lg:h-[calc(100svh-2rem)]">
            <a
              href={c.href ?? "#"}
              className="roveia-cases-card group dark relative flex h-[22.5rem] flex-col justify-end overflow-clip rounded-lg bg-background p-5.5 text-foreground lg:h-full lg:px-25 lg:pb-22"
            >
              <div className="absolute inset-0">{c.media ?? <div className="size-full bg-muted bg-linear-to-tr from-background/40 via-muted to-glow/25" />}</div>
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(transparent_54%,color-mix(in_oklab,var(--background)_50%,transparent)),linear-gradient(color-mix(in_oklab,var(--background)_40%,transparent),color-mix(in_oklab,var(--background)_40%,transparent))]"
              />
              <span className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 transition-[opacity,scale] duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none lg:block">
                {/* a look-alike of the blue pill: a real button can't sit inside the card's link */}
                <span className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-base tracking-[-0.02em] whitespace-nowrap text-primary-foreground">
                  {linkLabel}
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
              </span>
              <div className="relative max-w-[38rem]">
                <h3 className="text-[2rem] leading-[1.2] font-normal tracking-[-0.03em] lg:text-[2.5rem]">{c.name}</h3>
                <p className="mt-2 text-sm leading-5 tracking-[-0.02em] text-foreground/75 lg:mt-6 lg:text-base lg:leading-6">{c.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
