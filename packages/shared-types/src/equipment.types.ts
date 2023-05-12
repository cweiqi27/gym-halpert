import type { Document } from "mongoose";

export interface Equipment {
  name: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface EquipmentDocument extends Equipment, Partial<Document> {}
