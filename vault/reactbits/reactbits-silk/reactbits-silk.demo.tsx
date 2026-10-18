// Rebuilt from React Bits' src/demo/Backgrounds/SilkDemo.jsx: the component with the props its preview uses.
import Silk from "./Silk"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Silk color={"#5227FF"} sheenColor={"#ffffff"} speed={5} scale={1} rotation={0} sheen={0.5} depth={0.5} glow={0.3} ripple={1} wave={1} variation={0} noiseIntensity={1.5} mouseInteraction={true} interactionStrength={1} clickRipple={true} intro={true} fade={0} lightMode={false} />
    </div>
  )
}
