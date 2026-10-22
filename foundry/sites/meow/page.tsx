// The whole Meow recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "meow — full page". Light is the faithful mode; the hero,
// the big stat card and the footer stay dark in both.
import { MeowAgent } from "@foundry/meow-agent";
import { MeowCta } from "@foundry/meow-cta";
import { MeowFaq } from "@foundry/meow-faq";
import { MeowFeatureRows } from "@foundry/meow-feature-rows";
import { MeowFooter } from "@foundry/meow-footer";
import { MeowHeader } from "@foundry/meow-header";
import { MeowHero } from "@foundry/meow-hero";
import { MeowPlatform } from "@foundry/meow-platform";
import { MeowQuote } from "@foundry/meow-quote";
import { MeowStats } from "@foundry/meow-stats";
import { agentSample } from "./meow-agent/meow-agent.demo";
import { ctaSample } from "./meow-cta/meow-cta.demo";
import { faqSample } from "./meow-faq/meow-faq.demo";
import { featureRowsSample } from "./meow-feature-rows/meow-feature-rows.demo";
import { footerSample } from "./meow-footer/meow-footer.demo";
import { headerSample } from "./meow-header/meow-header.demo";
import { heroSample } from "./meow-hero/meow-hero.demo";
import { platformSample } from "./meow-platform/meow-platform.demo";
import { quoteSample } from "./meow-quote/meow-quote.demo";
import { statsSample } from "./meow-stats/meow-stats.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <MeowHeader {...headerSample} />
      <main>
        <MeowHero {...heroSample} />
        <MeowAgent {...agentSample} />
        <MeowPlatform {...platformSample} />
        <MeowQuote {...quoteSample} />
        <MeowStats {...statsSample} />
        <MeowFeatureRows {...featureRowsSample} />
        <MeowFaq {...faqSample} />
      </main>
      <MeowCta {...ctaSample} />
      <MeowFooter {...footerSample} />
    </div>
  );
}
