import { ThirdwayProjects, type ThirdwayProjectsProps } from "./thirdway-projects";

export const projectsSample: ThirdwayProjectsProps = {
  viewLabel: "View project",
  projects: [
    {
      name: "Marlow Bank",
      location: "Canary Wharf",
      scope: "CAT B",
      team: "Studio",
      quote: "Hollin found a way to give us a floor that felt like ours while leaving the landlord something they were happy to inherit. Every approval moved quickly and nothing was lost along the way.",
      author: "Edda Rowntree",
      role: "Head of Workplace, Marlow Bank",
      href: "#",
    },
    {
      name: "Russet & Pyke Associates",
      location: "St James",
      scope: "CAT B",
      team: "Boutique",
      quote: "It has been a privilege to work with such a dedicated team across practices and disciplines. The result speaks for itself, and we are already planning the next one.",
      author: "Sol Everard",
      role: "Director, Russet & Pyke",
      href: "#",
    },
    {
      name: "Northfield University London",
      location: "Stratford",
      scope: "CAT B",
      team: "Tailored",
      quote: "A remarkable group of experts. It was a joy, and one of the most exciting projects of my career. We trusted our instincts, and they led us here.",
      author: "Fenna Calloway",
      role: "Director of Partnerships, Northfield",
      href: "#",
    },
    {
      name: "Kell & Dunmore",
      location: "Covent Garden",
      scope: "CAT B",
      team: "Studio",
      quote: "From first walk-through to the last snag, the team behaved like part of ours. People walked in on day one and simply knew where to sit.",
      author: "Bram Ostler",
      role: "Managing Partner, Kell & Dunmore",
      href: "#",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <ThirdwayProjects {...projectsSample} />
      <div className="h-[60svh]" />
    </div>
  );
}
