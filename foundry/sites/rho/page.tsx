// The whole Rho recreation, built only from this site's blocks with each block's demo
// content (a fictional company, "Ostra"). Light mode is the faithful one: dark sections carry
// tone="dark", and RhoToneFlow turns the whole window dark or light to match the section in
// the middle of the screen, as the original does.
import { RhoBento } from "@foundry/rho-bento";
import { RhoCta } from "@foundry/rho-cta";
import { RhoFees } from "@foundry/rho-fees";
import { RhoFooter } from "@foundry/rho-footer";
import { RhoHeader } from "@foundry/rho-header";
import { RhoHero } from "@foundry/rho-hero";
import { RhoLogos } from "@foundry/rho-logos";
import { RhoSplit } from "@foundry/rho-split";
import { RhoStories } from "@foundry/rho-stories";
import { RhoTestimonials } from "@foundry/rho-testimonials";
import { RhoToneFlow } from "@foundry/rho-tone-flow";
import { bentoSample } from "./rho-bento/rho-bento.demo";
import { ctaSample } from "./rho-cta/rho-cta.demo";
import { feesSample } from "./rho-fees/rho-fees.demo";
import { footerSample } from "./rho-footer/rho-footer.demo";
import { headerSample } from "./rho-header/rho-header.demo";
import { heroSample } from "./rho-hero/rho-hero.demo";
import { logosSample } from "./rho-logos/rho-logos.demo";
import { growSample, liveSample, safetySample } from "./rho-split/rho-split.demo";
import { storiesSample } from "./rho-stories/rho-stories.demo";
import { testimonialsSample } from "./rho-testimonials/rho-testimonials.demo";

export default function Page() {
  return (
    <RhoToneFlow>
      <RhoHeader {...headerSample} />
      <RhoHero {...heroSample} />
      <RhoLogos {...logosSample} />
      <RhoSplit {...growSample} />
      <RhoStories {...storiesSample} />
      <RhoBento {...bentoSample} />
      <RhoFees {...feesSample} />
      <RhoSplit {...liveSample} />
      <RhoSplit {...safetySample} />
      <RhoTestimonials {...testimonialsSample} />
      <RhoCta {...ctaSample} />
      <RhoFooter {...footerSample} />
    </RhoToneFlow>
  );
}
