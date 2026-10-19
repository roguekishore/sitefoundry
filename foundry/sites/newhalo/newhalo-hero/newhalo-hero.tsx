import { useEffect, useRef, type ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloButton } from "@foundry/newhalo-button";
import { NewhaloMedia } from "@foundry/newhalo-media";
import "./newhalo-hero.css";

export interface NewhaloHeroProps {
  /** the title at the bottom right (bottom left on phones) */
  title: string;
  /** md: one 64px line (landing) · xl: a 100px block set further right (product page) */
  titleSize?: "md" | "xl";
  /** the giant word along the bottom left, desktop only; leave out to hide it */
  wordmark?: string;
  /** the orange play button: follows the cursor on desktop, sits under the title on phones */
  play?: { label: string; href?: string };
  /** the photo or video filling the panel. Empty shows the placeholder. */
  media?: ReactNode;
  /** placeholder look: muted panel or a warm glow wash */
  tone?: "muted" | "glow";
  className?: string;
}

/**
 * The first screen: one black panel inset from the window edge and exactly as tall as the
 * window, filled by a media slot that drifts down as you scroll. A giant wordmark sits on the
 * bottom left, the title bottom right; an orange play button trails the cursor.
 */
export function NewhaloHero({ title, titleSize = "md", wordmark, play, media, tone = "muted", className }: NewhaloHeroProps) {
  const panel = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panel.current;
    const btn = button.current;
    if (!el || !btn || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      btn.style.transform = `translate(${e.clientX - r.left - r.width / 2}px, ${e.clientY - r.top - r.height / 2}px)`;
    };
    const reset = () => (btn.style.transform = "");
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section className={cn("dark h-svh p-1.5 sm:p-2.5", className)}>
      <div ref={panel} className="relative h-full overflow-clip rounded-lg bg-background text-foreground">
        <NewhaloMedia tone={tone} className="absolute inset-x-0 -top-28 bottom-0" innerClassName="newhalo-hero-drift">
          {media}
        </NewhaloMedia>

        {wordmark && (
          <span aria-hidden className="absolute bottom-[1.6rem] left-7 hidden font-display text-[17.5rem] leading-[0.8] tracking-[-0.03em] select-none lg:block">
            {wordmark}
          </span>
        )}

        <div
          className={cn(
            "absolute inset-x-[0.9rem] bottom-[0.9rem] flex flex-col items-start gap-2.5 lg:inset-x-auto lg:right-8 lg:bottom-[1.1rem]",
            titleSize === "xl" ? "lg:left-[67%]" : "lg:left-[58.8%]",
          )}
        >
          <h1 className={cn("font-display leading-none tracking-[-0.01em]", titleSize === "xl" ? "text-[3.1rem] lg:text-[6.25rem] lg:leading-[0.95]" : "text-[2.5rem] lg:text-[4rem]")}>
            {title}
          </h1>
          {play && <NewhaloButton label={play.label} href={play.href} icon={<Play strokeWidth={1.25} />} className="lg:hidden" />}
        </div>

        {play && (
          <div className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-1/2 lg:block">
            <div ref={button} className="newhalo-hero-play">
              <NewhaloButton label={play.label} href={play.href} icon={<Play strokeWidth={1.25} />} className="pointer-events-auto" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
