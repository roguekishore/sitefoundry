import { ArcAccounts, type ArcAccountsProps } from "./arc-accounts";

export const accountsSample: ArcAccountsProps = {
  heading: "Accounts that keep pace with your runway",
  accounts: [
    {
      badge: "Operating",
      title: "Pay and get paid without the paperwork",
      body: "Wires, ACH and corporate cards with spending rules, approvals and a named banker, all on one screen.",
      linkLabel: "Learn more",
      href: "#",
      tone: "accent",
    },
    {
      badge: "Reserve",
      title: "Put idle runway to work",
      body: "Ladder short-dated Treasuries automatically while keeping next-day access to every dollar.",
      linkLabel: "Learn more",
      href: "#",
      tone: "secondary",
    },
    {
      badge: "Covenant",
      title: "Keep your lender happy, quietly",
      body: "A lender-controlled account with live balances, threshold alerts and sign-off rules, set up in an afternoon.",
      linkLabel: "Learn more",
      href: "#",
      tone: "highlight",
    },
  ],
};

export default function Demo() {
  return <ArcAccounts {...accountsSample} />;
}
