// The whole Column recreation, built only from this site's blocks, with each block's demo
// content. Shown in the gallery as "column — full page". Light is the faithful mode; the
// infrastructure band switches itself to the theme's dark teal.
import { ColumnCta } from "@foundry/column-cta";
import { ColumnDevelopers } from "@foundry/column-developers";
import { ColumnFooter } from "@foundry/column-footer";
import { ColumnHeader } from "@foundry/column-header";
import { ColumnHero } from "@foundry/column-hero";
import { ColumnInfrastructure } from "@foundry/column-infrastructure";
import { ColumnProducts } from "@foundry/column-products";
import { ColumnScale } from "@foundry/column-scale";
import { ColumnSegments } from "@foundry/column-segments";
import { ColumnStories } from "@foundry/column-stories";
import { ctaSample } from "./column-cta/column-cta.demo";
import { developersSample } from "./column-developers/column-developers.demo";
import { footerSample } from "./column-footer/column-footer.demo";
import { headerSample } from "./column-header/column-header.demo";
import { heroSample } from "./column-hero/column-hero.demo";
import { infrastructureSample } from "./column-infrastructure/column-infrastructure.demo";
import { productsSample } from "./column-products/column-products.demo";
import { scaleSample } from "./column-scale/column-scale.demo";
import { segmentsSample } from "./column-segments/column-segments.demo";
import { storiesSample } from "./column-stories/column-stories.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ColumnHeader {...headerSample} />
      <ColumnHero {...heroSample} underHeader />
      <ColumnScale {...scaleSample} />
      <ColumnStories {...storiesSample} />
      <ColumnDevelopers {...developersSample} />
      <ColumnInfrastructure {...infrastructureSample} />
      <ColumnSegments {...segmentsSample} />
      <ColumnProducts {...productsSample} />
      <ColumnCta {...ctaSample} />
      <ColumnFooter {...footerSample} />
    </div>
  );
}
