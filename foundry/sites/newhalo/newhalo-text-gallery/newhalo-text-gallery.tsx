import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloTextGalleryFeature {
  /** the line of text */
  label: string;
  /** a small line icon before it (e.g. a lucide icon); leave out for a plain list */
  icon?: ReactNode;
}

export interface NewhaloTextGallerySlide {
  /** the photo; empty shows the placeholder */
  media?: ReactNode;
  /** screen-reader name of its thumbnail button */
  label: string;
}

export interface NewhaloTextGalleryProps {
  /** the 64px heading */
  title: string;
  /** one or more paragraphs under it */
  body: string[];
  /** the hairline-separated list */
  features: NewhaloTextGalleryFeature[];
  /** the orange button under the list; leave out to hide it */
  cta?: { label: string; href: string };
  /** the square pictures on the right; two or more add a thumbnail strip to switch between them */
  slides: NewhaloTextGallerySlide[];
  className?: string;
}

/**
 * Text on the left (heading, paragraphs, a hairline list with small icons, an orange button),
 * a big square picture on the right with a column of thumbnails. The heading wipes in, the
 * list lines draw from the left, the gallery blooms in and the picture drifts in its frame.
 */
export function NewhaloTextGallery({ title, body, features, cta, slides, className }: NewhaloTextGalleryProps) {
  const [active, setActive] = useState(0);
  const thumbs = slides.length > 1;

  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-[4.4rem] px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <h2 className={cn("font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none", newhaloReveal("sweep"))}>{title}</h2>
          <div className={cn("mt-2 space-y-4 text-[0.91rem] leading-normal lg:mt-5 lg:text-base", newhaloReveal("fade"))}>
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 lg:mt-10">
            {features.map((f, i) => (
              <li key={f.label} className={cn("relative flex min-h-11 items-center gap-6 py-2.5 text-base leading-tight", newhaloReveal("fade"))} style={newhaloRevealStyle(i)}>
                <span aria-hidden className={cn("absolute inset-x-0 top-0 h-px bg-foreground", newhaloReveal("draw"))} style={newhaloRevealStyle(i)} />
                {f.icon && <span className="flex size-5 shrink-0 items-center [&_svg]:size-5 [&_svg]:stroke-[1.25]">{f.icon}</span>}
                {f.label}
              </li>
            ))}
            <li aria-hidden className={cn("h-px bg-foreground", newhaloReveal("draw"))} style={newhaloRevealStyle(features.length)} />
          </ul>
          {cta && <NewhaloButton label={cta.label} href={cta.href} className="mt-8 lg:mt-10" />}
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:mt-0 lg:grid lg:grid-cols-subgrid">
          <div className={cn("relative aspect-square overflow-clip rounded-lg lg:col-span-6", newhaloReveal("bloom"))}>
            {slides.map((s, i) => (
              <NewhaloMedia
                key={s.label}
                className={cn("absolute inset-0 transition-opacity duration-600 ease-[cubic-bezier(0.66,0,0.34,1)] motion-reduce:transition-none", i !== active && "opacity-0")}
                innerClassName={cn("-inset-y-[34px]", newhaloReveal("drift"))}
              >
                {s.media}
              </NewhaloMedia>
            ))}
          </div>
          {thumbs && (
            <ul className="mt-4 flex justify-center gap-1.5 lg:col-span-1 lg:mt-0 lg:flex-col lg:justify-center lg:gap-2.5">
              {slides.map((s, i) => (
                <li key={s.label} className={newhaloReveal("zoom")} style={newhaloRevealStyle(i)}>
                  <button
                    type="button"
                    aria-label={s.label}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "block size-15 rounded-md p-0.5 transition-opacity duration-300 lg:size-24",
                      i === active ? "ring-2 ring-primary ring-inset" : "opacity-40 hover:opacity-70",
                    )}
                  >
                    <NewhaloMedia className="size-full rounded-sm">{s.media}</NewhaloMedia>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
