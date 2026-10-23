import { Anchor } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LevelsWordmarkProps {
  /** the company name, set in tracked capitals */
  brand: string;
  /** where it links; renders plain text when left out */
  href?: string;
  /** md: header size (18px) · lg: footer size (20px) */
  size?: "md" | "lg";
  className?: string;
}

/** Mark + tracked capitals, coloured by the parent's text colour. */
export function LevelsWordmark({ brand, href, size = "md", className }: LevelsWordmarkProps) {
  const classes = cn(
    "inline-flex items-center gap-3 font-display font-medium tracking-[0.28em] uppercase",
    size === "md" ? "text-lg/none" : "text-xl/none",
    className,
  );
  const inner = (
    <>
      <Anchor aria-hidden className={size === "md" ? "size-[1.1rem]" : "size-5"} strokeWidth={2.75} />
      <span>{brand}</span>
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
