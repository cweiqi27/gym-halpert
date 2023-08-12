import type { Request, Response } from "express";
import type { CreateBodyPartInput } from "@/schema/bodyPart.schema";
import { createBodyPart, getBodyPartById } from "@/service/bodyPart.service";
import { isNativeError } from "util/types";

export const createBodyPartHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateBodyPartInput["body"]
  >,
  res: Response
) => {
  try {
    const bodyPart = await createBodyPart(req.body);
    return res.json(bodyPart);
  } catch (e) {
    if (isNativeError(e) && e.message === "11000") {
      return res
        .status(409)
        .send("Request consists of duplicate value on a unique field");
    }
    return res.status(500).send("Internal server error");
  }
};

export const getBodyPartHandler = async (req: Request, res: Response) => {
  try {
    const bodyPart = await getBodyPartById(req.params["id"]);
    return res.json(bodyPart);
  } catch (e) {
    if (isNativeError(e) && e.message === "404") {
      return res.status(404).send("Body part not found");
    }
    return res.status(500).send("Internal server error");
  }
};
