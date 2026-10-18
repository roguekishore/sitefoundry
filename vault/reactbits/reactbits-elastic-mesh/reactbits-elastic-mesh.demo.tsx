// Rebuilt from React Bits' src/demo/Animations/ElasticMeshDemo.jsx: the component with the props its preview uses.
import ElasticMesh from "./ElasticMesh"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <ElasticMesh material={"balloon"} color={"#3b5bff"} inflate={1} stiffness={0.5} wobble={0.6} grabRadius={70} stretch={0.5} press={0.5} shadow={0.5} intro={true} text={"Squish"} theme={"light"} />
    </div>
  )
}
