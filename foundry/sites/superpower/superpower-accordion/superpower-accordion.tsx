import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./superpower-accordion.css";

export interface SuperpowerAccordionItem {
  /** the question, always visible */
  question: string;
  /** the answer, shown when the row is opened */
  answer: ReactNode;
}

export interface SuperpowerAccordionProps {
  items: SuperpowerAccordionItem[];
  /** line: hairline FAQ rows · soft: grey boxes · tour: grey boxes on phones, dark glass on desktop */
  variant?: "line" | "soft" | "tour";
  className?: string;
}

export function SuperpowerAccordion({ items, variant = "line", className }: SuperpowerAccordionProps) {
  const line = variant === "line";
  return (
    <div className={cn(!line && "flex flex-col gap-1.5", className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className={cn(
            "group",
            line && "border-b border-border",
            variant === "soft" && "rounded-lg bg-secondary",
            variant === "tour" &&
              "rounded-lg bg-secondary lg:rounded-[calc(var(--radius)/2)] lg:bg-linear-to-r lg:from-foreground/45 lg:to-foreground/80 lg:text-background lg:backdrop-blur-md",
          )}
        >
          <summary
            className={cn(
              "flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden",
              line && "py-6 text-[1rem] leading-snug lg:py-7 lg:text-[1.0625rem]",
              !line && "py-3 pr-3 pl-4 text-[0.875rem] leading-snug lg:text-[0.9375rem]",
              variant === "tour" && "lg:py-2 lg:pr-2 lg:pl-4",
            )}
          >
            <span>{item.question}</span>
            <span
              className={cn(
                "grid shrink-0 place-items-center transition-transform duration-250 ease-out group-open:rotate-45 motion-reduce:transition-none",
                line ? "size-6 text-muted-foreground" : "size-9 rounded-sm bg-muted",
                variant === "tour" && "lg:size-7 lg:rounded-[calc(var(--radius)/3)] lg:bg-background/15",
              )}
            >
              <Plus className={line ? "size-5" : "size-4"} strokeWidth={line ? 1.25 : 2} aria-hidden />
            </span>
          </summary>
          <div
            className={cn(
              "superpower-accordion-answer text-muted-foreground",
              line && "pb-6 text-[0.9375rem] leading-relaxed",
              !line && "px-4 pb-4 text-[0.8125rem] leading-relaxed lg:text-[0.875rem]",
              variant === "tour" && "lg:text-background/75",
            )}
          >
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
