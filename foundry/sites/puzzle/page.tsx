// The whole Puzzle recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Oakbook). Shown in the gallery as "puzzle — full page".
// Light is the faithful mode.
import { PuzzleAiSuite } from "@foundry/puzzle-ai-suite";
import { PuzzleCallout } from "@foundry/puzzle-callout";
import { PuzzleChooser } from "@foundry/puzzle-chooser";
import { PuzzleCta } from "@foundry/puzzle-cta";
import { PuzzleFaq } from "@foundry/puzzle-faq";
import { PuzzleFooter } from "@foundry/puzzle-footer";
import { PuzzleHeader } from "@foundry/puzzle-header";
import { PuzzleHero } from "@foundry/puzzle-hero";
import { PuzzleMigrate } from "@foundry/puzzle-migrate";
import { PuzzlePaths } from "@foundry/puzzle-paths";
import { PuzzlePlatform } from "@foundry/puzzle-platform";
import { PuzzleServices } from "@foundry/puzzle-services";
import { PuzzleStats } from "@foundry/puzzle-stats";
import { PuzzleStories } from "@foundry/puzzle-stories";
import { aiSuiteSample } from "./puzzle-ai-suite/puzzle-ai-suite.demo";
import { firmsSample, guaranteeSample } from "./puzzle-callout/puzzle-callout.demo";
import { chooserSample } from "./puzzle-chooser/puzzle-chooser.demo";
import { ctaSample } from "./puzzle-cta/puzzle-cta.demo";
import { faqSample } from "./puzzle-faq/puzzle-faq.demo";
import { footerSample } from "./puzzle-footer/puzzle-footer.demo";
import { headerSample } from "./puzzle-header/puzzle-header.demo";
import { heroSample } from "./puzzle-hero/puzzle-hero.demo";
import { migrateSample } from "./puzzle-migrate/puzzle-migrate.demo";
import { pathsSample } from "./puzzle-paths/puzzle-paths.demo";
import { platformSample } from "./puzzle-platform/puzzle-platform.demo";
import { servicesSample } from "./puzzle-services/puzzle-services.demo";
import { statsSample } from "./puzzle-stats/puzzle-stats.demo";
import { storiesSample } from "./puzzle-stories/puzzle-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <PuzzleHeader {...headerSample} />
      <PuzzleHero {...heroSample} />
      <PuzzleStats {...statsSample} />
      <PuzzlePaths {...pathsSample} />
      <PuzzleAiSuite {...aiSuiteSample} />
      <PuzzleServices {...servicesSample} />
      <PuzzleChooser {...chooserSample} />
      <PuzzlePlatform {...platformSample} />
      <PuzzleCallout {...guaranteeSample} />
      <PuzzleStories {...storiesSample} />
      <PuzzleMigrate {...migrateSample} />
      <PuzzleCallout {...firmsSample} />
      <PuzzleCta {...ctaSample} />
      <PuzzleFaq {...faqSample} />
      <PuzzleFooter {...footerSample} />
    </div>
  );
}
