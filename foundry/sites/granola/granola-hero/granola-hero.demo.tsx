import { BotOff, CircleCheck, LockKeyhole, Plug } from "lucide-react";
import { GranolaHero, type GranolaHeroProps } from "./granola-hero";

export const heroSample: GranolaHeroProps = {
  badge: { tag: "New", label: "Tidemark on tablets", href: "#tablets" },
  title: "The notebook that listens between calls",
  lead: "Jot the gist, keep the thread.\nNothing extra joins your call.",
  cta: { label: "Get it free", href: "#download" },
  note: { label: "For Mac, Windows, iPhone and Android", icon: <CircleCheck /> },
  features: {
    heading: "Rough jottings, tidied in seconds.",
    rows: [
      {
        icon: <BotOff />,
        text: (
          <>
            Listens through your own speakers, <strong>so nobody new joins the call</strong>
          </>
        ),
      },
      {
        icon: <LockKeyhole />,
        text: (
          <>
            <strong>Yours alone at first</strong>, shareable whenever you say
          </>
        ),
      },
      {
        icon: <Plug />,
        text: (
          <>
            Fits <strong>Huddle, Parley, Ringround</strong> and any calling app you already use.
          </>
        ),
      },
    ],
    emptyRows: 2,
  },
};

export default function Demo() {
  return <GranolaHero {...heroSample} />;
}
