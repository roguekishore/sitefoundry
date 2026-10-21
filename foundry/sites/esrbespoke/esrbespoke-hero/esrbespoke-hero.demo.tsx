import { EsrbespokeHero, type EsrbespokeHeroProps } from "./esrbespoke-hero";

export const heroSample: EsrbespokeHeroProps = {
  title: "Built back to the letter",
  note: "Thirty years of returning fine cars to the condition they left the works in.",
  link: { label: "Our story", href: "#story" },
  soundLabel: "Sound on",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <EsrbespokeHero {...heroSample} />
      <div className="h-svh" />
    </div>
  );
}
