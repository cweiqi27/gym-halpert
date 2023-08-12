import type { Request, Response } from "express";
import { createEquipment, getEquipmentById } from "@/service/equipment.service";
import type { CreateEquipmentInput } from "@/schema/equipment.schema";
import { isNativeError } from "util/types";

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
    return res.status(201).json(equipment);
  } catch (e) {
    if (isNativeError(e) && e.message === "11000") {
      return res
        .status(409)
        .send("Request consists of duplicate value on a unique field");
    }
    return res.status(500).send("Internal server error");
  }
};

export const getEquipmentByIdHandler = async (req: Request, res: Response) => {
  try {
    const equipment = await getEquipmentById(req.params["id"]);
    return res.status(200).json(equipment);
  } catch (e) {
    if (isNativeError(e) && e.message === "404") {
      return res.status(404).send("Equipment not found");
    }
    return res.status(500).send("Internal server error");
  }
};

// export const updateEquipmentHandler...

// export const deleteEquipmentHandler...
