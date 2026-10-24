// The whole Railway recreation ("Halyard"), built only from this site's blocks with each
// block's demo content. Dark is the faithful mode. Panels and open sections alternate as on
// the original; the feature rails line up into one track down the left edge on desktops.
import { RailwayCta } from "@foundry/railway-cta";
import { RailwayFeature } from "@foundry/railway-feature";
import { RailwayFooter } from "@foundry/railway-footer";
import { RailwayHeader } from "@foundry/railway-header";
import { RailwayHero } from "@foundry/railway-hero";
import { RailwayStats } from "@foundry/railway-stats";
import { RailwayTestimonials } from "@foundry/railway-testimonials";
import { ctaSample } from "./railway-cta/railway-cta.demo";
import { branchFeature, growFeature, launchFeature, watchFeature, wiringFeature } from "./railway-feature/railway-feature.demo";
import { footerSample } from "./railway-footer/railway-footer.demo";
import { headerSample } from "./railway-header/railway-header.demo";
import { heroSample } from "./railway-hero/railway-hero.demo";
import { statsSample } from "./railway-stats/railway-stats.demo";
import { testimonialsSample } from "./railway-testimonials/railway-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <RailwayHeader {...headerSample} />
      <RailwayHero {...heroSample} />
      <RailwayFeature {...launchFeature} />
      <RailwayFeature {...wiringFeature} />
      <RailwayFeature {...growFeature} />
      <RailwayFeature {...watchFeature} />
      <RailwayFeature {...branchFeature} />
      <RailwayTestimonials {...testimonialsSample} />
      <RailwayStats {...statsSample} />
      <RailwayCta {...ctaSample} />
      <RailwayFooter {...footerSample} />
    </div>
  );
}
