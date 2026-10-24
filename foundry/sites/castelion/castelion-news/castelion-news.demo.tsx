// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionNewsProps } from "./castelion-news";
import { CastelionNews } from "./castelion-news";

export const newsSample: CastelionNewsProps = {
  title: ["Dispatches"],
  ctaLabel: "All Dispatches",
  ctaHref: "#",
  featured: {
    date: "October 2, 2026",
    title: "Pellworth Starts Full-Rate Skylark Production for the Fleet",
    summary:
      "Pellworth has signed a production order worth up to $180 million to build, test and hand over a first batch of Skylark high-speed vehicles to naval squadrons. Placed through the service's rapid-fielding office, the order follows the forty early units delivered this spring and moves the programme from trial lots to a steady monthly cadence at the Mesa Verde works.",
    href: "#post-1",
    imageLabel: "Poster-style illustration of a pilot's helmet over a dark sea",
  },
  posts: [
    {
      date: "September 9, 2026",
      title: "Navy Picks Pellworth for $74M Skylark Range Extension",
      summary:
        "Pellworth has been awarded a $73,880,410 fixed-price contract to stretch Skylark's range and bring it to early operating status. The award builds on earlier work on a cheap, easy-to-build long-range vehicle and keeps the same production tooling, so the longer-legged variant can come off the existing line without a pause.",
      href: "#post-2",
      imageLabel: "Drawing of vehicles standing on a chequered floor",
    },
    {
      date: "June 30, 2026",
      title: "First Skylark Batch Handed Over Ahead of Schedule",
      summary:
        "Pellworth has delivered its first forty Skylark units, with their transport cases and ground kit, under a $19.6M order for early operating capability. The handover came six weeks early and marks the first time a low-cost high-speed vehicle has reached the fleet straight from a commercial line.",
      href: "#post-3",
      imageLabel: "Poster with vehicles drawn in red and blue stripes",
    },
  ],
  aside: {
    date: "August 21, 2026",
    title: "Pellworth Raises $850M to Grow Its Production Lines",
    summary:
      "Pellworth, a young defence hardware maker working to rebuild conventional deterrence, has raised $850 million in new funding. The money pays for a second assembly hall, doubles Skylark output and funds work on a longer-range family of vehicles and new protective systems for allied forces.",
    href: "#post-4",
    imageLabel: "Bold black letterform poster announcing the funding round",
  },
};

export default function Demo() {
  return <CastelionNews {...newsSample} />;
}
