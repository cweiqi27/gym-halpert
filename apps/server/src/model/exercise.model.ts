import { Schema, model } from "mongoose";
import type { ExerciseDocument } from "shared-types";

const exerciseSchema = new Schema<ExerciseDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  bodyParts: [{ type: Schema.Types.ObjectId, ref: "BodyPart", required: true }],
  equipment: { type: Schema.Types.ObjectId, ref: "Equipment" },
  difficulty: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Exercise = model("Exercise", exerciseSchema);

export default Exercise;
