// Sample content lives here (gallery only); the page reuses it. "Kestrel" is made up.
import { LinearHero, type LinearHeroProps } from "./linear-hero";

export const heroSample: LinearHeroProps = {
  title: "Plan and ship together with your team and its agents",
  subtitle: "Plans, issues and reviews in one fast tool. Made for teams that build with AI.",
  announcement: { tag: "New", label: "Routines", href: "#routines" },
  mediaLabel: "Product window: an issue with its activity and an agent chat",
};

export default function Demo() {
  return <LinearHero {...heroSample} />;
}
