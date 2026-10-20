// Plans page (recreating plumeform.com/pricing), built from this site's blocks.
import { PlumeformV2Compare } from "@foundry/plumeform-v2-compare";
import { PlumeformV2CtaBand } from "@foundry/plumeform-v2-cta-band";
import { PlumeformV2Faq } from "@foundry/plumeform-v2-faq";
import { PlumeformV2Footer } from "@foundry/plumeform-v2-footer";
import { PlumeformV2Header } from "@foundry/plumeform-v2-header";
import { PlumeformV2Pricing } from "@foundry/plumeform-v2-pricing";
import { comparePageSample } from "../plumeform-v2-compare/plumeform-v2-compare.demo";
import { ctaSample } from "../plumeform-v2-cta-band/plumeform-v2-cta-band.demo";
import { faqPageSample } from "../plumeform-v2-faq/plumeform-v2-faq.demo";
import { footerSample } from "../plumeform-v2-footer/plumeform-v2-footer.demo";
import { headerFor } from "../plumeform-v2-header/plumeform-v2-header.demo";
import { pricingPageSample } from "../plumeform-v2-pricing/plumeform-v2-pricing.demo";

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <PlumeformV2Header {...headerFor("Plans")} />
      <PlumeformV2Pricing {...pricingPageSample} />
      <PlumeformV2Compare {...comparePageSample} className="pb-12 lg:pb-16" />
      <PlumeformV2Faq {...faqPageSample} className="pt-12" />
      <PlumeformV2CtaBand {...ctaSample} />
      <PlumeformV2Footer {...footerSample} />
    </div>
  );
}
