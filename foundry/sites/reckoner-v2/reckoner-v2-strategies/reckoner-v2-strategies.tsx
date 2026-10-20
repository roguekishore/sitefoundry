import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerV2Button } from "@foundry/reckoner-v2-button";
import { ReckonerV2Eyebrow } from "@foundry/reckoner-v2-eyebrow";
import "./reckoner-v2-strategies.css";

export interface ReckonerV2Strategy {
  title: string;
  /** one or two short lines */
  text: string;
  cta?: { label: string; href: string };
  /** a 120×120 artwork (an <img> or <svg>); empty shows a placeholder */
  media?: ReactNode;
}

export interface ReckonerV2StrategiesProps {
  /** the small label over the statement */
  eyebrow?: string;
  /** the statement */
  title: string;
  /** words that follow the statement in the highlight colour */
  emphasis?: string;
  /** the cards, side by side on desktop */
  items: ReckonerV2Strategy[];
  /** id for in-page links */
  id?: string;
  className?: string;
}

export function ReckonerV2Strategies({ eyebrow, title, emphasis, items, id, className }: ReckonerV2StrategiesProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="mx-auto flex max-w-[52.5rem] flex-col items-center text-center">
          {eyebrow && <ReckonerV2Eyebrow label={eyebrow} />}
          <h2 className="reckoner-v2-strategies-reveal mt-5 font-display text-[1.375rem] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[2rem]">
            {title}
            {emphasis && <span className="text-highlight"> {emphasis}</span>}
          </h2>
        </div>

        <ul className={cn("mx-auto mt-14 grid gap-5 lg:mt-20", items.length > 1 && "lg:grid-cols-2", items.length > 2 && "lg:max-w-none lg:grid-cols-3", "max-w-[55.3rem]")}>
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center border border-border p-[1.875rem] text-center transition-colors duration-500 ease-[ease] hover:bg-muted motion-reduce:transition-none"
            >
              <div className="size-30 shrink-0 [&>*]:size-full [&>*]:object-contain">
                {item.media ?? <div aria-hidden className="border border-border bg-highlight/15" />}
              </div>
              <h3 className="mt-10 font-display text-[1.375rem] leading-[1.2] font-normal tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 max-w-[24rem] text-sm leading-[1.4] text-muted-foreground">{item.text}</p>
              {item.cta && (
                <ReckonerV2Button href={item.cta.href} className="mt-6">
                  {item.cta.label}
                </ReckonerV2Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
