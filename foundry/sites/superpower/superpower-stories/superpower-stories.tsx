import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";
import "./superpower-stories.css";

export interface SuperpowerStory {
  /** e.g. "Priya, 41" */
  name: string;
  quote: string;
  /** a short grey line about what changed */
  outcome?: string;
  /** the photo or video still; empty: a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
}

export interface SuperpowerStoriesProps {
  /** a small line above the title (a rating) */
  eyebrow?: ReactNode;
  title: string;
  lead?: string;
  stories: SuperpowerStory[];
  /** seconds each story stays before the next */
  seconds?: number;
  /** label for the segment buttons, followed by the story's number */
  goToLabel?: string;
  id?: string;
  className?: string;
}

export function SuperpowerStories({ eyebrow, title, lead, stories, seconds = 6, goToLabel = "Show story", id, className }: SuperpowerStoriesProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLElement>(null);

  // Only play while the carousel is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = visible && !hovered;
  const next = () => setIndex((i) => (i + 1) % stories.length);

  return (
    <section
      ref={root}
      id={id}
      className={cn("overflow-x-clip bg-secondary pt-14 pb-[4.5rem] text-foreground lg:py-[7.5rem]", className)}
      style={{ "--superpower-stories-time": `${seconds}s` } as CSSProperties}
    >
      <div className="mx-auto max-w-page px-gutter">
        {eyebrow && <div className="mb-5 text-[0.9375rem]">{eyebrow}</div>}
        <h2 className="max-w-[38rem] text-[1.5rem] leading-[1.3] font-normal tracking-[-0.02em] lg:text-[2.8125rem] lg:leading-[1.2]">{title}</h2>
        {lead && <p className="mt-4 max-w-[36rem] text-[1rem] leading-[1.5] text-muted-foreground lg:mt-5 lg:text-[1.0625rem]">{lead}</p>}

        <div className="mt-14 lg:mt-12" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <ul className="superpower-stories-track flex" style={{ "--superpower-stories-index": index } as CSSProperties}>
            {stories.map((s, i) => (
              <li
                key={s.name}
                aria-hidden={i !== index}
                className={cn(
                  "relative mr-[var(--superpower-stories-gap)] w-[var(--superpower-stories-slide)] shrink-0 transition-opacity duration-400 motion-reduce:transition-none",
                  "after:absolute after:inset-y-0 after:right-[calc(var(--superpower-stories-gap)/-2)] after:hidden after:w-px after:bg-border lg:after:block",
                  i === index ? "opacity-100" : "opacity-50",
                )}
              >
                <SuperpowerMedia media={s.media} label={s.mediaLabel} className="h-60 rounded-sm lg:h-[18.75rem]" />
                <div className="px-4 pt-9 lg:pt-10">
                  <p className="text-[0.75rem] leading-[1.4] lg:text-[0.9375rem]">{s.name}</p>
                  <blockquote className="mt-3.5 text-[0.9375rem] leading-[1.45] lg:mt-4 lg:text-[1.0625rem]">{s.quote}</blockquote>
                  {s.outcome && <p className="mt-4 text-[0.75rem] leading-[1.45] text-muted-foreground lg:text-[0.875rem]">{s.outcome}</p>}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-6 lg:mt-14">
            <div className="flex w-[16.75rem] gap-2 lg:w-[40rem]">
              {stories.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  aria-label={`${goToLabel} ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "relative h-[3px] overflow-clip rounded-full bg-border transition-[flex-grow] duration-750 ease-[cubic-bezier(0.45,0,0.55,1)] motion-reduce:transition-none",
                    "before:absolute before:-inset-y-2 before:inset-x-0",
                    i === index ? "grow-[8]" : "grow",
                  )}
                >
                  {i === index && (
                    <span
                      key={index}
                      onAnimationEnd={next}
                      className={cn(
                        "superpower-stories-fill absolute inset-0 origin-left rounded-full bg-foreground motion-reduce:scale-x-100",
                        !playing && "[animation-play-state:paused]",
                      )}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-[0.8125rem] text-muted-foreground tabular-nums">
              {index + 1} / {stories.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
