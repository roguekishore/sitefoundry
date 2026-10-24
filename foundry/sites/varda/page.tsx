// The whole Varda recreation, built only from this site's blocks, with each block's demo
// content. Dark is the faithful mode (the navy page). The header is fixed and the hero runs
// under it.
import { VardaAnnouncement } from "@foundry/varda-announcement";
import { VardaBento } from "@foundry/varda-bento";
import { VardaFooter } from "@foundry/varda-footer";
import { VardaHeader } from "@foundry/varda-header";
import { VardaHero } from "@foundry/varda-hero";
import { announcementSample } from "./varda-announcement/varda-announcement.demo";
import { bentoSample } from "./varda-bento/varda-bento.demo";
import { footerSample } from "./varda-footer/varda-footer.demo";
import { headerSample } from "./varda-header/varda-header.demo";
import { heroSample } from "./varda-hero/varda-hero.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <VardaHeader {...headerSample} />
      <main>
        <VardaHero {...heroSample} />
        <VardaAnnouncement {...announcementSample} />
        <VardaBento {...bentoSample} />
      </main>
      <VardaFooter {...footerSample} />
    </div>
  );
}
