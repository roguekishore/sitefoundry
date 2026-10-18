// Rebuilt from React Bits' src/demo/Backgrounds/WavesDemo.jsx: the component with the props its preview uses.
import Waves from "./Waves"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Waves lineColor={"#ffffff"} accentColor={"#ffffff"} lineStyle={"solid"} spacing={10} lineWidth={1} rotation={0} amplitude={32} scale={1} twist={1} speed={1} variation={0} mouseRadius={175} mouseStrength={1} bounce={0.5} returnDuration={1.4} fade={0} opacity={1} mouseInteraction={true} clickRipple={true} intro={true} lightMode={false} />
    </div>
  )
}
