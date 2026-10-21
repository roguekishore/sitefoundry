import { RollersHero, type RollersHeroProps } from "./rollers-hero";

export const heroSample: RollersHeroProps = {
  heading: ["Ground that holds,", "machines that turn up."],
  lede: "Stonebank is a family-run plant hire yard that does the job properly. Most of our work is operated hire: the compactor or tanker arrives with a ticketed operator who knows the spec and starts on the first pass.",
  showreel: { label: "Watch the yard reel", href: "#reel" },
  secondaryAction: { label: "Ask for a price", href: "#contact" },
  primaryAction: { label: "Browse the yard", href: "#yard" },
  scrollLabel: "Scroll",
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-background">
      <RollersHero {...heroSample} />
    </div>
  );
}
