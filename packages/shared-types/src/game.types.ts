import type { ExerciseDocument } from "./exercise.types";
import type { SetDocument } from "./set.types";
import type { WorkoutDocument } from "./workout.types";
import type { Document } from "mongoose";

export interface Game {
  exercise: ExerciseDocument["_id"];
  sets: SetDocument[];
  duration?: number;
  workout: WorkoutDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

export interface GameDocument extends Game, Partial<Document> {}
