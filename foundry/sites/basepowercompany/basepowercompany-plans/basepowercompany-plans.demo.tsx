import { BatteryCharging, House, Zap } from "lucide-react";
import { BasepowercompanyPlans, type BasepowercompanyPlansProps } from "./basepowercompany-plans";

export const plansSample: BasepowercompanyPlansProps = {
  title: "Pick the plan that fits your house.",
  subtitle: "Cut the bill, ride out the storms, or do both. There's a Porchlight plan for how you live.",
  cta: { label: "Check my street", href: "#area" },
  plans: [
    {
      icon: <Zap />,
      name: "Power",
      body: "A low rate that stays put.",
      link: { label: "About Porchlight power", href: "#power" },
      mediaLabel: "A father reading to his daughter by lamplight",
    },
    {
      icon: <House />,
      name: "Power + Hub",
      body: "Electricity plus whole-home backup, for a sliver of what a generator costs.",
      link: { label: "See Power + Hub", href: "#power-hub" },
      mediaLabel: "The Hub on a porch beside a red chair",
    },
    {
      icon: <BatteryCharging />,
      name: "Hub on its own",
      body: "Backup that works with the utility you already have, in a few service areas.",
      link: { label: "See Hub on its own", href: "#hub-only" },
      mediaLabel: "Two kids drawing in chalk next to the Hub",
    },
  ],
};

export default function Demo() {
  return <BasepowercompanyPlans {...plansSample} />;
}
