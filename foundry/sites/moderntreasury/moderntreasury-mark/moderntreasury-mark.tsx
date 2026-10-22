import type { ReactNode } from "react";
import { Waypoints } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryMarkProps {
  /** the company name, set in capitals */
  name: string;
  /** where the mark links to */
  href?: string;
  /** an icon before the name; a lucide line icon by default */
  icon?: ReactNode;
  className?: string;
}

/** The wordmark: icon plus capitals, in the brand green. */
export function ModerntreasuryMark({ name, href = "/", icon, className }: ModerntreasuryMarkProps) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-2 text-highlight", className)}>
      <span aria-hidden className="[&_svg]:size-[1.375rem]">
        {icon ?? <Waypoints strokeWidth={2.25} />}
      </span>
      <span className="text-[1.125rem] leading-none font-extrabold tracking-[0.02em] uppercase">{name}</span>
    </a>
  );
}
