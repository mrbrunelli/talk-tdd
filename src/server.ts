import fastify from "fastify";

const server = fastify({ logger: true });

server.post("/shipping", async (request, reply) => {
  return request.body;
});

server.listen("3333", (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server lintening at ${address}`);
});
