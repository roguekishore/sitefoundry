import { UnitPlatform, type UnitPlatformProps } from "./unit-platform";

export const platformSample: UnitPlatformProps = {
  heading: "One platform, set up the way you work.",
  cta: { label: "Tour the platform", href: "#" },
  tabs: [
    {
      title: "Core primitives",
      body: "Accounts, cards and payment rails, all on one shared ledger.",
      options: [
        { label: "Named accounts", on: true },
        { label: "Pooled balances", on: true },
        { label: "Cards", on: true },
        { label: "Same-day ACH", on: true },
        { label: "Wires", on: true },
        { label: "Paper checks", on: true },
        { label: "Global payouts", on: true },
        { label: "FedNow", on: true },
      ],
    },
    {
      title: "Developer kit",
      body: "Everything you need to run the product, hardened for the odd cases.",
      options: [
        { label: "REST API", on: true },
        { label: "Operator console", on: true },
        { label: "Drop-in widgets", on: false, control: "toggle" },
      ],
    },
    {
      title: "Operations",
      body: "Onboarding checks, fraud and support: the busywork, handed to us.",
      options: [
        { label: "Identity checks", on: false, control: "toggle" },
        { label: "Transaction monitoring", on: false, control: "toggle" },
        { label: "Chargebacks", on: true, control: "toggle" },
        { label: "Ledger matching", on: false, control: "toggle" },
        { label: "Risk scoring", on: true, control: "toggle" },
        { label: "Monthly statements", on: false, control: "toggle" },
        { label: "Reports", on: false, control: "toggle" },
        { label: "Secure vault", on: false, control: "toggle" },
      ],
    },
  ],
};

export default function Demo() {
  return <UnitPlatform {...platformSample} />;
}
