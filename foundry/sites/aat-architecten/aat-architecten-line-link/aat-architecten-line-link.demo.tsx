import { AatArchitectenLineLink } from "./aat-architecten-line-link";

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 bg-background p-10 text-foreground">
      <AatArchitectenLineLink href="#work">All work</AatArchitectenLineLink>
      <AatArchitectenLineLink href="#studio">About the studio</AatArchitectenLineLink>
    </div>
  );
}
