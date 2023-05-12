import { Schema, model } from "mongoose";
import type { WorkoutDocument } from "shared-types";
import { WorkoutTypeArr } from "shared-types";

const workoutSchema = new Schema<WorkoutDocument>({
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  type: { type: String, enum: WorkoutTypeArr, required: true },
  duration: { type: Number, default: 0 },
  notes: String,
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Workout = model<WorkoutDocument>("Workout", workoutSchema);

export default Workout;
