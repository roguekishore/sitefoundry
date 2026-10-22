import { institutionsSample } from "../superpower-credentials/superpower-credentials.demo";
import { SuperpowerDoctors, type SuperpowerDoctorsProps } from "./superpower-doctors";

const learn = { label: "Read more", href: "#team" };

export const doctorsSample: SuperpowerDoctorsProps = {
  title: "Our clinicians have spent decades keeping people well",
  institutions: institutionsSample,
  doctors: [
    { name: "Dr Maren Oyelaran, MD", role: "Internist and founder of the Northfield Longevity Clinic", bio: "Runs one of the largest preventive-care practices on the coast, and teaches it.", institution: institutionsSample[0].mark, link: learn },
    { name: "Dr Tobias Wren-Achebe, MD", role: "Board-certified endocrinologist", bio: "Author of 30+ papers on metabolic health and hormone balance.", institution: institutionsSample[1].mark, link: learn },
    { name: "Dr Ilse Marchetti, PhD", role: "Clinical lab scientist, panel design", bio: "Built the panel's marker list and the ranges we read them against.", institution: institutionsSample[3].mark, link: learn },
    { name: "Dr Samuel Okonkwo-Reyes, MD", role: "Cardiologist and sports physician", bio: "Has looked after professional athletes' hearts for twenty years.", institution: institutionsSample[2].mark, link: learn },
    { name: "Dr Hana Lindqvist, MD", role: "Family physician, member care lead", bio: "Leads the clinicians who answer members' questions every day.", institution: institutionsSample[0].mark, link: learn },
    { name: "Dr Aurelio Banerjee, MD", role: "Gastroenterologist", bio: "Specialist in gut health and the tests that read it.", institution: institutionsSample[1].mark, link: learn },
  ],
};

export default function Demo() {
  return <SuperpowerDoctors {...doctorsSample} />;
}
