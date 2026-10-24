import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./helionenergy-arrow-button.css";

export interface HelionenergyArrowButtonProps {
  /** where it goes */
  href: string;
  /** what it opens, for screen readers (the button shows only an arrow) */
  label: string;
  /** "quiet": hairline border and a pale arrow (on the page); "strong": a full-colour border and arrow (over photos) */
  tone?: "quiet" | "strong";
  /** sweep a filled block across the button as it scrolls through the window */
  sweep?: boolean;
  className?: string;
}

/**
 * A small square outlined button holding a right arrow (44px, 50px from desktop, 4px corners).
 * As it scrolls through the window a filled block sweeps across it from left to right; on
 * hover it fills (0.2s).
 */
export function HelionenergyArrowButton({ href, label, tone = "quiet", sweep = true, className }: HelionenergyArrowButtonProps) {
  const arrow = <ArrowRight aria-hidden strokeWidth={1.5} className="size-[1.125rem]" />;
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        "group relative inline-flex size-11 shrink-0 items-center justify-center overflow-clip rounded-sm border lg:size-[3.125rem]",
        tone === "quiet" ? "border-border text-muted-foreground/70" : "border-foreground text-foreground",
        className,
      )}
    >
      {arrow}
      {sweep && (
        <span aria-hidden className="helionenergy-arrow-button-sweep absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground">
          {arrow}
        </span>
      )}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:transition-none"
      >
        {arrow}
      </span>
    </a>
  );
}
