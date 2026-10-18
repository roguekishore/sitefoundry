// Rebuilt from React Bits' src/demo/Micro/ScrubFieldDemo.jsx: the component with the props its preview uses.
import ScrubField from "./ScrubField"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ScrubField label={"Radius"} suffix={"px"} defaultValue={24} min={0} max={100} step={1} size={"lg"} sensitivity={2} rubberReach={8} returnDuration={300} coarseMultiplier={10} fineMultiplier={0.1} showDelta={true} showDirty={false} showFill={true} accent={"#18181b"} chipColor={"#f6f6f6"} disabled={false} />
    </div>
  )
}
