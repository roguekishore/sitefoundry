// Rebuilt from React Bits' src/demo/Animations/CrosshairDemo.jsx: the component with the props its preview uses.
import Crosshair from "./Crosshair"

export default function Demo() {
  return (
    <div className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden">
      <Crosshair color={"#18181b"} targetEffect={"lock"} lineStyle={"solid"} blendMode={"normal"} thickness={1} opacity={0.85} gap={0} fade={0} smoothing={0.35} showCoordinates={true} clickPulse={true} hideCursor={false} />
    </div>
  )
}
