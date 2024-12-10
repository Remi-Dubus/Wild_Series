import type { programsType } from "../assets/lib/definitions";

export default function SerieCard({ serie }: { serie: programsType }) {
  return (
    <>
      <img src={serie.poster} alt={`poster of ${serie.title}`} />
      <h1>{serie.title}</h1>
      <p>{serie.synopsis}</p>
      <p>{`country: ${serie.country}, year: ${serie.year}`}</p>
    </>
  );
}
