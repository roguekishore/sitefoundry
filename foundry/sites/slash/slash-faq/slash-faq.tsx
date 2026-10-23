import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashHeadingText, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashFaqItem {
  /** the question */
  question: string;
  /** the answer */
  answer: ReactNode;
}

export interface SlashFaqProps {
  /** the heading, as runs */
  heading: SlashHeadingPart[];
  /** the grey line under it, before the link */
  sub?: string;
  /** the underlined link that ends the line ("Write to us") */
  link?: { label: string; href: string };
  /** the questions; none starts open */
  items: SlashFaqItem[];
  className?: string;
}

/** A serif heading on the left and a ruled list of questions on the right that open one at a time. */
export function SlashFaq({ heading, sub, link, items, className }: SlashFaqProps) {
  const [open, setOpen] = useState(-1);
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2)]", className)}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter lg:grid-cols-[1fr_40rem] lg:gap-12">
        <div>
          <h2 className="max-w-[20rem] font-display text-[2.25rem] leading-[1.03] font-normal tracking-[-0.01em] lg:max-w-[27rem] lg:text-[4rem]">
            <SlashHeadingText parts={heading} />
          </h2>
          {(sub || link) && (
            <p className="mt-5 max-w-[24rem] text-base leading-[1.4] tracking-[-0.02em] text-foreground/70 lg:mt-6 lg:text-xl">
              {sub}{" "}
              {link && (
                <a href={link.href} className="underline underline-offset-4 transition-colors duration-150 hover:text-foreground">
                  {link.label}
                </a>
              )}
            </p>
          )}
        </div>
        <ul>
          {items.map((item, i) => {
            const isOpen = i === open;
            return (
              <li key={item.question} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left text-base font-medium tracking-[-0.03em] transition-colors duration-150 hover:text-muted-foreground lg:py-[1.4rem] lg:text-2xl lg:tracking-[-0.02em]"
                >
                  {item.question}
                  <ChevronDown
                    aria-hidden
                    strokeWidth={1.5}
                    className={cn("size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none lg:mr-2", isOpen && "rotate-180")}
                  />
                </button>
                <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-[36rem] pb-6 text-base leading-[1.5] tracking-[-0.02em] text-foreground/70 lg:text-lg">{item.answer}</div>
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
