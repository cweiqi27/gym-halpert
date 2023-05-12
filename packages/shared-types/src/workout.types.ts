import type { GameDocument } from "./game.types";
import { UserDocument } from "./user.types";
import type { Document } from "mongoose";

export const WorkoutTypeArr = ["BODYWEIGHT", "WEIGHTED", "ANY"] as const;
export type WorkoutType = (typeof WorkoutTypeArr)[number];

export interface Workout {
  games?: GameDocument["_id"][];
  type: WorkoutType;
  duration?: number;
  notes?: string;
  user: UserDocument["_id"];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutDocument extends Workout, Partial<Document> {}
