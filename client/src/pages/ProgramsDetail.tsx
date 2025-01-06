import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { programsType } from "../assets/lib/definitions";
import ProgramDeleteForm from "../components/ProgramDeleteForm";

export default function ProgramsDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | programsType);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: programsType) => setProgram(data));
  }, [id]);
  return (
    program && (
      <>
        <hgroup>
          <h1>{program.title}</h1>
        </hgroup>
        <img src={program.poster} alt={`poster of ${program.title}`} />
        <p>{program.synopsis}</p>
        <p>{`country: ${program.country}, year: ${program.year}`}</p>
        <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
        <ProgramDeleteForm id={String(program.id)}>Supprimer</ProgramDeleteForm>
      </>
    )
  );
}
