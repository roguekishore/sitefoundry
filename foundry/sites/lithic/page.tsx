// The whole Lithic recreation, built only from this site's blocks, with each block's demo
// content (a made-up card-issuing company, Corvane). Light is the faithful mode; the hero and
// services panels are dark in both.
import { LithicCta } from "@foundry/lithic-cta";
import { LithicDevelopers } from "@foundry/lithic-developers";
import { LithicFooter } from "@foundry/lithic-footer";
import { LithicHeader } from "@foundry/lithic-header";
import { LithicHero } from "@foundry/lithic-hero";
import { LithicLogos } from "@foundry/lithic-logos";
import { LithicPlatform } from "@foundry/lithic-platform";
import { LithicServices } from "@foundry/lithic-services";
import { LithicShortcut } from "@foundry/lithic-shortcut";
import { LithicTestimonials } from "@foundry/lithic-testimonials";
import { LithicTrust } from "@foundry/lithic-trust";
import { ctaSample } from "./lithic-cta/lithic-cta.demo";
import { developersSample } from "./lithic-developers/lithic-developers.demo";
import { footerSample } from "./lithic-footer/lithic-footer.demo";
import { headerSample } from "./lithic-header/lithic-header.demo";
import { heroSample } from "./lithic-hero/lithic-hero.demo";
import { logosSample } from "./lithic-logos/lithic-logos.demo";
import { platformSample } from "./lithic-platform/lithic-platform.demo";
import { servicesSample } from "./lithic-services/lithic-services.demo";
import { shortcutSample } from "./lithic-shortcut/lithic-shortcut.demo";
import { testimonialsSample } from "./lithic-testimonials/lithic-testimonials.demo";
import { trustSample } from "./lithic-trust/lithic-trust.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <LithicHeader {...headerSample} />
      <LithicHero {...heroSample} />
      <LithicLogos {...logosSample} />
      <LithicTrust {...trustSample} />
      <LithicShortcut {...shortcutSample} />
      <LithicPlatform {...platformSample} />
      <LithicServices {...servicesSample} />
      <LithicTestimonials {...testimonialsSample} />
      <LithicDevelopers {...developersSample} />
      <LithicCta {...ctaSample} />
      <LithicFooter {...footerSample} />
    </div>
  );
}
