// Sample content lives here (gallery only); the page reuses it. Kestrel is made up.
import { Smartphone, Tablet } from "lucide-react";
import { RampFooter, type RampFooterProps } from "./ramp-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: RampFooterProps = {
  primaryLinks: links("Company", "Jobs", "Graduate program", "Customer stories", "Help desk", "What's new", "Kestrel for builders", "Research", "Developer docs", "Compare"),
  groups: [
    {
      title: "Products",
      links: links("Company cards", "Expenses", "Spend controls", "Budgets", "Accounts", "Trips", "Repayments", "Purchasing", "Bills", "Suppliers", "Approvals", "Safety", "Phone app"),
    },
    { title: "Platform", links: links("How it fits", "Bookkeeping", "Agents", "Reports", "Savings", "Connections", "Many entities", "Worldwide") },
    { title: "Partners", links: links("Accountants", "Investors", "Implementers", "App partners", "Payroll partners", "Resellers") },
    { title: "Teams", links: links("New companies", "Small teams", "Growing teams", "Large teams") },
    { title: "Free tools", links: links("Perks", "Find a bookkeeper", "Savings estimate", "Per diem tool", "Mileage tool", "Card chooser", "Policy writer", "Supplier list") },
  ],
  legalLinks: links("Terms", "Editorial policy", "Privacy", "Cookie choices"),
  legal: [
    "© 2026 Kestrel Finance Inc. Kestrel and the feather mark are trademarks of Kestrel Finance Inc.",
    "Help line: +1-555-010-2040",
    "Kestrel is a fictional company made for this design sample. Cards, accounts and figures shown here are illustrative only and do not describe any real financial product, issuer or bank.",
    "Nothing on this page is an offer of credit, deposit services or investment advice. Rates, limits and availability are invented for layout purposes.",
  ],
  address: ["Kestrel Finance Inc.", "200 Example Avenue, Floor 9", "Springfield, ST 00000"],
  badges: [
    { label: "iPhone app", href: "#", icon: <Smartphone aria-hidden strokeWidth={1.75} /> },
    { label: "Android app", href: "#", icon: <Tablet aria-hidden strokeWidth={1.75} /> },
  ],
  socials: links("LinkedIn", "Threads", "YouTube"),
  signupLead: (
    <>
      Join the <b>60,000+ teams</b> running leaner books with Kestrel.
    </>
  ),
  form: { fieldLabel: "Work email", placeholder: "Your work email", buttonLabel: "Start free today" },
};

export default function Demo() {
  return <RampFooter {...footerSample} />;
}
