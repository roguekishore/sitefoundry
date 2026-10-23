import { ZettaJouleMission, type ZettaJouleMissionProps } from "./zetta-joule-mission";

export const missionSample: ZettaJouleMissionProps = {
  label: "The Name Behind the Mission",
  statement: "Forecasts for the middle of this century put global energy demand at one billion times one trillion joules a year, and most of it is heat.",
  cta: { label: "Read Our Story", href: "#" },
  paragraph: "Our name, Hearthgrid, is a promise to be part of the answer: clean, steady heat and power for the plants and cities that need it.",
  overlay: {
    term: "Hearthgrid",
    pronunciation: "\\ ˈhärth-ˌgrid \\",
    definition: "A network of reactors that keeps industrial heat steady, day and night, for decades.",
  },
};

export default function Demo() {
  return <ZettaJouleMission {...missionSample} />;
}
