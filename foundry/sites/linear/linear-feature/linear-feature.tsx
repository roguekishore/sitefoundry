import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LinearArrowLink } from "@foundry/linear-arrow-link";
import { LinearPlaceholder } from "@foundry/linear-placeholder";

export interface LinearFeatureLink {
  label: string;
  href: string;
}

export interface LinearFeatureProps {
  /** the two-line title (use a <br /> to choose the break) */
  title: ReactNode;
  /** the pale description beside it */
  text: ReactNode;
  /** the "Learn more" link under the description */
  link?: LinearFeatureLink;
  /** the product screenshot or video (~2.36:1); empty shows a placeholder panel */
  media?: ReactNode;
  /** a name for the placeholder, for screen readers */
  mediaLabel?: string;
  /** the small label before the feature index (e.g. "Features") */
  indexLabel?: string;
  /** the feature index: two columns of links (desktop only) */
  index?: [LinearFeatureLink[], LinearFeatureLink[]];
  className?: string;
}

const frame = "mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter";

/** One product area: title and text, a wide fading product window, a small feature index. */
export function LinearFeature({ title, text, link, media, mediaLabel, indexLabel, index, className }: LinearFeatureProps) {
  return (
    <section className={cn("flex flex-col border-t border-border bg-background pb-12 text-foreground lg:pt-32 lg:pb-32", className)}>
      <div className={cn(frame, "w-full lg:grid lg:grid-cols-2 lg:gap-16")}>
        <h2 className="mt-9 font-display text-2xl leading-[1.33] font-[510] tracking-[-0.012em] text-foreground lg:mt-0 lg:text-5xl lg:leading-none lg:tracking-[-0.022em]">
          {title}
        </h2>
        <div className="lg:-mt-1">
          <p className="mt-4 max-w-[35rem] text-[0.9375rem] leading-6 text-muted-foreground lg:mt-0 lg:text-2xl lg:leading-8 lg:text-foreground/85">
            {text}
          </p>
          {link && (
            <LinearArrowLink href={link.href} className="mt-6 lg:mt-12">
              {link.label}
            </LinearArrowLink>
          )}
        </div>
      </div>

      {/* phones: a full-bleed band before the text; desktop: a wide window under it */}
      <div className="-order-1 w-full overflow-clip lg:order-none">
        <div className="mx-auto lg:max-w-[calc(var(--page-width)+2*var(--page-gutter))] lg:px-gutter">
          <div className="relative aspect-[1.25] overflow-clip [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:-mx-5 lg:mt-[4.5rem] lg:aspect-[2.36] lg:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            {media ?? (
              <LinearPlaceholder
                label={mediaLabel}
                className="absolute top-10 bottom-0 left-[1.125rem] w-[150%] lg:inset-0 lg:w-auto"
              />
            )}
          </div>
        </div>
      </div>

      {index && (
        <div className={cn(frame, "mt-32 hidden w-full grid-cols-2 gap-16 lg:grid")}>
          {indexLabel && <p className="text-[0.9375rem] leading-7 text-muted-foreground">{indexLabel}</p>}
          <div className="col-start-2 grid grid-cols-2">
            {index.map((col, c) => (
              <ul key={c} className={cn("flex flex-col", c === 1 && "border-l border-border pl-8")}>
                {col.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[0.9375rem] leading-7 text-foreground/70 transition-colors duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-foreground motion-reduce:transition-none"
                    >
                      {item.label}
                      <Plus aria-hidden className="size-3.5 text-muted-foreground transition-colors duration-150 group-hover:text-foreground motion-reduce:transition-none" strokeWidth={1.75} />
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
