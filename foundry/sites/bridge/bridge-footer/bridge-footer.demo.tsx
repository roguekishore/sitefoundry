import { Orbit } from "lucide-react";
import { BridgeFooter, type BridgeFooterProps } from "./bridge-footer";

export const footerSample: BridgeFooterProps = {
  brand: { name: "Orrery", href: "#", tagline: "a Halden company", icon: <Orbit aria-hidden strokeWidth={2.25} /> },
  columns: [
    [
      { label: "Home", href: "#", current: true },
      { label: "Platform", href: "#" },
      { label: "Use cases", href: "#" },
      { label: "API", href: "#" },
      { label: "About", href: "#" },
      { label: "Jobs", href: "#" },
    ],
    [
      { label: "Journal", href: "#" },
      { label: "Mastodon", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Privacy settings", href: "#" },
    ],
  ],
  finePrint: [
    "© 2026 Orrery Labs Ltd. All rights reserved.",
    "Orrery is a technology company, not a bank. Accounts outside the listed regions are provided by our licensed partners.",
    <>
      Money transmission in supported US states is provided by Orrery Payments Inc. For each state's licence details, see our{" "}
      <a href="#">licences page</a> and <a href="#">consumer notices</a>.
    </>,
    "Services in the European Economic Area are provided by Orrery Europe B.V., an electronic money institution supervised in the Netherlands. Sample text for a design demo.",
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

export default function Demo() {
  return <BridgeFooter {...footerSample} />;
}
