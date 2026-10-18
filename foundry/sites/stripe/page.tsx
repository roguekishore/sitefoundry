// The whole Stripe recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "stripe — full page". Light is the faithful mode: the developer
// band forces itself dark.
import { StripeBanner } from "@foundry/stripe-banner";
import { StripeCarousel } from "@foundry/stripe-carousel";
import { StripeFeatures } from "@foundry/stripe-features";
import { StripeHeader } from "@foundry/stripe-header";
import { StripeHero } from "@foundry/stripe-hero";
import { StripeQuote } from "@foundry/stripe-quote";
import { StripeShowcase } from "@foundry/stripe-showcase";
import { StripeSolutions } from "@foundry/stripe-solutions";
import { StripeStats } from "@foundry/stripe-stats";
import { StripeStories } from "@foundry/stripe-stories";
import { bannerSample } from "./stripe-banner/stripe-banner.demo";
import { carouselSample } from "./stripe-carousel/stripe-carousel.demo";
import { expertsSample, platformFeaturesSample } from "./stripe-features/stripe-features.demo";
import { headerSample } from "./stripe-header/stripe-header.demo";
import { heroSample } from "./stripe-hero/stripe-hero.demo";
import { quoteSample } from "./stripe-quote/stripe-quote.demo";
import { showcaseSample } from "./stripe-showcase/stripe-showcase.demo";
import { solutionsSample } from "./stripe-solutions/stripe-solutions.demo";
import { statsSample } from "./stripe-stats/stripe-stats.demo";
import { storiesSample } from "./stripe-stories/stripe-stories.demo";

export default function Page() {
  return (
    <div className="relative bg-background">
      <StripeHeader {...headerSample} />
      <StripeHero {...heroSample} />
      <StripeSolutions {...solutionsSample} />
      <StripeBanner {...bannerSample} />
      <StripeStats {...statsSample} />
      <StripeStories {...storiesSample} />
      <StripeFeatures {...expertsSample} />
      <StripeCarousel {...carouselSample} rule="dashed" />
      <StripeShowcase {...showcaseSample} rule="dashed" />
      <StripeFeatures {...platformFeaturesSample} />
      <StripeQuote {...quoteSample} />
    </div>
  );
}
