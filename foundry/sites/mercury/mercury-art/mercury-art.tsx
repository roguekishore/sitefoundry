import { cn } from "@foundry/foundry-utils";

export type MercuryArtVariant = "valley" | "studio" | "lens" | "beam" | "globe" | "ripple" | "bars" | "print" | "toggles";

export interface MercuryArtBar {
  /** the figure above the bar (e.g. "$5M") */
  value: string;
  /** what the bar stands for */
  label: string;
  /** bar height, 0–1 of the panel */
  height: number;
  /** the lit, glowing bar (the one you're proud of) */
  lit?: boolean;
}

export interface MercuryArtProps {
  /**
   * valley: misty hills at dawn (hero backdrop) · studio: a soft, blurred sunlit room
   * (behind quotes) · lens: overlapping frosted circles · beam: a light rising from a
   * glowing horizon · globe: a line-drawn globe in soft paper rings · ripple: a dish of
   * rings with a typing indicator · bars: two coverage bars, one lit · print: a frosted
   * fingerprint · toggles: three soft switches, the last one on
   */
  variant: MercuryArtVariant;
  /** only for "bars": the bars and their labels */
  bars?: MercuryArtBar[];
  className?: string;
}

// Surfaces shared by the panels. Light panels use chart-5 (warm paper) and chart-3 (mist);
// "ink" is the dark text colour on them in both modes.
const slate = "bg-[color-mix(in_oklab,var(--foreground)_16%,var(--background))]";
const ink = "text-foreground dark:text-background";
const mixBg = (token: string, pct: number) => `color-mix(in oklab, var(--${token}) ${pct}%, var(--background))`;

/** One hill: lit along its ridge line, falling into shade below (aerial perspective). */
function Ridge({ id, d, top, bottom }: { id: string; d: string; top: string; bottom: string }) {
  return (
    <>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: top }} />
          <stop offset="1" style={{ stopColor: bottom }} />
        </linearGradient>
      </defs>
      <path fill={`url(#${id})`} d={d} />
    </>
  );
}

function Valley() {
  return (
    <div className="absolute inset-0 bg-linear-to-b from-[color-mix(in_oklab,var(--chart-3)_42%,var(--background))] via-[color-mix(in_oklab,var(--chart-3)_62%,var(--background))] via-45% to-[color-mix(in_oklab,var(--chart-3)_50%,var(--background))]">
      {/* dawn light behind the far hills */}
      <div className="absolute top-[10%] left-[14%] h-[42%] w-[58%] rounded-full bg-chart-2/60 blur-3xl" />
      <div className="absolute top-[20%] right-[6%] h-[26%] w-[32%] rounded-full bg-chart-3/50 blur-3xl" />
      <svg aria-hidden viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full">
        <Ridge id="mv-far" top={mixBg("chart-3", 62)} bottom={mixBg("chart-3", 40)} d="M0 420C180 370 320 352 470 392s250 50 350 20 280-84 440-44 180 22 180 12V900H0Z" />
        <Ridge id="mv-midl" top={mixBg("chart-4", 42)} bottom={mixBg("chart-4", 20)} d="M0 456c150-30 300-12 430 30 110 36 200 80 270 130 30 22 50 46 64 74V900H0Z" />
        <Ridge id="mv-midr" top={mixBg("chart-4", 44)} bottom={mixBg("chart-4", 20)} d="M1440 430c-140-8-300 30-430 74-120 42-210 86-268 136-24 22-40 46-52 70V900h750Z" />
        <Ridge id="mv-nearl" top={mixBg("chart-4", 52)} bottom={mixBg("chart-4", 26)} d="M0 560c130-24 270-6 390 46 90 40 160 90 230 150V900H0Z" />
        <Ridge id="mv-nearr" top={mixBg("chart-4", 54)} bottom={mixBg("chart-4", 26)} d="M1440 520c-130 14-270 66-390 128-80 42-150 96-200 150V900h590Z" />
        <Ridge id="mv-meadow" top={mixBg("chart-4", 66)} bottom={mixBg("chart-4", 30)} d="M0 900V770c210-66 430-110 720-118 300 8 520 56 720 118v130Z" />
      </svg>
      {/* mist lying in the folds */}
      <div className="absolute top-[45%] left-[4%] h-[10%] w-[36%] rounded-full bg-chart-5/35 blur-2xl" />
      <div className="absolute top-[40%] right-[2%] h-[11%] w-[32%] rounded-full bg-chart-5/35 blur-2xl" />
      <div className="absolute top-[60%] left-[40%] h-[6%] w-[20%] rounded-full bg-chart-5/25 blur-2xl" />
      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,transparent_55%,color-mix(in_oklab,var(--background)_50%,transparent))]" />
    </div>
  );
}

function Studio() {
  return (
    <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--chart-5)_75%,var(--chart-2))]">
      {/* window light falling in vertical bands, out of focus */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[repeating-linear-gradient(90deg,color-mix(in_oklab,var(--chart-5)_90%,transparent)_0_9%,color-mix(in_oklab,var(--chart-2)_45%,var(--background))_9%_13%)] opacity-70 blur-md" />
      <div className="absolute inset-y-0 right-0 w-[45%] bg-linear-to-l from-[color-mix(in_oklab,var(--chart-5)_92%,var(--chart-3))] to-transparent" />
      <div className="absolute right-[12%] bottom-0 h-[58%] w-[38%] rounded-t-[45%] bg-[color-mix(in_oklab,var(--chart-3)_40%,var(--background))] opacity-90 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-[color-mix(in_oklab,var(--chart-2)_40%,var(--background))] to-transparent" />
    </div>
  );
}

function Lens() {
  const ring = "absolute top-1/2 aspect-square h-[78%] -translate-1/2 rounded-full";
  return (
    <div className={cn("absolute inset-0", slate)}>
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/40" />
      <span className={cn(ring, "left-[18%] bg-radial from-foreground/5 to-foreground/30 opacity-60 blur-md")} />
      <span className={cn(ring, "left-[82%] bg-radial from-foreground/5 to-foreground/30 opacity-60 blur-md")} />
      <span className={cn(ring, "left-[40%] bg-radial from-foreground/10 to-foreground/35 ring-1 ring-foreground/40 backdrop-blur-sm")} />
      <span className={cn(ring, "left-[60%] bg-radial from-foreground/10 to-foreground/35 ring-1 ring-foreground/40 backdrop-blur-sm")} />
    </div>
  );
}

function Beam() {
  return (
    <div className="absolute inset-0 bg-linear-to-b from-[color-mix(in_oklab,var(--foreground)_18%,var(--background))] to-[color-mix(in_oklab,var(--chart-3)_45%,var(--background))]">
      {/* a glowing planet edge low in the frame, with haze above it */}
      <div className="absolute top-[64%] left-1/2 h-[16%] w-[110%] -translate-x-1/2 rounded-full bg-chart-3/35 blur-2xl" />
      <div className="absolute top-[72%] left-1/2 aspect-square w-[190%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--chart-3)_55%,var(--background))_80%,var(--chart-3)_97%,transparent)] blur-[3px]" />
      <svg aria-hidden viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        {/* the beam: a thin line flaring out where it meets the horizon */}
        <path className="fill-chart-3/55" d="M200 150c0 110-14 180-62 214h124c-48-34-62-104-62-214Z" />
        <g className="fill-none stroke-foreground/30" strokeWidth="1">
          <path d="M200 60v300" />
          <path d="M200 360c-30 50-90 100-170 160" />
          <path d="M200 360c30 50 90 100 170 160" />
          <path d="M200 360c-12 50-36 100-70 160" />
          <path d="M200 360c12 50 36 100 70 160" />
        </g>
        <g className="fill-none stroke-foreground/20" strokeWidth="6">
          <circle cx="200" cy="60" r="14" />
          <circle cx="200" cy="60" r="26" />
        </g>
        <g className="fill-foreground">
          <circle cx="200" cy="60" r="5" />
          <circle cx="200" cy="200" r="3.5" />
          <circle cx="214" cy="330" r="2.5" />
          <circle cx="104" cy="470" r="2.5" />
          <circle cx="292" cy="458" r="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Globe() {
  return (
    <div className={cn("absolute inset-0 bg-chart-5", ink)}>
      <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_50%_50%,transparent_0_26px,color-mix(in_oklab,currentColor_7%,transparent)_30px,transparent_36px)] blur-[3px]" />
      <div className="absolute top-1/2 left-1/2 aspect-square w-[50%] -translate-1/2 rounded-full bg-chart-5 shadow-[0_0_0_10px_color-mix(in_oklab,currentColor_6%,transparent),0_0_40px_color-mix(in_oklab,currentColor_14%,transparent)]" />
      <svg aria-hidden viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 aspect-square w-[50%] -translate-1/2 fill-none stroke-current" strokeWidth="0.7">
        <ellipse cx="100" cy="100" rx="48" ry="74" />
        <ellipse cx="100" cy="100" rx="40" ry="74" />
        <path d="M100 26v148" />
        <g className="fill-current stroke-none">
          <circle cx="100" cy="66" r="2" />
          <circle cx="100" cy="128" r="2" />
          <circle cx="66" cy="50" r="2" />
          <circle cx="146" cy="92" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Ripple() {
  const dish = "absolute left-1/2 aspect-square -translate-x-1/2 rounded-full";
  return (
    <div className={cn("absolute inset-0", slate)}>
      <span className={cn(dish, "-top-[20%] w-[80%] shadow-[inset_0_-14px_24px_color-mix(in_oklab,var(--foreground)_28%,transparent),0_18px_30px_color-mix(in_oklab,var(--background)_45%,transparent)]")} />
      <span className={cn(dish, "top-[22%] w-[34%] shadow-[inset_0_-10px_18px_color-mix(in_oklab,var(--foreground)_30%,transparent),0_12px_20px_color-mix(in_oklab,var(--background)_45%,transparent)]")} />
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2 rounded-full bg-foreground" />
        ))}
      </div>
    </div>
  );
}

function Bars({ bars = [] }: { bars?: MercuryArtBar[] }) {
  return (
    <div className={cn("absolute inset-0 flex items-end gap-[8%] px-[6%] pb-[6%]", slate)}>
      {bars.map((bar) => (
        <div key={bar.label} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
          <p className="text-center text-xs leading-[1.4] text-foreground/85">
            {bar.value}
            <br />
            {bar.label}
          </p>
          <span
            className={cn(
              "w-full rounded-xl",
              bar.lit
                ? "bg-chart-5 shadow-[0_0_24px_6px_color-mix(in_oklab,var(--chart-5)_45%,transparent)] blur-[1.5px]"
                : "bg-background/60 shadow-[inset_0_2px_0_color-mix(in_oklab,var(--foreground)_30%,transparent)]",
            )}
            style={{ height: `${Math.max(0.04, Math.min(1, bar.height)) * 75}%`, minHeight: "1.25rem" }}
          />
        </div>
      ))}
    </div>
  );
}

function Print() {
  // nested ovals, each broken by a gap in a different place, read as a fingerprint
  const rings = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({ rx: 8 + i * 9, ry: 12 + i * 11, gap: 0.12 + (i % 3) * 0.06, turn: (i * 47) % 360 }));
  return (
    <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--foreground)_14%,color-mix(in_oklab,var(--chart-1)_10%,var(--background)))]">
      <span className="absolute top-[8%] left-1/2 aspect-square w-[110%] -translate-x-1/2 rounded-full shadow-[inset_0_14px_24px_color-mix(in_oklab,var(--foreground)_25%,transparent)]" />
      <svg aria-hidden viewBox="0 0 200 220" className="absolute inset-[12%] size-[76%] fill-none stroke-foreground/50 blur-[0.8px]" strokeWidth="3.5" strokeLinecap="round">
        {rings.map((r) => (
          <ellipse
            key={r.rx}
            cx="100"
            cy="112"
            rx={r.rx}
            ry={r.ry}
            pathLength={100}
            strokeDasharray={`${100 - r.gap * 100} ${r.gap * 100}`}
            strokeDashoffset={r.turn % 100}
          />
        ))}
      </svg>
    </div>
  );
}

function Toggles() {
  const track = "relative h-[16%] w-[78%] rounded-full";
  const knob = "absolute top-1/2 aspect-square h-[78%] -translate-y-1/2 rounded-full";
  return (
    <div className={cn("absolute inset-0 flex flex-col items-center justify-center gap-[8%]", slate)}>
      {[false, false, true].map((on, i) => (
        <span
          key={i}
          className={cn(
            track,
            on
              ? "bg-chart-5 shadow-[0_0_24px_4px_color-mix(in_oklab,var(--chart-5)_35%,transparent)]"
              : "bg-background/50 shadow-[inset_0_-3px_0_color-mix(in_oklab,var(--foreground)_30%,transparent)]",
          )}
        >
          <span
            className={cn(
              knob,
              on
                ? "right-[3%] bg-chart-5 shadow-[-2px_2px_6px_color-mix(in_oklab,var(--background)_35%,transparent)]"
                : "left-[3%] bg-[color-mix(in_oklab,var(--foreground)_30%,var(--background))] shadow-[inset_0_2px_3px_color-mix(in_oklab,var(--foreground)_40%,transparent)]",
            )}
          />
        </span>
      ))}
    </div>
  );
}

/**
 * Stand-in imagery in Mercury's manner: soft, frosted, slightly out-of-focus shapes on pale
 * paper, mist or slate panels. Fills its box; give the box a size and a radius.
 */
export function MercuryArt({ variant, bars, className }: MercuryArtProps) {
  return (
    <div aria-hidden={variant !== "bars"} className={cn("relative isolate size-full overflow-hidden", className)}>
      {variant === "valley" && <Valley />}
      {variant === "studio" && <Studio />}
      {variant === "lens" && <Lens />}
      {variant === "beam" && <Beam />}
      {variant === "globe" && <Globe />}
      {variant === "ripple" && <Ripple />}
      {variant === "bars" && <Bars bars={bars} />}
      {variant === "print" && <Print />}
      {variant === "toggles" && <Toggles />}
    </div>
  );
}
