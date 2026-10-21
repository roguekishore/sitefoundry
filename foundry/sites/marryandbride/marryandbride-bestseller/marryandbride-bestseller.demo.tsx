import { MarryandbrideBestseller, type MarryandbrideBestsellerProps } from "./marryandbride-bestseller";

export const bestsellerSample: MarryandbrideBestsellerProps = {
  title: "Most loved",
  viewAll: { label: "View all", href: "#shop" },
  products: [
    { name: "Hazel cloud cardigan", kind: "Cardigan", price: "from 420 €", href: "#hazel", badge: "New" },
    { name: "Ivy pearl pullover", kind: "Pullover", price: "from 440 €", href: "#ivy", badge: "New" },
    { name: "Juniper honeycomb", kind: "Pullover", price: "560 €", href: "#juniper" },
    { name: "Wren cropped – silk", kind: "Pullover", price: "310 €", href: "#wren" },
  ],
};

export default function Demo() {
  return <MarryandbrideBestseller {...bestsellerSample} />;
}
