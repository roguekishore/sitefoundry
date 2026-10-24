import { cn } from "@foundry/foundry-utils";

export interface HermeusButtonProps {
  /** the button's label (shown in capitals) */
  label: string;
  href: string;
  /** the resting fill: "card" (near-white, for white bands) or "secondary" (grey, for grey bands) */
  tone?: "card" | "secondary";
  className?: string;
}

/** a 1px × 6px tick at each corner, like a print crop mark */
const tick = "absolute h-1.5 w-px bg-current";

/** Flat slab button with corner crop marks; the fill turns amber on hover. */
export function HermeusButton({ label, href, tone = "card", className }: HermeusButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-flex h-[clamp(2.125rem,1.893rem+0.952vw,2.75rem)] items-center justify-center px-[clamp(1.75rem,1.5625rem+0.762vw,2.25rem)]",
        "text-[clamp(0.68rem,0.606rem+0.299vw,0.875rem)]/none tracking-[-0.03em] uppercase",
        "transition-colors duration-250 ease-in-out hover:bg-primary hover:text-primary-foreground motion-reduce:transition-none",
        tone === "card" ? "bg-card text-card-foreground" : "bg-secondary text-secondary-foreground",
        className,
      )}
    >
      <span aria-hidden className={cn(tick, "top-0 left-0")} />
      <span aria-hidden className={cn(tick, "top-0 right-0")} />
      <span aria-hidden className={cn(tick, "bottom-0 left-0")} />
      <span aria-hidden className={cn(tick, "right-0 bottom-0")} />
      {label}
    </a>
  );
}
