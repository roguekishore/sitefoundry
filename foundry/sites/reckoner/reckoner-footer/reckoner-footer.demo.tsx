// Sample content lives here (gallery only); the page reuses it. The firm and its contacts are made up.
import { ChartNoAxesColumnIncreasing, Users } from "lucide-react";
import { ReckonerFooter, type ReckonerFooterProps } from "./reckoner-footer";

export const footerSample: ReckonerFooterProps = {
  brand: {
    name: "Wexmoor",
    descriptor: "Credit partners",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2.5} />,
    href: "#",
  },
  tagline: "Credit income, held to account",
  nav: [
    { label: "Home", href: "#" },
    { label: "Our firm", href: "#firm" },
    { label: "Strategies", href: "#strategies" },
    { label: "Funds", href: "#funds" },
  ],
  legal: [
    { label: "Terms & disclosures", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
    { label: "Communications policy", href: "#communications" },
  ],
  parent: "A Fieldstone Holdings company",
  copyright: "Registered investment adviser © 2026 Wexmoor Credit Partners. All rights reserved.",
  subscribe: {
    label: "Your work email",
    placeholder: "you@yourfirm.com",
    button: "Subscribe",
    consent: "By subscribing you agree to receive quarterly letters and fund updates from Wexmoor",
  },
  contacts: [
    {
      label: "Investor relations",
      lines: [
        { label: "ir@wexmoor.example", href: "mailto:ir@wexmoor.example" },
        { label: "646.555.0142", href: "tel:+16465550142" },
      ],
    },
    {
      label: "Press",
      lines: [{ label: "press@wexmoor.example", href: "mailto:press@wexmoor.example" }],
    },
  ],
  social: { label: "Network", href: "#", icon: <Users strokeWidth={2.5} /> },
};

export default function Demo() {
  return <ReckonerFooter {...footerSample} />;
}
