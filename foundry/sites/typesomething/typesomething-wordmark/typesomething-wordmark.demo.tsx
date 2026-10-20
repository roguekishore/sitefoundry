import { BotMessageSquare } from "lucide-react";
import { TypesomethingWordmark } from "./typesomething-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-8 bg-background p-8 text-foreground">
      <TypesomethingWordmark lead="Paper" tail="kite" icon={<BotMessageSquare strokeWidth={2.25} />} typing className="text-2xl" />
      <TypesomethingWordmark lead="Paper" tail="kite" cursor="" className="text-5xl" />
    </div>
  );
}
