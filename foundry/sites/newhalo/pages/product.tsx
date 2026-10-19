// Product page (recreating halodental.com/halo-digital-mirror), built from this site's blocks.
import { NewhaloFaqTeaser } from "@foundry/newhalo-faq-teaser";
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloHero } from "@foundry/newhalo-hero";
import { NewhaloProductApp } from "@foundry/newhalo-product-app";
import { NewhaloProductBenefits } from "@foundry/newhalo-product-benefits";
import { NewhaloProductCare } from "@foundry/newhalo-product-care";
import { NewhaloProductFeatures } from "@foundry/newhalo-product-features";
import { NewhaloProductOverview } from "@foundry/newhalo-product-overview";
import { NewhaloProductSequence } from "@foundry/newhalo-product-sequence";
import { NewhaloProductSubnav } from "@foundry/newhalo-product-subnav";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { NewhaloTextGallery } from "@foundry/newhalo-text-gallery";
import { NewhaloWaitlistCta } from "@foundry/newhalo-waitlist-cta";
import { faqTeaserSample } from "../newhalo-faq-teaser/newhalo-faq-teaser.demo";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { productHeroSample } from "../newhalo-hero/newhalo-hero.demo";
import { appSample } from "../newhalo-product-app/newhalo-product-app.demo";
import { benefitsSample } from "../newhalo-product-benefits/newhalo-product-benefits.demo";
import { careSample } from "../newhalo-product-care/newhalo-product-care.demo";
import { featuresSample } from "../newhalo-product-features/newhalo-product-features.demo";
import { overviewSample } from "../newhalo-product-overview/newhalo-product-overview.demo";
import { sequenceSample } from "../newhalo-product-sequence/newhalo-product-sequence.demo";
import { subnavSample } from "../newhalo-product-subnav/newhalo-product-subnav.demo";
import { cameraSample } from "../newhalo-text-gallery/newhalo-text-gallery.demo";
import { waitlistSample } from "../newhalo-waitlist-cta/newhalo-waitlist-cta.demo";

export default function ProductPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor("Instrument")} />
      <NewhaloHero {...productHeroSample} />
      <NewhaloProductSubnav {...subnavSample} />
      <NewhaloProductOverview {...overviewSample} />
      <NewhaloProductFeatures {...featuresSample} />
      <NewhaloProductSequence {...sequenceSample} />
      <NewhaloTextGallery {...cameraSample} />
      <NewhaloProductBenefits {...benefitsSample} />
      <NewhaloProductApp {...appSample} />
      <NewhaloProductCare {...careSample} />
      <NewhaloFaqTeaser {...faqTeaserSample} />
      <NewhaloWaitlistCta {...waitlistSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
