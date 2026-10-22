// The whole Anchorage recreation (as "Strata Reserve"), built only from this site's blocks
// with each block's demo content. Dark is the faithful mode.
import { AnchorageAccordion } from "@foundry/anchorage-accordion";
import { AnchorageAnnouncement } from "@foundry/anchorage-announcement";
import { AnchorageContact } from "@foundry/anchorage-contact";
import { AnchorageCta } from "@foundry/anchorage-cta";
import { AnchorageFooter } from "@foundry/anchorage-footer";
import { AnchorageHeader } from "@foundry/anchorage-header";
import { AnchorageHero } from "@foundry/anchorage-hero";
import { AnchorageLogos } from "@foundry/anchorage-logos";
import { AnchoragePlatform } from "@foundry/anchorage-platform";
import { AnchorageStats } from "@foundry/anchorage-stats";
import { accordionSample } from "./anchorage-accordion/anchorage-accordion.demo";
import { announcementSample } from "./anchorage-announcement/anchorage-announcement.demo";
import { contactSample } from "./anchorage-contact/anchorage-contact.demo";
import { ctaSample } from "./anchorage-cta/anchorage-cta.demo";
import { footerSample } from "./anchorage-footer/anchorage-footer.demo";
import { headerSample } from "./anchorage-header/anchorage-header.demo";
import { heroSample } from "./anchorage-hero/anchorage-hero.demo";
import { backersSample, clientsSample } from "./anchorage-logos/anchorage-logos.demo";
import { platformSample } from "./anchorage-platform/anchorage-platform.demo";
import { statsSample } from "./anchorage-stats/anchorage-stats.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <AnchorageAnnouncement {...announcementSample} />
      <AnchorageHeader {...headerSample} />
      <main>
        <AnchorageHero {...heroSample} />
        <AnchorageLogos {...backersSample} />
        <AnchoragePlatform {...platformSample} />
        <AnchorageStats {...statsSample} />
        <AnchorageAccordion {...accordionSample} />
        <AnchorageLogos {...clientsSample} />
        <AnchorageCta {...ctaSample} />
      </main>
      <AnchorageContact {...contactSample} />
      <AnchorageFooter {...footerSample} />
    </div>
  );
}
