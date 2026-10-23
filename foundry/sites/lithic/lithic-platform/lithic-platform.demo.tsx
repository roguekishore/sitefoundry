import { LithicPlatform, type LithicPlatformProps } from "./lithic-platform";

export const platformSample: LithicPlatformProps = {
  title: "Quick, adaptable and hard to break. Done.",
  tabsLabel: "Platform areas",
  tabs: [
    {
      label: "Authorisation engine",
      title: "Steady and quick under load",
      text: "Native network links and an uptime record that holds keep every swipe flowing and every ledger line easy to match.",
      bullets: ["Any-currency settlement", "Rich merchant detail", "Grouped transactions"],
      link: { label: "See how", href: "#" },
    },
    {
      label: "Issuing",
      title: "Cards on your terms",
      text: "Create virtual and physical cards in one call, set spend rules per card and change them while the card is in use.",
      bullets: ["Instant virtual cards", "Custom spend rules", "Branded physical cards"],
      link: { label: "See how", href: "#" },
    },
    {
      label: "Risk rules",
      title: "Stop bad spend before it lands",
      text: "Score every authorisation in real time with rules you write, and step in with a single API call when something looks off.",
      bullets: ["Real-time scoring", "Rules as code", "Case review queue"],
      link: { label: "See how", href: "#" },
    },
    {
      label: "Ledgers",
      title: "Balances you can trust",
      text: "Hold funds, move money between accounts and reconcile to the cent with a double-entry ledger built in.",
      bullets: ["Double-entry ledger", "Instant transfers", "Daily statements"],
      link: { label: "See how", href: "#" },
    },
  ],
};

export default function Demo() {
  return <LithicPlatform {...platformSample} />;
}
