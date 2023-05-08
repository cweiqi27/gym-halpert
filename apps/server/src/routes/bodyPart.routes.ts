import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createBodyPartSchema } from "../schema/bodyPart.schema";
import { createBodyPartHandler } from "../controller/bodyPart.controller";

export const bodyPartRoutes = (app: Express) => {
  // create bodyPart
  app.post(
    "/api/body-parts",
    validateResource(createBodyPartSchema),
    createBodyPartHandler
  );
};
