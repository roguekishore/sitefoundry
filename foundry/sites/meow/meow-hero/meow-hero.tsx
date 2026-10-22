import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MeowEmailForm, type MeowEmailFormProps } from "@foundry/meow-email-form";
import "./meow-hero.css";

export interface MeowHeroProps {
  /** the pill above the title: a short tag (e.g. "New") and a line of news */
  badge?: { tag: string; text: string; href: string };
  /** the big title (three lines on desktop) */
  title: ReactNode;
  /** the paragraph under the title */
  text: ReactNode;
  /** the sign-up bar */
  form: Omit<MeowEmailFormProps, "surface">;
  /** the block of small print under the form */
  fineprint?: ReactNode;
  /** customer names (or logos) for the sliding row under the text */
  logos?: ReactNode[];
  /** the round media on the right (a globe, a 3D scene); a placeholder disc when empty */
  media?: ReactNode;
  className?: string;
}

/** Meow's opening screen: text and sign-up left, a large round media slot right, a marquee below. */
export function MeowHero({ badge, title, text, form, fineprint, logos, media, className }: MeowHeroProps) {
  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 px-gutter pt-[6.5rem] pb-10 lg:grid-cols-[minmax(0,35.5rem)_1fr] lg:gap-x-12 lg:pt-[7.5rem] lg:pb-9">
        <div className="min-w-0">
          {badge && (
            <a
              href={badge.href}
              className="group flex w-full items-center gap-2 rounded-full bg-foreground py-1 pr-3 pl-1 text-background transition-opacity duration-150 hover:opacity-90 motion-reduce:transition-none sm:w-fit"
            >
              <span className="shrink-0 rounded-full bg-primary px-2 py-1 text-[0.6875rem]/none font-bold tracking-[0.02em] text-primary-foreground uppercase">
                {badge.tag}
              </span>
              <span className="min-w-0 flex-1 text-sm/5 font-semibold sm:flex-none">{badge.text}</span>
              <ArrowRight aria-hidden className="size-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={2} />
            </a>
          )}
          <h1 className="mt-4 font-display text-[2rem]/10 font-semibold tracking-[-0.02em] lg:mt-5 lg:text-[3.5rem]/16 lg:tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-5 max-w-[32rem] text-base/6 text-foreground lg:mt-6">{text}</p>
          <MeowEmailForm {...form} surface="frost" className="mt-10 lg:mt-8 lg:max-w-[30.625rem]" />
          {fineprint && <div className="mt-8 max-w-[32rem] text-[0.6875rem]/4 text-foreground/90 [&_a]:underline">{fineprint}</div>}
        </div>

        <div className="mt-12 flex items-start justify-center lg:row-span-2 lg:mt-11 lg:justify-end">
          <div className="relative aspect-square w-[20rem] max-w-full overflow-clip rounded-full lg:w-[32.5rem]">
            {media ?? (
              <div
                aria-hidden
                className="size-full rounded-full bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--glow)_14%,transparent),transparent_68%)] shadow-[inset_0_0_0_2px_color-mix(in_oklab,var(--glow)_70%,transparent),inset_0_0_40px_color-mix(in_oklab,var(--glow)_35%,transparent)]"
              />
            )}
          </div>
        </div>

        {logos?.length ? (
          <div className="meow-hero-marquee mt-8 min-w-0 overflow-clip lg:mt-12">
            <div className="meow-hero-marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center gap-16 pr-16 lg:gap-[5.5rem] lg:pr-[5.5rem]">
                  {logos.map((logo, i) => (
                    <li key={i} className="flex h-10 shrink-0 items-center font-display text-2xl font-semibold tracking-[-0.02em] whitespace-nowrap text-foreground/45">
                      {logo}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
