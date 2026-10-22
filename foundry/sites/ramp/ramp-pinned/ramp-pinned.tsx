import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampHeading } from "@foundry/ramp-heading";
import "./ramp-pinned.css";

export interface RampPinnedScene {
  /** the centred headline */
  title: string;
  /** the grey line under it */
  subtitle?: string;
  /** the wide art (image or video); empty shows a placeholder frame */
  media?: ReactNode;
}

export interface RampPinnedProps {
  /** what is shown first: the problem */
  before: RampPinnedScene;
  /** what replaces it halfway through: the answer */
  after: RampPinnedScene;
  /** how far below the window's top the stage sticks (a CSS length; match the sticky header) */
  topOffset?: string;
  className?: string;
}

function Scene({ scene, which }: { scene: RampPinnedScene; which: "a" | "b" }) {
  return (
    <div className={cn("ramp-pinned-scene flex flex-col items-center", which === "a" ? "ramp-pinned-a" : "ramp-pinned-b")}>
      <RampHeading align="center" size="section" lead={scene.title} className="max-w-[20rem] sm:max-w-none lg:text-[3.25rem]/[1.05]" />
      {scene.subtitle && <p className="mt-4 max-w-[17rem] text-center text-base/[1.4] text-muted-foreground sm:max-w-none lg:mt-5">{scene.subtitle}</p>}
      <div className="ramp-pinned-media relative mt-8 w-full max-w-[69rem] overflow-clip rounded-lg lg:mt-10">
        {scene.media ?? (
          <div
            aria-hidden
            className={cn(
              "absolute inset-0 rounded-lg border border-border",
              which === "a" ? "bg-muted" : "bg-gradient-to-b from-card to-muted",
            )}
          />
        )}
      </div>
    </div>
  );
}

/** Ramp's "systems that never spoke → now in one place" pinned swap. */
export function RampPinned({ before, after, topOffset = "6.5rem", className }: RampPinnedProps) {
  return (
    <section
      className={cn("ramp-pinned relative bg-background text-foreground", className)}
      style={{ "--ramp-pinned-top": topOffset } as CSSProperties}
    >
      <div className="ramp-pinned-stage mx-auto max-w-page px-gutter py-section lg:px-[calc(var(--page-gutter)*4)] lg:pt-14 lg:pb-10">
        <Scene scene={before} which="a" />
        <Scene scene={after} which="b" />
      </div>
    </section>
  );
}
