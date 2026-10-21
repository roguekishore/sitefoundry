import { AatArchitectenFooter, type AatArchitectenFooterProps } from "./aat-architecten-footer";

export const footerSample: AatArchitectenFooterProps = {
  brand: "Brem",
  descriptor: "Architects",
  homeHref: "#top",
  nav: [
    { label: "Home", href: "#top", current: true },
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Questions", href: "#questions" },
    { label: "Contact", href: "#contact" },
  ],
  address: ["Lindenplein 4", "2800 Mechelen"],
  addressHref: "#map",
  contacts: [
    { label: "studio@brem.example", href: "mailto:studio@brem.example" },
    { label: "+32 15 20 48 61", href: "tel:+3215204861" },
  ],
  socials: [
    { label: "LinkedIn", href: "#linkedin" },
    { label: "Instagram", href: "#instagram" },
  ],
  copyright: "©2026",
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
  ],
  registration: "Architect licence A-41207",
  credit: { label: "site: Field", href: "#credit" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-40" />
      <AatArchitectenFooter {...footerSample} />
    </div>
  );
}
