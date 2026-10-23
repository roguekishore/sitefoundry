import { useRef, useState, type ReactNode } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import { OndoHeading } from "@foundry/ondo-heading";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-products.css";

export interface OndoProductStat {
  /** small label, e.g. "Value locked" */
  label: string;
  /** the serif figure, e.g. "$1.08B" */
  value: string;
  /** an outlined purple badge in the corner (first card only on the original) */
  badge?: string;
  /** a small mono line under the figure, e.g. "+$0.0004 today" */
  note?: string;
  /** coloured keys under the figure (for a two-line chart) */
  legend?: string[];
  /** the chart. A faint surface when empty */
  chart?: ReactNode;
}

export interface OndoProduct {
  /** the product's name */
  name: string;
  /** a white icon on the black tile (e.g. a lucide icon) */
  icon?: ReactNode;
  /** one or two sentences, set in the serif */
  description: string;
  /** a small grey chip under the description (e.g. availability) */
  tag?: string;
  /** the networks it runs on: shown as coloured dots, names read to screen readers */
  networks?: string[];
  /** the dark button */
  action: { label: string; href: string };
  /** three figure cards: the wide one first, then the two halves */
  stats: OndoProductStat[];
}

export interface OndoProductsProps {
  /** small label above the heading */
  eyebrow?: string;
  /** heading, first line (ink) */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the products, in scroll order */
  products: OndoProduct[];
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";
const dots = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];

function Networks({ names }: { names?: string[] }) {
  if (!names?.length) return <span />;
  return (
    <ul className="flex">
      {names.map((name, i) => (
        <li key={name} title={name} className={cn("-ml-1.5 size-8 rounded-full ring-2 ring-card first:ml-0", dots[i % dots.length])}>
          <span className="sr-only">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function Stat({ stat, wide, phone }: { stat: OndoProductStat; wide?: boolean; phone?: boolean }) {
  return (
    <div className={cn("relative overflow-clip rounded-3xl bg-card text-card-foreground", phone ? "h-[7.5rem] rounded-xl p-2.5" : "h-full p-[1.125rem]")}>
      <p className="text-xs font-medium">{stat.label}</p>
      <p className={cn("mt-2 leading-none tracking-[-0.02em]", phone ? "text-[1.75rem]" : "mt-3 text-[2.5rem]", serif)}>{stat.value}</p>
      {stat.legend && (
        <ul className="mt-3 flex flex-col gap-1 text-xs text-muted-foreground">
          {stat.legend.map((key, i) => (
            <li key={key} className="flex items-center gap-1.5">
              <span aria-hidden className={cn("size-2.5 rounded-[2px]", i === 0 ? "bg-chart-2" : "bg-chart-3")} />
              {key}
            </li>
          ))}
        </ul>
      )}
      {stat.note && <p className={cn("font-mono text-xs text-muted-foreground", phone ? "mt-5" : "mt-6")}>{stat.note}</p>}
      {stat.badge && !phone && (
        <span className="absolute top-[1.125rem] right-[1.125rem] flex h-7 items-center rounded-sm border border-highlight px-2 font-mono text-xs text-highlight">
          {stat.badge}
        </span>
      )}
      <div
        className={cn(
          "absolute overflow-clip rounded-lg",
          phone ? "top-2.5 right-2.5 bottom-2.5 w-[46%]" : wide ? "right-[1.125rem] bottom-[1.125rem] h-[13rem] w-[63%]" : "inset-x-[1.125rem] bottom-[1.125rem] h-[13rem]",
        )}
      >
        {stat.chart ?? <OndoPlaceholder tone="faint" />}
      </div>
    </div>
  );
}

function ProductBody({ product, phone }: { product: OndoProduct; phone?: boolean }) {
  return (
    <>
      <div className={cn("grid shrink-0 place-items-center bg-foreground text-background", phone ? "size-8 rounded-lg [&_svg]:size-5" : "size-[3.625rem] rounded-xl [&_svg]:size-9")}>
        {product.icon}
      </div>
      <div className={cn(phone ? "mt-2" : "mt-auto")}>
        <h3 className={cn("font-display font-medium tracking-[-0.025em]", phone ? "text-[1.75rem] leading-[1.05]" : "text-[2.25rem] leading-none")}>{product.name}</h3>
        <p className={cn("mt-3 max-w-[30rem] text-foreground/85 lg:mt-6", phone ? "text-[0.9375rem] leading-[1.22]" : "text-base leading-[1.32]", serif)}>
          {product.description}
        </p>
        {product.tag && <p className="mt-1.5 inline-flex rounded-full bg-accent px-1.5 py-0.5 text-xs text-muted-foreground">{product.tag}</p>}
      </div>
      <div className={cn("flex", phone ? "mt-6 flex-col gap-5" : "mt-12 items-center justify-between")}>
        <Networks names={product.networks} />
        <OndoButton href={product.action.href} size="md" className={cn(phone && "w-full")}>
          {product.action.label}
        </OndoButton>
      </div>
    </>
  );
}

/** Product accordion + figures in a grey bento that pins while you scroll through the products. */
export function OndoProducts({ eyebrow, lead, trail, products, className }: OndoProductsProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const pin = useRef<HTMLDivElement>(null);
  const count = products.length;
  const { scrollYProgress } = useScroll({ target: pin, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => setActive(Math.min(count - 1, Math.max(0, Math.floor(p * count)))));

  // clicking a closed product scrolls to its part of the pinned stretch
  const open = (i: number) => {
    const el = pin.current;
    if (!el) return setActive(i);
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (travel * (i + 0.5)) / count, behavior: reduce ? "auto" : "smooth" });
  };

  const current = products[active];

  return (
    <section className={cn("bg-background pt-24 pb-section lg:pt-[10.5rem] lg:pb-16", className)}>
      <div className="px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <OndoHeading eyebrow={eyebrow} lead={lead} trail={trail} align="center" />

        {/* phones: one grey panel per product */}
        <div className="mt-16 flex flex-col gap-5 lg:hidden">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col gap-3 rounded-3xl bg-muted p-3">
              <div className="flex flex-col rounded-xl bg-card p-3 text-card-foreground">
                <ProductBody product={product} phone />
              </div>
              {product.stats.map((stat) => (
                <Stat key={stat.label} stat={stat} phone />
              ))}
            </div>
          ))}
        </div>

        {/* desktop: the bento pins while each product opens in turn */}
        <div ref={pin} className="mx-auto mt-32 hidden max-w-[84.5rem] lg:block lg:h-[calc(46.75rem+200svh)]">
          <div className="sticky top-[max(0.75rem,calc(50svh-23.375rem))] grid h-[46.75rem] grid-cols-[548fr_768fr] gap-3 rounded-[2rem] bg-muted p-3">
            <div className="flex min-h-0 flex-col gap-3">
              {products.map((product, i) =>
                i === active ? (
                  <div
                    key={product.name}
                    className="flex min-h-0 grow basis-[5.625rem] flex-col overflow-clip rounded-3xl bg-card p-6 text-card-foreground transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  >
                    <div className="ondo-products-in flex h-full flex-col">
                      <ProductBody product={product} />
                    </div>
                  </div>
                ) : (
                  <button
                    key={product.name}
                    type="button"
                    onClick={() => open(i)}
                    className="flex min-h-0 grow-0 basis-[5.625rem] items-center rounded-3xl bg-card px-6 text-left text-card-foreground transition-[flex-grow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-card/80 motion-reduce:transition-none"
                  >
                    <span className="font-display text-[2.25rem] leading-none font-medium tracking-[-0.025em]">{product.name}</span>
                  </button>
                ),
              )}
            </div>
            <div key={current.name} className="ondo-products-in grid min-h-0 grid-rows-[294fr_418fr] gap-3">
              {current.stats[0] && <Stat stat={current.stats[0]} wide />}
              <div className="grid min-h-0 grid-cols-2 gap-3">
                {current.stats.slice(1, 3).map((stat) => (
                  <Stat key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
