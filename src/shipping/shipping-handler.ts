import "reflect-metadata";
import { container } from "tsyringe";
import { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Shipping } from "./shipping";
import {
  ShippingGetCostQueryStringSchema,
  ShippingGetCostQueryStringType,
} from "./shipping-schema";

const shipping = container.resolve(Shipping);

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
