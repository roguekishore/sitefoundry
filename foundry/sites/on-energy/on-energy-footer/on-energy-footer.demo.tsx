// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { Mail, Rss } from "lucide-react";
import { OnEnergyFooter, type OnEnergyFooterProps } from "./on-energy-footer";

export const footerSample: OnEnergyFooterProps = {
  tagline: "The grid is messy. Reaching us is not.\nThe Sorrel crew picks up any hour.",
  cta: { label: "Talk to us", href: "#" },
  links: [
    { label: "Platform", href: "#", more: true },
    { label: "Use cases", href: "#", more: true },
    { label: "Funding", href: "#" },
    { label: "Company", href: "#", more: true },
    { label: "Library", href: "#", more: true },
    { label: "Contact", href: "#" },
    { label: "Press room", href: "#" },
  ],
  socials: [
    { label: "Journal feed", href: "#", icon: <Rss /> },
    { label: "Email us", href: "#", icon: <Mail /> },
  ],
  wordmark: "sorrel",
  copyright: "© 2026 Sorrel Power Systems, Inc. All rights reserved.",
  legal: [
    { label: "Patents", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Demo() {
  return <OnEnergyFooter {...footerSample} />;
}
