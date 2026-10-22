import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperpowerFact {
  /** a small icon (lucide works) */
  icon?: ReactNode;
  label: string;
}

export interface SuperpowerFactsProps {
  items: SuperpowerFact[];
  /** centre the row (and its wrapped lines) */
  centered?: boolean;
  className?: string;
}

export function SuperpowerFacts({ items, centered = false, className }: SuperpowerFactsProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8125rem] leading-tight [&_svg]:size-4 [&_svg]:shrink-0",
        centered && "justify-center",
        className,
      )}
    >
      {items.map((f) => (
        <li key={f.label} className="flex items-center gap-2">
          {f.icon}
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}
