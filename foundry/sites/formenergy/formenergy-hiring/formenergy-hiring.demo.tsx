// Sample content (gallery only).
import { FormenergyHiring, type FormenergyHiringProps } from "./formenergy-hiring";

export const hiringSample: FormenergyHiringProps = {
  id: "jobs",
  title: "Come build with us",
  text: "Our crews in Ohio, Oregon and New Mexico are growing fast, and we are looking for steady hands and curious minds of every trade. If you want your work to show up as a calmer, cleaner grid, there is a bench and a hard hat with your name on it.",
  action: { label: "Open roles", href: "#roles" },
};

export default function Demo() {
  return <FormenergyHiring {...hiringSample} />;
}
