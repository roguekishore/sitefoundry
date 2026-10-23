import { useId, useState, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PuzzleFaqGroup {
  /** the tab label */
  label: string;
  items: { question: string; answer: ReactNode }[];
}

export interface PuzzleFaqProps {
  title: string;
  /** one tab per group */
  groups: PuzzleFaqGroup[];
  className?: string;
}

/** Tabbed questions that open one at a time. */
export function PuzzleFaq({ title, groups, className }: PuzzleFaqProps) {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();
  const group = groups[tab] ?? groups[0];

  return (
    <section className={cn("bg-card text-card-foreground", className)}>
      <div className="mx-auto max-w-[63.5rem] px-gutter pt-10 pb-16 lg:pt-[3.25rem] lg:pb-24">
        <h2 className="text-center font-display text-[1.75rem]/[1.2] font-normal lg:text-4xl/[1.2]">{title}</h2>
        {groups.length > 1 && (
          <div role="tablist" className="mt-8 flex justify-center gap-1 lg:mt-14">
            {groups.map((g, i) => (
              <button
                key={g.label}
                type="button"
                role="tab"
                aria-selected={i === tab}
                onClick={() => {
                  setTab(i);
                  setOpen(null);
                }}
                className={cn(
                  "rounded-[calc(var(--radius)*0.6)] px-3 py-1.5 text-sm transition-colors duration-300 motion-reduce:transition-none lg:py-3 lg:text-base",
                  i === tab ? "lg:bg-foreground lg:text-background text-foreground/80" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}
        <ul className="mt-6 lg:mt-9">
          {group.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg/[1.55] lg:py-[2.0625rem] lg:text-lg/[1.4]"
                >
                  {item.question}
                  <ChevronRight
                    aria-hidden
                    className={cn("size-6 shrink-0 text-muted-foreground/70 transition-transform duration-300 motion-reduce:transition-none", isOpen && "rotate-90")}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  id={`${id}-${i}`}
                  className={cn("grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-[48rem] pb-6 text-base/[1.65] text-muted-foreground">{item.answer}</div>
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
