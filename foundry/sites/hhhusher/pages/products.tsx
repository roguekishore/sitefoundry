// The product page (recreating hhhusher.com/products), built only from this site's blocks with
// their demo content.
import { HhhusherFaq } from "@foundry/hhhusher-faq";
import { HhhusherFooter } from "@foundry/hhhusher-footer";
import { HhhusherHeader } from "@foundry/hhhusher-header";
import { HhhusherParts } from "@foundry/hhhusher-parts";
import { HhhusherProductHero } from "@foundry/hhhusher-product-hero";
import { HhhusherReviewList } from "@foundry/hhhusher-review-list";
import { HhhusherSmoothScroll } from "@foundry/hhhusher-smooth-scroll";
import { HhhusherSpecs } from "@foundry/hhhusher-specs";
import { HhhusherStatement } from "@foundry/hhhusher-statement";
import { faqSample } from "../hhhusher-faq/hhhusher-faq.demo";
import { footerSample } from "../hhhusher-footer/hhhusher-footer.demo";
import { headerSample } from "../hhhusher-header/hhhusher-header.demo";
import { partsSample } from "../hhhusher-parts/hhhusher-parts.demo";
import { productHeroSample } from "../hhhusher-product-hero/hhhusher-product-hero.demo";
import { reviewListSample } from "../hhhusher-review-list/hhhusher-review-list.demo";
import { specsSample } from "../hhhusher-specs/hhhusher-specs.demo";
import { productStatementSample } from "../hhhusher-statement/hhhusher-statement.demo";

export default function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherSmoothScroll />
      <HhhusherHeader {...headerSample} />
      <HhhusherProductHero {...productHeroSample} />
      <HhhusherStatement {...productStatementSample} />
      <HhhusherReviewList {...reviewListSample} />
      <HhhusherSpecs {...specsSample} />
      <HhhusherParts {...partsSample} />
      <HhhusherFaq {...faqSample} />
      <HhhusherFooter {...footerSample} />
    </div>
  );
}
