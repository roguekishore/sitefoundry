// The whole Parsley Health recreation, built only from this site's blocks, with each block's
// demo content (a made-up root-cause clinic, Halden Health). Light is the faithful mode.
import { ParsleyhealthCompare } from "@foundry/parsleyhealth-compare";
import { ParsleyhealthConditions } from "@foundry/parsleyhealth-conditions";
import { ParsleyhealthCta } from "@foundry/parsleyhealth-cta";
import { ParsleyhealthExperts } from "@foundry/parsleyhealth-experts";
import { ParsleyhealthFaq } from "@foundry/parsleyhealth-faq";
import { ParsleyhealthFloatingCta } from "@foundry/parsleyhealth-floating-cta";
import { ParsleyhealthFooter } from "@foundry/parsleyhealth-footer";
import { ParsleyhealthHeader } from "@foundry/parsleyhealth-header";
import { ParsleyhealthHero } from "@foundry/parsleyhealth-hero";
import { ParsleyhealthInsurance } from "@foundry/parsleyhealth-insurance";
import { ParsleyhealthPlans } from "@foundry/parsleyhealth-plans";
import { ParsleyhealthQuote } from "@foundry/parsleyhealth-quote";
import { ParsleyhealthReviews } from "@foundry/parsleyhealth-reviews";
import { ParsleyhealthSplit } from "@foundry/parsleyhealth-split";
import { ParsleyhealthTrust } from "@foundry/parsleyhealth-trust";
import { compareSample } from "./parsleyhealth-compare/parsleyhealth-compare.demo";
import { conditionsSample } from "./parsleyhealth-conditions/parsleyhealth-conditions.demo";
import { ctaSample } from "./parsleyhealth-cta/parsleyhealth-cta.demo";
import { expertsSample } from "./parsleyhealth-experts/parsleyhealth-experts.demo";
import { faqSample } from "./parsleyhealth-faq/parsleyhealth-faq.demo";
import { floatingCtaSample } from "./parsleyhealth-floating-cta/parsleyhealth-floating-cta.demo";
import { footerSample } from "./parsleyhealth-footer/parsleyhealth-footer.demo";
import { headerSample } from "./parsleyhealth-header/parsleyhealth-header.demo";
import { heroSample } from "./parsleyhealth-hero/parsleyhealth-hero.demo";
import { insuranceSample } from "./parsleyhealth-insurance/parsleyhealth-insurance.demo";
import { plansSample } from "./parsleyhealth-plans/parsleyhealth-plans.demo";
import { quoteSample } from "./parsleyhealth-quote/parsleyhealth-quote.demo";
import { reviewsSample } from "./parsleyhealth-reviews/parsleyhealth-reviews.demo";
import { splitSample } from "./parsleyhealth-split/parsleyhealth-split.demo";
import { trustSample } from "./parsleyhealth-trust/parsleyhealth-trust.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ParsleyhealthHeader {...headerSample} />
      <ParsleyhealthHero {...heroSample} />
      <ParsleyhealthTrust {...trustSample} />
      <ParsleyhealthSplit {...splitSample} />
      <ParsleyhealthInsurance {...insuranceSample} />
      <ParsleyhealthPlans {...plansSample} />
      <ParsleyhealthQuote {...quoteSample} />
      <ParsleyhealthConditions {...conditionsSample} />
      <ParsleyhealthExperts {...expertsSample} />
      <ParsleyhealthReviews {...reviewsSample} />
      <ParsleyhealthCompare {...compareSample} />
      <ParsleyhealthFaq {...faqSample} />
      <ParsleyhealthCta {...ctaSample} />
      <ParsleyhealthFooter {...footerSample} />
      <ParsleyhealthFloatingCta {...floatingCtaSample} />
    </div>
  );
}
