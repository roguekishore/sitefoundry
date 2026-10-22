import { useState, type ReactNode } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AnchorageAccordionOffering {
  /** the icon in the outlined tile (e.g. a lucide icon) */
  icon: ReactNode;
  title: string;
  /** one line of detail */
  body: string;
  /** makes the offering a link */
  href?: string;
}

export interface AnchorageAccordionRow {
  /** the number in the ring, e.g. "01" */
  number: string;
  title: string;
  /** the one-line summary beside the title */
  summary: string;
  /** what opens under the row */
  offerings: AnchorageAccordionOffering[];
}

export interface AnchorageAccordionProps {
  /** the centred heading above the rows */
  title: string;
  rows: AnchorageAccordionRow[];
  /** indexes of the rows that start open */
  defaultOpen?: number[];
  className?: string;
}

/** Numbered rows that open to a list of offerings. */
export function AnchorageAccordion({ title, rows, defaultOpen = [0], className }: AnchorageAccordionProps) {
  const [open, setOpen] = useState<number[]>(defaultOpen);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <section className={cn("pt-[3.25rem] pb-[3.25rem] text-foreground lg:pt-36 lg:pb-[8.25rem]", className)}>
      <div className="mx-auto max-w-[60.75rem] px-gutter">
        <h2 className="mx-auto max-w-[22rem] text-center font-display text-[2rem] leading-[1.1] font-[550] sm:max-w-none lg:text-[2.5rem] lg:leading-[1.2]">{title}</h2>

        <ul className="mt-9 border-b border-border lg:mt-[6.5rem]">
          {rows.map((row, i) => {
            const isOpen = open.includes(i);
            const panelId = `anchorage-accordion-${i}-${row.number}`;
            return (
              <li key={row.number} className="border-t border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="grid w-full cursor-pointer grid-cols-[4.75rem_1fr_auto] items-start gap-x-4 py-12 text-left lg:grid-cols-[4.75rem_21.125rem_1fr_auto] lg:items-center lg:gap-x-8"
                >
                  <span className="flex size-[4.75rem] items-center justify-center rounded-full border border-highlight/80 text-[2.19rem] font-light">{row.number}</span>
                  <span className="flex flex-col gap-2 pt-1 lg:contents">
                    <span className="font-display text-[1.75rem] leading-[1.3] font-[550] lg:text-[1.9rem]">{row.title}</span>
                    <span className="text-lg leading-[1.5] font-semibold lg:text-xl lg:font-medium">{row.summary}</span>
                  </span>
                  <span aria-hidden className="pt-1 lg:pt-0">
                    {isOpen ? <CircleMinus className="size-6" strokeWidth={1.25} /> : <CirclePlus className="size-6" strokeWidth={1.25} />}
                  </span>
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-400 ease-in-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <ul className="-mt-2 pb-14 lg:ml-[30rem]">
                      {row.offerings.map((o, k) => {
                        const Tag = o.href ? "a" : "div";
                        return (
                          <li key={o.title} className={cn(k > 0 && "border-t border-border")}>
                            <Tag
                              {...(o.href ? { href: o.href } : {})}
                              className="group grid grid-cols-[3.125rem_1fr] items-start gap-x-7 py-4 lg:gap-x-9"
                            >
                              <span aria-hidden className="flex size-[3.125rem] items-center justify-center rounded-md border border-foreground/30 transition-colors duration-300 group-hover:border-primary group-hover:text-primary motion-reduce:transition-none [&>svg]:size-6">
                                {o.icon}
                              </span>
                              <span className="flex flex-col">
                                <span className="text-xl leading-[1.3] font-medium transition-colors duration-300 group-hover:text-primary motion-reduce:transition-none">{o.title}</span>
                                <span className="mt-1 text-base leading-[1.6] font-medium">{o.body}</span>
                              </span>
                            </Tag>
                          </li>
                        );
                      })}
                    </ul>
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
