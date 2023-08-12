import type { Express } from "express";
import validateResource from "@/middleware/validateResource";
// import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { getUserSchema } from "@/schema/user.schema";
import { createRoleHandler } from "@/controller/user.controller";

export const userRoutes = (app: Express) => {
  // assign role
  app.patch(
    "/api/v1/users/role",
    validateResource(getUserSchema),
    createRoleHandler
  );
};
