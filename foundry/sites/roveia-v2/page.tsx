// The whole Roveia recreation, built only from this site's blocks, with each block's demo
// content (a fictional growth agency, Halden Growth). Light is the faithful mode.
import { RoveiaV2Brands } from "@foundry/roveia-v2-brands";
import { RoveiaV2Cases } from "@foundry/roveia-v2-cases";
import { RoveiaV2Faq } from "@foundry/roveia-v2-faq";
import { RoveiaV2Footer } from "@foundry/roveia-v2-footer";
import { RoveiaV2Founders } from "@foundry/roveia-v2-founders";
import { RoveiaV2Header } from "@foundry/roveia-v2-header";
import { RoveiaV2Hero } from "@foundry/roveia-v2-hero";
import { RoveiaV2Industries } from "@foundry/roveia-v2-industries";
import { RoveiaV2Services } from "@foundry/roveia-v2-services";
import { RoveiaV2SmoothScroll } from "@foundry/roveia-v2-smooth-scroll";
import { RoveiaV2Steps } from "@foundry/roveia-v2-steps";
import { brandsSample } from "./roveia-v2-brands/roveia-v2-brands.demo";
import { casesSample } from "./roveia-v2-cases/roveia-v2-cases.demo";
import { faqSample } from "./roveia-v2-faq/roveia-v2-faq.demo";
import { footerSample } from "./roveia-v2-footer/roveia-v2-footer.demo";
import { foundersSample } from "./roveia-v2-founders/roveia-v2-founders.demo";
import { headerSample } from "./roveia-v2-header/roveia-v2-header.demo";
import { heroSample } from "./roveia-v2-hero/roveia-v2-hero.demo";
import { industriesSample } from "./roveia-v2-industries/roveia-v2-industries.demo";
import { servicesSample } from "./roveia-v2-services/roveia-v2-services.demo";
import { stepsSample } from "./roveia-v2-steps/roveia-v2-steps.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <RoveiaV2SmoothScroll />
      <RoveiaV2Header {...headerSample} />
      <main>
        <RoveiaV2Hero {...heroSample} />
        <RoveiaV2Industries {...industriesSample} />
        <RoveiaV2Brands {...brandsSample} />
        <RoveiaV2Cases {...casesSample} />
        <RoveiaV2Services {...servicesSample} />
        <RoveiaV2Steps {...stepsSample} />
        <RoveiaV2Founders {...foundersSample} />
        <RoveiaV2Faq {...faqSample} />
      </main>
      <RoveiaV2Footer {...footerSample} />
    </div>
  );
}
