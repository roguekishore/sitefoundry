import type { ReactNode } from "react";
import { InfinityIcon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalSonnetMarkProps {
  /** the brand name, set large beside the icon */
  name: string;
  /** where the logo links to */
  href?: string;
  /** replaces the default icon */
  icon?: ReactNode;
  className?: string;
}

/** The logo: an icon and the brand name, both in the text colour. */
export function HalodentalSonnetMark({ name, href = "/", icon, className }: HalodentalSonnetMarkProps) {
  return (
    <a href={href} className={cn("inline-flex items-center gap-2 text-foreground", className)}>
      {icon ?? <InfinityIcon aria-hidden className="size-9 lg:size-11" strokeWidth={3.5} />}
      <span className="font-display text-[2.1rem] leading-none tracking-[-0.01em] lg:text-[2.75rem]">{name}</span>
    </a>
  );
}
