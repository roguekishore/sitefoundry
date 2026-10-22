import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceButton } from "@foundry/apexspace-button";

export type ApexspaceTone = 1 | 2 | 3 | 4;

export interface ApexspaceBusTag {
  /** short orbit or size name, e.g. "LEO" */
  label: string;
  /** standard (solid border) · option (dashed) · off (dim dashed, not offered) */
  state: "standard" | "option" | "off";
  /** a tone of its own instead of the card's */
  tone?: ApexspaceTone;
}

export interface ApexspaceBusStat {
  /** the mono label, e.g. "Payload mass" */
  label: string;
  /** a small line icon under the label */
  icon: ReactNode;
  /** optional mono words before the figure, e.g. "Up\nto" */
  prefix?: string;
  /** the figure, e.g. "120" */
  value: string;
  /** the unit beside the figure, e.g. "KG" or "kW" (kept as written) */
  unit: string;
  /** the grey note under the figure */
  note: string;
}

export interface ApexspaceBusCardProps {
  /** the product name, set wide and uppercase */
  name: string;
  /** which product colour it uses (chart-1 … chart-4) */
  tone: ApexspaceTone;
  /** the orbit or size tags beside the name */
  tags: ApexspaceBusTag[];
  /** the 16:9 product clip (shown like object-fit: contain); empty shows a placeholder */
  media?: ReactNode;
  /** the spec rows (two in the original) */
  stats: ApexspaceBusStat[];
  /** the full-width bar at the bottom */
  cta: { label: string; href: string };
  className?: string;
}

const toneBorder = { 1: "border-chart-1", 2: "border-chart-2", 3: "border-chart-3", 4: "border-chart-4" };
const toneBorderDim = { 1: "border-chart-1/40", 2: "border-chart-2/40", 3: "border-chart-3/40", 4: "border-chart-4/40" };

const corner = "absolute size-2.5 text-foreground/40";

/** Outlined product card: name + orbit tags, media field, spec rows, tone bar. */
export function ApexspaceBusCard({ name, tone, tags, media, stats, cta, className }: ApexspaceBusCardProps) {
  return (
    <article className={cn("relative flex flex-col border border-border bg-card p-4 text-card-foreground", className)}>
      <Plus aria-hidden strokeWidth={1} className={cn(corner, "-top-[5.5px] -left-[5.5px]")} />
      <Plus aria-hidden strokeWidth={1} className={cn(corner, "-top-[5.5px] -right-[5.5px]")} />
      <Plus aria-hidden strokeWidth={1} className={cn(corner, "-bottom-[5.5px] -left-[5.5px]")} />
      <Plus aria-hidden strokeWidth={1} className={cn(corner, "-right-[5.5px] -bottom-[5.5px]")} />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <h3 className="font-display text-[length:clamp(2.5rem,2.4rem_+_0.2vw,2.75rem)] leading-[0.8] font-medium tracking-[0.06em] uppercase">{name}</h3>
        <ul className="flex gap-[0.3125rem]">
          {tags.map((t) => {
            const tagTone = t.tone ?? tone;
            return (
              <li
                key={t.label}
                className={cn(
                  "flex h-[2.1875rem] w-14 items-center justify-center border font-mono text-[0.75rem] leading-none uppercase",
                  t.state === "standard" && toneBorder[tagTone],
                  t.state === "option" && cn("border-dashed", toneBorder[tagTone]),
                  t.state === "off" && cn("border-dashed text-foreground/25", toneBorderDim[tagTone]),
                )}
              >
                {t.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex h-[15rem] items-center justify-center lg:h-[21rem]">
        <div className="aspect-video w-full overflow-clip [&>*]:size-full [&>img]:object-contain [&>video]:object-contain">{media ?? <div className="bg-muted" />}</div>
      </div>

      {stats.map((s, i) => (
        <div key={s.label} className="grid min-h-[8.75rem] grid-cols-2 gap-4 border-t border-border pt-4 pb-6 lg:min-h-[11rem]">
          <div>
            <p className="font-mono text-[0.75rem] leading-[1.4] tracking-[0.06em] uppercase">{s.label}</p>
            <span aria-hidden className="mt-5 flex size-5 items-center text-foreground/80 [&>svg]:size-full">
              {s.icon}
            </span>
          </div>
          <div>
            <div className="flex items-start gap-3">
              {s.prefix && <span className="mt-0.5 font-mono text-[0.75rem] leading-[1.6] tracking-[0.06em] whitespace-pre-line uppercase">{s.prefix}</span>}
              <span
                className={cn(
                  i === 0 ? "text-[length:clamp(1.8rem,1.464rem_+_1.429vw,2.75rem)]" : "text-[length:clamp(1.5625rem,1.2rem_+_1.43vw,2.5rem)]",
                  "font-display leading-none font-light tracking-[-0.01em] whitespace-nowrap",
                )}
              >
                {s.value}
              </span>
              <span className="font-display text-[length:clamp(1.25rem,1.1rem_+_0.57vw,1.625rem)] leading-none font-light">{s.unit}</span>
            </div>
            <p className="mt-4 text-[0.875rem] leading-[1.4] text-muted-foreground">{s.note}</p>
          </div>
        </div>
      ))}

      <ApexspaceButton {...cta} variant="tone" tone={tone} className="mt-auto" />
    </article>
  );
}
