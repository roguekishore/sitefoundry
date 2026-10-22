import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoArrowLink } from "@foundry/neko-arrow-link";
import "./neko-mission.css";

export interface NekoMissionProps {
  /** the statement; its words light up one by one */
  text: string;
  /** the arrow link under it */
  link?: { label: string; href: string };
  /** colour the band at the top fades from: highlight (after a lemon section) or none */
  fadeFrom?: "highlight" | "none";
  className?: string;
}

export function NekoMission({ text, link, fadeFrom = "highlight", className }: NekoMissionProps) {
  const words = text.split(" ");
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div aria-hidden className={cn("h-section", fadeFrom === "highlight" && "bg-linear-to-b from-highlight to-background")} />
      <div className="mx-auto max-w-page px-gutter lg:grid lg:grid-cols-[50.45%_1fr]">
        <div className="lg:col-start-2">
          <h2 className="neko-mission-text max-w-[36rem] font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:text-[4.25rem] lg:leading-[1.18]">
            {words.map((w, i) => (
              <span key={i}>
                {i > 0 && " "}
                <span
                  className="neko-mission-word"
                  style={{ "--nm-range": `cover ${180 + i * 40}px cover ${280 + i * 40}px` } as CSSProperties}
                >
                  {w}
                </span>
              </span>
            ))}
          </h2>
          {link && <NekoArrowLink label={link.label} href={link.href} className="mt-10 lg:mt-12" />}
        </div>
      </div>
    </section>
  );
}
