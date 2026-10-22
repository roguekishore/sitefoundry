import type { ReactNode } from "react";
import { ChevronsLeftRight, Grid2x2 } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WarpPlateProps {
  /** the caption in the title bar, shown in brackets, e.g. "fig. 1 — the floor" */
  caption: string;
  /** draw a rule on each side of the caption */
  rules?: boolean;
  /** ink: solid 1px ink frames · soft: hairline frames and a muted caption */
  tone?: "ink" | "soft";
  /** wrap the content in a white rounded card (otherwise it sits on the dot grid) */
  card?: boolean;
  /** drop the inset frame and dot grid: the content fills the plate under the title bar */
  bare?: boolean;
  /** the figure's content */
  children?: ReactNode;
  className?: string;
  /** classes for the inner card (padding, layout) */
  innerClassName?: string;
}

const box = "flex h-[1.125rem] w-[1.375rem] shrink-0 items-center justify-center border";

/** The figure frame used across the site: title bar + inset frame on a dot grid. */
export function WarpPlate({ caption, rules, tone = "ink", card = true, bare, children, className, innerClassName }: WarpPlateProps) {
  const ink = tone === "ink";
  return (
    <figure className={cn("border bg-secondary", ink ? "border-foreground" : "border-border bg-card", className)}>
      <figcaption
        className={cn(
          "flex min-h-9 items-center gap-3 px-3 py-2 font-mono text-[0.6875rem] leading-[1.6] tracking-[calc(0.11em_-_var(--warp-squeeze,0em))] lg:text-xs",
          ink ? "text-foreground" : "text-muted-foreground",
          !ink && "border-b border-border",
        )}
      >
        <span aria-hidden className={cn(box, ink ? "border-foreground" : "border-border")}>
          <ChevronsLeftRight className="size-3" strokeWidth={1.5} />
        </span>
        {rules && <span aria-hidden className={cn("hidden h-px flex-1 sm:block", ink ? "bg-foreground" : "bg-border")} />}
        <span className={cn("min-w-0 flex-1 px-2 sm:text-center", rules && "sm:flex-none")}>
          [ {caption} ]
        </span>
        {rules && <span aria-hidden className={cn("hidden h-px flex-1 sm:block", ink ? "bg-foreground" : "bg-border")} />}
        <span aria-hidden className={cn(box, ink ? "border-foreground" : "border-border")}>
          <Grid2x2 className="size-2.5" strokeWidth={1.5} />
        </span>
      </figcaption>
      {bare ? (
        children
      ) : (
        <div
          className={cn(
            "mx-3.5 mb-3.5 border bg-background p-4 lg:p-[1.125rem]",
            "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--foreground)_16%,transparent)_1.2px,transparent_0)] bg-[size:12px_12px]",
            ink ? "border-foreground" : "border-border",
          )}
        >
          {card ? (
            <div className={cn("rounded-[calc(var(--radius)*3)] border border-foreground/10 bg-card p-6 lg:p-8", innerClassName)}>{children}</div>
          ) : (
            <div className={innerClassName}>{children}</div>
          )}
        </div>
      )}
    </figure>
  );
}
