import { useEffect, useState } from "react";
import { StoreyarchitectureSlideBars } from "./storeyarchitecture-slide-bars";

export default function Demo() {
  const [active, setActive] = useState(1);
  useEffect(() => {
    const id = setTimeout(() => setActive((a) => (a + 1) % 5), 4000);
    return () => clearTimeout(id);
  }, [active]);
  return (
    <div className="bg-foreground p-10 text-background">
      <StoreyarchitectureSlideBars count={5} active={active} duration={4000} onSelect={setActive} label="Show slide" className="max-w-[48vw]" />
    </div>
  );
}
