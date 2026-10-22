import { cn } from "@foundry/foundry-utils";

export interface SharplinkGuidesProps {
  /** draw the outer edges of the page column too (on wide screens) */
  edges?: boolean;
  /** draw the column edges on phones as well */
  mobile?: boolean;
  className?: string;
}

/** Dotted vertical grid lines behind a section (three columns on wide screens). */
export function SharplinkGuides({ edges = false, mobile = false, className }: SharplinkGuidesProps) {
  const line = "border-dotted border-foreground/15";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className={cn("mx-auto h-full max-w-page px-gutter", mobile ? "grid" : "hidden lg:grid", "lg:grid-cols-3 lg:gap-gutter")}>
        <div className={cn(line, mobile && "border-x", "lg:border-r", edges ? "lg:border-l" : "lg:border-l-0")} />
        <div className={cn(line, "hidden lg:block lg:border-x")} />
        <div className={cn(line, "hidden lg:block lg:border-l", edges && "lg:border-r")} />
      </div>
    </div>
  );
}
