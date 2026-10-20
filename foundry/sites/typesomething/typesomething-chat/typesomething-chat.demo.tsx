import { BotMessageSquare } from "lucide-react";
import { TypesomethingChat, type TypesomethingChatProps } from "./typesomething-chat";

export const chatSample: TypesomethingChatProps = {
  label: "A conversation with Paperkite",
  assistantAvatar: (
    <span className="grid size-full place-items-center bg-secondary text-secondary-foreground [&_svg]:size-1/2">
      <BotMessageSquare strokeWidth={2} />
    </span>
  ),
  messages: [
    { from: "assistant", paragraphs: ["What should we change today?"] },
    {
      from: "user",
      paragraphs: ["Put the autumn menu up: pumpkin loaf, cardamom buns and the rye sourdough. Prices are in the photo I sent this morning."],
    },
    {
      from: "assistant",
      paragraphs: [
        "Here's a draft for the menu page:",
        "Autumn has arrived at the counter. This week we're baking a spiced pumpkin loaf, cardamom buns twisted by hand at six every morning, and our slow rye sourdough, back by popular demand. […]",
        "Everything is on the shelves from Tuesday. Come early for the buns: on Saturdays they're usually gone by ten.",
        "Shall I add the photo of the counter at the top?",
      ],
    },
    { from: "user", paragraphs: ["Yes please. Can I see the page before it goes up?"] },
    { from: "assistant", paragraphs: ["Here's the preview:"], link: { label: "preview.paperkite.site/menu…", href: "#preview" } },
  ],
};

export default function Demo() {
  return <TypesomethingChat {...chatSample} />;
}
