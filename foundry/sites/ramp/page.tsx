// The whole Ramp recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Kestrel). Shown in the gallery as "ramp — full page".
// Light is the faithful mode.
import { RampBanner } from "@foundry/ramp-banner";
import { RampCta } from "@foundry/ramp-cta";
import { RampDuo } from "@foundry/ramp-duo";
import { RampFooter } from "@foundry/ramp-footer";
import { RampHeader } from "@foundry/ramp-header";
import { RampHero } from "@foundry/ramp-hero";
import { RampLogos } from "@foundry/ramp-logos";
import { RampPinned } from "@foundry/ramp-pinned";
import { RampPlatform } from "@foundry/ramp-platform";
import { RampRecommend } from "@foundry/ramp-recommend";
import { RampStories } from "@foundry/ramp-stories";
import { RampTestimonials } from "@foundry/ramp-testimonials";
import { RampTicker } from "@foundry/ramp-ticker";
import { bannerSample } from "./ramp-banner/ramp-banner.demo";
import { ctaSample } from "./ramp-cta/ramp-cta.demo";
import { duoSample } from "./ramp-duo/ramp-duo.demo";
import { footerSample } from "./ramp-footer/ramp-footer.demo";
import { headerSample } from "./ramp-header/ramp-header.demo";
import { heroSample } from "./ramp-hero/ramp-hero.demo";
import { logosSample } from "./ramp-logos/ramp-logos.demo";
import { pinnedSample } from "./ramp-pinned/ramp-pinned.demo";
import { platformSample } from "./ramp-platform/ramp-platform.demo";
import { recommendSample } from "./ramp-recommend/ramp-recommend.demo";
import { storiesSample } from "./ramp-stories/ramp-stories.demo";
import { testimonialsSample } from "./ramp-testimonials/ramp-testimonials.demo";
import { tickerSample } from "./ramp-ticker/ramp-ticker.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <RampHeader {...headerSample} />
      <RampHero {...heroSample} />
      <RampTicker {...tickerSample} />
      <RampLogos {...logosSample} />
      <RampPlatform {...platformSample} />
      <RampRecommend {...recommendSample} />
      <RampPinned {...pinnedSample} topOffset="6.375rem" className="mt-section lg:mt-[calc(var(--section-y)*1.5)]" />
      <RampStories {...storiesSample} />
      <RampBanner {...bannerSample} />
      <RampDuo {...duoSample} />
      <RampTestimonials {...testimonialsSample} />
      <RampCta {...ctaSample} />
      <RampFooter {...footerSample} tuck />
    </div>
  );
}
