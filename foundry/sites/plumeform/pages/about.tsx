// About page (recreating plumeform.com/about): the intro with the person card, the dark
// closing card and the footer.
import { PlumeformAboutIntro } from "@foundry/plumeform-about-intro";
import { PlumeformCta } from "@foundry/plumeform-cta";
import { PlumeformFooter } from "@foundry/plumeform-footer";
import { PlumeformHeader } from "@foundry/plumeform-header";
import { aboutIntroSample } from "../plumeform-about-intro/plumeform-about-intro.demo";
import { ctaAboutSample } from "../plumeform-cta/plumeform-cta.demo";
import { footerSample } from "../plumeform-footer/plumeform-footer.demo";
import { headerSample } from "../plumeform-header/plumeform-header.demo";

export default function AboutPage() {
  return (
    <div className="relative bg-background">
      <PlumeformHeader {...headerSample} />
      <PlumeformAboutIntro {...aboutIntroSample} />
      <PlumeformCta {...ctaAboutSample} className="pt-8 lg:pt-10" />
      <PlumeformFooter {...footerSample} />
    </div>
  );
}
