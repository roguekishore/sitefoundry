import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusProductFeature {
  /** a small line icon (20px) */
  icon?: ReactNode;
  /** the one-line feature */
  label: string;
}

export interface HalodentalOpusProductSlide {
  /** the photo (or video) for this view; empty → a dark placeholder */
  media?: ReactNode;
  /** screen-reader name for the thumbnail */
  label: string;
}

export interface HalodentalOpusProductProps {
  /** the heading */
  title: string;
  /** the paragraph under it */
  text?: ReactNode;
  /** the ruled list of features */
  features: HalodentalOpusProductFeature[];
  /** the orange button under the list */
  cta?: { label: string; href: string };
  /** the views of the product: the big photo shows the active one, thumbnails show all */
  slides: HalodentalOpusProductSlide[];
  /** which slide is shown large (0-based) */
  active?: number;
  className?: string;
}

/**
 * Halo Dental's product section: heading, paragraph, a list ruled with 1px ink lines and an
 * orange button on the left (4 columns); a near-square photo (6 columns) with a rail of
 * square thumbnails on the right, the active one ringed in orange. On phones everything
 * stacks and the thumbnails sit in a centred row under the photo.
 */
export function HalodentalOpusProduct({ title, text, features, cta, slides, active = 0, className }: HalodentalOpusProductProps) {
  const current = slides[active];
  return (
    <section className={cn("font-[450] bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 gap-x-5 gap-y-[4.5rem] px-gutter lg:grid-cols-12">
        <div className="lg:col-span-4">
          <HalodentalOpusHeading title={title} />
          {text && <p className="mt-3 text-[0.9375rem] leading-[1.45] lg:mt-5 lg:text-base lg:leading-normal">{text}</p>}
          <ul className="mt-10 border-b border-foreground">
            {features.map((f) => (
              <li key={f.label} className="flex h-[2.6875rem] items-center gap-5 border-t border-foreground text-base leading-tight lg:h-11">
                <span aria-hidden className="flex w-5 shrink-0 justify-center [&>svg]:size-5">
                  {f.icon}
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          {cta && (
            <HalodentalOpusButton href={cta.href} className="mt-10">
              {cta.label}
            </HalodentalOpusButton>
          )}
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:grid lg:grid-cols-7 lg:items-center lg:gap-x-5">
          <div className="aspect-[670/655] overflow-hidden rounded-t-lg bg-foreground lg:col-span-6">
            {current?.media ?? (
              // placeholder for the product photo: a soft light on a dark backdrop
              <div aria-hidden className="size-full bg-radial-[ellipse_40%_45%_at_55%_40%] from-background/22 via-background/6 to-transparent" />
            )}
          </div>
          {slides.length > 1 && (
            <ul className="mt-3.5 flex justify-center gap-1 lg:mt-0 lg:flex-col lg:gap-1.5">
              {slides.map((s, i) => (
                <li
                  key={s.label}
                  aria-label={s.label}
                  aria-current={i === active || undefined}
                  className={cn(
                    "relative size-[3.875rem] overflow-hidden rounded-lg lg:aspect-square lg:size-auto lg:w-full",
                    i === active ? "bg-foreground" : "bg-muted opacity-60",
                  )}
                >
                  {s.media}
                  {/* the active thumbnail's orange ring sits on top of its image */}
                  {i === active && <span aria-hidden className="absolute inset-0 rounded-lg ring-2 ring-primary ring-inset" />}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
