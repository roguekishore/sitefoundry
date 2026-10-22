// The Porchlight landing page (recreating basepowercompany.com), built only from this site's
// blocks with their demo content. Light is the faithful mode: the photo bands carry the dark
// class themselves. The header is fixed and clear over the hero.
import { BasepowercompanyBanner } from "@foundry/basepowercompany-banner";
import { BasepowercompanyExtras } from "@foundry/basepowercompany-extras";
import { BasepowercompanyFaq } from "@foundry/basepowercompany-faq";
import { BasepowercompanyFooter } from "@foundry/basepowercompany-footer";
import { BasepowercompanyGridSwitch } from "@foundry/basepowercompany-grid-switch";
import { BasepowercompanyHeader } from "@foundry/basepowercompany-header";
import { BasepowercompanyHero } from "@foundry/basepowercompany-hero";
import { BasepowercompanyPlans } from "@foundry/basepowercompany-plans";
import { BasepowercompanyPress } from "@foundry/basepowercompany-press";
import { BasepowercompanyPricingGate } from "@foundry/basepowercompany-pricing-gate";
import { BasepowercompanyQuote } from "@foundry/basepowercompany-quote";
import { BasepowercompanyRail } from "@foundry/basepowercompany-rail";
import { BasepowercompanyReviews } from "@foundry/basepowercompany-reviews";
import { BasepowercompanySteps } from "@foundry/basepowercompany-steps";
import { bannerSample, closerSample } from "./basepowercompany-banner/basepowercompany-banner.demo";
import { extrasSample } from "./basepowercompany-extras/basepowercompany-extras.demo";
import { faqSample } from "./basepowercompany-faq/basepowercompany-faq.demo";
import { footerSample } from "./basepowercompany-footer/basepowercompany-footer.demo";
import { gridSwitchSample } from "./basepowercompany-grid-switch/basepowercompany-grid-switch.demo";
import { headerSample } from "./basepowercompany-header/basepowercompany-header.demo";
import { heroSample } from "./basepowercompany-hero/basepowercompany-hero.demo";
import { plansSample } from "./basepowercompany-plans/basepowercompany-plans.demo";
import { pressSample } from "./basepowercompany-press/basepowercompany-press.demo";
import { pricingGateSample } from "./basepowercompany-pricing-gate/basepowercompany-pricing-gate.demo";
import { quoteSample } from "./basepowercompany-quote/basepowercompany-quote.demo";
import { railSample } from "./basepowercompany-rail/basepowercompany-rail.demo";
import { reviewsSample } from "./basepowercompany-reviews/basepowercompany-reviews.demo";
import { stepsSample } from "./basepowercompany-steps/basepowercompany-steps.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <BasepowercompanyHeader {...headerSample} />
      <main>
        <BasepowercompanyHero {...heroSample} />
        <BasepowercompanyPress {...pressSample} />
        <BasepowercompanyQuote {...quoteSample} />
        <BasepowercompanyGridSwitch {...gridSwitchSample} />
        <BasepowercompanyRail {...railSample} />
        <BasepowercompanyPlans {...plansSample} />
        <BasepowercompanyPricingGate {...pricingGateSample} />
        <BasepowercompanyReviews {...reviewsSample} />
        <BasepowercompanySteps {...stepsSample} />
        <BasepowercompanyExtras {...extrasSample} />
        <BasepowercompanyBanner {...bannerSample} />
        <BasepowercompanyFaq {...faqSample} />
        <BasepowercompanyBanner {...closerSample} />
      </main>
      <BasepowercompanyFooter {...footerSample} />
    </div>
  );
}
