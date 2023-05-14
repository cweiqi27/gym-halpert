import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createExerciseSchema } from "../schema/exercise.schema";
import {
  createExerciseHandler,
  getExerciseHandler,
} from "../controller/exercise.controller";

export const exerciseRoutes = (app: Express) => {
  // create exercise
  app.post(
    "/api/v1/exercises",
    validateResource(createExerciseSchema),
    createExerciseHandler
  );

  // get exercise by id
  app.get("/api/v1/exercises/:id", getExerciseHandler);
};
