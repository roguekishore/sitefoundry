import { Layers3 } from "lucide-react";
import { SharplinkHeader, type SharplinkHeaderProps } from "./sharplink-header";

export const headerSample: SharplinkHeaderProps = {
  brand: "Ferrowell",
  brandMark: <Layers3 strokeWidth={2} />,
  homeHref: "#",
  links: [
    { label: "About", href: "#about" },
    { label: "Shareholders", href: "#shareholders" },
    { label: "Thesis", href: "#thesis" },
    { label: "Journal", href: "#journal" },
    { label: "LMN ledger", href: "#ledger" },
  ],
  action: { label: "Open the ledger", href: "#ledger-app" },
  menuLabel: "Menu",
  initialTone: "dark",
};

export default function Demo() {
  return (
    <div className="relative isolate">
      <SharplinkHeader {...headerSample} />
      <div data-sharplink-tone="dark" className="dark h-[110vh] bg-background" />
      <div data-sharplink-tone="light" className="h-[110vh] bg-accent" />
    </div>
  );
}
