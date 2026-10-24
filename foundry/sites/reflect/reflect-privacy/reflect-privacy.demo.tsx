import type { ReflectPrivacyProps } from "./reflect-privacy";
import { ReflectPrivacy } from "./reflect-privacy";

export const privacySample: ReflectPrivacyProps = {
  eyebrow: "Yours alone",
  title: "On your disk",
  lead: "Pages sit in a folder you choose. Anything marked private stays out of the assistant's reach.",
  action: { label: "Read the privacy promise", href: "#" },
  mediaLabel: "A field of glowing scrambled text",
  emblemLabel: "A padlock emblem",
};

export default function Demo() {
  return <ReflectPrivacy {...privacySample} />;
}
