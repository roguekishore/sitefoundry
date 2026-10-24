import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HelionenergyHeadingProps {
  /** the heading's lines; they break where the original breaks them */
  lines: ReactNode[];
  /** "lg": break only on desktop (phones wrap freely); "always": break on every width */
  breakOn?: "lg" | "always";
  /** indent the first line (the hero's stepped opening) */
  indentFirst?: boolean;
  /** the heading level */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * The display heading: Inter at weight 500, all caps, line height 0.92, 32px on phones growing
 * to 55px at 1440. Optional stepped first line.
 */
export function HelionenergyHeading({ lines, breakOn = "lg", indentFirst = false, as: Tag = "h2", className }: HelionenergyHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(2rem,1.462rem+2.207vw,3.448rem)] leading-[0.92] font-medium tracking-[-0.01em] text-balance uppercase",
        indentFirst && "indent-[1.5em] lg:indent-[2.3em]",
        className,
      )}
    >
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (breakOn === "always" ? <br /> : <><br className="max-lg:hidden" /> </>)}
          {line}
        </Fragment>
      ))}
    </Tag>
  );
}
