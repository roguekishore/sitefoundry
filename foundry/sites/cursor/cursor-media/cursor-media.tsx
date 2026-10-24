import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CursorMediaProps {
  /** a real image or video; it fills the frame (object-fit: cover) */
  children?: ReactNode;
  /** picture: a soft glow-to-muted wash (painted backdrops) · plain: a flat glow-tinted panel (photos, avatars) */
  tone?: "picture" | "plain";
  /** a name for screen readers when the slot is empty */
  label?: string;
  /** size, aspect ratio and radius */
  className?: string;
}

/** A plain stand-in for media in the frame the original gives it. */
export function CursorMedia({ children, tone = "picture", label, className }: CursorMediaProps) {
  return (
    <div
      role={children ? undefined : "img"}
      aria-label={children ? undefined : label}
      className={cn(
        "relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        tone === "picture" ? "bg-[linear-gradient(180deg,var(--glow),var(--muted)_70%)]" : "bg-glow/70",
        className,
      )}
    >
      {children}
    </div>
  );
}
