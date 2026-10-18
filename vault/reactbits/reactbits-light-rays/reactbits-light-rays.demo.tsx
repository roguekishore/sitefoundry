// Rebuilt from React Bits' src/demo/Backgrounds/LightRaysDemo.jsx: the component with the props its preview uses.
import LightRays from "./LightRays"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <LightRays raysOrigin={"top-center"} raysColor={"#ffffff"} raysSpeed={1} lightSpread={0.5} rayLength={3} rayDensity={1} tilt={0} raySharpness={0.35} glow={0.6} haze={0.25} atmosphere={1} intensity={1} fadeDistance={1} saturation={1} mouseInfluence={0.1} noiseAmount={0} distortion={0} pulsating={false} followMouse={true} cursorShadow={true} clickPulse={true} intro={true} lightMode={false} />
    </div>
  )
}
