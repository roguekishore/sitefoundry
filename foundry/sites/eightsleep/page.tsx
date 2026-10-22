// The whole Eight Sleep recreation, built only from this site's blocks, with each block's demo
// content (Tidewell and its Mantle are made up). Light is the faithful mode: the film, night,
// advisors, reviews, closer and footer bands force themselves dark with the dark class.
import { EightsleepAdvisors } from "@foundry/eightsleep-advisors";
import { EightsleepAthletes } from "@foundry/eightsleep-athletes";
import { EightsleepCloser } from "@foundry/eightsleep-closer";
import { EightsleepFilm } from "@foundry/eightsleep-film";
import { EightsleepFooter } from "@foundry/eightsleep-footer";
import { EightsleepGuarantees } from "@foundry/eightsleep-guarantees";
import { EightsleepHeader } from "@foundry/eightsleep-header";
import { EightsleepHero } from "@foundry/eightsleep-hero";
import { EightsleepHubTabs } from "@foundry/eightsleep-hub-tabs";
import { EightsleepLife } from "@foundry/eightsleep-life";
import { EightsleepMoments } from "@foundry/eightsleep-moments";
import { EightsleepNight } from "@foundry/eightsleep-night";
import { EightsleepResearch } from "@foundry/eightsleep-research";
import { EightsleepReviews } from "@foundry/eightsleep-reviews";
import { EightsleepSolo } from "@foundry/eightsleep-solo";
import { EightsleepSystem } from "@foundry/eightsleep-system";
import { advisorsSample } from "./eightsleep-advisors/eightsleep-advisors.demo";
import { athletesSample } from "./eightsleep-athletes/eightsleep-athletes.demo";
import { closerSample } from "./eightsleep-closer/eightsleep-closer.demo";
import { filmSample } from "./eightsleep-film/eightsleep-film.demo";
import { footerSample } from "./eightsleep-footer/eightsleep-footer.demo";
import { guaranteesSample } from "./eightsleep-guarantees/eightsleep-guarantees.demo";
import { headerSample } from "./eightsleep-header/eightsleep-header.demo";
import { heroSample } from "./eightsleep-hero/eightsleep-hero.demo";
import { hubTabsSample } from "./eightsleep-hub-tabs/eightsleep-hub-tabs.demo";
import { lifeSample } from "./eightsleep-life/eightsleep-life.demo";
import { momentsSample } from "./eightsleep-moments/eightsleep-moments.demo";
import { nightSample } from "./eightsleep-night/eightsleep-night.demo";
import { researchSample } from "./eightsleep-research/eightsleep-research.demo";
import { reviewsSample } from "./eightsleep-reviews/eightsleep-reviews.demo";
import { soloSample } from "./eightsleep-solo/eightsleep-solo.demo";
import { systemSample } from "./eightsleep-system/eightsleep-system.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <EightsleepHeader {...headerSample} />
      <main>
        <EightsleepHero {...heroSample} />
        <EightsleepFilm {...filmSample} />
        <EightsleepSystem {...systemSample} />
        <EightsleepHubTabs {...hubTabsSample} />
        <EightsleepLife {...lifeSample} />
        <EightsleepMoments {...momentsSample} />
        <EightsleepNight {...nightSample} />
        <EightsleepSolo {...soloSample} />
        <EightsleepResearch {...researchSample} />
        <EightsleepAdvisors {...advisorsSample} />
        <EightsleepReviews {...reviewsSample} />
        <EightsleepAthletes {...athletesSample} />
        <EightsleepCloser {...closerSample} />
        <EightsleepGuarantees {...guaranteesSample} />
      </main>
      <EightsleepFooter {...footerSample} />
    </div>
  );
}
