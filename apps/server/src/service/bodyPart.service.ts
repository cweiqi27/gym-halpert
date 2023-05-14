import mongoose from "mongoose";
import type { BodyPartDocument } from "shared-types";
import BodyPart from "../model/bodyPart.model";
import Exercise from "../model/exercise.model";

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

export const deleteBodyPart = async (id: string) => {
  try {
    const bodyPart = await BodyPart.findByIdAndDelete(
      id,
      (err: mongoose.Error, bodyPart: BodyPartDocument) => {
        if (err) throw new Error(err.message);
        else {
          Exercise.updateMany(
            { bodyParts: bodyPart.id },
            { $pull: { bodyParts: bodyPart.id } }
          );
        }
      }
    );

    return bodyPart;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
