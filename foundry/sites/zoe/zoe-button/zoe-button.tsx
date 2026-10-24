import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ZoeButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** sun: yellow CTA · ink: navy · outline: hairline, fills navy on hover · light: white, for coloured bands */
  variant?: "sun" | "ink" | "outline" | "light";
  /** md: 52px tall CTA · sm: 36px (header login, form submit) */
  size?: "md" | "sm";
  /** an icon before the label (e.g. a lucide user) */
  icon?: ReactNode;
  /** button type when no href is given */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  sun: "bg-primary text-primary-foreground hover:brightness-90",
  ink: "bg-foreground text-background hover:brightness-75 dark:hover:brightness-90",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
  light: "bg-background text-foreground hover:brightness-95",
};

const sizes = {
  md: "h-[3.25rem] px-8 text-base",
  sm: "h-9 px-4 text-base",
};

/** The site's rounded semibold button. */
export function ZoeButton({ children, href, variant = "sun", size = "md", icon, type = "button", className }: ZoeButtonProps) {
  const cls = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-[calc(var(--radius)/2)] font-semibold whitespace-nowrap",
    "transition-[filter,background-color,color] duration-100 ease-in-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {icon}
      {children}
    </>
  );
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <button type={type} className={cls}>
      {inner}
    </button>
  );
}
