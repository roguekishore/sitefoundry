import { WiemerTeaserCard, type WiemerTeaserCardProps } from "@foundry/wiemer-teaser-card";
import { cn } from "@foundry/foundry-utils";

export interface WiemerFooterColumn {
  /** the pale label above the links */
  title: string;
  /** the links */
  links: { label: string; href: string }[];
}

export interface WiemerFooterProps {
  /** the wordmark */
  brand: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the short promise on the right */
  tagline: string;
  /** link columns (three fit beside the card) */
  columns: WiemerFooterColumn[];
  /** the teaser card on the right */
  card?: WiemerTeaserCardProps;
  /** bottom left, e.g. "© Grundform 2027" */
  copyright: string;
  /** bottom right, e.g. the company behind the brand */
  credit: string;
  className?: string;
}

/** Pale footer with wordmark, promise, link columns, a teaser card and a last line. */
export function WiemerFooter({ brand, homeHref = "/", tagline, columns, card, copyright, credit, className }: WiemerFooterProps) {
  return (
    <footer className={cn("bg-muted text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-x-3.5 px-gutter pt-12 pb-8 md:grid-cols-12 md:pb-7">
        <a href={homeHref} className="self-start font-display text-[2.4rem] leading-none font-medium tracking-[-0.05em] md:col-span-6 md:text-[2.1rem]">
          {brand}
        </a>
        <p className="mt-6 text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em] md:col-span-6 md:mt-0 lg:col-span-4 lg:col-start-9">{tagline}</p>

        {card && <WiemerTeaserCard {...card} className="mt-8 md:col-span-6 md:col-start-7 md:row-start-2 md:mt-[5.5rem] lg:col-span-4 lg:col-start-9" />}

        <nav className="mt-10 grid gap-8 md:col-span-6 md:row-start-2 md:mt-[5.5rem] md:grid-cols-3 md:gap-4 lg:col-span-6">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[15px] font-medium tracking-[-0.015em] text-muted-foreground">{col.title}</p>
              <ul className="mt-3 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="group relative inline-block text-[15px] font-medium tracking-[-0.015em]">
                      {l.label}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-200 group-hover:scale-x-100 motion-reduce:transition-none"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 flex flex-col gap-3.5 text-[15px] font-medium tracking-[-0.015em] md:col-span-12 md:mt-[6.5rem] md:flex-row md:justify-between">
          <p>{copyright}</p>
          <p>{credit}</p>
        </div>
      </div>
    </footer>
  );
}
