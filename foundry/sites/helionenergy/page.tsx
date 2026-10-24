// The whole Helion Energy recreation (as the fictional "Vantor", a fusion-power company), built
// only from this site's blocks with each block's demo content. Light is the faithful mode; the
// hero, careers band, machine cards and footer are dark bands.
import { HelionenergyCareers } from "@foundry/helionenergy-careers";
import { HelionenergyFooter } from "@foundry/helionenergy-footer";
import { HelionenergyHeader } from "@foundry/helionenergy-header";
import { HelionenergyHero } from "@foundry/helionenergy-hero";
import { HelionenergyMachines } from "@foundry/helionenergy-machines";
import { HelionenergyNews } from "@foundry/helionenergy-news";
import { HelionenergyPillars } from "@foundry/helionenergy-pillars";
import { HelionenergySteps } from "@foundry/helionenergy-steps";
import { careersSample } from "./helionenergy-careers/helionenergy-careers.demo";
import { footerSample } from "./helionenergy-footer/helionenergy-footer.demo";
import { headerSample } from "./helionenergy-header/helionenergy-header.demo";
import { heroSample } from "./helionenergy-hero/helionenergy-hero.demo";
import { machinesSample } from "./helionenergy-machines/helionenergy-machines.demo";
import { newsSample } from "./helionenergy-news/helionenergy-news.demo";
import { pillarsSample } from "./helionenergy-pillars/helionenergy-pillars.demo";
import { stepsSample } from "./helionenergy-steps/helionenergy-steps.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <HelionenergyHeader {...headerSample} />
      <HelionenergyHero {...heroSample} />
      <HelionenergySteps {...stepsSample} />
      <HelionenergyPillars {...pillarsSample} />
      <HelionenergyCareers {...careersSample} />
      <HelionenergyMachines {...machinesSample} />
      <HelionenergyNews {...newsSample} />
      <HelionenergyFooter {...footerSample} />
    </div>
  );
}
