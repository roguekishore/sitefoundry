// The whole Bevel recreation, built only from this site's blocks, with each block's demo
// content (Juniper, its coach and every name in it are made up). Light is the faithful mode;
// the intelligence band and the privacy card invert their colours on their own.
import { BevelCta } from "@foundry/bevel-cta";
import { BevelDownloadDock } from "@foundry/bevel-download-dock";
import { BevelFooter } from "@foundry/bevel-footer";
import { BevelHeader } from "@foundry/bevel-header";
import { BevelHero } from "@foundry/bevel-hero";
import { BevelIntelligence } from "@foundry/bevel-intelligence";
import { BevelMembers } from "@foundry/bevel-members";
import { BevelMetrics } from "@foundry/bevel-metrics";
import { BevelMoreFeatures } from "@foundry/bevel-more-features";
import { BevelPrivacy } from "@foundry/bevel-privacy";
import { BevelRecords } from "@foundry/bevel-records";
import { BevelSmoothScroll } from "@foundry/bevel-smooth-scroll";
import { BevelSplitCard } from "@foundry/bevel-split-card";
import { BevelTestimonials } from "@foundry/bevel-testimonials";
import { BevelWorksWith } from "@foundry/bevel-works-with";
import { ctaSample } from "./bevel-cta/bevel-cta.demo";
import { downloadDockSample } from "./bevel-download-dock/bevel-download-dock.demo";
import { footerSample } from "./bevel-footer/bevel-footer.demo";
import { headerSample } from "./bevel-header/bevel-header.demo";
import { heroSample } from "./bevel-hero/bevel-hero.demo";
import { intelligenceSample } from "./bevel-intelligence/bevel-intelligence.demo";
import { membersSample } from "./bevel-members/bevel-members.demo";
import { metricsSample } from "./bevel-metrics/bevel-metrics.demo";
import { moreFeaturesSample } from "./bevel-more-features/bevel-more-features.demo";
import { privacySample } from "./bevel-privacy/bevel-privacy.demo";
import { recordsSample } from "./bevel-records/bevel-records.demo";
import { splitCardSample } from "./bevel-split-card/bevel-split-card.demo";
import { testimonialsSample } from "./bevel-testimonials/bevel-testimonials.demo";
import { worksWithSample } from "./bevel-works-with/bevel-works-with.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <BevelSmoothScroll />
      <BevelHeader {...headerSample} />
      <main>
        <BevelHero {...heroSample} />
        <BevelWorksWith {...worksWithSample} />
        <BevelMembers {...membersSample} />
        <BevelMetrics {...metricsSample} />
        <BevelSplitCard {...splitCardSample} />
        <BevelRecords {...recordsSample} />
        <BevelIntelligence {...intelligenceSample} />
        <BevelMoreFeatures {...moreFeaturesSample} />
        <BevelPrivacy {...privacySample} />
        <BevelTestimonials {...testimonialsSample} />
        <BevelCta {...ctaSample} />
      </main>
      <BevelFooter {...footerSample} />
      <BevelDownloadDock {...downloadDockSample} />
    </div>
  );
}
