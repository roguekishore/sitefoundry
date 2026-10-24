// The whole Hermeus recreation, built only from this site's blocks, with each block's demo
// content. Light is the faithful mode. The header sticks inside the first wrapper (hero +
// film) and is pushed away when the Mission band arrives; the hero is pulled up under it.
import { HermeusAnnouncement } from "@foundry/hermeus-announcement";
import { HermeusFilm } from "@foundry/hermeus-film";
import { HermeusFooter } from "@foundry/hermeus-footer";
import { HermeusHeader } from "@foundry/hermeus-header";
import { HermeusHero } from "@foundry/hermeus-hero";
import { HermeusMission } from "@foundry/hermeus-mission";
import { HermeusNewsFeature } from "@foundry/hermeus-news-feature";
import { HermeusNewsGrid } from "@foundry/hermeus-news-grid";
import { HermeusProduct } from "@foundry/hermeus-product";
import { HermeusSmoothScroll } from "@foundry/hermeus-smooth-scroll";
import { announcementSample } from "./hermeus-announcement/hermeus-announcement.demo";
import { filmSample } from "./hermeus-film/hermeus-film.demo";
import { footerSample } from "./hermeus-footer/hermeus-footer.demo";
import { headerSample } from "./hermeus-header/hermeus-header.demo";
import { heroSample } from "./hermeus-hero/hermeus-hero.demo";
import { missionSample } from "./hermeus-mission/hermeus-mission.demo";
import { newsFeatureSample } from "./hermeus-news-feature/hermeus-news-feature.demo";
import { newsGridSample } from "./hermeus-news-grid/hermeus-news-grid.demo";
import { productSample } from "./hermeus-product/hermeus-product.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HermeusSmoothScroll />
      <HermeusAnnouncement {...announcementSample} />
      <div>
        <HermeusHeader {...headerSample} />
        <HermeusHero {...heroSample} className="-mt-[3.625rem] lg:-mt-[5.875rem]" />
        <HermeusFilm {...filmSample} />
      </div>
      <main>
        <HermeusMission {...missionSample} />
        <HermeusProduct {...productSample} />
        <HermeusNewsFeature {...newsFeatureSample} />
        <HermeusNewsGrid {...newsGridSample} />
      </main>
      <HermeusFooter {...footerSample} />
    </div>
  );
}
