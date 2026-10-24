import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ValaratomicsButton } from "@foundry/valaratomics-button";

export interface ValaratomicsPressItem {
  /** the article's headline */
  headline: string;
  /** the publication's name (set as a small masthead), or its logo */
  source: ReactNode;
  /** link to the article */
  href: string;
}

export interface ValaratomicsPressProps {
  /** the section heading */
  title: string;
  /** the articles */
  items: ValaratomicsPressItem[];
  /** the mono link text at the bottom of each tile, e.g. "Read more" */
  readLabel: string;
  /** the arrow after it (e.g. lucide MoveRight) */
  arrow?: ReactNode;
  /** how many tiles show before the "show more" button */
  initialCount?: number;
  /** the "show more" button's text */
  moreLabel: string;
  className?: string;
}

/**
 * On a white band: a heading, then a grid of square grey tiles (3 across, stacked on phones),
 * each with a headline at the top, the publication's masthead near the bottom and a faint
 * mono READ MORE with an arrow that darkens and nudges on hover. A solid black button shows
 * the rest.
 */
export function ValaratomicsPress({
  title,
  items,
  readLabel,
  arrow,
  initialCount = 9,
  moreLabel,
  className,
}: ValaratomicsPressProps) {
  const [all, setAll] = useState(false);
  const shown = all ? items : items.slice(0, initialCount);

  return (
    <section className={cn("bg-card px-gutter py-section text-card-foreground", className)}>
      <div className="mx-auto max-w-page">
        <h2 className="font-sans text-[2.625rem] leading-[0.9] font-semibold tracking-[-0.03em] lg:text-5xl lg:leading-[0.9]">
          {title}
        </h2>
        <ul className="mt-9 grid gap-5 lg:mt-[8.75rem] lg:grid-cols-3">
          {shown.map((item) => (
            <li key={item.headline}>
              <a
                href={item.href}
                className="group relative flex min-h-[17.5rem] flex-col rounded-[1px] bg-muted px-[1.3125rem] pt-[1.5625rem] pb-[1.5rem] transition-colors duration-150 hover:bg-foreground/[0.06] lg:aspect-square lg:min-h-0"
              >
                <h3 className="max-w-[21rem] text-2xl leading-none tracking-[-0.05em] lg:text-[1.875rem] lg:leading-none">
                  {item.headline}
                </h3>
                <div className="mt-auto pt-16 font-display text-base leading-none font-black tracking-[-0.01em] text-foreground/70 uppercase [font-stretch:var(--valaratomics-stretch,100%)] [&_img]:h-12 [&_img]:w-auto">
                  {item.source}
                </div>
                <div className="mt-12 flex items-center justify-between font-mono text-[1.375rem] leading-none uppercase opacity-30 transition-opacity duration-150 group-hover:opacity-100 motion-reduce:transition-none lg:mt-[3.25rem]">
                  <span>{readLabel}</span>
                  {arrow && (
                    <span
                      aria-hidden
                      className="transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none [&_svg]:size-7 [&_svg]:stroke-[1.25]"
                    >
                      {arrow}
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
        {!all && items.length > initialCount && (
          <div className="mt-9 flex justify-center lg:mt-[9rem]">
            <ValaratomicsButton label={moreLabel} variant="solid" onClick={() => setAll(true)} className="w-[11.25rem] px-0" />
          </div>
        )}
      </div>
    </section>
  );
}
