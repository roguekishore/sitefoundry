// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import { blueCard } from "../increase-quote-card/increase-quote-card.demo";
import { IncreaseCustomers, type IncreaseCustomersProps } from "./increase-customers";

export const customersSample: IncreaseCustomersProps = {
  lead: "Platforms of every size run on Cairn.",
  rest: "Demanding software teams trust us with banking down to the metal.",
  groups: [
    {
      title: "Clarity and control for horizontal platforms.",
      points: [
        { lead: "Every field, visible", rest: "so nobody has to guess what a transfer is doing." },
        { lead: "Workflows as code, not paperwork", rest: "keep launches on schedule." },
        { lead: "A direct line to the bank", rest: "means decisions in hours, not quarters." },
      ],
      card: blueCard,
    },
    {
      title: "The financial core for vertical software.",
      points: [
        { lead: "Accounts, payments and cards", rest: "shaped around the way your industry works." },
        { lead: "Full bank accounts", rest: "sit underneath your product's records from the start." },
        { lead: "Flexible compliance models", rest: "let you earn from financial features in weeks." },
      ],
    },
  ],
};

export default function Demo() {
  return <IncreaseCustomers {...customersSample} />;
}
