// The Northvane landing page (recreating roveia.com's design), built only from this site's
// blocks with each block's demo content. Light is the faithful mode; the brands, cases and
// steps sections force themselves dark.
import { RoveiaBrands } from "@foundry/roveia-brands";
import { RoveiaCases } from "@foundry/roveia-cases";
import { RoveiaFaq } from "@foundry/roveia-faq";
import { RoveiaFooter } from "@foundry/roveia-footer";
import { RoveiaFounders } from "@foundry/roveia-founders";
import { RoveiaHeader } from "@foundry/roveia-header";
import { RoveiaHero } from "@foundry/roveia-hero";
import { RoveiaIndustries } from "@foundry/roveia-industries";
import { RoveiaServices } from "@foundry/roveia-services";
import { RoveiaSmoothScroll } from "@foundry/roveia-smooth-scroll";
import { RoveiaSteps } from "@foundry/roveia-steps";
import { brandsSample } from "./roveia-brands/roveia-brands.demo";
import { casesSample } from "./roveia-cases/roveia-cases.demo";
import { faqSample } from "./roveia-faq/roveia-faq.demo";
import { footerSample } from "./roveia-footer/roveia-footer.demo";
import { foundersSample } from "./roveia-founders/roveia-founders.demo";
import { headerSample } from "./roveia-header/roveia-header.demo";
import { heroSample } from "./roveia-hero/roveia-hero.demo";
import { industriesSample } from "./roveia-industries/roveia-industries.demo";
import { servicesSample } from "./roveia-services/roveia-services.demo";
import { stepsSample } from "./roveia-steps/roveia-steps.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <RoveiaSmoothScroll />
      <RoveiaHeader {...headerSample} />
      <RoveiaHero {...heroSample} />
      <RoveiaIndustries {...industriesSample} />
      <RoveiaBrands {...brandsSample} />
      <RoveiaCases {...casesSample} />
      <RoveiaServices {...servicesSample} />
      <RoveiaSteps {...stepsSample} />
      <RoveiaFounders {...foundersSample} />
      <RoveiaFaq {...faqSample} />
      <RoveiaFooter {...footerSample} />
    </div>
  );
}
