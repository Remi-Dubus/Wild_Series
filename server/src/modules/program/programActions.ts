import programRepository from "./programRepository";

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programsFromDB = await programRepository.readAll();

    res.json(programsFromDB);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);
    const program = await programRepository.read(programId);

    if (program === null) {
      res.sendStatus(404);
    } else {
      res.json(program);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const program = {
      id: Number(req.params.id),
      title: req.body.title as string,
      synopsis: req.body.synopsis as string,
      poster: req.body.poster as string,
      country: req.body.country as string,
      year: req.body.year as number,
    };

    const affectedRows = await programRepository.update(program);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: req.body.year,
    };

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);

    await programRepository.delete(programId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
// Export it to import it somewhere else

export default { browse, read, edit, add, destroy };
