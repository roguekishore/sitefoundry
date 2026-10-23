// The whole Pilot recreation, built only from this site's blocks, with each block's demo
// content (a made-up firm, Tallyhouse). Shown in the gallery as "pilot — full page".
// Light is the faithful mode.
import { PilotAdvisors } from "@foundry/pilot-advisors";
import { PilotAsk } from "@foundry/pilot-ask";
import { PilotCases } from "@foundry/pilot-cases";
import { PilotFeatures } from "@foundry/pilot-features";
import { PilotFooter } from "@foundry/pilot-footer";
import { PilotHeader } from "@foundry/pilot-header";
import { PilotHero } from "@foundry/pilot-hero";
import { PilotInsights } from "@foundry/pilot-insights";
import { PilotPaths } from "@foundry/pilot-paths";
import { PilotScenarios } from "@foundry/pilot-scenarios";
import { advisorsSample } from "./pilot-advisors/pilot-advisors.demo";
import { askSample } from "./pilot-ask/pilot-ask.demo";
import { casesSample } from "./pilot-cases/pilot-cases.demo";
import { featuresSample } from "./pilot-features/pilot-features.demo";
import { footerSample } from "./pilot-footer/pilot-footer.demo";
import { headerSample } from "./pilot-header/pilot-header.demo";
import { heroSample } from "./pilot-hero/pilot-hero.demo";
import { insightsSample } from "./pilot-insights/pilot-insights.demo";
import { pathsSample } from "./pilot-paths/pilot-paths.demo";
import { scenariosSample } from "./pilot-scenarios/pilot-scenarios.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <PilotHeader {...headerSample} />
      <PilotHero {...heroSample} />
      <PilotFeatures {...featuresSample} />
      <PilotAsk {...askSample} />
      <PilotAdvisors {...advisorsSample} />
      <PilotScenarios {...scenariosSample} />
      <PilotCases {...casesSample} />
      <PilotInsights {...insightsSample} />
      <PilotPaths {...pathsSample} />
      <PilotFooter {...footerSample} />
    </div>
  );
}
