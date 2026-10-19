import { Zap } from "lucide-react";
import { NewhaloProductCare, type NewhaloProductCareProps } from "./newhalo-product-care";

export const careSample: NewhaloProductCareProps = {
  id: "care",
  title: "Built for every day",
  card: { title: "Swap, don't wait", text: "The dock charges six batteries side by side. A fresh one clicks in within seconds.", icon: <Zap strokeWidth={1.25} /> },
  note: {
    title: "Cleaning and sterilising",
    paragraphs: [
      "The head goes through a standard cassette autoclave cycle in about fifteen minutes.",
      "Wipe each battery with a disinfecting cloth before it goes back on the dock.",
    ],
  },
};

export default function Demo() {
  return <NewhaloProductCare {...careSample} />;
}
