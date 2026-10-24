import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RailwayButton } from "@foundry/railway-button";
import { RailwayPanel } from "@foundry/railway-panel";
import "./railway-testimonials.css";

export interface RailwayCustomerQuote {
  /** the company's wordmark (an svg, img or styled text) */
  logo: ReactNode;
  quote: string;
  name: string;
  role: string;
  /** a portrait; a placeholder circle when empty */
  avatar?: ReactNode;
}

export interface RailwayPost {
  name: string;
  handle: string;
  /** the post's text; may contain highlighted mentions */
  text: ReactNode;
  /** a portrait; a placeholder circle when empty */
  avatar?: ReactNode;
}

export interface RailwayTestimonialsProps {
  /** the serif heading */
  title: string;
  /** the paragraph under it */
  lead: string;
  /** the outline button under the paragraph */
  action?: { label: string; href: string };
  /** three customer cards */
  quotes: RailwayCustomerQuote[];
  /** the second, sans-serif heading above the moving row of posts */
  postsTitle: string;
  /** the grey link under it */
  postsLink?: { label: string; href: string };
  /** short posts that scroll past in an endless row */
  posts: RailwayPost[];
  className?: string;
}

function Avatar({ children, className }: { children?: ReactNode; className: string }) {
  return <span className={cn("block shrink-0 overflow-clip rounded-full bg-muted ring-1 ring-border", className)}>{children}</span>;
}

/**
 * A framed plum panel of social proof: centred serif heading, lead and outline button,
 * three double-bordered customer cards with a faint grid in their lower corner, then a
 * sans heading and an endless, slowly sliding row of short posts.
 */
export function RailwayTestimonials({ title, lead, action, quotes, postsTitle, postsLink, posts, className }: RailwayTestimonialsProps) {
  return (
    <section className={cn("px-gutter pb-4 text-foreground", className)}>
      <RailwayPanel tint="highlight">
        <div className="mx-auto max-w-[70.5rem] px-4 pt-20 text-center lg:px-0">
          <h2 className="mx-auto max-w-[20rem] font-display text-[2.5rem] leading-[1.2] tracking-[-0.01em] sm:max-w-none">{title}</h2>
          <p className="mx-auto mt-1.5 max-w-[38rem] text-lg leading-7 text-muted-foreground">{lead}</p>
          {action && (
            <RailwayButton href={action.href} variant="outline" className="mt-6">
              {action.label}
            </RailwayButton>
          )}

          <ul className="mt-16 grid gap-6 text-left lg:grid-cols-3">
            {quotes.map((q) => (
              <li key={q.name} className="rounded-xl border border-foreground/15 bg-foreground/[0.02] p-2">
                <figure className="relative flex h-full flex-col overflow-clip rounded-lg border border-border px-10 pt-12 pb-10 lg:min-h-[30.25rem]">
                  <span
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(90%_70%_at_100%_100%,var(--foreground),transparent)]"
                    aria-hidden
                  />
                  <span className="relative flex h-10 items-center text-[2rem] text-foreground">{q.logo}</span>
                  <blockquote className="relative mt-8 text-base leading-7">{q.quote}</blockquote>
                  <figcaption className="relative mt-auto flex items-center gap-4 pt-12">
                    <Avatar className="size-12">{q.avatar}</Avatar>
                    <span>
                      <span className="block text-base font-semibold">{q.name}</span>
                      <span className="block text-sm text-muted-foreground">{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <h3 className="mt-20 text-[2.25rem] leading-[1.3] tracking-[-0.02em]">{postsTitle}</h3>
          {postsLink && (
            <a href={postsLink.href} className="mt-2 inline-block text-lg text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
              {postsLink.label}
            </a>
          )}
        </div>

        <div className="mt-14 pb-20 lg:mt-20">
          <ul className="railway-testimonials-track flex w-max gap-2">
            {[...posts, ...posts].map((post, i) => (
              <li
                key={i}
                aria-hidden={i >= posts.length ? true : undefined}
                className="flex h-[15.25rem] w-[18.25rem] shrink-0 flex-col rounded-xl border border-border bg-foreground/[0.03] p-6 lg:w-[22.5rem]"
              >
                <span className="flex items-center gap-3">
                  <Avatar className="size-10">{post.avatar}</Avatar>
                  <span>
                    <span className="block text-sm font-semibold">{post.name}</span>
                    <span className="block text-sm text-muted-foreground">{post.handle}</span>
                  </span>
                </span>
                <p className="mt-auto text-sm leading-[1.5] text-foreground/85">{post.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </RailwayPanel>
    </section>
  );
}
