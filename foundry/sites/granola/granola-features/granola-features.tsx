import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GranolaButton } from "@foundry/granola-button";
import { GranolaMedia } from "@foundry/granola-media";

export interface GranolaFeatureRow {
  /** the serif row title */
  title: string;
  /** the paragraph beside it (below it on phones) */
  body: string;
  /** an optional ink button under the row header */
  cta?: { label: string; href: string; icon?: ReactNode };
  /**
   * the row's media: one picture across the full width, or two side by side
   * (a wide one and a narrow one); plain placeholders while empty
   */
  media?: { slots: 1 | 2; items?: ReactNode[] };
  /** with two pictures: which comes first */
  order?: "wide-first" | "narrow-first";
  /** with two pictures: stack them on phones instead of keeping them side by side */
  stackOnPhone?: boolean;
}

export interface GranolaFeaturesProps {
  /** the small serif line above the headline */
  eyebrow?: string;
  /** the huge serif headline */
  title: string;
  /** the ink call to action under the headline */
  cta?: { label: string; href: string };
  /** the feature rows, each opened by a hairline */
  rows: GranolaFeatureRow[];
  className?: string;
}

const TONES = ["glow", "muted", "muted", "glow"] as const;

function RowMedia({ row, index }: { row: GranolaFeatureRow; index: number }) {
  const slots = row.media?.slots ?? 1;
  const items = row.media?.items ?? [];
  if (slots === 1) {
    return <GranolaMedia tone={TONES[index % 4]} className="aspect-[1280/527] w-full rounded-sm">{items[0]}</GranolaMedia>;
  }
  const narrowFirst = row.order === "narrow-first";
  const stack = row.stackOnPhone;
  return (
    <div
      className={cn(
        "w-full",
        stack ? "flex flex-col gap-2 lg:grid lg:aspect-[1280/527] lg:gap-2" : "grid aspect-[1280/527] gap-1 lg:gap-1",
        narrowFirst ? "grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr]" : "grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]",
      )}
    >
      {[0, 1].map((i) => {
        const narrow = narrowFirst ? i === 0 : i === 1;
        return (
          <GranolaMedia
            key={i}
            tone={i === 0 ? TONES[index % 4] : TONES[(index + 1) % 4]}
            className={cn("h-full w-full rounded-sm", stack && (narrow ? "aspect-[5/6] lg:aspect-auto" : "aspect-[1.58] lg:aspect-auto"))}
          >
            {items[i]}
          </GranolaMedia>
        );
      })}
    </div>
  );
}

export function GranolaFeatures({ eyebrow, title, cta, rows, className }: GranolaFeaturesProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)_+_5rem_+_2*var(--page-gutter))] px-gutter pt-[5.5rem] pb-24 lg:pt-32 lg:pb-32">
        {eyebrow && <p className="font-display text-base">{eyebrow}</p>}
        <h2 className="mt-6 max-w-[13ch] font-display text-[3.75rem] leading-[0.97] tracking-[-0.01em] lg:mt-7 lg:max-w-[16ch] lg:text-[min(7.5vw,6.75rem)]">
          {title}
        </h2>
        {cta && (
          <GranolaButton href={cta.href} trailingIcon={<ArrowDown />} className="mt-8 h-12 w-full text-base lg:mt-10 lg:h-14 lg:w-fit lg:text-sm">
            {cta.label}
          </GranolaButton>
        )}

        <div className="mt-20 flex flex-col gap-20 lg:mt-32 lg:gap-[7.75rem]">
          {rows.map((row, i) => (
            <article key={row.title} className="border-t border-foreground/10 pt-6 lg:pt-4">
              <div className="lg:grid lg:grid-cols-[1fr_28rem] lg:gap-8">
                <h3 className="font-display text-2xl leading-tight tracking-[-0.01em] lg:text-[2rem]">{row.title}</h3>
                <p className="mt-4 text-base leading-snug lg:mt-0 lg:text-[1.0625rem] lg:leading-[1.75]">{row.body}</p>
              </div>
              {row.cta && (
                <GranolaButton href={row.cta.href} icon={row.cta.icon} className="mt-8 h-12 w-full text-base lg:mt-6 lg:h-14 lg:w-fit lg:text-sm">
                  {row.cta.label}
                </GranolaButton>
              )}
              {row.media && (
                <div className="mt-8">
                  <RowMedia row={row} index={i} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
