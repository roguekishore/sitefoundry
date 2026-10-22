import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { sharplinkLabelType } from "@foundry/sharplink-label";

export interface SharplinkButtonProps {
  /** the label */
  children: ReactNode;
  /** a link target; without it the button is a <button> */
  href?: string;
  /**
   * solid: a solid foreground box with a primary (blue) arrow box that slides to the left on hover.
   * tint: a 10% foreground tint that deepens to 18% on hover.
   */
  variant?: "solid" | "tint";
  /** show the separate square arrow box (always on for solid) */
  arrow?: boolean;
  /** the icon in the arrow box (an arrow by default) */
  icon?: ReactNode;
  /** stretch to the full width of the parent, label centred ("mobile": only below the lg breakpoint) */
  fullWidth?: boolean | "mobile";
  /** for a <button>: submit inside forms */
  type?: "button" | "submit";
  className?: string;
}

const ease = "duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none";
const tintFill = "bg-foreground/10 transition-colors duration-[250ms] ease-[cubic-bezier(0.455,0.03,0.515,0.955)] group-hover/sl-btn:bg-foreground/[0.18] motion-reduce:transition-none";

/** A square label box plus a square arrow box; the arrow slides across on hover. */
export function SharplinkButton({
  children,
  href,
  variant = "solid",
  arrow = variant === "solid",
  icon,
  fullWidth = false,
  type = "button",
  className,
}: SharplinkButtonProps) {
  const solid = variant === "solid";
  const showArrow = solid || arrow;
  const arrowIcon = icon ?? <ArrowRight className="size-4" strokeWidth={1.5} />;
  const classes = cn(
    "group/sl-btn relative h-[2.125rem] shrink-0 items-stretch overflow-clip text-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    fullWidth === true ? "flex w-full" : fullWidth === "mobile" ? "flex w-full lg:inline-flex lg:w-auto" : "inline-flex",
    showArrow && "pr-9",
    className,
  );
  const inner = (
    <>
      <span
        className={cn(
          "flex items-center px-4 whitespace-nowrap",
          sharplinkLabelType,
          fullWidth && "flex-1 justify-center",
          fullWidth === "mobile" && "lg:flex-none",
          solid ? cn("bg-foreground text-background transition-transform group-hover/sl-btn:translate-x-9", ease) : tintFill,
        )}
      >
        {children}
      </span>
      {showArrow && (
        <span
          aria-hidden
          className={cn(
            "absolute inset-y-0 right-0 grid w-[2.125rem] place-items-center",
            solid
              ? cn("bg-primary text-primary-foreground transition-[right] group-hover/sl-btn:right-[calc(100%-2.125rem)]", ease)
              : tintFill,
          )}
        >
          {arrowIcon}
        </span>
      )}
    </>
  );
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
