import { LedupHero, type LedupHeroProps } from "./ledup-hero";

export const heroSample: LedupHeroProps = {
  slides: [
    {
      title: "Light shaped to every room.",
      text: "Every project is a chance to turn a plan into atmosphere. We see it through with you.",
    },
    {
      title: "Quiet fittings, precise light.",
      text: "Profiles, downlights and floodlights engineered to disappear and leave only the glow behind.",
    },
  ],
  tabLabel: "Show slide",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <LedupHero {...heroSample} />
      <div className="h-40" />
    </div>
  );
}
