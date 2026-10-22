import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./column-eyebrow.css";

/** The accent colours a section can wear: theme tokens only. */
export type ColumnTone = "primary" | "highlight" | "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";

/** CSS value for a tone, e.g. `var(--chart-2)`. */
export function toneVar(tone: ColumnTone) {
  return `var(--${tone})`;
}

/** Inline style that sets `--tone`, so classes like `text-[var(--tone)]` pick the accent up. */
export function toneStyle(tone: ColumnTone): CSSProperties {
  return { "--tone": toneVar(tone) } as CSSProperties;
}

export interface ColumnEyebrowProps {
  /** the label; shown in uppercase */
  children: ReactNode;
  /** accent colour of the text and the tinted chip */
  tone?: ColumnTone;
  /** show a blinking block cursor after the label */
  cursor?: boolean;
  className?: string;
}

export function ColumnEyebrow({ children, tone = "highlight", cursor, className }: ColumnEyebrowProps) {
  return (
    <p
      style={toneStyle(tone)}
      className={cn(
        "inline-flex h-[1.625rem] items-center gap-1.5 rounded-sm border border-[color-mix(in_oklab,var(--tone)_14%,transparent)] bg-[color-mix(in_oklab,var(--tone)_9%,transparent)] px-2 font-mono text-xs/none font-medium tracking-[0.06em] text-[color-mix(in_oklab,var(--tone)_85%,var(--foreground))] uppercase",
        className,
      )}
    >
      <span>{children}</span>
      {cursor && <span aria-hidden className="column-eyebrow-cursor h-3 w-1.5 rounded-[1px] bg-[color-mix(in_oklab,var(--tone)_35%,transparent)]" />}
    </p>
  );
}
