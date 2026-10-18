// Rebuilt from React Bits' src/demo/Animations/CubesDemo.jsx: the component with the props its preview uses.
import Cubes from "./Cubes"

export default function Demo() {
  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
      <Cubes faceColor={"#120f17"} edgeColor={"#ffffff"} rippleColor={"#ffffff"} gridSize={10} gap={0.18} edgeStyle={"solid"} edgeWidth={1} faceOpacity={1} shading={0.6} maxAngle={45} radius={3} perspective={0} speed={1} bounce={0.4} brush={1} rippleSpeed={1} autoAnimate={true} rippleOnClick={true} intro={true} />
    </div>
  )
}
