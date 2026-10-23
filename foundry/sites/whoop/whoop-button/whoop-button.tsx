import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WhoopButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** pill: fully round CTA (48px) · block: 11px-rounded full-width buy button (52px) · outline: hairline twin of block (48px) */
  shape?: "pill" | "block" | "outline";
  /** default: black on light surfaces · inverse: white, for black bands */
  tone?: "default" | "inverse";
  /** an icon before the label (e.g. a lucide bag) */
  icon?: ReactNode;
  className?: string;
}

const shapes = {
  pill: "h-12 rounded-full px-6",
  block: "h-[3.25rem] w-full rounded-[0.6875rem] px-6",
  outline: "h-12 w-full rounded-[0.6875rem] border px-6",
};

const tones = {
  default: {
    fill: "bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  },
  inverse: {
    fill: "bg-background text-foreground hover:bg-background/80 dark:bg-foreground dark:text-background",
    outline: "border-background text-background hover:bg-background hover:text-foreground",
  },
};

/** The site's bold uppercase button. */
export function WhoopButton({ children, href, shape = "pill", tone = "default", icon, className }: WhoopButtonProps) {
  const cls = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 text-sm font-bold whitespace-nowrap uppercase",
    "transition-colors duration-125 ease-in-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    shapes[shape],
    shape === "outline" ? tones[tone].outline : tones[tone].fill,
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
    <button type="button" className={cls}>
      {inner}
    </button>
  );
}
