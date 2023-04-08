module.exports = {

    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    // This is not a unit test, is a pact testing
    testPathIgnorePatterns: [
      "<rootDir>/src/api.pact.spec.ts",
    ],

}