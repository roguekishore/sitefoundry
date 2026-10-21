import { type ReactNode, useId, useState } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LedupValue {
  /** the row's label, set in capitals after its number ("Innovation") */
  label: string;
  /** the title shown when the row is open */
  title: ReactNode;
  /** the paragraph shown when the row is open (desktop only, as on the original) */
  text?: ReactNode;
  /** up to two photos; the second shows on desktop only. Empty shows placeholders */
  media?: [ReactNode?, ReactNode?];
}

export interface LedupValuesProps {
  /** the rows, top to bottom (five in the original) */
  items: LedupValue[];
  /** which row starts open */
  initial?: number;
  className?: string;
}

export function LedupValues({ items, initial = 0, className }: LedupValuesProps) {
  const [open, setOpen] = useState(initial);
  const id = useId();

  return (
    <section className={cn("bg-background pt-6 pb-10 font-sans lg:pt-24 lg:pb-[13.25rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="mx-auto flex max-w-[74.375rem] flex-col overflow-clip rounded-lg bg-foreground text-background">
          {items.map((item, i) => {
            const isOpen = i === open;
            return (
              <div
                key={item.label}
                className={cn("relative rounded-b-lg", i > 0 && "-mt-5 pt-5")}
                style={{
                  zIndex: items.length - i,
                  background: `color-mix(in oklch, var(--foreground), var(--background) ${i * 5.5}%)`,
                }}
              >
                <div
                  id={`${id}-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden" aria-hidden={!isOpen}>
                    <div className="min-h-[calc(88svh-14.375rem)] px-5 pt-[5.625rem] pb-6 lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_17.125rem_17.125rem] lg:gap-7 lg:px-[7.2rem] lg:pt-10 lg:pb-3">
                      <div className="hidden lg:col-start-2 lg:row-start-1 lg:block">
                        <Photo>{item.media?.[0]}</Photo>
                      </div>
                      <div className="hidden lg:col-start-3 lg:row-start-1 lg:mt-20 lg:block">
                        <Photo>{item.media?.[1]}</Photo>
                      </div>
                      <div className="lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:justify-end">
                        <div className="lg:hidden">
                          <Photo>{item.media?.[0]}</Photo>
                        </div>
                        <h3 className="mt-6 text-lg leading-[1.35] font-medium lg:mt-0 lg:max-w-[10em] lg:text-4xl lg:leading-[1.2]">{item.title}</h3>
                        {item.text && <p className="mt-3 hidden max-w-[22.5rem] text-sm leading-[1.6] font-medium lg:block">{item.text}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-${i}`}
                  onClick={() => setOpen(i)}
                  className="flex h-[2.875rem] w-full items-center gap-2.5 px-5 text-left text-xs uppercase lg:h-14 lg:gap-3 lg:px-[7.2rem] lg:text-sm lg:font-medium"
                >
                  <span>{String(i + 1).padStart(2, "0")}.</span>
                  <span>{item.label}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Photo({ children }: { children?: ReactNode }) {
  return (
    <div className="aspect-[318/240] overflow-clip rounded-lg bg-background/10 lg:aspect-[329/384] [&>*]:size-full [&>*]:object-cover">
      {children}
    </div>
  );
}
