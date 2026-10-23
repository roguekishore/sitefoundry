import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./raycast-keyboard.css";

export interface RaycastKey {
  /** the main legend (big, bottom-centre for letters; bottom-left for modifiers) */
  label?: ReactNode;
  /** the small legend above it (shifted symbol, modifier glyph) */
  top?: ReactNode;
  /** width in key units (default 1; 1.5 is a tab key) */
  width?: number;
  /** modifier style: label small at the bottom-left, glyph top-right */
  modifier?: boolean;
  /** turns the key into a feature tile: icon, then bold lead + grey text. Tiles fade in on scroll */
  tile?: { icon?: ReactNode; lead: ReactNode; text: ReactNode };
  /** glow red (the shortcut keys in the closing call to action) */
  lit?: boolean;
  /** leave this key out on phones (keeps the first tile at the board's left edge) */
  desktopOnly?: boolean;
}

/** One row of keys; `offset` shifts the row right by that many key units (may be negative). */
export interface RaycastKeyboardRow {
  keys: RaycastKey[];
  offset?: number;
}

export interface RaycastKeyboardProps {
  /** the rows, top to bottom */
  rows: RaycastKeyboardRow[];
  /** how the board sits in its box: centred (cropped both sides) or anchored left */
  anchor?: "center" | "left";
  /** fade the plain keys to about a third so that only the feature tiles read */
  dim?: boolean;
  className?: string;
}

const unit = 110; // key size, px
const gap = 12; // gap between keys, px

const keyShadow =
  "shadow-[0_1.5px_0.5px_2.5px_color-mix(in_oklab,var(--background)_40%,transparent),0_0_0.5px_1px_var(--background),inset_0_2px_1px_1px_color-mix(in_oklab,var(--background)_25%,transparent),inset_0_1px_1px_1px_color-mix(in_oklab,var(--foreground)_20%,transparent)]";

/**
 * A big keyboard used as page backdrop. Needs a parent with a height and `overflow-clip`;
 * the board itself is as wide as its keys and is cropped by the parent.
 */
export function RaycastKeyboard({ rows, anchor = "center", dim = false, className }: RaycastKeyboardProps) {
  let tileIndex = 0;
  return (
    <div
      aria-hidden={rows.every((r) => r.keys.every((k) => !k.tile)) ? true : undefined}
      className={cn("absolute top-0 flex w-max flex-col text-foreground", anchor === "center" ? "left-1/2 -translate-x-1/2 items-center" : "left-0", className)}
      style={{ gap }}
    >
      {rows.map((row, r) => (
        <div key={r} className="flex" style={{ gap, marginLeft: (row.offset ?? 0) * (unit + gap) }}>
          {row.keys.map((key, k) => {
            const w = (key.width ?? 1) * (unit + gap) - gap;
            const i = key.tile ? tileIndex++ : 0;
            return (
              <div
                key={k}
                style={{ width: w, height: unit, ["--raycast-tile-i" as string]: i * 60 } as CSSProperties}
                className={cn(
                  "relative shrink-0 rounded-[11px] bg-[radial-gradient(75%_75%_at_50%_91.9%,color-mix(in_oklab,var(--foreground)_7%,var(--background)),color-mix(in_oklab,var(--foreground)_4%,var(--background)))]",
                  keyShadow,
                  dim && !key.tile && "opacity-35",
                  key.desktopOnly && "max-lg:hidden",
                  key.tile && "raycast-key-tile bg-linear-to-b from-foreground/[0.04] to-foreground/[0.08]",
                  key.lit && "raycast-key-lit text-highlight ring-1 ring-highlight/40",
                )}
              >
                {key.tile ? (
                  <div className="flex size-full flex-col justify-between p-[15px] text-left text-[14px] leading-[1.4] [&_svg]:size-5 [&_svg]:text-muted-foreground">
                    <span>{key.tile.icon}</span>
                    <span className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">{key.tile.lead}</strong> {key.tile.text}
                    </span>
                  </div>
                ) : key.modifier ? (
                  <>
                    <span className="absolute top-[14px] right-[14px] text-xl leading-none text-muted-foreground [&_svg]:size-5">{key.top}</span>
                    <span className="absolute bottom-[12px] left-[14px] text-[22px] leading-none font-medium tracking-[-0.01em]">{key.label}</span>
                  </>
                ) : (
                  <>
                    {key.top && <span className="absolute top-[12px] left-1/2 -translate-x-1/2 text-xl leading-none text-muted-foreground [&_svg]:size-5">{key.top}</span>}
                    {key.label && <span className="absolute inset-x-0 bottom-[18px] text-center text-[32px] leading-none font-medium">{key.label}</span>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
