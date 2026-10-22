import { cn } from "@foundry/foundry-utils";
import "./neko-section-label.css";

export interface NekoSectionLabelProps {
  /** the label, shown in capitals */
  label: string;
  className?: string;
}

export function NekoSectionLabel({ label, className }: NekoSectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-6 font-sans text-foreground", className)}>
      <span className="neko-section-label-text flex items-center gap-2 text-sm tracking-[0.04em] uppercase lg:text-base">
        <span aria-hidden className="size-4 shrink-0 rounded-[3px] bg-foreground" />
        {label}
      </span>
      <span aria-hidden className="neko-section-label-rule h-px flex-1 bg-foreground" />
    </div>
  );
}
