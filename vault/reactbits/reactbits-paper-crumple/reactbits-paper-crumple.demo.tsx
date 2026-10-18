// Rebuilt from React Bits' src/demo/Micro/PaperCrumpleDemo.jsx: the component with the props its preview uses.
import PaperCrumple from "./PaperCrumple"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <PaperCrumple width={400} height={400} sceneHeight={360} imageFit={"contain"} releaseBehavior={"restore"} crumpleAmount={0.85} crumpleDuration={0.55} releaseDuration={0.4} foldCount={6} foldSharpness={0.6} wrinkleDepth={0.65} creaseStrength={0.18} paperColor={"#f4f0e8"} roughness={0.92} paperTexture={0.08} lightIntensity={1.8} lightAngle={-35} shadow={true} shadowOpacity={0.16} draggable={true} dragRotation={10} dragRadius={180} returnToOrigin={true} rotation={0} seed={7} detail={64} disabled={false} src={"https://picsum.photos/seed/foundry-paper/1200/900"} alt="A handwritten poem on paper" resetKey={0} />
    </div>
  )
}
