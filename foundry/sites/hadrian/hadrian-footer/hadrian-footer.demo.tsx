// Sample content (gallery only); the page reuses it. Kestrel Works is made up.
import { Factory } from "lucide-react";
import { HadrianFooter, type HadrianFooterProps } from "./hadrian-footer";

export const footerSample: HadrianFooterProps = {
  brand: "Kestrel",
  homeHref: "#top",
  company: "Kestrel Works",
  links: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Journal", href: "#journal" },
  ],
  legal: [
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
  ],
  place: "Dayton, Ohio",
  placeIcon: <Factory strokeWidth={1.5} />,
};

export default function Demo() {
  return <HadrianFooter {...footerSample} />;
}
