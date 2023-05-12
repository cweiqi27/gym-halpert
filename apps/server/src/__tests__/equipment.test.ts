import request from "supertest";
import { createServer } from "../utils/server.utils";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import type { EquipmentDocument } from "shared-types";

const app = createServer();

describe("Equipment", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    mongoose.disconnect();
    mongoose.connection.close();
  });
  describe("GET api/v1/equipments", () => {
    describe("Given the equipment does not exist", () => {
      it("should return 404", async () => {
        const id = "8d111797dbdebe54e035a";
        await request(app).get(`/api/v1/equipments/${id}`).expect(404);
      });
    });
    describe("Given the equipment exist", () => {
      it("should return 200", async () => {
        const id = "6458d111797dbdebe54e035a";
        await request(app)
          .get(`/api/v1/equipments/${id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200);
      });
    });
  });

  describe("POST api/v1/equipments", () => {
    describe("Given the input is valid", () => {
      it("should return 201", async () => {
        const equipment: Omit<EquipmentDocument, "createdAt" | "updatedAt"> = {
          name: "Equipment Test",
          description: "Test equipment",
        };

        await request(app)
          .post("/api/v1/equipments")
          .send(equipment)
          .expect(201);
      });
    });
    describe("Given name is not unique", () => {
      it("should return 409", async () => {
        const equipment: Omit<EquipmentDocument, "createdAt" | "updatedAt"> = {
          name: "Equipment Test",
        };
        await request(app)
          .post("/api/v1/equipments")
          .send(equipment)
          .expect(409);
      });
    });
  });
});
