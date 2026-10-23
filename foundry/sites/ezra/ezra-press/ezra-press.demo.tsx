import { EzraPress, type EzraPressProps } from "./ezra-press";

export const pressSample: EzraPressProps = {
  label: "As seen in",
  names: [
    { name: "The Harbor Ledger", style: "serif" },
    { name: "QUICKSILVER", style: "sans" },
    { name: "Wire 9", style: "sans" },
    { name: "The Morning Courant", style: "italic" },
    { name: "The Almanac", style: "light" },
    { name: "Northside Review", style: "caps" },
    { name: "Fortnight", style: "serif" },
    { name: "KTV", style: "sans" },
  ],
};

export default function Demo() {
  return <EzraPress {...pressSample} />;
}
