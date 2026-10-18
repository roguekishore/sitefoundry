// Rebuilt from React Bits' src/demo/Backgrounds/MagnetLinesDemo.jsx: the component with the props its preview uses.
import MagnetLines from "./MagnetLines"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <MagnetLines mode={"orbit"} shape={"line"} spacing={30} lineWidth={2} lineHeight={18} baseAngle={-10} radius={200} fade={0.65} edgeFade={0} stretch={0.4} reach={0} scatter={0} inertia={0.35} bounce={0.3} ripple={0.3} rainbow={false} tiltX={0} tiltY={0} clickPulse={true} intro={true} idle={false} />
    </div>
  )
}
