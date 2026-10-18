// Rebuilt from React Bits' src/demo/Backgrounds/OrbDemo.jsx: the component with the props its preview uses.
import Orb from "./Orb"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <Orb colors={["#9c43fe","#4cc2e9","#101499"]} hue={0} size={1} glow={1} bleed={1} wobble={1} highlight={1} trail={1} tiltX={0} tiltY={0} speed={1} hoverIntensity={1} backgroundColor={"#000000"} rotateOnHover={true} forceHoverState={false} followCursor={true} clickPulse={true} intro={true} />
    </div>
  )
}
