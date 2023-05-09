import type { Request, Response } from "express";
import {
  createEquipment,
  getEquipmentById,
} from "../service/equipment.service";
import type { CreateEquipmentInput } from "../schema/equipment.schema";
import logger from "../utils/logger";
import { isNativeError } from "util/types";
import mongoose, { Mongoose } from "mongoose";

export const createEquipmentHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateEquipmentInput["body"]
  >,
  res: Response
) => {
  try {
    const equipment = await createEquipment(req.body);
    return res.json(equipment);
  } catch (e) {
    return res.status(400).send(e);
  }
};

export const getEquipmentByIdHandler = async (req: Request, res: Response) => {
  try {
    const equipment = await getEquipmentById(req.params["id"]);
    return res.status(200).json(equipment);
  } catch (e) {
    if (isNativeError(e) && e.message === "Equipment not found") {
      return res.status(404).send(e.message);
    }
    return res.status(500).send("Internal server error");
  }
};

// export const updateEquipmentHandler...

// export const deleteEquipmentHandler...
