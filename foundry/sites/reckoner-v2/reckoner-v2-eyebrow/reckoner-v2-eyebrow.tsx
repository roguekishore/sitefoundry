import { cn } from "@foundry/foundry-utils";

export interface ReckonerV2EyebrowProps {
  /** the label; shown in capitals */
  label: string;
  className?: string;
}

/** Small capitals led by a little inset box. */
export function ReckonerV2Eyebrow({ label, className }: ReckonerV2EyebrowProps) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-sm leading-none tracking-[0.02em] uppercase", className)}>
      <span aria-hidden className="size-4 shrink-0 rounded-lg border border-border bg-background shadow-[inset_0_0_4px_1px_var(--highlight)]" />
      {label}
    </p>
  );
}
