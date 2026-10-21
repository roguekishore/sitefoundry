import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { cn } from "@foundry/foundry-utils";

export interface KononenkogroupStat {
  /** the figure, e.g. "16+" */
  value: string;
  /** what it counts, in serif under it */
  label: string;
}

export interface KononenkogroupStatsProps {
  stats: KononenkogroupStat[];
  className?: string;
}

/**
 * Figures on black, down the right half of the page: a huge grotesk number over a big serif
 * label with an indented first line. On wide screens they rest dimmed to a fifth and light up
 * under the pointer. Lines rise from their masks.
 */
export function KononenkogroupStats({ stats, className }: KononenkogroupStatsProps) {
  return (
    <section className={cn("dark bg-background px-gutter py-section text-foreground", className)}>
      <ul className="grid gap-[12vw] lg:grid-cols-15 lg:gap-x-[1.11vw] lg:gap-y-[7.6vw]">
        {stats.map((stat) => (
          <li
            key={stat.value + stat.label}
            className="transition-opacity duration-300 ease-out motion-reduce:transition-none lg:col-span-7 lg:col-start-9 lg:opacity-20 lg:hover:opacity-100"
          >
            <KononenkogroupLines
              text={stat.value}
              className="font-sans text-[10.67vw] leading-[0.85] tracking-[-0.045em] lg:text-[9.115vw] lg:leading-[0.75]"
            />
            <KononenkogroupLines
              text={stat.label}
              className="mt-[2vw] max-w-[14ch] font-display text-[8vw] leading-[0.9] tracking-[-0.03em] text-foreground/80 indent-[10.8vw] lg:mt-[1.4vw] lg:text-[6.146vw] lg:text-foreground lg:indent-[6.53vw]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
