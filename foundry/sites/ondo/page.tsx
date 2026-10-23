// The whole Ondo recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Corvane). Light is the faithful mode.
import { OndoBeliefs } from "@foundry/ondo-beliefs";
import { OndoCta } from "@foundry/ondo-cta";
import { OndoFooter } from "@foundry/ondo-footer";
import { OndoHeader } from "@foundry/ondo-header";
import { OndoHero } from "@foundry/ondo-hero";
import { OndoInsights } from "@foundry/ondo-insights";
import { OndoNews } from "@foundry/ondo-news";
import { OndoNexus } from "@foundry/ondo-nexus";
import { OndoPrinciples } from "@foundry/ondo-principles";
import { OndoProducts } from "@foundry/ondo-products";
import { OndoStats } from "@foundry/ondo-stats";
import { OndoTestimonials } from "@foundry/ondo-testimonials";
import { beliefsSample } from "./ondo-beliefs/ondo-beliefs.demo";
import { ctaSample } from "./ondo-cta/ondo-cta.demo";
import { footerSample } from "./ondo-footer/ondo-footer.demo";
import { headerSample } from "./ondo-header/ondo-header.demo";
import { heroSample } from "./ondo-hero/ondo-hero.demo";
import { insightsSample } from "./ondo-insights/ondo-insights.demo";
import { newsSample } from "./ondo-news/ondo-news.demo";
import { nexusSample } from "./ondo-nexus/ondo-nexus.demo";
import { principlesSample } from "./ondo-principles/ondo-principles.demo";
import { productsSample } from "./ondo-products/ondo-products.demo";
import { statsSample } from "./ondo-stats/ondo-stats.demo";
import { testimonialsSample } from "./ondo-testimonials/ondo-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <OndoHeader {...headerSample} />
      <OndoHero {...heroSample} />
      <OndoNews {...newsSample} />
      <OndoProducts {...productsSample} />
      <OndoStats {...statsSample} />
      <OndoTestimonials {...testimonialsSample} />
      <OndoBeliefs {...beliefsSample} />
      <OndoPrinciples {...principlesSample} />
      <OndoNexus {...nexusSample} />
      <OndoInsights {...insightsSample} />
      <OndoCta {...ctaSample} />
      <OndoFooter {...footerSample} />
    </div>
  );
}
