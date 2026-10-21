import { M3PgFooter, type M3PgFooterProps } from "./m3-pg-footer";

export const footerSample: M3PgFooterProps = {
  id: "contact",
  mark: "St/A",
  intro: "Large or small, simple or knotty: tell us what you have in mind and we'll work out the first step together.",
  formAction: "#contact",
  fields: [
    { name: "name", label: "Name*", required: true },
    { name: "email", label: "Email*", type: "email", required: true },
    { name: "company", label: "Company" },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "message", label: "Message", message: true },
  ],
  consent: "I have read the privacy notice and agree that my details may be used to answer this enquiry.",
  submitLabel: "Send",
  address: ["Am Mühlgraben 11", "96317 Rothenbach", "Germany", "+49 9261 448 120", "hello@steinach.example"],
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "#linkedin" },
    { label: "Instagram", href: "#instagram" },
  ],
  wordmark: "Steinach Architekten",
  wordmarkSize: 10.5,
  copyright: "Steinach Arch. © 2026",
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Imprint", href: "#imprint" },
    { label: "Site by Halde & Co.", href: "#credit" },
  ],
};

export default function Demo() {
  return <M3PgFooter {...footerSample} />;
}
