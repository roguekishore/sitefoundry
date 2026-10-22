// Sample content lives here (gallery only); other apexspace demos reuse it.
import { ApexspaceWordmark, type ApexspaceWordmarkProps } from "./apexspace-wordmark";

export const wordmarkSample: ApexspaceWordmarkProps = {
  name: "Orrery",
  href: "#",
};

export default function Demo() {
  return (
    <div className="flex items-center gap-10 bg-background p-10">
      <ApexspaceWordmark {...wordmarkSample} />
      <ApexspaceWordmark {...wordmarkSample} size="lg" />
    </div>
  );
}
