// The whole Reflect recreation (as "Nocturne", a made-up night-sky notebook), built only from
// this site's blocks with each block's demo content. Dark is the faithful mode.
import { ReflectAbout } from "@foundry/reflect-about";
import { ReflectAcademy } from "@foundry/reflect-academy";
import { ReflectAi } from "@foundry/reflect-ai";
import { ReflectConnected } from "@foundry/reflect-connected";
import { ReflectCta } from "@foundry/reflect-cta";
import { ReflectFeatures } from "@foundry/reflect-features";
import { ReflectFooter } from "@foundry/reflect-footer";
import { ReflectHeader } from "@foundry/reflect-header";
import { ReflectHero } from "@foundry/reflect-hero";
import { ReflectMigrate } from "@foundry/reflect-migrate";
import { ReflectPricing } from "@foundry/reflect-pricing";
import { ReflectPrivacy } from "@foundry/reflect-privacy";
import { ReflectResearch } from "@foundry/reflect-research";
import { ReflectTestimonials } from "@foundry/reflect-testimonials";
import { aboutSample } from "./reflect-about/reflect-about.demo";
import { academySample } from "./reflect-academy/reflect-academy.demo";
import { aiSample } from "./reflect-ai/reflect-ai.demo";
import { connectedSample } from "./reflect-connected/reflect-connected.demo";
import { ctaSample } from "./reflect-cta/reflect-cta.demo";
import { featuresSample } from "./reflect-features/reflect-features.demo";
import { footerSample } from "./reflect-footer/reflect-footer.demo";
import { headerSample } from "./reflect-header/reflect-header.demo";
import { heroSample } from "./reflect-hero/reflect-hero.demo";
import { migrateSample } from "./reflect-migrate/reflect-migrate.demo";
import { pricingSample } from "./reflect-pricing/reflect-pricing.demo";
import { privacySample } from "./reflect-privacy/reflect-privacy.demo";
import { researchSample } from "./reflect-research/reflect-research.demo";
import { testimonialsSample } from "./reflect-testimonials/reflect-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ReflectHeader {...headerSample} />
      <main>
        <ReflectHero {...heroSample} />
        <ReflectFeatures {...featuresSample} />
        <ReflectAi {...aiSample} />
        <ReflectConnected {...connectedSample} />
        <ReflectResearch {...researchSample} />
        <ReflectPrivacy {...privacySample} />
        <ReflectPricing {...pricingSample} />
        <ReflectMigrate {...migrateSample} />
        <ReflectTestimonials {...testimonialsSample} />
        <ReflectAbout {...aboutSample} />
        <ReflectAcademy {...academySample} />
        <ReflectCta {...ctaSample} />
      </main>
      <ReflectFooter {...footerSample} />
    </div>
  );
}
