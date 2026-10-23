// The whole recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "zetta-joule — full page". Light is the faithful mode: the chart,
// sector carousel, closing band and footer force themselves dark. The service section is pinned
// on desktop and the sections after it (team, workforce, cta, footer) slide up over it.
import { ZettaJouleCta } from "@foundry/zetta-joule-cta";
import { ZettaJouleFooter } from "@foundry/zetta-joule-footer";
import { ZettaJouleHeader } from "@foundry/zetta-joule-header";
import { ZettaJouleHeat } from "@foundry/zetta-joule-heat";
import { ZettaJouleHero } from "@foundry/zetta-joule-hero";
import { ZettaJouleMission } from "@foundry/zetta-joule-mission";
import { ZettaJouleReactor } from "@foundry/zetta-joule-reactor";
import { ZettaJouleSectors } from "@foundry/zetta-joule-sectors";
import { ZettaJouleService } from "@foundry/zetta-joule-service";
import { ZettaJouleSmoothScroll } from "@foundry/zetta-joule-smooth-scroll";
import { ZettaJouleTeam } from "@foundry/zetta-joule-team";
import { ZettaJouleTechnology } from "@foundry/zetta-joule-technology";
import { ZettaJouleWorkforce } from "@foundry/zetta-joule-workforce";
import { ctaSample } from "./zetta-joule-cta/zetta-joule-cta.demo";
import { footerSample } from "./zetta-joule-footer/zetta-joule-footer.demo";
import { headerSample } from "./zetta-joule-header/zetta-joule-header.demo";
import { heatSample } from "./zetta-joule-heat/zetta-joule-heat.demo";
import { heroSample } from "./zetta-joule-hero/zetta-joule-hero.demo";
import { missionSample } from "./zetta-joule-mission/zetta-joule-mission.demo";
import { reactorSample } from "./zetta-joule-reactor/zetta-joule-reactor.demo";
import { sectorsSample } from "./zetta-joule-sectors/zetta-joule-sectors.demo";
import { serviceSample } from "./zetta-joule-service/zetta-joule-service.demo";
import { teamSample } from "./zetta-joule-team/zetta-joule-team.demo";
import { technologySample } from "./zetta-joule-technology/zetta-joule-technology.demo";
import { workforceSample } from "./zetta-joule-workforce/zetta-joule-workforce.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ZettaJouleSmoothScroll />
      <ZettaJouleHeader {...headerSample} />
      <ZettaJouleHero {...heroSample} />
      <ZettaJouleMission {...missionSample} />
      <ZettaJouleTechnology {...technologySample} />
      <ZettaJouleReactor {...reactorSample} />
      <ZettaJouleHeat {...heatSample} />
      <ZettaJouleSectors {...sectorsSample} />
      <ZettaJouleService {...serviceSample} />
      <ZettaJouleTeam {...teamSample} />
      <ZettaJouleWorkforce {...workforceSample} />
      <ZettaJouleCta {...ctaSample} />
      <ZettaJouleFooter {...footerSample} />
    </div>
  );
}
