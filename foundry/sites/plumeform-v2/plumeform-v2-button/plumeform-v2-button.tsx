import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformV2ButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** solid pill (foreground colour), soft bordered pill, or an underlined text link */
  variant?: "solid" | "soft" | "link";
  /** sm: 32px tall (header), md: 40px, lg: 48px */
  size?: "sm" | "md" | "lg";
  /** show an arrow after the label */
  arrow?: boolean;
  /** stretch to the width of its container */
  block?: boolean;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  /** marks a toggle as selected (aria-pressed) */
  pressed?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-8 px-4 text-[0.8125rem]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-8 text-[0.9375rem]",
};

export function PlumeformV2Button({
  children,
  href,
  variant = "solid",
  size = "md",
  arrow = false,
  block = false,
  type = "button",
  pressed,
  onClick,
  className,
}: PlumeformV2ButtonProps) {
  const classes =
    variant === "link"
      ? cn(
          "group/btn inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors duration-200",
          className,
        )
      : cn(
          "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full font-bold whitespace-nowrap",
          "transition-[background-color,color,transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          variant === "solid" &&
            "bg-foreground text-background shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_6%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_25%,transparent)] hover:bg-primary hover:text-primary-foreground",
          variant === "soft" && "border border-border bg-secondary text-secondary-foreground hover:border-primary/40 hover:bg-accent",
          sizes[size],
          block && "w-full",
          className,
        );

  const inner =
    variant === "link" ? (
      <>
        <span className="border-b-2 border-primary pb-0.5">{children}</span>
        {arrow && (
          <span className="border-b-2 border-primary pb-0.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 motion-reduce:transition-none">
            <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden />
          </span>
        )}
      </>
    ) : (
      <>
        {children}
        {arrow && <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden />}
      </>
    );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} aria-pressed={pressed}>
      {inner}
    </button>
  );
}
