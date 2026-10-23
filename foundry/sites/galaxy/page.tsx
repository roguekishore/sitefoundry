// The whole Galaxy recreation (as the fictional "Brightrail"), built only from this site's
// blocks with each block's demo content. Dark is the faithful mode.
import { GalaxyFooter } from "@foundry/galaxy-footer";
import { GalaxyFootnote } from "@foundry/galaxy-footnote";
import { GalaxyHeader } from "@foundry/galaxy-header";
import { GalaxyHero } from "@foundry/galaxy-hero";
import { GalaxyIntro } from "@foundry/galaxy-intro";
import { GalaxyJoin } from "@foundry/galaxy-join";
import { GalaxyPostGrid } from "@foundry/galaxy-post-grid";
import { GalaxySplit } from "@foundry/galaxy-split";
import { GalaxyStats } from "@foundry/galaxy-stats";
import { footerSample } from "./galaxy-footer/galaxy-footer.demo";
import { footnoteSample } from "./galaxy-footnote/galaxy-footnote.demo";
import { headerSample } from "./galaxy-header/galaxy-header.demo";
import { heroSample } from "./galaxy-hero/galaxy-hero.demo";
import { enginesSample, onchainSample } from "./galaxy-intro/galaxy-intro.demo";
import { joinSample } from "./galaxy-join/galaxy-join.demo";
import { newsSample, researchSample } from "./galaxy-post-grid/galaxy-post-grid.demo";
import { computeSample, featuredSample, letterSample, moneySample, railsSample } from "./galaxy-split/galaxy-split.demo";
import { statsSample } from "./galaxy-stats/galaxy-stats.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <GalaxyHeader {...headerSample} />
      <GalaxyHero {...heroSample} />
      <GalaxyStats {...statsSample} />
      <GalaxySplit {...letterSample} />
      <GalaxyIntro {...enginesSample} />
      <GalaxySplit {...moneySample} />
      <GalaxySplit {...computeSample} />
      <GalaxySplit {...featuredSample} />
      <GalaxyPostGrid {...researchSample} />
      <GalaxyIntro {...onchainSample} />
      <GalaxySplit {...railsSample} />
      <GalaxyPostGrid {...newsSample} />
      <GalaxyJoin {...joinSample} />
      <GalaxyFootnote {...footnoteSample} />
      <GalaxyFooter {...footerSample} />
    </div>
  );
}
