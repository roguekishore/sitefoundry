import { StructureengineeringButton } from "./structureengineering-button";

export default function Demo() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 bg-background p-10 text-foreground">
        <StructureengineeringButton href="#about">Read our approach</StructureengineeringButton>
        <StructureengineeringButton href="#work" variant="solid">
          See the job
        </StructureengineeringButton>
      </div>
      <div className="flex flex-wrap items-center gap-6 bg-glow p-10">
        <StructureengineeringButton href="#feature" variant="media">
          Read the case
        </StructureengineeringButton>
      </div>
      <div className="flex flex-wrap items-center gap-6 bg-highlight p-10 text-highlight-foreground">
        <StructureengineeringButton type="submit" variant="submit">
          Send
        </StructureengineeringButton>
      </div>
    </div>
  );
}
