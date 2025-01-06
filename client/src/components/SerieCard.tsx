import { Link } from "react-router-dom";
import type { programsType } from "../assets/lib/definitions";

export default function SerieCard({ serie }: { serie: programsType }) {
  return (
    <>
      <img src={serie.poster} alt={`poster of ${serie.title}`} />
      <Link to={`/programs/${serie.id}`}>
        <h1>{serie.title}</h1>
      </Link>
      <p>{serie.synopsis}</p>
      <p>{`country: ${serie.country}, year: ${serie.year}`}</p>
    </>
  );
}
