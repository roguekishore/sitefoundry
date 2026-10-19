import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloTiles } from "@foundry/newhalo-tiles";

export interface NewhaloLegalPart {
  /** a sub-heading: level 3 is 32px, level 4 is 24px */
  heading?: string;
  level?: 3 | 4;
  /** paragraphs under it */
  paragraphs?: string[];
  /** a bullet list after the paragraphs */
  bullets?: string[];
}

export interface NewhaloLegalSection {
  /** the anchor id the tile links to */
  id: string;
  /** the tile label and the section's 64px heading */
  title: string;
  parts: NewhaloLegalPart[];
}

export interface NewhaloLegalProps {
  sections: NewhaloLegalSection[];
  className?: string;
}

/**
 * A long legal text on paper: sticky topic tiles on the left (the section you are reading is
 * orange), the text on the right with 64px section headings, 32/24px sub-headings, 16px body
 * and bullet lists. On phones the tiles become a sideways row that sticks to the top.
 */
export function NewhaloLegal({ sections, className }: NewhaloLegalProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(els.indexOf(e.target as HTMLElement));
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <section className={cn("bg-background pt-1.5 pb-section text-foreground lg:pt-section", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="sticky top-1.5 z-10 lg:top-30 lg:col-span-4 lg:self-start">
          <NewhaloTiles items={sections.map((s) => ({ label: s.title, href: `#${s.id}` }))} activeIndex={active} />
        </div>
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-24 pb-14 last:pb-0">
              <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{s.title}</h2>
              {s.parts.map((p, i) => (
                <div key={i} className="mt-7 text-sm leading-normal lg:text-base">
                  {p.heading &&
                    (p.level === 4 ? (
                      <h4 className="mb-5 font-display text-xl leading-[1.1] lg:text-2xl">{p.heading}</h4>
                    ) : (
                      <h3 className="mb-6 font-display text-[1.56rem] leading-[1.1] lg:text-[2rem]">{p.heading}</h3>
                    ))}
                  <div className="space-y-3">
                    {p.paragraphs?.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  {p.bullets && (
                    <ul className="mt-6 list-disc space-y-3 pl-5 marker:text-foreground">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
