import { cn } from "@foundry/foundry-utils";

export interface ApexspaceWordmarkProps {
  /** the brand name, set in wide bold capitals */
  name: string;
  /** link target (usually the home page); leave out for a plain mark */
  href?: string;
  /** larger mark, as in the footer */
  size?: "md" | "lg";
  className?: string;
}

/** Wide, bold all-caps text wordmark. */
export function ApexspaceWordmark({ name, href, size = "md", className }: ApexspaceWordmarkProps) {
  const classes = cn(
    "inline-block font-display leading-none font-bold tracking-[0.12em] text-foreground uppercase",
    size === "lg" ? "text-[1.75rem]" : "text-[1.5rem]",
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {name}
    </a>
  ) : (
    <span className={classes}>{name}</span>
  );
}
