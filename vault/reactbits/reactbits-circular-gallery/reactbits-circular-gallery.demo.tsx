// Rebuilt from React Bits' src/demo/Components/CircularGalleryDemo.jsx: the component with the props its preview uses.
import CircularGallery from "./CircularGallery"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <CircularGallery items={[{ image: "https://picsum.photos/seed/foundry-day-portrait/900/1200", text: "Pier" }, { image: "https://picsum.photos/seed/foundry-night-landscape/1600/900", text: "Night Field" }, { image: "https://picsum.photos/seed/foundry-day-sky/1600/900", text: "Daybreak" }, { image: "https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=1200&q=80&auto=format&fit=crop", text: "Clouds" }, { image: "https://picsum.photos/seed/foundry-night-portrait/900/1200", text: "Night Pier" }, { image: "https://picsum.photos/seed/foundry-day-landscape/1600/900", text: "Meadow" }, { image: "https://picsum.photos/seed/foundry-night-sky/1600/900", text: "Afterglow" }]} bend={3} itemSize={1} itemAspect={0.78} gap={0.26} borderRadius={0.05} wave={1} fadeEdges={0.12} shadow={0.25} scrollSpeed={2} scrollEase={0.05} autoScroll={0} snap={true} grayscale={false} textColor={"#71717a"} showTitles={true} openOnClick={true} intro={true} />
    </div>
  )
}
