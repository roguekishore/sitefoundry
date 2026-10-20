import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerV2Eyebrow } from "@foundry/reckoner-v2-eyebrow";
import "./reckoner-v2-about.css";

export interface ReckonerV2Value {
  title: string;
  /** two or three lines */
  text: string;
  /** a 120×120 artwork (an <img> or <svg>); empty shows a placeholder */
  media?: ReactNode;
}

export interface ReckonerV2AboutProps {
  /** the small label over the statement */
  eyebrow?: string;
  /** the statement: a long sentence or two */
  title: string;
  /** the cards: three across on desktop */
  items: ReckonerV2Value[];
  /** id for in-page links */
  id?: string;
  className?: string;
}

export function ReckonerV2About({ eyebrow, title, items, id, className }: ReckonerV2AboutProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {eyebrow && <ReckonerV2Eyebrow label={eyebrow} />}
        <h2 className="reckoner-v2-about-reveal mt-5 max-w-[55rem] font-display text-[1.375rem] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[2rem]">
          {title}
        </h2>

        <ul className="mt-16 grid gap-5 lg:mt-[7.75rem] lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              style={{ "--i": i } as CSSProperties}
              className="reckoner-v2-about-card flex flex-col bg-card px-5 py-[1.875rem] text-card-foreground lg:px-[1.875rem]"
            >
              <div className="size-20 shrink-0 lg:size-30 [&>*]:size-full [&>*]:object-contain">
                {item.media ?? <div aria-hidden className="bg-muted" />}
              </div>
              <h3 className="mt-12 font-display text-[1.375rem] leading-[1.2] font-normal tracking-[-0.02em] lg:mt-[4.5rem]">{item.title}</h3>
              <p className="mt-5 max-w-[22rem] text-sm leading-[1.45] text-muted-foreground lg:mt-6">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
