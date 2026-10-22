import { RhoHero, type RhoHeroProps } from "./rho-hero";

export const heroSample: RhoHeroProps = {
  badge: "New: treasury sweeps now run every day",
  badgeHref: "#",
  title: "Finance ops for teams that ship",
  lead: "Accounts, cards, bills and payroll in one calm dashboard, with real people on call around the clock when you need a hand. Sign up over a coffee.",
  form: { placeholder: "Company email", buttonLabel: "Get started", inputLabel: "Your company email", action: "#" },
  actions: [
    { label: "Book a call", href: "#", variant: "outline" },
    { label: "Try the agent", href: "#", variant: "inverse" },
  ],
  fineprint:
    "Ostra is a fictional finance platform made up for this demo. Nothing described here is a real account, card or bank product, and no bank is named or implied.",
};

export default function Demo() {
  return <RhoHero {...heroSample} />;
}
