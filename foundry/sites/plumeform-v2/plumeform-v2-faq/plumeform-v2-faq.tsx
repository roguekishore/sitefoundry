import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2FaqProps {
  eyebrow?: string;
  title: ReactNode;
  items: { question: string; answer: ReactNode }[];
  /** open the first question */
  openFirst?: boolean;
  id?: string;
  className?: string;
}

export function PlumeformV2Faq({ eyebrow, title, items, openFirst = false, id, className }: PlumeformV2FaqProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-[calc(var(--section-y)*0.75)] text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-[36rem]" />
        <ul className="mt-10 grid gap-3">
          {items.map((item, i) => (
            <PlumeformV2Reveal as="li" key={item.question} step={Math.min(i, 3)}>
              <details
                open={openFirst && i === 0}
                className="group rounded-lg border border-border bg-card shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-base font-semibold sm:px-8 sm:py-[1.375rem] lg:text-[1.0625rem] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                    <Plus className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                </summary>
                <div className="max-w-3xl px-6 pb-6 text-[0.9375rem] leading-[1.7] text-muted-foreground sm:px-8 [&_a]:font-semibold [&_a]:text-foreground [&_a]:underline">
                  {item.answer}
                </div>
              </details>
            </PlumeformV2Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
