// The whole Stoke Space recreation (as "Orrery", a made-up launch company flying a reusable
// rocket called Vireo), built only from this site's blocks with each block's demo content.
// Dark is the faithful mode. The header is sticky, so it stays at the top of this wrapper.
import { StokespaceFooter } from "@foundry/stokespace-footer";
import { StokespaceHeader } from "@foundry/stokespace-header";
import { StokespaceHero } from "@foundry/stokespace-hero";
import { StokespaceNova } from "@foundry/stokespace-nova";
import { StokespaceReusability } from "@foundry/stokespace-reusability";
import { StokespaceWork } from "@foundry/stokespace-work";
import { footerSample } from "./stokespace-footer/stokespace-footer.demo";
import { headerSample } from "./stokespace-header/stokespace-header.demo";
import { heroSample } from "./stokespace-hero/stokespace-hero.demo";
import { novaSample } from "./stokespace-nova/stokespace-nova.demo";
import { reusabilitySample } from "./stokespace-reusability/stokespace-reusability.demo";
import { workSample } from "./stokespace-work/stokespace-work.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <StokespaceHeader {...headerSample} />
      <main>
        <StokespaceHero {...heroSample} />
        <StokespaceReusability {...reusabilitySample} />
        <StokespaceNova {...novaSample} />
        <StokespaceWork {...workSample} />
      </main>
      <StokespaceFooter {...footerSample} />
    </div>
  );
}
