import type { ReactNode } from "react";
import { CircleDashed } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface StoreyarchitectureButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** dark: black on white pages · light: white, for photos and black bands · grey: the form grey */
  variant?: "dark" | "light" | "grey";
  /** lg: the wide hero button · sm: the compact inline one (Contact, Read, Submit) */
  size?: "lg" | "sm";
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  dark: "bg-primary text-primary-foreground",
  light: "bg-background text-foreground dark:bg-foreground dark:text-background",
  grey: "bg-secondary text-secondary-foreground",
};

// Phones first (vw of a 390 screen), then the desktop drawing from 640px (vw of 1440).
const sizes = {
  lg: "h-[16vw] w-[55vw] font-[450] px-[5vw] text-[4.3vw] sm:h-[3.6vw] sm:w-[16.1vw] sm:px-[1.2vw] sm:text-[1.1vw]",
  sm: "h-[6.4vw] gap-[3vw] px-[2vw] text-[4.3vw] font-medium sm:h-[2.85vw] sm:gap-[2.4vw] sm:px-[0.9vw] sm:text-[1.1vw]",
};
const ring = { lg: "size-[7.5vw] sm:size-[1.9vw]", sm: "size-[4vw] sm:size-[1.25vw]" };

export function StoreyarchitectureButton({
  children,
  href,
  variant = "dark",
  size = "lg",
  type = "button",
  className,
}: StoreyarchitectureButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-between leading-none tracking-[-0.02em] whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span className="transition-transform duration-200 ease-[cubic-bezier(0,0,0.2,1)] group-hover/btn:translate-x-[0.5vw] group-focus-visible/btn:translate-x-[0.5vw] motion-reduce:transition-none">
        {children}
      </span>
      <CircleDashed
        aria-hidden
        strokeWidth={1.5}
        className={cn(
          "shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/btn:rotate-[115deg] group-focus-visible/btn:rotate-[115deg] motion-reduce:transition-none",
          ring[size],
        )}
      />
    </>
  );
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
