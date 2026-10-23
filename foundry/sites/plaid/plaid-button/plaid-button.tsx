import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PlaidButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * ink: near-black inside a rainbow rim · paper: white inside a rainbow rim ·
   * mint: pale mint wash (on the blue bands) · aqua: teal into bright cyan fill · sky: cyan-to-periwinkle fill ·
   * outline: periwinkle hairline
   */
  variant?: "ink" | "paper" | "mint" | "aqua" | "sky" | "outline";
  /** md: 38px tall, 16px text (header) · lg: 48px on phones and 56px on desktop, 20px text */
  size?: "md" | "lg";
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

// The rim: a conic sweep through the theme's bright colours.
const rainbow =
  "bg-[conic-gradient(from_210deg,var(--chart-5),var(--chart-4),var(--highlight),var(--glow),var(--chart-3),var(--chart-2),var(--chart-5))]";

const faces = {
  ink: "bg-primary bg-linear-[77deg] from-primary to-primary/80 text-primary-foreground",
  paper: "bg-card text-primary",
  mint: "bg-card bg-linear-to-r from-highlight/30 to-card text-foreground group-hover/btn:from-chart-4/45",
  aqua: "bg-linear-to-r from-highlight to-glow text-foreground group-hover/btn:brightness-105",
  sky: "bg-linear-to-r from-glow/80 to-chart-3 text-foreground group-hover/btn:brightness-105",
  outline: "border border-chart-3 text-foreground group-hover/btn:bg-card/50",
};

const sizes = {
  md: "h-[2.375rem] px-4 text-base",
  lg: "h-12 px-6 text-lg tracking-[-0.03em] lg:h-14 lg:px-8 lg:text-xl",
};

/** Plaid's pill: the label sits on a face; rimmed variants wrap that face in a 2px rainbow. */
export function PlaidButton({ children, href, variant = "ink", size = "lg", type = "button", className }: PlaidButtonProps) {
  const rimmed = variant === "ink" || variant === "paper";
  const outer = cn(
    "group/btn inline-flex shrink-0 rounded-full font-medium whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    rimmed && cn(rainbow, "p-[2px] transition-shadow duration-100 ease-in-out hover:shadow-[0_0_14px_var(--chart-3)] motion-reduce:transition-none"),
    className,
  );
  const face = (
    <span
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full transition-[background-color,filter,--tw-gradient-from] duration-250 ease-in-out motion-reduce:transition-none",
        faces[variant],
        sizes[size],
        rimmed && size === "lg" && "h-[calc(3rem-4px)] lg:h-[calc(3.5rem-4px)]",
        rimmed && size === "md" && "h-[calc(2.375rem-4px)]",
      )}
    >
      {children}
    </span>
  );
  return href ? (
    <a href={href} className={outer}>
      {face}
    </a>
  ) : (
    <button type={type} className={outer}>
      {face}
    </button>
  );
}
