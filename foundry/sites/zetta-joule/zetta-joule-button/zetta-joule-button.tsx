import { CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ZettaJouleButtonProps {
  /** the label */
  label: string;
  /** link target */
  href?: string;
  /** split: a pale-blue arrow square plus an outlined label (default); solid: one pale-blue button */
  variant?: "split" | "solid";
  /** stretch to the full width on phones (the original does) */
  fullOnMobile?: boolean;
  className?: string;
}

const label48 = "inline-flex h-12 items-center justify-center rounded-sm px-4 text-sm font-medium tracking-[-0.01em] transition-colors duration-200";

export function ZettaJouleButton({ label, href = "#", variant = "split", fullOnMobile = true, className }: ZettaJouleButtonProps) {
  if (variant === "solid") {
    return (
      <a href={href} className={cn(label48, "bg-primary text-primary-foreground hover:bg-glow hover:text-highlight-foreground", className)}>
        {label}
      </a>
    );
  }
  return (
    <a href={href} className={cn("group flex gap-1", fullOnMobile ? "w-full sm:w-fit" : "w-fit", className)}>
      <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground transition-colors duration-200 group-hover:bg-glow group-hover:text-highlight-foreground">
        <CornerDownRight className="size-5" strokeWidth={1.25} />
      </span>
      <span className={cn(label48, "border border-border text-foreground group-hover:border-glow group-hover:bg-glow group-hover:text-highlight-foreground", fullOnMobile && "flex-1 sm:flex-none")}>
        {label}
      </span>
    </a>
  );
}
