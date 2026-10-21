import type { ReactNode } from "react";
import { Cylinder } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RollersEyebrowProps {
  /** the label, set in capitals (WHO WE ARE) */
  children: ReactNode;
  /** the small mark before the label; a roller drum icon by default */
  icon?: ReactNode;
  /** colour overrides (charcoal chip, olive inside dark bands, by default) */
  className?: string;
}

/** A small 3px-cornered chip with a mark and an uppercase label, set above every heading. */
export function RollersEyebrow({ children, icon, className }: RollersEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2 py-[0.4375rem] font-display text-[0.875rem] leading-none text-secondary-foreground uppercase md:py-1.5",
        className,
      )}
    >
      <span aria-hidden className="flex size-3.5 items-center justify-center">
        {icon ?? <Cylinder className="size-3.5" strokeWidth={2.75} />}
      </span>
      {children}
    </span>
  );
}
