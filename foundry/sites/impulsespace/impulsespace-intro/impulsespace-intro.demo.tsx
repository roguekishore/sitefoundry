// Sample content lives here (gallery only); the page reuses it. Halyard is made up.
import { ImpulsespaceIntro, type ImpulsespaceIntroProps } from "./impulsespace-intro";

export const introSample: ImpulsespaceIntroProps = {
  text: "We haul freight between orbits. Our tugs pick up a payload where the rocket leaves it and carry it the rest of the way: higher, further, or to a place no launch can reach on its own, on a timetable customers can plan around.",
};

export default function Demo() {
  return <ImpulsespaceIntro {...introSample} className="pb-24" />;
}
