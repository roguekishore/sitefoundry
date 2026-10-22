import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MeowHeading } from "@foundry/meow-heading";

export interface MeowFaqItem {
  question: string;
  answer: ReactNode;
}

export interface MeowFaqProps {
  /** the section title */
  title: ReactNode;
  /** the questions */
  items: MeowFaqItem[];
  /** a closing line under the list (links inside are underlined) */
  footnote?: ReactNode;
  className?: string;
}

/** Plus-led question rows between hairlines; each opens in place. */
export function MeowFaq({ title, items, footnote, className }: MeowFaqProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pb-12 lg:pb-[4.5rem]">
        <div className="border-t border-border pt-14 lg:pt-16">
          <MeowHeading title={title} />
        </div>
        <div className="mt-8 lg:mt-10">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center gap-6 py-[1.375rem] lg:gap-[1.9rem] lg:px-7 lg:py-[1.625rem] [&::-webkit-details-marker]:hidden">
                <Plus
                  aria-hidden
                  className="size-4 shrink-0 text-muted-foreground/70 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
                <span className="text-lg/6 font-semibold tracking-[-0.015em]">{item.question}</span>
              </summary>
              <div className="pr-4 pb-6 pl-10 text-base/6 text-muted-foreground lg:pl-[4.1rem]">{item.answer}</div>
            </details>
          ))}
        </div>
        {footnote && <p className="mt-7 text-base/6 text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:transition-opacity [&_a:hover]:opacity-80">{footnote}</p>}
      </div>
    </section>
  );
}
