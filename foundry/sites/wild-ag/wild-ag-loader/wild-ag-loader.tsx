import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgWordmark } from "@foundry/wild-ag-wordmark";
import "./wild-ag-loader.css";

export interface WildAgLoaderProps {
  /** the brand name shown on the curtain */
  wordmark: string;
  /** seconds for the whole sequence (wipe in, hold, lift away) */
  duration?: number;
  className?: string;
}

export function WildAgLoader({ wordmark, duration = 5.9, className }: WildAgLoaderProps) {
  return (
    <div
      aria-hidden
      className={cn("wild-ag-loader pointer-events-none fixed inset-0 z-[100] bg-linear-15 from-primary to-highlight", className)}
      style={{ "--wild-ag-loader-duration": `${duration}s` } as CSSProperties}
    >
      <div className="wild-ag-loader-card absolute inset-x-0 inset-y-6 flex items-center justify-center rounded-[calc(var(--radius)*3.4)] bg-background lg:inset-y-9 lg:rounded-[calc(var(--radius)*4.5)]">
        <WildAgWordmark text={wordmark} className="wild-ag-loader-mark text-[2.4rem] lg:text-[3.6rem]" />
      </div>
    </div>
  );
}
