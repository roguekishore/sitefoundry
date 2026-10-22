import { PrenuvoHero, type PrenuvoHeroProps } from "./prenuvo-hero";

export const heroSample: PrenuvoHeroProps = {
  title: (
    <>
      Know your body <em>inside and out.</em> Every single year.
    </>
  ),
  lead: "Head-to-toe MRI, a full blood panel and a doctor to talk it through. Plans from $1,050.",
  cta: { label: "Reserve a scan", href: "#reserve" },
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-background">
      <PrenuvoHero {...heroSample} />
    </div>
  );
}
