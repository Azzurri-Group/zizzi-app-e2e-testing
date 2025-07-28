// jest.config.js
module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/e2e/**/*.e2e.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./src/e2e/support/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};