import fastify from "fastify";
import { ShippingHandler } from "./shipping/shipping-handler";

const server = fastify({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.register(ShippingHandler, { prefix: "shipping" });

server.listen("3333", (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server lintening at ${address}`);
});
