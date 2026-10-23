import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";
import "./raycast-testimonials.css";

export interface RaycastPerson {
  /** their name */
  name: ReactNode;
  /** their handle, set grey beside the name on desktop */
  handle: ReactNode;
  /** their role */
  role: ReactNode;
  /** a round photo; a muted circle when empty */
  avatar?: ReactNode;
  /** the quote: grey words before, bold white highlight, grey words after */
  quote: { before: ReactNode; highlight: ReactNode; after?: ReactNode };
  /** their favourite feature: a small icon, its name and a sentence */
  feature: { icon?: ReactNode; name: ReactNode; text: ReactNode };
  /** their top extension */
  extension: { icon?: ReactNode; name: ReactNode; text: ReactNode };
}

export interface RaycastTestimonialsProps {
  /** the white heading sentence */
  title: ReactNode;
  /** the grey heading sentence */
  subtitle?: ReactNode;
  /** the people (three or more) */
  people: RaycastPerson[];
  /** the mono labels of the two rows */
  labels: { feature: ReactNode; extension: ReactNode };
  /** how long each person stays, in ms (default 5000) */
  interval?: number;
  className?: string;
}

function Row({ label, icon, name, text }: { label: ReactNode; icon?: ReactNode; name: ReactNode; text?: ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 lg:grid-cols-[10.5rem_1fr] lg:items-start">
      <dt className="font-mono text-[0.8125rem] tracking-[0.1px] text-muted-foreground/80">{label}</dt>
      <dd className="flex flex-col items-end lg:items-start">
        <span className="inline-flex items-center gap-2 rounded-md bg-foreground/[0.07] px-2.5 py-1.5 text-sm font-semibold tracking-[0.2px] [&_svg]:size-4">
          {icon}
          {name}
        </span>
        {text && <span className="mt-4 hidden max-w-[19rem] text-sm leading-[1.7] font-medium tracking-[0.2px] text-muted-foreground lg:block">{text}</span>}
      </dd>
    </div>
  );
}

/** Heading, an auto-advancing row of people, a fading rule, then rows and a big quote for the active one. */
export function RaycastTestimonials({ title, subtitle, people, labels, interval = 5000, className }: RaycastTestimonialsProps) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const n = people.length;
  useEffect(() => {
    if (reduce || n < 2) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), interval);
    return () => clearTimeout(t);
  }, [active, reduce, n, interval]);
  const person = people[active];
  const slots = [-2, -1, 0, 1, 2].map((o) => ({ o, p: people[(active + o + n * 3) % n] }));

  return (
    <section className={cn("bg-background py-section text-foreground lg:py-52", className)}>
      <RaycastHeading title={title} subtitle={subtitle} className="px-gutter" />

      <div className="mx-auto mt-[4.5rem] flex max-w-[78rem] justify-center gap-4 overflow-clip py-6 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] lg:mt-[5.5rem] lg:gap-6">
        {slots.map(({ o, p }) => (
          <button
            key={o}
            type="button"
            onClick={() => setActive((active + o + n * 3) % n)}
            aria-current={o === 0}
            className={cn(
              "relative flex w-[13.125rem] shrink-0 items-center gap-4 overflow-clip rounded-xl px-3.5 py-3 text-left transition-all duration-500 lg:w-[20.8rem] lg:px-6 lg:py-6 motion-reduce:transition-none",
              o === 0
                ? "bg-card/80 opacity-100 ring-1 ring-foreground/10 shadow-[0_0_40px_6px_color-mix(in_oklab,var(--foreground)_4%,transparent)]"
                : "opacity-40 hover:opacity-60",
            )}
          >
            <span className="flex size-12 shrink-0 overflow-clip rounded-full [&>*]:size-full">
              {p.avatar ?? <RaycastPlaceholder tone="muted" className="rounded-full" />}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base leading-tight font-semibold tracking-[0.2px]">
                {p.name} <span className="hidden font-medium text-muted-foreground lg:inline">{p.handle}</span>
              </span>
              <span className="mt-1 block truncate text-base leading-tight font-medium tracking-[0.2px] text-muted-foreground">{p.role}</span>
            </span>
            {o === 0 && !reduce && <span key={active} aria-hidden className="raycast-testimonials-progress absolute inset-x-0 bottom-0 h-px bg-foreground/50" />}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 h-px max-w-[63.75rem] bg-linear-to-r from-transparent via-foreground/15 to-transparent px-gutter lg:mt-20" />

      <div className="mx-auto mt-10 grid max-w-[66.75rem] px-gutter lg:mt-24 lg:grid-cols-2 lg:px-0">
        <dl className="order-2 mt-8 flex flex-col gap-4 border-t border-foreground/10 pt-6 lg:order-1 lg:mt-0 lg:gap-16 lg:border-0 lg:pt-0 lg:pr-12 lg:pl-0">
          <Row label={labels.feature} icon={person.feature.icon} name={person.feature.name} text={person.feature.text} />
          <Row label={labels.extension} icon={person.extension.icon} name={person.extension.name} text={person.extension.text} />
        </dl>
        <blockquote key={active} className="raycast-testimonials-quote relative order-1 lg:order-2 lg:border-l lg:border-foreground/15 lg:pt-10 lg:pl-12">
          <span aria-hidden className="absolute -top-3 -left-1 text-6xl leading-none font-semibold text-muted-foreground/40 lg:top-10 lg:left-1">
            {/* foundry-allow-text */}“
          </span>
          <p className="py-2 pl-3 text-lg leading-[1.7] font-medium tracking-[0.2px] text-muted-foreground/80 lg:pl-0 lg:text-[1.375rem] lg:leading-[1.45]">
            {person.quote.before} <strong className="font-semibold text-foreground">{person.quote.highlight}</strong> {person.quote.after}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
