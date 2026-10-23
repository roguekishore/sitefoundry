import type { ReactNode } from "react";
import { CirclePlay } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrexButton } from "@foundry/brex-button";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexHeroProps {
  /** the headline (the line break comes from the width) */
  title: string;
  /** the grey sentence under it */
  subtitle: string;
  /** the email card */
  form: {
    /** the field's placeholder */
    placeholder: string;
    /** screen-reader label for the field */
    label: string;
    /** the orange button */
    submitLabel: string;
    /** where the form posts to */
    action?: string;
  };
  /** the 'watch' link under the form */
  watch: { label: string; href: string };
  /** the picture: bleeds off the right and bottom on desktop, full-width band on phones. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Brex's first screen: text left, a large product photo bleeding off the right. */
export function BrexHero({ title, subtitle, form, watch, media, className }: BrexHeroProps) {
  return (
    <section className={cn("relative overflow-clip bg-secondary lg:flex lg:min-h-[93svh] lg:items-center", className)}>
      <div className="relative z-10 mx-auto w-full max-w-page px-gutter pt-8 lg:px-[calc(var(--page-gutter)*3)] lg:py-16">
        <div className="max-w-[40.5rem]">
          <h1 className="font-display text-4xl/9 font-semibold tracking-[-0.03em] text-foreground lg:text-7xl/[4.5rem]">{title}</h1>
          <p className="mt-3 max-w-[31rem] text-base/6 text-muted-foreground lg:mt-4 lg:text-xl/6 lg:tracking-[-0.02em]">{subtitle}</p>
          <form action={form.action} className="mt-6 flex h-[3.625rem] w-full max-w-96 items-center gap-2 rounded-xl border border-border bg-card p-2 pl-4 lg:mt-9">
            <input
              type="email"
              name="email"
              aria-label={form.label}
              placeholder={form.placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <BrexButton type="submit" size="md">
              {form.submitLabel}
            </BrexButton>
          </form>
          <a
            href={watch.href}
            className="mt-6 inline-flex items-center gap-2 text-base text-foreground transition-colors duration-150 ease-linear hover:text-highlight motion-reduce:transition-none lg:mt-6 lg:text-primary"
          >
            <CirclePlay aria-hidden className="size-4" strokeWidth={1.5} />
            {watch.label}
          </a>
        </div>
      </div>

      <div className="relative mt-5 h-[16.125rem] lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:h-[72%] lg:w-[49%]">
        {media ?? <BrexPlaceholder tone="photo" className="size-full lg:rounded-tl-[3.5rem]" />}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-glow/15 to-transparent" />
    </section>
  );
}
