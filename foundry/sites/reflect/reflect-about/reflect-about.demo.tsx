import type { ReflectAboutProps } from "./reflect-about";
import { ReflectAbout } from "./reflect-about";

export const aboutSample: ReflectAboutProps = {
  eyebrow: "Who we are",
  title: "A handful of people\nspread over six time zones",
  lead: "We want to help people think more clearly, and we think a very good notebook is the way to do it.",
  action: { label: "How we work", href: "#" },
  mediaLabel: "A dotted globe turning slowly",
};

export default function Demo() {
  return <ReflectAbout {...aboutSample} />;
}
