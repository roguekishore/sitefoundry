// The whole GrowthBook recreation, built only from this site's blocks with each block's demo
// content (a made-up company, Northvane). Light is the faithful mode: the stats band, the quote
// carousel, the CTA card and the footer force themselves dark.
import { GrowthbookCaseStudies } from "@foundry/growthbook-case-studies";
import { GrowthbookCta } from "@foundry/growthbook-cta";
import { GrowthbookDeploy } from "@foundry/growthbook-deploy";
import { GrowthbookFeatures } from "@foundry/growthbook-features";
import { GrowthbookFooter } from "@foundry/growthbook-footer";
import { GrowthbookHeader } from "@foundry/growthbook-header";
import { GrowthbookHero } from "@foundry/growthbook-hero";
import { GrowthbookIntegrations } from "@foundry/growthbook-integrations";
import { GrowthbookLogos } from "@foundry/growthbook-logos";
import { GrowthbookResources } from "@foundry/growthbook-resources";
import { GrowthbookScale } from "@foundry/growthbook-scale";
import { GrowthbookSdks } from "@foundry/growthbook-sdks";
import { GrowthbookTestimonials } from "@foundry/growthbook-testimonials";
import { GrowthbookWhy } from "@foundry/growthbook-why";
import { caseStudiesSample } from "./growthbook-case-studies/growthbook-case-studies.demo";
import { ctaSample } from "./growthbook-cta/growthbook-cta.demo";
import { deploySample } from "./growthbook-deploy/growthbook-deploy.demo";
import { featuresSample } from "./growthbook-features/growthbook-features.demo";
import { footerSample } from "./growthbook-footer/growthbook-footer.demo";
import { headerSample } from "./growthbook-header/growthbook-header.demo";
import { heroSample } from "./growthbook-hero/growthbook-hero.demo";
import { integrationsSample } from "./growthbook-integrations/growthbook-integrations.demo";
import { logosSample } from "./growthbook-logos/growthbook-logos.demo";
import { resourcesSample } from "./growthbook-resources/growthbook-resources.demo";
import { scaleSample } from "./growthbook-scale/growthbook-scale.demo";
import { sdksSample } from "./growthbook-sdks/growthbook-sdks.demo";
import { testimonialsSample } from "./growthbook-testimonials/growthbook-testimonials.demo";
import { whySample } from "./growthbook-why/growthbook-why.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <GrowthbookHeader {...headerSample} />
      <GrowthbookHero {...heroSample} />
      <GrowthbookLogos {...logosSample} />
      <GrowthbookFeatures {...featuresSample} />
      <GrowthbookCaseStudies {...caseStudiesSample} />
      <GrowthbookDeploy {...deploySample} />
      <GrowthbookIntegrations {...integrationsSample} />
      <GrowthbookWhy {...whySample} />
      <GrowthbookScale {...scaleSample} />
      <GrowthbookResources {...resourcesSample} />
      <GrowthbookSdks {...sdksSample} />
      <GrowthbookTestimonials {...testimonialsSample} />
      <GrowthbookCta {...ctaSample} />
      <GrowthbookFooter {...footerSample} />
    </div>
  );
}
