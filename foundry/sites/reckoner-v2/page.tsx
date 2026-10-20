// The whole Caldergrove page (a recreation of reckoner.com's design language), built only from
// this site's blocks with each block's demo content. Light is the faithful mode.
import { ReckonerV2About } from "@foundry/reckoner-v2-about";
import { ReckonerV2Footer } from "@foundry/reckoner-v2-footer";
import { ReckonerV2Header } from "@foundry/reckoner-v2-header";
import { ReckonerV2Hero } from "@foundry/reckoner-v2-hero";
import { ReckonerV2SmoothScroll } from "@foundry/reckoner-v2-smooth-scroll";
import { ReckonerV2Strategies } from "@foundry/reckoner-v2-strategies";
import { aboutSample } from "./reckoner-v2-about/reckoner-v2-about.demo";
import { footerSample } from "./reckoner-v2-footer/reckoner-v2-footer.demo";
import { headerSample } from "./reckoner-v2-header/reckoner-v2-header.demo";
import { heroSample } from "./reckoner-v2-hero/reckoner-v2-hero.demo";
import { strategiesSample } from "./reckoner-v2-strategies/reckoner-v2-strategies.demo";

export default function Page() {
  return (
    <div className="relative bg-background">
      <ReckonerV2SmoothScroll />
      <ReckonerV2Header {...headerSample} />
      <ReckonerV2Hero {...heroSample} />
      <ReckonerV2Strategies {...strategiesSample} />
      <ReckonerV2About {...aboutSample} />
      <ReckonerV2Footer {...footerSample} />
    </div>
  );
}
