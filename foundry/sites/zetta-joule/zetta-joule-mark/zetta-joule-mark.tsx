import { Flame } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ZettaJouleMarkProps {
  /** the company name, set as a plain wordmark */
  name: string;
  /** show the small flame icon in front */
  icon?: boolean;
  /** size and colour: the wordmark follows the surrounding text colour */
  className?: string;
}

export function ZettaJouleMark({ name, icon = true, className }: ZettaJouleMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.3em] font-display text-[1.75rem] leading-none font-normal tracking-[-0.04em]", className)}>
      {icon && <Flame aria-hidden className="size-[0.85em]" strokeWidth={1.5} />}
      {name}
    </span>
  );
}
