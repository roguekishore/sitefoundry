// Rebuilt from React Bits' src/demo/Backgrounds/LightTunnelDemo.jsx: the component with the props its preview uses.
import LightTunnel from "./LightTunnel"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <LightTunnel cableColor={"#ffffff"} pulseColor={"#ffffff"} tunnelColor={"#ffffff"} tunnelOpacity={0} speed={0.1} flowDirection={"inward"} pulseSpeed={2} pulseLength={0.28} pulseBlend={0.6} pulseWidth={1} pulseDensity={0.5} cableCount={56} thickness={0.35} rimWidth={0.15} waviness={0.3} sway={0.5} bend={0.4} glow={1} size={1} fadeNear={0.5} fadeFar={2} brightness={1} colorVariance={true} grain={false} mouseInteraction={true} mouseStrength={0.1} clickSurge={true} intro={true} lightMode={false} />
    </div>
  )
}
