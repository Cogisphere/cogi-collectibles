/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    silent: false,
    verbose: false,
    testMatch: ['**/tests/**/*.test.ts'],
    detectOpenHandles: true
  };