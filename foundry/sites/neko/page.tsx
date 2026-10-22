// The whole Neko recreation (as "Ardent Health"), built only from this site's blocks, with each
// block's demo content. Light is the faithful mode.
import { NekoBookBar } from "@foundry/neko-book-bar";
import { NekoFocusTabs } from "@foundry/neko-focus-tabs";
import { NekoFooter } from "@foundry/neko-footer";
import { NekoHeader } from "@foundry/neko-header";
import { NekoHero } from "@foundry/neko-hero";
import { NekoLocations } from "@foundry/neko-locations";
import { NekoMission } from "@foundry/neko-mission";
import { NekoPhotoGrid } from "@foundry/neko-photo-grid";
import { NekoPress } from "@foundry/neko-press";
import { NekoPressLogos } from "@foundry/neko-press-logos";
import { NekoReviews } from "@foundry/neko-reviews";
import { NekoScan } from "@foundry/neko-scan";
import { bookBarSample } from "./neko-book-bar/neko-book-bar.demo";
import { focusTabsSample } from "./neko-focus-tabs/neko-focus-tabs.demo";
import { footerSample } from "./neko-footer/neko-footer.demo";
import { headerSample } from "./neko-header/neko-header.demo";
import { heroSample } from "./neko-hero/neko-hero.demo";
import { locationsSample } from "./neko-locations/neko-locations.demo";
import { missionSample } from "./neko-mission/neko-mission.demo";
import { photoGridSample } from "./neko-photo-grid/neko-photo-grid.demo";
import { pressSample } from "./neko-press/neko-press.demo";
import { pressLogosSample } from "./neko-press-logos/neko-press-logos.demo";
import { reviewsSample } from "./neko-reviews/neko-reviews.demo";
import { scanSample } from "./neko-scan/neko-scan.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <NekoHeader {...headerSample} />
      <NekoHero {...heroSample} />
      <NekoScan {...scanSample} />
      <NekoFocusTabs {...focusTabsSample} />
      <NekoMission {...missionSample} />
      <NekoPhotoGrid {...photoGridSample} />
      <NekoLocations {...locationsSample} />
      <NekoReviews {...reviewsSample} />
      <NekoPress {...pressSample} />
      <NekoPressLogos {...pressLogosSample} className="mt-[calc(var(--section-y)*0.4)]" />
      <NekoFooter {...footerSample} />
      <NekoBookBar {...bookBarSample} />
    </div>
  );
}
