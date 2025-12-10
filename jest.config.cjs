/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],

  // No transforms – we run pure ESM
  transform: {},

  collectCoverage: true,
  collectCoverageFrom: [
    'src/*.js' // all top-level helpers
    // if you ever get a .internal folder: '!src/.internal/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testPathIgnorePatterns: ['/node_modules/']
};