// The whole Reckoner recreation (as the made-up "Wexmoor Credit Partners"), built only from
// this site's blocks with each block's demo content. Light is the faithful mode: the header
// and hero wrap themselves in the merlot dark world.
import { ReckonerAbout } from "@foundry/reckoner-about";
import { ReckonerFooter } from "@foundry/reckoner-footer";
import { ReckonerHeader } from "@foundry/reckoner-header";
import { ReckonerHero } from "@foundry/reckoner-hero";
import { ReckonerSmoothScroll } from "@foundry/reckoner-smooth-scroll";
import { ReckonerStrategies } from "@foundry/reckoner-strategies";
import { aboutSample } from "./reckoner-about/reckoner-about.demo";
import { footerSample } from "./reckoner-footer/reckoner-footer.demo";
import { headerSample } from "./reckoner-header/reckoner-header.demo";
import { heroSample } from "./reckoner-hero/reckoner-hero.demo";
import { strategiesSample } from "./reckoner-strategies/reckoner-strategies.demo";

export default function Page() {
  return (
    <div className="relative bg-background">
      <ReckonerSmoothScroll />
      <ReckonerHeader {...headerSample} />
      <ReckonerHero {...heroSample} />
      <ReckonerStrategies {...strategiesSample} />
      <ReckonerAbout {...aboutSample} />
      <ReckonerFooter {...footerSample} />
    </div>
  );
}
