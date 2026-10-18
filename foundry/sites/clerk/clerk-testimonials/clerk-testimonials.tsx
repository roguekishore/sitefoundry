import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ClerkCommand, type ClerkCommandProps } from "@foundry/clerk-command";
import "./clerk-testimonials.css";

export interface ClerkTestimonial {
  /** the post; a list makes several paragraphs */
  text: string | string[];
  name: string;
  /** handle or role under the name */
  handle: string;
  /** small square avatar (img or initials) */
  avatar: ReactNode;
}

export interface ClerkTestimonialsProps {
  title: string;
  text?: string;
  /** copyable agent pill under the copy (see clerk-command; shown as a pill) */
  command?: ClerkCommandProps;
  /** one larger quote on the left, under an outlined quote mark */
  featured?: { quote: string; name: string; role: string; avatar: ReactNode };
  /** the posts in the drifting columns (alternating between the two) */
  items: ClerkTestimonial[];
  /** seconds for one full loop of the first column */
  speed?: number;
  className?: string;
}

function QuoteMark() {
  return (
    <svg aria-hidden viewBox="0 0 32 24" className="h-6 w-8 fill-none stroke-foreground/20">
      <path d="M2 22V12C2 6 5 2.5 11 1.5l.8 2.6C8.5 5 7 7 7 10h5v12H2Zm17 0V12c0-6 3-9.5 9-10.5l.8 2.6C25.5 5 24 7 24 10h5v12H19Z" />
    </svg>
  );
}

function Post({ t }: { t: ClerkTestimonial }) {
  const paragraphs = Array.isArray(t.text) ? t.text : [t.text];
  return (
    <figure className="rounded-xl bg-card p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_2px_4px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_12px_32px_-8px_color-mix(in_oklab,var(--foreground)_8%,transparent)]">
      <blockquote className="space-y-5 text-[0.8125rem] leading-5 text-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            {p}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md">{t.avatar}</span>
        <span>
          <span className="block text-[0.8125rem] leading-5 font-medium text-foreground">{t.name}</span>
          <span className="block text-[0.6875rem] text-muted-foreground">{t.handle}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Column({ items, speed, offset, className }: { items: ClerkTestimonial[]; speed: number; offset: number; className?: string }) {
  return (
    <div className={cn("min-w-0 flex-1", className)}>
      <div
        className="clerk-wall-col flex flex-col gap-4"
        style={{ "--clerk-wall-speed": `${speed}s`, animationDelay: `-${offset}s` } as CSSProperties}
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} aria-hidden={i >= items.length || undefined}>
            <Post t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClerkTestimonials({ title, text, command, featured, items, speed = 60, className }: ClerkTestimonialsProps) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);
  return (
    <section className={cn("overflow-x-clip bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page items-center gap-12 px-gutter py-[calc(var(--section-y)*0.6)] lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-24 lg:py-section">
        <div>
          <h2 className="font-display text-[1.375rem] leading-8 font-semibold tracking-[-0.015em] lg:text-[2rem] lg:leading-10">{title}</h2>
          {text && <p className="mt-4 text-base leading-6 text-pretty text-muted-foreground">{text}</p>}
          {command && <ClerkCommand {...command} variant="pill" className="mt-6" />}
          {featured && (
            <figure className="mt-12 border-t border-dotted border-foreground/15 pt-12 lg:mt-24 lg:border-0 lg:pt-0">
              <QuoteMark />
              <blockquote className="mt-4 text-[0.8125rem] leading-5 text-foreground">{featured.quote}</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md">{featured.avatar}</span>
                <span>
                  <span className="block text-[0.8125rem] leading-5 font-medium">{featured.name}</span>
                  <span className="block text-[0.6875rem] text-muted-foreground">{featured.role}</span>
                </span>
              </figcaption>
            </figure>
          )}
        </div>

        <div className="clerk-wall relative -mx-gutter px-gutter sm:mx-0 sm:px-0">
          {/* a faint dot grid behind the cards */}
          <div
            aria-hidden
            className="absolute -inset-8 bg-[radial-gradient(color-mix(in_oklab,var(--foreground)_10%,transparent)_1px,transparent_1px)] [background-size:6px_6px] [mask-image:radial-gradient(closest-side,black,transparent)]"
          />
          <div className="relative flex h-[38rem] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] lg:h-[35rem]">
            <Column items={items} speed={speed} offset={0} className="sm:hidden" />
            <Column items={left} speed={speed} offset={0} className="max-sm:hidden" />
            <Column items={right} speed={speed * 1.2} offset={speed * 0.3} className="max-sm:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
