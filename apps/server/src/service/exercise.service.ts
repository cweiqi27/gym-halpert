import type { ExerciseDocument } from "shared-types";
import Exercise from "../model/exercise.model";
import mongoose from "mongoose";

export const createExercise = async (
  input: Omit<ExerciseDocument, "createdAt" | "updatedAt">
) => {
  try {
    return await Exercise.create(input);
  } catch (e: any) {
    if (e.code === 11000) throw new Error(e.code);
    throw new Error(e.message);
  }
};

export const getExercise = async (id: string) => {
  try {
    const exercise = await Exercise.findById(id);
    return exercise;
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      throw new Error("404");
    }
    throw new Error("Internal server error");
  }
};
