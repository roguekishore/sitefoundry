import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnCode } from "@foundry/column-code";
import { ColumnEyebrow, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-infrastructure.css";

export interface ColumnInfraChip {
  /** a small line icon (lucide works well) */
  icon?: ReactNode;
  label: string;
}

export interface ColumnInfraProduct {
  /** the product's name */
  title: string;
  /** a paragraph about it */
  body: string;
  /** a code snippet shown under the paragraph */
  code: string;
  /** feature tiles along the bottom of its panel */
  chips: ColumnInfraChip[];
  /** the panel's art; empty: a placeholder */
  media?: ReactNode;
}

export interface ColumnInfrastructureProps {
  /** the small mono tag (shown with a blinking cursor) */
  eyebrow: string;
  /** accent of the tag */
  tone?: ColumnTone;
  /** the big gradient headline */
  title: string;
  /** the paragraph under it */
  lead: ReactNode;
  /** labels along the stack art, top to bottom; the first and last pull together on scroll */
  layers: string[];
  /** the label that fades in once the middle layers have faded out */
  mergedLabel?: string;
  /** the stack art; empty: a placeholder */
  stackMedia?: ReactNode;
  /** the products, each with its own panel */
  products: ColumnInfraProduct[];
  className?: string;
}

/** Vertical position of each stack label, as a share of the art's height. */
function labelTop(i: number, n: number) {
  if (i === 0) return 18;
  if (i === n - 1) return 81;
  const mids = n - 2;
  return mids === 1 ? 50 : 40 + ((i - 1) * 19) / (mids - 1);
}

function Panel({ product, active, className }: { product: ColumnInfraProduct; active: boolean; className?: string }) {
  return (
    <div aria-hidden={!active} className={cn("flex flex-col rounded-lg border border-border bg-card/55 shadow-[0_24px_48px_color-mix(in_oklab,var(--background)_60%,transparent)]", className)}>
      <div className="relative flex min-h-[18rem] flex-1 items-center justify-center p-8">
        {product.media ? (
          <div className="absolute inset-0 overflow-clip rounded-t-lg [&>*]:size-full [&>*]:object-cover">{product.media}</div>
        ) : (
          <div
            className={cn(
              "aspect-[1.75] w-[min(46%,17.5rem)] min-w-[11rem] rounded-lg bg-foreground/15 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_12%,transparent),0_20px_40px_color-mix(in_oklab,var(--background)_70%,transparent)] transition-[scale] duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none",
              active ? "scale-100" : "scale-[0.97]",
            )}
          />
        )}
      </div>
      <ul className="grid gap-2 p-5 lg:grid-flow-col lg:auto-cols-fr">
        {product.chips.map((c, i) => (
          <li
            key={c.label}
            style={{ transitionDelay: active ? `${i * 60}ms` : "0ms" }}
            className={cn(
              "column-infra-chip flex h-8 items-center gap-2.5 rounded-md border border-border bg-secondary/45 px-3 text-[0.8125rem] font-semibold tracking-[-0.01em] [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-primary",
              "lg:h-[3.625rem] lg:flex-col lg:items-start lg:justify-between lg:gap-0 lg:py-2.5 lg:transition-[opacity,translate,scale] lg:duration-500 lg:ease-[cubic-bezier(0.76,0,0.24,1)] lg:motion-reduce:transition-none",
              active ? "lg:translate-y-0 lg:scale-100 lg:opacity-100" : "lg:translate-y-5 lg:scale-95 lg:opacity-0",
            )}
          >
            {c.icon}
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ColumnInfrastructure({ eyebrow, tone = "primary", title, lead, layers, mergedLabel, stackMedia, products, className }: ColumnInfrastructureProps) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);

  // The product crossing the middle of the window owns the pinned panel.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [products.length]);

  return (
    <section className={cn("bg-background px-3", className)}>
      <div className="dark relative overflow-clip rounded-xl bg-background text-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_9%,transparent)_0.9px,transparent_1.3px)] bg-size-[14px_14px]" />

        <div className="relative mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter pt-[4.5rem] pb-28 lg:pt-36 lg:pb-36">
          {/* Intro: copy left, stack art with labelled rules right. */}
          <div className="grid gap-[6.5rem] lg:grid-cols-2 lg:gap-0">
            <div>
              <ColumnEyebrow tone={tone} cursor>
                {eyebrow}
              </ColumnEyebrow>
              <h2 className="mt-6 max-w-[28rem] bg-linear-to-br from-[color-mix(in_oklab,var(--foreground)_70%,var(--primary))] to-[color-mix(in_oklab,var(--primary)_80%,var(--foreground))] bg-clip-text pb-1 font-display text-5xl/[1.08] font-medium tracking-[-0.035em] text-transparent lg:mt-[2.875rem]">
                {title}
              </h2>
              <p className="mt-6 max-w-[26.5rem] text-base/[1.4] text-muted-foreground">{lead}</p>
            </div>
            <div className="column-infra-stack relative h-[14.5rem] lg:h-[22.5rem]">
              <div className="absolute inset-y-0 left-0 w-[12.25rem] lg:w-[18.75rem]">
                {stackMedia ? (
                  <div className="absolute inset-0 [&>*]:size-full [&>*]:object-contain">{stackMedia}</div>
                ) : (
                  <div className="absolute inset-x-0 inset-y-[6%] rounded-xl bg-secondary/70 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_8%,transparent),0_30px_50px_color-mix(in_oklab,var(--background)_80%,transparent)]" />
                )}
              </div>
              <ul className="absolute inset-y-0 right-0 left-[12.25rem] lg:left-[18.75rem]">
                {layers.map((label, i) => {
                  const edge = i === 0 ? "column-infra-label-top" : i === layers.length - 1 ? "column-infra-label-bottom" : "column-infra-label-mid";
                  const drift = i === 1 ? "36px" : i === layers.length - 2 ? "-36px" : "0px";
                  return (
                    <li
                      key={label}
                      className={cn(edge, "absolute inset-x-0 -translate-y-full border-b border-border pb-1 text-right text-[0.625rem] font-medium text-muted-foreground lg:text-[0.6875rem]")}
                      style={{ top: `${labelTop(i, layers.length)}%`, "--drift": drift } as CSSProperties}
                    >
                      {label}
                    </li>
                  );
                })}
                {mergedLabel && (
                  <li aria-hidden className="column-infra-merged absolute inset-x-0 top-[50%] -translate-y-full border-b border-border pb-1 text-right text-[0.625rem] font-medium text-foreground/80 lg:text-[0.6875rem]">
                    {mergedLabel}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Products: copy and snippets on the left, one pinned panel on the right. */}
          <div className="mt-[12.5rem] grid grid-cols-1 lg:mt-[13.5rem] lg:grid-cols-[23.375rem_1fr] lg:gap-x-[5.125rem]">
            <div className="flex flex-col gap-24 lg:gap-0">
              {products.map((p, i) => (
                <article
                  key={p.title}
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  data-index={i}
                  className="min-w-0 lg:min-h-[41.25rem] lg:last:min-h-[31.25rem]"
                >
                  <h3 className="font-display text-xl/[1.2] font-medium tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-2 text-base/[1.4] text-muted-foreground">{p.body}</p>
                  <ColumnCode code={p.code} className="mt-9" />
                  <Panel product={p} active className="mt-12 h-[31.25rem] lg:hidden" />
                </article>
              ))}
            </div>
            <div className="relative hidden lg:block">
              <div className="sticky top-[calc(50svh-15.625rem)] h-[31.25rem]">
                {products.map((p, i) => (
                  <Panel
                    key={p.title}
                    product={p}
                    active={i === active}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none",
                      i === active ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
