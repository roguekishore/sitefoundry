// Sample content (gallery only).
import { FormenergyAbout, type FormenergyAboutProps } from "./formenergy-about";

export const aboutSample: FormenergyAboutProps = {
  id: "company",
  title: "Who we are",
  text: "We are chemists, millwrights, line workers and grid planners who think long storage is the missing piece of a clean power system. Backed by patient investors and three regional utilities, we spend our days making that piece cheap, plain and sturdy enough to last forty winters.",
  action: { label: "Meet the team", href: "#company" },
};

export default function Demo() {
  return <FormenergyAbout {...aboutSample} />;
}
