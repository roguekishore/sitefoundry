// Rebuilt from React Bits' src/demo/Backgrounds/AcidSquaresDemo.jsx: the component with the props its preview uses.
import AcidSquares from "./AcidSquares"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <AcidSquares color={"#120f17"} accentColor={"#ff4fb8"} secondaryColor={"#3b6bff"} tileSize={1} gap={0.12} roundness={0.25} softness={0.5} bulge={0.3} rotation={35} gloss={0.6} waves={1} waveScale={1} speed={0.6} shape={"square"} pulse={1} pulseSpeed={0.45} pulseSpacing={1} pulseWidth={1} pulseOrigin={"center"} lighting={"split"} brightness={1} tilt={0.7} zoom={1} grain={0.12} depth={10} fade={0} opacity={1} intro={true} mouseInteraction={true} hoverEffect={"press"} mouseStrength={1} mouseRadius={0.35} pulseOnClick={true} detail={"medium"} lightMode={false} />
    </div>
  )
}
