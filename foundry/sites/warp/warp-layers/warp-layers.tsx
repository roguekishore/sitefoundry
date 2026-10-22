import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpPlate } from "@foundry/warp-plate";
import { WarpSection } from "@foundry/warp-section";
import "./warp-layers.css";

export interface WarpLayer {
  title: string;
  /** small pill chips after the title */
  chips?: string[];
  /** the note at the right */
  note: string;
}

export interface WarpLayersProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** caption of the figure frame */
  caption: string;
  /** the word before each row's number, e.g. "layer" */
  layerWord: string;
  /** top to bottom; the last row is solid brand blue */
  layers: WarpLayer[];
  className?: string;
}

/** Tints from faint to solid; the last row always gets the solid one. */
const tones = [
  { row: "border-primary/20 bg-primary/5", label: "text-foreground/70", num: "text-primary", title: "lg:text-[1.0625rem]", h: "lg:min-h-[4.375rem]", note: "text-muted-foreground", chip: "border-primary/20 bg-card text-muted-foreground" },
  { row: "border-primary/25 bg-primary/[0.14]", label: "text-foreground/70", num: "text-primary", title: "lg:text-[1.125rem]", h: "lg:min-h-[4.5625rem]", note: "text-muted-foreground", chip: "border-primary/20 bg-card/80 text-muted-foreground" },
  { row: "border-primary/30 bg-primary/30", label: "text-foreground/80", num: "text-foreground", title: "lg:text-[1.25rem]", h: "lg:min-h-[4.9375rem]", note: "text-foreground", chip: "border-primary/25 bg-card/60 text-foreground/70" },
  { row: "border-primary bg-primary text-primary-foreground", label: "text-primary-foreground/85", num: "text-primary-foreground", title: "lg:text-[1.5rem]", h: "lg:min-h-[5.3125rem]", note: "text-primary-foreground", chip: "border-primary-foreground/40 text-primary-foreground/80" },
];

/** A stack of layer rows, deepening to solid brand blue, with a stepping outline. */
export function WarpLayers({ id, tag, status, title, lead, caption, layerWord, layers, className }: WarpLayersProps) {
  const n = Math.min(Math.max(layers.length, 2), 8);
  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} className={className}>
      <WarpPlate caption={caption} rules card={false} innerClassName="flex flex-col gap-2.5 p-0 lg:p-2.5">
        {layers.map((l, i) => {
          const t = tones[Math.max(0, tones.length - layers.length + i)];
          const vars = { "--warp-layers-n": n, "--warp-layers-i": i } as CSSProperties;
          return (
            <div
              key={l.title}
              className={cn("warp-layers-row border px-[1.125rem] py-5 lg:flex lg:items-center lg:gap-4 lg:px-7 lg:py-0", t.row, t.h)}
              style={{ ...vars, animationName: `warp-layers-lit-${n}` }}
            >
              <p className={cn("shrink-0 font-mono text-[0.625rem] tracking-[calc(0.22em_-_var(--warp-squeeze,0em))] uppercase", t.label)}>
                {layerWord} <span className={t.num}>{String(i + 1).padStart(2, "0")}</span>
              </p>
              <h3 className={cn("mt-3 font-display text-[1.1875rem] leading-[1.3] font-semibold tracking-[-0.02em] lg:mt-0 lg:shrink-0", t.title)}>{l.title}</h3>
              {l.chips && l.chips.length > 0 && (
                <ul className="warp-layers-chips mt-2.5 flex flex-wrap gap-1.5 lg:mt-0 lg:flex-nowrap" style={{ ...vars, animationName: `warp-layers-chips-${n}` }}>
                  {l.chips.map((c) => (
                    <li key={c} className={cn("rounded-full border px-2.5 py-1 font-mono text-[0.65625rem] leading-none tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]", t.chip)}>
                      {c}
                    </li>
                  ))}
                </ul>
              )}
              <p className={cn("mt-3 text-[0.8125rem] leading-[1.5] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] lg:mt-0 lg:ml-auto lg:pl-4 lg:text-right", t.note)}>{l.note}</p>
            </div>
          );
        })}
      </WarpPlate>
    </WarpSection>
  );
}
