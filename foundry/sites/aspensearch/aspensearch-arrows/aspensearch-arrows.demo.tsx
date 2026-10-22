import { AspensearchArrows } from "./aspensearch-arrows";

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <AspensearchArrows prevLabel="Previous" nextLabel="Next" prevDisabled className="w-[22.5rem] border border-border" />
    </div>
  );
}
