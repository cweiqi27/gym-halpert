import type { Request, Response } from "express";
import { createExercise, getExercise } from "../service/exercise.service";
import type { CreateExerciseInput } from "../schema/exercise.schema";
import { isNativeError } from "util/types";

export const createExerciseHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateExerciseInput["body"]
  >,
  res: Response
) => {
  try {
    const exercise = await createExercise(req.body);
    return res.json(exercise);
  } catch (e) {
    if (isNativeError(e) && e.message === "11000") {
      return res
        .status(409)
        .send("Request consists of duplicate value on a unique field");
    }
    return res.status(500).send("Internal server error");
  }
};

export const getExerciseHandler = async (req: Request, res: Response) => {
  try {
    const exercise = await getExercise(req.params["id"]);
    return res.status(200).json(exercise);
  } catch (e) {
    if (isNativeError(e) && e.message === "404") {
      return res.status(404).send("Exercise not found");
    }
    return res.status(500).send("Internal server error");
  }
};
