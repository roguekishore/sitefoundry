import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerButton } from "@foundry/reckoner-button";
import { ReckonerEyebrow } from "@foundry/reckoner-eyebrow";
import "./reckoner-strategies.css";

export interface ReckonerStrategy {
  /** the card's title */
  title: string;
  /** one or two lines under the title */
  text: string;
  /** where the whole card links to */
  href: string;
  /** the button's label */
  cta: string;
  /** a 120×120 artwork or image; empty shows a placeholder square */
  art?: ReactNode;
}

export interface ReckonerStrategiesProps {
  /** the small label above the statement */
  eyebrow: string;
  /** the statement, in the main text colour */
  statement: string;
  /** words that finish the statement, faded to the glow colour */
  statementTail?: string;
  /** the cards, two side by side from md up */
  items: ReckonerStrategy[];
  /** id for in-page links */
  id?: string;
  className?: string;
}

/** Centred eyebrow and statement over two bordered link cards. */
export function ReckonerStrategies({ eyebrow, statement, statementTail, items, id, className }: ReckonerStrategiesProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex justify-center">
          <ReckonerEyebrow label={eyebrow} />
        </div>
        <h2 className="reckoner-strategies-reveal mx-auto mt-7 max-w-[26.25em] text-center font-display text-[1.375rem] leading-[1.1] tracking-[-0.02em] text-balance md:text-[max(1.75rem,2.222vw)]">
          {statement}
          {statementTail && <span className="text-glow"> {statementTail}</span>}
        </h2>

        <div className="mx-auto mt-15 grid max-w-[55.375rem] gap-5 md:grid-cols-2 lg:mt-20">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center justify-center rounded-sm border border-border p-5 text-center transition-colors duration-500 ease-[ease] hover:bg-accent motion-reduce:transition-none lg:p-[1.875rem]"
            >
              <div className="size-30 overflow-clip [&>*]:size-full [&>*]:object-contain">
                {item.art ?? <div aria-hidden className="rounded-sm border border-border bg-muted" />}
              </div>
              <h3 className="mt-9 font-display text-[1.375rem] leading-[1.2] tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 max-w-[24rem] text-sm leading-[1.4] tracking-[0.01em] text-muted-foreground">{item.text}</p>
              <ReckonerButton asSpan className="mt-5">
                {item.cta}
              </ReckonerButton>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
