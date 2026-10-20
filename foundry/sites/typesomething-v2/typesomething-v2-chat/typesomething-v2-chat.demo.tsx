import type { TypesomethingV2ChatProps } from "./typesomething-v2-chat";
import { TypesomethingV2Chat } from "./typesomething-v2-chat";

export const chatSample: TypesomethingV2ChatProps = {
  messages: [
    { from: "assistant", paragraphs: ["Morning! What should we change today?"] },
    {
      from: "user",
      paragraphs: ["We're starting Sunday brunch next month, 10 till 2. Can it go on the home page? The new menu is in the shared folder."],
    },
    {
      from: "assistant",
      paragraphs: [
        "Here's a draft for the home page banner and a new brunch page:",
        "Sundays just got slower. From the first of next month our kitchen opens for brunch, 10am to 2pm, with seasonal plates, bread from the bakery next door and coffee roasted two streets away. [...]",
        "Booking stays open for groups of up to eight, and walk-ins are always welcome at the bar. The full menu is linked below the banner: [BRUNCH MENU].",
        "I've also added the new hours to the footer and the contact page.",
      ],
    },
    { from: "user", paragraphs: ["Lovely. Can I see it before it goes out?"] },
    { from: "assistant", paragraphs: ["Of course, the preview is ready:"], link: { label: "preview.quietpage.example/brunch", href: "#" } },
  ],
};

export default function Demo() {
  return <TypesomethingV2Chat {...chatSample} />;
}
