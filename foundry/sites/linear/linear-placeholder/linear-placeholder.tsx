import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LinearPlaceholderProps {
  /** a real image, video or screenshot; when empty the panel itself stands in */
  children?: ReactNode;
  /** frame: a bordered product window · patch: a soft borderless glow (illustrations) */
  kind?: "frame" | "patch";
  /** a name for screen readers when the slot is empty */
  label?: string;
  /** size, aspect ratio and radius */
  className?: string;
}

/** A plain stand-in for media, in the frame the original gives it. */
export function LinearPlaceholder({ children, kind = "frame", label, className }: LinearPlaceholderProps) {
  return (
    <div
      role={children ? undefined : "img"}
      aria-label={children ? undefined : label}
      className={cn(
        "relative overflow-clip",
        kind === "frame"
          ? "rounded-xl border border-border bg-card shadow-[inset_0_0_12px_0] shadow-background/40"
          : "bg-[radial-gradient(closest-side,var(--muted),transparent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
