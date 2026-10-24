// The whole Impulse Space recreation, built only from this site's blocks, with each block's
// demo content (a made-up orbital freight company, Halyard). Light is the faithful mode; the
// hero, missions and partners bands are black in both. The header is fixed and the hero runs
// under it.
import { ImpulsespaceCareers } from "@foundry/impulsespace-careers";
import { ImpulsespaceFooter } from "@foundry/impulsespace-footer";
import { ImpulsespaceHeader } from "@foundry/impulsespace-header";
import { ImpulsespaceHero } from "@foundry/impulsespace-hero";
import { ImpulsespaceIntro } from "@foundry/impulsespace-intro";
import { ImpulsespaceMissions } from "@foundry/impulsespace-missions";
import { ImpulsespacePartners } from "@foundry/impulsespace-partners";
import { ImpulsespaceVehicles } from "@foundry/impulsespace-vehicles";
import { careersSample } from "./impulsespace-careers/impulsespace-careers.demo";
import { footerSample } from "./impulsespace-footer/impulsespace-footer.demo";
import { headerSample } from "./impulsespace-header/impulsespace-header.demo";
import { heroSample } from "./impulsespace-hero/impulsespace-hero.demo";
import { introSample } from "./impulsespace-intro/impulsespace-intro.demo";
import { missionsSample } from "./impulsespace-missions/impulsespace-missions.demo";
import { partnersSample } from "./impulsespace-partners/impulsespace-partners.demo";
import { vehiclesSample } from "./impulsespace-vehicles/impulsespace-vehicles.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ImpulsespaceHeader {...headerSample} />
      <main>
        <ImpulsespaceHero {...heroSample} />
        <ImpulsespaceIntro {...introSample} />
        <ImpulsespaceVehicles {...vehiclesSample} />
        <ImpulsespaceMissions {...missionsSample} />
        <ImpulsespacePartners {...partnersSample} />
        <ImpulsespaceCareers {...careersSample} />
      </main>
      <ImpulsespaceFooter {...footerSample} />
    </div>
  );
}
