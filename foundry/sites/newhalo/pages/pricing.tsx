// "Get started" page (recreating halodental.com/pricing), built from this site's blocks.
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloPricingIntegration } from "@foundry/newhalo-pricing-integration";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { pricingHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";
import { integrationSample } from "../newhalo-pricing-integration/newhalo-pricing-integration.demo";

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor("Get started")} />
      <NewhaloPageHero {...pricingHeroSample} />
      <NewhaloPricingIntegration {...integrationSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
