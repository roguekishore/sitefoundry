import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ImpulsespacePlaceholderProps {
  /** a real image or video; it is stretched to cover the slot. Empty: a plain token surface */
  media?: ReactNode;
  /** what the slot will show, for screen readers (only used while it is empty) */
  label?: string;
  /** scene: a photo / video frame (muted, faint glow at the foot) · render: a product cut-out (a soft glow square, no frame) */
  kind?: "scene" | "render";
  className?: string;
}

/** A flat media slot. Empty, it is a muted surface with a faint glow, plainly a placeholder. */
export function ImpulsespacePlaceholder({ media, label, kind = "scene", className }: ImpulsespacePlaceholderProps) {
  return (
    <div
      role={media ? undefined : "img"}
      aria-label={media ? undefined : label}
      className={cn(
        "relative overflow-clip",
        !media && kind === "scene" &&
          "bg-muted bg-[radial-gradient(120%_70%_at_50%_110%,color-mix(in_oklab,var(--glow)_26%,transparent),transparent_70%)]",
        !media && kind === "render" &&
          "rounded-lg bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--foreground)_14%,transparent),color-mix(in_oklab,var(--foreground)_5%,transparent)_70%,transparent)]",
        "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        className,
      )}
    >
      {media}
    </div>
  );
}
