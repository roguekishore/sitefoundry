// The whole recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "thirdway — full page". Light is the faithful mode: the hero, the
// projects and the footer force themselves into the dark colour scope. The hero's media stays
// pinned while the cream page slides up over it; the projects are a pinned 400svh wipe sequence.
import { ThirdwayAward } from "@foundry/thirdway-award";
import { ThirdwayClients } from "@foundry/thirdway-clients";
import { ThirdwayFooter } from "@foundry/thirdway-footer";
import { ThirdwayHeader } from "@foundry/thirdway-header";
import { ThirdwayHero } from "@foundry/thirdway-hero";
import { ThirdwayJournal } from "@foundry/thirdway-journal";
import { ThirdwayProjects } from "@foundry/thirdway-projects";
import { ThirdwaySmoothScroll } from "@foundry/thirdway-smooth-scroll";
import { ThirdwayTeams } from "@foundry/thirdway-teams";
import { awardSample } from "./thirdway-award/thirdway-award.demo";
import { clientsSample } from "./thirdway-clients/thirdway-clients.demo";
import { footerSample } from "./thirdway-footer/thirdway-footer.demo";
import { headerSample } from "./thirdway-header/thirdway-header.demo";
import { heroSample } from "./thirdway-hero/thirdway-hero.demo";
import { journalSample } from "./thirdway-journal/thirdway-journal.demo";
import { projectsSample } from "./thirdway-projects/thirdway-projects.demo";
import { teamsSample } from "./thirdway-teams/thirdway-teams.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ThirdwaySmoothScroll />
      <ThirdwayHeader {...headerSample} />
      <ThirdwayHero {...heroSample} />
      <ThirdwayTeams {...teamsSample} />
      <ThirdwayAward {...awardSample} />
      <ThirdwayProjects {...projectsSample} />
      <ThirdwayClients {...clientsSample} />
      <ThirdwayJournal {...journalSample} />
      <ThirdwayFooter {...footerSample} />
    </div>
  );
}
