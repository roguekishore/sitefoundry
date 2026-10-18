// Rebuilt from React Bits' src/demo/Backgrounds/LineWavesDemo.jsx: the component with the props its preview uses.
import LineWaves from "./LineWaves"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <LineWaves color1={"#ffffff"} color2={"#ffffff"} color3={"#ffffff"} colorCycleSpeed={1} speed={0.3} lineCount={72} lineWidth={1.3} glow={0.6} brightness={1} highlight={1} highlightWidth={1} warpIntensity={1} warpScale={1} rotation={-33} edgeFade={0} enableMouseInteraction={true} mouseInfluence={2} clickRipple={true} intro={true} lightMode={false} opacity={1} />
    </div>
  )
}
