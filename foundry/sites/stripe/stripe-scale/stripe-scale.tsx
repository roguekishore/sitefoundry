import { cn } from "@foundry/foundry-utils";
import { StripeFrame } from "@foundry/stripe-frame";
import { StripeHeading } from "@foundry/stripe-heading";
import "./stripe-scale.css";

export interface StripeScaleProps {
  /** the bright lead sentence */
  title: string;
  /** the softer sentences after it */
  rest?: string;
  /** big figures with a short label each (three fit a row) */
  metrics: { value: string; label: string }[];
  /** dark forces the deep-navy band (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

// Each figure gets its own warm-to-cool gradient fill.
const fills = [
  "from-chart-4 via-chart-2 to-chart-2",
  "from-chart-2 to-chart-3",
  "from-chart-3 via-primary to-chart-5",
];

// Flowing threads: sine waves fanning out to the right, like a ribbon of light seen side-on.
const THREADS = Array.from({ length: 34 }, (_, i) => {
  const k = i / 33;
  const amp = 80 + k * 520;
  const y = 300 + (k - 0.5) * 120;
  return `M0 ${y} C 300 ${y - amp}, 600 ${y + amp}, 1200 ${y - amp * 0.4}`;
});

/**
 * "Scale" section of the developer band: a two-tone heading, a field of flowing violet
 * threads, and big figures filled with warm-to-cool gradients.
 */
export function StripeScale({ title, rest, metrics, tone = "dark", className }: StripeScaleProps) {
  return (
    <StripeFrame rule="solid" className={cn(tone === "dark" && "dark", className)} innerClassName="pt-14 pb-14 lg:pt-20 lg:pb-16">
      <StripeHeading as="h3" size="sub" lead={title} rest={rest} className="relative z-10 max-w-[44rem]" />

      <div className="relative mt-10 lg:mt-0 lg:h-[28rem]">
        <svg
          aria-hidden
          viewBox="0 0 1200 520"
          preserveAspectRatio="none"
          className="absolute inset-y-0 right-0 h-full w-[90%] animate-[stripe-scale-flow_10s_ease-in-out_infinite_alternate] opacity-80 motion-reduce:animate-none lg:w-[75%]"
        >
          <defs>
            <linearGradient id="stripe-scale-thread" x1="0" x2="1">
              <stop offset="0" stopOpacity={0} style={{ stopColor: "var(--chart-3)" }} />
              <stop offset="0.5" style={{ stopColor: "var(--chart-2)" }} />
              <stop offset="1" stopOpacity={0} style={{ stopColor: "var(--chart-3)" }} />
            </linearGradient>
          </defs>
          {THREADS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="url(#stripe-scale-thread)" strokeWidth={0.8} />
          ))}
        </svg>

        <div className="relative grid gap-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={m.label}>
              <p
                className={cn(
                  "w-fit bg-linear-to-r bg-clip-text pb-1 font-display text-[1.75rem] leading-none font-light tracking-[-0.01em] text-transparent lg:text-5xl lg:tracking-[-0.02em]",
                  fills[i % fills.length],
                )}
              >
                {m.value}
              </p>
              <p className="mt-2 text-base font-normal text-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </StripeFrame>
  );
}
