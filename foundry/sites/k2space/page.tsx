// The whole K2 Space recreation (as the fictional "Hecto Orbital", a builder of heavy satellite
// buses), built only from this site's blocks with each block's demo content. Dark is the
// faithful mode; the header floats over the window-tall hero and fades out on the first scroll.
import { K2spaceCloser } from "@foundry/k2space-closer";
import { K2spaceFooter } from "@foundry/k2space-footer";
import { K2spaceHeader } from "@foundry/k2space-header";
import { K2spaceHero } from "@foundry/k2space-hero";
import { K2spaceIntro } from "@foundry/k2space-intro";
import { K2spaceList } from "@foundry/k2space-list";
import { K2spaceNews } from "@foundry/k2space-news";
import { K2spaceOrbits } from "@foundry/k2space-orbits";
import { K2spaceQuote } from "@foundry/k2space-quote";
import { K2spaceShowcase } from "@foundry/k2space-showcase";
import { K2spaceSlider } from "@foundry/k2space-slider";
import { K2spaceSmoothScroll } from "@foundry/k2space-smooth-scroll";
import { closerSample } from "./k2space-closer/k2space-closer.demo";
import { footerSample } from "./k2space-footer/k2space-footer.demo";
import { headerSample } from "./k2space-header/k2space-header.demo";
import { heroSample } from "./k2space-hero/k2space-hero.demo";
import { introSample } from "./k2space-intro/k2space-intro.demo";
import { listSample } from "./k2space-list/k2space-list.demo";
import { newsSample } from "./k2space-news/k2space-news.demo";
import { orbitsSample } from "./k2space-orbits/k2space-orbits.demo";
import { quoteSample } from "./k2space-quote/k2space-quote.demo";
import { showcaseSample } from "./k2space-showcase/k2space-showcase.demo";
import { sliderSample } from "./k2space-slider/k2space-slider.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <K2spaceSmoothScroll />
      <K2spaceHeader {...headerSample} />
      <K2spaceHero {...heroSample} />
      <K2spaceIntro {...introSample} />
      <K2spaceSlider {...sliderSample} />
      <K2spaceShowcase {...showcaseSample} />
      <K2spaceList {...listSample} />
      <K2spaceOrbits {...orbitsSample} />
      <K2spaceQuote {...quoteSample} />
      <K2spaceNews {...newsSample} />
      <K2spaceCloser {...closerSample} />
      <K2spaceFooter {...footerSample} />
    </div>
  );
}
