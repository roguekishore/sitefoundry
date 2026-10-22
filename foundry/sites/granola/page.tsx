// The Tidemark landing page (recreating granola.ai), built only from this site's blocks with their
// demo content. Light is the faithful mode: the logo wall and testimonials carry the dark class
// themselves. The wrapper is `isolate` so the footer can sit pinned underneath the page on desktop
// and be revealed as the last blocks slide up off it.
import { GranolaChat } from "@foundry/granola-chat";
import { GranolaCta } from "@foundry/granola-cta";
import { GranolaFeatures } from "@foundry/granola-features";
import { GranolaFooter } from "@foundry/granola-footer";
import { GranolaHeader } from "@foundry/granola-header";
import { GranolaHero } from "@foundry/granola-hero";
import { GranolaIntegrations } from "@foundry/granola-integrations";
import { GranolaLogos } from "@foundry/granola-logos";
import { GranolaSteps } from "@foundry/granola-steps";
import { GranolaTestimonials } from "@foundry/granola-testimonials";
import { chatSample } from "./granola-chat/granola-chat.demo";
import { ctaSample } from "./granola-cta/granola-cta.demo";
import { featuresSample } from "./granola-features/granola-features.demo";
import { footerSample } from "./granola-footer/granola-footer.demo";
import { headerSample } from "./granola-header/granola-header.demo";
import { heroSample } from "./granola-hero/granola-hero.demo";
import { integrationsSample } from "./granola-integrations/granola-integrations.demo";
import { logosSample } from "./granola-logos/granola-logos.demo";
import { stepsSample } from "./granola-steps/granola-steps.demo";
import { testimonialsSample } from "./granola-testimonials/granola-testimonials.demo";

export default function Page() {
  return (
    <div className="isolate bg-background text-foreground">
      <GranolaHeader {...headerSample} />
      <main className="bg-background">
        <GranolaHero {...heroSample} />
        <GranolaLogos {...logosSample} />
        <GranolaSteps {...stepsSample} />
        <GranolaChat {...chatSample} />
        <GranolaTestimonials {...testimonialsSample} />
        <GranolaFeatures {...featuresSample} />
        <GranolaIntegrations {...integrationsSample} />
        <GranolaCta {...ctaSample} />
      </main>
      <GranolaFooter {...footerSample} />
    </div>
  );
}
