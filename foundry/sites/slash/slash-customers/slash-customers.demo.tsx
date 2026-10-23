import { SlashCustomers, type SlashCustomersProps } from "./slash-customers";

export const customersSample: SlashCustomersProps = {
  heading: ["Chosen by ", { italic: "8,000+" }, " companies"],
  sub: "Studios, shops and scale-ups pick Ferro to pay faster and keep spend in check.",
  stories: [
    {
      name: "Marta Lindqvist",
      role: "Founder & CEO, Haldane Goods",
      stats: [
        { value: "3 days", label: "saved on every close" },
        { value: "$0", label: "spent on transfer fees" },
      ],
      tag: "Retail · Homeware",
      link: { label: "Read story →", href: "#" },
    },
    {
      name: "Theo Achebe",
      role: "COO, Northpine Labs",
      stats: [
        { value: "40%", label: "less time on expenses" },
        { value: "12", label: "entities, one login" },
      ],
      tag: "Software · AI",
      link: { label: "Read story →", href: "#" },
    },
    {
      name: "Rosa Iturbe",
      role: "Finance lead, Corbel Build Co.",
      stats: [
        { value: "2×", label: "faster supplier runs" },
        { value: "$90k", label: "cash back last year" },
      ],
      tag: "Construction",
      link: { label: "Read story →", href: "#" },
    },
  ],
};

export default function Demo() {
  return <SlashCustomers {...customersSample} />;
}
