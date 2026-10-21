import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeAccordionItem {
  /** the row's title */
  title: string;
  /** the answer that slides open */
  body: string;
}

export interface EsrbespokeAccordionProps {
  /** the tiny label at the left */
  label: string;
  /** the rows */
  items: EsrbespokeAccordionItem[];
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const ease = "ease-[cubic-bezier(0.19,1,0.22,1)]";

/** Label at the left, hairline rows at column 7 that slide open. */
export function EsrbespokeAccordion({ label, items, tone = "light", id, className }: EsrbespokeAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();
  return (
    <section id={id} className={cn(toneClass(tone), "pb-20 lg:pb-32", className)}>
      <div className="mx-gutter grid grid-cols-2 gap-x-4 border-t border-border lg:grid-cols-12">
        <EsrbespokeLabel as="h2" className="col-span-2 pt-8 lg:col-span-3">{label}</EsrbespokeLabel>
        <ul className="col-span-2 mt-[3.75rem] lg:col-span-6 lg:col-start-7 lg:mt-0">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${base}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-[1.25rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%]">{item.title}</span>
                  <ChevronDown className={cn("size-3 shrink-0 transition-transform duration-500 motion-reduce:transition-none", ease, isOpen && "rotate-180")} strokeWidth={2.5} />
                </button>
                <div
                  id={`${base}-${i}`}
                  className={cn("grid transition-[grid-template-rows] duration-500 motion-reduce:transition-none", ease, isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[34rem] pb-6 font-display text-[0.9375rem] leading-[1.25] font-medium text-muted-foreground font-stretch-[106%] lg:text-[1.125rem]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
