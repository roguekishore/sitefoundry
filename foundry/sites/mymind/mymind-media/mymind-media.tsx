import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MymindMediaProps {
  /** the image or video; left empty, the slot shows a plain placeholder surface */
  children?: ReactNode;
  /** "light" placeholder for pale surfaces, "dark" for dark cards and photo bands */
  tone?: "light" | "dark";
  /** size, aspect ratio, radius and position of the frame */
  className?: string;
}

/** A media frame: its child fills it (cover crop); empty, it is a token-tinted placeholder. */
export function MymindMedia({ children, tone = "light", className }: MymindMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        !children && (tone === "dark" ? "bg-muted-foreground/40" : "bg-muted-foreground/15"),
        className,
      )}
    >
      {children}
    </div>
  );
}
