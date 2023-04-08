module.exports = {

    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    // This is not a unit test, is a pact testing
    
    setupTestFrameworkScriptFile: ['<rootDir>src/jest-setup.ts']


}