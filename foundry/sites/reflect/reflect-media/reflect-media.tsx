import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./reflect-media.css";

export interface ReflectMediaProps {
  /** a real image or video; it fills the frame (object-fit: cover) */
  children?: ReactNode;
  /** glow: a centred glow wash · rise: glow rising from the bottom edge · fall: glow falling from the top · panel: a flat muted surface */
  tone?: "glow" | "rise" | "fall" | "panel";
  /** a name for screen readers when the slot is empty */
  label?: string;
  /** fade in while entering the window */
  reveal?: boolean;
  /** size, aspect ratio, radius and position */
  className?: string;
}

// Written out in full so Tailwind can see each class.
const tones = {
  glow: "bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklab,var(--glow)_55%,transparent),color-mix(in_oklab,var(--glow)_18%,transparent)_55%,transparent)]",
  rise: "bg-[radial-gradient(45%_70%_at_50%_100%,color-mix(in_oklab,var(--glow)_70%,transparent),color-mix(in_oklab,var(--glow)_22%,transparent)_50%,transparent)]",
  fall: "bg-[radial-gradient(40%_80%_at_50%_0%,color-mix(in_oklab,var(--glow)_60%,transparent),color-mix(in_oklab,var(--glow)_18%,transparent)_50%,transparent)]",
  panel: "bg-muted",
};

/** A plain placeholder for media, the size and shape of the original's. */
export function ReflectMedia({ children, tone = "panel", label, reveal, className }: ReflectMediaProps) {
  return (
    <div
      role={children ? undefined : "img"}
      aria-label={children ? undefined : label}
      className={cn(
        "relative overflow-clip [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
        !children && tones[tone],
        reveal && "reflect-media-reveal",
        className,
      )}
    >
      {children}
    </div>
  );
}
