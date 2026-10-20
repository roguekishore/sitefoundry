import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformFaqProps {
  eyebrow?: string;
  title: ReactNode;
  /** the questions; each opens to its answer */
  items: { question: string; answer: ReactNode }[];
  id?: string;
  className?: string;
}

/** Common questions as white rounded rows that open in place; the + in each turns to ×. */
export function PlumeformFaq({ eyebrow, title, items, id, className }: PlumeformFaqProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading eyebrow={eyebrow} title={title} className="max-w-[36rem]" />
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <PlumeformReveal key={item.question} step={Math.min(i, 3)}>
              <details className="group rounded-2xl border border-border bg-card text-card-foreground shadow-[inset_0_1px_0_var(--card),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_30%,transparent)]">
                <summary className="flex min-h-[4.25rem] cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 text-base font-bold lg:px-8 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-highlight transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">
                    <Plus aria-hidden className="size-3.5" strokeWidth={2.5} />
                  </span>
                </summary>
                <div className="max-w-3xl px-6 pb-6 text-[0.9375rem] leading-[1.65] text-muted-foreground lg:px-8">{item.answer}</div>
              </details>
            </PlumeformReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
