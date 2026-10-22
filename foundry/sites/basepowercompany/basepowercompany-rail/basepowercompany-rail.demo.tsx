import { BatteryCharging, Clock, CloudLightning, DollarSign } from "lucide-react";
import { BasepowercompanySwash } from "@foundry/basepowercompany-swash";
import { BasepowercompanyRail, type BasepowercompanyRailProps } from "./basepowercompany-rail";

export const railSample: BasepowercompanyRailProps = {
  title: (
    <>
      <BasepowercompanySwash>Steady power</BasepowercompanySwash>
      <br />
      starts at the Hub:
    </>
  ),
  items: [
    {
      icon: <BatteryCharging />,
      title: "A battery built for the whole house",
      body: (
        <>
          <strong>38 kWh</strong> in every Porchlight Hub, enough to carry a full family home rather than a few outlets.
        </>
      ),
      mediaLabel: "The Hub battery against a white garden wall",
    },
    {
      icon: <Clock />,
      title: "Days, not hours",
      body: "Around two to three days of backup on one or two Hubs. Plug in a generator or your rooftop panels to stretch it further, if you like.",
      mediaLabel: "A technician fitting the Hub's service panel",
    },
    {
      icon: <CloudLightning />,
      title: "Built for August and for ice storms",
      body: "Rated from −25 to 125°F, sealed against flash floods and tested under three feet of water.",
      mediaLabel: "A farmhouse under fresh snow, windows lit",
    },
    {
      icon: <DollarSign />,
      title: "Priced like a utility bill",
      body: "Automatic whole-home backup without paying five figures for a generator or a solar array.",
      mediaLabel: "A hand resting on the Hub's lid",
    },
  ],
  primaryCta: { label: "See my rates", href: "#rates" },
  secondaryCta: { label: "Sign up", href: "#signup" },
};

export default function Demo() {
  return <BasepowercompanyRail {...railSample} />;
}
