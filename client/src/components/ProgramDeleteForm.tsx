import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ProgramDeleteFormProps = {
  id: string;
  children: ReactNode;
};

export default function ProgramDeleteForm({
  id,
  children,
}: ProgramDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/programs");
          }
        });
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
}
