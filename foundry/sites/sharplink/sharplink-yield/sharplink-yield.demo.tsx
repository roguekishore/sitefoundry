import { SharplinkYield, type SharplinkYieldProps } from "./sharplink-yield";

export const yieldSample: SharplinkYieldProps = {
  title: "Yield by\nDesign",
  body: "We pair validator rewards, network grants and qualified custody to turn idle reserves into an asset that earns, every single epoch.",
  stats: [
    { label: "Total LMN held", value: "1,284,610" },
    { label: "Staking income", value: "41,902 LMN" },
  ],
  cta: { label: "View the full ledger", href: "#ledger" },
  features: [
    { index: "01", title: "Staking from the first block" },
    { index: "02", title: "Layered network incentives" },
    { index: "03", title: "Audited every single day" },
  ],
};

export default function Demo() {
  return <SharplinkYield {...yieldSample} />;
}
