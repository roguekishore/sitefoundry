import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface EightsleepButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** md: 52px tall (section CTAs) · lg: 57px tall (hero and photo CTAs) */
  size?: "md" | "lg";
  /** small icon after the label (e.g. a play circle) */
  icon?: ReactNode;
  /** stretch to the container's width */
  block?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  md: "h-[52px] px-8 text-[17px] lg:text-[18px]",
  lg: "h-[57px] px-8 text-[17px] lg:text-[18px]",
};

export function EightsleepButton({ children, href, size = "md", icon, block, onClick, className }: EightsleepButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-3 rounded-[calc(var(--radius)/2)] bg-primary font-medium whitespace-nowrap text-primary-foreground",
    "transition-[background-color,color] duration-200 ease-out hover:bg-primary/85 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {icon && <span className="flex size-5 items-center justify-center [&_svg]:size-5">{icon}</span>}
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
