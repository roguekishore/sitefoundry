import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseHeading, type SupabaseHeadingPart } from "@foundry/supabase-heading";
import { SupabasePlaceholder } from "@foundry/supabase-placeholder";

export interface SupabaseTemplate {
  /** a small mark above the title (24px) */
  icon?: ReactNode;
  title: string;
  /** one or two lines; longer text is cut with an ellipsis */
  description: string;
  href: string;
}

export interface SupabaseFeaturedTemplate extends SupabaseTemplate {
  /** the preview screenshot inside the small browser window */
  media?: ReactNode;
  /** screen-reader label for the empty preview slot */
  mediaLabel?: string;
}

export interface SupabaseTemplatesProps {
  /** the two-tone title (grey phrase, then ink) */
  title: SupabaseHeadingPart[];
  /** the underlined link beside (desktop) or under (phones) the title */
  link?: { label: string; href: string };
  /** two large cards with a preview window */
  featured: SupabaseFeaturedTemplate[];
  /** the row of small cards under them (four fill it) */
  templates: SupabaseTemplate[];
  className?: string;
}

const cardClasses =
  "flex flex-col overflow-clip rounded-xl border border-border bg-card p-6 transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/15 motion-reduce:transition-none";

function CardText({ icon, title, description }: Pick<SupabaseTemplate, "icon" | "title" | "description">) {
  return (
    <>
      {icon && <span className="flex h-6 items-center text-foreground [&_svg]:size-6 [&_svg]:stroke-[1.75]">{icon}</span>}
      <h3 className="mt-3 text-sm text-foreground">{title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground lg:text-[0.9375rem] lg:leading-5">{description}</p>
    </>
  );
}

/** A starter-template gallery: a two-tone title with a link, two wide cards with browser previews, four small cards. */
export function SupabaseTemplates({ title, link, featured, templates, className }: SupabaseTemplatesProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter py-24">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-8">
          <SupabaseHeading parts={title} stack="always" />
          {link && (
            <a href={link.href} className="mt-4 inline-block text-sm text-foreground/80 underline underline-offset-2 transition-colors duration-150 hover:text-foreground lg:mt-0 lg:shrink-0">
              {link.label}
            </a>
          )}
        </div>

        <ul className="mt-16 grid gap-3 lg:grid-cols-2">
          {featured.map((item) => (
            <li key={item.title}>
              <a href={item.href} className={cn(cardClasses, "h-[24.5rem] pb-0 lg:h-[23.375rem]")}>
                <CardText {...item} />
                <div className="mt-9 flex flex-1 flex-col overflow-clip rounded-t-lg border border-b-0 border-border bg-background">
                  <div className="flex h-[1.875rem] shrink-0 items-center gap-1.5 border-b border-border px-3" aria-hidden>
                    <span className="size-2.5 rounded-full bg-foreground/12" />
                    <span className="size-2.5 rounded-full bg-foreground/12" />
                    <span className="size-2.5 rounded-full bg-foreground/12" />
                  </div>
                  <div className="flex-1">{item.media ?? <SupabasePlaceholder label={item.mediaLabel} />}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((item) => (
            <li key={item.title}>
              <a href={item.href} className={cn(cardClasses, "h-[11.125rem] justify-end pb-10")}>
                <CardText {...item} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
