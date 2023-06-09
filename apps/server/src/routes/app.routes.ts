import type { Express } from "express";
import { exerciseRoutes } from "./exercise.routes";
import { clerkRoutes } from "./clerk.routes";
import { workoutRoutes } from "./workout.routes";
import { userRoutes } from "./user.routes";
import { equipmentRoutes } from "./equipment.routes";
import { bodyPartRoutes } from "./bodyPart.routes";

const routes = (app: Express) => {
  workoutRoutes(app);
  exerciseRoutes(app);
  clerkRoutes(app);
  userRoutes(app);
  equipmentRoutes(app);
  bodyPartRoutes(app);
};

export default routes;
