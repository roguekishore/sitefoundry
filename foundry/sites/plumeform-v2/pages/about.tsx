// About page (recreating plumeform.com/about), built from this site's blocks.
import { PlumeformV2AboutIntro } from "@foundry/plumeform-v2-about-intro";
import { PlumeformV2CtaBand } from "@foundry/plumeform-v2-cta-band";
import { PlumeformV2Footer } from "@foundry/plumeform-v2-footer";
import { PlumeformV2Header } from "@foundry/plumeform-v2-header";
import { aboutSample } from "../plumeform-v2-about-intro/plumeform-v2-about-intro.demo";
import { aboutCtaSample } from "../plumeform-v2-cta-band/plumeform-v2-cta-band.demo";
import { footerSample } from "../plumeform-v2-footer/plumeform-v2-footer.demo";
import { headerSample } from "../plumeform-v2-header/plumeform-v2-header.demo";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <PlumeformV2Header {...headerSample} />
      <PlumeformV2AboutIntro {...aboutSample} />
      <PlumeformV2CtaBand {...aboutCtaSample} />
      <PlumeformV2Footer {...footerSample} />
    </div>
  );
}
