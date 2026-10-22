// The whole Ferrowell page (a recreation of sharplink.com's design language), built only from
// this site's blocks with each block's demo content. Light is the faithful mode; the dark
// bands carry the .dark class themselves.
import { SharplinkBackdrop } from "@foundry/sharplink-backdrop";
import { SharplinkCta } from "@foundry/sharplink-cta";
import { SharplinkFaq } from "@foundry/sharplink-faq";
import { SharplinkFooter } from "@foundry/sharplink-footer";
import { SharplinkHeader } from "@foundry/sharplink-header";
import { SharplinkHero } from "@foundry/sharplink-hero";
import { SharplinkNews } from "@foundry/sharplink-news";
import { SharplinkPillars } from "@foundry/sharplink-pillars";
import { SharplinkSmoothScroll } from "@foundry/sharplink-smooth-scroll";
import { SharplinkThesis } from "@foundry/sharplink-thesis";
import { SharplinkYield } from "@foundry/sharplink-yield";
import { ctaSample } from "./sharplink-cta/sharplink-cta.demo";
import { faqSample } from "./sharplink-faq/sharplink-faq.demo";
import { footerSample } from "./sharplink-footer/sharplink-footer.demo";
import { headerSample } from "./sharplink-header/sharplink-header.demo";
import { heroSample } from "./sharplink-hero/sharplink-hero.demo";
import { newsSample } from "./sharplink-news/sharplink-news.demo";
import { pillarsSample } from "./sharplink-pillars/sharplink-pillars.demo";
import { thesisSample } from "./sharplink-thesis/sharplink-thesis.demo";
import { yieldSample } from "./sharplink-yield/sharplink-yield.demo";

export default function Page() {
  return (
    <div className="relative isolate text-foreground">
      <SharplinkSmoothScroll />
      <SharplinkBackdrop />
      <SharplinkHeader {...headerSample} />
      <SharplinkHero {...heroSample} />
      <SharplinkYield {...yieldSample} />
      <SharplinkPillars {...pillarsSample} />
      <SharplinkCta {...ctaSample} />
      <SharplinkThesis {...thesisSample} />
      <SharplinkNews {...newsSample} />
      <SharplinkFaq {...faqSample} />
      <SharplinkFooter {...footerSample} />
    </div>
  );
}
