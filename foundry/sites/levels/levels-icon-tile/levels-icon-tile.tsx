import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsIconTileProps {
  /** the icon, e.g. a lucide icon element */
  children: ReactNode;
  className?: string;
}

/** Pale green-grey square with a green line icon. */
export function LevelsIconTile({ children, className }: LevelsIconTileProps) {
  return (
    <span
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5 [&_svg]:stroke-[1.5]",
        className,
      )}
    >
      {children}
    </span>
  );
}
