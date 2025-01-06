import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { programsType } from "../assets/lib/definitions";

import ProgramForm from "../components/ProgramForm";

export default function ProgramsEdit() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [program, setProgram] = useState(null as null | programsType);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: programsType) => setProgram(data));
  }, [id]);

  return (
    program && (
      <ProgramForm
        defaultValue={program}
        onSubmit={(programData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/programs/${program.id}`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(programData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/programs/${program.id}`);
            }
          });
        }}
      >
        Modifier
      </ProgramForm>
    )
  );
}
