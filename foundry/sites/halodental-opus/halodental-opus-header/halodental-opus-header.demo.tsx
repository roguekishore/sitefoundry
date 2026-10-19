// Sample content lives here (gallery only); the page reuses it.
import { Accessibility, Orbit } from "lucide-react";
import { HalodentalOpusHeader, type HalodentalOpusHeaderProps } from "./halodental-opus-header";

export const headerSample: HalodentalOpusHeaderProps = {
  brand: { name: "Lumen", href: "#", emblem: <Orbit aria-hidden strokeWidth={2.25} /> },
  links: [
    { label: "The Beacon", href: "#" },
    { label: "How it works", href: "#" },
    { label: "About", href: "#" },
    { label: "Questions", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Partners", href: "#" },
  ],
  cta: { label: "Book a demo", href: "#" },
  ctaShort: "Book",
  tiles: [
    { content: "En", href: "#" },
    { content: <Accessibility aria-hidden className="size-4" strokeWidth={1.5} />, href: "#", ariaLabel: "Accessibility options" },
  ],
  menuLabel: "Open menu",
};

export default function Demo() {
  // shown on a black panel, where it lives on the page
  return (
    <div className="p-1.5 lg:p-2.5">
      <div className="dark h-48 rounded-lg bg-card">
        <HalodentalOpusHeader {...headerSample} overlay={false} className="pt-0 lg:pt-0" />
      </div>
    </div>
  );
}
