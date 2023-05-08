import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createBodyPartSchema } from "../schema/bodyPart.schema";
import { createBodyPartHandler } from "../controller/bodyPart.controller";

export const bodyPartsRoutes = (app: Express) => {
  // create bodyPart
  app.post(
    "/api/body-parts",
    validateResource(createBodyPartSchema),
    createBodyPartHandler
  );
};
