import type { Express } from "express";
import bodyParser from "body-parser";
import { syncWebhookHandler } from "../controller/clerk.controller";

export const clerkRoutes = (app: Express) => {
  // verify webhooks and perform actions
  app.post(
    "/clerk/webhooks",
    bodyParser.raw({ type: "application/json" }),
    syncWebhookHandler
  );
};
