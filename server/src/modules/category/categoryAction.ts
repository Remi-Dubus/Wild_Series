import categoryRepository from "./categoryRepository";

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  const parsedId = Number.parseInt(req.params.id);

  const category = categoriesFromDB.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { read, browse };
