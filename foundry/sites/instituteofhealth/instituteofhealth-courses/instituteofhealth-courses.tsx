import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";
import "./instituteofhealth-courses.css";

export interface InstituteofhealthCourse {
  /** the course name under the picture */
  title: string;
  /** the kind of course, shown in the bar above the active card */
  category: string;
  /** how many units; shown next to `unitsLabel` in the bar */
  units: number;
  /** the short overview shown under the active card */
  overview: string;
  /** where "explore" leads */
  href: string;
  /** the card picture (cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
}

export interface InstituteofhealthCoursesProps {
  /** the large statement at the top left */
  title: string;
  /** the dark button under it */
  action?: { label: string; href: string };
  /** the cards, in order */
  courses: InstituteofhealthCourse[];
  /** small grey heading of the overview box */
  overviewLabel: string;
  /** the link at the foot of the overview box */
  exploreLabel: string;
  /** word after the unit count */
  unitsLabel: string;
  /** the card centred first */
  startIndex?: number;
  /** milliseconds between slides */
  interval?: number;
  className?: string;
}

export function InstituteofhealthCourses({
  title,
  action,
  courses,
  overviewLabel,
  exploreLabel,
  unitsLabel,
  startIndex = 2,
  interval = 4000,
  className,
}: InstituteofhealthCoursesProps) {
  const [active, setActive] = useState(Math.min(startIndex, courses.length - 1));
  const [paused, setPaused] = useState(false);

  // Slide one card to the left every few seconds; wrap at the end. Off under reduced motion.
  useEffect(() => {
    if (paused || courses.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % courses.length), interval);
    return () => window.clearInterval(id);
  }, [paused, courses.length, interval]);

  const current = courses[active];

  return (
    <section className={cn("relative overflow-x-clip bg-muted pt-[4.5rem] pb-12 text-foreground lg:pt-[3.45rem] lg:pb-[8.9rem]", className)}>
      <div className="px-gutter">
        <h2 className="max-w-[22rem] font-display text-[1.46rem] leading-none font-medium tracking-[-0.03em] sm:max-w-[30rem] lg:max-w-[49rem] lg:text-[3.15rem] lg:tracking-[-0.035em]">
          {title}
        </h2>
        {action && (
          <InstituteofhealthButton href={action.href} className="mt-[1.6rem] lg:mt-[2.2rem]">
            {action.label}
          </InstituteofhealthButton>
        )}
      </div>

      {/* --cw: card width, --gap: space between cards. */}
      <div
        className="mt-[1.6rem] [--cw:calc(100vw-2.5rem)] [--gap:0.75rem] sm:[--cw:19.625rem] lg:mt-[3.75rem] lg:[--gap:2.5rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Bar above the active card: category and unit count. */}
        <div className="mx-auto flex h-[2.875rem] w-[var(--cw)] items-center justify-between rounded-lg bg-card px-4 text-[0.8775rem] leading-none font-medium tracking-[-0.02em] lg:h-11 lg:text-[0.765rem]">
          <span>{current.category}</span>
          <span key={active} className="ioh-courses-swap">
            {current.units} {unitsLabel}
          </span>
        </div>

        {/* The track: starts at the centre line, then shifts left by whole cards. */}
        <div className="mt-2 ml-[50%]">
          <ul
            className="flex w-max gap-[var(--gap)] transition-transform duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(calc(-1 * (${active} * (var(--cw) + var(--gap)) + var(--cw) / 2)))` }}
          >
            {courses.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.title} className="w-[var(--cw)]">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={on}
                    className={cn(
                      "block w-full rounded-2xl p-4 text-left transition-colors duration-[550ms] ease-[ease] lg:rounded-xl motion-reduce:transition-none",
                      on ? "bg-card" : "bg-background",
                    )}
                  >
                    <span className={cn("block transition-opacity duration-[550ms] ease-[ease] motion-reduce:transition-none", on ? "opacity-100" : "opacity-45")}>
                      <span className="block aspect-[319/242] overflow-clip rounded-lg lg:aspect-[282/259] [&>*]:size-full [&>*]:object-cover">
                        {c.media ?? <span className="block bg-muted" />}
                      </span>
                      <span className="block pt-[1.05rem] text-[0.975rem] leading-none font-medium tracking-[-0.03em] lg:pt-[1.1rem] lg:text-[0.945rem]">{c.title}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Overview box under the active card. */}
        <div key={active} className="ioh-courses-rise mx-auto mt-2 w-[var(--cw)] rounded-2xl bg-card p-4 lg:rounded-xl lg:pb-[1.1rem]">
          <p className="text-[0.8775rem] leading-none font-medium tracking-[-0.02em] text-muted-foreground lg:text-[0.765rem]">{overviewLabel}</p>
          <p className="mt-3 text-[0.8775rem] leading-[1.4] font-medium tracking-[-0.004em] lg:mt-2.5 lg:text-[0.765rem] lg:tracking-[-0.018em]">{current.overview}</p>
          <a
            href={current.href}
            className="mt-5 inline-block text-[0.8775rem] leading-none font-medium tracking-[-0.02em] transition-opacity duration-400 hover:opacity-75 lg:mt-[1.35rem] lg:text-[0.765rem]"
          >
            {exploreLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
