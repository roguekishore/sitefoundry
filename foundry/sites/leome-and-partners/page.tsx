// The Marlow Kessler landing page (recreating leome-and-partners.com), built only from this
// site's blocks with their demo content. Dark is the faithful mode. The header is fixed; the
// hero is sticky, so everything after it sits in a relative z-10 wrapper and slides over it.
// Lenis smooths the wheel, as on the original.
import { LeomeAndPartnersExpertise } from "@foundry/leome-and-partners-expertise";
import { LeomeAndPartnersFooter } from "@foundry/leome-and-partners-footer";
import { LeomeAndPartnersHeader } from "@foundry/leome-and-partners-header";
import { LeomeAndPartnersHero } from "@foundry/leome-and-partners-hero";
import { LeomeAndPartnersInsights } from "@foundry/leome-and-partners-insights";
import { LeomeAndPartnersSmoothScroll } from "@foundry/leome-and-partners-smooth-scroll";
import { LeomeAndPartnersStatement } from "@foundry/leome-and-partners-statement";
import { LeomeAndPartnersTeam } from "@foundry/leome-and-partners-team";
import { expertiseSample } from "./leome-and-partners-expertise/leome-and-partners-expertise.demo";
import { footerSample } from "./leome-and-partners-footer/leome-and-partners-footer.demo";
import { headerSample } from "./leome-and-partners-header/leome-and-partners-header.demo";
import { heroSample } from "./leome-and-partners-hero/leome-and-partners-hero.demo";
import { insightsSample } from "./leome-and-partners-insights/leome-and-partners-insights.demo";
import { statementSample } from "./leome-and-partners-statement/leome-and-partners-statement.demo";
import { teamSample } from "./leome-and-partners-team/leome-and-partners-team.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <LeomeAndPartnersSmoothScroll />
      <LeomeAndPartnersHeader {...headerSample} />
      <LeomeAndPartnersHero {...heroSample} />
      <div className="relative z-10">
        <LeomeAndPartnersStatement {...statementSample} />
        <LeomeAndPartnersExpertise {...expertiseSample} />
        <LeomeAndPartnersTeam {...teamSample} />
        <LeomeAndPartnersInsights {...insightsSample} />
        <LeomeAndPartnersFooter {...footerSample} />
      </div>
    </div>
  );
}
