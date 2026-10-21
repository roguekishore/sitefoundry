// The Vekta Advisory landing page (recreating daqconsulting.com), built only from this site's
// blocks with their demo content. Dark is the faithful mode. One fixed backdrop sits behind
// everything: the transparent hero, manifesto and footer show it, the solid core and
// capabilities sections cover it. The header is fixed; Lenis smooths the wheel, as on the original.
import { DaqBackdrop } from "@foundry/daq-backdrop";
import { DaqCapabilities } from "@foundry/daq-capabilities";
import { DaqCore } from "@foundry/daq-core";
import { DaqFooter } from "@foundry/daq-footer";
import { DaqHeader } from "@foundry/daq-header";
import { DaqHero } from "@foundry/daq-hero";
import { DaqManifesto } from "@foundry/daq-manifesto";
import { DaqSmoothScroll } from "@foundry/daq-smooth-scroll";
import { capabilitiesSample } from "./daq-capabilities/daq-capabilities.demo";
import { coreSample } from "./daq-core/daq-core.demo";
import { footerSample } from "./daq-footer/daq-footer.demo";
import { headerSample } from "./daq-header/daq-header.demo";
import { heroSample } from "./daq-hero/daq-hero.demo";
import { manifestoSample } from "./daq-manifesto/daq-manifesto.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <DaqSmoothScroll />
      <DaqBackdrop />
      <DaqHeader {...headerSample} />
      <DaqHero {...heroSample} />
      <DaqManifesto {...manifestoSample} />
      <DaqCore {...coreSample} />
      <DaqCapabilities {...capabilitiesSample} />
      <DaqFooter {...footerSample} />
    </div>
  );
}
