import { CalendarCheck2, ChartColumnIncreasing, ReceiptText } from "lucide-react";
import { PilotFeatures, type PilotFeaturesProps } from "./pilot-features";

export const featuresSample: PilotFeaturesProps = {
  title: "We keep the books, file the\ntaxes and advise growing\nsmall companies.",
  lede: "Half software, half people: tools that show you the numbers the moment they move, and accountants who tell you what to do about them.",
  items: [
    {
      icon: <ReceiptText aria-hidden strokeWidth={1.25} />,
      title: "See every expense as it lands",
      text: "Spot the subscription quietly costing you $1,800 a month.",
    },
    {
      icon: <ChartColumnIncreasing aria-hidden strokeWidth={1.25} />,
      title: "Run your cash what-ifs",
      text: "Know whether the next two hires fit before the offer letters go out.",
    },
    {
      icon: <CalendarCheck2 aria-hidden strokeWidth={1.25} />,
      title: "Breathe easy at filing time",
      text: "Audit-ready books every month, so deadlines are dull and deductions are found.",
    },
  ],
  note: "Clear numbers. Calm founders. Better calls.",
};

export default function Demo() {
  return <PilotFeatures {...featuresSample} />;
}
