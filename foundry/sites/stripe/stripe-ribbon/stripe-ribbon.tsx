import { cn } from "@foundry/foundry-utils";
import "./stripe-ribbon.css";

export interface StripeRibbonProps {
  /**
   * sweep: one broad ribbon falling from the top centre to the right edge (the hero) ·
   * arc: a fan of ribbons rising from the bottom like stage light (banners, panels)
   */
  shape?: "sweep" | "arc";
  /** how many fibres make up the ribbon; fewer is lighter to render */
  fibres?: number;
  /** let the ribbon drift slowly (off under reduced motion) */
  animate?: boolean;
  className?: string;
}

// Colour across the ribbon's width, from its inner edge to its outer edge. Theme colours only:
// chart-5 (sky), chart-1 (orange), chart-2 (pink), chart-3 (violet).
const STOPS = ["--chart-5", "--chart-3", "--chart-1", "--chart-1", "--chart-2", "--chart-2", "--chart-3"];

function colourAt(k: number): string {
  const pos = k * (STOPS.length - 1);
  const i = Math.min(Math.floor(pos), STOPS.length - 2);
  const mix = Math.round((pos - i) * 100);
  return `color-mix(in oklab, var(${STOPS[i + 1]}) ${mix}%, var(${STOPS[i]}))`;
}

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

interface Fibre {
  d: string;
  colour: string;
  width: number;
  opacity: number;
}

/** One fibre of the sweep: a cubic curve from the top centre to the right edge. */
function sweep(n: number): Fibre[] {
  return Array.from({ length: n }, (_, i) => {
    const k = i / (n - 1);
    const p0 = [lerp(470, 1040, k), -80];
    const c1 = [lerp(540, 1080, k), lerp(240, 170, k)];
    const c2 = [lerp(760, 1120, k), lerp(480, 360, k)];
    const p3 = [1320, lerp(560, 900, k)];
    const wobble = Math.sin(i * 12.9898) * 0.5 + 0.5; // stable pseudo-random, the fibre texture
    return {
      d: `M${p0} C${c1} ${c2} ${p3}`,
      colour: colourAt(k),
      width: lerp(9, 16, wobble),
      opacity: lerp(0.55, 0.95, wobble),
    };
  });
}

/** Fibres of the arc: nested curves rising from the bottom and fanning out, like stage light. */
function arc(n: number): Fibre[] {
  return Array.from({ length: n }, (_, i) => {
    const k = i / (n - 1);
    const r = lerp(260, 900, k);
    const wobble = Math.sin(i * 78.233) * 0.5 + 0.5;
    return {
      d: `M${-120} ${900 - r * 0.15} C${300} ${820 - r * 0.9} ${900} ${820 - r * 0.9} ${1320} ${900 - r * 0.15}`,
      colour: colourAt(k),
      width: lerp(6, 14, wobble),
      opacity: lerp(0.45, 0.9, wobble),
    };
  });
}

/**
 * Stripe's flowing ribbon of light, drawn as many thin SVG strokes in the theme's chart
 * colours. Fills its box (position it with className); the sweep anchors to the top right.
 */
export function StripeRibbon({ shape = "sweep", fibres = 64, animate = true, className }: StripeRibbonProps) {
  const lines = shape === "sweep" ? sweep(fibres) : arc(fibres);
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio={shape === "sweep" ? "xMaxYMin slice" : "xMidYMax slice"}
      className={cn("pointer-events-none block", className)}
    >
      <defs>
        <filter id={`stripe-ribbon-soft-${shape}`} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        className={cn("stripe-ribbon-drift origin-center", animate && "animate-[stripe-ribbon-drift_14s_ease-in-out_infinite_alternate] motion-reduce:animate-none")}
      >
        <g filter={`url(#stripe-ribbon-soft-${shape})`}>
          {lines.map((f, i) => (
            <path key={i} d={f.d} style={{ stroke: f.colour }} strokeWidth={f.width} strokeOpacity={f.opacity} />
          ))}
        </g>
        {/* fine light threads over the colour: the fibrous sheen */}
        {lines.map((f, i) =>
          i % 3 === 0 ? (
            <path key={`t${i}`} d={f.d} className="stroke-background" strokeWidth={0.6} strokeOpacity={0.22} />
          ) : null,
        )}
      </g>
    </svg>
  );
}
