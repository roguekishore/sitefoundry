import { UnitProducts, type UnitProductsProps } from "./unit-products";

export const productsSample: UnitProductsProps = {
  heading: "Every money primitive your product will need",
  products: [
    { title: "Hold funds", description: "Open balances and sub-ledgers for every user.", chips: ["Pooled balances", "Named accounts"], href: "#" },
    { title: "Send funds", description: "Pay out and collect, all through one API.", chips: ["Same-day ACH", "Paper checks", "Wires", "FedNow", "Global payouts"], href: "#" },
    { title: "Issue cards", description: "Put your name on cards, set rules and limits, and own every swipe's data.", chips: ["Debit", "Prepaid", "Business credit"], href: "#" },
    { title: "Extend credit", description: "Offer advances and credit lines to the people who already trust you.", chips: ["Credit lines"], href: "#" },
  ],
};

export default function Demo() {
  return <UnitProducts {...productsSample} />;
}
