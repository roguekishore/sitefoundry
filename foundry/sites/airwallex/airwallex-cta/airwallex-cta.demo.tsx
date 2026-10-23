// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexCta, type AirwallexCtaProps } from "./airwallex-cta";

export const ctaSample: AirwallexCtaProps = {
  title: "Open a Fernhold account before lunch",
  body: "No monthly plan, no setup charge and no balance you have to keep.",
  action: { label: "Open account", href: "#" },
};

export default function Demo() {
  return <AirwallexCta {...ctaSample} />;
}
