import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WarpButton } from "@foundry/warp-button";
import { WarpMedia } from "@foundry/warp-media";
import { WarpSection } from "@foundry/warp-section";

export interface WarpEverywhereCommand {
  /** the platform name in the switch, e.g. "Mac" */
  platform: string;
  /** the install command shown after "$" */
  command: string;
}

export interface WarpEverywhereProduct {
  name: string;
  text: string;
  /** the square image; a placeholder when empty */
  media?: ReactNode;
  /** what the image shows, for screen readers */
  mediaLabel?: string;
  /** a full-width ink button */
  cta?: { label: ReactNode; href: string };
  /** or an install command box with a platform switch */
  commands?: WarpEverywhereCommand[];
}

export interface WarpEverywhereProps {
  id?: string;
  title: string;
  /** the brand-blue line under the title */
  lead?: string;
  /** three in the original */
  products: WarpEverywhereProduct[];
  /** screen-reader label for the copy button */
  copyLabel?: string;
  className?: string;
}

function CommandBox({ commands, copyLabel }: { commands: WarpEverywhereCommand[]; copyLabel?: string }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = commands[active] ?? commands[0];
  return (
    <div>
      <div className="flex h-[3.75rem] items-center gap-3 border border-border px-5 font-mono text-[0.9375rem] text-muted-foreground">
        <span aria-hidden>$</span>
        <span className="min-w-0 flex-1 truncate">{current.command}</span>
        <button
          type="button"
          aria-label={copyLabel}
          onClick={() => {
            navigator.clipboard?.writeText(current.command).then(() => setCopied(true), () => setCopied(false));
          }}
          className="shrink-0 text-muted-foreground transition-colors duration-150 hover:text-primary motion-reduce:transition-none"
        >
          {copied ? <Check aria-hidden className="size-3.5" strokeWidth={1.75} /> : <Copy aria-hidden className="size-3.5" strokeWidth={1.75} />}
        </button>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[0.8125rem] tracking-[calc(0.04em_-_var(--warp-squeeze,0em))]">
        {commands.map((c, i) => (
          <span key={c.platform} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-foreground/20">|</span>}
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => {
                setActive(i);
                setCopied(false);
              }}
              className={cn("transition-colors duration-150 motion-reduce:transition-none", i === active ? "text-foreground" : "text-foreground/40 hover:text-foreground")}
            >
              {c.platform}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Three product cards in one framed row: image, name, line, and a button or command. */
export function WarpEverywhere({ id, title, lead, products, copyLabel, className }: WarpEverywhereProps) {
  return (
    <WarpSection id={id} title={title} lead={lead} leadTone="brand" className={className}>
      <div className="-mt-2 grid grid-cols-1 border border-border bg-card lg:grid-cols-3">
        {products.map((p, i) => (
          <article key={p.name} className={cn("flex min-w-0 flex-col", i > 0 && "border-t border-border lg:border-t-0 lg:border-l")}>
            <WarpMedia label={p.mediaLabel} className="aspect-square">
              {p.media}
            </WarpMedia>
            <div className="flex flex-1 flex-col border-t border-border px-[1.125rem] pt-7 pb-5 lg:px-5">
              <h3 className="font-display text-[0.9375rem] leading-[1.4] font-semibold tracking-[-0.01em]">{p.name}</h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.6] tracking-[calc(0.04em_-_var(--warp-squeeze,0em))] text-muted-foreground">{p.text}</p>
              <div className="mt-6">
                {p.commands && p.commands.length > 0 ? (
                  <CommandBox commands={p.commands} copyLabel={copyLabel} />
                ) : (
                  p.cta && (
                    <WarpButton href={p.cta.href} size="lg" className="w-full justify-center font-semibold">
                      {p.cta.label}
                    </WarpButton>
                  )
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </WarpSection>
  );
}
