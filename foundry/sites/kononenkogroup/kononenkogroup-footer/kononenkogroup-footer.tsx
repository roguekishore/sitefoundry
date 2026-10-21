import type { CSSProperties } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupLink } from "@foundry/kononenkogroup-link";
import { cn } from "@foundry/foundry-utils";

export interface KononenkogroupFooterLine {
  text: string;
  /** makes the line a link */
  href?: string;
  /** the current page: underlined */
  active?: boolean;
  /** grey instead of white */
  muted?: boolean;
}

export interface KononenkogroupFooterGroup {
  /** small serif label, e.g. "Navigation" */
  label: string;
  /** runs of lines; a gap separates the runs */
  runs: KononenkogroupFooterLine[][];
}

export interface KononenkogroupFooterMeta {
  /** small grey serif label, e.g. "Registration" */
  label: string;
  /** values beside it */
  values?: string[];
  href?: string;
}

export interface KononenkogroupFooterProps {
  /** the wordmark, one line each; the last line is serif */
  wordmark: string[];
  homeHref?: string;
  /** up to four label + lines groups across the top */
  groups: KononenkogroupFooterGroup[];
  /** the giant letters stretched across the full width */
  monogram: string;
  /** up to five label + value pairs along the bottom */
  meta: KononenkogroupFooterMeta[];
  /** e.g. "© 2026", at the bottom right */
  copyright: string;
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";
const serif = "font-display tracking-[-0.01em]";
// where things start on the 15-column grid
const groupStart = [4, 8, 11, 14];
const metaStart = [1, 4, 8, 11, 14];

function Line({ line }: { line: KononenkogroupFooterLine }) {
  const text = <KononenkogroupLines as="span" text={line.text} className="block" />;
  return (
    <li className={cn(line.muted && "text-muted-foreground")}>
      {line.href ? (
        <KononenkogroupLink href={line.href} active={line.active}>
          {text}
        </KononenkogroupLink>
      ) : (
        text
      )}
    </li>
  );
}

/**
 * The closing screen on black, on the 15-column grid: the wordmark, then label + link groups
 * (navigation, media, addresses, hours) across the top; giant grotesk letters stretched edge to
 * edge; and a row of tiny grey serif credits at the foot. Lines rise from their masks.
 */
export function KononenkogroupFooter({ wordmark, homeHref = "/", groups, monogram, meta, copyright, className }: KononenkogroupFooterProps) {
  return (
    <footer
      className={cn(
        "dark bg-background px-gutter pt-[26vw] pb-[5vw] text-foreground lg:flex lg:min-h-svh lg:flex-col lg:pt-[8.7vw] lg:pb-[1.2vw]",
        className,
      )}
    >
      <div className={cn(small, "grid grid-cols-2 gap-x-[4vw] gap-y-[14vw] lg:grid-cols-15 lg:gap-x-[1.11vw] lg:gap-y-0")}>
        <a href={homeHref} className="col-span-2 block lg:col-span-3 lg:text-[max(10px,0.99vw)] lg:leading-none">
          {wordmark.map((line, i) => (
            <KononenkogroupLines key={i} as="span" text={line} className={cn("block", i === wordmark.length - 1 && serif)} />
          ))}
        </a>
        {groups.slice(0, groupStart.length).map((group, i) => {
          const start = groupStart[i];
          const end = groupStart[i + 1] ?? 16;
          const style = {
            "--kononenkogroup-footer-label": `${start}`,
            "--kononenkogroup-footer-lines": `${start + 1} / ${end}`,
          } as CSSProperties;
          return (
            <div key={group.label} className="lg:contents" style={style}>
              <KononenkogroupLines text={group.label} className={cn(serif, "lg:row-start-1 lg:[grid-column:var(--kononenkogroup-footer-label)]")} />
              <div className="mt-[4vw] grid content-start gap-[5vw] lg:row-start-1 lg:mt-0 lg:gap-[1em] lg:[grid-column:var(--kononenkogroup-footer-lines)]">
                {group.runs.map((run, r) => (
                  <ul key={r}>
                    {run.map((line, l) => (
                      <Line key={l} line={line} />
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <svg viewBox="0 0 1000 276" role="img" aria-label={monogram} className="mt-[14vw] block w-full lg:mt-auto lg:pt-[6vw]">
        <text x="0" y="270" textLength="1000" lengthAdjust="spacing" fontSize="375" className="fill-current font-sans">
          {monogram}
        </text>
      </svg>

      <div className={cn(small, serif, "relative mt-[6vw] grid gap-[5vw] text-muted-foreground lg:mt-[1.6vw] lg:grid-cols-15 lg:gap-x-[1.11vw]")}>
        {meta.slice(0, metaStart.length).map((item, i) => {
          const start = metaStart[i];
          const end = Math.min(metaStart[i + 1] ?? 15, 15);
          const inner = (
            <>
              <KononenkogroupLines as="span" text={item.label} />
              {item.values?.map((value, v) => (
                <KononenkogroupLines key={v} as="span" text={value} />
              ))}
            </>
          );
          return (
            <div
              key={item.label}
              className="flex flex-wrap gap-x-[7vw] lg:gap-x-[1.1vw] lg:[grid-column:var(--kononenkogroup-footer-meta)]"
              style={{ "--kononenkogroup-footer-meta": `${start} / ${end}` } as CSSProperties}
            >
              {item.href ? (
                <a href={item.href} className="flex flex-wrap gap-x-[7vw] transition-opacity lg:gap-x-[1.1vw] duration-300 hover:opacity-70">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </div>
          );
        })}
        <KononenkogroupLines as="span" text={copyright} className="absolute right-0 bottom-0 lg:static lg:col-start-15 lg:text-right" />
      </div>
    </footer>
  );
}
