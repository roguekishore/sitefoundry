// The Fenwick Yard landing page (recreating rioproperty.co.za), built only from this site's
// blocks with their demo content. Light is the faithful mode. The header is fixed and overlays
// the pinned hero; Lenis smooths the wheel, as on the original.
import { RiopropertyContact } from "@foundry/rioproperty-contact";
import { RiopropertyDeals } from "@foundry/rioproperty-deals";
import { RiopropertyFooter } from "@foundry/rioproperty-footer";
import { RiopropertyFullImage } from "@foundry/rioproperty-full-image";
import { RiopropertyHeader } from "@foundry/rioproperty-header";
import { RiopropertyHero } from "@foundry/rioproperty-hero";
import { RiopropertyLaws } from "@foundry/rioproperty-laws";
import { RiopropertyLogos } from "@foundry/rioproperty-logos";
import { RiopropertyPersonas } from "@foundry/rioproperty-personas";
import { RiopropertySmoothScroll } from "@foundry/rioproperty-smooth-scroll";
import { RiopropertyStatement } from "@foundry/rioproperty-statement";
import { contactSample } from "./rioproperty-contact/rioproperty-contact.demo";
import { dealsSample } from "./rioproperty-deals/rioproperty-deals.demo";
import { footerSample } from "./rioproperty-footer/rioproperty-footer.demo";
import { fullImageSample } from "./rioproperty-full-image/rioproperty-full-image.demo";
import { headerSample } from "./rioproperty-header/rioproperty-header.demo";
import { heroSample } from "./rioproperty-hero/rioproperty-hero.demo";
import { lawsSample } from "./rioproperty-laws/rioproperty-laws.demo";
import { logosSample } from "./rioproperty-logos/rioproperty-logos.demo";
import { personasSample } from "./rioproperty-personas/rioproperty-personas.demo";
import { offMarketSample, statementSample } from "./rioproperty-statement/rioproperty-statement.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <RiopropertySmoothScroll />
      <RiopropertyHeader {...headerSample} />
      <RiopropertyHero {...heroSample} />
      <RiopropertyStatement {...statementSample} />
      <RiopropertyLogos {...logosSample} />
      <RiopropertyPersonas {...personasSample} />
      <RiopropertyDeals {...dealsSample} />
      <RiopropertyLaws {...lawsSample} />
      <RiopropertyFullImage {...fullImageSample} />
      <RiopropertyStatement {...offMarketSample} className="lg:pb-[calc(var(--section-y)*1.6)]" />
      <RiopropertyContact {...contactSample} />
      <RiopropertyFooter {...footerSample} />
    </div>
  );
}
