import { BadgeDollarSign } from "lucide-react";
import { BasepowercompanyPricingGate, type BasepowercompanyPricingGateProps } from "./basepowercompany-pricing-gate";

export const pricingGateSample: BasepowercompanyPricingGateProps = {
  icon: <BadgeDollarSign />,
  title: "See rates for your address",
  subtitle: "Choose the company that delivers your power to see the plans and prices near you.",
  select: {
    placeholder: "Who delivers your power?",
    label: "Your delivery company",
    action: "#rates",
    options: [
      { label: "Bayou Electric Delivery", value: "bayou" },
      { label: "Hill Country Wires", value: "hill-country" },
      { label: "Prairie Line Co-op", value: "prairie" },
      { label: "Not sure", value: "unsure" },
    ],
  },
  preview: {
    badge: "Popular",
    plan: "Power + Hub",
    prices: [
      { label: "Energy rate", value: "11.4¢" },
      { label: "Hub fee", value: "$24/mo" },
    ],
    highlight: "No install cost when you sign up this month",
    features: ["Fixed rate for 3 years", "Whole-home backup", "Free yearly check-up"],
    buttons: ["Details", "Sign up"],
    eyebrow: "Power + Hub",
    headline: "A fixed rate, plus a Hub for $0 down",
    points: [
      { title: "Installed in a week", body: "One visit, about four hours, and the Hub is live." },
      { title: "Backup by default", body: "It takes over the moment the lines drop." },
      { title: "Monitored for you", body: "We watch the battery so you never have to." },
    ],
  },
};

export default function Demo() {
  return <BasepowercompanyPricingGate {...pricingGateSample} />;
}
