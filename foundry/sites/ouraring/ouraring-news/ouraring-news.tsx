// foundry-allow-text: the "/" between the phone counter's numbers is a decorative separator.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { OuraringButton } from "@foundry/ouraring-button";
import { OuraringMedia } from "@foundry/ouraring-media";
import "./ouraring-news.css";

export interface OuraringNewsItem {
  /** the headline, e.g. "Publication: what they said" */
  title: ReactNode;
  href: string;
}

export interface OuraringNewsProps {
  /** the small bold uppercase line at the top */
  eyebrow?: ReactNode;
  /** the big photo card */
  featured: {
    /** the cream badge, e.g. "From our journal" (shown uppercase) */
    badge?: string;
    title: ReactNode;
    /** the cream pill */
    cta: { label: ReactNode; href: string };
    /** the photo (cover) */
    media?: ReactNode;
  };
  /** the cream headline cards (three fit the desktop column) */
  items: OuraringNewsItem[];
  /** small print under a hairline; each entry starts with its own mark, e.g. <sup>1</sup> */
  footnotes?: ReactNode[];
  className?: string;
}

export function OuraringNews({ eyebrow, featured, items, footnotes, className }: OuraringNewsProps) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector("li");
      if (!card) return;
      setIndex(Math.round(el.scrollLeft / (card.getBoundingClientRect().width + 24)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={cn("dark relative z-10 rounded-b-[40px] bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-10 pb-16 lg:pt-16">
        {eyebrow && <p className="text-[16px] leading-[1.5] font-bold tracking-[0.06em] uppercase">{eyebrow}</p>}

        <div className="mt-[64px] lg:mt-[43px] lg:grid lg:grid-cols-[775fr_477fr] lg:gap-x-[60px]">
          <article className="ouraring-news-feature relative isolate flex h-[565px] flex-col items-start justify-end overflow-clip rounded-lg bg-card p-8 lg:h-[710px]">
            <div className="absolute inset-0 -z-10 overflow-clip lg:bottom-14">
              <div className="ouraring-news-drift absolute inset-x-0 -top-10 -bottom-[170px]">
                <OuraringMedia media={featured.media} tone="deep" className="size-full" />
              </div>
              <div aria-hidden className="absolute inset-0 bg-linear-to-b from-transparent from-35% to-background/90" />
            </div>
            {featured.badge && (
              <span className="absolute top-8 left-8 rounded-sm bg-foreground px-3 py-[9px] text-[12px] leading-4 font-bold tracking-[-0.01em] text-background uppercase">
                {featured.badge}
              </span>
            )}
            <h3 className="max-w-[32rem] text-[28px] leading-[1.25] font-normal tracking-[-0.03em] lg:text-[40px]">{featured.title}</h3>
            <OuraringButton tone="inverse" href={featured.cta.href} icon={<ArrowUpRight strokeWidth={1.5} />} className="mt-10">
              {featured.cta.label}
            </OuraringButton>
          </article>

          <ul
            ref={track}
            className="-mx-gutter mt-6 flex snap-x snap-mandatory scroll-px-gutter gap-6 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:mt-0 lg:grid lg:grid-rows-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => (
              <li key={i} className="w-[80vw] max-w-[293px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                <a href={item.href} className="group flex h-[387px] flex-col rounded-lg bg-foreground p-6 text-background lg:h-full">
                  <span className="text-[24px] leading-[30px] tracking-[0.005em]">{item.title}</span>
                  <span className="mt-auto flex size-[45px] items-center justify-center self-end rounded-full bg-secondary text-secondary-foreground">
                    <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between text-[14px] lg:hidden" aria-hidden>
            <span>
              {index + 1} / {items.length}
            </span>
            <span className="flex gap-4">
              {items.map((_, i) => (
                <span key={i} className={cn("size-2 rounded-full transition-colors duration-300", i === index ? "bg-foreground" : "bg-foreground/30")} />
              ))}
            </span>
          </div>
        </div>
      </div>

      {footnotes && footnotes.length > 0 && (
        <div className="mx-auto max-w-page px-gutter pb-14">
          <div className="flex flex-col gap-1.5 border-t border-border pt-7 text-[14px] leading-[1.5] tracking-[0.01em] [&_sup]:mr-1">
            {footnotes.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
