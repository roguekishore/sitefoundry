import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";

export interface PlaidCodeSegment {
  /** the text of this piece of the line */
  text: string;
  /** fn: a function or type name (cyan) · num: a number (yellow) · plain (default) */
  tone?: "fn" | "num" | "plain";
}

export interface PlaidDevelopersProps {
  /** the white headline (two short lines) */
  title: string;
  /** the line under it */
  subtitle: string;
  /** the cyan-to-periwinkle pill */
  primary: { label: string; href: string };
  /** the near-black rainbow-rimmed pill */
  secondary: { label: string; href: string };
  /** the endpoint shown in the code window's header */
  endpoint: string;
  /** the code, one array of segments per line (an empty array is an empty line) */
  code: PlaidCodeSegment[][];
  className?: string;
}

const tones = { fn: "text-glow", num: "text-chart-5", plain: "" };

/** Plaid's developer panel: a glowing indigo card that ends in a code window. */
export function PlaidDevelopers({ title, subtitle, primary, secondary, endpoint, code, className }: PlaidDevelopersProps) {
  return (
    <section className={cn("bg-background pt-16 pb-14 lg:pt-[12rem] lg:pb-[12.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="relative isolate overflow-clip rounded-[calc(var(--radius)+1rem)] bg-[color-mix(in_oklab,var(--foreground)_40%,var(--primary))] bg-linear-to-b from-chart-1/20 via-chart-1/25 to-chart-3/50 text-center text-background shadow-[0_0_70px] shadow-chart-3/70 dark:bg-card dark:text-foreground">
          <div className="px-6 pt-10 lg:pt-[4.75rem]">
            <h2 className="mx-auto max-w-[16rem] font-display text-[1.875rem]/[1.12] font-medium tracking-[-0.05em] lg:max-w-[50rem] lg:text-[4.375rem]/[1.12] lg:tracking-[-0.045em]">
              {title}
            </h2>
            <p className="mx-auto mt-10 max-w-[15rem] text-base/6 opacity-90 lg:mt-12 lg:max-w-none lg:text-xl">{subtitle}</p>
            <div className="mt-6 flex flex-col items-center gap-7 lg:mt-8 lg:flex-row lg:justify-center lg:gap-7">
              <PlaidButton href={primary.href} variant="sky" className="w-[12.25rem] lg:w-auto">
                {primary.label}
              </PlaidButton>
              <PlaidButton href={secondary.href} className="w-[12.25rem] lg:w-auto">
                {secondary.label}
              </PlaidButton>
            </div>
          </div>

          <div className="mx-auto mt-9 w-[calc(100%-4rem)] max-w-[55.625rem] rounded-t-[1rem] bg-primary text-left font-mono text-primary-foreground/85 dark:bg-background dark:text-foreground/85 lg:mt-10 lg:w-[calc(100%-6rem)] lg:rounded-t-lg">
            <div className="border-b border-glow/40 px-4 py-4 text-[0.6875rem] lg:px-11 lg:py-6 lg:text-2xl">{endpoint}</div>
            <div className="grid grid-cols-[2.25rem_1fr] lg:grid-cols-[6.5rem_1fr]">
              <ol aria-hidden className="border-r border-glow/40 py-4 pl-4 text-[0.625rem]/[1.875rem] lg:py-6 lg:pl-11 lg:text-2xl/[3.25rem]">
                {code.map((_, i) => (
                  <li key={i}>{i + 1}</li>
                ))}
              </ol>
              <pre className="min-w-0 overflow-clip py-5 pr-4 pl-4 text-[0.625rem]/[1.125rem] lg:py-8 lg:pr-14 lg:pl-11 lg:text-[1.6875rem]/[2.52rem]">
                {code.map((line, i) => (
                  <code key={i} className="block truncate">
                    {line.length === 0 ? " " : line.map((s, j) => (
                      <span key={j} className={tones[s.tone ?? "plain"]}>
                        {s.text}
                      </span>
                    ))}
                  </code>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
