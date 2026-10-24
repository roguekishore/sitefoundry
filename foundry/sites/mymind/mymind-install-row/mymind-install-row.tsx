import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MymindInstallTarget {
  /** platform name, e.g. "Phone" */
  name: string;
  /** the action, e.g. "Get app" (set in tangerine capitals) */
  action: string;
  /** where it goes */
  href: string;
  /** a 36px app icon */
  icon: ReactNode;
}

export interface MymindInstallRowProps {
  /** the platforms, left to right */
  targets: MymindInstallTarget[];
  className?: string;
}

/** A row of install tiles separated by vertical hairlines. */
export function MymindInstallRow({ targets, className }: MymindInstallRowProps) {
  return (
    <ul className={cn("mx-auto flex w-full max-w-[75rem] justify-center", className)}>
      {targets.map((t, i) => (
        <li key={t.name} className={cn("min-w-0 flex-1", i > 0 && "border-l border-border")}>
          <a
            href={t.href}
            className="group flex h-[7.5rem] flex-col items-center justify-center gap-1 text-foreground transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] lg:h-[14.5rem]"
          >
            <span className="mb-3 grid size-9 place-items-center lg:mb-5 lg:size-12 [&_svg]:size-full">{t.icon}</span>
            <span className="font-display text-xl leading-none tracking-[-0.03em] group-hover:text-primary lg:text-[2rem]">{t.name}</span>
            <span className="font-[family-name:var(--mymind-round,var(--typeface-body))] text-[0.6875rem] font-semibold tracking-[0.08em] text-primary uppercase lg:text-[0.875rem]">
              {t.action}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
