import mongoose from "mongoose";
import { env } from "../schema/env.schema";
import logger from "./logger";

export const connect = async () => {
  const dbUri = env.DATABASE_URI;

  return await mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("[database]: Database connected successfully.");
      return;
    })
    .catch((e) => {
      console.error("[database]: Error connecting to database. \n" + e);
      process.exit(1);
    });
};
