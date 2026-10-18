// Rebuilt from React Bits' src/demo/Backgrounds/ScannerDemo.jsx: the component with the props its preview uses.
import Scanner from "./Scanner"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Scanner color1={"#5227FF"} color2={"#FF9FFC"} color3={"#FFFFFF"} speed={0.5} sweepSpeed={0.25} sweepWidth={1.6} trail={0.5} reverse={false} scale={1.5} frequency={2} ripple={0.22} bandDensity={11} lineWidth={1.2} glow={0.6} scanDirection={"vertical"} colorSpread={0.7} brightness={1} vignette={0.3} scanline={true} scanlineIntensity={0.5} grain={true} grainIntensity={0.04} opacity={1} mouseInteraction={true} mouseMode={"repel"} mouseRadius={0.5} mouseStrength={0.7} clickEffect={"ping"} intro={true} lightMode={false} />
    </div>
  )
}
