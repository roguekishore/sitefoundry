import { NewhaloLegal, type NewhaloLegalProps } from "./newhalo-legal";

export const termsSample: NewhaloLegalProps = {
  sections: [
    {
      id: "agreeing",
      title: "Agreeing to these terms",
      parts: [
        {
          heading: "Words we use",
          paragraphs: [
            "These terms cover your use of this website (the “site”). The site is run by Brio Instruments, a fictional company used here as sample content. “Brio”, “we” and “us” all mean that company.",
          ],
        },
        {
          heading: "Using the site",
          paragraphs: [
            "By browsing the site you accept these terms. We may update them from time to time; the date at the top tells you when they last changed.",
            "If you do not agree with them, please stop using the site.",
          ],
        },
      ],
    },
    {
      id: "content",
      title: "What's on the site",
      parts: [{ paragraphs: ["Everything here is for general information. We try to keep it accurate, but specifications can change before the product ships."] }],
    },
    {
      id: "ownership",
      title: "Who owns what",
      parts: [{ paragraphs: ["Text, pictures and the Brio name belong to us. You may share pages, but please don't reuse our material as your own."] }],
    },
    {
      id: "liability",
      title: "Our responsibility",
      parts: [{ paragraphs: ["We are not liable for losses that come from relying on the site's content, as far as the law allows."] }],
    },
  ],
};

export const privacySample: NewhaloLegalProps = {
  sections: [
    {
      id: "overview",
      title: "In short",
      parts: [
        { paragraphs: ["Last updated: 3 March 2026", "This notice explains what personal details Brio collects, why, and what you can ask us to do with them."] },
        { heading: "What this covers", level: 4, paragraphs: ["This site, our newsletter and the companion app. Other sites we link to have their own rules."] },
        {
          heading: "Principles we follow",
          bullets: [
            "We collect only what we need, and say why.",
            "We keep it only as long as it is useful.",
            "We never sell it.",
            "We keep it safe, and tell you quickly if something goes wrong.",
          ],
        },
      ],
    },
    {
      id: "your-data",
      title: "Your details",
      parts: [
        { heading: "Newsletter", level: 4, paragraphs: ["Your email address and the topics you pick, stored with our mailing provider."] },
        { heading: "Site visits", level: 4, paragraphs: ["Anonymous usage numbers that help us improve pages."] },
      ],
    },
    { id: "storage", title: "Where it lives", parts: [{ paragraphs: ["On servers in the EU, with access limited to the people who need it."] }] },
  ],
};

export default function Demo() {
  return <NewhaloLegal {...termsSample} />;
}
