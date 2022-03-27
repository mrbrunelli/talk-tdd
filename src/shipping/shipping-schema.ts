import { RouteShorthandOptions } from "fastify";

export type ShippingGetCostQueryStringType = {
  distance: number;
  rate: number;
  weight: number;
};

export const ShippingGetCostQueryStringSchema: RouteShorthandOptions = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        distance: { type: "number" },
        rate: { type: "number" },
        weight: { type: "number" },
      },
      required: ["distance", "rate", "weight"],
    },
  },
};
