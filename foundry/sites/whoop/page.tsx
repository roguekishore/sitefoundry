// The whole Whoop recreation, built only from this site's blocks, with each block's demo
// content (a made-up screenless health band, Kairos). Shown in the gallery as
// "whoop — full page". Light is the faithful mode.
import { WhoopAlwaysOn } from "@foundry/whoop-always-on";
import { WhoopAthletes } from "@foundry/whoop-athletes";
import { WhoopDisclaimer } from "@foundry/whoop-disclaimer";
import { WhoopFooter } from "@foundry/whoop-footer";
import { WhoopHeader } from "@foundry/whoop-header";
import { WhoopHero } from "@foundry/whoop-hero";
import { WhoopInsights } from "@foundry/whoop-insights";
import { WhoopPlans } from "@foundry/whoop-plans";
import { WhoopStatement } from "@foundry/whoop-statement";
import { WhoopStyles } from "@foundry/whoop-styles";
import { alwaysOnSample } from "./whoop-always-on/whoop-always-on.demo";
import { athletesSample } from "./whoop-athletes/whoop-athletes.demo";
import { disclaimerSample } from "./whoop-disclaimer/whoop-disclaimer.demo";
import { footerSample } from "./whoop-footer/whoop-footer.demo";
import { headerSample } from "./whoop-header/whoop-header.demo";
import { heroSample } from "./whoop-hero/whoop-hero.demo";
import { insightsSample } from "./whoop-insights/whoop-insights.demo";
import { plansSample } from "./whoop-plans/whoop-plans.demo";
import { statementSample } from "./whoop-statement/whoop-statement.demo";
import { stylesSample } from "./whoop-styles/whoop-styles.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <WhoopHeader {...headerSample} />
      <WhoopHero {...heroSample} />
      <WhoopStatement {...statementSample} className="pt-10" />
      <WhoopInsights {...insightsSample} />
      <WhoopPlans {...plansSample} />
      <WhoopAthletes {...athletesSample} />
      <WhoopAlwaysOn {...alwaysOnSample} />
      <WhoopStyles {...stylesSample} />
      <WhoopDisclaimer {...disclaimerSample} />
      <WhoopFooter {...footerSample} />
    </div>
  );
}
