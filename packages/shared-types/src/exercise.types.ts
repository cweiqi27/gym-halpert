import type { BodyPartDocument } from "./bodyPart.types";
import type { EquipmentDocument } from "./equipment.types";
import type { Document } from "mongoose";

export interface Exercise {
  name: string;
  description?: string;
  image?: string;
  bodyParts: BodyPartDocument["_id"][];
  equipment?: EquipmentDocument["_id"];
  difficulty: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ExerciseDocument extends Partial<Document>, Exercise {}
