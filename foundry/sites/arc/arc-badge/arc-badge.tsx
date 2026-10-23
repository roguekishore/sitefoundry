import { cn } from "@foundry/foundry-utils";

export interface ArcBadgeProps {
  /** the short label, e.g. a product name */
  label: string;
  className?: string;
}

/** A small pill tag on a faint ink tint: works on light, pastel and dark surfaces alike. */
export function ArcBadge({ label, className }: ArcBadgeProps) {
  return (
    <span className={cn("inline-flex h-7 items-center rounded-full bg-foreground/10 px-3.5 text-[0.875rem] leading-none text-foreground", className)}>
      {label}
    </span>
  );
}
