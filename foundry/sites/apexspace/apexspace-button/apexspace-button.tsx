import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ApexspaceButtonProps {
  /** the button text, set in uppercase mono */
  label: string;
  /** link target */
  href: string;
  /** primary = yellow · dark = black with a hairline · tone = full-width bar in a product colour · line = full-width with a yellow underline */
  variant?: "primary" | "dark" | "tone" | "line";
  /** which product colour a tone bar uses (chart-1 … chart-4) */
  tone?: 1 | 2 | 3 | 4;
  className?: string;
}

const toneBg = { 1: "bg-chart-1", 2: "bg-chart-2", 3: "bg-chart-3", 4: "bg-chart-4" };

const variants = {
  primary:
    "h-[1.9375rem] gap-3 border-primary bg-primary px-4 text-primary-foreground hover:border-dotted hover:bg-transparent hover:text-primary",
  dark: "h-[1.9375rem] gap-3 border-foreground/30 bg-card px-4 text-card-foreground hover:border-dotted hover:border-foreground hover:bg-transparent hover:text-foreground",
  tone: "h-[3.125rem] w-full justify-between border-transparent px-8 text-primary-foreground hover:text-foreground",
  line: "h-[3.125rem] w-full justify-between border-x-0 border-t-0 border-b-primary px-8 text-foreground hover:text-primary",
};

/** Mono uppercase link button with a trailing arrow. */
export function ApexspaceButton({ label, href, variant = "primary", tone = 1, className }: ApexspaceButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center border font-mono text-[0.75rem] leading-none tracking-[0.06em] whitespace-nowrap uppercase transition-all duration-400 ease-[ease] motion-reduce:transition-none",
        variants[variant],
        variant === "tone" && toneBg[tone],
        className,
      )}
    >
      <span>{label}</span>
      <ArrowRight aria-hidden className="size-3.5" strokeWidth={1.5} />
    </a>
  );
}
