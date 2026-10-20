// The shop page (recreating hhhusher.com/products), built from this site's blocks with their demo
// content. The product hero is near-black under the fixed header; the page lifts off the
// footer at the end, as on the landing page.
import { HhhusherV2Faq } from "@foundry/hhhusher-v2-faq";
import { HhhusherV2Footer } from "@foundry/hhhusher-v2-footer";
import { HhhusherV2Header } from "@foundry/hhhusher-v2-header";
import { HhhusherV2Parts } from "@foundry/hhhusher-v2-parts";
import { HhhusherV2ProductHero } from "@foundry/hhhusher-v2-product-hero";
import { HhhusherV2Reviews } from "@foundry/hhhusher-v2-reviews";
import { HhhusherV2SmoothScroll } from "@foundry/hhhusher-v2-smooth-scroll";
import { HhhusherV2Specs } from "@foundry/hhhusher-v2-specs";
import { faqSample } from "../hhhusher-v2-faq/hhhusher-v2-faq.demo";
import { footerSample } from "../hhhusher-v2-footer/hhhusher-v2-footer.demo";
import { headerSample } from "../hhhusher-v2-header/hhhusher-v2-header.demo";
import { partsSample } from "../hhhusher-v2-parts/hhhusher-v2-parts.demo";
import { productHeroSample } from "../hhhusher-v2-product-hero/hhhusher-v2-product-hero.demo";
import { reviewsSample } from "../hhhusher-v2-reviews/hhhusher-v2-reviews.demo";
import { specsSample } from "../hhhusher-v2-specs/hhhusher-v2-specs.demo";

export default function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherV2SmoothScroll />
      <HhhusherV2Header {...headerSample} />
      <main className="relative z-10">
        <HhhusherV2ProductHero {...productHeroSample} />
        <HhhusherV2Reviews {...reviewsSample} />
        <HhhusherV2Specs {...specsSample} />
        <HhhusherV2Parts {...partsSample} />
        <HhhusherV2Faq {...faqSample} />
      </main>
      <HhhusherV2Footer {...footerSample} reveal />
    </div>
  );
}
