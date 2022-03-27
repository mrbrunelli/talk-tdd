import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { CalculateShipping } from "./calculate-shipping";
import { Shipping } from "./shipping";
import {
  ShippingGetCostQueryStringSchema,
  ShippingGetCostQueryStringType,
} from "./shipping-schema";

const shipping = new Shipping(new CalculateShipping());

const ShippingHandler = async (
  fastify: FastifyInstance,
  options: RouteShorthandOptions
) => {
  fastify.get<{ Querystring: ShippingGetCostQueryStringType }>(
    "/cost",
    ShippingGetCostQueryStringSchema,
    async (request) => {
      return shipping.getCost(request.query);
    }
  );
};

export { ShippingHandler };
