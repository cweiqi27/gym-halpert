import express from "express";
import routes from "../routes/app.routes";
import cors from "cors";

// these are extracted for testing
export const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  routes(app);

  return app;
};
