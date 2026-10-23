import type { LucideIcon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PlaidWordmarkProps {
  /** the brand name, set in capitals */
  name: string;
  /** where the mark links to */
  href: string;
  /** the icon drawn before the name */
  icon: LucideIcon;
  /** mark: the icon alone at 48px (the name stays for screen readers) */
  markOnly?: boolean;
  className?: string;
}

/** Icon + small bold capitals, like a compact fintech wordmark. */
export function PlaidWordmark({ name, href, icon: Icon, markOnly = false, className }: PlaidWordmarkProps) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-1.5 font-display text-[0.9375rem] font-extrabold tracking-[0.06em] uppercase", className)}>
      <Icon aria-hidden className={markOnly ? "size-12" : "size-7"} strokeWidth={markOnly ? 1.75 : 2.25} />
      <span className={markOnly ? "sr-only" : undefined}>{name}</span>
    </a>
  );
}
