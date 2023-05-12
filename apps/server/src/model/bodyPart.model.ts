import { Schema, model } from "mongoose";
import type { BodyPartDocument } from "shared-types";

const bodyPartSchema = new Schema<BodyPartDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const BodyPart = model<BodyPartDocument>("BodyPart", bodyPartSchema);

export default BodyPart;
