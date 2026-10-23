import { cn } from "@foundry/foundry-utils";

const strokes = {
  accent: "via-accent to-accent/50",
  glow: "via-glow to-glow/50",
  primary: "via-primary to-primary/50",
  highlight: "via-highlight to-highlight/50",
  current: "via-current to-current/40",
};

export interface PilotBrushNoteProps {
  /** the line itself; use \n in sans notes to start a new paragraph */
  text: string;
  /** script: the big handwritten face · sans: a medium statement */
  variant?: "script" | "sans";
  /** the colour of the brush stroke under it */
  stroke?: keyof typeof strokes;
  /** centred (default) or flush left */
  align?: "center" | "left";
  className?: string;
}

/** A band's closing line with a thin tapered brush stroke underneath. */
export function PilotBrushNote({ text, variant = "sans", stroke = "current", align = "center", className }: PilotBrushNoteProps) {
  return (
    <div className={cn("flex flex-col", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      {variant === "script" ? (
        <p className="font-[family-name:var(--typeface-script,cursive)] text-[1.625rem] leading-[1.2] lg:text-[2.5rem]">{text}</p>
      ) : (
        <div className="space-y-6 text-xl leading-[1.3] font-medium tracking-[0.01em] lg:text-2xl lg:leading-[1.3]">
          {text.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
      <span
        aria-hidden
        className={cn(
          "mt-2 block h-[3px] w-full -rotate-[0.4deg] rounded-full bg-linear-to-r from-transparent",
          align === "center" && "max-w-[min(100%,36rem)]",
          strokes[stroke],
        )}
      />
    </div>
  );
}
