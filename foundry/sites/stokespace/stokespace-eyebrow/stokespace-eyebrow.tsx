import { cn } from "@foundry/foundry-utils";

export interface StokespaceEyebrowProps {
  /** the label (shown uppercase) */
  label: string;
  /** which accent the glowing bar takes: primary (orange), highlight (magenta) or glow (violet) */
  tone?: "primary" | "highlight" | "glow";
  className?: string;
}

// The bar's glow is the original's stacked neon: a wide soft shadow and a tight one.
const bars = {
  primary: "bg-primary shadow-[0_0_9.5px_var(--primary),0_0_3.6px_var(--primary)]",
  highlight: "bg-highlight shadow-[0_0_9.5px_var(--highlight),0_0_3.6px_var(--highlight)]",
  glow: "bg-glow shadow-[0_0_9.5px_var(--glow),0_0_3.6px_var(--glow)]",
};

/** A tiny tracked-out uppercase section label under a glowing accent bar of the same width. */
export function StokespaceEyebrow({ label, tone = "primary", className }: StokespaceEyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex flex-col gap-2 text-[length:clamp(0.5625rem,0.506rem+0.23vw,0.714rem)] leading-[1.4] font-normal tracking-[0.25em] uppercase lg:gap-2.5 lg:tracking-[0.12em]",
        className,
      )}
    >
      <span aria-hidden className={cn("block h-0.5 w-full", bars[tone])} />
      <span>{label}</span>
    </p>
  );
}
