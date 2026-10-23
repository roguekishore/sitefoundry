import { BrexProducts, type BrexProductsProps } from "./brex-products";

export const productsSample: BrexProductsProps = {
  title: "The card is only where it begins.",
  subtitle: "Everything you need to stretch every dollar and retire the busywork.",
  cards: [
    { title: "Company cards", text: "Spend anywhere with limits your team can see.", href: "#" },
    { title: "Expense tracking", text: "Receipts match themselves and approvals take a tap.", href: "#" },
    { title: "Trips", text: "Book, change and reconcile travel in one app.", href: "#" },
    { title: "Bill pay", text: "Read invoices, route approvals and pay on time.", href: "#" },
    { title: "Accounts and savings", text: "Hold cash, earn yield and send money abroad.", href: "#" },
  ],
};

export default function Demo() {
  return <BrexProducts {...productsSample} />;
}
