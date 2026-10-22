import { PrenuvoPress, type PrenuvoPressProps } from "./prenuvo-press";

export const pressSample: PrenuvoPressProps = {
  label: "As covered in",
  items: [
    { name: "The Ledger", look: "heavy" },
    { name: "Quarterly", look: "light" },
    { name: "Market Weekly", look: "caps" },
    { name: "KVX", look: "heavy" },
    { name: "Gentry", look: "condensed" },
    { name: "Signal", look: "caps" },
    { name: "Byteline", look: "heavy" },
    { name: "Daily Post", look: "italic" },
    { name: "Maison", look: "light" },
    { name: "Tidewire", look: "condensed" },
  ],
};

export default function Demo() {
  return <PrenuvoPress {...pressSample} />;
}
