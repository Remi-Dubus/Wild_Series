import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");
    return rows as ProgramType[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM program WHERE id = ?",
      [id],
    );
    return rows[0] as ProgramType;
  }

  async update(program: ProgramType) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE program SET title = ?, synopsis = ?, poster = ?, country = ?, year = ? WHERE id = ?",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.id,
      ],
    );
    return result.affectedRows;
  }

  async create(program: Omit<ProgramType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (title, synopsis, poster, country, year) VALUES (?, ?, ?, ?, ?);",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
      ],
    );
    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM program WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ProgramRepository();
