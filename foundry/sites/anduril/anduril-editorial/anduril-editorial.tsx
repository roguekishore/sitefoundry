import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AndurilLink } from "@foundry/anduril-link";
import "./anduril-editorial.css";

export interface AndurilEditorialPart {
  /** the band's heading */
  heading: string;
  /** the small link at the right of the heading */
  linkLabel: string;
  href: string;
  /** the big label over the image's bottom edge, e.g. "Pt — 01 / 02" */
  label: string;
  /** band colour: accent (olive, light text) or secondary (grey, dark text) */
  tone?: "accent" | "secondary";
  /** the image (1.8:1); empty shows a placeholder */
  media?: ReactNode;
}

export interface AndurilEditorialProps {
  /** the bands, left to right (two in the original) */
  parts: AndurilEditorialPart[];
  className?: string;
}

const tones = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
};

/** Side-by-side colour bands for a two-part series, each sliding in from the left. */
export function AndurilEditorial({ parts, className }: AndurilEditorialProps) {
  return (
    <section className={cn("grid md:grid-cols-2", className)}>
      {parts.map((p) => (
        <article key={p.heading} className={cn("overflow-x-clip px-gutter pt-[3.75rem] pb-14 md:pt-[4.75rem] md:pb-28", tones[p.tone ?? "accent"])}>
          <div className="anduril-editorial-text flex items-end justify-between gap-6">
            <h2 className="max-w-[8em] font-display text-[1.5rem] leading-[1.25] tracking-[-0.02em] lg:max-w-none lg:text-[2rem] lg:leading-[1.15]">{p.heading}</h2>
            <AndurilLink label={p.linkLabel} href={p.href} className="mb-0.5 shrink-0 text-[0.875rem] opacity-70 transition-opacity duration-300 ease-out hover:opacity-100 motion-reduce:transition-none" />
          </div>
          <div aria-hidden className="anduril-editorial-rule mt-[1.125rem] h-px origin-left bg-current/70 lg:mt-7" />
          <div className="relative mt-7 lg:mt-8">
            <div className="anduril-editorial-media aspect-[1.8] overflow-clip rounded-lg bg-current/15 [&>img]:size-full [&>img]:object-cover">{p.media}</div>
            <p className="anduril-editorial-label absolute right-3.5 bottom-0 translate-y-[45%] font-display text-[2.125rem] leading-none font-light tracking-[-0.03em] whitespace-nowrap lg:right-8 lg:text-[4rem]">
              {p.label}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
