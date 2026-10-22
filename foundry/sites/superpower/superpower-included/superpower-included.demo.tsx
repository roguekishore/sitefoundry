import { SuperpowerIncluded, type SuperpowerIncludedProps } from "./superpower-included";

export const includedSample: SuperpowerIncludedProps = {
  id: "included",
  intro: "A membership covers far more than a test.",
  title: "Worth thousands à la carte,\nyours for $179 a year",
  rows: [
    { feature: "110-marker blood panel", detail: "Spot early signs of 900+ conditions" },
    { feature: "Bring your own records", detail: "Add lab reports from anywhere" },
    { feature: "Body age score" },
    { feature: "Your own plan", detail: "Food, habits and supplements" },
    { feature: "Wearable sync", detail: "Rings, watches, scales and more" },
    { feature: "Ask Wren", detail: "Answers that know your results" },
    { feature: "Clinicians on call", detail: "Message any time of day" },
    { feature: "Extra test menu", detail: "Gut, allergy and early-detection add-ons" },
    { feature: "Members' pharmacy" },
    { feature: "Tested supplements" },
    { feature: "Prescriptions when needed" },
  ],
  cta: { label: "Join Kestrel", href: "#join" },
};

export default function Demo() {
  return <SuperpowerIncluded {...includedSample} />;
}
