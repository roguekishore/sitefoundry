// Sample content lives here (gallery only); the page reuses it.
import { HalodentalOpusFooter, type HalodentalOpusFooterProps } from "./halodental-opus-footer";

export const footerSample: HalodentalOpusFooterProps = {
  groups: [
    { title: "Studio", links: [{ label: "Our story", href: "#" }, { label: "Jobs", href: "#" }] },
    { title: "Help", links: [{ label: "Contact", href: "#" }, { label: "Questions", href: "#" }, { label: "Press", href: "#" }] },
    { title: "Elsewhere", links: [{ label: "Newsletter", href: "#" }, { label: "Journal", href: "#" }] },
  ],
  secondary: { label: "See the Beacon up close", href: "#" },
  primary: { label: "Book a demo", href: "#" },
  legal: [
    { label: "Site terms", href: "#" },
    { label: "Privacy notice", href: "#" },
  ],
  copyright: "© 2026 Lumo Oral Devices, a fictional company. All rights reserved.",
};

export default function Demo() {
  return <HalodentalOpusFooter {...footerSample} />;
}
