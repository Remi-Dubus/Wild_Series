import type { ReactNode } from "react";
import type { programsType } from "../assets/lib/definitions";

interface ProgramsFormProps {
  children: ReactNode;
  defaultValue: programsType;
  onSubmit: (program: programsType) => void;
}

export default function ({
  children,
  defaultValue,
  onSubmit,
}: ProgramsFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = Number(formData.get("year") as string);
        onSubmit({ title, synopsis, poster, country, year });
      }}
    >
      <input type="text" name="title" defaultValue={defaultValue.title} />
      <textarea name="synopsis" defaultValue={defaultValue.synopsis} />
      <input type="text" name="poster" defaultValue={defaultValue.poster} />
      <input type="text" name="country" defaultValue={defaultValue.country} />
      <input
        type="number"
        name="year"
        min="1900"
        max="2099"
        defaultValue={defaultValue.year}
      />
      <button type="submit">{children}</button>
    </form>
  );
}
