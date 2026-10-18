// Rebuilt from React Bits' src/demo/Components/ModelViewerDemo.jsx: the component with the props its preview uses.
import ModelViewer from "./ModelViewer"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <ModelViewer url={"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb"} width="100%" height="100%" environment={"studio"} environmentIntensity={1} exposure={1} intro={"rise"} autoRotate={true} autoRotateSpeed={0.4} autoRotateDelay={2} dragRotate={true} turntable={false} zoom={true} hoverTilt={0.15} float={0.3} shadow={true} shadowOpacity={0.45} fit={0.8} offsetX={0} offsetY={0} startAngle={-35} tilt={12} resetOnDoubleClick={true} />
    </div>
  )
}
