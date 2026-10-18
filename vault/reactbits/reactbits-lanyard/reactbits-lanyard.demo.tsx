// Rebuilt from React Bits' src/demo/Components/LanyardDemo.jsx: the component with the props its preview uses.
import Lanyard from "./Lanyard"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Lanyard imageFit={"cover"} cardColor={"#ffffff"} orientation={"portrait"} finish={"glossy"} cornerRadius={0.3} size={0.6} anchor={"center"} strapLength={0.5} strapColor={"#111111"} strapWidth={0.65} metal={"silver"} gravity={1} damping={0.5} elasticity={0.5} breeze={0.5} interactive={true} intro={true} />
    </div>
  )
}
