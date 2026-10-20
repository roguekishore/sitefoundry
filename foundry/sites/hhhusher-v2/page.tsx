// The HHHusher recreation (a fictional "Quello Hood"), built only from this site's blocks with
// each block's demo content. Light (cream) is the faithful mode: the hero, setup picker and
// footer force themselves dark, and the tan bands use the secondary colour. Everything above
// the footer sits in one raised layer, so the page lifts off the footer at the end.
import { HhhusherV2Bento } from "@foundry/hhhusher-v2-bento";
import { HhhusherV2Faq } from "@foundry/hhhusher-v2-faq";
import { HhhusherV2Features } from "@foundry/hhhusher-v2-features";
import { HhhusherV2Footer } from "@foundry/hhhusher-v2-footer";
import { HhhusherV2Header } from "@foundry/hhhusher-v2-header";
import { HhhusherV2Hero } from "@foundry/hhhusher-v2-hero";
import { HhhusherV2MicSetups } from "@foundry/hhhusher-v2-mic-setups";
import { HhhusherV2Overview } from "@foundry/hhhusher-v2-overview";
import { HhhusherV2SmoothScroll } from "@foundry/hhhusher-v2-smooth-scroll";
import { HhhusherV2Testimonials } from "@foundry/hhhusher-v2-testimonials";
import { bentoSample } from "./hhhusher-v2-bento/hhhusher-v2-bento.demo";
import { faqSample } from "./hhhusher-v2-faq/hhhusher-v2-faq.demo";
import { featuresSample } from "./hhhusher-v2-features/hhhusher-v2-features.demo";
import { footerSample } from "./hhhusher-v2-footer/hhhusher-v2-footer.demo";
import { headerSample } from "./hhhusher-v2-header/hhhusher-v2-header.demo";
import { heroSample } from "./hhhusher-v2-hero/hhhusher-v2-hero.demo";
import { micSetupsSample } from "./hhhusher-v2-mic-setups/hhhusher-v2-mic-setups.demo";
import { overviewSample } from "./hhhusher-v2-overview/hhhusher-v2-overview.demo";
import { testimonialsSample } from "./hhhusher-v2-testimonials/hhhusher-v2-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherV2SmoothScroll />
      <HhhusherV2Header {...headerSample} />
      <main className="relative z-10">
        <HhhusherV2Hero {...heroSample} />
        <HhhusherV2Overview {...overviewSample} />
        <HhhusherV2Bento {...bentoSample} />
        <HhhusherV2Features {...featuresSample} />
        <HhhusherV2MicSetups {...micSetupsSample} />
        <HhhusherV2Faq {...faqSample} />
        <HhhusherV2Testimonials {...testimonialsSample} />
      </main>
      <HhhusherV2Footer {...footerSample} reveal />
    </div>
  );
}
