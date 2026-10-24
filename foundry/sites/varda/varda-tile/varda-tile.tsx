import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface VardaTileProps {
  /** small bold label at the top left */
  eyebrow: string;
  /** the tile's heading, sits at the bottom of the text cell */
  title: string;
  /** where the whole tile links to */
  href: string;
  /** colour block: navy page colour, solid orange, or off-white */
  tone?: "navy" | "orange" | "light";
  /** heading scale: "lg" for the big tiles, "sm" for the short pair */
  size?: "lg" | "sm";
  /** a media cell (usually a VardaPlaceholder) next to or under the text */
  media?: ReactNode;
  /** classes for the media cell: padding, order, borders */
  mediaClassName?: string;
  /** classes for the text cell */
  textClassName?: string;
  className?: string;
}

const tones = {
  navy: "bg-background text-primary hover:bg-muted",
  orange: "bg-primary text-primary-foreground hover:bg-highlight",
  light: "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
} as const;

const ease = "duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] motion-reduce:transition-none";

/** A flat colour-block link tile: eyebrow and arrow on top, heading at the bottom, optional media. */
export function VardaTile({
  eyebrow,
  title,
  href,
  tone = "navy",
  size = "lg",
  media,
  mediaClassName,
  textClassName,
  className,
}: VardaTileProps) {
  return (
    <a href={href} className={cn("group grid transition-colors", ease, tones[tone], className)}>
      <div
        className={cn(
          "flex flex-col justify-between gap-8 p-gutter pt-[calc(var(--page-gutter)+0.25rem)] lg:gap-10",
          textClassName,
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-base/6 font-bold lg:text-[1.0625rem]/6">{eyebrow}</span>
          <ArrowUpRight
            aria-hidden
            strokeWidth={3}
            className={cn("mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5", ease)}
          />
        </div>
        <h3
          className={cn(
            "font-display font-medium",
            size === "lg"
              ? "text-[2rem]/[1.15] tracking-[-0.02em] lg:text-[3.42rem]/[1.15]"
              : "text-xl/6 lg:text-[2.22rem]/[1.2]",
          )}
        >
          {title}
        </h3>
      </div>
      {media && <div className={cn("min-w-0", mediaClassName)}>{media}</div>}
    </a>
  );
}
