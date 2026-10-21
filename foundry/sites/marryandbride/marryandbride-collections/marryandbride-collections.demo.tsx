import { MarryandbrideCollections, type MarryandbrideCollectionsProps } from "./marryandbride-collections";

export const collectionsSample: MarryandbrideCollectionsProps = {
  title: "Every collection",
  label: "Collection",
  cards: [
    { title: "Linen Summer", href: "#linen-summer" },
    { title: "First Light", href: "#first-light" },
    { title: "After Dark", href: "#after-dark" },
    { title: "Ten Years On", href: "#ten-years" },
    { title: "Petite", href: "#petite" },
    { title: "The Orchard Edit", href: "#orchard" },
    { title: "Pearl Line", href: "#pearl" },
  ],
};

export default function Demo() {
  return <MarryandbrideCollections {...collectionsSample} />;
}
