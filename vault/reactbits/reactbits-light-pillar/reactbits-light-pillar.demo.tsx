// Rebuilt from React Bits' src/demo/Backgrounds/LightPillarDemo.jsx: the component with the props its preview uses.
import LightPillar from "./LightPillar"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <LightPillar topColor={"#5227FF"} bottomColor={"#FF9FFC"} intensity={1} glowAmount={0.002} bloom={0.5} pillarWidth={3} pillarHeight={0.4} pillarRotation={25} twist={0.4} detail={4} rotationSpeed={0.3} flow={1} noiseIntensity={0.5} interactive={true} clickPulse={true} intro={true} fade={0} quality={"high"} mixBlendMode={"screen"} lightMode={false} />
    </div>
  )
}
