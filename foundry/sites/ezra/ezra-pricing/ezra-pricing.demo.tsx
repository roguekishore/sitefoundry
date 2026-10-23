import { EzraPricing, type EzraPricingProps } from "./ezra-pricing";

const book = { label: "Reserve a scan", href: "#" };
const notCovered = { label: "What isn’t covered?", href: "#" };

export const pricingSample: EzraPricingProps = {
  detailsLabel: "Show details",
  action: book,
  groups: [
    {
      label: "Body scans",
      plans: [
        {
          title: "Core MRI",
          description:
            "Looks for early signs of hundreds of conditions, including cancers of the brain, thyroid, liver, kidneys, pancreas, spleen, bladder and reproductive organs.",
          price: "$1,050",
          priceNote: "*$940 for Alder members.",
          action: book,
          time: { label: "Time:", value: "25 min" },
          includedLabel: "Covered:",
          included: ["Head", "Neck", "Abdomen", "Pelvis"],
          note: "Also looks for signs of past stroke, sinus swelling, fatty liver, fibroids and aortic aneurysm.",
          link: notCovered,
          iconSlots: 1,
        },
        {
          title: "Core MRI + Spine",
          description:
            "Everything in Core, plus the full spine: slipped discs, narrowing of the spinal canal, fractures, curvature, wear and early arthritis.",
          price: "$1,750",
          priceNote: "*$1,560 for Alder members.",
          action: book,
          time: { label: "Time:", value: "50 min" },
          includedLabel: "Covered:",
          included: ["Head", "Neck", "Abdomen", "Pelvis", "Spine"],
          link: notCovered,
          iconSlots: 2,
        },
        {
          title: "Complete MRI with Joint and Brain Review",
          description:
            "Everything in Core + Spine, plus a look at the vessels of the head and neck, early signs of memory-related change and an estimate of brain age.",
          price: "$4,100",
          action: book,
          time: { label: "Time:", value: "two visits of about an hour" },
          includedLabel: "Covered:",
          included: ["Head", "Neck", "Abdomen", "Pelvis", "Spine", "Hips and knees", "Head and neck vessels", "Brain review", "Body composition"],
          note: "Also measures fat and muscle volume and checks hip cartilage and the ligaments of both knees.",
          link: notCovered,
          iconSlots: 3,
        },
      ],
    },
    {
      label: "Low-dose CT",
      plans: [
        {
          title: "Heart CT",
          description:
            "A low-dose scan that measures calcium in the arteries of the heart and gives a score for long-term heart risk. Timed to your heartbeat for a sharp picture.",
          price: "$360",
          action: book,
          time: { label: "Time:", value: "6 min" },
          includedLabel: "Covered:",
          included: ["Coronary calcium score"],
          link: notCovered,
          iconSlots: 1,
        },
        {
          title: "Lung CT",
          description:
            "A low-dose scan that looks for early signs of lung cancer, nodules, emphysema and other airway changes, with a note on heart size.",
          price: "$410",
          action: book,
          time: { label: "Time:", value: "4 min" },
          includedLabel: "Covered:",
          included: ["Lungs and chest"],
          link: notCovered,
          iconSlots: 1,
        },
      ],
    },
  ],
};

export default function Demo() {
  return <EzraPricing {...pricingSample} />;
}
