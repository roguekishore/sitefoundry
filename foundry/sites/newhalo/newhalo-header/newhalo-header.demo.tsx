import { Orbit } from "lucide-react";
import { NewhaloHeader, type NewhaloHeaderProps } from "./newhalo-header";

export const navLinks = [
  { label: "Instrument", href: "#product" },
  { label: "Get started", href: "#pricing" },
  { label: "About", href: "#company" },
  { label: "Help", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Investors", href: "#investors" },
];

/** The header with one link marked as the current page. */
export function headerFor(active?: string): NewhaloHeaderProps {
  return { ...headerSample, links: navLinks.map((l) => ({ ...l, active: l.label === active })) };
}

export const headerSample: NewhaloHeaderProps = {
  brand: "Brio",
  brandIcon: <Orbit strokeWidth={2.25} />,
  brandHref: "#",
  links: navLinks,
  cta: { label: "Pre-order now", shortLabel: "Pre-order", href: "#checkout" },
  language: { label: "De", href: "#" },
  accessibilityLabel: "Accessibility options",
  menuLabels: { open: "Open menu", close: "Close menu" },
};

export default function Demo() {
  return (
    <div className="dark min-h-[150vh] bg-background">
      <NewhaloHeader {...headerFor("Help")} />
    </div>
  );
}
