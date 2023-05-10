import mongoose from "mongoose";
import type { BodyPartDocument } from "../model/bodyPart.model";
import BodyPart from "../model/bodyPart.model";

export const createBodyPart = (
  input: Omit<BodyPartDocument, "createdAt" | "updatedAt">
) => {
  try {
    const bodyPart = BodyPart.create(input);
    return bodyPart;
  } catch (e: any) {
    if (e.code === 11000) throw new Error(e.code);
    throw new Error(e.message);
  }
};

export const getBodyPartById = async (id: string) => {
  try {
    const bodyPart = await BodyPart.findById(id);
    return bodyPart;
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      throw new Error("404");
    }
    throw new Error("Internal server error");
  }
};
