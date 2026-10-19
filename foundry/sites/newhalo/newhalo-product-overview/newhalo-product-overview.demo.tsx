import { NewhaloProductOverview, type NewhaloProductOverviewProps } from "./newhalo-product-overview";

export const overviewSample: NewhaloProductOverviewProps = {
  id: "kit",
  title: "The clinic kit",
  body: [
    "Everything a chair needs for a full day: clear glass that never fogs, light that follows the work, a camera under your thumb and a screen your patient can actually read.",
    "The swivelling tablet arm is optional.",
  ],
  contents: [
    { quantity: "3", label: "Lumen One instruments" },
    { quantity: "3", label: "Batteries" },
    { quantity: "1", label: "Companion app" },
    { quantity: "1", label: "Charging dock" },
    { quantity: "3", label: "Sterilisation caps" },
  ],
  cta: { label: "Get started", href: "#pricing" },
};

export default function Demo() {
  return <NewhaloProductOverview {...overviewSample} />;
}
