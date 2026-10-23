// The whole Slash recreation, built only from this site's blocks, with each block's demo
// content (a made-up business bank, Ferro). Dark is the faithful mode.
import { SlashCapabilities } from "@foundry/slash-capabilities";
import { SlashCta } from "@foundry/slash-cta";
import { SlashCustomers } from "@foundry/slash-customers";
import { SlashFaq } from "@foundry/slash-faq";
import { SlashFooter } from "@foundry/slash-footer";
import { SlashFoundation } from "@foundry/slash-foundation";
import { SlashHeader } from "@foundry/slash-header";
import { SlashHero } from "@foundry/slash-hero";
import { SlashInsights } from "@foundry/slash-insights";
import { SlashInvestors } from "@foundry/slash-investors";
import { SlashPricing } from "@foundry/slash-pricing";
import { SlashQuotes } from "@foundry/slash-quotes";
import { SlashSecurity } from "@foundry/slash-security";
import { SlashStats } from "@foundry/slash-stats";
import { SlashTools } from "@foundry/slash-tools";
import { capabilitiesSample } from "./slash-capabilities/slash-capabilities.demo";
import { ctaSample } from "./slash-cta/slash-cta.demo";
import { customersSample } from "./slash-customers/slash-customers.demo";
import { faqSample } from "./slash-faq/slash-faq.demo";
import { footerSample } from "./slash-footer/slash-footer.demo";
import { foundationSample } from "./slash-foundation/slash-foundation.demo";
import { headerSample } from "./slash-header/slash-header.demo";
import { heroSample } from "./slash-hero/slash-hero.demo";
import { insightsSample } from "./slash-insights/slash-insights.demo";
import { investorsSample } from "./slash-investors/slash-investors.demo";
import { pricingSample } from "./slash-pricing/slash-pricing.demo";
import { quotesSample } from "./slash-quotes/slash-quotes.demo";
import { securitySample } from "./slash-security/slash-security.demo";
import { statsSample } from "./slash-stats/slash-stats.demo";
import { toolsSample } from "./slash-tools/slash-tools.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <SlashHeader {...headerSample} />
      <main>
        <SlashHero {...heroSample} />
        <SlashCustomers {...customersSample} />
        <SlashFoundation {...foundationSample} />
        <SlashCapabilities {...capabilitiesSample} />
        <SlashQuotes {...quotesSample} />
        <SlashStats {...statsSample} />
        <SlashTools {...toolsSample} />
        <SlashSecurity {...securitySample} />
        <SlashPricing {...pricingSample} />
        <SlashInvestors {...investorsSample} />
        <SlashFaq {...faqSample} />
        <SlashInsights {...insightsSample} />
        <SlashCta {...ctaSample} />
      </main>
      <SlashFooter {...footerSample} />
    </div>
  );
}
