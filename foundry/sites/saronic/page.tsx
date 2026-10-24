// The whole Saronic recreation (as the fictional "Ternway", a builder of crewless vessels),
// built only from this site's blocks with each block's demo content. Light is the faithful
// mode; the hero, news cards, software section, film band and footer are dark bands.
import { SaronicAnnouncement } from "@foundry/saronic-announcement";
import { SaronicConditions } from "@foundry/saronic-conditions";
import { SaronicFeature } from "@foundry/saronic-feature";
import { SaronicFleet } from "@foundry/saronic-fleet";
import { SaronicFooter } from "@foundry/saronic-footer";
import { SaronicHeader } from "@foundry/saronic-header";
import { SaronicHero } from "@foundry/saronic-hero";
import { SaronicJoin } from "@foundry/saronic-join";
import { SaronicNews } from "@foundry/saronic-news";
import { announcementSample } from "./saronic-announcement/saronic-announcement.demo";
import { conditionsSample } from "./saronic-conditions/saronic-conditions.demo";
import { featureSoftwareSample, featureYardSample } from "./saronic-feature/saronic-feature.demo";
import { fleetSample } from "./saronic-fleet/saronic-fleet.demo";
import { footerSample } from "./saronic-footer/saronic-footer.demo";
import { headerSample } from "./saronic-header/saronic-header.demo";
import { heroSample } from "./saronic-hero/saronic-hero.demo";
import { joinSample } from "./saronic-join/saronic-join.demo";
import { newsSample, newsSampleTwo } from "./saronic-news/saronic-news.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <SaronicAnnouncement {...announcementSample} />
      <SaronicHeader {...headerSample} overlay hideBrandOverHero />
      <SaronicHero {...heroSample} belowBar />
      <SaronicNews {...newsSample} />
      <SaronicFleet {...fleetSample} />
      <SaronicNews {...newsSampleTwo} />
      <SaronicFeature {...featureYardSample} />
      <SaronicFeature {...featureSoftwareSample} />
      <SaronicConditions {...conditionsSample} />
      <SaronicJoin {...joinSample} />
      <SaronicFooter {...footerSample} />
    </div>
  );
}
