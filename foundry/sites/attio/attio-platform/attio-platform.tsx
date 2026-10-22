import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioHeading } from "@foundry/attio-heading";
import "./attio-platform.css";

export interface AttioPlatformFeature {
  /** the panel's dark first line */
  title: string;
  /** one or two grey lines under it */
  text: string;
  /** a small product moment (≈430×280); empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
}

export interface AttioPlatformChapter {
  /** anchor id, also used by the rail's links */
  id: string;
  /** the short name in the rail and the phone tab strip */
  label: string;
  /** the chapter's statement: dark opening clause… */
  lead: string;
  /** …and its grey rest */
  rest?: string;
  /** the wide product shot in the grey well; empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  /** zero or two small panels under the well */
  features?: AttioPlatformFeature[];
}

export interface AttioPlatformProps {
  /** the small label over the intro */
  badge?: string;
  /** the intro statement: dark lead… */
  lead: string;
  /** …and grey rest, on its own line */
  rest?: string;
  /** the chapters, in scroll order */
  chapters: AttioPlatformChapter[];
  /** screen-reader label of the chapter nav */
  navLabel?: string;
  className?: string;
}

function Statement({ lead, rest }: { lead: string; rest?: string }) {
  return (
    <div className="border-b border-border px-4 pt-16 pb-11 lg:px-[3.6875rem] lg:pt-28 lg:pb-20">
      <AttioHeading as="h3" size="statement" lead={lead} rest={rest} className="max-w-[26.5rem]" />
    </div>
  );
}

function Well({ media, label }: { media?: ReactNode; label?: string }) {
  return (
    <div className="flex aspect-[390/330] items-center justify-center overflow-clip border-b border-border bg-secondary sm:aspect-[1044/655]">
      {media ? (
        <div role="img" aria-label={label} className="attio-platform-rise size-full [&>*]:size-full [&>img]:object-cover">
          {media}
        </div>
      ) : (
        <div
          role="img"
          aria-label={label}
          className="attio-platform-rise aspect-[760/460] w-[88%] rounded-lg border border-border bg-card shadow-[0_1px_3px_0_color-mix(in_oklab,var(--foreground)_4%,transparent),0_0_2px_0_color-mix(in_oklab,var(--foreground)_16%,transparent)] sm:w-[72%]"
        />
      )}
    </div>
  );
}

function Features({ features }: { features: AttioPlatformFeature[] }) {
  return (
    <div className="grid border-b border-border sm:grid-cols-2">
      {features.map((f, i) => (
        <div key={f.title} className={cn("flex flex-col px-4 pt-6 pb-8 sm:px-[1.8125rem] sm:pt-14 sm:pb-12", i > 0 && "border-t border-border sm:border-t-0 sm:border-l")}>
          <h4 className="text-lg leading-[1.35] font-medium tracking-[-0.01em] text-foreground">{f.title}</h4>
          <p className="mt-0.5 max-w-[20.5rem] text-base leading-[1.375] font-medium tracking-[-0.01em] text-muted-foreground/85">{f.text}</p>
          <div role="img" aria-label={f.mediaLabel} className="attio-platform-grow mt-8 aspect-[430/250] w-full overflow-clip rounded-xl bg-secondary/80 sm:mt-10 [&>*]:size-full [&>img]:object-cover">
            {f.media}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * The long platform tour on pale grey, inside the page frame: an intro statement, then a
 * sticky rail of chapter names (a sideways tab strip on phones) beside the chapters. Each
 * chapter is a two-tone statement, a wide grey product well and two small panels; the rail
 * marks the chapter in view with a blue rule.
 */
export function AttioPlatform({ badge, lead, rest, chapters, navLabel = "Chapters", className }: AttioPlatformProps) {
  const [active, setActive] = useState(chapters[0]?.id);
  const strip = useRef<HTMLUListElement>(null);

  // the chapter crossing the upper middle of the window is the active one
  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  // keep the active tab visible in the phone strip
  useEffect(() => {
    const list = strip.current;
    const tab = list?.querySelector<HTMLElement>(`[data-chapter="${active}"]`);
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <section className={cn("bg-muted text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page lg:border-x lg:border-border">
        <div className="border-b border-border px-8 pt-[5.5rem] pb-16 lg:px-[3.6875rem] lg:pt-section lg:pb-20">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} restOnNewLine className="mt-6 max-w-[52rem]" />
        </div>

        <div className="lg:grid lg:grid-cols-[21.75rem_minmax(0,1fr)]">
          <nav aria-label={navLabel} className="sticky top-[6.25rem] z-20 border-b border-border bg-background lg:top-[7.25rem] lg:self-start lg:border-b-0 lg:bg-transparent lg:pt-[7.9rem]">
            <ul ref={strip} className="attio-platform-strip flex overflow-x-auto lg:flex-col lg:gap-[0.6rem] lg:overflow-visible">
              {chapters.map((c) => (
                <li key={c.id} data-chapter={c.id} className="shrink-0">
                  <a
                    href={`#${c.id}`}
                    aria-current={active === c.id ? "true" : undefined}
                    className={cn(
                      "relative flex h-14 items-center border-r border-border px-5 text-base font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
                      "lg:h-7 lg:border-r-0 lg:px-[3.6875rem] lg:text-lg",
                      "before:absolute before:top-0 before:-left-px before:hidden before:h-full before:w-0.5 before:bg-highlight before:opacity-0 before:transition-opacity before:duration-300 lg:before:block",
                      active === c.id
                        ? "bg-secondary text-foreground before:opacity-100 lg:bg-transparent"
                        : "text-muted-foreground hover:text-foreground lg:text-muted-foreground/40",
                    )}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:border-l lg:border-border">
            {chapters.map((c) => (
              <div key={c.id} id={c.id} className="scroll-mt-[9.75rem] lg:scroll-mt-[7.25rem]">
                <Statement lead={c.lead} rest={c.rest} />
                <Well media={c.media} label={c.mediaLabel} />
                {c.features && c.features.length > 0 && <Features features={c.features} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
