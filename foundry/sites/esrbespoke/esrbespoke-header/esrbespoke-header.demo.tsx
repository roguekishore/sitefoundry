import { EsrbespokeHeader, type EsrbespokeHeaderProps } from "./esrbespoke-header";

export const headerSample: EsrbespokeHeaderProps = {
  brand: "Marlowe Coachworks",
  mark: "Marlowe",
  tagline: "Restoration house",
  homeHref: "#top",
  links: [
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ],
  contact: { label: "Contact", href: "#contact" },
  tone: "dark",
};

/** The same header for an inner page: that page marked, on paper or charcoal. */
export function headerSampleFor(active: string, tone: EsrbespokeHeaderProps["tone"] = "light"): EsrbespokeHeaderProps {
  return {
    ...headerSample,
    tone,
    links: headerSample.links.map((link) => ({ ...link, active: link.label === active })),
  };
}

export default function Demo() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeHeader {...headerSample} />
      <div className="dark h-svh bg-muted" />
      <div className="h-[150svh]" />
    </div>
  );
}
