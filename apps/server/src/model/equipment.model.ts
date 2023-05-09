import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

export interface EquipmentDocument extends Partial<Document> {
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const equipmentSchema = new Schema<EquipmentDocument>({
  name: { type: String, required: true, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const Equipment = model("Equipment", equipmentSchema);

export default Equipment;
