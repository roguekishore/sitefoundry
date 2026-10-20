import { MessagesSquare } from "lucide-react";
import { TypesomethingV2Wordmark } from "./typesomething-v2-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-muted p-8 text-foreground">
      <TypesomethingV2Wordmark lead="Quiet" tail="page" cursor animated className="text-xl" />
      <TypesomethingV2Wordmark lead="Quiet" tail="page" mark={<MessagesSquare />} className="text-[2.75rem]" />
      <p className="text-[2.75rem] font-light">
        Meet <TypesomethingV2Wordmark lead="Quiet" tail="page" suffix="." />
      </p>
    </div>
  );
}
