// The whole Hadrian recreation (as "Kestrel Works", a made-up maker of self-running machining
// plants), built only from this site's blocks with each block's demo content. Dark is the
// faithful mode. The hero is sticky inside this wrapper, so it stays pinned behind the page
// while the opaque sections after it slide over.
import { HadrianCareers } from "@foundry/hadrian-careers";
import { HadrianFooter } from "@foundry/hadrian-footer";
import { HadrianHeader } from "@foundry/hadrian-header";
import { HadrianHero } from "@foundry/hadrian-hero";
import { HadrianModel } from "@foundry/hadrian-model";
import { HadrianPlatform } from "@foundry/hadrian-platform";
import { HadrianSmoothScroll } from "@foundry/hadrian-smooth-scroll";
import { careersSample } from "./hadrian-careers/hadrian-careers.demo";
import { footerSample } from "./hadrian-footer/hadrian-footer.demo";
import { headerSample } from "./hadrian-header/hadrian-header.demo";
import { heroSample } from "./hadrian-hero/hadrian-hero.demo";
import { modelSample } from "./hadrian-model/hadrian-model.demo";
import { platformSample } from "./hadrian-platform/hadrian-platform.demo";

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <HadrianSmoothScroll />
      <HadrianHeader {...headerSample} />
      <main>
        <HadrianHero {...heroSample} />
        <HadrianPlatform {...platformSample} />
        <HadrianModel {...modelSample} />
        <HadrianCareers {...careersSample} />
      </main>
      <HadrianFooter {...footerSample} />
    </div>
  );
}
