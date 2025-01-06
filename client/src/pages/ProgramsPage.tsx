import { useEffect, useState } from "react";

import SerieCard from "../components/SerieCard";

import { Link } from "react-router-dom";
import type { programsType } from "../assets/lib/definitions";

export default function ProgramsPage() {
  const [data, setData] = useState<programsType[] | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/`)
      .then((response) => response.json())
      .then((series) => setData(series));
  }, []);

  return (
    <>
      {data?.map((e) => (
        <SerieCard key={e.id} serie={e} />
      ))}
      <Link to="/programs/new">Ajouter un programe</Link>
    </>
  );
}
