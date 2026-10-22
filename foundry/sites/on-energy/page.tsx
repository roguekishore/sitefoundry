// The whole ON.energy recreation (as the fictional "Sorrel Power"), built only from this
// site's blocks with each block's demo content. Dark is the faithful mode. Lenis smooth
// scroll runs on the page, as on the original.
import { OnEnergyExpertise } from "@foundry/on-energy-expertise";
import { OnEnergyFeatures } from "@foundry/on-energy-features";
import { OnEnergyFooter } from "@foundry/on-energy-footer";
import { OnEnergyHeader } from "@foundry/on-energy-header";
import { OnEnergyHero } from "@foundry/on-energy-hero";
import { OnEnergyManifesto } from "@foundry/on-energy-manifesto";
import { OnEnergyNews } from "@foundry/on-energy-news";
import { OnEnergyPerformance } from "@foundry/on-energy-performance";
import { OnEnergyShowcase } from "@foundry/on-energy-showcase";
import { OnEnergySmoothScroll } from "@foundry/on-energy-smooth-scroll";
import { OnEnergyStats } from "@foundry/on-energy-stats";
import { OnEnergyTestimonials } from "@foundry/on-energy-testimonials";
import { expertiseSample } from "./on-energy-expertise/on-energy-expertise.demo";
import { featuresSample } from "./on-energy-features/on-energy-features.demo";
import { footerSample } from "./on-energy-footer/on-energy-footer.demo";
import { headerSample } from "./on-energy-header/on-energy-header.demo";
import { heroSample } from "./on-energy-hero/on-energy-hero.demo";
import { manifestoSample } from "./on-energy-manifesto/on-energy-manifesto.demo";
import { newsSample } from "./on-energy-news/on-energy-news.demo";
import { performanceSample } from "./on-energy-performance/on-energy-performance.demo";
import { showcaseSample } from "./on-energy-showcase/on-energy-showcase.demo";
import { statsSample } from "./on-energy-stats/on-energy-stats.demo";
import { testimonialsSample } from "./on-energy-testimonials/on-energy-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <OnEnergySmoothScroll />
      <OnEnergyHeader {...headerSample} />
      <OnEnergyHero {...heroSample} />
      <OnEnergyManifesto {...manifestoSample} />
      <OnEnergyShowcase {...showcaseSample} />
      <OnEnergyFeatures {...featuresSample} />
      <OnEnergyTestimonials {...testimonialsSample} />
      <OnEnergyExpertise {...expertiseSample} />
      <OnEnergyPerformance {...performanceSample} />
      {/* on phones the first card rises over the bottom of the section above, as on the original */}
      <OnEnergyStats {...statsSample} className="relative -mt-28 lg:mt-0" />
      <OnEnergyNews {...newsSample} />
      <OnEnergyFooter {...footerSample} />
    </div>
  );
}
