import { useRef, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SharplinkButton } from "@foundry/sharplink-button";
import { SharplinkGuides } from "@foundry/sharplink-guides";
import { SharplinkLabel, sharplinkLabelType } from "@foundry/sharplink-label";
import { SharplinkRule } from "@foundry/sharplink-rule";

export interface SharplinkArticle {
  /** the article's title */
  title: string;
  /** the small outlined tag, e.g. "Research" */
  tag: string;
  /** the date, as shown */
  date: string;
  /** where it goes */
  href: string;
  /** a 16:9 cover image; a gradient placeholder when empty */
  image?: ReactNode;
}

export interface SharplinkNewsProps {
  /** the small label over the title */
  label: string;
  /** the section title */
  title: string;
  /** the tinted button (e.g. to all articles) */
  cta: { label: string; href: string };
  /** the articles (three fill the grid) */
  articles: SharplinkArticle[];
  /** screen-reader names for the phone arrows */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

const chip = cn("inline-flex h-[1.875rem] items-center border border-foreground/15 px-2", sharplinkLabelType, "text-xs");
const arrowBox = "grid size-[2.125rem] place-items-center bg-foreground/10 transition-colors duration-[250ms] hover:bg-foreground/[0.18] motion-reduce:transition-none";

/** Latest articles: title row and a grid (a swipe track on phones) of square cards. */
export function SharplinkNews({ label, title, cta, articles, previousLabel, nextLabel, className }: SharplinkNewsProps) {
  const track = useRef<HTMLUListElement>(null);
  const move = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 16), behavior: "smooth" });
  };

  return (
    <section className={cn("relative isolate overflow-clip text-foreground", className)}>
      <SharplinkGuides />
      <div className="mx-auto max-w-page px-gutter pb-24 lg:pb-40">
        <SharplinkRule />
        <div className="mt-7 grid gap-y-4 lg:grid-cols-[1fr_auto]">
          <SharplinkLabel>{label}</SharplinkLabel>
          <h2 className="font-display text-[2.75rem] leading-[1.15] font-medium tracking-[-0.01em] lg:col-start-1 lg:text-[4.25rem] lg:leading-[1.06] lg:tracking-[-0.02em]">
            {title}
          </h2>
          <div className="flex items-center justify-between lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:items-start lg:pt-0">
            <SharplinkButton href={cta.href} variant="tint" arrow>
              {cta.label}
            </SharplinkButton>
            <div className="flex gap-0.5 lg:hidden">
              <button type="button" aria-label={previousLabel} className={arrowBox} onClick={() => move(-1)}>
                <ChevronLeft className="size-4" strokeWidth={1.5} />
              </button>
              <button type="button" aria-label={nextLabel} className={arrowBox} onClick={() => move(1)}>
                <ChevronRight className="size-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={track}
          className="-mx-gutter mt-14 flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-gutter lg:overflow-visible lg:px-0"
        >
          {articles.map((article) => (
            <li key={article.href + article.title} className="w-[82%] max-w-[22rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <a
                href={article.href}
                className="group block outline outline-transparent transition-[outline-color] duration-500 hover:outline-foreground/30 motion-reduce:transition-none"
              >
                <div className="dark relative aspect-video overflow-clip bg-background">
                  <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] motion-reduce:transition-none [&>*]:h-full [&>*]:w-full [&>*]:object-cover">
                    {article.image ?? (
                      <div className="bg-[radial-gradient(120%_95%_at_75%_120%,color-mix(in_oklab,var(--glow)_60%,var(--foreground))_0%,var(--glow)_25%,var(--background)_65%)]" />
                    )}
                  </div>
                  <span aria-hidden className="absolute top-0 left-0 size-1 bg-highlight" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className={chip}>{article.tag}</span>
                  <span className={chip}>{article.date}</span>
                </div>
                <h3 className="mt-4 text-base leading-[1.4] font-medium tracking-[-0.01em] lg:text-2xl">{article.title}</h3>
                <span
                  aria-hidden
                  className="mt-5 grid size-8 place-items-center bg-foreground/10 transition-colors duration-[250ms] group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none"
                >
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
