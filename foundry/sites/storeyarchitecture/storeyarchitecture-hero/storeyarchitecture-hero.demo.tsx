import { StoreyarchitectureHero, type StoreyarchitectureHeroProps } from "./storeyarchitecture-hero";

export const heroSample: StoreyarchitectureHeroProps = {
  slides: [{}, {}, {}, {}, {}],
  statement:
    "Ashlar draws calm, long-lived houses for the West Country: plain volumes, local stone and timber, and rooms planned around the way light crosses them through the day.",
  cta: { label: "See the houses", href: "#houses" },
  slideLabel: "Show photo",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureHero {...heroSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
