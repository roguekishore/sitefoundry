// The Stonebank landing page (recreating rollers.com.au), built only from this site's blocks
// with their demo content. Light is the faithful mode; the charcoal bands (why us, the closer,
// the footer) switch the theme's dark palette on themselves. The header sticks to the top.
import { RollersAbout } from "@foundry/rollers-about";
import { RollersBanner } from "@foundry/rollers-banner";
import { RollersCloser } from "@foundry/rollers-closer";
import { RollersDivision } from "@foundry/rollers-division";
import { RollersFleet } from "@foundry/rollers-fleet";
import { RollersFleetIntro } from "@foundry/rollers-fleet-intro";
import { RollersFooter } from "@foundry/rollers-footer";
import { RollersHeader } from "@foundry/rollers-header";
import { RollersHero } from "@foundry/rollers-hero";
import { RollersIntro } from "@foundry/rollers-intro";
import { RollersNews } from "@foundry/rollers-news";
import { RollersServices } from "@foundry/rollers-services";
import { RollersStats } from "@foundry/rollers-stats";
import { RollersWhatWeDo } from "@foundry/rollers-what-we-do";
import { RollersWhy } from "@foundry/rollers-why";
import { aboutSample } from "./rollers-about/rollers-about.demo";
import { closerSample } from "./rollers-closer/rollers-closer.demo";
import { divisionSample } from "./rollers-division/rollers-division.demo";
import { fleetSample } from "./rollers-fleet/rollers-fleet.demo";
import { fleetIntroSample } from "./rollers-fleet-intro/rollers-fleet-intro.demo";
import { footerSample } from "./rollers-footer/rollers-footer.demo";
import { headerSample } from "./rollers-header/rollers-header.demo";
import { heroSample } from "./rollers-hero/rollers-hero.demo";
import { introSample } from "./rollers-intro/rollers-intro.demo";
import { newsSample } from "./rollers-news/rollers-news.demo";
import { servicesSample } from "./rollers-services/rollers-services.demo";
import { statsSample, yardSample } from "./rollers-stats/rollers-stats.demo";
import { whatWeDoSample } from "./rollers-what-we-do/rollers-what-we-do.demo";
import { whySample } from "./rollers-why/rollers-why.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <RollersHeader {...headerSample} />
      <RollersHero {...heroSample} />
      <RollersIntro {...introSample} />
      <RollersAbout {...aboutSample} />
      <RollersWhatWeDo {...whatWeDoSample} />
      <RollersServices {...servicesSample} />
      <RollersStats {...statsSample} />
      <RollersBanner />
      <RollersFleetIntro {...fleetIntroSample} />
      <RollersFleet {...fleetSample} />
      <RollersWhy {...whySample} />
      <RollersDivision {...divisionSample} />
      <RollersStats {...yardSample} />
      <RollersNews {...newsSample} />
      <RollersCloser {...closerSample} />
      <RollersFooter {...footerSample} />
    </div>
  );
}
