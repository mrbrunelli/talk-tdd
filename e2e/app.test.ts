import { FastifyInstance } from "fastify";
import { build } from "../src/app";

describe("App", () => {
  let app: FastifyInstance;

  beforeEach(() => {
    app = build();
  });

  test("should return shipping cost", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/shipping/cost",
      query: {
        distance: "77",
        rate: "0.02",
        weight: "12",
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("18.48");
  });

  test("should return free shipping cost", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/shipping/cost",
      query: {
        distance: "40",
        rate: "0.02",
        weight: "5",
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("0");
  });

  test("should return bad request if query not provided", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/shipping/cost",
    });

    expect(response.statusCode).toBe(400);
  });
});
