import { NewhaloDownloads, type NewhaloDownloadsProps } from "./newhalo-downloads";

export const downloadsSample: NewhaloDownloadsProps = {
  title: "Grab what you need",
  packs: [
    { title: "Wordmark", caption: "Brio logo files", href: "#logo.zip", buttonLabel: "Get the ZIP" },
    { title: "Product shots", caption: "Lumen One, high resolution", href: "#images.zip", buttonLabel: "Get the ZIP" },
  ],
  images: [
    { href: "#image-1", label: "Download picture 1" },
    { href: "#image-2", label: "Download picture 2" },
    { href: "#image-3", label: "Download picture 3" },
    { href: "#image-4", label: "Download picture 4" },
  ],
};

export default function Demo() {
  return <NewhaloDownloads {...downloadsSample} />;
}
