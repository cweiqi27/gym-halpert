import request from "supertest";
import { createServer } from "../utils/server.utils";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const app = createServer();

jest.useRealTimers();
describe("equipment", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    mongoose.disconnect();
    mongoose.connection.close();
  });
  describe("get equipment routes", () => {
    describe("given the equipment does not exist", () => {
      it("should return a 404", async () => {
        const id = "8d111797dbdebe54e035a";
        await request(app).get(`/api/v1/equipments/${id}`).expect(404);
      });
    });
    describe("given the equipment exist", () => {
      it("should return 200", async () => {
        const id = "6458d111797dbdebe54e035a";
        const response = await request(app)
          .get(`/api/v1/equipments/${id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200);
        console.log("BODY: " + response.body);
      });
    });
  });
});
