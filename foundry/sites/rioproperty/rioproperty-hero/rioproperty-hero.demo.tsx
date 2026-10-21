import { RiopropertyHero, type RiopropertyHeroProps } from "./rioproperty-hero";

export const heroSample: RiopropertyHeroProps = {
  lines: [
    { start: { text: "Fenwick", drift: -26 } },
    { start: { text: "Yard", drift: -60 }, end: { text: "Knows", drift: 51 } },
    { end: { text: "Salt Bay", drift: 69 } },
  ],
  kicker: ["Shopfronts", "Warehouses", "Workspace"],
  blurb: "Commercial property sold, let and valued,",
  blurbLink: { label: "street by street in Salt Bay.", href: "#about" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <RiopropertyHero {...heroSample} />
      <div className="h-svh" />
    </div>
  );
}
