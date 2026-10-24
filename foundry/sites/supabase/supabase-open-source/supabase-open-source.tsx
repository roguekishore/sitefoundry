import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";
import { SupabaseHeading } from "@foundry/supabase-heading";
import "./supabase-open-source.css";

export interface SupabaseOpenSourceProps {
  title: string;
  /** the grey paragraph under the title */
  body: string;
  /** the white button (icon + label) */
  cta?: { label: ReactNode; href: string };
  /** the figure spelled in lit dots, e.g. "48.2K"; digits, ".", ",", "K", "M" and "+" are drawn */
  figure: string;
  /** what the figure means, read to screen readers (e.g. "48.2 thousand stars") */
  figureLabel?: string;
  className?: string;
}

// a 5 × 7 dot font: one string per row, "#" is a lit dot (narrow glyphs are 1–3 wide)
const GLYPHS: Record<string, string[]> = {
  "0": [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."],
  "1": ["..#..", ".##..", "..#..", "..#..", "..#..", "..#..", ".###."],
  "2": [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"],
  "3": [".###.", "#...#", "....#", "..##.", "....#", "#...#", ".###."],
  "4": ["...#.", "..##.", ".#.#.", "#..#.", "#####", "...#.", "...#."],
  "5": ["#####", "#....", "####.", "....#", "....#", "#...#", ".###."],
  "6": ["..##.", ".#...", "#....", "####.", "#...#", "#...#", ".###."],
  "7": ["#####", "....#", "...#.", "..#..", ".#...", ".#...", ".#..."],
  "8": [".###.", "#...#", "#...#", ".###.", "#...#", "#...#", ".###."],
  "9": [".###.", "#...#", "#...#", ".####", "....#", "...#.", ".##.."],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
  M: ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"],
  "+": [".....", "..#..", "..#..", "#####", "..#..", "..#..", "....."],
  ".": [".", ".", ".", ".", ".", ".", "#"],
  ",": ["..", "..", "..", "..", "..", ".#", "#."],
};

const COLS = 65;
const ROWS = 34;

/** The lit dots of a figure, centred in the 65 × 34 field: [column, row] pairs, 1-based. */
function litDots(figure: string) {
  const glyphs = [...figure.toUpperCase()].map((ch) => GLYPHS[ch]).filter(Boolean) as string[][];
  const width = glyphs.reduce((sum, g) => sum + g[0]!.length, 0) + Math.max(glyphs.length - 1, 0);
  let x = Math.floor((COLS - width) / 2) + 1;
  const y = Math.floor((ROWS - 7) / 2) + 1;
  const dots: [number, number][] = [];
  for (const glyph of glyphs) {
    glyph.forEach((row, r) => [...row].forEach((cell, c) => cell === "#" && dots.push([x + c, y + r])));
    x += glyph[0]!.length + 1;
  }
  return dots;
}

/** An open-source band: title, grey paragraph and button beside a fading field of dots spelling a figure. */
export function SupabaseOpenSource({ title, body, cta, figure, figureLabel, className }: SupabaseOpenSourceProps) {
  const dots = litDots(figure);
  return (
    <section className={cn("relative overflow-x-clip border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content grid max-w-page px-gutter py-section lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <SupabaseHeading parts={[{ text: title }]} size="large" className="mx-auto max-w-[13ch] lg:mx-0 lg:max-w-none" />
          <p className="mt-6 text-[0.9375rem] leading-[1.5] text-muted-foreground lg:mt-5 lg:max-w-[30rem]">{body}</p>
          {cta && (
            <SupabaseButton href={cta.href} variant="outline" className="mt-6 h-[2.125rem] px-3 text-[0.9375rem]">
              {cta.label}
            </SupabaseButton>
          )}
        </div>

        <div className="mt-8 flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:left-1/2 lg:mt-0 lg:items-center">
          <div role="img" aria-label={figureLabel ?? figure} className="supabase-os-field relative grid">
            {dots.map(([col, row], i) => (
              <span
                key={i}
                className={cn("supabase-os-dot relative", i % 3 === 1 ? "bg-highlight" : "bg-primary")}
                style={{ gridColumn: col, gridRow: row, "--supabase-os-at": ((col - 1) / COLS).toFixed(3) } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
