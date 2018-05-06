module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>src/support/setupTests.js',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  collectCoverageFrom: ['./src/**/*.{js,jsx}'],
};