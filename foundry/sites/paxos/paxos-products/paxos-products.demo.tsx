import { PaxosProducts, type PaxosProductsProps } from "./paxos-products";

export const productsSample: PaxosProductsProps = {
  title: "Two products, one regulated core",
  products: [
    {
      name: "Brokerage Engine",
      summary: "Branded buy-and-hold accounts for apps that want digital assets without running a desk.",
      action: { label: "See Details", href: "#" },
    },
    {
      name: "Token Minting",
      summary: "Launch a dollar token under your own name, with our charter and reserves behind it.",
      action: { label: "See Details", href: "#" },
    },
  ],
};

export default function Demo() {
  return <PaxosProducts {...productsSample} />;
}
