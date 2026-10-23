// The whole Brex recreation, built only from this site's blocks, with each block's demo
// content (a made-up company, Kiln). Shown in the gallery as "brex — full page".
// Light is the faithful mode.
import { BrexBanner } from "@foundry/brex-banner";
import { BrexCta } from "@foundry/brex-cta";
import { BrexFeatures } from "@foundry/brex-features";
import { BrexFooter } from "@foundry/brex-footer";
import { BrexHeader } from "@foundry/brex-header";
import { BrexHero } from "@foundry/brex-hero";
import { BrexJournal } from "@foundry/brex-journal";
import { BrexLogos } from "@foundry/brex-logos";
import { BrexProducts } from "@foundry/brex-products";
import { BrexSolutions } from "@foundry/brex-solutions";
import { BrexStats } from "@foundry/brex-stats";
import { BrexTestimonials } from "@foundry/brex-testimonials";
import { bannerSample } from "./brex-banner/brex-banner.demo";
import { ctaSample } from "./brex-cta/brex-cta.demo";
import { featuresSample } from "./brex-features/brex-features.demo";
import { footerSample } from "./brex-footer/brex-footer.demo";
import { headerSample } from "./brex-header/brex-header.demo";
import { heroSample } from "./brex-hero/brex-hero.demo";
import { journalSample } from "./brex-journal/brex-journal.demo";
import { logosSample } from "./brex-logos/brex-logos.demo";
import { productsSample } from "./brex-products/brex-products.demo";
import { solutionsSample } from "./brex-solutions/brex-solutions.demo";
import { statsSample } from "./brex-stats/brex-stats.demo";
import { testimonialsSample } from "./brex-testimonials/brex-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <BrexBanner {...bannerSample} />
      <BrexHeader {...headerSample} />
      <BrexHero {...heroSample} />
      <BrexLogos {...logosSample} />
      <BrexProducts {...productsSample} />
      <BrexSolutions {...solutionsSample} />
      <BrexFeatures {...featuresSample} />
      <BrexStats {...statsSample} />
      <BrexTestimonials {...testimonialsSample} />
      <BrexCta {...ctaSample} />
      <BrexJournal {...journalSample} />
      <BrexFooter {...footerSample} />
    </div>
  );
}
