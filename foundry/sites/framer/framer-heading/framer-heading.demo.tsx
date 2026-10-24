import { FramerButton } from "@foundry/framer-button";
import { FramerHeading, FramerSectionHead } from "./framer-heading";

export default function Demo() {
  return (
    <div className="space-y-16 bg-background p-8">
      <FramerHeading as="h1" size="title">{"Tessel builds the site\nyour brief was hoping for"}</FramerHeading>
      <FramerSectionHead
        title={"Helpers that hand you the pen,\nnot take it away"}
        actions={
          <FramerButton href="#" variant="secondary">
            Meet the agent
          </FramerButton>
        }
      />
    </div>
  );
}
