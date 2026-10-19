import type { ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";
import "./newhalo-accordion.css";

export interface NewhaloAccordionItem {
  /** the question or title, always visible */
  question: string;
  /** what opens underneath */
  answer: ReactNode;
}

export interface NewhaloAccordionProps {
  items: NewhaloAccordionItem[];
  /**
   * lines: black hairline rows with a white plus tile · cards: no lines; the open item
   * becomes a white card and its tile turns orange
   */
  variant?: "lines" | "cards";
  /** a name shared by the items, so opening one closes the others */
  group: string;
  /** index of the item open at first; leave out for all closed */
  openIndex?: number;
  className?: string;
}

/**
 * Questions that open in place, one at a time (native details elements, no JavaScript).
 * The plus tile becomes a minus; answers slide open where the browser allows it.
 */
export function NewhaloAccordion({ items, variant = "lines", group, openIndex, className }: NewhaloAccordionProps) {
  const cards = variant === "cards";
  return (
    <div className={cn(!cards && "border-b border-foreground", className)}>
      {items.map((item, i) => (
        <details
          key={item.question}
          name={group}
          open={i === openIndex || undefined}
          className={cn(
            "newhalo-accordion-item group/acc",
            newhaloReveal("fade"),
            cards ? "rounded-lg px-gutter transition-colors duration-300 open:bg-card lg:px-[1.875rem]" : "border-t border-foreground",
          )}
          style={newhaloRevealStyle(Math.min(i, 4))}
        >
          <summary className={cn("flex cursor-pointer list-none items-start justify-between gap-6", cards ? "py-[1.875rem]" : "py-5 lg:py-[1.875rem]")}>
            <span className="pt-1.5 font-display text-[1.3rem] leading-[1.1] lg:text-2xl">{item.question}</span>
            <span
              aria-hidden
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-sm bg-card text-foreground transition-colors duration-300",
                "group-open/acc:bg-primary group-open/acc:text-primary-foreground",
              )}
            >
              <Plus strokeWidth={1.25} className="size-5 group-open/acc:hidden" />
              <Minus strokeWidth={1.25} className="hidden size-5 group-open/acc:block" />
            </span>
          </summary>
          <div className="max-w-[40rem] pb-[1.875rem] text-[0.91rem] leading-normal lg:text-base">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
