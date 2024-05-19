const jestConfig = require("./jest.config");

module.exports = {
  ...jestConfig,
  testEnvironment: "",
  testRegex: "(/__tests__/.*|(\\.|/)e2e)\\.tsx?$",
  testPathIgnorePatterns: ["/__tests__/.*\\.test\\.tsx?$"],
};
