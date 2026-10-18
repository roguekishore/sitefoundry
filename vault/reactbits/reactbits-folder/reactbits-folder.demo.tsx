// Rebuilt from React Bits' src/demo/Components/FolderDemo.jsx: the component with the props its preview uses.
import Folder from "./Folder"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Folder mode={"flap"} variant={"solid"} layout={"spread"} color={"#3d8bff"} paperColor={"#ffffff"} label={"Projects"} tabPosition={"right"} openOn={"click"} size={1.3} frost={0.25} tilt={0.5} speed={1} bounce={0.4} peek={true} intro={true} draggable={true} zoomOnClick={true} items={[{ title: "Brand guidelines" }, { title: "Launch plan" }, { title: "Moodboard" }]} theme={"light"} />
    </div>
  )
}
