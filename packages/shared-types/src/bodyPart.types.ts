import type { Document } from "mongoose";

export interface BodyPart {
  name: string;
  description?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BodyPartDocument extends BodyPart, Partial<Document> {}
