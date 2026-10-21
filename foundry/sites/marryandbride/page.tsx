// The Wollweise landing page (recreating marryandbride.com), built only from this site's blocks
// with their demo content. Light is the faithful mode. The hero is pinned (sticky) and
// everything after it sits in one raised paper layer that slides up over it, as on the original.
import { MarryandbrideAnnouncement } from "@foundry/marryandbride-announcement";
import { MarryandbrideBestseller } from "@foundry/marryandbride-bestseller";
import { MarryandbrideCategories } from "@foundry/marryandbride-categories";
import { MarryandbrideCollectionFeature } from "@foundry/marryandbride-collection-feature";
import { MarryandbrideCollections } from "@foundry/marryandbride-collections";
import { MarryandbrideFollow } from "@foundry/marryandbride-follow";
import { MarryandbrideFooter } from "@foundry/marryandbride-footer";
import { MarryandbrideHeader } from "@foundry/marryandbride-header";
import { MarryandbrideHero } from "@foundry/marryandbride-hero";
import { MarryandbrideIntro } from "@foundry/marryandbride-intro";
import { MarryandbrideStory } from "@foundry/marryandbride-story";
import { announcementSample } from "./marryandbride-announcement/marryandbride-announcement.demo";
import { bestsellerSample } from "./marryandbride-bestseller/marryandbride-bestseller.demo";
import { categoriesSample } from "./marryandbride-categories/marryandbride-categories.demo";
import { featureReverseSample, featureSample } from "./marryandbride-collection-feature/marryandbride-collection-feature.demo";
import { collectionsSample } from "./marryandbride-collections/marryandbride-collections.demo";
import { followSample } from "./marryandbride-follow/marryandbride-follow.demo";
import { footerSample } from "./marryandbride-footer/marryandbride-footer.demo";
import { headerSample } from "./marryandbride-header/marryandbride-header.demo";
import { heroSample } from "./marryandbride-hero/marryandbride-hero.demo";
import { introSample } from "./marryandbride-intro/marryandbride-intro.demo";
import { storySample } from "./marryandbride-story/marryandbride-story.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <MarryandbrideAnnouncement {...announcementSample} />
      <MarryandbrideHeader {...headerSample} />
      <MarryandbrideHero {...heroSample} />
      <div className="relative z-10 bg-background">
        <MarryandbrideBestseller {...bestsellerSample} />
        <MarryandbrideCategories {...categoriesSample} />
        <MarryandbrideIntro {...introSample} />
        <MarryandbrideCollectionFeature {...featureSample} />
        <MarryandbrideCollectionFeature {...featureReverseSample} />
        <MarryandbrideStory {...storySample} />
        <MarryandbrideCollections {...collectionsSample} />
        <MarryandbrideFollow {...followSample} />
        <MarryandbrideFooter {...footerSample} />
      </div>
    </div>
  );
}
