import { Fragment } from "react";
import { cn } from "@foundry/foundry-utils";
import "./on-energy-manifesto.css";

export interface OnEnergyManifestoProps {
  /** the statement: one long paragraph, set large and light */
  text: string;
  className?: string;
}

/**
 * A tall yellow panel holding one large, light statement. As it scrolls in, the panel opens
 * from an inset rounded frame to full bleed, and the statement's lines darken from faint to
 * full, top to bottom, with the scroll.
 */
export function OnEnergyManifesto({ text, className }: OnEnergyManifestoProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <section data-on-energy-tone="primary" className={cn("on-energy-manifesto bg-primary text-primary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter py-60 lg:py-[17.25rem]">
        <p className="max-w-[77rem] font-display text-[1.82rem]/[1.142] font-light tracking-[-0.02em] lg:text-5xl/[1.167] lg:tracking-[-0.04em]">
          {words.map((word, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className="on-energy-manifesto-word">{word}</span>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
