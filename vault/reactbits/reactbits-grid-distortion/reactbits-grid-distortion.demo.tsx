// Rebuilt from React Bits' src/demo/Backgrounds/GridDistortionDemo.jsx: the component with the props its preview uses.
import GridDistortion from "./GridDistortion"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden dark bg-background">
      <GridDistortion imageSrc={"https://picsum.photos/seed/foundry-night-landscape/1600/900"} grid={15} radius={0.18} strength={0.15} relaxation={0.96} mode={"drag"} softness={0} chroma={0} idle={0.3} clickRipple={true} intro={true} />
    </div>
  )
}
