import type { ReactNode } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupMedia } from "@foundry/kononenkogroup-media";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-process.css";

export interface KononenkogroupProcessEntry {
  /** first line, in ink */
  title: string;
  /** further lines, in grey */
  detail?: string[];
}

export interface KononenkogroupProcessStage {
  /** centred grotesk heading, one item per line */
  heading: string[];
  /** the drawing under the heading (a wide frame) */
  media?: ReactNode;
  /** optional big serif statement under the drawing (first line indented) */
  lead?: string;
  /** small serif label that stays pinned beside the paragraph while it passes */
  label?: string;
  /** the serif paragraph */
  body: string;
  /** which side the paragraph sits on wide screens */
  side?: "left" | "right";
  /** indent the paragraph's first line by a column */
  indent?: boolean;
  /** an optional small list under the paragraph, with its label */
  aside?: { label: string; entries: KononenkogroupProcessEntry[] };
}

export interface KononenkogroupProcessProps {
  /** the stages, one after another */
  stages: KononenkogroupProcessStage[];
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";
const serifLabel = cn(small, "font-display tracking-[-0.01em]");

function Stage({ stage }: { stage: KononenkogroupProcessStage }) {
  const right = (stage.side ?? "right") === "right";
  return (
    <div>
      <KononenkogroupLines
        as="h2"
        text={stage.heading}
        className="text-center font-sans text-[10.67vw] leading-[0.85] tracking-[-0.045em] lg:text-[4.17vw] lg:leading-[0.875]"
      />
      <div className="kononenkogroup-process-sketch mt-[5vw] lg:mt-[4.5vw]">
        <KononenkogroupMedia media={stage.media} className="aspect-[8/5] lg:aspect-[1394/860]" />
      </div>
      {stage.lead && (
        <KononenkogroupLines
          text={stage.lead}
          className="mt-[14vw] font-display text-[9.6vw] leading-[0.9] tracking-[-0.03em] indent-[10.8vw] lg:mt-[5vw] lg:text-[6.146vw] lg:indent-[6.53vw]"
        />
      )}
      <div className={cn("lg:grid lg:grid-cols-15 lg:gap-x-[1.11vw]", stage.lead ? "mt-[19vw] lg:mt-[4.6vw]" : "mt-[12vw] lg:mt-[4.6vw]")}>
        {stage.label && (
          <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1">
            <KononenkogroupLines text={stage.label} className={cn(serifLabel, "lg:sticky lg:top-[5.5vw] lg:max-w-[6vw]")} />
          </div>
        )}
        <KononenkogroupLines
          text={stage.body}
          className={cn(
            "font-display text-[6.93vw] leading-[1.1] tracking-[-0.03em] lg:row-start-1 lg:text-[2.083vw]",
            stage.label && "mt-[6vw] lg:mt-0",
            right ? "lg:col-span-8 lg:col-start-8" : "lg:col-span-6 lg:col-start-1",
            stage.indent && "indent-[10.8vw] lg:indent-[6.53vw]",
          )}
        />
      </div>
      {stage.aside && (
        <div className="mt-[14vw] lg:mt-[7.6vw] lg:grid lg:grid-cols-15 lg:gap-x-[1.11vw]">
          <KononenkogroupLines text={stage.aside.label} className={cn(serifLabel, "lg:col-span-1 lg:col-start-7")} />
          <ul className="mt-[4vw] grid gap-[3vw] lg:col-span-4 lg:col-start-8 lg:mt-0 lg:gap-[0.75vw]">
            {stage.aside.entries.map((entry, i) => (
              <li key={i}>
                <KononenkogroupLines text={entry.title} className={small} />
                {entry.detail?.map((line, j) => (
                  <KononenkogroupLines key={j} text={line} className={cn(small, "text-muted-foreground")} />
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * The method, told in stages: each opens with a centred grotesk heading over a wide drawing,
 * an optional big serif statement, then a serif paragraph on one side of the grid with a small
 * label pinned beside it while it passes, and an optional tiny list. Every line rises from its
 * mask; the drawings fade in.
 */
export function KononenkogroupProcess({ stages, className }: KononenkogroupProcessProps) {
  return (
    <section className={cn("grid gap-[24vw] bg-background px-gutter py-section text-foreground lg:gap-[12.5vw]", className)}>
      {stages.map((stage, i) => (
        <Stage key={i} stage={stage} />
      ))}
    </section>
  );
}
