// Sample content lives here (gallery only); other anduril demos reuse it.
import { Compass } from "lucide-react";
import { AndurilWordmark, type AndurilWordmarkProps } from "./anduril-wordmark";

export const wordmarkSample: AndurilWordmarkProps = {
  emblem: <Compass strokeWidth={1.75} />,
  name: "Northwatch",
  href: "#",
};

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-10">
      <AndurilWordmark {...wordmarkSample} />
      <AndurilWordmark {...wordmarkSample} size="lg" />
    </div>
  );
}
