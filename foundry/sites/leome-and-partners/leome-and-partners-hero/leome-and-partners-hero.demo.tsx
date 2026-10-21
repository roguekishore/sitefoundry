import { LeomeAndPartnersHero, type LeomeAndPartnersHeroProps } from "./leome-and-partners-hero";

export const heroSample: LeomeAndPartnersHeroProps = {
  titleTop: "Plain talk",
  titleBottom: "for hard calls",
  labels: ["Commercial", "Workplace", "Property", "Data & IP"],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <LeomeAndPartnersHero {...heroSample} />
      <div className="relative z-10 h-svh bg-card" />
    </div>
  );
}
