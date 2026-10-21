import { MrcresidencesbocaratonHero, type MrcresidencesbocaratonHeroProps } from "./mrcresidencesbocaraton-hero";

export const heroSample: MrcresidencesbocaratonHeroProps = {
  title: "Life is slower at",
  titleStrong: "Velloro",
  cta: { label: "Enquire", href: "#enquire" },
  cue: { label: "Keep scrolling", href: "#residences" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MrcresidencesbocaratonHero {...heroSample} />
      {/* a band to scroll over the pinned hero */}
      <div className="relative h-[120svh] bg-primary" />
    </div>
  );
}
