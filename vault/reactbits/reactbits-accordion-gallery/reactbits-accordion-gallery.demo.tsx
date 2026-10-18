// Rebuilt from React Bits' src/demo/Components/AccordionGalleryDemo.jsx: the component with the props its preview uses.
import AccordionGallery from "./AccordionGallery"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <AccordionGallery items={[{ image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" }, { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" }, { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" }, { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" }, { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" }]} defaultIndex={2} accentColor={"#ffffff"} overlayColor={"#060010"} textColor={"#ffffff"} grayscale={true} showLabels={true} duration={0.6} ease={"power3.out"} parallax={0.5} tilt={8} stagger={0.06} trigger={"hover"} height={460} gap={10} radius={16} expandRatio={0.52} orientation={"horizontal"} />
    </div>
  )
}
