import { ThirdwayHero, type ThirdwayHeroProps } from "./thirdway-hero";

export const heroSample: ThirdwayHeroProps = {
  headline: "Workplaces with soul.\nDelivered with ease.",
  statement:
    "Hollin works beside occupiers, landlords and project teams to shape workplaces people want to return to. Pairing sharp design with calm, dependable delivery, we carry a project from first sketch to the day the doors open.",
  link: { label: "How we work", href: "#" },
  scrollLabel: "Scroll",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <ThirdwayHero {...heroSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
