import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SupabasePlaceholderProps {
  /** surface: flat pale grey (screenshots, video) · soft: pale grey that fades out at its
   *  edges (line illustrations inside cards) · avatar: a small round grey disc */
  tone?: "surface" | "soft" | "avatar";
  /** what the slot will hold, read to screen readers (e.g. "Dashboard video") */
  label?: string;
  /** real media to show instead of the empty surface */
  children?: ReactNode;
  className?: string;
}

const tones = {
  surface: "bg-muted",
  soft: "bg-muted mask-radial-[closest-side] mask-radial-from-40% mask-radial-to-100%",
  avatar: "rounded-full bg-muted ring-1 ring-border",
};

/** Stands in for media: a plain surface in the theme's colours, nothing drawn. */
export function SupabasePlaceholder({ tone = "surface", label, children, className }: SupabasePlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full overflow-clip", children ? undefined : tones[tone], className)}
    >
      {children}
    </div>
  );
}
