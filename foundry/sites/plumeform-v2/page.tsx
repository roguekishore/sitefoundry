// The Murmur landing page (recreating plumeform.com), built only from this site's blocks with
// their demo content. Light is the faithful mode: the dark bands force themselves dark, and
// the floating header turns dark over them.
import { PlumeformV2CardGrid } from "@foundry/plumeform-v2-card-grid";
import { PlumeformV2Compare } from "@foundry/plumeform-v2-compare";
import { PlumeformV2Contact } from "@foundry/plumeform-v2-contact";
import { PlumeformV2CtaBand } from "@foundry/plumeform-v2-cta-band";
import { PlumeformV2Embed } from "@foundry/plumeform-v2-embed";
import { PlumeformV2Faq } from "@foundry/plumeform-v2-faq";
import { PlumeformV2FeatureRows } from "@foundry/plumeform-v2-feature-rows";
import { PlumeformV2Footer } from "@foundry/plumeform-v2-footer";
import { PlumeformV2Glance } from "@foundry/plumeform-v2-glance";
import { PlumeformV2Header } from "@foundry/plumeform-v2-header";
import { PlumeformV2Hero } from "@foundry/plumeform-v2-hero";
import { PlumeformV2Integrations } from "@foundry/plumeform-v2-integrations";
import { PlumeformV2Looks } from "@foundry/plumeform-v2-looks";
import { PlumeformV2Pricing } from "@foundry/plumeform-v2-pricing";
import { PlumeformV2QuestionTypes } from "@foundry/plumeform-v2-question-types";
import { PlumeformV2Templates } from "@foundry/plumeform-v2-templates";
import { checksSample, importSample } from "./plumeform-v2-card-grid/plumeform-v2-card-grid.demo";
import { compareSample as tableSample } from "./plumeform-v2-compare/plumeform-v2-compare.demo";
import { contactSample } from "./plumeform-v2-contact/plumeform-v2-contact.demo";
import { ctaSample } from "./plumeform-v2-cta-band/plumeform-v2-cta-band.demo";
import { embedSample } from "./plumeform-v2-embed/plumeform-v2-embed.demo";
import { faqSample } from "./plumeform-v2-faq/plumeform-v2-faq.demo";
import { askSample, compareSample } from "./plumeform-v2-feature-rows/plumeform-v2-feature-rows.demo";
import { footerSample } from "./plumeform-v2-footer/plumeform-v2-footer.demo";
import { glanceSample } from "./plumeform-v2-glance/plumeform-v2-glance.demo";
import { headerSample } from "./plumeform-v2-header/plumeform-v2-header.demo";
import { heroSample } from "./plumeform-v2-hero/plumeform-v2-hero.demo";
import { integrationsSample } from "./plumeform-v2-integrations/plumeform-v2-integrations.demo";
import { looksSample } from "./plumeform-v2-looks/plumeform-v2-looks.demo";
import { pricingSample } from "./plumeform-v2-pricing/plumeform-v2-pricing.demo";
import { questionTypesSample } from "./plumeform-v2-question-types/plumeform-v2-question-types.demo";
import { templatesSample } from "./plumeform-v2-templates/plumeform-v2-templates.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <PlumeformV2Header {...headerSample} />
      <PlumeformV2Hero {...heroSample} />
      <PlumeformV2FeatureRows {...askSample} />
      <PlumeformV2CardGrid {...checksSample} />
      <PlumeformV2Embed {...embedSample} />
      <PlumeformV2QuestionTypes {...questionTypesSample} />
      <PlumeformV2FeatureRows {...compareSample} />
      <PlumeformV2Looks {...looksSample} />
      <PlumeformV2Integrations {...integrationsSample} />
      <PlumeformV2Glance {...glanceSample} />
      <PlumeformV2Pricing {...pricingSample} />
      <PlumeformV2Compare {...tableSample} className="pt-0" />
      <PlumeformV2CardGrid {...importSample} />
      <PlumeformV2Faq {...faqSample} />
      <PlumeformV2Templates {...templatesSample} />
      <PlumeformV2CtaBand {...ctaSample} />
      <PlumeformV2Contact {...contactSample} />
      <PlumeformV2Footer {...footerSample} />
    </div>
  );
}
