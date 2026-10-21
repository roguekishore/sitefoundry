import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureButton } from "@foundry/storeyarchitecture-button";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";
import "./storeyarchitecture-studio.css";

export interface StoreyarchitectureStudioProps {
  /** the large centred statement, one string per line */
  heading: string[];
  /** the wide white button under it */
  cta: { label: string; href: string };
  /** two paragraphs side by side at the bottom-right */
  paragraphs: string[];
  /** the full-bleed photo (object-cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function StoreyarchitectureStudio({ heading, cta, paragraphs, media, className }: StoreyarchitectureStudioProps) {
  return (
    <section
      className={cn(
        "storeyarchitecture-studio relative h-[160svh] overflow-clip bg-foreground px-gutter pt-[39svh] font-[450] text-background dark:bg-background dark:text-foreground",
        className,
      )}
    >
      <div className="storeyarchitecture-studio-media absolute inset-x-0 top-[-20%] h-[120%] bg-glow [&>*]:size-full [&>*]:object-cover">{media}</div>

      <div className="relative flex flex-col items-center tracking-[-0.02em]">
        <StoreyarchitectureRise as="h2" className="text-center text-[15vw] leading-none font-medium sm:text-[8vw]">
          {heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </StoreyarchitectureRise>
        <StoreyarchitectureRise step={1} className="mt-[14vw] sm:mt-[6.2vw]">
          <StoreyarchitectureButton href={cta.href} variant="light">
            {cta.label}
          </StoreyarchitectureButton>
        </StoreyarchitectureRise>
      </div>

      <div className="absolute inset-x-gutter bottom-[28vw] grid grid-cols-6 gap-x-gutter gap-y-[10vw] text-[4.3vw] sm:bottom-[11vw] leading-[1.2] tracking-[-0.02em] sm:grid-cols-12 sm:text-[1.6vw]">
        {paragraphs.map((text, i) => (
          <StoreyarchitectureRise key={text} step={i} className={cn("col-span-4 col-start-3 sm:col-span-3", i === 0 ? "sm:col-start-7" : "sm:col-start-10")}>
            <p>{text}</p>
          </StoreyarchitectureRise>
        ))}
      </div>
    </section>
  );
}
