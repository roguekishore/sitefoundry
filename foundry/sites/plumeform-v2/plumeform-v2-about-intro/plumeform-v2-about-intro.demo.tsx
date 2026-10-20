import { PlumeformV2AboutIntro, type PlumeformV2AboutIntroProps } from "./plumeform-v2-about-intro";

export const aboutSample: PlumeformV2AboutIntroProps = {
  eyebrow: "About Murmur",
  title: "A few words about who makes it.",
  lead: "Murmur is a questionnaire builder. It keeps the questions, how they look and the replies you gather in one place.",
  profile: {
    label: "The maker",
    name: "Rosa Tamberlane",
    role: "Builds Murmur",
    button: { label: "Say hello on Mastodon", href: "#social" },
    paragraphs: [
      "I'm Rosa, and I make Murmur: the builder, the side people answer on, and the tools that help you read the results.",
      "Got a question, spotted something broken, or want to tell me what you're using it for? I'd be glad to hear from you.",
    ],
    link: { label: "Write to me", href: "#contact" },
  },
};

export default function Demo() {
  return <PlumeformV2AboutIntro {...aboutSample} />;
}
