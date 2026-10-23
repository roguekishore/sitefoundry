import { VastspaceHero, type VastspaceHeroProps } from "./vastspace-hero";

export const heroSample: VastspaceHeroProps = {
  title: "Building the next orbital neighbourhood",
};

export default function Demo() {
  return <VastspaceHero {...heroSample} />;
}
