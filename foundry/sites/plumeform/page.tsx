// The whole Plumeform recreation (as the made-up "Tidewell"), built only from this site's
// blocks with each block's demo content. Light is the faithful mode: the dark bands force
// themselves dark, and the header follows whatever band is beneath it.
import { PlumeformCardGrid } from "@foundry/plumeform-card-grid";
import { PlumeformContact } from "@foundry/plumeform-contact";
import { PlumeformCta } from "@foundry/plumeform-cta";
import { PlumeformEmbed } from "@foundry/plumeform-embed";
import { PlumeformFaq } from "@foundry/plumeform-faq";
import { PlumeformFooter } from "@foundry/plumeform-footer";
import { PlumeformHeader } from "@foundry/plumeform-header";
import { PlumeformHero } from "@foundry/plumeform-hero";
import { PlumeformIntegrations } from "@foundry/plumeform-integrations";
import { PlumeformLooks } from "@foundry/plumeform-looks";
import { PlumeformPricing } from "@foundry/plumeform-pricing";
import { PlumeformSplit } from "@foundry/plumeform-split";
import { PlumeformStats } from "@foundry/plumeform-stats";
import { PlumeformTemplates } from "@foundry/plumeform-templates";
import { PlumeformTypes } from "@foundry/plumeform-types";
import { importSample, qualitySample } from "./plumeform-card-grid/plumeform-card-grid.demo";
import { contactSample } from "./plumeform-contact/plumeform-contact.demo";
import { ctaSample } from "./plumeform-cta/plumeform-cta.demo";
import { embedSample } from "./plumeform-embed/plumeform-embed.demo";
import { faqSample } from "./plumeform-faq/plumeform-faq.demo";
import { footerSample } from "./plumeform-footer/plumeform-footer.demo";
import { headerSample } from "./plumeform-header/plumeform-header.demo";
import { heroSample } from "./plumeform-hero/plumeform-hero.demo";
import { integrationsSample } from "./plumeform-integrations/plumeform-integrations.demo";
import { looksSample } from "./plumeform-looks/plumeform-looks.demo";
import { pricingSample } from "./plumeform-pricing/plumeform-pricing.demo";
import { compareSample, splitSample } from "./plumeform-split/plumeform-split.demo";
import { statsSample } from "./plumeform-stats/plumeform-stats.demo";
import { templatesSample } from "./plumeform-templates/plumeform-templates.demo";
import { typesSample } from "./plumeform-types/plumeform-types.demo";

export default function Page() {
  return (
    <div className="relative bg-background">
      <PlumeformHeader {...headerSample} initialTone="dark" />
      <PlumeformHero {...heroSample} />
      <PlumeformSplit {...splitSample} />
      <PlumeformCardGrid {...qualitySample} />
      <PlumeformEmbed {...embedSample} />
      <PlumeformTypes {...typesSample} />
      <PlumeformSplit {...compareSample} />
      <PlumeformLooks {...looksSample} />
      <PlumeformIntegrations {...integrationsSample} />
      <PlumeformStats {...statsSample} />
      <PlumeformPricing {...pricingSample} />
      <PlumeformCardGrid {...importSample} />
      <PlumeformFaq {...faqSample} />
      <PlumeformTemplates {...templatesSample} />
      <PlumeformCta {...ctaSample} className="pt-0 lg:pt-0" />
      <PlumeformContact {...contactSample} id="contact" />
      <PlumeformFooter {...footerSample} />
    </div>
  );
}
