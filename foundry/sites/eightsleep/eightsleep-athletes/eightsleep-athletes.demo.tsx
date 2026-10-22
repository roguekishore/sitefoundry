import { EightsleepAthletes, type EightsleepAthletesProps } from "./eightsleep-athletes";

const mark = (text: string, className: string) => <span className={className}>{text}</span>;

export const athletesSample: EightsleepAthletesProps = {
  title: (
    <>
      Chosen by people who perform.
      <br />
      Recognised year after year.
    </>
  ),
  partners: [
    { name: "Velo Nord cycling", mark: mark("VELO NORD", "font-display text-[22px] font-bold tracking-[0.06em]") },
    { name: "Harbour City FC", mark: mark("Harbour City FC", "font-display text-[19px] font-semibold") },
    { name: "Meridian Racing", mark: mark("meridian", "font-display text-[24px] font-medium tracking-[-0.03em]") },
    { name: "Ironside Tri Series", mark: mark("IRONSIDE TRI", "font-display text-[22px] font-extrabold tracking-[-0.02em]") },
  ],
  athletes: [
    { quote: "“Recovery is the training nobody sees. The Mantle is where mine happens.”", name: "Lena Okafor", role: "Middle-distance runner" },
    { quote: "“Deep sleep is the whole game. Everything else follows from it.”", name: "Mateo Ruiz", role: "Professional padel player" },
    { quote: "“My partner runs cold and I run hot. Now we just split the bed.”", name: "Jonah Weiss", role: "Endurance racing driver" },
    { quote: "“I wake up on race day already feeling sharp.”", name: "Tomas Lindqvist", role: "Driver, Meridian Racing" },
    { quote: "“Across a three-week tour the whole squad slept longer and steadier.”", name: "Velo Nord", role: "Professional cycling team" },
    { quote: "“It is like a recovery coach that works the night shift.”", name: "Aiyana Brooks", role: "Principal dancer" },
  ],
};

export default function Demo() {
  return <EightsleepAthletes {...athletesSample} />;
}
