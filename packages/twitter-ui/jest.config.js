module.exports = {
  setupTestFrameworkScriptFile: ['<rootDir>src/jest-setup.ts'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],

}