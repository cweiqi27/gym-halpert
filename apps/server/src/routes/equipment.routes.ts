import type { Express } from "express";
import validateResource from "../middleware/validateResource";
import { createEquipmentSchema } from "../schema/equipment.schema";
import {
  createEquipmentHandler,
  getEquipmentByIdHandler,
} from "../controller/equipment.controller";

export const equipmentRoutes = (app: Express) => {
  // create equipment
  app.post(
    "/api/v1/equipments",
    validateResource(createEquipmentSchema),
    createEquipmentHandler
  );

  // get equipment by id
  app.get("/api/v1/equipments/:id", getEquipmentByIdHandler);
};
