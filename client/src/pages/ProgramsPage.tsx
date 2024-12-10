import { useEffect, useState } from "react";

import SerieCard from "../components/SerieCard";

import type { programsType } from "../assets/lib/definitions";

export default function ProgramsPage() {
  const [data, setData] = useState<programsType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((series) => setData(series));
  }, []);

  return (
    <>
      {data?.map((e) => (
        <SerieCard key={e.id} serie={e} />
      ))}
    </>
  );
}
