import type { ReactNode } from "react";
import { CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface InstituteofhealthButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** dark: ink fill · light: page-grey fill · glass: see-through white, for use over media */
  variant?: "dark" | "light" | "glass";
  onClick?: () => void;
  /** set the width here (default 15.7rem on phones, 15.25rem from 1024px) */
  className?: string;
}

const variants = {
  dark: "border-primary bg-primary text-primary-foreground hover:border-muted-foreground",
  light: "border-background bg-background text-foreground hover:border-muted-foreground",
  glass:
    "border border-highlight-foreground/45 bg-highlight-foreground/15 text-highlight-foreground backdrop-blur-sm hover:border-highlight-foreground/80",
};

/** The site's signature button: label top-left, arrow bottom-right, in a wide flat box. */
export function InstituteofhealthButton({ children, href, variant = "dark", onClick, className }: InstituteofhealthButtonProps) {
  const classes = cn(
    "group flex h-[4.25rem] w-[15.7rem] shrink-0 flex-col justify-between rounded-md border-2 px-3.5 pt-[1.05rem] pb-2.5 text-left lg:h-[4.0625rem] lg:w-[15.25rem] lg:pt-[1.1rem]",
    "font-sans text-[0.975rem] leading-none font-medium tracking-[-0.03em] lg:text-[0.81rem]",
    "transition-[border-color,background-color] duration-[450ms] ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <CornerDownRight aria-hidden className="size-4 self-end" strokeWidth={1.5} />
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
