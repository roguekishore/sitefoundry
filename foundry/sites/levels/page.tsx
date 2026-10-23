// The whole Levels recreation, built only from this site's blocks, with each block's demo
// content (a made-up metabolic-health app, Ballast). Light is the faithful mode.
import { LevelsCta } from "@foundry/levels-cta";
import { LevelsFooter } from "@foundry/levels-footer";
import { LevelsHabits } from "@foundry/levels-habits";
import { LevelsHeader } from "@foundry/levels-header";
import { LevelsHero } from "@foundry/levels-hero";
import { LevelsMonitor } from "@foundry/levels-monitor";
import { LevelsPatterns } from "@foundry/levels-patterns";
import { LevelsPlans } from "@foundry/levels-plans";
import { LevelsResults } from "@foundry/levels-results";
import { LevelsSpike } from "@foundry/levels-spike";
import { LevelsStories } from "@foundry/levels-stories";
import { LevelsSystem } from "@foundry/levels-system";
import { LevelsTrust } from "@foundry/levels-trust";
import { ctaSample } from "./levels-cta/levels-cta.demo";
import { footerSample } from "./levels-footer/levels-footer.demo";
import { habitsSample } from "./levels-habits/levels-habits.demo";
import { headerSample } from "./levels-header/levels-header.demo";
import { heroSample } from "./levels-hero/levels-hero.demo";
import { monitorSample } from "./levels-monitor/levels-monitor.demo";
import { patternsSample } from "./levels-patterns/levels-patterns.demo";
import { plansSample } from "./levels-plans/levels-plans.demo";
import { resultsSample } from "./levels-results/levels-results.demo";
import { spikeSample } from "./levels-spike/levels-spike.demo";
import { storiesSample } from "./levels-stories/levels-stories.demo";
import { systemSample } from "./levels-system/levels-system.demo";
import { trustSample } from "./levels-trust/levels-trust.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <LevelsHeader {...headerSample} />
      <LevelsHero {...heroSample} />
      <LevelsTrust {...trustSample} />
      <LevelsSpike {...spikeSample} />
      <LevelsSystem {...systemSample} />
      <LevelsMonitor {...monitorSample} />
      <LevelsPatterns {...patternsSample} />
      <LevelsHabits {...habitsSample} />
      <LevelsResults {...resultsSample} />
      <LevelsStories {...storiesSample} />
      <LevelsPlans {...plansSample} />
      <LevelsCta {...ctaSample} />
      <LevelsFooter {...footerSample} />
    </div>
  );
}
