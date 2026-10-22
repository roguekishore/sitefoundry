import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AspensearchButtonProps {
  /** the label; shown in mono capitals */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** ink: filled with the primary colour, a mint fill sweeps in on hover · paper: outlined, an ink fill sweeps in */
  tone?: "ink" | "paper";
  /** "fixed": the original's 200px width · "full": the container's width */
  width?: "fixed" | "full";
  onClick?: () => void;
  className?: string;
}

const tones = {
  ink: "bg-primary text-primary-foreground before:bg-highlight hover:text-highlight-foreground",
  paper: "border border-foreground bg-background text-foreground before:bg-foreground hover:text-background",
};

/**
 * The original's small square mono button: label left, arrow right. On hover a fill sweeps
 * in from the left behind the label (0.8s, expo out) and the text changes colour with it.
 */
export function AspensearchButton({ children, href, tone = "ink", width = "fixed", onClick, className }: AspensearchButtonProps) {
  const classes = cn(
    "group relative isolate inline-flex h-9 shrink-0 items-center justify-between gap-4 overflow-clip px-3 font-mono text-xs/none tracking-normal uppercase",
    "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-800 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:scale-x-100",
    "transition-colors duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:before:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    tones[tone],
    width === "fixed" ? "w-[12.5rem]" : "w-full",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight aria-hidden className="size-3.5 shrink-0" strokeWidth={1.5} />
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
