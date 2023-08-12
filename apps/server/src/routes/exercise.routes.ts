import type { Express } from "express";
import validateResource from "@/middleware/validateResource";
import { createExerciseSchema } from "@/schema/exercise.schema";
import { createExerciseHandler } from "@/controller/exercise.controller";

export const exerciseRoutes = (app: Express) => {
  // create exercise
  app.post(
    "/api/v1/exercises",
    validateResource(createExerciseSchema),
    createExerciseHandler
  );
};
