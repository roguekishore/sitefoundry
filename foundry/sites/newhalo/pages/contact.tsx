// Contact page (recreating halodental.com/contact), built from this site's blocks.
import { NewhaloContactForm } from "@foundry/newhalo-contact-form";
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloShowcase } from "@foundry/newhalo-showcase";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { contactFormSample } from "../newhalo-contact-form/newhalo-contact-form.demo";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { contactHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";
import { eventsSample } from "../newhalo-showcase/newhalo-showcase.demo";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor("Contact")} />
      <NewhaloPageHero {...contactHeroSample} />
      <NewhaloContactForm {...contactFormSample} />
      <NewhaloShowcase {...eventsSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
