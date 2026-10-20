// The Fernlight landing page (recreating growthbook.io's design), built only from this site's
// blocks with each block's demo content. Light is the faithful mode: the testimonial band,
// the CTA card and the footer force themselves dark with the dark class.
import { GrowthbookV2Cases } from "@foundry/growthbook-v2-cases";
import { GrowthbookV2Cost } from "@foundry/growthbook-v2-cost";
import { GrowthbookV2Cta } from "@foundry/growthbook-v2-cta";
import { GrowthbookV2Deploy } from "@foundry/growthbook-v2-deploy";
import { GrowthbookV2Footer } from "@foundry/growthbook-v2-footer";
import { GrowthbookV2Header } from "@foundry/growthbook-v2-header";
import { GrowthbookV2Hero } from "@foundry/growthbook-v2-hero";
import { GrowthbookV2Integrations } from "@foundry/growthbook-v2-integrations";
import { GrowthbookV2Logos } from "@foundry/growthbook-v2-logos";
import { GrowthbookV2Platform } from "@foundry/growthbook-v2-platform";
import { GrowthbookV2Posts } from "@foundry/growthbook-v2-posts";
import { GrowthbookV2Sdks } from "@foundry/growthbook-v2-sdks";
import { GrowthbookV2SmoothScroll } from "@foundry/growthbook-v2-smooth-scroll";
import { GrowthbookV2Testimonials } from "@foundry/growthbook-v2-testimonials";
import { GrowthbookV2Why } from "@foundry/growthbook-v2-why";
import { casesSample } from "./growthbook-v2-cases/growthbook-v2-cases.demo";
import { costSample } from "./growthbook-v2-cost/growthbook-v2-cost.demo";
import { ctaSample } from "./growthbook-v2-cta/growthbook-v2-cta.demo";
import { deploySample } from "./growthbook-v2-deploy/growthbook-v2-deploy.demo";
import { footerSample } from "./growthbook-v2-footer/growthbook-v2-footer.demo";
import { headerSample } from "./growthbook-v2-header/growthbook-v2-header.demo";
import { heroSample } from "./growthbook-v2-hero/growthbook-v2-hero.demo";
import { integrationsSample } from "./growthbook-v2-integrations/growthbook-v2-integrations.demo";
import { logosSample } from "./growthbook-v2-logos/growthbook-v2-logos.demo";
import { platformSample } from "./growthbook-v2-platform/growthbook-v2-platform.demo";
import { postsSample } from "./growthbook-v2-posts/growthbook-v2-posts.demo";
import { sdksSample } from "./growthbook-v2-sdks/growthbook-v2-sdks.demo";
import { testimonialsSample } from "./growthbook-v2-testimonials/growthbook-v2-testimonials.demo";
import { whySample } from "./growthbook-v2-why/growthbook-v2-why.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <GrowthbookV2SmoothScroll />
      <GrowthbookV2Header {...headerSample} />
      <GrowthbookV2Hero {...heroSample} />
      <GrowthbookV2Logos {...logosSample} />
      <GrowthbookV2Platform {...platformSample} />
      <GrowthbookV2Cases {...casesSample} />
      <GrowthbookV2Deploy {...deploySample} />
      <GrowthbookV2Integrations {...integrationsSample} />
      <GrowthbookV2Why {...whySample} />
      <GrowthbookV2Cost {...costSample} />
      <GrowthbookV2Posts {...postsSample} />
      <GrowthbookV2Sdks {...sdksSample} />
      <GrowthbookV2Testimonials {...testimonialsSample} />
      <GrowthbookV2Cta {...ctaSample} />
      <GrowthbookV2Footer {...footerSample} />
    </div>
  );
}
