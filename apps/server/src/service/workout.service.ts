import type { WorkoutDocument } from "shared-types";
import Workout from "../model/workout.model";

export const createWorkout = async (
  input: Omit<WorkoutDocument, "createdAt" | "updatedAt">
) => {
  try {
    return await Workout.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};
