module.exports = {
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true
};
