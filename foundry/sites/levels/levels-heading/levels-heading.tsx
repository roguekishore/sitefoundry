import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsHeadingProps {
  /** the title */
  title: ReactNode;
  /** small tracked capitals above the title */
  eyebrow?: ReactNode;
  /** grey text under the title */
  lead?: ReactNode;
  /** section: 32→56px · row: 28.8→44.8px (feature rows) · display: 44→76px (closing band) */
  size?: "section" | "row" | "display";
  /** start: left-aligned · centre: centred */
  align?: "start" | "centre";
  /** grey: the usual eyebrow · sage: the pale eyebrow of the dark bands */
  eyebrowTone?: "grey" | "sage";
  /** heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

// size first, then leading: tailwind-merge drops a leading class placed before a size class
const titleSizes = {
  section: "text-[2rem] leading-[1.5] lg:text-[3.5rem] lg:leading-[1.04]",
  row: "text-[1.8rem] leading-[1.2] lg:text-[2.8rem] lg:leading-[1.06]",
  display: "text-[2.75rem] leading-[1.55] lg:text-[4.75rem] lg:leading-[1.1]",
};

/** Eyebrow + title + lead, used at the top of most sections. */
export function LevelsHeading({
  title,
  eyebrow,
  lead,
  size = "section",
  align = "start",
  eyebrowTone = "grey",
  as: Tag = "h2",
  className,
}: LevelsHeadingProps) {
  return (
    <div className={cn("flex flex-col", align === "centre" && "items-center text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs leading-4 font-semibold tracking-[0.187em] uppercase",
            eyebrowTone === "sage" ? "text-glow" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn("font-display font-medium tracking-[-0.04em] text-balance text-foreground", titleSizes[size])}>
        {title}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-8 text-pretty text-muted-foreground",
            size === "display" ? "max-w-[41rem] text-foreground/76" : "max-w-[47.5rem] lg:text-xl lg:leading-8",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
