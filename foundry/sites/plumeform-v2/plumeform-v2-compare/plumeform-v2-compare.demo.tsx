import { PlumeformV2Compare, type PlumeformV2CompareProps } from "./plumeform-v2-compare";

const table: Pick<PlumeformV2CompareProps, "columns" | "rows" | "footnote"> = {
  columns: ["Tool", "Free replies", "Cheapest paid", "What that buys"],
  rows: [
    { cells: ["Murmur", "150 / mo", "$12 / mo", "8,000 replies / mo"], highlight: true, tag: "← that's us" },
    { cells: ["Formhaven", "10 / form", "$29 / mo", "100 replies / mo"] },
    { cells: ["Pollwright", "25 / form", "$99 / mo", "1,000 replies / mo"] },
    { cells: ["Quillbox", "100 / mo", "$34 / mo", "1,000 entries / mo"] },
    { cells: ["Answerly", "Unlimited", "$24 / mo", "Branding & domains"] },
  ],
  footnote: "Made-up competitors with made-up list prices, billed monthly, for this example. Yearly billing costs less everywhere, ours included ($9/mo).",
};

export const compareSample: PlumeformV2CompareProps = { eyebrow: "How we stack up", ...table };

export const comparePageSample: PlumeformV2CompareProps = {
  eyebrow: "How we stack up",
  title: "Listed prices, side by side.",
  ...table,
  links: {
    lead: "Want the longer read?",
    items: [
      { label: "Murmur vs Formhaven", href: "#vs-formhaven" },
      { label: "vs Pollwright", href: "#vs-pollwright" },
      { label: "vs Quillbox", href: "#vs-quillbox" },
      { label: "vs Answerly", href: "#vs-answerly" },
    ],
  },
};

export default function Demo() {
  return <PlumeformV2Compare {...comparePageSample} />;
}
