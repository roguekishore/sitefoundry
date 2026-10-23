import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BridgeWordmarkProps {
  /** the company name */
  name: string;
  /** a small icon before the name (e.g. a lucide icon) */
  icon?: ReactNode;
  /** the small line beside or under the name, e.g. "a Halden company" */
  tagline?: string;
  /** where the wordmark links to */
  href: string;
  /** stacked: tagline under the name (phones, footer) · inline: beside it · responsive: stacked on phones, inline from lg */
  layout?: "stacked" | "inline" | "responsive";
  className?: string;
}

/** A plain icon + name wordmark with a parent-company tagline. */
export function BridgeWordmark({ name, icon, tagline, href, layout = "responsive", className }: BridgeWordmarkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex text-foreground",
        layout === "inline" && "items-center gap-2.5",
        layout === "stacked" && "flex-col items-start gap-0.5",
        layout === "responsive" && "flex-col items-start gap-0.5 lg:flex-row lg:items-center lg:gap-2.5",
        className,
      )}
    >
      <span className="flex items-center gap-1.5 font-display text-[1.375rem]/none font-medium tracking-[-0.04em] [&_svg]:size-[1.375rem]">
        {icon}
        {name}
      </span>
      {tagline && <span className="text-[0.8125rem]/none tracking-[-0.02em] lg:text-sm/none">{tagline}</span>}
    </a>
  );
}
