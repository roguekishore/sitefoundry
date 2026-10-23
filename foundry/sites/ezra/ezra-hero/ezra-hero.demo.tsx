import { Orbit } from "lucide-react";
import { EzraLockup } from "@foundry/ezra-lockup";
import { EzraHero, type EzraHeroProps } from "./ezra-hero";

export const heroSample: EzraHeroProps = {
  title: "Full-body MRI that",
  lead: "sees",
  accent: "what’s coming",
  body: "Once a year. One quiet scan looks for early signs of cancer and hundreds of other conditions. From $1,050.",
  action: { label: "Reserve a scan", href: "#" },
  notice: {
    logo: <EzraLockup partner="Alder" name="kestrel" mark={<Orbit aria-hidden className="size-[1em]" strokeWidth={2.25} />} />,
    text: "Kestrel now works with Alder, so your scan sits beside your lab results in one place.",
    link: { label: "Read why", href: "#" },
  },
};

export default function Demo() {
  return <EzraHero {...heroSample} />;
}
