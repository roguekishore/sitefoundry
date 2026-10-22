import type { ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyTape } from "@foundry/basepowercompany-tape";

export interface BasepowercompanyFaqItem {
  /** the question */
  question: string;
  /** the answer */
  answer: ReactNode;
}

export interface BasepowercompanyFaqProps {
  /** the torn-tape label above the heading */
  tape?: string;
  /** the heading; wrap it in BasepowercompanySwash to underline it */
  title: ReactNode;
  /** the questions; the first starts open */
  items: BasepowercompanyFaqItem[];
  /** shared name so opening one row closes the others */
  group?: string;
  className?: string;
}

/* Questions as full-width rows between hairlines, a plus that turns into a minus when open.
   Native <details>: no JavaScript. */
export function BasepowercompanyFaq({ tape, title, items, group = "bp-faq", className }: BasepowercompanyFaqProps) {
  return (
    <section className={cn("bg-background px-gutter pt-16 pb-16 text-foreground lg:pt-24", className)}>
      <div className="mx-auto max-w-page">
        {tape && <BasepowercompanyTape tilt={-2}>{tape}</BasepowercompanyTape>}
        <h2 className="mt-3 font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] text-primary lg:mt-4 lg:text-[2.5rem] lg:leading-[1.1]">{title}</h2>

        <div className="mt-6 lg:mt-10">
          {items.map((it, i) => (
            <details key={it.question} name={group} open={i === 0} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-[1.8125rem] [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg leading-[1.45] font-semibold tracking-[-0.005em] lg:text-xl lg:leading-[1.35]">{it.question}</h3>
                <Plus aria-hidden className="size-6 shrink-0 stroke-[1.25] group-open:hidden" />
                <Minus aria-hidden className="hidden size-6 shrink-0 stroke-[1.25] group-open:block" />
              </summary>
              <div className="pb-6 text-base leading-6 tracking-[-0.005em] text-muted-foreground lg:pt-1 lg:pb-8">{it.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
