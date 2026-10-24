import type { SaronicConditionsProps } from "./saronic-conditions";
import { SaronicConditions } from "./saronic-conditions";

export const conditionsSample: SaronicConditionsProps = {
  id: "heavy-weather",
  eyebrow: "Tested in heavy weather",
  title: (
    <>
      Sent out <br className="max-lg:hidden" />
      when the harbour <br className="max-lg:hidden" />
      stays shut.
    </>
  ),
  lead: "Rated for 14g slams and logged over 90,000 open-ocean miles in gales, swell and fog.",
  cta: { label: "Watch the sea trials", href: "#", external: true },
};

export default function Demo() {
  return <SaronicConditions {...conditionsSample} />;
}
