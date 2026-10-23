import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";

export interface RaycastDevFeature {
  /** the cell's title */
  title: ReactNode;
  /** the mono blurb */
  description: ReactNode;
  /** where the little arrow goes */
  href: string;
}

export interface RaycastDevelopersProps {
  /** the big light title in the intro cell */
  title: ReactNode;
  /** the mono paragraph under it */
  text: ReactNode;
  /** the bold mono link at the bottom of the intro cell */
  link: { label: ReactNode; href: string };
  /** four text cells in page order: beside FIG_02, between FIG_03 and FIG_04, beside FIG_05, beside FIG_06 */
  features: [RaycastDevFeature, RaycastDevFeature, RaycastDevFeature, RaycastDevFeature];
  /** the six figures in order (FIG_01…06); a faint panel over the dotted floor when empty */
  figures?: ReactNode[];
  /** the label prefix of each figure ("FIG_" gives FIG_01…) */
  figurePrefix?: string;
  /** the closing link in the last row */
  cta: { label: ReactNode; href: string };
  className?: string;
}

/* On phones every cell is its own bordered strip with a gap between; from lg the cells of a row
   share one-pixel lines (the row's background shows through the gaps). */
const cell = "relative border-y border-foreground/10 lg:border-0 lg:bg-background";
const row = "grid gap-y-[3.125rem] lg:grid-cols-3 lg:gap-px lg:gap-y-px lg:border lg:border-foreground/10 lg:bg-foreground/10";

function Figure({ n, prefix, media, className }: { n: number; prefix: string; media?: ReactNode; className?: string }) {
  return (
    <div className={cn(cell, "min-h-[17.5rem] overflow-clip", className)}>
      <RaycastPlaceholder tone="dots" className="absolute inset-0" />
      <span className="absolute top-3 left-3 font-mono text-[0.6875rem] tracking-[0.1px] text-muted-foreground/70">
        {prefix}
        {String(n).padStart(2, "0")}
      </span>
      <div className="absolute inset-[12%] overflow-clip [&>*]:size-full">{media ?? <RaycastPlaceholder tone="panel" className="rounded-xl" />}</div>
    </div>
  );
}

function Feature({ f, className }: { f: RaycastDevFeature; className?: string }) {
  return (
    <a href={f.href} className={cn(cell, "group flex min-h-[12.5rem] flex-col justify-end p-6", className)}>
      <ArrowUpRight className="absolute top-6 right-6 size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      <h3 className="text-2xl leading-[1.15] font-medium tracking-[-0.01em]">{f.title}</h3>
      <p className="mt-2 font-mono text-[0.8125rem] leading-[1.75] tracking-[0.1px] text-muted-foreground/80">{f.description}</p>
    </a>
  );
}

/** A hairline blueprint grid: intro, six dotted figure cells and four text cells. */
export function RaycastDevelopers({ title, text, link, features, figures = [], figurePrefix, cta, className }: RaycastDevelopersProps) {
  const prefix = figurePrefix ?? "";
  return (
    <section className={cn("relative overflow-clip bg-background px-[1.875rem] py-[8rem] text-foreground lg:px-gutter lg:py-[24rem]", className)}>
      {/* rules that run on past the grid, fading toward the ends of the section */}
      <div aria-hidden className="absolute inset-0 hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] lg:block">
        <div className="relative mx-auto h-full max-w-[75rem]">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="absolute inset-y-0 w-px bg-foreground/[0.07]" style={{ left: `${5.6 + i * 29.6}%` }} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[66.75rem] flex-col gap-y-[3.125rem]">
        <div className={row}>
          <Figure n={1} prefix={prefix} media={figures[0]} className="lg:order-2 lg:col-span-2 lg:h-[30.375rem]" />
          <div className={cn(cell, "flex flex-col lg:order-1 lg:h-[30.375rem]")}>
            <h2 className="px-6 pt-8 pb-6 text-[2rem] leading-[1.15] font-normal tracking-[-0.02em] lg:h-[17.1875rem] lg:border-b lg:border-foreground/10 lg:px-[1.3125rem] lg:pt-6 lg:text-[3.5rem] lg:leading-[1.18]">{title}</h2>
            <div className="flex flex-1 flex-col border-t border-foreground/10 px-6 py-6 lg:border-t-0 lg:px-[1.3125rem] lg:pt-8 lg:pb-5">
              <p className="max-w-[18rem] font-mono text-sm leading-[1.6] tracking-[0.1px] text-muted-foreground/80 lg:text-[0.8125rem] lg:leading-[1.75]">{text}</p>
              <a href={link.href} className="group mt-10 inline-flex w-fit items-center gap-2 font-mono text-[0.8125rem] font-semibold tracking-[0.1px] lg:mt-auto [&_svg]:size-3.5 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-0.5">
                {link.label}
                <ArrowUpRight className="text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className={row}>
          <Figure n={2} prefix={prefix} media={figures[1]} className="lg:col-span-2 lg:h-[28.5rem]" />
          <Feature f={features[0]} className="lg:h-[28.5rem]" />
        </div>

        <div className={row}>
          <Figure n={3} prefix={prefix} media={figures[2]} className="lg:h-[22.25rem]" />
          <Feature f={features[1]} className="lg:h-[22.25rem]" />
          <Figure n={4} prefix={prefix} media={figures[3]} className="lg:h-[22.25rem]" />
        </div>

        <div className={row}>
          <Feature f={features[2]} className="lg:h-[28.5rem]" />
          <Figure n={5} prefix={prefix} media={figures[4]} className="max-lg:-order-1 lg:col-span-2 lg:h-[28.5rem]" />
        </div>

        <div className={row}>
          <Figure n={6} prefix={prefix} media={figures[5]} className="lg:col-span-2 lg:h-[28.5rem]" />
          <Feature f={features[3]} className="lg:h-[28.5rem]" />
        </div>

        <a href={cta.href} className={cn(cell, "group flex h-16 items-center justify-center gap-2 border-x font-mono text-[0.8125rem] font-semibold tracking-[0.1px] lg:border")}>
          {cta.label}
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
