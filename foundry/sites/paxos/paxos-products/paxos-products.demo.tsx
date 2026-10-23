import { PaxosProducts, type PaxosProductsProps } from "./paxos-products";

export const productsSample: PaxosProductsProps = {
  title: "Two products, one regulated core",
  products: [
    {
      name: "Brokerage Engine",
      summary: "Branded buy-and-hold accounts for apps that would rather not run a desk.",
      action: { label: "See Details", href: "#" },
    },
    {
      name: "Token Minting",
      summary: "Your own dollar token, with our charter and reserves behind it.",
      action: { label: "See Details", href: "#" },
    },
  ],
};

export default function Demo() {
  return <PaxosProducts {...productsSample} />;
}
