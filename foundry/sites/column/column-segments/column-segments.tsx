import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnEyebrow, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-segments.css";

export interface ColumnSegment {
  /** shown in the pill when this audience is chosen (lucide works well) */
  icon?: ReactNode;
  /** the audience's name */
  label: string;
  /** paragraphs about it */
  body: string[];
}

export interface ColumnSegmentsProps {
  /** the small mono tag (shown with a blinking cursor) */
  eyebrow: string;
  /** accent of the tag and the art wash */
  tone?: ColumnTone;
  /** the audiences */
  segments: ColumnSegment[];
  /** which one starts chosen */
  initial?: number;
  /** the tall art on the right (desktop); empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

export function ColumnSegments({ eyebrow, tone = "chart-2", segments, initial = 0, media, className }: ColumnSegmentsProps) {
  const [active, setActive] = useState(initial);
  const current = segments[active] ?? segments[0];

  return (
    <section className={cn("relative overflow-clip bg-background pt-[4.5rem] pb-28 text-foreground lg:pt-section lg:pb-[4.75rem]", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <ColumnEyebrow tone={tone} cursor>
          {eyebrow}
        </ColumnEyebrow>
        <hr className="mt-6 border-border" />

        <div className="lg:grid lg:grid-cols-[1fr_28rem] lg:gap-12">
          <div className="pt-[3.75rem] lg:pt-12">
            <ul role="tablist" className="flex flex-col items-start">
              {segments.map((s, i) => (
                <li key={s.label}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "-mx-2 flex items-center gap-2.5 rounded-md px-2 font-display text-[1.625rem]/[2.75rem] font-medium tracking-[-0.025em] transition-[background-color,box-shadow,color] duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none lg:-mx-[1.125rem] lg:gap-3 lg:px-[1.125rem] lg:text-[2.5rem]/[3.625rem]",
                      i === active
                        ? "bg-secondary text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_4px_14px_color-mix(in_oklab,var(--foreground)_8%,transparent)]"
                        : "text-[color-mix(in_oklab,var(--muted-foreground)_55%,var(--background))] hover:text-muted-foreground",
                    )}
                  >
                    {i === active && s.icon && <span className="flex [&_svg]:size-6 lg:[&_svg]:size-[1.625rem]">{s.icon}</span>}
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
            <div key={active} role="tabpanel" className="column-segments-swap mt-10 flex max-w-[26.5rem] flex-col gap-6 text-base/[1.5] text-foreground/80">
              {current.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div aria-hidden className="pointer-events-none absolute -inset-x-40 -inset-y-28 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--muted-foreground)_9%,transparent),transparent)]" />
            <div className="relative mt-[3.125rem] h-[37.5rem] overflow-clip rounded-lg" style={{ "--tone": `var(--${tone})` } as CSSProperties}>
              {media ? (
                <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{media}</div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_40%_40%,color-mix(in_oklab,var(--tone)_16%,transparent),transparent_85%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--tone)_40%,transparent)_1px,transparent_1.6px)] bg-size-[10px_10px] [mask-image:linear-gradient(black,color-mix(in_oklab,black_35%,transparent))]" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
