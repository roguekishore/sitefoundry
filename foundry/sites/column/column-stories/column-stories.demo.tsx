// Sample content (gallery only); the page reuses it. Every company and person is made up.
import { Globe2, Landmark, Repeat } from "lucide-react";
import { ColumnStories, type ColumnStoriesProps } from "./column-stories";

export const storiesSample: ColumnStoriesProps = {
  stories: [
    {
      name: "Parcelo",
      tone: "chart-3",
      title: "Parcelo runs its corporate card ledger on Tidewell",
      tags: [
        { icon: <Landmark />, label: "Deposit accounts" },
        { icon: <Repeat />, label: "Domestic transfers" },
        { icon: <Globe2 />, label: "Cross-border wires" },
      ],
      quote: "Nobody else gave our engineers this much direct control over money movement.",
      author: "Rhea Okonjo, co-founder and CTO, Parcelo",
    },
    {
      name: "quillpay",
      tone: "chart-1",
      title: "Quillpay settles payroll for forty thousand firms through Tidewell",
      tags: [
        { icon: <Repeat />, label: "Same-day ACH" },
        { icon: <Landmark />, label: "Sub-ledgers" },
      ],
      quote: "We shipped instant payouts in a quarter instead of a year.",
      author: "Tomas Ferreira, head of payments, Quillpay",
    },
    {
      name: "FENNEC",
      tone: "highlight",
      title: "Fennec funds its lending book with a Tidewell warehouse line",
      tags: [
        { icon: <Landmark />, label: "Credit facilities" },
        { icon: <Repeat />, label: "Book transfers" },
      ],
      quote: "Capital and rails from one partner changed our unit economics.",
      author: "Ines Halvorsen, CFO, Fennec",
    },
    {
      name: "Mossgate",
      tone: "chart-4",
      title: "Mossgate issues debit cards to two million members via Tidewell",
      tags: [
        { icon: <Landmark />, label: "Card issuing" },
        { icon: <Globe2 />, label: "Multicurrency" },
      ],
      quote: "Our program went from term sheet to live cards in eleven weeks.",
      author: "Dev Raman, founder, Mossgate",
    },
  ],
};

export default function Demo() {
  return <ColumnStories {...storiesSample} />;
}
