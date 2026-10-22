import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./attio-context.css";

export interface AttioContextFeature {
  /** a small outline icon (lucide works well) */
  icon: ReactNode;
  /** the short white title */
  title: string;
  /** one grey line */
  text: string;
}

export interface AttioContextProps {
  /** the small grey line over the title */
  kicker?: string;
  /** the big display title */
  title: string;
  /** a small mark after the title, set high (e.g. ™) */
  mark?: string;
  /** replaces the glowing horizon disc behind the title */
  art?: ReactNode;
  /** five features in a hairline row (stacked on phones) */
  features: AttioContextFeature[];
  className?: string;
}

/**
 * The start of the dark band: a pinstriped field with a huge white display title above a
 * glowing horizon (a vast dark disc whose rim catches coloured light), growing into place
 * as it scrolls up; then five hairline cells, each an outline icon over a white title and
 * a grey line.
 */
export function AttioContext({ kicker, title, mark, art, features, className }: AttioContextProps) {
  return (
    <section data-header-tone="dark" className={cn("dark bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page lg:border-x lg:border-border">
        <div className="attio-context-intro relative isolate h-[25.75rem] overflow-clip border-b border-border bg-[repeating-linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_3.5%,transparent)_0_1px,transparent_1px_8px)] lg:h-[51.125rem]">
          <div aria-hidden className="attio-context-horizon absolute top-[19rem] left-1/2 -z-10 size-[32rem] -translate-x-1/2 lg:top-[29.375rem] lg:size-[108.75rem]">
            {art ?? (
              <>
                {/* the rim light: a blurred colour wheel peeking out around the disc's top edge */}
                <div className="absolute -inset-[2px] rounded-full bg-[conic-gradient(from_270deg,var(--chart-4),var(--chart-3)_15%,var(--glow)_25%,var(--chart-2)_35%,var(--chart-1)_45%,transparent_55%,transparent_95%,var(--chart-4))] opacity-80 blur-[6px] [mask-image:linear-gradient(to_bottom,black,transparent_24%)] lg:-inset-[3px] lg:blur-[10px]" />
                <div className="absolute inset-0 rounded-full bg-background shadow-[0_-30px_80px_-20px_color-mix(in_oklab,var(--foreground)_10%,transparent)]" />
              </>
            )}
          </div>
          <div className="attio-context-title flex flex-col items-center px-gutter pt-[11.5rem] text-center lg:pt-[16.75rem]">
            {kicker && <p className="text-sm font-medium tracking-[-0.01em] text-muted-foreground lg:text-[0.9375rem]">{kicker}</p>}
            <h2 className="mt-1.5 font-display text-[2.75rem] leading-[1] font-semibold tracking-[-0.045em] lg:mt-2 lg:text-[6rem]">
              {title}
              {mark && <sup className="ml-0.5 align-super text-[0.25em] font-semibold tracking-normal">{mark}</sup>}
            </h2>
          </div>
        </div>

        <ul className="grid border-b border-border lg:grid-cols-5">
          {features.map((f, i) => (
            <li
              key={f.title}
              className={cn(
                "flex flex-col items-center px-8 py-10 text-center lg:h-[17.5rem] lg:items-start lg:px-7 lg:pt-11 lg:pb-8 lg:text-left",
                i > 0 && "border-t border-border lg:border-t-0 lg:border-l",
              )}
            >
              <span aria-hidden className="text-muted-foreground [&_svg]:size-6 [&_svg]:stroke-[1.5]">{f.icon}</span>
              <h3 className="mt-4 text-base leading-[1.4] font-semibold tracking-[-0.01em] lg:mt-auto">{f.title}</h3>
              <p className="mt-1 max-w-[13.5rem] text-sm leading-[1.45] font-medium text-muted-foreground max-lg:max-w-none">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
