import { WhoopAthletes, type WhoopAthletesProps } from "./whoop-athletes";

export const athletesSample: WhoopAthletesProps = {
  heading: "Trusted in labs, worn on podiums",
  body: "From first-time runners to world-record holders, people at every level use Kairos to train smarter, rest better and stay well.",
  people: [
    { name: "Talia Okonkwo", role: "Olympic 400m finalist", href: "#" },
    { name: "Bruno Castellan", role: "Two-time rally champion", href: "#" },
    { name: "Mira Halvorsen", role: "Big-wave surfer", href: "#" },
    { name: "Dev Raghunathan", role: "Test-cricket opener", href: "#" },
    { name: "Inès Vautrin", role: "Climbing world-cup winner", href: "#" },
    { name: "Kofi Mensah-Lund", role: "Ultra-trail record holder", href: "#" },
    { name: "Sana Ishikawa", role: "Grand-slam doubles champion", href: "#" },
    { name: "Owen Achterberg", role: "Track cyclist & coach", href: "#" },
  ],
  label: "People who wear Kairos",
};

export default function Demo() {
  return <WhoopAthletes {...athletesSample} />;
}
