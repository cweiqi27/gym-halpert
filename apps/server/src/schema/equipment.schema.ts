import { z } from "zod";

export const createEquipmentSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    description: z.string().optional(),
  }),
});

export type CreateEquipmentInput = z.TypeOf<typeof createEquipmentSchema>;
