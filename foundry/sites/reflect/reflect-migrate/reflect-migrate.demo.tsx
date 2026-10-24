import type { ReflectMigrateProps } from "./reflect-migrate";
import { ReflectMigrate } from "./reflect-migrate";

export const migrateSample: ReflectMigrateProps = {
  eyebrow: "Nocturne 1",
  title: "Still on the first Nocturne?",
  paragraphs: [
    "The first version keeps getting fixes. Switch when it suits you; we bring over a copy of your pages and leave the old ones untouched.",
    "Everyone with a paid Nocturne 1 plan gets a year of the phone and tablet app on us. Taking it up leaves your current plan as it is.",
  ],
  primaryAction: { label: "Open Nocturne 1", href: "#" },
  secondaryAction: { label: "Get your free year", href: "#" },
};

export default function Demo() {
  return <ReflectMigrate {...migrateSample} />;
}
