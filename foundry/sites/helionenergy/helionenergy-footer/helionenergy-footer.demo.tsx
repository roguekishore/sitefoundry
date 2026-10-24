import type { HelionenergyFooterProps } from "./helionenergy-footer";
import { HelionenergyFooter } from "./helionenergy-footer";

export const footerSample: HelionenergyFooterProps = {
  newsletterLabel: "Newsletter",
  emailPlaceholder: "you@email.com",
  submitLabel: "Subscribe",
  groups: [
    [
      { label: "Science", href: "#" },
      { label: "Kiln", href: "#" },
      { label: "Basin", href: "#" },
      { label: "Fuel", href: "#" },
    ],
    [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
      { label: "Questions", href: "#" },
    ],
    [
      { label: "Suppliers", href: "#" },
      { label: "Sites", href: "#" },
      { label: "Contact", href: "#" },
    ],
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  copyright: "©2026 Vantor",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  wordmark: "VANTOR",
};

export default function Demo() {
  return <HelionenergyFooter {...footerSample} />;
}
