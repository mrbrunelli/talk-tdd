const config = require("./jest.config");

config.testRegex = "test\\.ts$";
console.log("\nRUNNING E2E TESTS\n");

module.exports = config;
