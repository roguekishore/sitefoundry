import { Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthHeading } from "@foundry/parsleyhealth-heading";

export interface ParsleyhealthFaqItem {
  /** the question */
  question: string;
  /** the answer, one string per paragraph */
  answer: string[];
}

export interface ParsleyhealthFaqProps {
  /** the title */
  title: string;
  /** the questions */
  items: ParsleyhealthFaqItem[];
  /** which item starts open (none when omitted) */
  openIndex?: number;
  /** groups the items so only one is open at a time */
  group?: string;
  className?: string;
}

/** Title beside an accordion of questions. */
export function ParsleyhealthFaq({ title, items, openIndex, group = "parsleyhealth-faq", className }: ParsleyhealthFaqProps) {
  return (
    <section className={cn("bg-muted px-gutter py-[calc(var(--section-y)*0.55)] lg:py-section", className)}>
      <div className="mx-auto grid max-w-page gap-8 lg:grid-cols-[minmax(0,1fr)_33.75rem] lg:gap-11">
        <ParsleyhealthHeading title={title} align="phone-center" titleClassName="mx-auto max-w-[16rem] lg:mx-0 lg:max-w-none" />
        <div className="border-t border-border">
          {items.map((item, i) => (
            <details key={item.question} name={group} open={i === openIndex} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 lg:py-9 [&::-webkit-details-marker]:hidden">
                <span className="text-[1.0625rem] leading-[1.35] font-medium text-primary lg:text-[1.3125rem] lg:leading-[1.4]">
                  {item.question}
                </span>
                <Plus aria-hidden className="mt-1 size-4 shrink-0 text-muted-foreground group-open:hidden" strokeWidth={1} />
                <Minus aria-hidden className="mt-1 hidden size-4 shrink-0 text-muted-foreground group-open:block" strokeWidth={1} />
              </summary>
              <div className="flex flex-col gap-6 pb-7 text-base leading-[1.6] text-muted-foreground lg:-mt-2 lg:gap-7 lg:text-lg">
                {item.answer.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
