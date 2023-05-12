import request from "supertest";
import { createServer } from "../utils/server.utils";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import type { BodyPartDocument } from "shared-types";

const app = createServer();

describe("BodyPart", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    mongoose.disconnect();
    mongoose.connection.close();
  });
  describe("GET api/v1/body-parts", () => {
    describe("Given the body part does not exist", () => {
      it("should return 404", async () => {
        const id = "8d111797dbdebe54e035a";
        await request(app).get(`/api/v1/body-parts/${id}`).expect(404);
      });
    });
    describe("Given the body part exist", () => {
      it("should return 200", async () => {
        const id = "6458d111797dbdebe54e035a";
        await request(app)
          .get(`/api/v1/body-parts/${id}`)
          .set("Accept", "application/json")
          .expect(200);
      });
    });
  });

  describe("POST api/v1/body-parts", () => {
    describe("Given the input is valid", () => {
      it("should return 201", async () => {
        const bodyPart: Omit<BodyPartDocument, "createdAt" | "updatedAt"> = {
          name: "BodyPart Test",
          description: "Test bodyPart",
        };

        await request(app)
          .post("/api/v1/body-parts")
          .send(bodyPart)
          .expect(201);
      });
    });
    describe("Given name is not unique", () => {
      it("should return 409", async () => {
        const bodyPart: Omit<BodyPartDocument, "createdAt" | "updatedAt"> = {
          name: "bodyPart Test",
        };
        await request(app)
          .post("/api/v1/body-parts")
          .send(bodyPart)
          .expect(409);
      });
    });
  });
});
