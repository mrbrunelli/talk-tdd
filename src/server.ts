import { build } from "./app";

const server = build({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.listen("3333", (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server lintening at ${address}`);
});
