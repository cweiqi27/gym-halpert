import type { GameDocument } from "@/model/game.model";
import Game from "@/model/game.model";
import Workout from "@/model/workout.model";
import logger from "@/utils/logger";

export const createGame = async (
  input: Omit<GameDocument, "createdAt" | "updatedAt">
) => {
  try {
    const game = await Game.create(input);
    await game.save();

    const workout = await Workout.findByIdAndUpdate(
      game.workout,
      { $push: { games: game._id } },
      { new: true }
    ).populate("games");

    logger.info("Updated workout: ", workout);

    return game;
  } catch (e: any) {
    throw new Error(e);
  }
};
