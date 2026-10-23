// The whole Arc recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, basin). Shown in the gallery as "arc — full page".
// Light is the faithful mode.
import { ArcAccounts } from "@foundry/arc-accounts";
import { ArcAnnouncement } from "@foundry/arc-announcement";
import { ArcCta } from "@foundry/arc-cta";
import { ArcDisclosures } from "@foundry/arc-disclosures";
import { ArcFooter } from "@foundry/arc-footer";
import { ArcHeader } from "@foundry/arc-header";
import { ArcHero } from "@foundry/arc-hero";
import { ArcQuote } from "@foundry/arc-quote";
import { ArcSecurity } from "@foundry/arc-security";
import { ArcSolutions } from "@foundry/arc-solutions";
import { accountsSample } from "./arc-accounts/arc-accounts.demo";
import { announcementSample } from "./arc-announcement/arc-announcement.demo";
import { ctaSample } from "./arc-cta/arc-cta.demo";
import { disclosuresSample } from "./arc-disclosures/arc-disclosures.demo";
import { footerSample } from "./arc-footer/arc-footer.demo";
import { headerSample } from "./arc-header/arc-header.demo";
import { heroSample } from "./arc-hero/arc-hero.demo";
import { quoteSample } from "./arc-quote/arc-quote.demo";
import { securitySample } from "./arc-security/arc-security.demo";
import { solutionsSample } from "./arc-solutions/arc-solutions.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ArcAnnouncement {...announcementSample} />
      <ArcHeader {...headerSample} />
      <main>
        <ArcHero {...heroSample} />
        <ArcAccounts {...accountsSample} />
        <ArcSolutions {...solutionsSample} />
        <ArcSecurity {...securitySample} />
        <ArcQuote {...quoteSample} />
        <ArcCta {...ctaSample} />
      </main>
      <ArcDisclosures {...disclosuresSample} />
      <ArcFooter {...footerSample} />
    </div>
  );
}
