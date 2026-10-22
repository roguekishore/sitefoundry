import { Layers3 } from "lucide-react";
import { SharplinkCta, type SharplinkCtaProps } from "./sharplink-cta";

export const ctaSample: SharplinkCtaProps = {
  mark: <Layers3 strokeWidth={0.75} />,
  title: "A Treasury for Every Holder,",
  subtitle: "Built to Compound.",
  primary: { label: "Open the ledger", href: "#ledger" },
  secondary: { label: "Shareholder center", href: "#shareholders" },
};

export default function Demo() {
  return <SharplinkCta {...ctaSample} />;
}
