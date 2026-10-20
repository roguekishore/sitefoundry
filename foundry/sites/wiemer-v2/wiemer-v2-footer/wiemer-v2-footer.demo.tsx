import { Layers2 } from "lucide-react";
import { WiemerV2Footer, type WiemerV2FooterProps } from "./wiemer-v2-footer";

export const footerSample: WiemerV2FooterProps = {
  brand: { name: "Ostrand", icon: <Layers2 strokeWidth={2.25} />, href: "#" },
  tagline: "Quiet furniture in brushed steel and aluminium. Made by hand in Bremen.",
  columns: [
    { title: "Follow", links: [{ label: "Instagram", href: "#" }, { label: "Pinterest", href: "#" }, { label: "Vimeo", href: "#" }] },
    {
      title: "Legal",
      links: [
        { label: "Imprint", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms of sale", href: "#" },
        { label: "Cancellation policy", href: "#" },
      ],
    },
    { title: "Help", links: [{ label: "Write to us", href: "#contact" }, { label: "Returns and exchanges", href: "#" }] },
  ],
  promo: {
    tag: "Pre-order",
    text: "Put your name down and hear first when Ilse is ready to ship.",
    link: { label: "Join the list", href: "#reserve" },
  },
  legal: "© Ostrand 2026",
  credit: "Ostrand is a label of Tiefwerk GmbH",
};

export default function Demo() {
  return <WiemerV2Footer {...footerSample} />;
}
