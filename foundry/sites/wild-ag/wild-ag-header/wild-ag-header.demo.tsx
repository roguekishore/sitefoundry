import { WildAgHeader, type WildAgHeaderProps } from "./wild-ag-header";

export const headerSample: WildAgHeaderProps = {
  brand: "Talgrund",
  homeHref: "#top",
  menuLabel: "Open menu",
  closeLabel: "Close menu",
  links: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Partners", href: "#partners" },
    { label: "Method", href: "#method" },
  ],
  contact: { label: "Contact", href: "#contact" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <WildAgHeader {...headerSample} />
      <div className="h-svh bg-linear-15 from-primary to-highlight" />
      <div className="h-[150svh]" />
    </div>
  );
}
