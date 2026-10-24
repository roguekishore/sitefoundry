import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VercelButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: ink fill · secondary: white fill with a hairline ring */
  variant?: "primary" | "secondary";
  /** pill: 40px, fully round, 16px label (hero, closing band) · box: 32px, 6px corners, 14px label (header) */
  shape?: "pill" | "box";
  /** stretch to the full width of the parent */
  block?: boolean;
  /** button type when it renders a button */
  type?: "button" | "submit";
  /** click handler when it renders a button */
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  secondary: "bg-card text-card-foreground ring-1 ring-border hover:bg-muted",
};

const shapes = {
  pill: "h-10 rounded-full px-[1.125rem] text-base",
  box: "h-8 rounded-lg px-3 text-sm",
};

/** The site's button: ink or white, pill or small box, 150ms hover. */
export function VercelButton({
  children,
  href,
  variant = "primary",
  shape = "pill",
  block,
  type = "button",
  onClick,
  className,
}: VercelButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap [&_svg]:size-4",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    shapes[shape],
    block && "w-full",
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
