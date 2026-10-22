// The whole Radiant Nuclear recreation (as "Corvane Energy", a made-up maker of a small
// transportable fission cell), built only from this site's blocks with each block's demo
// content. Light is the faithful mode.
import { RadiantnuclearFooter } from "@foundry/radiantnuclear-footer";
import { RadiantnuclearHeader } from "@foundry/radiantnuclear-header";
import { RadiantnuclearHero } from "@foundry/radiantnuclear-hero";
import { RadiantnuclearIntro } from "@foundry/radiantnuclear-intro";
import { RadiantnuclearNews } from "@foundry/radiantnuclear-news";
import { RadiantnuclearStatement } from "@foundry/radiantnuclear-statement";
import { RadiantnuclearStories } from "@foundry/radiantnuclear-stories";
import { RadiantnuclearTour } from "@foundry/radiantnuclear-tour";
import { footerSample } from "./radiantnuclear-footer/radiantnuclear-footer.demo";
import { headerSample } from "./radiantnuclear-header/radiantnuclear-header.demo";
import { heroSample } from "./radiantnuclear-hero/radiantnuclear-hero.demo";
import { introSample } from "./radiantnuclear-intro/radiantnuclear-intro.demo";
import { newsSample } from "./radiantnuclear-news/radiantnuclear-news.demo";
import { statementSample } from "./radiantnuclear-statement/radiantnuclear-statement.demo";
import { storiesSample } from "./radiantnuclear-stories/radiantnuclear-stories.demo";
import { tourSample } from "./radiantnuclear-tour/radiantnuclear-tour.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <RadiantnuclearHeader {...headerSample} />
      <RadiantnuclearHero {...heroSample} />
      <RadiantnuclearIntro {...introSample} />
      <RadiantnuclearStories {...storiesSample} />
      <RadiantnuclearTour {...tourSample} />
      <RadiantnuclearStatement {...statementSample} />
      <RadiantnuclearNews {...newsSample} />
      <RadiantnuclearFooter {...footerSample} />
    </div>
  );
}
