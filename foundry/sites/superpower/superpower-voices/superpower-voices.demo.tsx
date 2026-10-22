// Publications and creators are made up.
import { SuperpowerVoices, type SuperpowerVoicesProps } from "./superpower-voices";

export const voicesSample: SuperpowerVoicesProps = {
  id: "voices",
  title: "Trusted by athletes, physicians and members like you",
  voices: [
    { kind: "media", width: "narrow", handle: "@coachrenata", followers: "318k followers", video: true, mediaLabel: "Video: a coach talking to camera in a gym" },
    { kind: "media", width: "narrow", mediaLabel: "Photo: a sprinter in a Kestrel training top" },
    {
      kind: "media",
      width: "wide",
      caption: "“My check-up said I was fine. My panel said my inflammation wasn't.”",
      source: <span className="tracking-[-0.04em] lowercase">morningpost</span>,
      mediaLabel: "Photo: a member holding a test kit box",
    },
    { kind: "media", width: "narrow", mediaLabel: "Photo: a hand holding a phone with Wren open" },
    { kind: "media", width: "narrow", handle: "@juno.lifts", followers: "212k followers", video: true, mediaLabel: "Video: a creator filming herself at home" },
    {
      kind: "stack",
      top: { mediaLabel: "Photo: a cyclist in a hoodie" },
      quote: { quote: "“Everyone should be able to see what's going on inside them, no referral required.”", source: <span className="font-serif text-[1.25rem]">The Ledger</span> },
    },
    { kind: "media", width: "wide", caption: "“The most useful hour I spent on my health this year.”", source: <span className="italic">Field &amp; Pulse</span>, mediaLabel: "Photo: a member on a morning run" },
    { kind: "media", width: "narrow", handle: "@drkemi", followers: "96k followers", video: true, mediaLabel: "Video: a doctor explaining a result" },
  ],
};

export default function Demo() {
  return <SuperpowerVoices {...voicesSample} />;
}
