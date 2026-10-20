import { WiemerV2Hero, type WiemerV2HeroProps } from "./wiemer-v2-hero";

export const heroSample: WiemerV2HeroProps = {
  title: "Ostrand",
  subline: "Quiet furniture in brushed steel and aluminium. Made by hand in Bremen.",
  caption: "The first piece in the series is called Ilse. Shipping from spring 2027.",
  promo: {
    tag: "Pre-order",
    text: "Put your name down and hear first when Ilse is ready to ship.",
    link: { label: "Join the list", href: "#reserve" },
  },
};

export default function Demo() {
  return <WiemerV2Hero {...heroSample} />;
}
