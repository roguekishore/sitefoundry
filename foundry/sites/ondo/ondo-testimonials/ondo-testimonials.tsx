import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OndoArrows } from "@foundry/ondo-arrows";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";

export interface OndoTestimonial {
  /** the quote, set large in the serif */
  quote: string;
  /** who said it */
  name: string;
  /** their title */
  role: string;
  /** their company, set as a plain wordmark in the corner */
  company: string;
  /** a square portrait. A plain surface when empty */
  media?: ReactNode;
}

export interface OndoTestimonialsProps {
  /** a heading for screen readers */
  heading: string;
  /** the quotes */
  items: OndoTestimonial[];
  /** screen-reader labels for the arrows */
  labels?: { prev: string; next: string };
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";

/** Testimonial row: the current card is black, the rest pale grey; arrows slide it. */
export function OndoTestimonials({ heading, items, labels, className }: OndoTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const last = items.length - 1;

  return (
    <section className={cn("overflow-x-clip bg-background pt-12 pb-section lg:pt-[15rem] lg:pb-[10rem]", className)}>
      <h2 className="sr-only">{heading}</h2>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <ul
          className="flex h-[25rem] items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [--ondo-t-w:20rem] [transform:translateX(calc(var(--ondo-t-i)*-1*(var(--ondo-t-w)+0.5rem)))] motion-reduce:transition-none lg:h-[26rem] lg:gap-3 lg:[--ondo-t-w:28rem] lg:[transform:translateX(calc(var(--ondo-t-i)*-1*(var(--ondo-t-w)+0.75rem)))]"
          style={{ ["--ondo-t-i" as string]: index }}
        >
          {items.map((item, i) => {
            const on = i === index;
            return (
              <li
                key={item.name}
                aria-current={on || undefined}
                className={cn(
                  "relative flex w-[var(--ondo-t-w)] shrink-0 flex-col rounded-2xl p-4 transition-[height,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:p-5",
                  on ? "dark h-full bg-background text-foreground" : "h-[75%] bg-accent text-accent-foreground",
                )}
              >
                <div className="flex items-end gap-3">
                  <div className={cn("size-[6.25rem] shrink-0 overflow-clip rounded-lg lg:size-[7.5rem]", !on && "hidden")}>
                    {item.media ?? <OndoPlaceholder tone="deep" />}
                  </div>
                  <div className="pb-1">
                    <p className="text-lg font-medium tracking-[-0.02em]">{item.name}</p>
                    <p className="mt-0.5 text-sm leading-[1.3] text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                {on && <p className="absolute top-4 right-4 font-display text-2xl font-bold tracking-[-0.04em] uppercase lg:top-5 lg:right-5">{item.company}</p>}
                <blockquote className={cn("mt-auto text-[1.14rem] leading-[1.05] lg:text-[1.375rem] lg:leading-[1.1]", !on && "line-clamp-5 text-sm leading-[1.15] lg:text-base", serif)}>
                  {item.quote}
                </blockquote>
              </li>
            );
          })}
        </ul>
        <OndoArrows
          className="mt-6"
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
