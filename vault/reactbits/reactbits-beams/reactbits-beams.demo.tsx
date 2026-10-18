// Rebuilt from React Bits' src/demo/Backgrounds/BeamsDemo.jsx: the component with the props its preview uses.
import Beams from "./Beams"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Beams color={"#ffffff"} beamWidth={140} rotation={30} waveLength={233} depth={1} sharpness={0.6} twist={0} fillLight={0.3} glow={0.6} speed={1} brightness={1.6} grain={0.35} variation={0} mouseInteraction={true} mouseStrength={1} fade={0} opacity={1} intro={true} lightMode={false} />
    </div>
  )
}
