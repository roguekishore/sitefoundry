import type { CSSProperties } from "react";
import { Box } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./daq-wordmark.css";

export interface DaqWordmarkProps {
  /** the company name, set bold and tracked out */
  name: string;
  /** the small monospace line under the name */
  sub?: string;
  /** where the mark links to */
  href?: string;
  /** letters of the name rise in one after another on load */
  animate?: boolean;
  className?: string;
}

export function DaqWordmark({ name, sub, href = "/", animate = false, className }: DaqWordmarkProps) {
  return (
    <a href={href} aria-label={name} className={cn("flex items-center gap-3.5 text-foreground", className)}>
      <Box aria-hidden strokeWidth={1} className="size-9 shrink-0" />
      <span aria-hidden className="flex flex-col gap-1">
        <span className="text-[0.9375rem] leading-none font-bold tracking-[0.25em]">
          {Array.from(name).map((letter, i) => (
            <span
              key={i}
              className={cn("inline-block", animate && "daq-wordmark-letter")}
              style={{ "--daq-wordmark-i": i } as CSSProperties}
            >
              {letter}
            </span>
          ))}
        </span>
        {sub && <span className="font-mono text-[0.5rem] leading-none font-medium tracking-[0.35em] text-muted-foreground uppercase">{sub}</span>}
      </span>
    </a>
  );
}
