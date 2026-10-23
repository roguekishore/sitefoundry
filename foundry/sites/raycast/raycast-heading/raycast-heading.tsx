import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RaycastHeadingProps {
  /** the first, white sentence */
  title: ReactNode;
  /** the second, grey sentence */
  subtitle?: ReactNode;
  /** centre it (default) or set it left */
  align?: "center" | "left";
  className?: string;
}

/** A two-tone section heading: white claim, grey follow-up on the very next line. */
export function RaycastHeading({ title, subtitle, align = "center", className }: RaycastHeadingProps) {
  return (
    <h2 className={cn("text-xl leading-[1.2] tracking-[0.2px] text-balance", align === "center" ? "text-center" : "text-left", className)}>
      <span className="block font-semibold text-foreground">{title}</span>
      {subtitle && <span className="block font-medium text-muted-foreground/75">{subtitle}</span>}
    </h2>
  );
}
