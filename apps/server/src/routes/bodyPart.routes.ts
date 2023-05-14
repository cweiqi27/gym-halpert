import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createBodyPartSchema } from "../schema/bodyPart.schema";
import {
  createBodyPartHandler,
  deleteBodyPartHandler,
  getBodyPartByIdHandler,
} from "../controller/bodyPart.controller";

export const bodyPartRoutes = (app: Express) => {
  // create bodyPart
  app.post(
    "/api/v1/body-parts",
    validateResource(createBodyPartSchema),
    createBodyPartHandler
  );

  // get bodyPart by id
  app.get("/api/v1/body-parts/:id", getBodyPartByIdHandler);

  // delete bodyPart by id
  app.delete("/api/v1/body-parts/:id", deleteBodyPartHandler);
};
