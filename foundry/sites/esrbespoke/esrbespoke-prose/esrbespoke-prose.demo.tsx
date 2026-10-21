import { EsrbespokeProse, type EsrbespokeProseProps } from "./esrbespoke-prose";

export const storySample: EsrbespokeProseProps = {
  label: "How it started",
  sections: [
    {
      paragraphs: [
        "Marlowe began in 1991 in a two-bay shed behind a timber yard, with one panel beater who would not hand a car back until it was right. Word travelled the slow way, one owner telling another, and within ten years the shed was too small and the cars arriving were getting rarer. Insurers, importers and private collectors came to rely on the same thing: the work was done properly, every time.",
        "In 2008 the move to Quarry Lane gave the business room to grow into a full workshop, with its own booths, jigs and measuring bays. A second generation took over the running of it soon after and brought in new methods, new partners and a plan to be the best-equipped finish workshop in the west.",
        "That plan became the Finish Studio, opened in 2024 for paint, film and detailing on the most demanding cars. Marlowe is still independent and still run by the family that started it, and still does not hand a car back until it is right.",
      ],
    },
  ],
};

export const policySample: EsrbespokeProseProps = {
  label: "Policy",
  spacing: "loose",
  tone: "charcoal",
  sections: [
    {
      heading: "What we collect and why",
      paragraphs: [
        "Thanks for visiting Marlowe Coachworks, a coachwork repair and restoration workshop in Fremantle, Western Australia.",
        "We take your privacy seriously. This page explains what information we collect through this website and what we do with it.",
        "By personal information we mean anything that identifies you or could reasonably be used to. Simply browsing this website does not give us any personal information about you.",
      ],
    },
    {
      heading: "When you contact us",
      paragraphs: [
        "If you send us an enquiry or sign up for news, we keep the details you give us, such as your name, email address and phone number, so that we can reply. We never sell them or pass them on, except where the law requires it.",
      ],
    },
    {
      heading: "Seeing and correcting your information",
      paragraphs: [
        "You can ask to see the personal information we hold about you and ask us to correct it. To protect you, we will check who you are before we share or change anything.",
        "Write to us at the workshop address or email the front desk and we will answer within three working days.",
      ],
    },
    {
      heading: "Keeping it safe",
      paragraphs: [
        "This website is hosted on a secure service, and the few people at Marlowe who can see enquiries are trained to look after them.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "We use a small number of cookies to understand which pages are read. You can turn cookies off in your browser; the site will still work, though some parts may be less convenient.",
      ],
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-16 text-foreground">
      <EsrbespokeProse {...storySample} />
      <EsrbespokeProse {...policySample} />
    </div>
  );
}
