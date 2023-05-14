import type { EquipmentDocument } from "shared-types";
import Equipment from "../model/equipment.model";
import mongoose from "mongoose";

export const createEquipment = async (
  input: Omit<EquipmentDocument, "createdAt" | "updatedAt">
) => {
  try {
    const equipment = await Equipment.create(input);
    return equipment;
  } catch (e: any) {
    if (e.code === 11000) throw new Error(e.code);
    throw new Error(e.message);
  }
};

export const getEquipmentById = async (id: string) => {
  try { const equipment = await Equipment.findById(id);
    return equipment;
  } catch (e) {
    if (e instanceof mongoose.Error.CastError) {
      throw new Error("404");
    }
    throw new Error("Internal server error");
  }
};

// export const updateEquipment

// export const deleteEquipment
