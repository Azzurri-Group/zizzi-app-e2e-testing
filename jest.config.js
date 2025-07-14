/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/e2e/tests/**/*.e2e.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/e2e/support/setup.js'],
  verbose: true
};