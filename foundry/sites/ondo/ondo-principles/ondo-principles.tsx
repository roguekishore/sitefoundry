import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoArrows } from "@foundry/ondo-arrows";
import { OndoHeading } from "@foundry/ondo-heading";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-principles.css";

export interface OndoPrinciple {
  /** short title */
  title: string;
  /** one sentence, shown when the card is open */
  text: string;
  /** a partner or proof point under the rule (plain text) */
  proof?: string;
}

export interface OndoPrinciplesProps {
  /** heading, first line (white) */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the cards */
  items: OndoPrinciple[];
  /** the photo or video behind the heading. A plain surface when empty */
  media?: ReactNode;
  /** screen-reader labels for the arrows */
  labels?: { prev: string; next: string };
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";

/** Black band: heading over a fading photo, then an accordion row of cards. */
export function OndoPrinciples({ lead, trail, items, media, labels, className }: OndoPrinciplesProps) {
  const [index, setIndex] = useState(0);
  const last = items.length - 1;

  return (
    <section className={cn("dark relative overflow-x-clip bg-background text-foreground", className)}>
      <div className="absolute inset-x-0 top-0 h-[50rem] lg:h-[38rem]">
        {media ?? <OndoPlaceholder tone="muted" />}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background" />
      </div>
      <div className="relative mx-auto max-w-page px-gutter pt-24 pb-section lg:px-[calc(var(--page-gutter)*2.75)] lg:pt-[8.75rem] lg:pb-[10rem]">
        <OndoHeading lead={lead} trail={trail} />
        <ul
          className="mt-[30rem] flex gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateX(calc(var(--ondo-p-i)*-1*(100%+0.5rem)))] motion-reduce:transition-none lg:mt-[12.75rem] lg:gap-3 lg:[transform:translateX(calc(var(--ondo-p-i)*-15.95rem))]"
          style={{ ["--ondo-p-i" as string]: index }}
        >
          {items.map((item, i) => {
            const on = i === index;
            const number = String(i + 1).padStart(2, "0");
            return (
              <li
                key={item.title}
                className={cn(
                  "h-[16.5rem] w-full shrink-0 overflow-clip rounded-3xl transition-[width,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                  on ? "bg-foreground text-background lg:w-[30.5rem]" : "border border-border bg-card text-card-foreground lg:w-[15.2rem]",
                )}
              >
                {on ? (
                  <div key={`open-${i}`} className="flex h-full flex-col p-[1.875rem]">
                    <span className="grid size-[1.875rem] place-items-center rounded-full border border-background/15 text-xs">{number}</span>
                    <div className="ondo-principles-in mt-auto lg:mt-9">
                      <h3 className="text-xl leading-[1.3] font-medium tracking-[-0.015em]">{item.title}</h3>
                      <p className={cn("mt-1 text-base leading-[1.37] text-background/70", serif)}>{item.text}</p>
                    </div>
                    {item.proof && (
                      <p className="ondo-principles-in mt-5 border-t border-background/80 pt-4 text-sm font-bold tracking-[-0.03em] text-background/55 lg:mt-auto">
                        {item.proof}
                      </p>
                    )}
                  </div>
                ) : (
                  <button type="button" onClick={() => setIndex(i)} className="flex size-full flex-col items-start p-[1.875rem] text-left">
                    <span className="grid size-[1.875rem] place-items-center rounded-full border border-border text-xs">{number}</span>
                    <span className="mt-auto text-xl leading-[1.3] font-medium tracking-[-0.015em]">{item.title}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <OndoArrows
          className="mt-4"
          labels={labels}
          atStart={index === 0}
          atEnd={index === last}
          onPrev={() => setIndex((i) => Math.max(0, i - 1))}
          onNext={() => setIndex((i) => Math.min(last, i + 1))}
        />
      </div>
    </section>
  );
}
