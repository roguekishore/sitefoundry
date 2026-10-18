// Rebuilt from React Bits' src/demo/Backgrounds/DotFieldDemo.jsx: the component with the props its preview uses.
import DotField from "./DotField"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <DotField pattern={"grid"} gradientFrom={"#5227FF"} gradientTo={"#FF9FFC"} glowColor={"#ffffff"} gradientAngle={135} dotRadius={1.5} dotSpacing={14} cursorRadius={240} bulgeStrength={0.6} twist={0} glowRadius={160} glowIntensity={0.8} baseOpacity={0.55} waveAmplitude={0} speed={1} sparkle={false} interactive={true} holdToZoom={true} intro={true} lightMode={false} />
    </div>
  )
}
