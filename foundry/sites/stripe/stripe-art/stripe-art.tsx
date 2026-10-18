import { cn } from "@foundry/foundry-utils";
import { StripeRibbon } from "@foundry/stripe-ribbon";

export type StripeArtVariant = "bloom" | "dusk" | "tide" | "grid" | "aerial" | "facade" | "market" | "ribbon" | "violet";

export interface StripeArtProps {
  /**
   * bloom: glowing petals on near-black · dusk: layered sunset bands · tide: rippling rings ·
   * grid: a bright shape on a dark grid · aerial: roads and crossings seen from above ·
   * facade: a pale wall with a lit window · market: a crate of round produce from above ·
   * ribbon: the flowing stripe ribbon on white · violet: a violet silk fold
   */
  variant: StripeArtVariant;
  className?: string;
}

/**
 * Stand-in imagery drawn with CSS gradients and shapes in the theme's colours: for story
 * cards, accordions and news tiles where the original uses photography. Fills its box.
 */
export function StripeArt({ variant, className }: StripeArtProps) {
  return (
    <div aria-hidden className={cn("relative isolate size-full overflow-hidden", className)}>
      {variant === "bloom" && (
        <div className="dark absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,color-mix(in_oklab,var(--chart-3)_40%,var(--background)),var(--background))]">
          {[0, 72, 144, 216, 288].map((deg) => (
            <span
              key={deg}
              className="absolute top-[38%] left-1/2 size-[24%] rounded-full bg-[radial-gradient(circle,var(--chart-1)_10%,var(--chart-2)_45%,color-mix(in_oklab,var(--primary)_70%,transparent)_70%,transparent_72%)] blur-[2px]"
              style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-62%)` }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,color-mix(in_oklab,var(--background)_50%,transparent)_70%)]" />
        </div>
      )}
      {variant === "dusk" && (
        <div className="absolute inset-0 bg-linear-to-b from-primary via-chart-2 to-chart-1">
          <div className="absolute inset-x-[-10%] top-[45%] h-[30%] rounded-[50%] bg-chart-4/70 blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-foreground/70 to-transparent" />
          <span className="absolute top-[18%] left-1/2 size-[30%] -translate-x-1/2 rounded-full bg-radial from-chart-4 to-chart-1/0" />
        </div>
      )}
      {variant === "tide" && (
        <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_30%_120%,color-mix(in_oklab,var(--chart-5)_70%,var(--foreground))_0_6px,color-mix(in_oklab,var(--chart-5)_40%,var(--foreground))_6px_14px)]">
          <div className="absolute inset-0 bg-linear-to-br from-background/30 via-transparent to-foreground/40" />
          <span className="absolute top-1/2 left-1/2 size-[42%] -translate-1/2 rounded-[30%] border-[1.4rem] border-background/95" />
        </div>
      )}
      {variant === "grid" && (
        <div className="dark absolute inset-0 bg-background bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]">
          <span className="absolute top-[30%] left-[38%] h-[42%] w-[40%] bg-chart-2 [clip-path:polygon(40%_0,100%_0,60%_50%,100%_50%,20%_100%,45%_45%,0_45%)]" />
        </div>
      )}
      {variant === "aerial" && (
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--foreground)_55%,var(--muted-foreground))]">
          {/* roads */}
          <div className="absolute inset-y-0 left-[44%] w-[16%] bg-foreground/60" />
          <div className="absolute inset-x-0 top-[48%] h-[18%] bg-foreground/60" />
          {/* lane dashes and zebra crossings */}
          <div className="absolute inset-x-0 top-[57%] h-0.5 bg-[repeating-linear-gradient(90deg,var(--background)_0_18px,transparent_18px_40px)] opacity-70" />
          <div className="absolute top-[30%] left-[45%] h-[16%] w-[14%] bg-[repeating-linear-gradient(90deg,var(--background)_0_5px,transparent_5px_11px)] opacity-80" />
          <div className="absolute top-[49%] left-[30%] h-[16%] w-[12%] bg-[repeating-linear-gradient(0deg,var(--background)_0_5px,transparent_5px_11px)] opacity-80" />
          {/* trees */}
          {[
            [8, 10], [18, 22], [70, 12], [82, 26], [88, 78], [72, 86], [12, 80], [24, 88],
          ].map(([x, y]) => (
            <span key={`${x}-${y}`} className="absolute aspect-square w-[9%] rounded-full bg-[radial-gradient(circle_at_35%_35%,color-mix(in_oklab,var(--chart-4)_45%,var(--foreground)),var(--foreground))] opacity-80" style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
          <span className="absolute top-[38%] left-[49%] h-[7%] w-[3%] rounded-sm bg-chart-4" />
          <span className="absolute top-[52%] left-[18%] h-[4%] w-[6%] rounded-sm bg-background/90" />
          <span className="absolute top-[59%] left-[70%] h-[4%] w-[6%] rounded-sm bg-background/80" />
        </div>
      )}
      {variant === "facade" && (
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,var(--border)_0_1px,var(--muted)_1px_14px)]">
          <div className="absolute top-[18%] left-[30%] h-[55%] w-[40%] -skew-y-3 border-[6px] border-foreground/80 bg-linear-to-b from-chart-4/50 to-chart-1/40" />
          <div className="absolute inset-y-0 left-0 w-[10%] bg-foreground/15" />
          <div className="absolute inset-y-0 right-0 w-[10%] bg-foreground/15" />
          <div className="absolute inset-x-0 bottom-0 h-[12%] bg-foreground/25" />
        </div>
      )}
      {variant === "market" && (
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--muted-foreground)_35%,var(--muted))]">
          <div className="absolute top-[12%] left-[28%] h-[70%] w-[44%] rotate-3 rounded-sm bg-foreground/40 p-[3%]">
            <div className="grid size-full grid-cols-3 gap-1.5">
              {["bg-chart-2", "bg-chart-4", "bg-chart-1", "bg-chart-2", "bg-primary/60", "bg-chart-4", "bg-chart-1", "bg-chart-2", "bg-chart-4"].map((c, i) => (
                <span key={i} className={cn("rounded-full", c)} />
              ))}
            </div>
          </div>
        </div>
      )}
      {variant === "ribbon" && (
        <div className="absolute inset-0 bg-background">
          <StripeRibbon className="absolute inset-0 size-full" fibres={40} />
        </div>
      )}
      {variant === "violet" && (
        <div className="absolute inset-0 bg-linear-to-br from-chart-3 via-primary to-chart-2">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,color-mix(in_oklab,var(--background)_14%,transparent)_0_2px,transparent_2px_9px)]" />
          <div className="absolute top-[-30%] right-[-20%] h-[120%] w-[70%] rotate-12 rounded-[50%] bg-chart-2/50 blur-2xl" />
        </div>
      )}
    </div>
  );
}
