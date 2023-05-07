import type { Express } from "express";
import { exerciseRoutes } from "./exercise.routes";
import { clerkRoutes } from "./clerk.routes";
import { workoutRoutes } from "./workout.routes";
import { userRoutes } from "./user.routes";

const routes = (app: Express) => {
  workoutRoutes(app);
  exerciseRoutes(app);
  clerkRoutes(app);
  userRoutes(app);
};

export default routes;
