import { EsrbespokeFooter, type EsrbespokeFooterProps } from "./esrbespoke-footer";

export const footerSample: EsrbespokeFooterProps = {
  brand: "Marlowe Coachworks",
  note: ["Restoration house.", "Fremantle, Western Australia.", "Est. 1991 · Marlowe.", "All rights reserved."],
  links: [
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ],
  newsletter: { placeholder: "Your email", submitLabel: "Join" },
  groups: [
    { title: "Contact", lines: ["(08) 6100 4420", "desk@marlowe.example", "7:30am – 4:30pm weekdays"] },
    { title: "Workshop", lines: ["12 Quarry Lane,", "North Fremantle WA 6159"] },
    { title: "Finish studio", lines: ["3 Tannery Row,", "O'Connor WA 6163"] },
  ],
  handle: { label: "@marlowe.works", href: "#" },
  legal: { label: "Privacy", href: "#privacy" },
  wordmark: "Marlowe",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="dark relative z-10 h-svh bg-background" />
      <EsrbespokeFooter {...footerSample} reveal />
    </div>
  );
}
