// Sample content lives here (gallery only); the page reuses it.
import { ClerkHeader, type ClerkHeaderProps } from "./clerk-header";

/** Latch, the fictional product of this recreation: a ring with a notch, like a latch bolt. */
export function LatchMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5h-5.2A4.3 4.3 0 1 1 12 7.7Z" fill="currentColor" />
      <rect x="14.2" y="2.9" width="7" height="7" rx="2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function LatchLogo() {
  return (
    <span className="flex items-center gap-1.5">
      <LatchMark className="size-[1.375rem]" />
      <span className="font-display text-[1.25rem] leading-none font-bold tracking-[-0.045em]">latch</span>
    </span>
  );
}

export const headerSample: ClerkHeaderProps = {
  brand: "Latch",
  logo: <LatchLogo />,
  announcement: { text: "Latch for Teams is out of beta", link: { label: "Read the note", href: "#news" } },
  links: [
    { label: "Product", href: "#product", hasMenu: true },
    { label: "Docs", href: "#docs", hasMenu: true },
    { label: "Updates", href: "#updates", hasMenu: true },
    { label: "About", href: "#about", hasMenu: true },
    { label: "Agents", href: "#agents", hasMenu: true },
    { label: "Plans", href: "#plans" },
  ],
  actions: [
    { label: "Log in", href: "#login" },
    { label: "Get started", href: "#start" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-72 bg-background">
      <ClerkHeader {...headerSample} />
      <div className="h-40 bg-card" />
    </div>
  );
}
