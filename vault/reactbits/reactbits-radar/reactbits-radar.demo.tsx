// Rebuilt from React Bits' src/demo/Backgrounds/RadarDemo.jsx: the component with the props its preview uses.
import Radar from "./Radar"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Radar color={"#3ef09a"} mode={"sweep"} speed={1} trail={0.35} scale={0.9} ringCount={6} spokeCount={12} ticks={true} targets={6} clutter={0.35} glow={1} tilt={0} centerX={0.5} centerY={0.5} brightness={1} gridOpacity={1} lineWidth={1} grain={0.03} fade={0} opacity={1} mouseInteraction={true} intro={true} lightMode={false} />
    </div>
  )
}
