import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";

export interface NewhaloDownloadsProps {
  /** the 64px heading in the sticky column */
  title: string;
  /** the packs in the sticky column: a 24px name, a small caption, an orange download button */
  packs: { title: string; caption: string; href: string; buttonLabel: string }[];
  /** the big pictures on the right, each with its own download tile */
  images: { media?: ReactNode; href: string; label: string }[];
  className?: string;
}

/**
 * A press-kit section on paper: on the left a sticky column with a heading and white download
 * cards; on the right a stack of wide dark pictures with 8px corners, each with a small orange
 * download tile in its corner. Pictures bloom in as they scroll into view.
 */
export function NewhaloDownloads({ title, packs, images, className }: NewhaloDownloadsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-12 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{title}</h2>
          <ul className="mt-6 grid gap-2.5 lg:mt-7">
            {packs.map((p) => (
              <li key={p.title} className="rounded-lg bg-card p-5 text-card-foreground">
                <h3 className="font-display text-2xl leading-[1.1]">{p.title}</h3>
                <p className="mt-2 text-xs">{p.caption}</p>
                <a href={p.href} download className="group/dl mt-8 flex h-10 items-center justify-between rounded-sm bg-primary pl-[0.9375rem] text-base text-primary-foreground transition-colors duration-300 hover:text-background">
                  {p.buttonLabel}
                  <span aria-hidden className="mr-1 flex size-8 items-center justify-center rounded-sm bg-foreground/10">
                    <Download strokeWidth={1.25} className="size-4 transition-transform duration-300 group-hover/dl:translate-y-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-2.5 lg:col-span-7 lg:col-start-6">
          {images.map((img) => (
            <li key={img.href} className={cn("relative", newhaloReveal("bloom"))}>
              <NewhaloMedia tone="deep" className="aspect-[1.78] rounded-lg">
                {img.media}
              </NewhaloMedia>
              <a
                href={img.href}
                download
                aria-label={img.label}
                className="absolute top-2.5 right-2.5 flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 hover:text-background"
              >
                <Download aria-hidden strokeWidth={1.25} className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
