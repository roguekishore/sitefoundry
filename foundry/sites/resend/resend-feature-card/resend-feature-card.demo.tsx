import { Layers } from "lucide-react";
import { ResendPlaceholder } from "@foundry/resend-placeholder";
import { ResendFeatureCard } from "./resend-feature-card";

export default function Demo() {
  return (
    <div className="bg-background p-10">
      <ResendFeatureCard
        className="max-w-[37.5rem]"
        visual={<ResendPlaceholder className="absolute top-[4.5rem] left-12 h-[14.25rem] w-[33.4rem]" />}
        icon={<Layers strokeWidth={1.5} />}
        title="Audience lists"
        text="Bring in a list of any size in a minute or two, then see every contact and the fields you keep on them."
        link={{ label: "See how", href: "#lists" }}
      />
    </div>
  );
}
