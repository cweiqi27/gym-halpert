import express from "express";
import routes from "../routes/app.routes";

// these are extracted for testing
export const createServer = () => {
  const app = express();

  app.use(express.json());

  routes(app);

  return app;
};
