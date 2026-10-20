import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookV2EyebrowProps {
  /** the label, e.g. the product area */
  children: ReactNode;
  /** a small line icon (lucide works well), drawn in the brand colour */
  icon?: ReactNode;
  className?: string;
}

export function GrowthbookV2Eyebrow({ children, icon, className }: GrowthbookV2EyebrowProps) {
  return (
    <p className={cn("flex items-center gap-3 font-mono text-sm/[1.65] text-foreground", className)}>
      {icon && <span className="flex size-4 shrink-0 text-primary [&_svg]:size-4 [&_svg]:stroke-[1.5]">{icon}</span>}
      <span>{children}</span>
    </p>
  );
}
