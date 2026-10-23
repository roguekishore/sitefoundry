import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspacePlaceholder } from "@foundry/vastspace-placeholder";
import "./vastspace-hero.css";

export interface VastspaceHeroProps {
  /** the headline; it breaks word by word and each word rises in on load */
  title: string;
  /** the full-bleed background: an <img>, a <video>, or any node that fills its box (it is cropped like object-fit: cover) */
  media?: ReactNode;
  className?: string;
}

export function VastspaceHero({ title, media, className }: VastspaceHeroProps) {
  const words = title.split(" ");
  return (
    <section className={cn("relative h-svh overflow-clip bg-muted text-highlight-foreground", className)}>
      <div className="vastspace-hero-media absolute inset-x-0 -top-[20%] h-[120%] [&>*]:size-full [&>*]:object-cover">
        {media ?? <VastspacePlaceholder className="size-full" />}
      </div>
      <div className="relative flex h-full items-end px-gutter pb-16 md:pb-[6.875rem]">
        <h1 className="max-w-[8em] font-display text-5xl/[0.9] font-semibold tracking-[-0.055em] md:text-[4.75rem]/[0.86]">
          {words.map((w, i) => (
            <span key={i}>
              <span className="vastspace-hero-word" style={{ "--i": i } as CSSProperties}>
                {w}
              </span>{" "}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
