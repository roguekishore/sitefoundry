import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingCard } from "@foundry/typesomething-card";
import { TypesomethingSectionHeading } from "@foundry/typesomething-section-heading";

export interface TypesomethingFeature {
  /** a small glyph or icon in the grey tile (e.g. "◆" or a lucide icon) */
  icon?: ReactNode;
  title: string;
  text: string;
}

export interface TypesomethingFeaturesProps {
  /** the heading; may hold the wordmark */
  title: ReactNode;
  subtitle?: ReactNode;
  /** the features; three per row on desktop */
  features: TypesomethingFeature[];
  /** anchor id for in-page links */
  id?: string;
  className?: string;
}

/** Feature grid on white: a centred heading and hairline cards, three per row, each with a glyph tile. */
export function TypesomethingFeatures({ title, subtitle, features, id, className }: TypesomethingFeaturesProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-section text-foreground lg:py-28", className)}>
      <div className="mx-auto max-w-page">
        <TypesomethingSectionHeading title={title} subtitle={subtitle} />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title}>
              <TypesomethingCard surface="outline" className="h-full p-6 lg:p-9">
                {f.icon && (
                  <span aria-hidden className="grid size-11 place-items-center rounded-[calc(var(--radius)/2)] bg-muted text-lg leading-none [&_svg]:size-4">
                    {f.icon}
                  </span>
                )}
                <h3 className="mt-5 text-[1.15rem] leading-[1.5] font-normal">{f.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-[1.55] text-foreground/72">{f.text}</p>
              </TypesomethingCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
