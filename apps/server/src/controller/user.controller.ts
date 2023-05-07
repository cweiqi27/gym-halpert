import type { Request, Response } from "express";
import { createRole } from "../service/user.service";
import { GetUserInput } from "../schema/user.schema";
import { env } from "../schema/env.schema";

export const createRoleHandler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    GetUserInput["body"]
  >,
  res: Response
) => {
  try {
    let user: Awaited<ReturnType<typeof createRole>>;

    if (req.body.userId === env.ADMIN_ID)
      user = await createRole(req.body.userId, "ADMIN");
    else user = await createRole(req.body.userId, "USER");

    return res.json(user.publicMetadata);
  } catch (e: any) {
    return res.status(400).send(e);
  }
};
