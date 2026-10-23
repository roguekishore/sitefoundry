import { cn } from "@foundry/foundry-utils";

/** How a stand-in wordmark is set. */
export type LithicTextmarkStyle = "plain" | "heavy" | "caps" | "light" | "mono";

export interface LithicTextmarkProps {
  /** the (fictional) company name */
  name: string;
  /** plain: medium · heavy: bold and tight · caps: small spaced capitals · light · mono */
  variant?: LithicTextmarkStyle;
  className?: string;
}

const styles: Record<LithicTextmarkStyle, string> = {
  plain: "font-medium tracking-[-0.02em]",
  heavy: "font-extrabold tracking-[-0.05em]",
  caps: "text-[0.7em] font-semibold tracking-[0.2em] uppercase",
  light: "font-light tracking-[-0.01em]",
  mono: "font-mono text-[0.85em] tracking-[-0.02em]",
};

/** A plain-text wordmark: never a drawn logo. */
export function LithicTextmark({ name, variant = "plain", className }: LithicTextmarkProps) {
  return <span className={cn("inline-block leading-none whitespace-nowrap", styles[variant], className)}>{name}</span>;
}
