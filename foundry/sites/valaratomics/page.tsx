// The whole Valar Atomics recreation (as "Tallgrass Fission", a made-up builder of small
// salt-cooled reactors for farms and mines), built only from this site's blocks with each
// block's demo content. Light is the faithful mode; the black bands are `dark` scopes inside
// the blocks. The main sits above the sticky footer (relative z-10), so the page slides away
// at the end to uncover it.
import { ValaratomicsCore } from "@foundry/valaratomics-core";
import { ValaratomicsFooter } from "@foundry/valaratomics-footer";
import { ValaratomicsHeader } from "@foundry/valaratomics-header";
import { ValaratomicsHero } from "@foundry/valaratomics-hero";
import { ValaratomicsMission } from "@foundry/valaratomics-mission";
import { ValaratomicsModel } from "@foundry/valaratomics-model";
import { ValaratomicsPilot } from "@foundry/valaratomics-pilot";
import { ValaratomicsPress } from "@foundry/valaratomics-press";
import { ValaratomicsProducts } from "@foundry/valaratomics-products";
import { ValaratomicsStatement } from "@foundry/valaratomics-statement";
import { coreSample } from "./valaratomics-core/valaratomics-core.demo";
import { footerSample } from "./valaratomics-footer/valaratomics-footer.demo";
import { headerSample } from "./valaratomics-header/valaratomics-header.demo";
import { heroSample } from "./valaratomics-hero/valaratomics-hero.demo";
import { missionSample } from "./valaratomics-mission/valaratomics-mission.demo";
import { modelSample } from "./valaratomics-model/valaratomics-model.demo";
import { pilotSample } from "./valaratomics-pilot/valaratomics-pilot.demo";
import { pressSample } from "./valaratomics-press/valaratomics-press.demo";
import { productsSample } from "./valaratomics-products/valaratomics-products.demo";
import { statementSample } from "./valaratomics-statement/valaratomics-statement.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <ValaratomicsHeader {...headerSample} />
      <main className="relative z-10 bg-background">
        <ValaratomicsHero {...heroSample} />
        <ValaratomicsStatement {...statementSample} />
        <ValaratomicsModel {...modelSample} />
        <ValaratomicsCore {...coreSample} />
        <ValaratomicsProducts {...productsSample} />
        <ValaratomicsPilot {...pilotSample} />
        <ValaratomicsMission {...missionSample} />
        <ValaratomicsPress {...pressSample} />
      </main>
      <ValaratomicsFooter {...footerSample} />
    </div>
  );
}
