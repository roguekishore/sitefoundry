import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PuzzleHeadingProps {
  /** the small uppercase monospace line above */
  eyebrow?: string;
  /** the headline; may hold <br /> for a set line break */
  title: ReactNode;
  /** the paragraph under it */
  text?: ReactNode;
  /** centre: the default for section openers · left: inside panels */
  align?: "center" | "left";
  /** default: ink on light · inverse: white on the violet bands */
  tone?: "default" | "inverse";
  /** heading level; h2 by default */
  as?: "h1" | "h2" | "h3";
  /** eyebrow size: sm 14px (most) · lg 18–20px (the services and two-ways openers) */
  eyebrowSize?: "sm" | "lg";
  className?: string;
}

/** Eyebrow, headline, paragraph. */
export function PuzzleHeading({ eyebrow, title, text, align = "center", tone = "default", as: Tag = "h2", eyebrowSize = "sm", className }: PuzzleHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-mono uppercase",
            eyebrowSize === "lg" ? "text-lg/6 tracking-[0.06em] lg:text-xl/6" : "text-sm/5 tracking-[0.06em]",
            inverse ? "text-primary-foreground" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-[1.75rem]/[1.2] font-medium tracking-[-0.01em] text-balance lg:text-4xl/[1.2]",
          eyebrow && (eyebrowSize === "lg" ? "mt-2 lg:mt-3" : "mt-2 lg:mt-3"),
          inverse ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {text && (
        <p
          className={cn(
            "mt-4 text-base/[1.6] lg:mt-5 lg:text-[1.0625rem]/[1.6]",
            align === "center" && "mx-auto max-w-[40rem]",
            inverse ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
