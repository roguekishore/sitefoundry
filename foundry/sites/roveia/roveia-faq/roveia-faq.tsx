import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-faq.css";

export interface RoveiaFaqItem {
  question: string;
  answer: string;
}

export interface RoveiaFaqProps {
  heading: string;
  items: RoveiaFaqItem[];
  className?: string;
}

/**
 * A quiet FAQ: a big light heading on the left (64px / 300) and, on the right, plain questions
 * spaced well apart, each with a small black round arrow button that turns down when its answer
 * opens (a <details> element, no JavaScript). Rows fade in one after another on scroll.
 */
export function RoveiaFaq({ heading, items, className }: RoveiaFaqProps) {
  return (
    <section className={cn("bg-background py-20 text-foreground lg:py-16", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter lg:grid-cols-[1fr_1.22fr] lg:gap-8">
        <h2 className="max-w-[22rem] text-[2rem] leading-[1.15] font-light tracking-[-0.05em] lg:max-w-[23rem] lg:text-[4rem] lg:leading-[1.2] lg:tracking-[-0.03em]">
          {heading}
        </h2>
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.question} className="roveia-faq-row" style={{ "--i": i } as CSSProperties}>
              <details className="group pb-6 lg:pb-10">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 pt-1 [&::-webkit-details-marker]:hidden">
                  <span className="text-lg leading-6 tracking-[-0.02em] lg:text-base lg:leading-6">{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-open:rotate-90 motion-reduce:transition-none"
                  >
                    <ArrowRight className="size-3" strokeWidth={2} />
                  </span>
                </summary>
                <p className="mt-3 max-w-[34rem] pr-12 text-base leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
