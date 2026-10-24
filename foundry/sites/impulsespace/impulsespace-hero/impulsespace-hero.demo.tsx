// Sample content lives here (gallery only); the page reuses it. Halyard is made up.
import { ImpulsespaceHero, type ImpulsespaceHeroProps } from "./impulsespace-hero";

export const heroSample: ImpulsespaceHeroProps = {
  title: "Freight for orbit",
  mediaLabel: "A transfer tug drifting over the night side of the planet",
  label: "Corvus",
  labelHref: "#corvus",
};

export default function Demo() {
  return <ImpulsespaceHero {...heroSample} />;
}
