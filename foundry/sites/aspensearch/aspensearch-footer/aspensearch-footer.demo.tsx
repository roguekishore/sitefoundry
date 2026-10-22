import { Bird } from "lucide-react";
import { AspensearchFooter, type AspensearchFooterProps } from "./aspensearch-footer";

export const footerSample: AspensearchFooterProps = {
  id: "contact",
  tagline: "Make the next\nmove count",
  links: [
    { label: "Approach", href: "#about" },
    { label: "Firms", href: "#clients" },
    { label: "Stories", href: "#testimonials" },
    { label: "Partners", href: "#team" },
  ],
  clocks: [
    { city: "CHI", timeZone: "America/Chicago", fallback: "09:00 AM" },
    { city: "LDN", timeZone: "Europe/London", fallback: "03:00 PM" },
  ],
  email: { label: "mara@corvotalent.example", href: "mailto:mara@corvotalent.example" },
  social: { label: "Profiles", href: "#" },
  wordmark: "corvo",
  logo: <Bird aria-hidden className="size-24" strokeWidth={1} />,
  legal: "© 2026 Corvo Talent",
  legalLink: { label: "Privacy notice", href: "#" },
  credit: { text: "Site by", link: { label: "Studio Placeholder", href: "#" } },
  cta: { title: "Ready when\nyou are", label: "Book an intro call", href: "#contact" },
};

export default function Demo() {
  return <AspensearchFooter {...footerSample} />;
}
