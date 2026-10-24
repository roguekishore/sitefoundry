// The whole Resend recreation (as "Tern", a made-up mail API), built only from this site's
// blocks with each block's demo content. Dark is the faithful mode.
import { ResendBeyond } from "@foundry/resend-beyond";
import { ResendControl } from "@foundry/resend-control";
import { ResendCta } from "@foundry/resend-cta";
import { ResendDeliverability } from "@foundry/resend-deliverability";
import { ResendEditor } from "@foundry/resend-editor";
import { ResendExperience } from "@foundry/resend-experience";
import { ResendFooter } from "@foundry/resend-footer";
import { ResendHeader } from "@foundry/resend-header";
import { ResendHero } from "@foundry/resend-hero";
import { ResendIntegrate } from "@foundry/resend-integrate";
import { ResendLogos } from "@foundry/resend-logos";
import { ResendQuote } from "@foundry/resend-quote";
import { ResendReact } from "@foundry/resend-react";
import { ResendTestimonials } from "@foundry/resend-testimonials";
import { beyondSample } from "./resend-beyond/resend-beyond.demo";
import { controlSample } from "./resend-control/resend-control.demo";
import { ctaSample } from "./resend-cta/resend-cta.demo";
import { deliverabilitySample } from "./resend-deliverability/resend-deliverability.demo";
import { editorSample } from "./resend-editor/resend-editor.demo";
import { experienceSample } from "./resend-experience/resend-experience.demo";
import { footerSample } from "./resend-footer/resend-footer.demo";
import { headerSample } from "./resend-header/resend-header.demo";
import { heroSample } from "./resend-hero/resend-hero.demo";
import { integrateSample } from "./resend-integrate/resend-integrate.demo";
import { logosSample } from "./resend-logos/resend-logos.demo";
import { quoteSample } from "./resend-quote/resend-quote.demo";
import { reactSample } from "./resend-react/resend-react.demo";
import { testimonialsSample } from "./resend-testimonials/resend-testimonials.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <ResendHeader {...headerSample} />
      <main>
        <ResendHero {...heroSample} />
        <ResendLogos {...logosSample} />
        <ResendIntegrate {...integrateSample} />
        <ResendExperience {...experienceSample} />
        <ResendEditor {...editorSample} />
        <ResendBeyond {...beyondSample} />
        <ResendReact {...reactSample} />
        <ResendDeliverability {...deliverabilitySample} />
        <ResendQuote {...quoteSample} />
        <ResendControl {...controlSample} />
        <ResendTestimonials {...testimonialsSample} />
        <ResendCta {...ctaSample} />
      </main>
      <ResendFooter {...footerSample} />
    </div>
  );
}
