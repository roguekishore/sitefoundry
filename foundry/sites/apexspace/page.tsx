// The whole Apex Space recreation (as "Orrery Space Works"), built only from this site's
// blocks with each block's demo content. Dark is the faithful mode.
import { ApexspaceFactory } from "@foundry/apexspace-factory";
import { ApexspaceFooter } from "@foundry/apexspace-footer";
import { ApexspaceHeader } from "@foundry/apexspace-header";
import { ApexspaceHero } from "@foundry/apexspace-hero";
import { ApexspaceIntro } from "@foundry/apexspace-intro";
import { ApexspaceLogos } from "@foundry/apexspace-logos";
import { ApexspaceMission } from "@foundry/apexspace-mission";
import { ApexspacePlatforms } from "@foundry/apexspace-platforms";
import { factorySample } from "./apexspace-factory/apexspace-factory.demo";
import { footerSample } from "./apexspace-footer/apexspace-footer.demo";
import { headerSample } from "./apexspace-header/apexspace-header.demo";
import { heroSample } from "./apexspace-hero/apexspace-hero.demo";
import { introSample } from "./apexspace-intro/apexspace-intro.demo";
import { logosSample } from "./apexspace-logos/apexspace-logos.demo";
import { missionSample } from "./apexspace-mission/apexspace-mission.demo";
import { platformsSample } from "./apexspace-platforms/apexspace-platforms.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ApexspaceHeader {...headerSample} />
      <main>
        <ApexspaceHero {...heroSample} />
        <ApexspaceIntro {...introSample} />
        <ApexspacePlatforms {...platformsSample} />
        <ApexspaceMission {...missionSample} />
        <ApexspaceLogos {...logosSample} />
        <ApexspaceFactory {...factorySample} />
      </main>
      <ApexspaceFooter {...footerSample} />
    </div>
  );
}
