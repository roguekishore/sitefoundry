import { LedupFooter, type LedupFooterProps } from "./ledup-footer";

export const footerSample: LedupFooterProps = {
  statement: "Light you can build your projects on.",
  columns: [
    {
      title: "Resources",
      links: [
        { label: "News", href: "#news" },
        { label: "Brochures", href: "#brochures" },
        { label: "Catalogue", href: "#catalogue" },
        { label: "Datasheets", href: "#datasheets" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Stockists", href: "#stockists" },
        { label: "Our story", href: "#about" },
      ],
    },
    {
      title: "Ranges",
      links: [
        { label: "Indoor lighting", href: "#indoor" },
        { label: "Outdoor lighting", href: "#outdoor" },
        { label: "Strips & neon", href: "#strips" },
        { label: "Lamps & trims", href: "#lamps" },
        { label: "Industrial & emergency", href: "#industrial" },
        { label: "Smart control", href: "#smart" },
      ],
    },
    {
      title: "Contact",
      untitledOnDesktop: true,
      links: [
        { label: "hello@calvera.example", href: "mailto:hello@calvera.example" },
        { label: "Instagram", href: "#instagram" },
      ],
    },
  ],
  copyright: "Calvera © 2026. All rights reserved.",
  legal: [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
};

export default function Demo() {
  return <LedupFooter {...footerSample} />;
}
