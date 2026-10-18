// Rebuilt from React Bits' src/demo/Components/DomeGalleryDemo.jsx: the component with the props its preview uses.
import DomeGallery from "./DomeGallery"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <DomeGallery fit={0.8} minRadius={600} maxVerticalRotationDeg={0} segments={34} dragDampening={2} grayscale={true} overlayBlurColor={"#ffffff"} />
    </div>
  )
}
