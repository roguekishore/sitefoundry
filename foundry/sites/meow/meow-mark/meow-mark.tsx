import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MeowMarkProps {
  /** the brand's name, set as the wordmark */
  name: string;
  /** a small emblem shown before the name, tinted with the brand colour */
  icon?: ReactNode;
  /** where the mark links to */
  href?: string;
  /** md: header size · lg: footer size */
  size?: "md" | "lg";
  className?: string;
}

/** Icon in the brand orange + a bold lowercase wordmark in the current text colour. */
export function MeowMark({ name, icon, href, size = "md", className }: MeowMarkProps) {
  const inner = (
    <>
      {icon && (
        <span aria-hidden className={cn("flex text-primary", size === "md" ? "[&_svg]:size-6" : "[&_svg]:size-[1.625rem]")}>
          {icon}
        </span>
      )}
      <span className={cn("font-display font-bold lowercase tracking-[-0.03em]", size === "md" ? "text-[1.375rem]/none" : "text-2xl/none")}>{name}</span>
    </>
  );
  const classes = cn("inline-flex items-center gap-2 text-foreground", className);
  return href ? (
    <a href={href} className={classes} aria-label={name}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
