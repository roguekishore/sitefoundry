// Sample content lives here (gallery only); the page reuses it. Nocturne is made up.
import { Sparkles } from "lucide-react";
import type { ReflectHeroProps } from "./reflect-hero";
import { ReflectHero } from "./reflect-hero";

export const heroSample: ReflectHeroProps = {
  eyebrow: "Say hello to Nocturne 2",
  eyebrowIcon: <Sparkles aria-hidden strokeWidth={1.5} />,
  eyebrowHref: "#",
  title: "Write tonight, think clearly",
  lead: "A notebook kept in plain folders on your disk, with daily pages and linked ideas.",
  primaryAction: { label: "Get it for Mac", href: "#" },
  secondaryAction: { label: "Get the phone & tablet app", href: "#" },
  note: "Free on Mac. A small yearly fee on phone and tablet.",
  backdropLabel: "Glowing horizon (looping video)",
  screenLabel: "The Nocturne app window",
  play: { label: "Watch the two-minute tour", href: "#" },
};

export default function Demo() {
  return <ReflectHero {...heroSample} />;
}
