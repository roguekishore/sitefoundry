// Sample content lives here (gallery only); the about page reuses it. Tidewell and its maker are made up.
import { PlumeformAboutIntro, type PlumeformAboutIntroProps } from "./plumeform-about-intro";

export const aboutIntroSample: PlumeformAboutIntroProps = {
  eyebrow: "About Tidewell",
  title: "The small team behind the quizzes.",
  lead: "Tidewell is a quiz maker for teachers. It keeps the questions, the way they look and the marks they bring back in one place.",
  person: {
    eyebrow: "Who makes it",
    name: "Noor Halvorsen",
    role: "Former maths teacher, maker of Tidewell",
    link: { label: "Say hello on Mastodon", href: "#mastodon" },
    paragraphs: [
      "I taught for nine years before building Tidewell. I work on the quiz builder, what students see when they answer, and the tools that turn the marks into something useful.",
      "Spotted a bug, need a feature, or want to tell me how your class uses it? I read every message.",
    ],
    contact: { label: "Write to me", href: "#contact" },
  },
};

export default function Demo() {
  return <PlumeformAboutIntro {...aboutIntroSample} />;
}
