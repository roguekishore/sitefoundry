// The whole Mercury recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "mercury — full page". Dark is the faithful mode.
import { MercuryCta } from "@foundry/mercury-cta";
import { MercuryFeatures } from "@foundry/mercury-features";
import { MercuryFooter } from "@foundry/mercury-footer";
import { MercuryHeader } from "@foundry/mercury-header";
import { MercuryHero } from "@foundry/mercury-hero";
import { MercuryPress } from "@foundry/mercury-press";
import { MercuryQuote } from "@foundry/mercury-quote";
import { MercuryStats } from "@foundry/mercury-stats";
import { MercuryStories } from "@foundry/mercury-stories";
import { MercuryTabs } from "@foundry/mercury-tabs";
import { ctaSample } from "./mercury-cta/mercury-cta.demo";
import { opsFeatures, safetyFeatures, toolsFeatures } from "./mercury-features/mercury-features.demo";
import { footerSample } from "./mercury-footer/mercury-footer.demo";
import { headerSample } from "./mercury-header/mercury-header.demo";
import { heroSample } from "./mercury-hero/mercury-hero.demo";
import { pressSample } from "./mercury-press/mercury-press.demo";
import { quoteSample } from "./mercury-quote/mercury-quote.demo";
import { statsSample } from "./mercury-stats/mercury-stats.demo";
import { storiesSample } from "./mercury-stories/mercury-stories.demo";
import { feesTabs, onboardingTabs, overviewTabs } from "./mercury-tabs/mercury-tabs.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <MercuryHeader {...headerSample} />
      <MercuryHero {...heroSample} />
      <MercuryTabs {...overviewTabs} className="lg:pt-[calc(var(--section-y)*1.1)]" />
      <MercuryStories {...storiesSample} />
      <MercuryFeatures {...toolsFeatures} />
      <MercuryQuote {...quoteSample} />
      <MercuryTabs {...onboardingTabs} />
      <MercuryTabs {...feesTabs} />
      <MercuryFeatures {...opsFeatures} />
      <MercuryStats {...statsSample} />
      <MercuryFeatures {...safetyFeatures} />
      <MercuryPress {...pressSample} />
      <MercuryCta {...ctaSample} />
      <MercuryFooter {...footerSample} />
    </div>
  );
}
