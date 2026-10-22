import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NekoButtonProps {
  /** the label */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: the brand blue (joining, booking) · dark: charcoal (everything else) */
  variant?: "primary" | "dark";
  /** md: 48px tall on phones, 60px from 1024px · sm: 48px everywhere */
  size?: "sm" | "md";
  /** show the thin arrow after the label (default true) */
  arrow?: boolean;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--foreground))]",
  dark: "bg-foreground text-background hover:bg-foreground/85",
};

const sizes = {
  md: "h-12 gap-3 px-4 text-[0.9375rem] lg:h-15 lg:gap-4 lg:px-6 lg:text-lg",
  sm: "h-12 gap-3 px-4 text-[0.9375rem]",
};

export function NekoButton({ children, href, variant = "dark", size = "md", arrow = true, onClick, className }: NekoButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-lg font-sans font-medium whitespace-nowrap",
    "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden className="size-5 shrink-0 lg:size-6" strokeWidth={1.5} />}
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
