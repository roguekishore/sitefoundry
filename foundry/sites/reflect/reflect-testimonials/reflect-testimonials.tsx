import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";
import "./reflect-testimonials.css";

export interface ReflectTestimonial {
  name: string;
  /** e.g. "@juno" */
  handle: string;
  /** the post; any @mention in it is set in the highlight colour */
  quote: string;
  /** a 44px round photo; a muted disc when empty */
  avatar?: ReactNode;
}

export interface ReflectTestimonialsProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** two rows of posts; each drifts sideways on a long loop */
  rows: ReflectTestimonial[][];
  className?: string;
}

/** Splits "@name" mentions out of a post so they can be coloured. */
function withMentions(text: string) {
  return text.split(/(@[\w.]+)/g).map((part, i) =>
    part.startsWith("@") ? (
      <span key={i} className="text-highlight">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function Card({ item }: { item: ReflectTestimonial }) {
  return (
    <li className="w-[23.75rem] shrink-0 rounded-2xl border border-foreground/8 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--foreground)_1%,transparent),color-mix(in_oklab,var(--foreground)_4%,transparent))] px-6 pt-6 pb-8 lg:w-[30rem]">
      <div className="flex items-center gap-4">
        <ReflectMedia tone="panel" className="size-11 shrink-0 rounded-full" reveal>
          {item.avatar}
        </ReflectMedia>
        <div>
          <p className="text-base/6 font-medium">{item.name}</p>
          <p className="text-sm/5 text-muted-foreground">{item.handle}</p>
        </div>
      </div>
      <p className="mt-9 text-base/6 text-foreground/75">{withMentions(item.quote)}</p>
    </li>
  );
}

/** Heading over two overlapping rings, then two slow marquee rows of post cards. */
export function ReflectTestimonials({ eyebrow, title, lead, rows, className }: ReflectTestimonialsProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background pt-[6.5rem] pb-24 text-foreground lg:pt-[6.75rem]", className)}>
      {/* two overlapping rings behind the heading */}
      <div aria-hidden className="absolute top-[4.5rem] left-1/2 -z-10 h-[22.5rem] w-[37.5rem] -translate-x-1/2 max-lg:top-[4.25rem] max-lg:scale-[0.62] max-lg:origin-top">
        <span className="reflect-testimonials-ring-left absolute top-0 left-0 size-[22.5rem] rounded-full border border-highlight/15 bg-[radial-gradient(closest-side,transparent_70%,color-mix(in_oklab,var(--glow)_10%,transparent))]" />
        <span className="reflect-testimonials-ring-right absolute top-0 right-0 size-[22.5rem] rounded-full border border-highlight/15 bg-[radial-gradient(closest-side,transparent_70%,color-mix(in_oklab,var(--glow)_10%,transparent))]" />
      </div>
      <ReflectStarfield size={1200} count={60} seed={41} strength={50} className="h-[26rem]" />
      <div className="relative px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead} />
      </div>
      <div className="mt-12 flex flex-col gap-6 lg:mt-[3.25rem]">
        {rows.map((row, r) => (
          <div key={r} className="reflect-testimonials-row overflow-clip">
            <ul className={cn("reflect-testimonials-track flex w-max gap-6", r % 2 === 1 && "reflect-testimonials-track-offset")}>
              {[...row, ...row].map((item, i) => (
                <Card key={`${item.handle}-${i}`} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
