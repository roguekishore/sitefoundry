import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

/** Holds the paused state; spread `rootProps` on the element that contains the animation. */
export function usePauseMotion() {
  const [paused, setPaused] = useState(false);
  return { paused, toggle: () => setPaused((p) => !p), rootProps: { "data-paused": paused } as const };
}

export interface FunctionhealthPauseMotionProps {
  paused: boolean;
  onToggle: () => void;
  /** label while moving, e.g. "Pause motion" */
  pauseLabel: string;
  /** label while paused, e.g. "Play motion" */
  playLabel: string;
  className?: string;
}

export function FunctionhealthPauseMotion({ paused, onToggle, pauseLabel, playLabel, className }: FunctionhealthPauseMotionProps) {
  const Icon = paused ? Play : Pause;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={paused}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.725rem] leading-none tracking-[0.1em] text-foreground uppercase",
        "transition-colors duration-150 hover:text-primary motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className,
      )}
    >
      <Icon className="size-3 fill-current" aria-hidden />
      {paused ? playLabel : pauseLabel}
    </button>
  );
}
