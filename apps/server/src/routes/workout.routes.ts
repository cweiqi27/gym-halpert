import type { Express } from "express";
import { createWorkoutSchema } from "@/schema/workout.schema";
import { createWorkoutHandler } from "@/controller/workout.controller";
import validateResource from "@/middleware/validateResource";
import { createGameSchema } from "@/schema/game.schema";
import { createGameHandler } from "@/controller/game.controller";

export const workoutRoutes = (app: Express) => {
  // create workout
  app.post(
    "/api/v1/workouts",
    validateResource(createWorkoutSchema),
    createWorkoutHandler
  );

  // create game
  app.post(
    "/api/v1/workouts/games",
    validateResource(createGameSchema),
    createGameHandler
  );

  //create set
  app.post(
    "/api/v1/workouts/games/sets",
    validateResource(createGameSchema),
    createGameHandler
  );
};
