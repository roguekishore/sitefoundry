// The whole Modern Treasury recreation, built only from this site's blocks, with each block's
// demo content. Light is the faithful mode.
import { ModerntreasuryAnnouncement } from "@foundry/moderntreasury-announcement";
import { ModerntreasuryApi } from "@foundry/moderntreasury-api";
import { ModerntreasuryContact } from "@foundry/moderntreasury-contact";
import { ModerntreasuryFeatures } from "@foundry/moderntreasury-features";
import { ModerntreasuryFooter } from "@foundry/moderntreasury-footer";
import { ModerntreasuryHeader } from "@foundry/moderntreasury-header";
import { ModerntreasuryHero } from "@foundry/moderntreasury-hero";
import { ModerntreasuryLogos } from "@foundry/moderntreasury-logos";
import { ModerntreasuryQuote } from "@foundry/moderntreasury-quote";
import { ModerntreasuryStats } from "@foundry/moderntreasury-stats";
import { ModerntreasuryValues } from "@foundry/moderntreasury-values";
import { announcementSample } from "./moderntreasury-announcement/moderntreasury-announcement.demo";
import { apiSample } from "./moderntreasury-api/moderntreasury-api.demo";
import { contactSample } from "./moderntreasury-contact/moderntreasury-contact.demo";
import { featuresSample } from "./moderntreasury-features/moderntreasury-features.demo";
import { footerSample } from "./moderntreasury-footer/moderntreasury-footer.demo";
import { headerSample } from "./moderntreasury-header/moderntreasury-header.demo";
import { heroSample } from "./moderntreasury-hero/moderntreasury-hero.demo";
import { logosSample } from "./moderntreasury-logos/moderntreasury-logos.demo";
import { quoteSample } from "./moderntreasury-quote/moderntreasury-quote.demo";
import { statsSample } from "./moderntreasury-stats/moderntreasury-stats.demo";
import { valuesSample } from "./moderntreasury-values/moderntreasury-values.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ModerntreasuryHeader {...headerSample} />
      <ModerntreasuryAnnouncement {...announcementSample} />
      <ModerntreasuryHero {...heroSample} />
      <ModerntreasuryLogos {...logosSample} />
      <ModerntreasuryFeatures {...featuresSample} />
      <ModerntreasuryStats {...statsSample} />
      <ModerntreasuryApi {...apiSample} />
      <ModerntreasuryValues {...valuesSample} />
      <ModerntreasuryQuote {...quoteSample} />
      <ModerntreasuryContact {...contactSample} />
      <ModerntreasuryFooter {...footerSample} />
    </div>
  );
}
