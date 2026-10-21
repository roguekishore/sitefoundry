import { RollersHeader, type RollersHeaderProps } from "./rollers-header";

export const headerSample: RollersHeaderProps = {
  brand: "Stonebank",
  homeHref: "#",
  tagline: "Dry hire & operated hire",
  phone: { label: "Call 1800 940 220", href: "tel:1800940220" },
  menuLabel: "Menu",
  closeLabel: "Close the menu",
  links: [
    { label: "Home", href: "#" },
    { label: "Our story", href: "#story" },
    { label: "The yard", href: "#yard" },
    { label: "Guides", href: "#guides" },
    { label: "Work with us", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Ask for a price", href: "#contact" },
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-muted">
      <RollersHeader {...headerSample} />
    </div>
  );
}
