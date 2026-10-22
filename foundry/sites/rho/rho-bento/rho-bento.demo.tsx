import { RhoBento, type RhoBentoProps } from "./rho-bento";

export const bentoSample: RhoBentoProps = {
  title: "One platform, every money job.",
  action: { label: "Get started", href: "#" },
  items: [
    { label: "Entity", title: "Form your company", body: "A Delaware C-corp filed in about a day, or start out as an LLC." },
    { label: "Accounts", title: "Open business checking", body: "Sign up in minutes and move money the same afternoon.", size: 2 },
    { label: "Treasury", title: "Put idle cash to work", body: "Balances sweep into short-term T-bills on their own." },
    { label: "Cards", title: "Cards with guardrails", body: "Limits per team and cashback on every swipe." },
    { label: "Payables", title: "Pay every vendor", body: "Upload, approve, send. No transfer fees." },
    { label: "Receivables", badge: "New", title: "Get paid sooner", body: "Invoices your clients can settle by card, ACH or wire.", size: 2 },
    { label: "Financing", badge: "New", title: "Borrow against revenue", body: "Working capital without giving up equity." },
    { label: "Ledger", badge: "New", title: "Close in hours", body: "Every transaction coded before you open the books.", size: 3 },
  ],
  prevLabel: "Previous product",
  nextLabel: "Next product",
};

export default function Demo() {
  return <RhoBento {...bentoSample} />;
}
