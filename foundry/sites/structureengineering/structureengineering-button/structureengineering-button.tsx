import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./structureengineering-button.css";

export interface StructureengineeringButtonProps {
  /** the label (set in uppercase mono) */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /**
   * outline: ink box on paper, fills ink on hover · media: light box over a dark photo, fills
   * light on hover · solid: ink box with paper text · submit: ink box with highlight-coloured
   * text that turns highlight on hover (for the highlight band)
   */
  variant?: "outline" | "media" | "solid" | "submit";
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  /** render a plain <span> that only looks like the button (for use inside a card link) */
  decorative?: boolean;
  className?: string;
}

const variants = {
  outline: "border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background",
  media:
    "border-card text-card hover:bg-card hover:text-card-foreground focus-visible:bg-card focus-visible:text-card-foreground dark:border-card-foreground dark:text-card-foreground dark:hover:bg-card-foreground dark:hover:text-card",
  solid: "border-primary bg-primary text-primary-foreground hover:bg-background hover:text-foreground",
  submit: "border-primary bg-primary text-highlight hover:bg-highlight hover:text-primary",
};

// A box with a 1px border: the mono label, then a square cell holding an arrow that shakes
// side to side twice on hover. The whole box inverts on hover in 0.25s.
export function StructureengineeringButton({ children, href, variant = "outline", type = "button", decorative = false, className }: StructureengineeringButtonProps) {
  const classes = cn(
    "structureengineering-button group/sebtn inline-flex h-11 shrink-0 items-stretch border font-mono text-base leading-tight uppercase transition-colors duration-250 ease-out outline-none motion-reduce:transition-none",
    variants[variant],
    className,
  );
  const inner = (
    <>
      <span className="flex items-center px-3 text-left">{children}</span>
      <span aria-hidden className="flex w-10 shrink-0 items-center justify-center border-l border-current">
        <ArrowRight className="structureengineering-button-arrow size-3.5" strokeWidth={1.25} />
      </span>
    </>
  );
  if (decorative) {
    return <span className={classes}>{inner}</span>;
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
