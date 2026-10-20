import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./hhhusher-v2-reveal.css";

/** fade: opacity 0→1 · rise: fade + 40px lift · drift: a ±72px parallax slide, scrubbed */
export type HhhusherV2RevealEffect = "fade" | "rise" | "drift";

/** The class for an effect, to put straight on an element without a wrapper. */
export function hhhusherV2Reveal(effect: HhhusherV2RevealEffect) {
  return `hhhusher-v2-reveal-${effect}`;
}

/** Inline style for a staggered item (step 0, 1, 2 …), a rise distance and/or a drift distance, in px. */
export function hhhusherV2RevealStyle(step = 0, rise?: number, drift?: number): CSSProperties {
  return {
    "--hh-step": step,
    ...(rise !== undefined && { "--hh-rise": `${rise}px` }),
    ...(drift !== undefined && { "--hh-drift": `${drift}px` }),
  } as CSSProperties;
}

export interface HhhusherV2RevealTextProps {
  /** the heading or tagline; it is split into words so each line rises on its own */
  text: string;
  /** the element to render */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
}

/**
 * Text whose lines rise and fade in as they come up the window, top line first, the way the
 * original's split-line headings do. Pure CSS; the static HTML is the plain sentence.
 */
export function HhhusherV2RevealText({ text, as: Tag = "p", className }: HhhusherV2RevealTextProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="hhhusher-v2-reveal-word inline-block">{word}</span>
        </Fragment>
      ))}
    </Tag>
  );
}

export interface HhhusherV2RevealProps {
  /** what happens as it enters the window */
  effect?: HhhusherV2RevealEffect;
  /** stagger position in a list: each step starts a little later */
  step?: number;
  /** for rise: how far it travels, in px (default 40) */
  rise?: number;
  /** for drift: how far the content slides each way, in px (default 72) */
  drift?: number;
  /** the element to render */
  as?: "div" | "li" | "span" | "p";
  children?: ReactNode;
  className?: string;
}

/** Wraps content in a CSS scroll-driven reveal. Static HTML and old browsers show it in place. */
export function HhhusherV2Reveal({ effect = "fade", step = 0, rise, drift, as: Tag = "div", children, className }: HhhusherV2RevealProps) {
  return (
    <Tag className={cn(hhhusherV2Reveal(effect), className)} style={hhhusherV2RevealStyle(step, rise, drift)}>
      {children}
    </Tag>
  );
}
