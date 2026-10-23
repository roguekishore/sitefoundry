import { AtSign, Camera, Music2, Rss, Share2, Video } from "lucide-react";
import { TidewellLogo } from "../functionhealth-header/functionhealth-header.demo";
import { FunctionhealthFooter, type FunctionhealthFooterProps } from "./functionhealth-footer";

export const footerSample: FunctionhealthFooterProps = {
  logo: <TidewellLogo />,
  columns: [
    { title: "Company", links: [{ label: "Join Tidewell", href: "#join" }, { label: "Sign in", href: "#signin" }, { label: "Newsroom", href: "#news" }, { label: "Security", href: "#security" }, { label: "Careers", href: "#careers" }, { label: "Contact us", href: "#contact" }] },
    { title: "Explore", links: [{ label: "What members say", href: "#say" }, { label: "About", href: "#about" }, { label: "MRI & CT", href: "#imaging" }, { label: "Pricing", href: "#pricing" }, { label: "Draw sites", href: "#sites" }] },
    { title: "Community", links: [{ label: "Gift a year", href: "#gift" }, { label: "For employers", href: "#employers" }, { label: "For clinicians", href: "#clinicians" }, { label: "For creators", href: "#creators" }, { label: "Share your story", href: "#story" }] },
  ],
  newsletter: {
    title: ["Subscribe and get 9 health guides for living ", { accent: "a long, well life." }],
    text: "Foundational guides for lifelong health, written with experts and backed by decades of research.",
    placeholder: "Email address",
    submit: "Submit",
    action: "#",
  },
  apps: {
    qrLabel: "Scan to get the app",
    stores: [
      { caption: "Get it on", name: "Android", href: "#android" },
      { caption: "Download on", name: "iPhone", href: "#ios" },
    ],
  },
  socials: [
    { label: "Photos", href: "#s1", icon: <Camera /> },
    { label: "Professional network", href: "#s2", icon: <Share2 /> },
    { label: "Community", href: "#s3", icon: <AtSign /> },
    { label: "Short posts", href: "#s4", icon: <Rss /> },
    { label: "Short video", href: "#s5", icon: <Music2 /> },
    { label: "Video", href: "#s6", icon: <Video /> },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Do Not Sell or Share My Personal Information", href: "#sell" },
    { label: "Privacy Choices", href: "#choices" },
    { label: "Consumer Health Data Privacy Policy", href: "#chd" },
  ],
  disclaimers: [
    "Tidewell’s $420 first-year membership includes access to 140+ lab tests with a nationwide partner lab, in all states but two. Promotions apply to the first year of membership and not to add-on tests or imaging.",
    "Tidewell is a healthcare technology company and not a laboratory or medical provider. All laboratory and medical services are provided by independent third parties who set their own pricing. Although Tidewell may help you reach certain laboratory and medical service providers on your behalf, it does not recommend or refer you to any provider, and you are free to choose your own. Services are not a substitute for medical care, medical advice or a detailed discussion with your primary care physician, and this page is for general information only. All material, information and content that Tidewell provides is strictly for general information purposes. Membership pricing includes technology and service fees charged by Tidewell, as well as access to limited prepaid laboratory services provided by third parties and paid to them on your behalf. Itemization of all fees is available on request.",
    "Tidewell does not provide tax, legal or financial advice. Eligibility for HSA and FSA accounts changes by plan, and contribution limits and rollover rules may change each year, so please check with your plan administrator or a qualified tax advisor. We are not responsible for errors or for changes in regulation.",
    "By providing your phone number you agree to receive text messages from Tidewell. Message and data rates may apply.",
    "Long live the curious.",
  ],
  copyright: "© 2026 Tidewell. All rights reserved.",
};

export default function Demo() {
  return <FunctionhealthFooter {...footerSample} />;
}
