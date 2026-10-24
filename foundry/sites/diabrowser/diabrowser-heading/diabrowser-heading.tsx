import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface DiabrowserHeadingProps {
  children: ReactNode;
  /** the tag to render (h2 for section heads, p for a heading split around other content) */
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}

/** A tightly tracked serif section heading, centred. */
export function DiabrowserHeading({ children, as: Tag = "h2", className }: DiabrowserHeadingProps) {
  return (
    <Tag
      className={cn(
        "mx-auto max-w-[20ch] text-center font-display text-[32px] leading-[38px] font-[420] tracking-[-0.05em] text-balance text-foreground md:text-[48px] md:leading-[56px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
