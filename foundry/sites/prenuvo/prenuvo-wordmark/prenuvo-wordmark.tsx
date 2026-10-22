import { cn } from "@foundry/foundry-utils";

export interface PrenuvoWordmarkProps {
  /** the company name, set lowercase */
  name: string;
  /** where it links (home); without it, plain text */
  href?: string;
  /** sm: the phone header · md: the desktop header and footer */
  size?: "sm" | "md";
  className?: string;
}

export function PrenuvoWordmark({ name, href, size = "md", className }: PrenuvoWordmarkProps) {
  const classes = cn(
    "inline-block font-display leading-none font-extralight tracking-[0.03em] lowercase",
    size === "sm" ? "text-[1.75rem]" : "text-[2.375rem]",
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
