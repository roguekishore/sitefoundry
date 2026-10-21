import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";
import "./storeyarchitecture-intro.css";

export interface StoreyarchitectureIntroProps {
  /** two short statements, set side by side in the right half on desktop */
  statements: string[];
  /** the scene behind the band (the original's WebGL tiles); empty shows a faint surface */
  scene?: ReactNode;
  /** the small paper card at the top-right (desktop) */
  preview?: {
    /** the mono link under the window */
    label: string;
    href: string;
    /** what shows in the dark window; empty shows the window alone */
    media?: ReactNode;
  };
  className?: string;
}

export function StoreyarchitectureIntro({ statements, scene, preview, className }: StoreyarchitectureIntroProps) {
  return (
    <section
      className={cn(
        "storeyarchitecture-intro relative min-h-[110svh] font-[450] bg-foreground px-gutter pt-[12vw] text-background sm:min-h-[120svh] sm:pt-[2vw]",
        className,
      )}
    >
      <div aria-hidden={!scene} className="absolute inset-0 overflow-clip bg-background/[0.03] [&>*]:size-full">
        {scene}
      </div>

      <div className="relative grid grid-cols-6 gap-x-gutter gap-y-[12.5vw] text-[4.3vw] leading-[1.2] tracking-[-0.02em] sm:grid-cols-12 sm:text-[1.6vw]">
        {statements.map((text, i) => (
          <StoreyarchitectureRise key={text} step={i} className={cn("col-span-6 sm:col-span-3", i === 0 ? "sm:col-start-7" : "sm:col-start-10")}>
            <p>{text}</p>
          </StoreyarchitectureRise>
        ))}
      </div>

      {preview && (
        <div className="pointer-events-none absolute inset-y-0 right-gutter hidden w-[23.26vw] py-[1.4vw] sm:block">
          <a
            href={preview.href}
            className="storeyarchitecture-intro-card group/card pointer-events-auto sticky top-[1.4vw] block bg-card p-[0.83vw] text-card-foreground"
          >
            <span className="block aspect-[311/214] overflow-clip bg-foreground [&>*]:size-full [&>*]:object-cover">{preview.media}</span>
            <span className="flex justify-center pt-[1.4vw] pb-[1.2vw]">
              <span className="border-b border-current pb-[0.2vw] font-mono text-[1.1vw] leading-none tracking-[-0.06em] uppercase transition-opacity duration-200 group-hover/card:opacity-60">
                {preview.label}
              </span>
            </span>
          </a>
        </div>
      )}
    </section>
  );
}
