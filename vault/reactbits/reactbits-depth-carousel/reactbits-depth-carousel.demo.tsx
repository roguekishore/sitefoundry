// Rebuilt from React Bits' src/demo/Components/DepthCarouselDemo.jsx: the component with the props its preview uses.
import DepthCarousel from "./DepthCarousel"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <DepthCarousel items={[{ image: "https://picsum.photos/seed/dc-alto/800/1000", alt: "Alto" }, { image: "https://picsum.photos/seed/dc-bay/800/1000", alt: "Bay" }, { image: "https://picsum.photos/seed/dc-coast/800/1000", alt: "Coast" }, { image: "https://picsum.photos/seed/dc-dune/800/1000", alt: "Dune" }, { image: "https://picsum.photos/seed/dc-edge/800/1000", alt: "Edge" }, { image: "https://picsum.photos/seed/dc-fjord/800/1000", alt: "Fjord" }, { image: "https://picsum.photos/seed/dc-glade/800/1000", alt: "Glade" }]} cardWidth={300} cardHeight={380} radius={18} tint={"#05060a"} depth={220} spread={90} tilt={22} tiltDirection={"right"} perspective={1400} visibleCards={4} falloff={0.2} blur={6} duration={700} ease={"power3.out"} autoplay={false} autoplayDelay={3200} loop={true} showControls={true} showIndicators={true} />
    </div>
  )
}
