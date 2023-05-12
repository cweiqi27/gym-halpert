import { Schema, model } from "mongoose";
import type * as sharedTypes from "shared-types";
import { setSchema } from "./set.model";

const gameSchema = new Schema<sharedTypes.GameDocument>({
  exercise: { type: Schema.Types.ObjectId, ref: "Exercise", required: true },
  sets: [setSchema],
  duration: Number,
  workout: { type: Schema.Types.ObjectId, ref: "Workout", required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Game = model<sharedTypes.GameDocument>("Game", gameSchema);

export default Game;
