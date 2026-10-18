// Rebuilt from React Bits' src/demo/Micro/BellToggleDemo.jsx: the component with the props its preview uses.
import BellToggle from "./BellToggle"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <BellToggle offLabel={"Notify me"} onLabel={"You'll be notified"} color={"#18181b"} background={"#f6f6f6"} onColor={"#ffffff"} onBackground={"#18181b"} size={"md"} radius={22} ringAmplitude={17} ringPasses={5} ringDecay={1} ringDuration={820} ringPivot={16} crossfadeMs={200} revealBounce={0} count={0} badge={true} badgeColor={"#ef4444"} waves={true} clapper={false} pressed={false} disabled={false} />
    </div>
  )
}
