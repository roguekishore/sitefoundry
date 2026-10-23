import { cn } from "@foundry/foundry-utils";

export interface BridgeSectionLabelProps {
  /** the word after the square, e.g. "Platform" */
  label: string;
  className?: string;
}

/** A sky square and a mono word: Bridge's section eyebrow. */
export function BridgeSectionLabel({ label, className }: BridgeSectionLabelProps) {
  return (
    <p className={cn("flex items-center gap-3.5 font-mono text-[0.8125rem]/[1.15] tracking-[-0.02em] text-foreground", className)}>
      <span aria-hidden className="size-2.5 shrink-0 bg-primary" />
      {label}
    </p>
  );
}
