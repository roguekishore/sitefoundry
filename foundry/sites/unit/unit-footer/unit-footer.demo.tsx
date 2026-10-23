import { IconBrandLinkedinFilled, IconBrandX } from "@tabler/icons-react";
import { UnitFooter, type UnitFooterProps } from "./unit-footer";

export const footerSample: UnitFooterProps = {
  groups: [
    { title: "Platform", links: [{ label: "How Corbel works", href: "#" }, { label: "Done-for-you programs", href: "#" }] },
    { title: "Build", links: [{ label: "Test mode", href: "#" }, { label: "API reference", href: "#" }, { label: "System status", href: "#" }, { label: "How-to guides", href: "#" }] },
    { title: "Solutions", links: [{ label: "Accounts & balances", href: "#" }, { label: "Payments", href: "#" }, { label: "Cards", href: "#" }, { label: "Credit", href: "#" }] },
    { title: "Learn", links: [{ label: "Library", href: "#" }, { label: "Customer stories", href: "#" }, { label: "Ledger design", href: "#" }, { label: "Running a program", href: "#" }, { label: "Choosing a setup", href: "#" }] },
    { title: "Company", links: [{ label: "About us", href: "#" }, { label: "Jobs", href: "#" }, { label: "Trust", href: "#" }] },
    { title: "Who it's for", links: [{ label: "Business software", href: "#" }, { label: "Consumer apps", href: "#" }, { label: "Freelance platforms", href: "#" }, { label: "Industry software", href: "#" }] },
  ],
  newsletter: { title: "Stay in the loop", placeholder: "Your work email", submitLabel: "Subscribe" },
  social: {
    title: "Follow along",
    links: [
      { label: "Corbel on X", href: "#", icon: <IconBrandX stroke={2} /> },
      { label: "Corbel on LinkedIn", href: "#", icon: <IconBrandLinkedinFilled /> },
    ],
  },
  certified: { title: "Audited and certified", count: 2 },
  brand: "corbel",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Responsible use", href: "#" },
  ],
  notes: [
    "1. Corbel is a software company, not a bank. Accounts and cards are provided by our partner banks. Balance figures include funds held across the partner network. Cards are issued by partner banks under licence from the card scheme.",
    "Balances may qualify for pass-through deposit insurance only when the rules for it are met. If they are not met, funds may not be insured should a partner bank fail.",
    "2. Sweep programs are offered through selected partner banks; see each bank's disclosures for details.",
  ],
  copyright: "© 2026 Corbel Systems Inc.",
};

export default function Demo() {
  return <UnitFooter {...footerSample} />;
}
