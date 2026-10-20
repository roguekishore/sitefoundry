import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReckonerV2WordmarkProps {
  /** the company name, set large */
  name: string;
  /** the small tracked line under the name (e.g. "credit partners") */
  tagline?: string;
  /** an icon before the name (a lucide icon) */
  icon?: ReactNode;
  /** classes for the icon only, e.g. a colour */
  iconClassName?: string;
  className?: string;
}

/** Icon + name + tiny capitals: a plain wordmark that inherits the text colour. */
export function ReckonerV2Wordmark({ name, tagline, icon, iconClassName, className }: ReckonerV2WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 lg:gap-2.5", className)}>
      {icon && (
        <span aria-hidden className={cn("flex [&_svg]:size-7 lg:[&_svg]:size-8", iconClassName)}>
          {icon}
        </span>
      )}
      <span className="flex flex-col">
        <span className="font-display text-[1.6875rem] leading-none font-medium tracking-[-0.03em] lg:text-[2rem]">{name}</span>
        {tagline && <span className="mt-1 text-[0.5rem] leading-none tracking-[0.22em] uppercase lg:text-[0.5625rem]">{tagline}</span>}
      </span>
    </span>
  );
}
