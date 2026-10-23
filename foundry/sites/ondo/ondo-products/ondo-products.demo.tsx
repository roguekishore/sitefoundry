import { Globe, Landmark, Waves } from "lucide-react";
import { OndoProducts, type OndoProductsProps } from "./ondo-products";

export const productsSample: OndoProductsProps = {
  eyebrow: "What we offer",
  lead: "A Higher Bar",
  trail: "for Onchain Markets.",
  products: [
    {
      name: "Corvane Equities",
      icon: <Globe strokeWidth={1.25} />,
      description: "Listed shares and funds as onchain tokens you can hold, send and put to work in open finance apps.",
      tag: "Not offered in every country",
      networks: ["Halcyon", "Brightway", "Solace"],
      action: { label: "Explore Equities", href: "#" },
      stats: [
        { label: "Value locked", value: "$1.08B", badge: "$1.08B" },
        { label: "Instruments", value: "320+" },
        { label: "Holders", value: "~184,900" },
      ],
    },
    {
      name: "Tidemark",
      icon: <Waves strokeWidth={1.25} />,
      description: "A permissionless dollar token that earns a daily yield from short-dated government bills.",
      tag: "Not offered in every country",
      networks: ["Halcyon", "Brightway", "Solace", "Meridia", "Quarry", "Fenwick"],
      action: { label: "Explore Tidemark", href: "#" },
      stats: [
        { label: "Value locked", value: "$1.92B", badge: "$1.92B" },
        { label: "Yield¹", value: "4.10%", legend: ["Tidemark yield", "Bill benchmark"] },
        { label: "Price", value: "$1.0874", note: "+$0.0004 today" },
      ],
    },
    {
      name: "Ballast",
      icon: <Landmark strokeWidth={1.25} />,
      description: "For institutions: a fund token backed by short-term government debt, with mints and redemptions any hour.",
      networks: ["Halcyon", "Quarry", "Solace", "Fenwick"],
      action: { label: "Explore Ballast", href: "#" },
      stats: [
        { label: "Value locked", value: "$412.6M", badge: "$412.6M" },
        { label: "Yield¹", value: "3.94%", legend: ["Ballast yield", "Bill benchmark"] },
        { label: "Price", value: "$108.2210", note: "+$0.0130 today" },
      ],
    },
  ],
};

export default function Demo() {
  return <OndoProducts {...productsSample} />;
}
