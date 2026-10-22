import { cn } from "@foundry/foundry-utils";

export interface AttioGapProps {
  /** the band's surface: the page background or the pale grey of the platform tour */
  surface?: "background" | "muted";
  /** force the dark palette (inside the dark middle band) */
  dark?: boolean;
  className?: string;
}

/**
 * An empty 128px band (80px on phones) inside the page frame, closed by a hairline: the
 * breathing room Attio leaves between some sections.
 */
export function AttioGap({ surface = "background", dark, className }: AttioGapProps) {
  return (
    <div
      aria-hidden
      data-header-tone={dark ? "dark" : undefined}
      className={cn(dark && "dark", surface === "muted" ? "bg-muted" : "bg-background", "lg:px-gutter", className)}
    >
      <div className="mx-auto h-20 max-w-page border-b border-border lg:h-32 lg:border-x" />
    </div>
  );
}
