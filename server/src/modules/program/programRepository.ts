import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM PROGRAM");
    return rows as ProgramType[];
  }
}

export default new ProgramRepository();
