// The whole Lathe landing page (a recreation of warp.dev's design), built only from this
// site's blocks with each block's demo content. Light is the faithful mode.
import { WarpCase } from "@foundry/warp-case";
import { WarpConfig } from "@foundry/warp-config";
import { WarpEverywhere } from "@foundry/warp-everywhere";
import { WarpFaq } from "@foundry/warp-faq";
import { WarpFooter } from "@foundry/warp-footer";
import { WarpGovernance } from "@foundry/warp-governance";
import { WarpHeader } from "@foundry/warp-header";
import { WarpHero } from "@foundry/warp-hero";
import { WarpLayers } from "@foundry/warp-layers";
import { WarpLogos } from "@foundry/warp-logos";
import { WarpQuality } from "@foundry/warp-quality";
import { WarpSdlc } from "@foundry/warp-sdlc";
import { WarpStories } from "@foundry/warp-stories";
import { caseSample } from "./warp-case/warp-case.demo";
import { configSample } from "./warp-config/warp-config.demo";
import { everywhereSample } from "./warp-everywhere/warp-everywhere.demo";
import { faqSample } from "./warp-faq/warp-faq.demo";
import { footerSample } from "./warp-footer/warp-footer.demo";
import { governanceSample } from "./warp-governance/warp-governance.demo";
import { headerSample } from "./warp-header/warp-header.demo";
import { heroSample } from "./warp-hero/warp-hero.demo";
import { layersSample } from "./warp-layers/warp-layers.demo";
import { logosSample } from "./warp-logos/warp-logos.demo";
import { qualitySample } from "./warp-quality/warp-quality.demo";
import { sdlcSample } from "./warp-sdlc/warp-sdlc.demo";
import { storiesSample } from "./warp-stories/warp-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <WarpHeader {...headerSample} />
      <WarpHero {...heroSample} />
      <WarpLogos {...logosSample} />
      <WarpConfig {...configSample} />
      <WarpSdlc {...sdlcSample} />
      <WarpQuality {...qualitySample} />
      <WarpCase {...caseSample} />
      <WarpStories {...storiesSample} />
      <WarpLayers {...layersSample} />
      <WarpGovernance {...governanceSample} />
      <WarpEverywhere {...everywhereSample} />
      <WarpFaq {...faqSample} />
      <WarpFooter {...footerSample} />
    </div>
  );
}
