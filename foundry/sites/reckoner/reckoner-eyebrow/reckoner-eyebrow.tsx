import { cn } from "@foundry/foundry-utils";

export interface ReckonerEyebrowProps {
  /** the label, shown in capitals */
  label: string;
  className?: string;
}

/** A section label: a little glowing square, then the label in small capitals. */
export function ReckonerEyebrow({ label, className }: ReckonerEyebrowProps) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-sm leading-none tracking-[0.02em] uppercase", className)}>
      <span aria-hidden className="size-4 shrink-0 rounded-lg bg-background shadow-[inset_0_0_4px_1px_var(--glow)]" />
      {label}
    </p>
  );
}
