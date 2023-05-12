import { Schema, model } from "mongoose";
import { SetTypeArr } from "shared-types";
import type { SetDocument } from "shared-types";

export const setSchema = new Schema<SetDocument>({
  type: {
    type: String,
    enum: SetTypeArr,
    required: true,
  },
  weight: { type: Number, default: 0 },
  reps: { type: Number, default: 0 },
});

const Set = model<SetDocument>("Set", setSchema);

export default Set;
