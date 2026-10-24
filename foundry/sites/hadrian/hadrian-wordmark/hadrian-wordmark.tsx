import { cn } from "@foundry/foundry-utils";

export interface HadrianWordmarkProps {
  /** the company name */
  name: string;
  /** makes it a link (usually home) */
  href?: string;
  /** size it here, e.g. text-3xl */
  className?: string;
}

/** Wide, heavy uppercase text standing in for a logo. */
export function HadrianWordmark({ name, href, className }: HadrianWordmarkProps) {
  const classes = cn("inline-block font-display font-semibold leading-none tracking-[-0.01em] uppercase", className);
  return href ? (
    <a href={href} className={classes}>
      {name}
    </a>
  ) : (
    <span className={classes}>{name}</span>
  );
}
