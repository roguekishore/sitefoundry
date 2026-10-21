import { KononenkogroupHero, type KononenkogroupHeroProps } from "./kononenkogroup-hero";

export const heroSample: KononenkogroupHeroProps = {
  title: ["Aldermoor", "Spatial Practice"],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupHero {...heroSample} />
      <div className="h-svh" />
    </div>
  );
}
