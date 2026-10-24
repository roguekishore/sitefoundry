import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FramerButton } from "@foundry/framer-button";
import { FramerHeading } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";

export interface FramerCtaProps {
  /** the centred closing title; "\n" breaks on desktop only */
  title: string;
  /** example prompts the box types out in turn */
  prompts: string[];
  /** screen-reader label for the prompt box */
  promptLabel: string;
  /** the small model label at the box's foot */
  model?: string;
  /** screen-reader label for the send button */
  sendLabel: string;
  /** suggestion chips under the box */
  chips?: { label: string; href: string }[];
  /** the quiet link under the chips */
  secondary?: { label: string; href: string };
  /** the white button shown instead of the prompt box on phones */
  action: { label: string; href: string };
  /** the phone panel under the button; empty shows a glowing placeholder */
  media?: ReactNode;
  /** screen-reader label for that placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Types each prompt, holds it, erases it, then moves to the next. */
function useTypedPrompt(prompts: string[]) {
  const [text, setText] = useState(prompts[0] ?? "");
  const key = prompts.join("\u0000");
  useEffect(() => {
    if (!prompts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let p = 0;
    let i = 0;
    let erasing = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = prompts[p];
      if (!erasing) {
        i += 1;
        setText(full.slice(0, i));
        if (i >= full.length) {
          erasing = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 45);
      } else {
        i -= 1;
        setText(full.slice(0, i));
        if (i <= 0) {
          erasing = false;
          p = (p + 1) % prompts.length;
          timer = setTimeout(tick, 500);
          return;
        }
        timer = setTimeout(tick, 15);
      }
    };
    setText("");
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return text;
}

/** Centred title over a self-typing prompt box. */
export function FramerCta({
  title,
  prompts,
  promptLabel,
  model,
  sendLabel,
  chips = [],
  secondary,
  action,
  media,
  mediaLabel,
  className,
}: FramerCtaProps) {
  const typed = useTypedPrompt(prompts);
  return (
    <section className={cn("bg-background px-gutter pt-24 pb-14 text-foreground lg:pt-30 lg:pb-38", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center text-center">
        <FramerHeading size="title">{title}</FramerHeading>

        {/* phones: a button and a glowing panel */}
        <FramerButton href={action.href} className="mt-4 h-[2.125rem] px-3.5 text-sm lg:hidden">
          {action.label}
        </FramerButton>
        {/* the padding leaves room for the glow, which the fade mask would otherwise cut off */}
        <div className="mt-6 h-56 w-full max-w-[23.5rem] mask-b-from-55% mask-b-to-100% px-6 pt-8 lg:hidden">
          {media ?? <FramerPlaceholder tone="glow" label={mediaLabel} className="rounded-2xl" />}
        </div>

        {/* desktop: the prompt box */}
        <form className="mt-9 hidden w-full max-w-[36.25rem] flex-col rounded-[1.125rem] border border-input bg-secondary p-2.5 text-left lg:flex">
          <textarea
            aria-label={promptLabel}
            placeholder={typed}
            rows={5}
            className="h-[7.5rem] w-full resize-none bg-transparent text-[0.8125rem] leading-5 tracking-[0.01em] text-foreground outline-none placeholder:text-muted-foreground/80"
          />
          <div className="mt-2 flex items-center justify-between border-t border-input pt-2.5">
            <span className="text-xs text-muted-foreground">{model}</span>
            <button
              type="submit"
              aria-label={sendLabel}
              className="grid size-5 place-items-center rounded-full bg-muted-foreground/60 text-background transition-colors duration-150 hover:bg-foreground motion-reduce:transition-none"
            >
              <ArrowUp aria-hidden className="size-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </form>
        {chips.length > 0 && (
          <ul className="mt-2.5 hidden flex-wrap justify-center gap-2.5 lg:flex">
            {chips.map((chip) => (
              <li key={chip.label}>
                <a
                  href={chip.href}
                  className="inline-flex h-6 items-center rounded-md border border-input bg-secondary px-2.5 text-xs tracking-[0.01em] text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none"
                >
                  {chip.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {secondary && (
          <a
            href={secondary.href}
            className="group mt-12 hidden items-center gap-0.5 text-xs text-foreground lg:inline-flex"
          >
            {secondary.label}
            <ArrowRight
              aria-hidden
              className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              strokeWidth={2}
            />
          </a>
        )}
      </div>
    </section>
  );
}
