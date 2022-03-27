import fastify from "fastify";
import { ShippingHandler } from "./shipping/shipping-handler";

export const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(ShippingHandler, { prefix: "shipping" });

  return app;
};
