import { PlaidProducts, type PlaidProductsProps } from "./plaid-products";

export const productsSample: PlaidProductsProps = {
  title: "One network under every account. Tools for every money task.",
  action: { label: "Browse the platform", href: "#" },
  linkLabel: "Learn more",
  products: [
    { lead: "Account payments", rest: "built for quick linking and fewer drop-offs", href: "#" },
    { lead: "Lending decisions", rest: "that read today's cash flow, not last year's", href: "#" },
    { lead: "Fraud defence", rest: "trained on billions of signals", href: "#" },
    { lead: "Fast sign-up", rest: "through a verified, familiar flow", href: "#" },
    { lead: "Money insights", rest: "grounded in clean, labelled data", href: "#" },
  ],
};

export default function Demo() {
  return <PlaidProducts {...productsSample} />;
}
