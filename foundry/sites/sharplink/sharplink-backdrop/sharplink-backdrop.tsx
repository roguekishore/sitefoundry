import { cn } from "@foundry/foundry-utils";

export interface SharplinkBackdropProps {
  className?: string;
}

/** The fixed pale-blue wash behind the page's light sections. Renders a decorative layer. */
export function SharplinkBackdrop({ className }: SharplinkBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 bg-background",
        "bg-[radial-gradient(100%_130%_at_50%_-30%,var(--accent)_45%,var(--background)_85%)]",
        className,
      )}
    />
  );
}
