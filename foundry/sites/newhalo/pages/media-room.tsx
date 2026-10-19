// Press kit page (recreating halodental.com/media-room), built from this site's blocks.
import { NewhaloDownloads } from "@foundry/newhalo-downloads";
import { NewhaloFooter } from "@foundry/newhalo-footer";
import { NewhaloHeader } from "@foundry/newhalo-header";
import { NewhaloPageHero } from "@foundry/newhalo-page-hero";
import { NewhaloSmoothScroll } from "@foundry/newhalo-smooth-scroll";
import { downloadsSample } from "../newhalo-downloads/newhalo-downloads.demo";
import { footerSample } from "../newhalo-footer/newhalo-footer.demo";
import { headerFor } from "../newhalo-header/newhalo-header.demo";
import { mediaRoomHeroSample } from "../newhalo-page-hero/newhalo-page-hero.demo";

export default function MediaRoomPage() {
  return (
    <div className="bg-background text-foreground">
      <NewhaloSmoothScroll />
      <NewhaloHeader {...headerFor()} />
      <NewhaloPageHero {...mediaRoomHeroSample} />
      <NewhaloDownloads {...downloadsSample} />
      <NewhaloFooter {...footerSample} />
    </div>
  );
}
