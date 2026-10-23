// The whole Function Health recreation (as the fictional "Tidewell"), built only from this site's
// blocks, with each block's demo content. Shown in the gallery as "functionhealth — full page".
// Light is the faithful mode; the hero and the press/story photo cards stay dark in either mode.
import { FunctionhealthBiomarkers } from "@foundry/functionhealth-biomarkers";
import { FunctionhealthBoard } from "@foundry/functionhealth-board";
import { FunctionhealthCompare } from "@foundry/functionhealth-compare";
import { FunctionhealthConditions } from "@foundry/functionhealth-conditions";
import { FunctionhealthCta } from "@foundry/functionhealth-cta";
import { FunctionhealthFaq } from "@foundry/functionhealth-faq";
import { FunctionhealthFooter } from "@foundry/functionhealth-footer";
import { FunctionhealthHeader } from "@foundry/functionhealth-header";
import { FunctionhealthHero } from "@foundry/functionhealth-hero";
import { FunctionhealthLocations } from "@foundry/functionhealth-locations";
import { FunctionhealthPress } from "@foundry/functionhealth-press";
import { FunctionhealthPressLogos } from "@foundry/functionhealth-press-logos";
import { FunctionhealthPricing } from "@foundry/functionhealth-pricing";
import { FunctionhealthSteps } from "@foundry/functionhealth-steps";
import { FunctionhealthStories } from "@foundry/functionhealth-stories";
import { biomarkersSample } from "./functionhealth-biomarkers/functionhealth-biomarkers.demo";
import { boardSample } from "./functionhealth-board/functionhealth-board.demo";
import { compareSample } from "./functionhealth-compare/functionhealth-compare.demo";
import { conditionsSample } from "./functionhealth-conditions/functionhealth-conditions.demo";
import { ctaSample } from "./functionhealth-cta/functionhealth-cta.demo";
import { faqSample } from "./functionhealth-faq/functionhealth-faq.demo";
import { footerSample } from "./functionhealth-footer/functionhealth-footer.demo";
import { headerSample } from "./functionhealth-header/functionhealth-header.demo";
import { heroSample } from "./functionhealth-hero/functionhealth-hero.demo";
import { locationsSample } from "./functionhealth-locations/functionhealth-locations.demo";
import { pressSample } from "./functionhealth-press/functionhealth-press.demo";
import { pressLogosSample } from "./functionhealth-press-logos/functionhealth-press-logos.demo";
import { pricingSample } from "./functionhealth-pricing/functionhealth-pricing.demo";
import { stepsSample } from "./functionhealth-steps/functionhealth-steps.demo";
import { storiesSample } from "./functionhealth-stories/functionhealth-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <FunctionhealthHeader {...headerSample} />
      <FunctionhealthHero {...heroSample} />
      <FunctionhealthSteps {...stepsSample} />
      <FunctionhealthConditions {...conditionsSample} />
      <FunctionhealthBiomarkers {...biomarkersSample} />
      <FunctionhealthPress {...pressSample} />
      <FunctionhealthPressLogos {...pressLogosSample} />
      <FunctionhealthStories {...storiesSample} />
      <FunctionhealthLocations {...locationsSample} />
      <FunctionhealthCompare {...compareSample} />
      <FunctionhealthBoard {...boardSample} />
      <FunctionhealthPricing {...pricingSample} />
      <FunctionhealthFaq {...faqSample} />
      <FunctionhealthCta {...ctaSample} />
      <FunctionhealthFooter {...footerSample} />
    </div>
  );
}
