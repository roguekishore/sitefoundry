import { useRef, type ReactNode } from "react";
import { VolumeX } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthIconButton } from "@foundry/instituteofhealth-icon-button";
import "./instituteofhealth-testimonials.css";

export interface InstituteofhealthTestimonial {
  /** who is speaking */
  name: string;
  /** their role, under the name */
  role: string;
  /** the portrait video (or image), cropped like object-fit: cover; empty shows a placeholder */
  media?: ReactNode;
  /** a small round portrait in the name chip; empty shows a placeholder */
  avatar?: ReactNode;
}

export interface InstituteofhealthTestimonialsProps {
  /** small line above the heading */
  eyebrow?: string;
  /** the centred heading */
  heading: string;
  /** the video cards, in order */
  items: InstituteofhealthTestimonial[];
  /** screen-reader labels */
  prevLabel?: string;
  nextLabel?: string;
  muteLabel?: string;
  className?: string;
}

export function InstituteofhealthTestimonials({
  eyebrow,
  heading,
  items,
  prevLabel = "Previous",
  nextLabel = "Next",
  muteLabel = "Sound off",
  className,
}: InstituteofhealthTestimonialsProps) {
  const track = useRef<HTMLUListElement>(null);

  // Arrows move the reel by one card (card width + gap).
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 12), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("ioh-testimonials bg-muted pt-14 pb-16 text-foreground lg:pt-[5.75rem] lg:pb-[6.6rem]", className)}>
      <div className="px-gutter text-center">
        {eyebrow && <p className="text-[0.8775rem] leading-none font-medium tracking-[-0.03em] lg:text-[0.765rem]">{eyebrow}</p>}
        <h2 className="mx-auto mt-4 max-w-[22rem] font-display text-[1.46rem] leading-[1.2] font-medium tracking-[-0.03em] lg:mt-6 lg:max-w-[46rem] lg:text-[3.15rem] lg:leading-none lg:tracking-[-0.035em]">
          {heading}
        </h2>
      </div>

      <ul
        ref={track}
        className="ioh-testimonials-track mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-gutter px-gutter lg:mt-14"
      >
        {items.map((t) => (
          <li key={t.name} className="w-[calc(100vw-2*var(--page-gutter))] shrink-0 snap-start rounded-xl bg-background p-2 sm:w-[24.06rem] lg:p-2.5">
            <div className="relative aspect-[342/440] overflow-clip rounded-lg bg-foreground lg:aspect-[365/488]">
              <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{t.media}</div>
              <span aria-label={muteLabel} role="img" className="absolute top-4 left-4 flex size-9 items-center justify-center rounded-full bg-card text-card-foreground">
                <VolumeX aria-hidden className="size-4" strokeWidth={1.5} />
              </span>
              <div className="absolute inset-x-2.5 bottom-3 flex h-[3.75rem] items-center gap-3 rounded-md bg-background px-2 lg:inset-x-3.5 lg:bottom-1">
                <span className="size-11 shrink-0 overflow-clip rounded-full bg-muted [&>*]:size-full [&>*]:object-cover">{t.avatar}</span>
                <span className="min-w-0 leading-[1.05] tracking-[-0.03em]">
                  <span className="block truncate text-[0.975rem] font-medium lg:text-[0.765rem]">{t.name}</span>
                  <span className="block truncate text-[0.8775rem] font-medium text-muted-foreground lg:text-[0.72rem]">{t.role}</span>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Progress line (follows the reel's scroll) and the arrows. */}
      <div className="mt-5 flex flex-col items-center gap-4 px-gutter lg:mt-11 lg:flex-row lg:justify-between">
        <div className="relative h-0.5 w-full overflow-clip bg-foreground/10 lg:w-[27rem]">
          <div className="ioh-testimonials-fill absolute inset-0 origin-left bg-foreground/20" />
        </div>
        <div className="flex gap-2">
          <InstituteofhealthIconButton icon="prev" label={prevLabel} size="md" onClick={() => step(-1)} />
          <InstituteofhealthIconButton icon="next" label={nextLabel} size="md" onClick={() => step(1)} />
        </div>
      </div>
    </section>
  );
}
