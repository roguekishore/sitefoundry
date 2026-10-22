import { BasepowercompanyHero, type BasepowercompanyHeroProps } from "./basepowercompany-hero";

export const heroSample: BasepowercompanyHeroProps = {
  rating: { score: "4.9 stars", sourceInitial: "R", sourceName: "Rated on Roofline Reviews" },
  title: "Pay less. Keep the lights on.",
  subtitle: "A power company with a battery in every home, so storms and price spikes pass you by.",
  form: { action: "#plans", placeholder: "Your zip code", fieldLabel: "Zip code", button: "Show my plans" },
  caption: "Over 22,000 households already on Porchlight",
  mediaLabel: "A farmhouse porch in late-afternoon sun, kids running on the lawn",
};

export default function Demo() {
  return <BasepowercompanyHero {...heroSample} />;
}
