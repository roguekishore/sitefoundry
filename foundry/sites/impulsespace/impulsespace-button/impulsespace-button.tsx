import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./impulsespace-button.css";

export interface ImpulsespaceButtonProps {
  /** the label */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: primary fill · outline: a 15% hairline on the current surface */
  variant?: "solid" | "outline";
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  solid: "bg-primary text-primary-foreground",
  outline: "border border-foreground/15 text-foreground",
};

/** A pill that lights up from inside on hover (two soft blurred lights fade in and grow). */
export function ImpulsespaceButton({ children, href, variant = "solid", type = "button", className }: ImpulsespaceButtonProps) {
  const classes = cn(
    "impulsespace-button relative isolate inline-flex h-11 shrink-0 items-center justify-center overflow-clip rounded-full px-6 font-sans text-base font-semibold whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    className,
  );
  const inner = <span className="relative z-10">{children}</span>;
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
