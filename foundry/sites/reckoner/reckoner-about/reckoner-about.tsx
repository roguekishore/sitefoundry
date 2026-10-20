import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerEyebrow } from "@foundry/reckoner-eyebrow";
import "./reckoner-about.css";

export interface ReckonerValue {
  /** the card's title */
  title: string;
  /** a few lines under the title */
  text: string;
  /** a 120×120 artwork or image (80×80 on phones); empty shows a placeholder square */
  art?: ReactNode;
}

export interface ReckonerAboutProps {
  /** the small label above the statement */
  eyebrow: string;
  /** the firm's statement, two to four lines on desktop */
  statement: string;
  /** the cards, three across from md up */
  items: ReckonerValue[];
  /** id for in-page links */
  id?: string;
  className?: string;
}

/** Left-aligned statement over a row of white value cards that rise in one by one. */
export function ReckonerAbout({ eyebrow, statement, items, id, className }: ReckonerAboutProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ReckonerEyebrow label={eyebrow} />
        <h2 className="reckoner-about-reveal mt-7 max-w-[27.5em] font-display text-[1.375rem] leading-[1.1] tracking-[-0.02em] md:text-[max(1.75rem,2.222vw)]">
          {statement}
        </h2>

        <div className="mt-15 grid gap-5 md:grid-cols-3 lg:mt-30">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="reckoner-about-card flex flex-col rounded-sm bg-card px-5 pt-5 pb-7.5 text-card-foreground lg:p-[1.875rem]"
              style={{ "--reckoner-about-step": i } as CSSProperties}
            >
              <div className="size-20 overflow-clip lg:size-30 [&>*]:size-full [&>*]:object-contain">
                {item.art ?? <div aria-hidden className="rounded-sm bg-muted" />}
              </div>
              <h3 className="mt-12 font-display text-[1.375rem] leading-[1.2] tracking-[-0.02em] lg:mt-17.5">{item.title}</h3>
              <p className="mt-5 max-w-[22rem] text-sm leading-[1.4] tracking-[0.01em] text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
