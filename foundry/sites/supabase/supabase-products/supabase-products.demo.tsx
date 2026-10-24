// Sample content lives here (gallery only); the page reuses it. Tidepool is made up.
import { Boxes, Cable, Database, FolderOpen, KeyRound, Radio, Zap } from "lucide-react";
import { SupabaseProducts, type SupabaseProductsProps } from "./supabase-products";

export const productsSample: SupabaseProductsProps = {
  products: [
    {
      icon: <Database />,
      title: "Managed SQL",
      description: (
        <>
          Each pool runs <strong>its own dedicated SQL database</strong>, the open engine teams have
          trusted for decades.
        </>
      ),
      points: ["Export it any time", "Row rules built in", "Add extensions freely"],
      mediaLabel: "Database illustration",
      wide: true,
      href: "#",
    },
    {
      icon: <KeyRound />,
      title: "Sign-in",
      description: (
        <>
          <strong>Give people accounts and sessions</strong>, with row-level rules deciding what each
          one may read.
        </>
      ),
      mediaLabel: "Sign-in illustration",
      href: "#",
    },
    {
      icon: <Zap />,
      title: "Workers",
      description: (
        <>
          Run your own logic <strong>with no servers to keep alive or resize.</strong>
        </>
      ),
      mediaLabel: "Workers illustration",
      href: "#",
    },
    {
      icon: <FolderOpen />,
      title: "Files",
      description: (
        <>
          <strong>Keep, sort and hand out</strong> big uploads, from clips to photos.
        </>
      ),
      mediaLabel: "Files illustration",
      href: "#",
    },
    {
      icon: <Radio />,
      title: "Live sync",
      description: (
        <>
          <strong>Make shared, multiplayer screens</strong> that update the moment data changes.
        </>
      ),
      mediaLabel: "Live sync illustration",
      href: "#",
    },
    {
      icon: <Boxes />,
      title: "Embeddings",
      description: (
        <>
          Bring the model you like and <strong>store, index and query vectors</strong> next to your rows.
        </>
      ),
      mediaLabel: "Embeddings illustration",
      href: "#",
    },
    {
      icon: <Cable />,
      title: "Instant API",
      description: (
        <>
          Every table gets <strong>a ready-made HTTP API.</strong>
        </>
      ),
      mediaLabel: "API illustration",
      href: "#",
    },
  ],
  summary: (
    <>
      <strong>Take one or take them all.</strong> Each part stands on its own. Together they act as one.
    </>
  ),
};

export default function Demo() {
  return <SupabaseProducts {...productsSample} className="pt-10" />;
}
