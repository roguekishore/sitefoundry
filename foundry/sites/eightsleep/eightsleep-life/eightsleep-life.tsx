import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMedia } from "@foundry/eightsleep-media";
import "./eightsleep-life.css";

export interface EightsleepLifeWidget {
  /** small mono label at the top, e.g. "Bed temperature" */
  label: ReactNode;
  /** a big condensed figure, e.g. "66°" */
  figure?: ReactNode;
  /** or a row of chips instead, e.g. ["Warm", "Even", "Cool"]; the first is lit */
  chips?: ReactNode[];
  /** a short caption under it */
  caption?: ReactNode;
}

export interface EightsleepLifeScene {
  /** the photo or video */
  media?: ReactNode;
  /** the floating widget card */
  widget: EightsleepLifeWidget;
}

export interface EightsleepLifeProps {
  title: ReactNode;
  sub?: ReactNode;
  link?: { label: ReactNode; href: string };
  /** three scenes: tall (left), small (right), wide (left) */
  scenes: EightsleepLifeScene[];
  className?: string;
}

// desktop sizes and sides of the three scenes, from the original's media slots
const shapes = [
  { frame: "aspect-[350/406] lg:aspect-[621/720] lg:w-[47%]", row: "lg:flex-row", pull: "lg:-ml-20" },
  { frame: "aspect-[350/406] lg:aspect-[388/450] lg:w-[30%]", row: "lg:flex-row-reverse lg:pr-[12%]", pull: "lg:-mr-16" },
  { frame: "aspect-[350/420] lg:aspect-[720/726] lg:w-[55%]", row: "lg:flex-row lg:pl-[6%]", pull: "lg:-ml-24" },
];

function Widget({ widget }: { widget: EightsleepLifeWidget }) {
  return (
    <div className="dark w-full rounded-xl border border-border bg-background/60 p-5 text-foreground backdrop-blur-xl lg:w-[300px] lg:p-6">
      <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">{widget.label}</span>
      {widget.figure && (
        <span className="mt-1 block font-[family-name:var(--eightsleep-figures,var(--typeface-display))] text-[56px] leading-none tracking-[-0.01em] lg:text-[64px]">
          {widget.figure}
        </span>
      )}
      {widget.chips && (
        <span className="mt-3 flex flex-wrap gap-2">
          {widget.chips.map((chip, i) => (
            <span key={i} className={cn("rounded-full px-3 py-1 text-[13px]", i === 0 ? "bg-foreground text-background" : "bg-foreground/12")}>
              {chip}
            </span>
          ))}
        </span>
      )}
      {widget.caption && <p className="mt-3 text-[14px] leading-[1.35] text-foreground/85">{widget.caption}</p>}
    </div>
  );
}

export function EightsleepLife({ title, sub, link, scenes, className }: EightsleepLifeProps) {
  return (
    <section className={cn("bg-muted pt-section pb-10 text-foreground lg:pt-[120px] lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepHeading title={title} sub={sub} link={link} />
        <div className="mt-14 flex flex-col gap-24 lg:mt-24 lg:gap-28">
          {scenes.map((scene, i) => {
            const shape = shapes[i % shapes.length];
            return (
              <div key={i} className={cn("eightsleep-life-scene flex flex-col items-center lg:items-center", shape.row)}>
                <EightsleepMedia media={scene.media} className={cn("w-full rounded-xl", shape.frame)} />
                <div className={cn("eightsleep-life-widget relative z-10 mt-4 w-full lg:mt-0 lg:w-auto", shape.pull)}>
                  <Widget widget={scene.widget} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
