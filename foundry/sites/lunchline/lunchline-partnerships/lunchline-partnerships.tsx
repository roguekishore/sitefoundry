import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineDrawRule } from "@foundry/lunchline-draw-rule";

export interface LunchlinePortfolioItem {
  /** the company's name, set large and light */
  name: string;
  /** one or two sentences on what it does */
  description: string;
  /** the company's logo (about 10:3). Empty: a placeholder of that size. */
  logo?: ReactNode;
  /** its website: the whole cell becomes a link that tints on hover */
  href?: string;
  /** a handwritten word in a loose ellipse beside the logo, e.g. "sold" */
  badge?: string;
}

export interface LunchlinePartnershipsProps {
  /** the small tracked label above the table (left on phones, centred on wide screens) */
  eyebrow: string;
  items: LunchlinePortfolioItem[];
  /** the small tag that appears on a linked cell while hovered */
  visitLabel?: string;
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

const hand = "font-[family-name:var(--typeface-hand,var(--typeface-display))]";

export function LunchlinePartnerships({ eyebrow, items, visitLabel, id, className }: LunchlinePartnershipsProps) {
  return (
    <section id={id} className={cn("relative bg-background pt-section pb-16 text-foreground lg:pt-[6.4rem] lg:pb-24", className)}>
      <LunchlineDrawRule />
      <div className="mx-auto max-w-page px-gutter">
        <p className="text-sm leading-none font-bold tracking-[0.08em] uppercase lg:text-center lg:text-base">{eyebrow}</p>
        <ul className="mt-[3.6rem] grid border-t border-l border-border lg:mt-[3.4rem] lg:grid-cols-2">
          {items.map((item) => {
            const Cell = item.href ? "a" : "div";
            return (
              <li key={item.name} className="border-r border-b border-border">
                <Cell
                  {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
                  className={cn(
                    "group relative block h-full px-[1.1rem] pt-[1.9rem] pb-[1.6rem] lg:px-12 lg:pt-[4.1rem] lg:pb-[3.4rem]",
                    item.href && "transition-colors duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)] hover:bg-card/50 motion-reduce:transition-none",
                  )}
                >
                  <div className="h-[4.5rem] w-60 overflow-clip lg:h-[6.25rem] lg:w-[20.8rem] [&>img]:size-full [&>img]:object-contain [&>img]:object-left">
                    {item.logo ?? <div className="size-full bg-muted/70" />}
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        hand,
                        "absolute top-[2rem] right-[1.6rem] -rotate-[4deg] rounded-[50%] border border-foreground/60 bg-background/80 px-5 pt-1.5 pb-1 text-[1.9rem] leading-none lg:top-[3.2rem] lg:right-auto lg:left-[21.75rem] lg:text-[2.1rem]",
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                  <h3 className="mt-3 font-display text-[2rem] leading-[1.2] font-light tracking-[-0.01em] lg:mt-2 lg:text-[2.5rem]">{item.name}</h3>
                  <p className="mt-2 max-w-[35rem] text-lg leading-[1.3] lg:mt-3 lg:text-[1.3125rem] lg:leading-[1.4]">{item.description}</p>
                  {item.href && visitLabel && (
                    <span className="absolute right-4 bottom-4 bg-foreground px-2.5 py-1.5 text-xs leading-none font-bold tracking-[0.08em] text-background uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                      {visitLabel}
                    </span>
                  )}
                </Cell>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
