import { Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkGuides } from "@foundry/sharplink-guides";
import { SharplinkLabel } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";
import { SharplinkTextReveal } from "@foundry/sharplink-text-reveal";
import "./sharplink-faq.css";

export interface SharplinkFaqItem {
  /** the question */
  question: string;
  /** the answer, shown when the row opens */
  answer: string;
}

export interface SharplinkFaqProps {
  /** the big title on the left */
  title: string;
  /** the small label before the button, e.g. "Still curious?" */
  label?: string;
  /** the tinted button at the top right */
  cta?: { label: string; href: string };
  /** the questions, in order (numbered 01, 02…) */
  items: SharplinkFaqItem[];
  className?: string;
}

/** Big title left, numbered question rows right, each opening with a slow ease. */
export function SharplinkFaq({ title, label, cta, items, className }: SharplinkFaqProps) {
  return (
    <section className={cn("sharplink-faq relative isolate overflow-clip text-foreground", className)}>
      <SharplinkGuides />
      <div className="mx-auto max-w-page px-gutter pb-16 lg:pb-12">
        <SharplinkRule />
        <div className="grid gap-y-6 pt-6 pb-14 lg:grid-cols-3 lg:gap-x-gutter lg:pt-5 lg:pb-14">
          <SharplinkTextReveal
            text={title}
            className="font-display text-[2.75rem] leading-[1.15] font-normal tracking-[-0.01em] lg:text-[4.25rem] lg:leading-[1.06] lg:tracking-[-0.02em]"
          />
          {(label || cta) && (
            <div className="flex flex-col items-start gap-6 lg:col-start-3 lg:flex-row lg:items-center lg:justify-end lg:gap-5 lg:pt-4">
              {label && <SharplinkLabel>{label}</SharplinkLabel>}
              {cta && (
                <SharplinkButton href={cta.href} variant="tint" arrow>
                  {cta.label}
                </SharplinkButton>
              )}
            </div>
          )}
        </div>
        <div className="-mx-gutter border-t border-dotted border-foreground/15 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-gutter">
          <ul className="grid gap-1 px-gutter lg:col-span-2 lg:col-start-2 lg:px-0">
            {items.map((item, i) => (
              <li key={item.question}>
                <details className="sharplink-faq-item group bg-foreground/[0.03] transition-colors duration-[250ms] hover:bg-foreground/[0.06] motion-reduce:transition-none">
                  <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-5 gap-y-5 p-4 lg:grid-cols-[2.375rem_1fr_auto] lg:p-5">
                    <span className="inline-flex h-[1.375rem] w-fit items-center gap-1 bg-foreground/10 px-1.5 text-foreground/60">
                      <span aria-hidden className="size-1 bg-foreground/60" />
                      <span className="font-sans text-xs font-medium tracking-[0.06em] [font-stretch:80%]">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <span className="col-span-2 row-start-2 max-w-[17rem] text-base leading-[1.35] font-medium tracking-[-0.01em] lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:max-w-none lg:text-[1.1875rem]">
                      {item.question}
                    </span>
                    <span className="col-start-2 row-start-1 grid size-[2.125rem] place-items-center bg-foreground text-background lg:col-start-3">
                      <Plus className="size-5 group-open:hidden" strokeWidth={1.25} />
                      <Minus className="hidden size-5 group-open:block" strokeWidth={1.25} />
                    </span>
                  </summary>
                  <p className="max-w-[42rem] px-4 pb-6 text-base leading-[1.4] text-foreground/60 lg:pr-20 lg:pb-7 lg:pl-[4.75rem]">{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
