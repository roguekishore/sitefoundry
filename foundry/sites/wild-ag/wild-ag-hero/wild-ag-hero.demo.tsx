import { WildAgHero, type WildAgHeroProps } from "./wild-ag-hero";

export const heroSample: WildAgHeroProps = {
  headline: [
    { text: "Considered", serif: true },
    { text: "building projects,", breakAfter: true },
    { text: "from" },
    { text: "first sketch", serif: true },
    { text: "to" },
    { text: "finished", serif: true },
    { text: "handover.", serif: true },
  ],
  lead: "Housing and mixed-use buildings in central Switzerland, steered by one small team from land to keys.",
  cta: { label: "Current projects", href: "#projects" },
  scrollCue: { label: "Scroll to the next section", href: "#about" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <WildAgHero {...heroSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
