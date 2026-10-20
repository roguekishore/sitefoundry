import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-faq.css";

export interface RoveiaV2FaqItem {
  /** the question */
  question: string;
  /** the answer, shown when the row opens */
  answer: string;
}

export interface RoveiaV2FaqProps {
  /** the heading on the left */
  heading: string;
  /** the questions, top to bottom */
  items: RoveiaV2FaqItem[];
  className?: string;
}

export function RoveiaV2Faq({ heading, items, className }: RoveiaV2FaqProps) {
  return (
    <section className={cn("bg-background pt-[4.5rem] pb-16 text-foreground lg:pt-12 lg:pb-[4.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:grid lg:grid-cols-[33.75rem_1fr]">
        <RoveiaV2Heading className="max-w-[22rem] lg:max-w-[28rem] lg:text-[4.375rem] lg:leading-[1.1] lg:tracking-[-0.03em]">{heading}</RoveiaV2Heading>
        <ul className="mt-10 space-y-8 lg:mt-3 lg:space-y-[3.25rem]">
          {items.map((item) => (
            <li key={item.question} className="roveia-v2-faq-row">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-xl leading-6 tracking-[-0.03em] lg:leading-5">{item.question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-[transform,background-color] duration-300 group-open:rotate-90 group-hover:bg-primary motion-reduce:transition-none lg:mt-0.5">
                    <ArrowRight aria-hidden className="size-3" strokeWidth={2} />
                  </span>
                </summary>
                <p className="mt-4 max-w-[36rem] pr-14 text-base leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
