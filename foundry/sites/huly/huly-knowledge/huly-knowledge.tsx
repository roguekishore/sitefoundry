import type { ReactNode } from "react";
import { AtSign, Bold, Camera, Copy, Italic, Lightbulb, Pencil, Plus, Strikethrough, Underline } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./huly-knowledge.css";

/** A piece of a paragraph: plain text, styled text, or the orange caret handle. */
export type HulyTextPiece = string | { text: string; style: "strike" | "muted" | "bold" } | { caret: true };

export interface HulyKnowledgeProps {
  /** the heading; a blue caret handle sits after its last word */
  title: string | string[];
  /** first paragraph */
  intro?: string;
  /** a highlighted passage with selection handles and a floating format toolbar above it */
  marked?: { strong: string; text: string; rest?: string };
  /** label of the blue chip in the toolbar */
  toolbarLabel?: string;
  image?: { src: string; alt: string };
  /** paragraph after the image, in pieces (strike, muted, caret) */
  body?: HulyTextPiece[];
  /** a code sample, shown in a dark block with simple syntax colours */
  code?: string;
  /** paragraph after the code */
  outro?: string;
  /** greyed prompt at the end, after a blinking caret */
  placeholder?: string;
  /** short notes in the left margin on wide screens */
  notes?: { title: string; text: string }[];
  className?: string;
}

const blink = "animate-[huly-blink_1.1s_step-end_infinite] motion-reduce:animate-none";
const paragraph = "text-lg leading-[1.375] tracking-[-0.02em] text-foreground/85 text-pretty lg:text-[1.375rem]";

/** A caret with a ring on top, like a collaborator's cursor. */
function CaretHandle({ tone, ring }: { tone: "glow" | "highlight" | "foreground"; ring?: "large" | "small" }) {
  const colour = { glow: "bg-glow", highlight: "bg-highlight", foreground: "bg-foreground" }[tone];
  const border = { glow: "border-glow", highlight: "border-highlight", foreground: "border-foreground" }[tone];
  return (
    <span aria-hidden className={cn("relative mx-[0.04em] inline-block h-[0.9em] w-[2px] translate-y-[0.12em] align-baseline", colour)}>
      {ring && (
        <span
          className={cn(
            "absolute left-1/2 rounded-full border-2 bg-background/40 shadow-lg shadow-foreground/10 backdrop-blur-[1px]",
            border,
            ring === "large" ? "-top-[0.55em] size-[0.8em] -translate-x-[15%]" : "-top-[1.6em] size-[1.7em] -translate-x-1/2",
          )}
        />
      )}
      <span className={cn("absolute -bottom-[0.18em] left-1/2 size-[0.3em] -translate-x-1/2 rounded-full", colour)} />
    </span>
  );
}

/** Very small highlighter: keywords, types, strings, numbers, calls and property names. */
function highlight(code: string): ReactNode[] {
  const re =
    /(\/\/[^\n]*)|("[^"\n]*"|'[^'\n]*'|`[^`]*`)|\b(interface|type|const|let|var|function|return|export|import|from|if|else|new|async|await|undefined|null|true|false)\b|\b([A-Z][A-Za-z0-9]*)\b|\b(\d+(?:\.\d+)?)\b|\b([a-z_$][\w$]*)(?=\s*\()|\b([a-z_$][\w$]*)(?=\??\s*:)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of code.matchAll(re)) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const cls = m[1]
      ? "text-foreground/40"
      : m[2]
        ? "text-chart-2"
        : m[3]
          ? "text-chart-3"
          : m[4]
            ? "text-chart-1"
            : m[5]
              ? "text-chart-4"
              : m[6]
                ? "text-chart-5"
                : "text-chart-1/85";
    out.push(
      <span key={key++} className={cls}>
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

export function HulyKnowledge({ title, intro, marked, toolbarLabel, image, body, code, outro, placeholder, notes, className }: HulyKnowledgeProps) {
  const lines = Array.isArray(title) ? title : [title];
  const tools = [Bold, Italic, Underline, Strikethrough];
  return (
    <section className={cn("relative bg-background py-section text-foreground lg:py-40", className)}>
      <div className="relative mx-auto max-w-page px-gutter">
        {notes && notes.length > 0 && (
          <aside className="absolute inset-y-0 left-0 hidden w-60 flex-col justify-evenly py-40 lg:flex">
            {notes.map((n) => (
              <div key={n.title} className="sticky top-32 rounded-xl">
                <p className="text-[0.9375rem] font-medium tracking-[-0.01em]">{n.title}</p>
                <p className="mt-2 text-sm leading-snug text-foreground/75">{n.text}</p>
              </div>
            ))}
          </aside>
        )}

        <div className="max-w-[44rem] lg:ml-[24.5rem]">
          <h2 className="font-display text-[2.25rem] leading-[0.95] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[5rem] lg:leading-none lg:tracking-[-0.05em]">
            {lines.map((line, i) => (
              <span key={i} className="sm:block">
                {line}
                {i < lines.length - 1 ? " " : <CaretHandle tone="glow" ring="large" />}
              </span>
            ))}
          </h2>

          {intro && <p className={cn(paragraph, "mt-6 lg:mt-12")}>{intro}</p>}

          {marked && (
            <div className="relative mt-16 lg:mt-14">
              {/* floating format toolbar */}
              <div aria-hidden className="dark absolute -top-11 left-[18%] flex items-center gap-1 rounded-lg bg-background p-1 text-foreground/70 shadow-xl shadow-foreground/15 lg:-top-12 lg:left-[30%] lg:gap-1.5 lg:p-1.5">
                {toolbarLabel && (
                  <span className="flex h-6 items-center gap-1 rounded-md bg-glow px-2 text-xs text-foreground lg:h-7 lg:text-sm">
                    <Plus className="size-3.5" />
                    {toolbarLabel}
                  </span>
                )}
                <span className="mx-1 h-5 w-px bg-foreground/15" />
                {tools.map((Icon, i) => (
                  <Icon key={i} className="size-3.5 lg:size-4" />
                ))}
                <span className="mx-1 h-5 w-px bg-foreground/15" />
                <AtSign className="size-3.5 lg:size-4" />
                <Lightbulb className="size-3.5 lg:size-4" />
              </div>
              <p className={paragraph}>
                <span className="relative">
                  <CaretHandle tone="foreground" />
                  <mark className="bg-chart-4/70 box-decoration-clone px-0.5 text-foreground/90">
                    <strong className="font-semibold text-foreground">{marked.strong}</strong> {marked.text}
                  </mark>
                  <CaretHandle tone="foreground" />
                </span>
                {marked.rest && <> {marked.rest}</>}
              </p>
            </div>
          )}

          {image && <img src={image.src} alt={image.alt} className="mt-8 aspect-[706/423] w-full rounded-xl object-cover lg:mt-10" />}

          {body && (
            <p className={cn(paragraph, "mt-8 lg:mt-12")}>
              {body.map((piece, i) =>
                typeof piece === "string" ? (
                  <span key={i}>{piece}</span>
                ) : "caret" in piece ? (
                  <CaretHandle key={i} tone="highlight" ring="small" />
                ) : (
                  <span
                    key={i}
                    className={cn(
                      piece.style === "strike" && "text-foreground/40 line-through",
                      piece.style === "muted" && "text-foreground/40",
                      piece.style === "bold" && "font-semibold text-foreground",
                    )}
                  >
                    {piece.text}
                  </span>
                ),
              )}
            </p>
          )}

          {code && (
            <div className="dark relative mt-8 overflow-hidden rounded-xl bg-background text-foreground lg:mt-12">
              <span aria-hidden className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-md bg-foreground/10 lg:top-5 lg:right-5">
                <Copy className="size-4" />
              </span>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed lg:p-8 lg:text-[0.9375rem]">
                <code>{highlight(code)}</code>
              </pre>
            </div>
          )}

          {outro && <p className={cn(paragraph, "mt-8 lg:mt-12")}>{outro}</p>}

          {placeholder && (
            <div className="mt-8 lg:mt-12">
              <p className="flex items-center gap-1 text-lg text-foreground/35 lg:text-[1.375rem]">
                <span aria-hidden className={cn("relative h-7 w-[2px] bg-foreground", blink)}>
                  <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-foreground" />
                </span>
                {placeholder}
              </p>
              <div aria-hidden className="mt-3 inline-flex items-center gap-1 rounded-full bg-card p-1 shadow-lg shadow-foreground/10">
                <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
                  <Plus className="size-4" />
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-muted text-foreground/70">
                  <Camera className="size-4" />
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-muted text-foreground/70">
                  <Pencil className="size-4" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
