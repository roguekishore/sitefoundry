import { cn } from "@foundry/foundry-utils";
import "./reflect-starfield.css";

export interface ReflectStarfieldProps {
  /** how many stars (half steady, half twinkling) */
  count?: number;
  /** side of the square field in px; it is centred on the parent and cropped by it */
  size?: number;
  /** another seed gives another sky */
  seed?: number;
  /** star brightness, 0–100 (% of the ink colour) */
  strength?: number;
  className?: string;
}

/** A small seeded random generator (mulberry32), so the same seed always draws the same sky. */
function random(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Every star is one box-shadow of a 1px dot, like a pin-hole sky. */
function stars(count: number, size: number, seed: number, strength: number) {
  const next = random(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(next() * size);
    const y = Math.round(next() * size);
    const big = next() > 0.8 ? 0.5 : 0;
    const alpha = Math.round(strength * (0.35 + next() * 0.65));
    shadows.push(`${x}px ${y}px 0 ${big}px color-mix(in oklab, var(--foreground) ${alpha}%, transparent)`);
  }
  return shadows.join(",");
}

/** Slowly turning, twinkling stars behind a section. */
export function ReflectStarfield({ count = 90, size = 1400, seed = 7, strength = 70, className }: ReflectStarfieldProps) {
  const half = Math.round(count / 2);
  const layer = "absolute top-0 left-0 size-px rounded-full";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-clip", className)}>
      <div
        className="reflect-starfield-fade absolute top-1/2 left-1/2"
        style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      >
        <div className="reflect-starfield-turn absolute inset-0">
          <span className={layer} style={{ boxShadow: stars(half, size, seed, strength) }} />
          <span
            className={cn(layer, "reflect-starfield-twinkle")}
            style={{ boxShadow: stars(count - half, size, seed + 101, strength) }}
          />
        </div>
      </div>
    </div>
  );
}
