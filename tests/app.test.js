// const request = require("supertest");

// const app = require("../index");

import request from "supertest";
import app from "../index.js";

describe("Express API Tests", () => {

  test("GET / should return API running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "API is running"
    });
  });

  test("Invalid route should return 404", async () => {
    const response = await request(app).get("/invalid-route");

    expect(response.statusCode).toBe(404);
  });

});
