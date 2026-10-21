import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { EsrbespokeTypeOn } from "@foundry/esrbespoke-type-on";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeFooterGroup {
  /** the grey group title */
  title: string;
  /** its lines */
  lines: string[];
}

export interface EsrbespokeFooterProps {
  /** the company name, top left */
  brand: string;
  /** a few short lines at column 4 (company, place, year, rights) */
  note: string[];
  /** the stacked links at column 9 (desktop only) */
  links: { label: string; href: string }[];
  /** the email sign-up */
  newsletter: { placeholder: string; submitLabel: string; action?: string };
  /** contact and address groups */
  groups: EsrbespokeFooterGroup[];
  /** the handle bottom left */
  handle: { label: string; href: string };
  /** the legal link at the bottom */
  legal: { label: string; href: string };
  /** the huge wordmark */
  wordmark: string;
  /** stick to the bottom (desktop) so the page lifts off it */
  reveal?: boolean;
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const line = "block font-mono text-[0.875rem] leading-none tracking-[0.09em] uppercase font-stretch-[88%]";
const fade = "transition-opacity duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:opacity-50";

/** Full-window footer: top row of name/note/links, huge wordmark, contact groups, bottom row. */
export function EsrbespokeFooter({ brand, note, links, newsletter, groups, handle, legal, wordmark, reveal = false, tone = "light", id, className }: EsrbespokeFooterProps) {
  const trigger = reveal ? "page-end" : "view";
  return (
    <footer
      id={id}
      className={cn(toneClass(tone), "flex flex-col px-gutter pt-7 pb-6 lg:h-svh lg:pb-7", reveal && "lg:sticky lg:bottom-0 lg:z-0", className)}
    >
      <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-12">
        <EsrbespokeTypeOn text={brand} trigger={trigger} className={cn(line, "lg:col-span-3")} />
        <div className="lg:col-span-4 lg:col-start-4">
          {note.map((text, i) => (
            <EsrbespokeTypeOn key={i} text={text} trigger={trigger} delay={i * 120} className={line} />
          ))}
        </div>
        <div className="col-span-2 lg:col-span-2 lg:col-start-9">
          <ul className="hidden lg:block">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cn(line, "leading-[1.25]", fade)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <form action={newsletter.action} className="mt-10 flex items-center border-b border-foreground/30 pb-3 lg:mt-7">
            <input
              type="email"
              name="email"
              required
              placeholder={newsletter.placeholder}
              aria-label={newsletter.placeholder}
              className={cn(line, "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground")}
            />
            <button type="submit" className={cn(line, "text-muted-foreground transition-colors duration-300 hover:text-foreground")}>
              {newsletter.submitLabel}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-[6.5rem] grid flex-1 grid-cols-2 gap-x-4 lg:mt-0 lg:grid-cols-12">
        <p
          aria-hidden
          className="order-last col-span-2 mt-3 font-mono text-[14.5vw] leading-[0.8] font-bold tracking-[0.01em] whitespace-nowrap uppercase font-stretch-[125%] lg:order-none lg:col-span-6 lg:mt-0 lg:self-center lg:text-[7.5vw]"
        >
          {wordmark}
        </p>
        <div className="col-span-2 flex flex-col gap-10 lg:col-span-4 lg:col-start-9 lg:self-end lg:gap-8 lg:pb-14">
          {groups.map((group, g) => (
            <div key={g}>
              <EsrbespokeLabel quiet as="h3">{group.title}</EsrbespokeLabel>
              <div className="mt-3.5">
                {group.lines.map((text, i) => (
                  <EsrbespokeTypeOn key={i} text={text} trigger={trigger} delay={200 + g * 200 + i * 80} className={line} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 mt-[7.5rem] flex justify-between lg:hidden">
          <a href={handle.href} className={cn(line, fade)}>{handle.label}</a>
          <a href={legal.href} className={cn(line, "text-muted-foreground", fade)}>{legal.label}</a>
        </div>
      </div>

      <div className="hidden grid-cols-12 gap-x-4 lg:grid">
        <a href={handle.href} className={cn(line, "col-span-3", fade)}>{handle.label}</a>
        <a href={legal.href} className={cn(line, "col-span-3 col-start-4 text-muted-foreground", fade)}>{legal.label}</a>
      </div>
    </footer>
  );
}
