import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BridgeButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * solid: sky fill, a touch darker on hover · outline: page-coloured with an ink outline ·
   * ghost: see-through with an ink outline (over backdrops, e.g. the header) · link: plain
   * text whose underline grows on hover
   */
  variant?: "solid" | "outline" | "ghost" | "link";
  /** show the small up-right arrow after the label (on by default) */
  arrow?: boolean;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const fills = {
  solid: "h-10 bg-primary px-4 text-primary-foreground transition-[filter] hover:brightness-90",
  outline: "h-[2.6875rem] border border-foreground bg-background px-[0.8125rem] text-foreground transition-colors hover:bg-secondary",
  ghost: "h-[2.6875rem] border border-foreground bg-transparent px-4 text-foreground transition-colors hover:bg-foreground/5",
};

/** Bridge's flat button and underline link. */
export function BridgeButton({ children, href, variant = "solid", arrow = true, type = "button", className }: BridgeButtonProps) {
  const isLink = variant === "link";
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center gap-1 text-[0.9375rem]/none tracking-[-0.02em] whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    isLink
      ? "relative pb-1 text-foreground"
      : cn("justify-center rounded-sm duration-250 ease-[ease] motion-reduce:transition-none", fills[variant]),
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight aria-hidden className="size-3.5 shrink-0" strokeWidth={1.5} />}
      {isLink && (
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-0 bg-current transition-[width] duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover/btn:w-full motion-reduce:transition-none"
        />
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
