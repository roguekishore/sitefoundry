import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthTrustItem {
  /** the short reassurance */
  label: string;
  /** a line icon (e.g. a lucide icon) */
  icon: ReactNode;
}

export interface ParsleyhealthTrustProps {
  /** the reassurances (five on the original) */
  items: ParsleyhealthTrustItem[];
  className?: string;
}

/** Outlined tiles on desktop, a ruled list on phones. */
export function ParsleyhealthTrust({ items, className }: ParsleyhealthTrustProps) {
  return (
    <section className={cn("bg-muted px-gutter py-8 lg:py-12", className)}>
      <ul className="mx-auto flex max-w-page flex-col lg:flex-row lg:justify-center lg:gap-6">
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              "relative flex h-[4.8125rem] items-center gap-6 border-b border-border",
              "lg:h-28 lg:w-50 lg:justify-center lg:rounded-lg lg:border lg:px-6 lg:pt-3 lg:text-center",
            )}
          >
            <span
              aria-hidden
              className="shrink-0 text-muted-foreground/45 [&_svg]:size-8 [&_svg]:stroke-1 lg:absolute lg:-top-5 lg:left-1/2 lg:-translate-x-1/2 lg:bg-muted lg:px-3 lg:[&_svg]:size-10"
            >
              {item.icon}
            </span>
            <span className="text-[1.1rem] leading-[1.455] text-foreground lg:text-[1.2375rem]">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
