import { cn } from "@foundry/foundry-utils";

export interface SlashInvestor {
  /** the backer's name, set as a plain wordmark */
  name: string;
  /** serif, sans caps, or light sans: varies the row the way real marks do */
  style?: "serif" | "caps" | "light";
}

export interface SlashInvestorsProps {
  /** the small line above the names */
  label: string;
  /** rows of names (the original runs three, then four) */
  rows: SlashInvestor[][];
  className?: string;
}

const styles = {
  serif: "font-display text-[1.375rem] lg:text-[2rem] tracking-[-0.01em]",
  caps: "font-sans font-extrabold uppercase text-xl lg:text-[1.875rem] tracking-[-0.02em]",
  light: "font-sans font-light text-xl lg:text-[1.875rem] tracking-[0.01em]",
} as const;

/** A quiet label over centred rows of backers' names in silvered type; on phones the rows run past both edges. */
export function SlashInvestors({ label, rows, className }: SlashInvestorsProps) {
  return (
    <section className={cn("overflow-x-clip bg-background pt-section pb-4 text-foreground lg:pt-[13.25rem] lg:pb-6", className)}>
      <p className="px-gutter text-center text-[0.6875rem] font-semibold tracking-[-0.01em] text-muted-foreground lg:text-[0.9375rem]">{label}</p>
      <div className="mt-6 flex flex-col items-center gap-6 lg:mt-12 lg:gap-14">
        {rows.map((row, r) => (
          <ul key={r} className="flex w-max items-center justify-center gap-8 lg:gap-[3.25rem]">
            {row.map((investor) => (
              <li
                key={investor.name}
                className={cn(
                  "shrink-0 bg-linear-to-b from-foreground/75 to-foreground/40 bg-clip-text leading-none whitespace-nowrap text-transparent",
                  styles[investor.style ?? "serif"],
                )}
              >
                {investor.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
