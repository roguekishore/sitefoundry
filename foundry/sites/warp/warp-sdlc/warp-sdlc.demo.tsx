// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpSdlc, type WarpSdlcProps } from "./warp-sdlc";

export const sdlcSample: WarpSdlcProps = {
  id: "lifecycle",
  tag: "Lifecycle",
  status: "online",
  title: "Past build pipelines, to the whole delivery loop",
  lead: "Written as config, made to scale, simple to roll out.",
  mediaLabel: "Setup screen of a new line",
  items: [
    { title: "Sensible defaults, easy to bend", text: "Have a first line running in an afternoon, then grow it as you go." },
    { title: "Lines as config", text: "Repos, crews, models, rights and review gates in one file." },
    { title: "HTTP, CLI, SDK and tools", text: "Made as a platform, not a single app or a chat bot." },
    { title: "Plugs into your tools", text: "Work arrives from chat, tickets and repos; progress goes back where it came from." },
    { title: "Every screen you use", text: "Follow, nudge and take over jobs from the browser, phone, shell or editor." },
    { title: "Scoring, tuning and recall", text: "Each job is graded; watcher agents propose changes to your line's config." },
  ],
};

export default function Demo() {
  return <WarpSdlc {...sdlcSample} />;
}
