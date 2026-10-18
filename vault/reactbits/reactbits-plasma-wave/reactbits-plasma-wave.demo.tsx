// Rebuilt from React Bits' src/demo/Backgrounds/PlasmaWaveDemo.jsx: the component with the props its preview uses.
import PlasmaWave from "./PlasmaWave"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <PlasmaWave colors={["#A855F7","#06B6D4"]} speed={1} speed1={0.05} speed2={0.05} dir2={1} bend1={1} bend2={0.5} thickness={0.3} glow={1} focalLength={1.25} rotationDeg={0} brightness={1} core={0.6} grain={0.03} fade={0} opacity={1} quality={1} mouseInteraction={true} intro={true} lightMode={false} />
    </div>
  )
}
